import React from 'react';
import { motion } from 'framer-motion';

const MetricCard = ({ rule, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className="border border-dark-text/10 dark:border-stark-white/10 p-8 md:p-12 flex flex-col relative group overflow-hidden pointer-events-auto bg-light-bg/80 dark:bg-void-black/80 backdrop-blur-xl transition-colors duration-500 hover:bg-dark-text/[0.03] dark:hover:bg-stark-white/[0.03]"
    data-cursor-interactive
  >
    {/* Subtle hover reveal line */}
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-light-radium dark:via-luminous-radium to-transparent transform -translate-x-[101%] group-hover:translate-x-[101%] transition-transform duration-1000 ease-out" />
    
    <span className="font-mono text-light-cyan dark:text-electric-cyan text-xs tracking-widest mb-16">{rule}</span>
    <h3 className="font-serif text-3xl md:text-4xl text-dark-text dark:text-stark-white mb-6 tracking-wide">{title}</h3>
    <p className="font-sans text-dark-ash dark:text-muted-ash leading-relaxed max-w-sm mt-auto">
      {description}
    </p>
  </motion.div>
);

const Metrics = () => {
  return (
    <section className="w-full relative px-6 md:px-12 py-32 pointer-events-none z-10 border-t border-dark-text/10 dark:border-stark-white/10">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="block font-mono text-dark-text/50 dark:text-stark-white/50 text-sm tracking-widest mb-4 uppercase">01 // The Framework</span>
          <h2 className="font-serif font-normal text-[clamp(2rem,6vw,4.5rem)] leading-tight tracking-tight text-dark-text dark:text-stark-white max-w-5xl">
            One root metric: <br />
            <span className="text-shimmer italic inline-block mt-2">Signal-to-Noise Ratio.</span>
          </h2>
        </motion.div>

        {/* Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-dark-text/10 dark:bg-stark-white/10 p-[1px]">
          <MetricCard 
             rule="RULE 01"
             title="Clarity Over Volume"
             description="Every operation is mathematically optimized. Extraneous processes are eliminated, leaving pure operational throughput."
             delay={0.1}
          />
          <MetricCard 
             rule="RULE 02"
             title="Frictionless Scaling"
             description="A unified data ingestion architecture ensures your growth isn't constrained by legacy entanglement."
             delay={0.2}
          />
          <MetricCard 
             rule="RULE 03"
             title="Agentic Supremacy"
             description="Autonomous sub-routines dictate the flow of execution, reducing human intervention to near zero."
             delay={0.3}
          />
          <MetricCard 
             rule="RULE 04"
             title="Total Visibility"
             description="Every failure diagnosed. Every latency measured. Zero blind spots in the cognitive infrastructure."
             delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
