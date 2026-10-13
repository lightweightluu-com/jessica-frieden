import {
  Home, User, Briefcase, Sparkles, GraduationCap, ShieldCheck, Laptop, Layers, Workflow,
} from 'lucide-react';

// Zentrale Zuordnung Name → Icon, damit Daten (cv.js) nur Strings enthalten.
const icons = {
  home: Home, user: User, briefcase: Briefcase, sparkles: Sparkles, graduation: GraduationCap,
  shield: ShieldCheck, laptop: Laptop, layers: Layers, workflow: Workflow,
};

export default function Icon({ name, ...props }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp aria-hidden="true" {...props} />;
}
