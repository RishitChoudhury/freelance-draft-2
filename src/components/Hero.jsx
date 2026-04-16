import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Magnetic pull dampening factor
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative overflow-hidden border border-dark-text dark:border-stark-white bg-transparent px-8 py-4 font-mono text-sm uppercase tracking-widest group pointer-events-auto"
      data-cursor-interactive
    >
      <span className="relative z-10 block text-dark-text dark:text-stark-white transition-colors duration-500 ease-out group-hover:text-light-bg dark:group-hover:text-void-black font-semibold">
        {children}
      </span>
      {/* Sweeping background snap fill */}
      <div className="absolute inset-0 z-0 bg-dark-text dark:bg-stark-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left" />
    </motion.button>
  );
};

const Hero = ({ booted }) => {
  const headline = "Revolutionize Your Business with AI Excellence";
  const words = headline.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.8 // Wait for boot up delay and badge reveal
      }
    }
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { ease: [0.33, 1, 0.68, 1], duration: 0.6 }
    }
  };

  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto w-full min-h-screen pt-32 pb-40">
      {/* Eyebrow Badge */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={booted ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dark-text/20 dark:border-stark-white/20 bg-light-bg/50 dark:bg-void-black/50 backdrop-blur-md mb-8 mt-12 pointer-events-auto"
      >
        <span className="animate-pulse-slow text-luminous-radium">✨</span>
        <span className="font-mono text-xs md:text-sm uppercase tracking-wide text-dark-text dark:text-stark-white">AI-Powered Business Transformation</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        className="font-sans font-bold text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] tracking-tight mb-8"
        variants={containerVariants}
        initial="hidden"
        animate={booted ? "visible" : "hidden"}
      >
        {words.map((word, i) => {
          const isAIExcellence = word === "AI" || word === "Excellence";
          return (
            <span key={i} className="inline-block overflow-hidden pb-3 mr-[0.25em]">
              <motion.span 
                variants={wordVariants}
                className={isAIExcellence ? "text-shimmer font-extrabold" : "text-dark-text dark:text-stark-white"}
                style={{ display: "inline-block" }}
              >
                {word}
              </motion.span>
            </span>
          )
        })}
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={booted ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="font-mono text-dark-ash dark:text-muted-ash max-w-2xl mx-auto mb-16 leading-relaxed flex flex-wrap justify-center pointer-events-auto"
      >
        LanceMart AI delivers cutting-edge agentic automation and strategic AI consultancy to transform your operations and unlock unprecedented growth.
      </motion.p>

      {/* Call to Action */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={booted ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
      >
        <MagneticButton>Initialize System</MagneticButton>
      </motion.div>
    </section>
  );
};

export default Hero;
