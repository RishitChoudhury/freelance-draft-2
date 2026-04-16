import React from 'react';
import { motion } from 'framer-motion';
import LiquidMetalGlobe from './LiquidMetalGlobe';

const Hero = () => {
  return (
    <section id="miosa" className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 text-center md:px-8 md:pt-28">
      <motion.div
        layoutId="lancemart-liquid-globe"
        transition={{ type: 'spring', stiffness: 115, damping: 22 }}
        className="mx-auto mb-10 w-fit"
      >
        <LiquidMetalGlobe className="h-44 w-44 md:h-52 md:w-52 lg:h-64 lg:w-64" spinSpeed={0.22} />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.18 }}
        className="space-y-7"
      >
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-dark-ash md:text-sm lg:text-[0.78rem]">LANCEMART AI</p>
        <h1 className="text-[clamp(2.45rem,8.6vw,6.25rem)] font-extrabold leading-[0.94] tracking-tight text-dark-text lg:text-[clamp(3.2rem,5.4vw,5rem)]">
          Lancemart <span className="font-serif text-[0.95em] font-semibold italic tracking-normal">AI</span>
        </h1>
        <h2 className="font-mono text-[0.82rem] uppercase tracking-[0.22em] text-dark-ash md:text-[1.05rem] lg:text-[0.92rem]">Signal Through the Noise</h2>
        <p className="mx-auto max-w-3xl text-[1.22rem] leading-relaxed text-dark-ash md:text-[2.15rem] md:leading-relaxed lg:text-[1.7rem]">
          The architecture for building businesses where humans and AI agents collaborate clearly, efficiently, and without wasted effort.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="mt-11 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#how-it-works"
          className="inline-flex rounded-full bg-dark-text px-8 py-3.5 text-sm font-medium text-stark-white shadow-[0_10px_25px_rgba(17,17,17,0.28)] transition-transform duration-200 hover:-translate-y-0.5 md:text-base lg:text-[0.92rem]"
        >
          How It Works
        </a>
        <a
          href="#framework"
          className="inline-flex rounded-full border border-dark-text/20 bg-light-bg px-8 py-3.5 text-sm font-medium text-dark-text transition-colors duration-200 hover:bg-dark-text/5 md:text-base lg:text-[0.92rem]"
        >
          Read the Paper
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
