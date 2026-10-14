import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/cv.js';

// Kerndaten als Mono-Liste – echte Fakten statt Deko.
const facts = [
  ['Rolle', 'ICT-Supporterin'],
  ['Bei', 'Swissgrid AG, Aarau'],
  ['Seit', '10.2024'],
  ['Fokus', 'IAM · Cybersecurity · Endpoint'],
  ['Sprachen', 'DE · EN'],
];

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="start" className="px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="label"
          >
            {profile.title} <span aria-hidden="true">·</span> {profile.subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.05 }}
            className="display mt-4 text-[2.75rem] leading-[1.02] font-semibold sm:text-6xl md:text-7xl"
          >
            Jessica <br className="hidden sm:block" />
            Frieden
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.1 }}
            className="mt-5 max-w-md text-lg leading-snug text-muted md:text-xl"
          >
            Ich betreue die Enterprise-IT bei Swissgrid und erkläre Technik so, dass Anwenderinnen und Anwender
            damit arbeiten können.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease, delay: 0.15 }}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <a
              href={profile.cvUrl}
              download
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 font-semibold text-accent-ink transition-opacity duration-150 hover:opacity-90 active:scale-95"
            >
              <Download size={18} aria-hidden="true" /> Lebenslauf als PDF
            </a>
            <a
              href="#kontakt"
              className="group inline-flex min-h-11 items-center gap-1.5 font-semibold underline decoration-line-strong underline-offset-4 transition-colors duration-150 hover:decoration-accent"
            >
              Kontakt aufnehmen
              <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-150 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="order-1 flex flex-col items-start gap-6 md:order-2"
        >
          {/* Profilbild: kreisrund, Haarlinien-Ring mit Abstand statt Verlauf */}
          <div className="rounded-full border border-line-strong p-2">
            <img
              src="/profil.jpg"
              alt="Porträt von Jessica Frieden"
              width="640"
              height="640"
              fetchpriority="high"
              className="h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44 md:h-56 md:w-56"
            />
          </div>

          <dl className="hidden w-full max-w-xs font-mono md:block text-[13px] leading-6">
            {facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-line py-1.5 first:border-t">
                <dt className="text-muted">{k}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 flex max-w-5xl flex-wrap gap-x-8 gap-y-1 text-sm text-muted">
        <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 hover:text-accent">
          <Mail size={16} aria-hidden="true" /> {profile.email}
        </a>
        <a href={`tel:${profile.phoneHref}`} className="inline-flex min-h-11 items-center gap-2 hover:text-accent">
          <Phone size={16} aria-hidden="true" /> {profile.phone}
        </a>
        <span className="inline-flex min-h-11 items-center gap-2">
          <MapPin size={16} aria-hidden="true" /> {profile.location}
        </span>
      </div>
    </section>
  );
}
