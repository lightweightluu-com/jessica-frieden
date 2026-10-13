import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    </Reveal>
  );
}
