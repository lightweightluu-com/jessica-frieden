import Header from './components/Header.jsx';
import BottomNav from './components/BottomNav.jsx';
import DownloadFab from './components/DownloadFab.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Timeline from './components/Timeline.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import { useTheme } from './hooks/useTheme.js';
import { useActiveSection } from './hooks/useActiveSection.js';
import { sections } from './data/cv.js';

const sectionIds = sections.map((s) => s.id);

export default function App() {
  const { dark, toggle } = useTheme();
  const active = useActiveSection(sectionIds);

  return (
    <>
      <a href="#profil" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-bg">
        Zum Inhalt springen
      </a>
      <Header dark={dark} onToggleTheme={toggle} active={active} />
      <main>
        <Hero />
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
