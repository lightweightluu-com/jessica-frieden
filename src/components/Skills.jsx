import { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups } from '../data/cv.js';

// Antippbare Skill-Pill: markiert den gewählten Skill und blendet den Hinweistext der Gruppe ein.
function Pill({ label, selected, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`min-h-11 cursor-pointer rounded-full border px-4 text-sm font-medium transition-colors ${
        selected
          ? 'border-accent bg-accent text-bg'
          : 'border-line bg-bg text-fg hover:border-accent hover:text-accent'
      }`}
    >
      {label}
    </motion.button>
  );
}

function SkillCard({ group, index }) {
  const [selected, setSelected] = useState(null);

  return (
    <Reveal delay={index * 0.08}>
      <article className="group h-full rounded-2xl border border-line bg-surface p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-indigo-500/10 md:p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-110">
            <Icon name={group.icon} size={22} />
          </span>
          <h3 className="text-lg font-bold">{group.title}</h3>
        </div>
        <p className="mt-3 text-sm text-muted" aria-live="polite">
          {selected ? <><strong className="text-fg">{selected}</strong> – Teil von {group.title}.</> : group.note}
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
    <section id="skills" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Technologien" title="Skills & Tools" />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <SkillCard key={g.id} group={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
