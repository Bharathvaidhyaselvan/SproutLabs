import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { SiteLogo } from '../common/SiteLogo';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Our Programs', path: '/our-programs', dropdown: true },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Events', path: '/events' },
  { name: 'Contact Us', path: '/contact-us' },
];

const programLinks = [
  { name: 'Foundational STEM Experiences', path: '/our-programs/foundational-stem-experiences' },
  { name: 'Coding And Digital Creativity', path: '/our-programs/coding-and-digital-creativity' },
  { name: 'Innovation And Design Thinking', path: '/our-programs/innovation-and-design-thinking' },
  { name: 'Certified Three Month Learning Pathways', path: '/our-programs/certified-three-month-learning-pathways' },
  { name: 'Competitions And Challenge Based Learning', path: '/our-programs/competitions-and-challenge-based-learning' },
  { name: 'Custom Programs For Institutions', path: '/our-programs/custom-programs-for-institutions' },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsOpen(false);
    setMobileProgramsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-brand-cream/95 backdrop-blur-md shadow-sm" : "bg-brand-cream"
    )}>
      {/* Top Strip */}
      <div className="hidden lg:flex justify-between items-center bg-brand-navy text-white py-2 px-6 md:px-12 text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-teal" />
            <span>4/350, Valluvar Salai, Ramapuram, Chennai</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-teal" />
            <a href="mailto:learn@sproutlabs.in" className="hover:text-brand-yellow transition-colors">learn@sproutlabs.in</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-brand-teal" />
            <a href="tel:+917397499945" className="hover:text-brand-yellow transition-colors">+91 7397499945</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="opacity-80">Working Hours: Mon-Sat 9AM-6PM</span>
          <div className="flex items-center gap-3 ml-4 border-l border-white/20 pl-4">
            <a href="#" className="hover:text-brand-yellow transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-yellow transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-yellow transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-yellow transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-12">
        <Link to="/" className="z-50 flex shrink-0 items-center">
          <SiteLogo className="h-9 w-auto sm:h-11" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <Link
                  to={link.path}
                  className={cn(
                    "inline-flex items-center gap-1 font-medium text-[15px] transition-colors",
                    isActive(link.path) || programsOpen ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                  )}
                >
                  {link.name}
                  <ChevronDown className={cn("w-4 h-4 transition-transform", programsOpen && "rotate-180")} />
                </Link>

                <AnimatePresence>
                  {programsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full z-50 w-80 pt-3"
                    >
                      <div className="overflow-hidden rounded-xl border border-brand-navy/10 bg-white shadow-lg">
                        {programLinks.map((program) => (
                          <Link
                            key={program.path}
                            to={program.path}
                            className="block border-b border-brand-navy/10 px-5 py-3.5 text-sm font-medium text-brand-navy last:border-b-0 hover:bg-brand-cream hover:text-brand-orange transition-colors"
                          >
                            {program.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-medium text-[15px] transition-colors",
                  isActive(link.path) ? "text-brand-orange" : "text-brand-navy hover:text-brand-orange"
                )}
              >
                {link.name}
              </Link>
            )
          ))}

          <Link
            to="/contact-us"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-orange/90"
          >
            Get A Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-brand-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-brand-cream shadow-xl border-t border-brand-paleblue lg:hidden flex flex-col p-6 h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div key={link.name} className="border-b border-brand-paleblue/50">
                    <button
                      type="button"
                      onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                      className="flex w-full items-center justify-between py-3 text-left text-lg font-semibold text-brand-navy"
                    >
                      {link.name}
                      <ChevronDown className={cn("w-5 h-5 transition-transform", mobileProgramsOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {mobileProgramsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pb-3"
                        >
                          {programLinks.map((program) => (
                            <Link
                              key={program.path}
                              to={program.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2.5 pl-3 text-sm font-medium text-brand-navy/80 hover:text-brand-orange"
                            >
                              {program.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "border-b border-brand-paleblue/50 py-3 text-lg font-semibold",
                      isActive(link.path) ? "text-brand-orange" : "text-brand-navy"
                    )}
                  >
                    {link.name}
                  </Link>
                )
              ))}

              <Link
                to="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange py-3 font-bold text-white"
              >
                Get A Quote
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-8 flex flex-col gap-3 text-sm text-brand-navy/70">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-teal" />
                  <span>learn@sproutlabs.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-teal" />
                  <span>+91 7397499945</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
