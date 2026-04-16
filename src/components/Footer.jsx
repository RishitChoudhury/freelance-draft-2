import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-dark-text/20 dark:border-stark-white/20 bg-light-bg dark:bg-void-black text-dark-text dark:text-stark-white px-6 md:px-12 py-16 md:py-24 pointer-events-none relative z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-end pointer-events-auto">
        <div className="md:col-span-2">
          <h4 className="font-serif text-3xl font-normal mb-8" data-cursor-interactive>LanceMart AI</h4>
          <p className="font-mono text-xs tracking-widest text-dark-ash dark:text-muted-ash opacity-75">AEROSPACE-GRADE COGNITION &copy; 2026</p>
        </div>
        
        <div className="flex flex-col gap-4">
           <span className="font-mono text-[10px] uppercase tracking-widest text-dark-text/40 dark:text-stark-white/40 mb-2">Systems</span>
           <a href="#" className="font-sans text-sm hover:text-light-radium dark:hover:text-luminous-radium transition-colors" data-cursor-interactive>Universal Framework</a>
           <a href="#" className="font-sans text-sm hover:text-light-radium dark:hover:text-luminous-radium transition-colors" data-cursor-interactive>Diagnostica</a>
           <a href="#" className="font-sans text-sm hover:text-light-radium dark:hover:text-luminous-radium transition-colors" data-cursor-interactive>Core Documentation</a>
        </div>

        <div className="flex flex-col gap-4">
           <span className="font-mono text-[10px] uppercase tracking-widest text-dark-text/40 dark:text-stark-white/40 mb-2">Network</span>
           <a href="#" className="font-sans text-sm hover:text-light-cyan dark:hover:text-electric-cyan transition-colors" data-cursor-interactive>X / Twitter</a>
           <a href="#" className="font-sans text-sm hover:text-light-cyan dark:hover:text-electric-cyan transition-colors" data-cursor-interactive>GitHub</a>
           <a href="#" className="font-sans text-sm hover:text-light-cyan dark:hover:text-electric-cyan transition-colors" data-cursor-interactive>Direct Feed</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
