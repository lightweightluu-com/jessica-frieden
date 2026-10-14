import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal.jsx';
import SplitText from './fx/SplitText.jsx';

// Sektionskopf: Mono-Nummer + Serif-Titel (Wort-Maske beim Einblenden), dahinter eine riesige Konturzahl mit Parallax.
export default function SectionHeading({ no, eyebrow, title }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 60, reduced ? 0 : -60]);

  return (
    <div ref={ref} className="relative mb-10 md:mb-14">
      <motion.span
        aria-hidden="true"
        style={{ y }}
        className="display text-outline pointer-events-none absolute -top-6 right-0 -z-10 text-[7rem] leading-none font-semibold select-none md:-top-10 md:text-[11rem]"
      >
        {no}
      </motion.span>
      <Reveal className="border-t border-line-strong pt-4">
        <p className="label flex items-baseline gap-3">
          <span className="text-accent">{no}</span>
          <span>{eyebrow}</span>
        </p>
      </Reveal>
      <SplitText as="h2" text={title} inView className="display mt-3 text-4xl font-semibold md:text-5xl" />
    </div>
  );
}
