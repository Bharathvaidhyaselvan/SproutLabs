import { motion } from 'motion/react';
import { Button } from '../common/Button';
import { WaveTop } from '../common/Waves';
import { DecorativeElement } from '../common/DecorativeElement';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream px-4 pb-24 pt-10 sm:px-6 sm:pb-28 sm:pt-14 md:px-12 md:pb-32 md:pt-24">
      <DecorativeElement type="blob1" className="pointer-events-none -left-20 -top-20 hidden h-72 w-72 text-brand-yellow/30 sm:block md:h-96 md:w-96" />
      <DecorativeElement type="blob2" className="pointer-events-none -right-16 bottom-24 hidden h-72 w-72 text-brand-paleblue/40 sm:block md:bottom-40 md:h-[500px] md:w-[500px]" />
      <DecorativeElement type="dots" className="pointer-events-none right-10 top-16 hidden h-48 w-48 text-brand-teal/20 md:block md:h-64 md:w-64" />
      <DecorativeElement type="star" className="left-10 top-1/4 hidden h-8 w-8 text-brand-orange md:block" delay={0} />
      <DecorativeElement type="cloud" className="right-1/4 top-32 hidden h-16 w-16 text-white md:block" delay={1} />
      <DecorativeElement type="bulb" className="bottom-40 left-1/4 hidden h-10 w-10 text-brand-yellow md:block" delay={2} />
      <DecorativeElement type="rocket" className="right-10 top-1/3 hidden h-12 w-12 text-brand-teal md:block" delay={1.5} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-5 sm:gap-6"
          >
            <span className="inline-block rounded-full bg-brand-lightorange/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange sm:px-4 sm:text-sm">
              Inspiring young minds through hands-on learning, innovation, and future-ready skills.
            </span>
            <h1 className="font-heading text-3xl font-black leading-[1.15] tracking-tight text-brand-navy sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Building Future{' '}
              <br className="hidden sm:block" />
              <span className="relative inline-block text-brand-teal">
                Innovators
                <svg className="absolute -bottom-1 left-0 h-2 w-full text-brand-yellow sm:h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                </svg>
              </span>{' '}
              Today
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-brand-navy/80 sm:text-lg md:text-xl">
              SproutLabs, an initiative of Verena Haptic and VR Systems Pvt. Ltd., creates engaging learning experiences for students through online and offline sessions, practical workshops, certified short-term courses, competitions, and institution-led innovation programs.
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-brand-navy/70 sm:text-base">
              We partner with schools, colleges, and learning institutions to nurture creativity, problem-solving, confidence, and practical skills in young learners.
            </p>
            <div className="mt-1 flex w-full flex-col gap-3 sm:mt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <Button to="/contact-us" variant="primary" className="w-full justify-center sm:w-auto">
                Enquire Now
              </Button>
              <Button to="/our-programs" variant="outline" className="w-full justify-center gap-2 sm:w-auto">
                Explore Programs
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto mb-4 mt-4 flex h-[240px] w-full max-w-lg items-center justify-center sm:h-[320px] sm:mb-6 sm:mt-8 md:h-[400px] lg:mx-0 lg:mb-0 lg:mt-0 lg:h-[560px] lg:max-w-none"
          >
            <div className="absolute inset-0 rotate-[-3deg] rounded-[28px] border-4 border-brand-paleblue/50 bg-white shadow-sm sm:rounded-[40px] md:rounded-[60px]" />
            <div className="absolute inset-0 rotate-2 overflow-hidden rounded-[28px] bg-brand-paleblue sm:rounded-[40px] md:rounded-[60px]">
              <img
                src={HERO_IMAGE}
                alt="Students collaborating on a hands-on STEM learning activity"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-teal/20 via-transparent to-brand-yellow/10" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full">
        <WaveTop fill="fill-brand-offwhite" />
      </div>
    </section>
  );
}
