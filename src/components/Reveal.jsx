import { motion } from 'framer-motion';

// Blendet Inhalt beim Scrollen weich ein (einmalig). `from` steuert die Richtung.
export default function Reveal({ children, delay = 0, from = 'bottom', className = '', as = 'div' }) {
  const offset = { bottom: { y: 24 }, left: { x: -32 }, right: { x: 32 } }[from];
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
