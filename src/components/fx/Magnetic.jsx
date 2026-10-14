import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

// Element wird sanft vom Mauszeiger angezogen (nur Maus).
export default function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 16 });

  const onMove = (e) => {
    if (e.pointerType !== 'mouse' || reduced) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} style={{ x, y }} className={`inline-block ${className}`}>
      {children}
    </motion.div>
  );
}
