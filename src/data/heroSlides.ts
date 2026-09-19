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
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Children following build instructions during a hands-on STEM activity at school',
    primaryCta: { label: 'Enquire Now', to: '/contact-us' },
    secondaryCta: { label: 'Explore Programs', to: '/our-programs' },
    eyebrowClass: 'bg-brand-green/25 text-brand-lightorange border border-white/20',
    highlightClass: 'text-logo-gradient',
    overlayGradient: 'from-brand-navy/90 via-brand-navy/55 to-brand-navy/20',
    animation: 'rise',
  },
  {
    id: 'foundational-stem',
    eyebrow: 'Foundational STEM experiences',
    title: 'Spark Curiosity with',
    titleHighlight: 'Hands-On',
    titleSuffix: 'Discovery',
    description:
      'From STEM discovery workshops to young inventors programs, we help primary and middle school learners build scientific thinking through experiments they can touch and try.',
    image:
      'https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'A teacher guiding a young student through a learning activity at a classroom desk',
    primaryCta: { label: 'View STEM Programs', to: '/our-programs/foundational-stem-experiences' },
    secondaryCta: { label: 'See Age Pathways', to: '/#age-pathways' },
    eyebrowClass: 'bg-brand-yellow/20 text-brand-yellow border border-white/20',
    highlightClass: 'text-brand-yellow',
    overlayGradient: 'from-brand-navy/92 via-brand-darkteal/60 to-transparent',
    animation: 'slideIn',
  },
  {
    id: 'coding-robotics',
    eyebrow: 'Coding & digital creativity',
    title: 'Code, Build, and',
    titleHighlight: 'Create',
    titleSuffix: 'with Confidence',
    description:
      'Learners explore block coding, IoT, robotics, and digital art through projects that turn ideas into games, gadgets, and presentations—not just worksheets.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'A student sketching and planning a robotics project with parts and blueprints on the desk',
    primaryCta: { label: 'Coding & Robotics', to: '/our-programs/coding-and-digital-creativity' },
    secondaryCta: { label: 'Student Clubs', to: '/student-clubs' },
    eyebrowClass: 'bg-brand-orange/25 text-brand-lightorange border border-white/20',
    highlightClass: 'text-logo-gradient',
    overlayGradient: 'from-brand-navy/88 via-brand-indigo/45 to-brand-navy/15',
    animation: 'pop',
  },
  {
    id: 'design-thinking',
    eyebrow: 'Innovation & design thinking',
    title: 'Turn Ideas into',
    titleHighlight: 'Real',
    titleSuffix: 'Solutions',
    description:
      'Innovation lab sessions and design thinking pathways guide teams from empathy and brainstorming to prototypes students are proud to present.',
    image:
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Colorful building bricks used for creative engineering and design play',
    primaryCta: { label: 'Innovation Programs', to: '/our-programs/innovation-and-design-thinking' },
    secondaryCta: { label: 'About SproutLabs', to: '/about-us' },
    eyebrowClass: 'bg-brand-teal/25 text-white border border-white/20',
    highlightClass: 'text-brand-coral',
    overlayGradient: 'from-brand-navy/90 via-brand-navy/50 to-brand-teal/20',
    animation: 'drift',
  },
  {
    id: 'school-partnerships',
    eyebrow: 'Programs for schools & colleges',
    title: 'Partner with Us for',
    titleHighlight: 'Lasting',
    titleSuffix: 'Impact',
    description:
      'We co-design weekend workshops, innovation clubs, holiday bootcamps, and certified three-month tracks that fit your timetable, labs, and learning goals.',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'A teacher leading a diverse group of elementary students in an engaging classroom lesson',
    primaryCta: { label: 'School Partnerships', to: '/school-partnerships' },
    secondaryCta: { label: 'Custom Programs', to: '/our-programs/custom-programs-for-institutions' },
    eyebrowClass: 'bg-white/15 text-white border border-white/25',
    highlightClass: 'text-brand-sky',
    overlayGradient: 'from-brand-navy/93 via-brand-navy/65 to-transparent',
    animation: 'slideIn',
  },
  {
    id: 'competitions-events',
    eyebrow: 'Competitions & challenge-based learning',
    title: 'Learn, Compete, and',
    titleHighlight: 'Showcase',
    titleSuffix: 'Your Work',
    description:
      'STEM competitions, innovation challenges, and school showcase events give students a stage to apply skills, work as a team, and build presentation confidence.',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'Students learning together in a bright school environment',
    primaryCta: { label: 'Upcoming Events', to: '/events' },
    secondaryCta: { label: 'Challenge Programs', to: '/our-programs/competitions-and-challenge-based-learning' },
    eyebrowClass: 'bg-brand-indigo/30 text-brand-lavender border border-white/20',
    highlightClass: 'text-logo-gradient',
    overlayGradient: 'from-brand-navy/91 via-brand-indigo/40 to-brand-navy/10',
    animation: 'rise',
  },
];
