import { motion } from 'motion/react';
import { Button } from '../common/Button';
import { WaveTop } from '../common/Waves';
import { DecorativeElement } from '../common/DecorativeElement';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream pt-12 pb-28 md:pt-24 md:pb-32">
      {/* Background Decor */}
      <DecorativeElement type="blob1" className="w-96 h-96 -top-20 -left-20 text-brand-yellow/30" />
      <DecorativeElement type="blob2" className="pointer-events-none -right-20 bottom-32 h-[400px] w-[400px] text-brand-paleblue/40 md:bottom-40 md:h-[500px] md:w-[500px]" />
      <DecorativeElement type="dots" className="w-64 h-64 top-20 right-20 text-brand-teal/20" />
      
      {/* Floating Elements */}
      <DecorativeElement type="star" className="w-8 h-8 top-1/4 left-10 text-brand-orange hidden md:block" delay={0} />
      <DecorativeElement type="cloud" className="w-16 h-16 top-32 right-1/4 text-white hidden md:block" delay={1} />
      <DecorativeElement type="bulb" className="w-10 h-10 bottom-40 left-1/4 text-brand-yellow hidden md:block" delay={2} />
      <DecorativeElement type="rocket" className="w-12 h-12 top-1/3 right-10 text-brand-teal hidden md:block" delay={1.5} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm bg-brand-lightorange/30 px-4 py-1.5 rounded-full inline-block">
              Inspiring young minds through hands-on learning, innovation, and future-ready skills.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-brand-navy leading-[1.1] tracking-tight">
              Building Future <br/>
              <span className="text-brand-teal relative inline-block">
                Innovators
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent"/>
                </svg>
              </span> Today
            </h1>
            <p className="text-brand-navy/80 text-lg md:text-xl leading-relaxed max-w-xl">
              SproutLabs, an initiative of Verena Haptic and VR Systems Pvt. Ltd., creates engaging learning experiences for students through online and offline sessions, practical workshops, certified courses, competitions, and institution-led innovation programs.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button to="/contact-us" variant="primary">Enquire Now</Button>
              <Button variant="outline" className="gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Play Video
              </Button>
            </div>
          </motion.div>

          {/* Image/Illustration Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-10 mb-6 flex h-[280px] items-center justify-center sm:h-[360px] lg:mt-0 lg:mb-0 lg:h-[560px]"
          >
            <div className="absolute inset-0 rotate-[-3deg] rounded-[40px] border-4 border-brand-paleblue/50 bg-white shadow-sm md:rounded-[60px]"></div>
            <div className="absolute inset-0 rotate-2 overflow-hidden rounded-[40px] bg-brand-paleblue md:rounded-[60px]">
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
