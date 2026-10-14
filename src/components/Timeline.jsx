import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { experience } from '../data/cv.js';

// Eine Station: Zeitraum (Mono) links, Inhalt rechts. Details klappen auf Tipp/Klick auf.
function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `details-${index}`;

  return (
    <li className="relative pb-12 pl-8 last:pb-0 md:grid md:grid-cols-[11rem_1fr] md:gap-8 md:pl-0">
      {/* Punkt auf der Linie: aktuelle Station gefüllt, frühere als Ring */}
      <span
        aria-hidden="true"
        className={`absolute top-1.5 left-0 h-3 w-3 rounded-full border-2 border-accent md:left-[11rem] md:ml-[-0.4rem] md:translate-x-[1rem] ${
          item.current ? 'bg-accent' : 'bg-bg'
        }`}
      />

      <Reveal from="left" className="md:pt-0">
        <p className="label text-fg">{item.period}</p>
        {item.current && <p className="label mt-1 text-accent">Aktuell</p>}
      </Reveal>

      <Reveal from="right" delay={0.05} className="mt-2 md:mt-0 md:pl-8">
        <h3 className="display text-2xl font-semibold md:text-3xl">{item.role}</h3>
        <p className="mt-0.5 text-muted">
          {item.company} · {item.place}
        </p>
        <p className="mt-3 max-w-xl leading-relaxed">{item.summary}</p>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-2 inline-flex min-h-11 cursor-pointer items-center gap-1 text-sm font-semibold text-accent"
        >
          {open ? 'Weniger anzeigen' : 'Details anzeigen'}
          <ChevronDown
            size={16}
            aria-hidden="true"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
              className="overflow-hidden"
            >
              <ul className="max-w-xl space-y-2 border-l-2 border-line pl-4 text-[15px] text-muted">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Schwerpunkte">
                {item.tags.map((t) => (
                  <li key={t} className="rounded-md border border-line-strong px-2 py-1 font-mono text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </li>
  );
}

export default function Timeline() {
  const ref = useRef(null);
  // Fortschrittslinie wächst mit dem Scrollen durch die Timeline.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 70%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 26 });

  return (
    <section id="werdegang" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading no="02" eyebrow="Erfahrung" title="Werdegang" />
        <div ref={ref} className="relative">
          <div aria-hidden="true" className="absolute top-2 bottom-2 left-[5px] w-px bg-line-strong md:left-[calc(11rem+1.1rem)]" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute top-2 bottom-2 left-[5px] w-px bg-accent md:left-[calc(11rem+1.1rem)]"
          />
          <ol>
            {experience.map((item, i) => (
              <TimelineItem key={item.company} item={item} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
