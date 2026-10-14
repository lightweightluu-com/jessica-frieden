import { ArrowUpRight, Download } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SplitText from './fx/SplitText.jsx';
import Magnetic from './fx/Magnetic.jsx';
import { profile } from '../data/cv.js';

// Schluss-CTA (identisch zum Hero: Lebenslauf + Kontakt), danach die Fusszeile.
export default function Footer() {
  return (
    <footer id="kontakt" className="px-4 pt-16 pb-32 md:px-6 md:pt-24 md:pb-12">
      <div className="mx-auto max-w-5xl">
        <Reveal className="border-t border-line-strong pt-6">
          <p className="label text-accent">Kontakt</p>
          <SplitText as="h2" text="Lass uns sprechen." inView className="display mt-3 text-5xl font-semibold md:text-8xl" />
          <Magnetic className="mt-6">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex min-h-11 items-center gap-2 text-xl font-semibold underline decoration-line-strong underline-offset-8 transition-colors duration-150 hover:decoration-accent md:text-3xl"
          >
            {profile.email}
            <ArrowUpRight size={24} aria-hidden="true" className="transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          </Magnetic>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-muted">
            <a href={`tel:${profile.phoneHref}`} className="inline-flex min-h-11 items-center hover:text-accent">
              {profile.phone}
            </a>
            <span>{profile.location}</span>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-fg underline decoration-line-strong underline-offset-4 hover:decoration-accent"
            >
              <Download size={16} aria-hidden="true" /> Lebenslauf als PDF
            </a>
          </div>
        </Reveal>
        <p className="label mt-16">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
