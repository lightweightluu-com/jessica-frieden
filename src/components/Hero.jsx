import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';
import { profile } from '../data/cv.js';

const contacts = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: MapPin, label: profile.location },
];

export default function Hero() {
  return (
    <section id="start" className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-24 pb-28 md:px-6">
      {/* Dekorative, weiche Farbflächen im Hintergrund */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center md:flex-row md:justify-between md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 max-w-xl md:order-1"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Portfolio</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            {profile.name.split(' ')[0]} <span className="text-gradient">{profile.name.split(' ')[1]}</span>
          </h1>
          <p className="mt-4 text-lg font-semibold md:text-xl">{profile.title}</p>
          <p className="text-muted md:text-lg">{profile.subtitle}</p>

          <ul className="mt-6 flex flex-col items-center gap-2 text-sm md:items-start">
            {contacts.map(({ icon: I, label, href }) => (
              <li key={label}>
                {href ? (
                  <a href={href} className="inline-flex min-h-11 items-center gap-2 text-muted transition hover:text-accent">
                    <I size={18} aria-hidden="true" /> {label}
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 items-center gap-2 text-muted">
                    <I size={18} aria-hidden="true" /> {label}
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={profile.cvUrl}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-bg shadow-lg shadow-indigo-500/20 transition hover:opacity-90 active:scale-95"
            >
              <Download size={18} aria-hidden="true" /> Lebenslauf (PDF)
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 font-semibold transition hover:border-accent hover:text-accent active:scale-95"
            >
              <Mail size={18} aria-hidden="true" /> Kontakt
            </a>
          </div>
        </motion.div>

        {/* Platzhalter für das Profilbild: einfach durch <img src="/profil.jpg"> ersetzen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2"
        >
          <div className="rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 p-1.5 shadow-2xl shadow-indigo-500/25">
            <div
              role="img"
              aria-label="Platzhalter für Profilbild von Jessica Frieden"
              className="grid h-44 w-44 place-items-center rounded-full bg-surface text-5xl font-bold text-gradient sm:h-56 sm:w-56 md:h-72 md:w-72 md:text-7xl"
            >
              JF
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#profil"
        aria-label="Zum Profil scrollen"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-muted md:block"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="block">
          <ChevronDown aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}
