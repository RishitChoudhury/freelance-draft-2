import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Optimal Systems', href: '#optimal-systems' },
  { label: 'Framework', href: '#framework' },
  { label: 'OSA', href: '#miosa' },
  { label: 'MIOSA', href: '#miosa' },
];

const Navbar = ({ isDark, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handlePointerDown = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-40 border-b border-dark-text/10 bg-light-bg"
    >
      <div className="mx-auto flex w-full max-w-[62rem] items-center justify-between px-6 py-5 md:px-8">
        <a href="#miosa" className="flex items-center">
          <span className="font-sans text-[0.98rem] font-medium leading-none tracking-wide text-dark-text/70 lg:text-[0.94rem]">LANCEMART AI</span>
        </a>

        <div className="hidden items-center gap-10 md:flex lg:gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.98rem] font-semibold leading-none text-dark-text/65 transition-colors duration-200 hover:text-dark-text lg:text-[0.94rem]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center text-dark-text/70 transition-colors duration-200 hover:text-dark-text"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={22} strokeWidth={1.9} /> : <Moon size={22} strokeWidth={1.9} />}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center text-dark-text/70 transition-colors duration-200 hover:text-dark-text md:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            title={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={1.9} /> : <Menu size={22} strokeWidth={1.9} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`absolute right-4 top-[calc(100%-0.4rem)] z-50 w-[min(16.5rem,calc(100vw-2rem))] rounded-2xl border p-4 shadow-[0_14px_32px_rgba(17,17,17,0.16)] md:hidden ${
              isDark ? 'border-white/15 bg-[#111216] text-zinc-200' : 'border-dark-text/10 bg-light-bg text-dark-text/80'
            }`}
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`rounded-xl px-3 py-2.5 text-[1rem] font-medium transition-colors ${
                    isDark ? 'hover:bg-white/5 hover:text-zinc-100' : 'hover:bg-black/[0.04] hover:text-dark-text'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
