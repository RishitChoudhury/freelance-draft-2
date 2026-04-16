import React from 'react';
import { motion } from 'framer-motion';
import LiquidMetalGlobe from './LiquidMetalGlobe';

const LoaderGlobe = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeInOut' } }}
      aria-hidden="true"
    >
      <motion.div layoutId="lancemart-liquid-globe" transition={{ type: 'spring', stiffness: 115, damping: 22 }}>
        <LiquidMetalGlobe className="h-80 w-80" spinSpeed={0.28} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600"
      >
        [ INITIALIZING LANCEMART AI STRUCTURE ]
      </motion.p>
    </motion.div>
  );
};

export default LoaderGlobe;
