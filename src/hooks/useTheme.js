import { useCallback, useEffect, useState } from 'react';

// Light/Dark-Umschaltung. Startwert kommt aus dem Inline-Skript in index.html
// (gespeicherte Wahl oder System-Einstellung); die Wahl wird in localStorage gemerkt.
export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    const meta = document.querySelectorAll('meta[name="theme-color"]');
    meta.forEach((m) => m.setAttribute('content', dark ? '#0f172a' : '#f8fafc'));
  }, [dark]);

  const toggle = useCallback(() => {
    setDark((d) => {
      try { localStorage.setItem('theme', d ? 'light' : 'dark'); } catch { /* privat */ }
      return !d;
    });
  }, []);

  return { dark, toggle };
}
