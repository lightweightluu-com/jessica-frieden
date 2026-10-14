import { useRef } from 'react';
import {
  motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity,
} from 'framer-motion';

const wrap = (min, max, v) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

// Endloses Laufband. Scrollgeschwindigkeit beschleunigt es und kehrt die Richtung beim Hochscrollen um.
export default function Marquee({ items, speed = 0.45, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const reduced = useReducedMotion();
  const base = useMotionValue(0);
  const dir = useRef(1);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [-1500, 0, 1500], [-1.5, 0, 1.5], { clamp: false });
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (!inView || reduced) return;
    const b = boost.get();
    if (b < -0.05) dir.current = -1;
    else if (b > 0.05) dir.current = 1;
    base.set(base.get() + dir.current * speed * (delta / 1000) * (1 + Math.abs(b)));
  });

  const row = (hidden) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((it) => (
        <li key={it} className="flex items-center">
          <span className="px-5 md:px-8">{it}</span>
          <span aria-hidden="true" className="font-mono text-accent">/</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div ref={ref} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div style={{ x }} className="flex w-max">
        {row(false)}
        {row(true)}
      </motion.div>
    </div>
  );
}
