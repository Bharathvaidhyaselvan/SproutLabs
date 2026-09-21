export type HeroSlideAnimation = 'rise' | 'slideIn' | 'pop' | 'drift';

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  eyebrowClass: string;
  highlightClass: string;
  overlayGradient: string;
  animation: HeroSlideAnimation;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 'future-innovators',
    eyebrow: 'Hands-on STEM & innovation for schools',
    title: 'Building Future',
    titleHighlight: 'Innovators',
    titleSuffix: 'Today',
    description:
      'SproutLabs helps students learn through workshops, certified courses, robotics, coding, and design thinking—online or on campus—with programs built for real classrooms.',
    image: '/site-images/hero-banner.webp',
    imageAlt: 'Children following build instructions during a hands-on STEM activity at school',
    primaryCta: { label: 'Enquire Now', to: '/contact-us' },
    secondaryCta: { label: 'Explore Programs', to: '/our-programs' },
    eyebrowClass: 'bg-brand-green/25 text-brand-lightorange border border-white/20',
    highlightClass: 'text-logo-gradient',
    overlayGradient: 'from-brand-navy/70 via-brand-navy/40 to-brand-navy/10',
    animation: 'rise',
  },
];
