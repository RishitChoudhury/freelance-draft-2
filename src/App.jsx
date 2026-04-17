import React, { useEffect, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Metrics from './components/Metrics';
import Architecture from './components/Architecture';
import Footer from './components/Footer';
import LoaderGlobe from './components/LoaderGlobe';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [minDurationDone, setMinDurationDone] = useState(false);
  const [loaderMediaReady, setLoaderMediaReady] = useState(false);
  const [loaderTimeoutReached, setLoaderTimeoutReached] = useState(false);
  const [isFloatingArrowEnabled, setIsFloatingArrowEnabled] = useState(false);
  const [isFloatingArrowVisible, setIsFloatingArrowVisible] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('lancemart-theme');
    return saved ? saved === 'dark' : false;
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const minDurationTimer = setTimeout(() => {
      setMinDurationDone(true);
    }, 1800);

    const maxDurationTimer = setTimeout(() => {
      setLoaderTimeoutReached(true);
    }, 4200);

    return () => {
      clearTimeout(minDurationTimer);
      clearTimeout(maxDurationTimer);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('lancemart-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    if (loaderTimeoutReached || (minDurationDone && loaderMediaReady)) {
      setIsLoading(false);
    }
  }, [loaderTimeoutReached, minDurationDone, loaderMediaReady]);

  useEffect(() => {
    const updateViewport = () => {
      setIsFloatingArrowEnabled(window.innerWidth < 1536);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    if (!isFloatingArrowEnabled) {
      setIsFloatingArrowVisible(false);
      return;
    }

    const updateVisibility = () => {
      const heroSection = document.getElementById('miosa');
      if (!heroSection) {
        setIsFloatingArrowVisible(window.scrollY > 320);
        return;
      }
      const heroEnd = heroSection.offsetTop + heroSection.offsetHeight - 100;
      setIsFloatingArrowVisible(window.scrollY > heroEnd);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [isFloatingArrowEnabled]);

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

        {!isLoading && isFloatingArrowEnabled && isFloatingArrowVisible && (
          <a
            href="#miosa"
            className="fixed bottom-6 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-dark-text text-stark-white shadow-[0_10px_28px_rgba(17,17,17,0.25)] transition-transform hover:-translate-y-0.5 sm:right-6 md:bottom-7 md:right-7 md:h-12 md:w-12"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </a>
        )}

        <AnimatePresence>
          {isLoading && (
            <LoaderGlobe
              key="loader"
              onMediaReady={() => setLoaderMediaReady(true)}
              onMediaError={() => setLoaderMediaReady(true)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </main>
  );
}

export default App;
