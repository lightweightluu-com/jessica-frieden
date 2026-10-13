import { Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';
import { profile, sections } from '../data/cv.js';

// Obere Leiste: Desktop mit Textnavigation, Mobile nur Logo + Aktionen
// (die Hauptnavigation sitzt auf dem Smartphone unten in der BottomNav).
export default function Header({ dark, onToggleTheme, active }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-bg/80 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#start" className="text-lg font-bold tracking-tight">
          J<span className="text-gradient">F</span>
          <span className="sr-only"> – {profile.name}, zum Seitenanfang</span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === s.id ? 'bg-accent-soft text-accent' : 'text-muted hover:text-fg'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvUrl}
            download
            className="hidden h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-bg transition hover:opacity-90 active:scale-95 md:inline-flex"
          >
            <Download size={18} aria-hidden="true" /> CV
          </a>
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
