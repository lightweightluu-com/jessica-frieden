import Icon from './Icon.jsx';
import { sections } from '../data/cv.js';

// Mobile Tab-Leiste (nur < md): 5 Ziele, je mind. 44 px hoch, berücksichtigt Safe Area.
export default function BottomNav({ active }) {
  return (
    <nav
      aria-label="Hauptnavigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto flex max-w-md justify-around">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className="flex-1">
              <a
                href={`#${s.id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-0.5 text-[11px] font-medium transition active:scale-95 ${
                  isActive ? 'text-accent' : 'text-muted'
                }`}
              >
                <span className={`rounded-full px-4 py-1 transition ${isActive ? 'bg-accent-soft' : ''}`}>
                  <Icon name={s.icon} size={20} />
                </span>
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
