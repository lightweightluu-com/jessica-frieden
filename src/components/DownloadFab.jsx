import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/cv.js';

// Floating Action Button (nur Mobile): CV als PDF herunterladen. Sitzt über der BottomNav.
export default function DownloadFab() {
  return (
    <motion.a
      href={profile.cvUrl}
      download
      aria-label="Lebenslauf als PDF herunterladen"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', delay: 0.8, stiffness: 320, damping: 22 }}
      whileTap={{ scale: 0.92 }}
      className="fixed right-4 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-ink shadow-card md:hidden"
    >
      <Download size={22} aria-hidden="true" />
    </motion.a>
  );
}
