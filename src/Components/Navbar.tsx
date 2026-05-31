import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Content', href: '#content' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(n => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-[var(--border)] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-black font-bold text-sm">
              V
            </div>
            <span className="font-bold text-[var(--text-primary)] font-['Space_Grotesk'] hidden sm:block">
              Vijay D
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map(item => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`nav-link ${active === item.href.slice(1) ? 'text-[var(--primary)]' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 glass rounded-lg flex items-center justify-center hover:border-[var(--primary)] transition-all duration-200"
            >
              {darkMode ? (
                <FiSun className="text-yellow-400 w-4 h-4" />
              ) : (
                <FiMoon className="text-[var(--primary)] w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary hidden sm:flex text-sm py-2 px-4"
            >
              Hire Me
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-9 h-9 glass rounded-lg flex items-center justify-center"
            >
              {menuOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-[var(--border)] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`text-left nav-link text-base py-1 ${
                    active === item.href.slice(1) ? 'text-[var(--primary)]' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-sm justify-center"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
