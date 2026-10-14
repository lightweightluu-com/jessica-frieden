import { useEffect, useRef } from 'react';
import { animate, useReducedMotion } from 'framer-motion';

// Zählt beim Einblenden von 0 auf den Zielwert (einmalig). Eigener IntersectionObserver pro Zähler
// (framers geteilter useInView-Observer löste beim mittleren Zähler nicht zuverlässig aus) und
// direktes DOM-Update, damit kein Re-Render den Zähler anhalten kann.
export default function CountUp({ to, suffix = '', duration = 1.4 }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const final = `${to}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      el.textContent = final;
      return;
    }
    let controls;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        controls = animate(0, to, {
          duration,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => { el.textContent = `${Math.round(v)}${suffix}`; },
          onComplete: () => { el.textContent = final; },
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      controls?.stop();
      el.textContent = final; // nie auf einem Zwischenwert stehen bleiben
    };
  }, [reduced, to, suffix, duration, final]);

  return (
    <span ref={ref} className="tabular-nums">
      {`0${suffix}`}
    </span>
  );
}
