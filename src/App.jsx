import React, { useEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Metrics from './components/Metrics';
import Architecture from './components/Architecture';
import Footer from './components/Footer';
import LoaderGlobe from './components/LoaderGlobe';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('lancemart-theme');
    return saved ? saved === 'dark' : false;
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('lancemart-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <main className={`relative w-full min-h-screen ${isDark ? 'bg-[#050505] text-zinc-100 theme-dark' : 'bg-light-bg text-dark-text'}`}>
      <LayoutGroup id="loader-to-hero">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="page-grid fixed inset-0 pointer-events-none z-0" />
          <div className={`fixed inset-x-0 top-0 h-28 pointer-events-none z-10 ${isDark ? 'bg-gradient-to-b from-[#050505] via-[#050505]/92 to-transparent' : 'bg-gradient-to-b from-light-bg via-light-bg/90 to-transparent'}`} />
          <div className={`fixed inset-x-0 bottom-0 h-24 pointer-events-none z-10 ${isDark ? 'bg-gradient-to-t from-[#050505] to-transparent' : 'bg-gradient-to-t from-light-bg to-transparent'}`} />
          <div className="relative z-20">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <Hero />
            <Metrics />
            <Architecture />
            <Footer />
          </div>
        </motion.div>

        <AnimatePresence>
          {isLoading && <LoaderGlobe key="loader" />}
        </AnimatePresence>
      </LayoutGroup>
    </main>
  );
}

export default App;
