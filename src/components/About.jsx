import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/cv.js';

export default function About() {
  return (
    <section id="profil" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Über mich" title="Profil" />
        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-lg leading-relaxed text-muted">{profile.about}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Kernkompetenzen">
              {profile.competencies.map((c) => (
                <li key={c} className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="grid grid-cols-3 gap-3 md:col-span-2 md:grid-cols-1">
            {profile.facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-line bg-surface p-4 text-center md:p-6 md:text-left">
                <p className="text-3xl font-extrabold text-gradient md:text-4xl">{f.value}</p>
                <p className="mt-1 text-xs text-muted md:text-sm">{f.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
