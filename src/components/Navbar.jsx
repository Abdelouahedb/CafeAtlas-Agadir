import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Galerie' },
  { to: '/about', label: 'À Propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(44,24,16,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">☕</span>
              <div className="flex flex-col">
                <span className={`font-heading text-xl md:text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-secondary' : 'text-white'}`}>
                  Café Atlas
                </span>
                <span className={`text-[9px] tracking-[0.3em] uppercase font-medium -mt-0.5 transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-gold-light'}`}>Agadir</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative text-[13px] font-medium tracking-wider uppercase transition-colors duration-200 hover:text-gold ${
                      isActive
                        ? 'text-gold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:rounded-full'
                        : scrolled
                          ? 'text-secondary/80'
                          : 'text-white/90'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="bg-secondary text-gold px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary-light transition-colors duration-200 hover:shadow-lg hover:shadow-secondary/15 active:scale-[0.97]"
              >
                Réserver
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              className={`md:hidden p-2.5 rounded-xl transition-colors duration-200 ${scrolled ? 'text-secondary hover:bg-cream' : 'text-white hover:bg-white/10'}`}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay — outside header to avoid backdrop-filter containing block */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-white z-50 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-7 -mt-16">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-2xl font-heading font-semibold tracking-wide transition-colors ${
                        isActive ? 'text-gold' : 'text-secondary hover:text-gold'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.06 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 bg-secondary text-gold px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-secondary-light transition-colors duration-200 active:scale-[0.97]"
                >
                  Réserver
                </Link>
              </motion.div>

              {/* Decorative divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4 }}
                className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mt-2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
