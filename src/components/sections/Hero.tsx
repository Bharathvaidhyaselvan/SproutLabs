import { motion } from 'motion/react';
import { Button } from '../common/Button';
import { WaveTop } from '../common/Waves';
import { heroSlides, type HeroSlide, type HeroSlideAnimation } from '../../data/heroSlides';
import { useEnquiryModal } from '../enquiry/EnquiryModalContext';

const slide = heroSlides[0];

const panelVariants: Record<
  HeroSlideAnimation,
  {
    hidden: { opacity: number };
    visible: {
      opacity: number;
      transition: { staggerChildren: number; delayChildren: number };
    };
  }
> = {
  rise: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  },
  slideIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  },
  pop: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  },
  drift: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.18 } },
  },
};

const itemVariants: Record<
  HeroSlideAnimation,
  { hidden: { opacity: number; y?: number; x?: number; scale?: number }; visible: { opacity: number; y?: number; x?: number; scale?: number } }
> = {
  rise: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  slideIn: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  pop: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  drift: {
    hidden: { opacity: 0, x: 28, y: 20 },
    visible: { opacity: 1, x: 0, y: 0 },
  },
};

function HeroFrame({ content }: { content: HeroSlide }) {
  const panelMotion = panelVariants[content.animation];
  const childMotion = itemVariants[content.animation];
  const { openEnquiry } = useEnquiryModal();

  return (
    <div className="relative flex min-h-[min(88vh,920px)] w-full items-center">
      <div className="absolute inset-0" aria-hidden="true">
        <motion.img
          src={content.image}
          alt=""
          className="h-full w-full object-cover"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          loading="eager"
          fetchPriority="high"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${content.overlayGradient}`} />
        <div className="absolute inset-0 bg-brand-navy/15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 md:px-12 md:py-32">
        <motion.div
          className="max-w-2xl lg:max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={panelMotion}
        >
          <motion.span
            variants={childMotion}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-block rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm sm:px-4 sm:text-sm ${content.eyebrowClass}`}
          >
            {content.eyebrow}
          </motion.span>

          <motion.div variants={childMotion} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="mt-5 font-heading text-3xl font-black leading-[1.12] tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="hero-text-reveal block">{content.title}</span>
              <span className="hero-text-reveal mt-1 block sm:mt-2">
                <span className={content.highlightClass}>{content.titleHighlight}</span>
                {content.titleSuffix ? (
                  <span className="text-white"> {content.titleSuffix}</span>
                ) : null}
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={childMotion}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg md:text-xl"
          >
            {content.description}
          </motion.p>

          <motion.div
            variants={childMotion}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Button
              type="button"
              variant="primary"
              className="w-full justify-center sm:w-auto"
              onClick={() => openEnquiry()}
            >
              {content.primaryCta.label}
            </Button>
            <Button
              to={content.secondaryCta.to}
              variant="outline"
              className="w-full justify-center gap-2 border-white/70 text-white hover:border-white hover:bg-white hover:text-brand-navy sm:w-auto"
            >
              {content.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-brand-cream" aria-label="SproutLabs learning highlights">
      <div className="relative overflow-hidden bg-brand-navy">
        <HeroFrame content={slide} />

        <div className="absolute bottom-0 left-0 z-30 w-full">
          <WaveTop fill="fill-brand-cream" />
        </div>
      </div>
    </section>
  );
}
