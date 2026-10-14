import Reveal from './Reveal.jsx';

// Sektionskopf: Mono-Nummer + Serif-Titel, mit Haarlinie darüber (Editorial-Stil).
export default function SectionHeading({ no, eyebrow, title }) {
  return (
    <Reveal className="mb-10 border-t border-line-strong pt-4 md:mb-14">
      <p className="label flex items-baseline gap-3">
        <span className="text-accent">{no}</span>
        <span>{eyebrow}</span>
      </p>
      <h2 className="display mt-3 text-4xl font-semibold md:text-5xl">{title}</h2>
    </Reveal>
  );
}
