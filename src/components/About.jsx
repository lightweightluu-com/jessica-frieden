import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { profile } from '../data/cv.js';

export default function About() {
  return (
    <section id="profil" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading no="01" eyebrow="Über mich" title="Profil" />
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
          <Reveal>
            <p className="display text-2xl leading-snug md:text-[1.75rem]">{profile.about}</p>
          </Reveal>

          <div>
            {/* Kennzahlen als typografische Liste statt Karten */}
            <Reveal as="dl" className="border-t border-line-strong">
              {profile.facts.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                  <dt className="label">{f.label}</dt>
                  <dd className="display text-4xl font-semibold">{f.value}</dd>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.05} className="mt-8">
              <h3 className="label mb-3">Kernkompetenzen</h3>
              <ul className="space-y-1.5 text-[15px]">
                {profile.competencies.map((c) => (
                  <li key={c} className="flex gap-3">
                    <span aria-hidden="true" className="text-accent">→</span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
