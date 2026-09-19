import { useState } from 'react';
import { motion } from 'motion/react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Button } from '../common/Button';
import { WaveTop } from '../common/Waves';
import { heroSlides, type HeroSlide, type HeroSlideAnimation } from '../../data/heroSlides';

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

function SlidePanel({
  slide,
  isActive,
  isPrimaryHeading,
}: {
  slide: HeroSlide;
  isActive: boolean;
  isPrimaryHeading: boolean;
}) {
  const panelMotion = panelVariants[slide.animation];
  const childMotion = itemVariants[slide.animation];
  const HeadingTag = isPrimaryHeading ? 'h1' : 'h2';

  return (
    <div className="relative flex min-h-[min(88vh,920px)] w-full items-center">
      <div className="absolute inset-0" aria-hidden="true">
        <motion.img
          src={slide.image}
          alt=""
          className="h-full w-full object-cover"
          initial={{ scale: 1.06 }}
          animate={isActive ? { scale: 1 } : { scale: 1.06 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          loading={isPrimaryHeading ? 'eager' : 'lazy'}
          fetchPriority={isPrimaryHeading ? 'high' : 'auto'}
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlayGradient}`} />
        <div className="absolute inset-0 bg-brand-navy/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 md:px-12 md:py-32">
        <motion.div
          className="max-w-2xl lg:max-w-3xl"
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
          variants={panelMotion}
        >
          <motion.span
            variants={childMotion}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-block rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm sm:px-4 sm:text-sm ${slide.eyebrowClass}`}
          >
            {slide.eyebrow}
          </motion.span>

          <motion.div variants={childMotion} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
            <HeadingTag className="mt-5 font-heading text-3xl font-black leading-[1.12] tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="hero-text-reveal block">{slide.title}</span>
              <span className="hero-text-reveal mt-1 block sm:mt-2">
                <span className={slide.highlightClass}>{slide.titleHighlight}</span>
                {slide.titleSuffix ? (
                  <span className="text-white"> {slide.titleSuffix}</span>
                ) : null}
              </span>
            </HeadingTag>
          </motion.div>

          <motion.p
            variants={childMotion}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg md:text-xl"
          >
            {slide.description}
          </motion.p>

          <motion.div
            variants={childMotion}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Button to={slide.primaryCta.to} variant="primary" className="w-full justify-center sm:w-auto">
              {slide.primaryCta.label}
            </Button>
            <Button
              to={slide.secondaryCta.to}
              variant="outline"
              className="w-full justify-center gap-2 border-white/70 text-white hover:border-white hover:bg-white hover:text-brand-navy sm:w-auto"
            >
              {slide.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative bg-brand-cream"
      aria-roledescription="carousel"
      aria-label="SproutLabs learning highlights"
    >
      <div className="relative overflow-hidden bg-brand-navy">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
          loop
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'hero-swiper-bullet',
            bulletActiveClass: 'hero-swiper-bullet-active',
          }}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
          className="hero-swiper"
          aria-live="polite"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <SlidePanel
                slide={slide}
                isActive={activeIndex === index}
                isPrimaryHeading={index === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-x-0 bottom-24 z-20 flex items-center justify-center gap-3 sm:bottom-28 md:bottom-32">
          <button
            type="button"
            onClick={() => swiper?.slidePrev()}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <p className="min-w-[7.5rem] text-center text-sm font-semibold text-white/85">
            {activeIndex + 1} / {heroSlides.length}
          </p>
          <button
            type="button"
            onClick={() => swiper?.slideNext()}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

      <style>{`
        .hero-swiper .swiper-pagination {
          position: absolute;
          bottom: 1.25rem;
          left: 0;
          right: 0;
          z-index: 25;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        .hero-swiper-bullet {
          width: 0.625rem;
          height: 0.625rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .hero-swiper-bullet-active {
          width: 2rem;
          background: var(--color-brand-teal);
        }
      `}</style>

        <div className="absolute bottom-0 left-0 z-30 w-full">
          <WaveTop fill="fill-brand-cream" />
        </div>
      </div>
    </section>
  );
}
