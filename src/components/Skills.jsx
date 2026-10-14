import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/cv.js';

// Antippbare Skill-Pill: Auswahl füllt die Pill (Farbe + Haken-Punkt, nicht nur Farbe).
function Pill({ label, selected, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
      className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-150 ${
        selected
          ? 'border-accent bg-accent text-accent-ink'
          : 'border-line-strong hover:border-accent hover:bg-accent-soft hover:text-accent'
      }`}
    >
      {selected && <span aria-hidden="true">✓</span>}
      {label}
    </motion.button>
  );
}

// Eine Skill-Gruppe als Karte: Hover hebt sie 8 px an (Schatten wächst), Bild/Inhalt bleibt im Grid.
function SkillCard({ group, no, index }) {
  const [selected, setSelected] = useState(null);

  return (
    <Reveal delay={index * 0.05}>
      <article className="h-full rounded-xl border border-line bg-raised p-5 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-2 hover:shadow-card md:p-6 [@media(hover:none)]:hover:translate-y-0">
        <p className="label text-accent">{no}</p>
        <h3 className="display mt-1 text-2xl font-semibold">{group.title}</h3>
        <p className="mt-2 min-h-12 text-sm text-muted" aria-live="polite">
          {selected ? (
            <>
              <strong className="font-semibold text-fg">{selected}</strong> gehört zu {group.title}.
            </>
          ) : (
            group.note
          )}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {group.skills.map((s) => (
            <li key={s}>
              <Pill label={s} selected={selected === s} onSelect={() => setSelected(selected === s ? null : s)} />
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading no="03" eyebrow="Technologien" title="Skills & Tools" />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.id} group={g} no={`0${i + 1}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
