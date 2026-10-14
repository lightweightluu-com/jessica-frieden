import { useRef } from 'react';
import {
  motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform,
} from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin, Phone } from 'lucide-react';
import SplitText from './fx/SplitText.jsx';
import { profile } from '../data/cv.js';

// Kerndaten als Mono-Liste – echte Fakten statt Deko.
const facts = [
  ['Rolle', 'ICT-Supporterin'],
  ['Bei', 'Swissgrid AG, Aarau'],
  ['Seit', '10.2024'],
  ['Fokus', 'IAM · Cybersecurity · Endpoint'],
  ['Sprachen', 'DE · EN'],
];

// Schwebende Tech-Chips rund ums Porträt: echte Skills, jeweils in eigener Parallax-Tiefe.
const chips = [
  { label: 'Microsoft Entra ID', pos: '-top-3 left-24 md:-top-4 md:-left-10', depth: 1.2, dur: 5.2, mobile: true },
  { label: 'Intune', pos: 'top-24 -right-3 md:top-14 md:-right-14', depth: 0.7, dur: 6.1, mobile: true },
  { label: 'ITIL', pos: '-bottom-2 left-2 md:bottom-10 md:-left-14', depth: 1.6, dur: 4.6, mobile: true },
  { label: 'Cybersecurity', pos: 'hidden md:block md:-bottom-4 md:right-0', depth: 0.9, dur: 5.7 },
];

const ease = [0.22, 1, 0.36, 1];

function Chip({ label, pos, depth, dur, k, sx, sy, scroll, ready }) {
  // Maus-Parallax + Scroll-Parallax überlagert, Tiefe skaliert beides
  const x = useTransform(sx, (v) => v * 26 * depth * k);
  const y = useTransform([sy, scroll], ([m, s]) => m * 20 * depth * k + s * -90 * depth * k);
  return (
    <motion.div style={{ x, y }} className={`absolute z-10 ${pos}`}>
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={ready ? { opacity: 1, scale: 1, y: k ? [0, -7, 0] : 0 } : {}}
        transition={{
          opacity: { duration: 0.4, delay: 0.7 },
          scale: { duration: 0.4, delay: 0.7, ease },
          y: { duration: dur, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="block whitespace-nowrap rounded-full border border-line-strong bg-bg/80 px-3 py-1.5 font-mono text-[11px] shadow-card backdrop-blur-md md:text-xs"
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

export default function Hero({ ready }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const k = reduced ? 0 : 1;

  // Scroll-Parallax: Text steigt langsamer, Porträt schneller, Riesenschrift hinten am langsamsten
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80 * k]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduced ? 1 : 0.1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90 * k]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200 * k]);

  // Maus-Parallax + Lichtkegel (nur Desktop/Maus)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18 });
  const sy = useSpring(my, { stiffness: 70, damping: 18 });
  const lightX = useMotionValue(-999);
  const lightY = useMotionValue(-999);
  const light = useMotionTemplate`radial-gradient(420px circle at ${lightX}px ${lightY}px, var(--c-accent-soft), transparent 70%)`;
  const imgX = useTransform(sx, (v) => v * -12 * k);
  const imgMouseY = useTransform(sy, (v) => v * -8 * k);

  const onMove = (e) => {
    if (e.pointerType !== 'mouse') return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX / window.innerWidth - 0.5) * 2);
    my.set((e.clientY / window.innerHeight - 0.5) * 2);
    lightX.set(e.clientX - r.left);
    lightY.set(e.clientY - r.top);
  };

  const rise = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, ease, delay },
  });

  return (
    <section
      id="start"
      ref={ref}
      onPointerMove={onMove}
      className="relative flex min-h-[100svh] items-center px-4 pt-24 pb-28 md:px-6 md:pt-28 md:pb-20"
    >
      {/* Riesenschrift im Hintergrund (Parallax, nur Kontur) */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY }}
        className="display text-outline pointer-events-none absolute top-16 -right-[4vw] -z-10 text-[38vw] leading-none font-semibold select-none md:top-10 md:text-[26rem]"
      >
        ICT
      </motion.div>
      <motion.div aria-hidden="true" style={{ background: light }} className="pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="order-2 md:order-1">
          <motion.p {...rise(0.05)} className="label">
            {profile.title} <span aria-hidden="true">·</span> {profile.subtitle}
          </motion.p>

          <h1 className="display mt-4 text-[2.9rem] leading-[1.02] font-semibold sm:text-6xl md:text-7xl">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true" className="block">
              <SplitText text="Jessica" by="char" play={ready} delay={0.1} />
            </span>
            <span aria-hidden="true" className="block">
              <SplitText text="Frieden" by="char" play={ready} delay={0.3} />
            </span>
          </h1>

          <motion.p {...rise(0.55)} className="mt-5 max-w-md text-lg leading-snug text-muted md:text-xl">
            Ich betreue die Enterprise-IT bei Swissgrid und erkläre Technik so, dass Anwenderinnen und Anwender damit
            arbeiten können.
          </motion.p>

          <motion.div {...rise(0.7)} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={profile.cvUrl}
              download
              className="inline-flex h-12 items-center gap-2 rounded-md bg-accent px-6 font-semibold text-accent-ink transition-[opacity,translate] duration-150 hover:-translate-y-0.5 hover:opacity-90 active:scale-95"
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

          <motion.div {...rise(0.85)} className="mt-8 flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted">
            <a href={`mailto:${profile.email}`} className="inline-flex min-h-11 items-center gap-2 hover:text-accent">
              <Mail size={16} aria-hidden="true" /> {profile.email}
            </a>
            <a href={`tel:${profile.phoneHref}`} className="inline-flex min-h-11 items-center gap-2 hover:text-accent">
              <Phone size={16} aria-hidden="true" /> {profile.phone}
            </a>
            <span className="inline-flex min-h-11 items-center gap-2">
              <MapPin size={16} aria-hidden="true" /> {profile.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: imgY }} className="order-1 flex flex-col items-start gap-8 md:order-2 md:items-center">
          <motion.div style={{ x: imgX, y: imgMouseY }} className="relative">
            {/* Porträt: Kreis öffnet sich beim Laden (clip-path), Ring mit Abstand statt Verlauf */}
            <div className="rounded-full border border-line-strong p-2">
              <motion.img
                src="/profil.jpg"
                alt="Porträt von Jessica Frieden"
                width="640"
                height="640"
                fetchpriority="high"
                initial={{ clipPath: 'circle(0% at 50% 50%)', scale: 1.25 }}
                animate={ready ? { clipPath: 'circle(75% at 50% 50%)', scale: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48 md:h-60 md:w-60"
              />
            </div>
            {chips.map((c) => (
              <Chip key={c.label} {...c} k={k} sx={sx} sy={sy} scroll={scrollYProgress} ready={ready} />
            ))}
          </motion.div>

          <dl className="hidden w-full max-w-xs font-mono text-[13px] leading-6 md:block">
            {facts.map(([key, v]) => (
              <div key={key} className="flex justify-between gap-4 border-b border-line py-1.5 first:border-t">
                <dt className="text-muted">{key}</dt>
                <dd className="text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Scroll-Hinweis (Desktop) */}
      <motion.a
        href="#profil"
        aria-label="Weiter zum Profil"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="label absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        Scrollen
        <span className="relative block h-10 w-px overflow-hidden bg-line-strong">
          <motion.span
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 bg-accent"
          />
        </span>
      </motion.a>
    </section>
  );
}
