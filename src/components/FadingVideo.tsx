import { useEffect, useRef, useState, type CSSProperties } from "react";

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: CSSProperties;
}

/**
 * Ambient background video that fades in on load and crossfades near its
 * own end (fade out -> loop/advance -> fade in), so a loop never hard-cuts.
 * With no src (nothing hotlinked, nothing fabricated), it renders the
 * drifting "aurora" gradient from index.css instead — see content.ts's
 * `media` block for how to swap in real trip footage later.
 */
export function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const [index, setIndex] = useState(0);

  const sources = Array.isArray(src) ? src : [src];
  const hasSrc = Boolean(sources.length > 0 && sources[0]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !hasSrc) return;

    const fade = (from: number, to: number, duration: number) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        el.style.opacity = String(from + (to - from) * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const onLoadedData = () => fade(0, 1, 500);
    const onTimeUpdate = () => {
      if (!el.duration || Number.isNaN(el.duration)) return;
      const remaining = el.duration - el.currentTime;
      if (remaining <= 0.55 && remaining > 0) fade(1, 0, 550);
    };
    const onEnded = () => {
      if (sources.length > 1) {
        setIndex((i) => (i + 1) % sources.length);
      } else {
        el.currentTime = 0;
        el.play().catch(() => {});
        fade(0, 1, 500);
      }
    };

    el.addEventListener("loadeddata", onLoadedData);
    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("loadeddata", onLoadedData);
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("ended", onEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [index, hasSrc, sources.length]);

  if (!hasSrc) {
    return (
      <div className={className} style={style}>
        <div className="aurora-fallback">
          <div className="aurora-fallback__orb aurora-fallback__orb--a" />
          <div className="aurora-fallback__orb aurora-fallback__orb--b" />
          <div className="aurora-fallback__orb aurora-fallback__orb--c" />
        </div>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      key={sources[index]}
      className={className}
      style={{ opacity: 0, ...style }}
      src={sources[index]}
      autoPlay
      muted
      playsInline
      preload="auto"
    />
  );
}
