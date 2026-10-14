import { useEffect } from 'react';
import { motion } from 'framer-motion';

// Kurzer Vorhang beim ersten Besuch (≈ 1,3 s, per Tipp überspringbar): Monogramm, Linie, dann hebt sich der Vorhang.
export default function Intro({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1100);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      role="presentation"
      onClick={onDone}
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] grid cursor-pointer place-items-center bg-[#0d1424] text-[#ff8d5e]"
    >
      <div className="text-center">
        <div className="overflow-hidden pb-2">
          <motion.p
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="display text-7xl font-semibold tracking-tight md:text-8xl"
          >
            JF
          </motion.p>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mx-auto mt-2 h-px w-24 origin-left bg-[#ff8d5e]"
        />
      </div>
    </motion.div>
  );
}
