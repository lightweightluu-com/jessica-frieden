import { useEffect } from 'react';
import Lenis from 'lenis';

// Weiches Scrollen (Lenis) auf Desktop. Auf Touch bleibt das native Scrollen aktiv,
// bei prefers-reduced-motion wird gar nichts verändert.
export function useSmoothScroll(enabled) {
  useEffect(() => {
    if (!enabled || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -72 } });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [enabled]);
}
