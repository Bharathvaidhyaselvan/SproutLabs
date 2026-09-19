import { Link, useLocation } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { WaveBottom } from '../common/Waves';
import { SiteLogo } from '../common/SiteLogo';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Our Programs', path: '/our-programs' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Events', path: '/events' },
  { name: 'Contact Us', path: '/contact-us' },
];

const programLinks = [
  { name: 'Foundational STEM Experiences', path: '/our-programs/foundational-stem-experiences' },
  { name: 'Coding and Digital Creativity', path: '/our-programs/coding-and-digital-creativity' },
  { name: 'Innovation and Design Thinking', path: '/our-programs/innovation-and-design-thinking' },
  { name: 'Certified Three-Month Pathways', path: '/our-programs/certified-three-month-learning-pathways' },
  { name: 'Competitions & Challenge Learning', path: '/our-programs/competitions-and-challenge-based-learning' },
  { name: 'Custom Programs for Institutions', path: '/our-programs/custom-programs-for-institutions' },
];

export default function Footer() {
  const { pathname } = useLocation();
  const showTopWave = pathname === '/' || pathname === '/contact-us';

  return (
    <footer className="relative overflow-hidden bg-brand-cream px-4 pb-8 pt-20 text-brand-navy sm:px-0 sm:pb-10 sm:pt-24">
      {showTopWave && (
        <div className="absolute left-0 top-0 z-20 w-full" aria-hidden>
          <WaveBottom fill="fill-white" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl sm:px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Col */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="inline-flex items-center">
              <SiteLogo className="h-12 w-auto sm:h-14" />
            </Link>
            <p className="font-body leading-relaxed text-brand-navy">
              Bridging education and real-world innovation through hands-on learning, STEM, coding, robotics, and institution partnerships.
            </p>
            <div className="mt-1 flex items-center gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/8 text-brand-navy transition-colors hover:bg-brand-teal hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/8 text-brand-navy transition-colors hover:bg-brand-teal hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/8 text-brand-navy transition-colors hover:bg-brand-teal hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy/8 text-brand-navy transition-colors hover:bg-brand-teal hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-heading text-xl font-bold text-brand-darkteal">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-brand-navy transition-all hover:text-brand-darkteal hover:underline hover:decoration-brand-teal hover:underline-offset-4">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-5 font-heading text-xl font-bold text-brand-darkteal">Programs</h3>
            <ul className="flex flex-col gap-3">
              {programLinks.map((prog) => (
                <li key={prog.name}>
                  <Link to={prog.path} className="text-brand-navy transition-all hover:text-brand-darkteal hover:underline hover:decoration-brand-orange hover:underline-offset-4">
                    {prog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-heading text-xl font-bold text-brand-darkteal">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-brand-navy">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-teal" />
                <span>4/350, Valluvar Salai, Rayala Nagar, Ramapuram, Chennai - 600056</span>
              </li>
              <li className="flex items-center gap-3 text-brand-navy">
                <Phone className="h-5 w-5 shrink-0 text-brand-teal" />
                <a href="tel:+917397499945" className="transition-colors hover:text-brand-darkteal">+91 7397499945</a>
              </li>
              <li className="flex items-center gap-3 text-brand-navy">
                <Mail className="h-5 w-5 shrink-0 text-brand-teal" />
                <a href="mailto:learn@sproutlabs.in" className="transition-colors hover:text-brand-darkteal">learn@sproutlabs.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 text-sm text-brand-navy md:flex-row">
          <p>© {new Date().getFullYear()} SproutLabs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="text-brand-navy transition-colors hover:text-brand-darkteal">Privacy Policy</Link>
            <Link to="#" className="text-brand-navy transition-colors hover:text-brand-darkteal">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
