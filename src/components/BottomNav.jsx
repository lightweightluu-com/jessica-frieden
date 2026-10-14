import Icon from './Icon.jsx';
import { sections } from '../data/cv.js';

// Mobile Tab-Leiste (nur < md): 5 Ziele, je mind. 44 px hoch, berücksichtigt Safe Area.
// Aktiv = Akzentlinie oben + Akzentfarbe (nicht nur Farbe).
export default function BottomNav({ active }) {
  return (
    <nav
      aria-label="Hauptnavigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto flex max-w-md justify-around">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="flex-1">
              <a
                href={`#${s.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`relative flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium transition-colors duration-150 active:scale-95 ${
                  isActive ? 'text-accent' : 'text-muted'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-0 h-0.5 w-8 rounded-full bg-accent transition-opacity duration-150 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <Icon name={s.icon} size={20} />
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
