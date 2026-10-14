import { Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle.jsx';
import { profile, sections } from '../data/cv.js';

// Obere Leiste: Desktop mit Textnavigation, Mobile nur Wortmarke + Aktionen
// (die Hauptnavigation sitzt auf dem Smartphone unten in der BottomNav).
export default function Header({ dark, onToggleTheme, active }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#start" className="display text-xl font-semibold">
          J. Frieden
          <span className="sr-only"> – zum Seitenanfang</span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? 'true' : undefined}
              className={`label border-b-2 py-1 transition-colors duration-150 ${
                active === s.id ? 'border-accent text-fg' : 'border-transparent hover:text-fg'
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
            className="hidden h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-accent-ink transition-opacity duration-150 hover:opacity-90 active:scale-95 md:inline-flex"
          >
            <Download size={16} aria-hidden="true" /> CV (PDF)
          </a>
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
