import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import BottomNav from './components/BottomNav.jsx';
import DownloadFab from './components/DownloadFab.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Timeline from './components/Timeline.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import Intro from './components/fx/Intro.jsx';
import Marquee from './components/fx/Marquee.jsx';
import ScrollProgress from './components/fx/ScrollProgress.jsx';
import { useSmoothScroll } from './components/fx/useSmoothScroll.js';
import { useTheme } from './hooks/useTheme.js';
import { useActiveSection } from './hooks/useActiveSection.js';
import { sections, skillGroups } from './data/cv.js';

const sectionIds = sections.map((s) => s.id);
const allSkills = skillGroups.flatMap((g) => g.skills);

// Intro nur beim ersten Besuch pro Sitzung und nicht bei reduzierter Bewegung.
function shouldShowIntro() {
  try {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return !sessionStorage.getItem('intro-seen');
  } catch {
    return false;
  }
}

export default function App() {
  const { dark, toggle } = useTheme();
  const active = useActiveSection(sectionIds);
  const [intro, setIntro] = useState(shouldShowIntro);
  const ready = !intro;

  // Scrollen sperren, solange der Vorhang steht
  useEffect(() => {
    document.documentElement.classList.toggle('intro-lock', intro);
    return () => document.documentElement.classList.remove('intro-lock');
  }, [intro]);

  const endIntro = useCallback(() => {
    try { sessionStorage.setItem('intro-seen', '1'); } catch { /* privat */ }
    setIntro(false);
  }, []);

  useSmoothScroll(ready);

  return (
    <>
      <AnimatePresence>{intro && <Intro onDone={endIntro} />}</AnimatePresence>
      <ScrollProgress />
      <a href="#profil" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink">
        Zum Inhalt springen
      </a>
      <Header dark={dark} onToggleTheme={toggle} active={active} />
      <main>
        <Hero ready={ready} />
        {/* Laufband mit allen Technologien – reagiert auf die Scrollgeschwindigkeit */}
        <Marquee items={allSkills} className="display border-y border-line py-5 text-3xl font-semibold md:py-7 md:text-5xl" />
        <About />
        <Timeline />
        <Skills />
        <Education />
      </main>
      <Footer />
      <DownloadFab />
      <BottomNav active={active} />
    </>
  );
}
