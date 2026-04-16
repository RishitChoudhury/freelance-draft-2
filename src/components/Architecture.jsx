import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Architecture = () => {
  const { scrollYProgress } = useScroll();
  
  // Create parallax typography effect using the global scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="relative w-full py-40 md:py-64 overflow-hidden pointer-events-none border-t border-dark-text/10 dark:border-stark-white/10 bg-light-bg/50 dark:bg-void-black/50">
      
      {/* Background typographic noise */}
      <motion.div style={{ y: y1 }} className="absolute whitespace-nowrap top-[20%] left-[-10%] font-mono text-[15vw] font-bold text-dark-text/5 dark:text-stark-white/[0.015] uppercase tracking-tighter select-none pointer-events-none">
        AESTHETICS // LOGIC
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute whitespace-nowrap bottom-[10%] content-end right-[-10%] font-mono text-[15vw] font-bold text-dark-text/5 dark:text-stark-white/[0.015] uppercase tracking-tighter select-none pointer-events-none">
        LANCEMART_SYSTEM
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3 font-mono text-sm tracking-widest text-dark-text/60 dark:text-stark-white/60 pt-4 border-t border-dark-text/20 dark:border-stark-white/20">
          02 // EDITORIAL BRUTALISM
        </div>
        
        <div className="md:col-span-9">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-dark-text dark:text-stark-white font-normal mb-20"
          >
            We don't just build software. We engineer <i className="text-dark-ash dark:text-muted-ash">cognitive superiority</i> across domains.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-dark-ash dark:text-muted-ash text-lg md:text-xl leading-relaxed font-light"
            >
              The era of rigid state machines is over. LanceMart AI employs a unified framework for communication, combining probabilistic agents with determinist safety rails. By establishing one singular constraint—the Signal-to-Noise ratio—we maximize enterprise efficacy.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-dark-ash dark:text-muted-ash text-lg md:text-xl leading-relaxed font-light"
            >
              Every API call is a transaction of intent. When noise saturates the channel, operations fail. We surgically remove operational bloat, diagnosing every failure. Every workflow is refined to its absolute minimal expression of value.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
