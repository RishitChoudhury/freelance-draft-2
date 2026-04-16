import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ booted, theme, toggleTheme }) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={booted ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none mix-blend-difference"
    >
      <div className="font-mono text-sm tracking-widest font-semibold uppercase text-stark-white pointer-events-auto" data-cursor-interactive>
        LanceMart.AI
      </div>
      
      <div className="flex items-center gap-6 pointer-events-auto">
        <button
          onClick={toggleTheme}
          className="text-stark-white hover:text-luminous-radium transition-colors"
          data-cursor-interactive
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-muted-ash tracking-widest" data-cursor-interactive>
          <div className="w-2 h-2 rounded-full bg-luminous-radium animate-pulse" />
          <span className="text-stark-white">SYS.ONLINE</span>
        </div>
        <button 
          className="font-mono text-xs border border-stark-white/20 hover:border-stark-white text-stark-white px-4 py-2 uppercase tracking-widest transition-colors duration-300"
          data-cursor-interactive
        >
          Initialize
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
