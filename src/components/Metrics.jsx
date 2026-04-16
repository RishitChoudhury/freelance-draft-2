import React from 'react';
import { motion } from 'framer-motion';

const offerings = [
  {
    title: 'Lancemart AI Platform',
    description: 'Build and manage your operational system',
  },
  {
    title: 'Lancemart Agent',
    description: 'AI agent workflows powered by Signal Theory',
  },
  {
    title: 'Lancemart Studio',
    description: 'We build AI-first operating systems for your team',
  },
];

const OfferingCard = ({ title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.8, delay }}
    className="rounded-3xl border border-dark-text/10 bg-light-bg/85 p-6 text-center transition-colors duration-300 hover:bg-light-bg md:p-7"
  >
    <h3 className="font-sans text-[1.55rem] font-semibold text-dark-text md:text-2xl lg:text-[1.42rem]">{title}</h3>
    <p className="mt-3 text-[1.02rem] leading-relaxed text-dark-ash md:text-lg lg:text-[1rem]">{description}</p>
    <span className="mt-8 inline-flex text-xl text-dark-ash md:text-2xl lg:text-xl">↗</span>
  </motion.div>
);

const Metrics = () => {
  return (
    <section id="optimal-systems" className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
      <div id="framework" className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="font-mono text-xs uppercase tracking-[0.34em] text-dark-ash md:text-sm"
        >
          What We're Building
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-[clamp(1.95rem,8.4vw,4rem)] font-extrabold leading-[1.02] tracking-tight text-dark-text lg:text-[clamp(2.3rem,4.9vw,3.3rem)]"
        >
          Machine Intelligence
          <span className="block font-serif text-[0.9em] font-semibold italic tracking-normal">Lancemart AI Architecture</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-relaxed text-dark-ash md:text-[1.25rem] lg:text-[1.1rem]"
        >
          Lancemart AI is a platform for building modern operating systems for companies where agents and humans work side by side.
        </motion.p>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="mt-14 rounded-[2rem] border border-dark-text/10 bg-light-bg/90 p-7 md:p-10"
      >
        <div className="space-y-5 text-[0.98rem] leading-relaxed text-dark-ash md:text-[1.16rem] lg:text-[1.06rem]">
          <p>
            Most companies are drowning in noise. Messages everywhere. Tools that don't talk to each other. AI that doesn't understand context.
          </p>
          <p>
            A Lancemart AI system fixes this. Every signal flows through the right channel, at the right complexity, with the right feedback loop.
          </p>
          <p className="font-semibold text-dark-text">
            We built the theory. We built the agent. Now we're building the platform to make it simple for every business.
          </p>
        </div>
      </motion.article>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {offerings.map((card, index) => (
          <OfferingCard key={card.title} title={card.title} description={card.description} delay={0.08 * index} />
        ))}
      </div>
    </section>
  );
};

export default Metrics;
