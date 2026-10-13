import { profile } from '../data/cv.js';

export default function Footer() {
  return (
    <footer className="px-4 pt-10 pb-32 text-center text-sm text-muted md:px-6 md:pb-10">
      <p>
        © {new Date().getFullYear()} {profile.name} ·{' '}
        <a href={`mailto:${profile.email}`} className="underline underline-offset-4 hover:text-accent">
          {profile.email}
        </a>
      </p>
    </footer>
  );
}
