import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { education, training, languages } from '../data/cv.js';

export default function Education() {
  return (
    <section id="ausbildung" className="bg-surface/50 px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Bildung" title="Ausbildung" />

        {education.map((e) => (
          <Reveal key={e.school} className="rounded-2xl border border-line bg-surface p-5 md:p-6">
            <p className="text-sm font-semibold text-accent">{e.period}</p>
            <h3 className="mt-1 text-xl font-bold">{e.degree}</h3>
            <p className="text-muted">{e.school}</p>
            <p className="mt-3 text-[15px]">{e.text}</p>
          </Reveal>
        ))}

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <h3 className="mb-4 text-lg font-bold">Weiterbildungen</h3>
            <ul className="space-y-3">
              {training.map((t) => (
                <li key={t.title} className="rounded-xl border border-line bg-surface p-4">
                  <p className="text-xs font-semibold text-accent">{t.period}</p>
                  <p className="font-semibold">{t.title}</p>
                  <p className="text-sm text-muted">{t.detail}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="mb-4 text-lg font-bold">Sprachen</h3>
            <ul className="space-y-3">
              {languages.map((l) => (
                <li key={l.name} className="flex items-baseline justify-between rounded-xl border border-line bg-surface p-4">
                  <span className="font-semibold">{l.name}</span>
                  <span className="text-sm text-muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
