import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { education, training, languages } from '../data/cv.js';

// Zeilen-Liste im Mono/Serif-Stil: Zeitraum links, Titel + Detail rechts.
function Row({ period, title, sub, text, delay = 0 }) {
  return (
    <Reveal delay={delay} className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-8">
      <p className="label text-fg">{period}</p>
      <div>
        <h3 className="display text-xl font-semibold md:text-2xl">{title}</h3>
        {sub && <p className="text-muted">{sub}</p>}
        {text && <p className="mt-2 max-w-xl text-[15px] text-muted">{text}</p>}
      </div>
    </Reveal>
  );
}

export default function Education() {
  return (
    <section id="ausbildung" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading no="04" eyebrow="Bildung" title="Ausbildung" />

        <div className="border-t border-line">
          {education.map((e) => (
            <Row key={e.school} period={e.period} title={e.degree} sub={e.school} text={e.text} />
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="label mb-1">Weiterbildungen</h3>
        </Reveal>
        <div className="border-t border-line">
          {training.map((t, i) => (
            <Row key={t.title} period={t.period} title={t.title} text={t.detail} delay={i * 0.05} />
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="label mb-3">Sprachen</h3>
          <ul className="flex flex-wrap gap-x-10 gap-y-2">
            {languages.map((l) => (
              <li key={l.name}>
                <span className="display text-2xl font-semibold">{l.name}</span>{' '}
                <span className="text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
