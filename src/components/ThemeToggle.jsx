import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={dark ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'}
      className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-line-strong text-fg transition-colors duration-150 hover:border-accent hover:text-accent active:scale-95"
    >
      {dark ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
    </button>
  );
}
