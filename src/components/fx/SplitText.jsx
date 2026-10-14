import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// Text wird Wort für Wort (oder Zeichen für Zeichen) aus einer Maske nach oben "hochgezogen".
// `inView`: startet beim Scrollen; sonst über `play` (z. B. nach dem Intro).
// Screenreader lesen den vollständigen Text (aria-label), die Einzelteile sind versteckt.
export default function SplitText({
  text,
  as: Tag = 'span',
  by = 'word',
  className = '',
  delay = 0,
  stagger = by === 'char' ? 0.035 : 0.06,
  inView = false,
  play = true,
}) {
  const parts = by === 'char' ? [...text] : text.split(' ');
  // Sichtbarkeit am äusseren Element messen (die Wörter selbst sind durch die Maske beschnitten)
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: '-40px' });
  const go = inView ? seen : play;
  const trigger = { animate: go ? { y: 0 } : {} };

  return (
    <Tag ref={ref} aria-label={text} className={className}>
      {parts.map((p, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pt-[0.08em] pb-[0.14em] -mt-[0.08em] -mb-[0.14em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '115%' }}
            {...trigger}
            transition={{ duration: 0.6, ease, delay: delay + i * stagger }}
          >
            {p}
          </motion.span>
          {by === 'word' && i < parts.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
