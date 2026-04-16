import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Metrics from './components/Metrics';
import Architecture from './components/Architecture';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WebGLBackground from './components/WebGLBackground';

function App() {
  const [booted, setBooted] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
       document.documentElement.classList.add('dark');
       document.body.classList.add('dark');
    } else {
       document.documentElement.classList.remove('dark');
       document.body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    // Lenis smooth scrolling init
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    // Ensure React-three-fiber and Framer Motion stay in sync with custom scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setBooted(true);
    }, 500); 

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-light-bg dark:bg-void-black text-dark-text dark:text-stark-white">
      <CustomCursor />
      
      {/* WebGL Canvas in Background - Fixed behind content */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <WebGLBackground booted={booted} theme={theme} />
        {/* Subtle gradient overlay to ensure text contrast remains sharp */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-light-bg/80 dark:via-void-black/80 to-light-bg dark:to-void-black z-0 pointer-events-none transition-all duration-1000" />
      </div>

      <Navbar booted={booted} theme={theme} toggleTheme={toggleTheme} />

      {/* Scrolled DOM Content */}
      <div className="relative z-10 flex flex-col w-full pointer-events-none">
         <Hero booted={booted} />
         <Metrics />
         <Architecture />
         <Footer />
      </div>
    </main>
  );
}

export default App;
