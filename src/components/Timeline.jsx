import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { experience } from '../data/cv.js';

// Karte eines Stationseintrags; Details lassen sich auf Tipp/Klick ausklappen.
function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  // Auf Desktop wechseln die Karten die Seite, auf Mobile fliegen alle von rechts ein.
  const fromSide = index % 2 === 0 ? 'left' : 'right';
  const panelId = `details-${index}`;

  return (
    <li className="relative pl-12 md:grid md:grid-cols-2 md:gap-14 md:pl-0">
      {/* Punkt auf der Linie */}
      <span
        aria-hidden="true"
        className={`absolute top-6 left-[11px] z-10 h-4 w-4 rounded-full border-4 border-bg md:left-1/2 md:-ml-2 ${
          item.current ? 'bg-accent ring-4 ring-accent/25' : 'bg-accent-2'
        }`}
      />
      <Reveal
        from={fromSide}
        className={`rounded-2xl border border-line bg-surface p-5 shadow-sm transition hover:border-accent/60 hover:shadow-md md:p-6 ${
          index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-accent">{item.period}</span>
          {item.current && (
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-semibold text-accent">Aktuell</span>
          )}
        </div>
        <h3 className="mt-1 text-xl font-bold">{item.role}</h3>
        <p className="text-muted">
          {item.company} · {item.place}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed">{item.summary}</p>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-1 text-sm font-semibold text-accent"
        >
          {open ? 'Weniger anzeigen' : 'Details anzeigen'}
          <ChevronDown size={16} aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="list-disc space-y-1.5 pl-5 text-[15px] text-muted marker:text-accent">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Schwerpunkte">
                {item.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-muted">
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <section id="werdegang" className="bg-surface/50 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Erfahrung" title="Werdegang" />
        <div ref={ref} className="relative">
          {/* Hintergrundlinie + animierte Fortschrittslinie */}
          <div aria-hidden="true" className="absolute top-0 bottom-0 left-[18px] w-0.5 bg-line md:left-1/2 md:-ml-px" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute top-0 bottom-0 left-[18px] w-0.5 bg-gradient-to-b from-accent to-accent-2 md:left-1/2 md:-ml-px"
          />
          <ol className="space-y-10 md:space-y-14">
            {experience.map((item, i) => (
              <TimelineItem key={item.company} item={item} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
