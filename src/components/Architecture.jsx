import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Bot, RefreshCw, Workflow } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Deep Analysis',
    description:
      "Before building anything, map your team, handoffs, and hidden failure points. Clarity starts with understanding where signal gets lost.",
    icon: BarChart3,
  },
  {
    number: '02',
    title: 'Define Your Workflows',
    description:
      "Turn implicit habits into explicit systems. Establish shared language, responsibilities, and feedback loops that everyone can trust.",
    icon: Workflow,
  },
  {
    number: '03',
    title: 'Deploy Context-Aware Agents',
    description:
      "Introduce agents where they create leverage, not noise. Every automation is tied to ownership, quality checks, and human judgment.",
    icon: Bot,
  },
  {
    number: '04',
    title: 'Continuously Refine',
    description:
      "Measure bottlenecks, learn from edge cases, and improve the system over time so performance compounds with every cycle.",
    icon: RefreshCw,
  },
];

const Architecture = () => {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 pb-24 pt-8 md:px-8">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.34em] text-dark-ash md:text-sm">The Process</p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto mt-5 max-w-5xl text-[clamp(1.85rem,7.6vw,3.8rem)] font-extrabold leading-[1.03] tracking-tight text-dark-text lg:text-[clamp(2.1rem,4.8vw,3.15rem)]"
        >
          How You Build a
          <span className="ml-3 inline-block font-serif text-[0.95em] font-semibold italic tracking-normal">Lancemart AI System</span>
        </motion.h2>
        <p className="mx-auto mt-6 max-w-3xl text-[1.02rem] leading-relaxed text-dark-ash md:text-[1.22rem] lg:text-[1.08rem]">
          It's simpler than you think, but you can't skip steps. Every business that jumps straight to AI agents without foundational work ends up with more noise, not less.
        </p>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, delay: 0.08 }}
        className="mt-10 rounded-[2rem] border border-dark-text/10 bg-light-bg/90 p-6 text-center md:p-9"
      >
        <p className="mx-auto max-w-4xl text-[0.97rem] leading-relaxed text-dark-ash md:text-[1.14rem] lg:text-[1.04rem]">
          <span className="font-semibold text-dark-text">The truth is:</span> most businesses aren't ready for autonomous AI because workflows aren't defined, teams lack the right tools, and communication channels are full of noise.
        </p>
      </motion.article>

      <div className="mt-10 space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-[2rem] border border-dark-text/10 bg-light-bg/90 p-6 md:p-9"
            >
              <div className="flex flex-col gap-7 md:flex-row md:items-start">
                <div className="flex items-center gap-5 md:min-w-48">
                  <span className="font-mono text-3xl font-medium tracking-tight text-dark-text/30 md:text-4xl lg:text-3xl">{step.number}</span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-dark-text/12 text-dark-ash md:h-12 md:w-12">
                    <Icon size={20} />
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.28rem] font-semibold leading-tight text-dark-text md:text-[1.65rem] lg:text-[1.42rem]">{step.title}</h3>
                  <p className="mt-3 max-w-4xl text-[0.98rem] leading-relaxed text-dark-ash md:text-[1.12rem] lg:text-[1.04rem]">{step.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Architecture;
