import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { DecorativeElement } from '../common/DecorativeElement';

const ABOUT_IMAGE_1 =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80';
const ABOUT_IMAGE_2 =
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80';

export default function AboutHome() {
  return (
    <section className="relative py-24 bg-brand-offwhite overflow-hidden">
      <DecorativeElement type="cloud" className="w-24 h-24 top-20 right-10 text-brand-cream" duration={6} />
      <DecorativeElement type="star" className="w-8 h-8 bottom-40 left-10 text-brand-orange" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Collage */}
          <div className="relative mx-auto hidden h-[420px] w-full max-w-[480px] md:block lg:mx-0 lg:h-[480px] lg:max-w-none">
            {/* Base blob */}
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cream opacity-60 blur-3xl filter lg:h-[380px] lg:w-[380px]" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 z-10 h-[240px] w-[240px] overflow-hidden rounded-[36px] border-4 border-white bg-brand-paleblue shadow-md lg:h-[280px] lg:w-[280px]"
            >
              <img
                src={ABOUT_IMAGE_1}
                alt="Students learning together in a classroom"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 right-0 z-20 h-[200px] w-[260px] overflow-hidden rounded-[36px] border-4 border-white bg-brand-yellow/20 shadow-md lg:h-[230px] lg:w-[300px]"
            >
              <img
                src={ABOUT_IMAGE_2}
                alt="Children exploring hands-on learning activities"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute right-[18%] top-[38%] z-30 flex h-24 w-24 -translate-y-1/2 rotate-12 items-center justify-center rounded-full bg-brand-teal text-center text-lg font-bold leading-tight text-white shadow-lg lg:h-28 lg:w-28 lg:text-xl"
            >
              10K+
              <br />
              Kids
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <SectionHeading 
              eyebrow="About us" 
              title="Who We Are" 
              alignment="left"
            />
            
            <div className="text-brand-navy/80 text-lg leading-relaxed flex flex-col gap-4">
              <p>
                SproutLabs is a learning-focused startup designed to bridge the gap between education and real-world innovation. Our goal is to make learning interactive, practical, and inspiring for students across different age groups and learning levels.
              </p>
              <p>
                As an initiative of Verena Haptic and VR Systems Pvt. Ltd., SproutLabs is rooted in innovation-led learning and future-ready education. We believe that students learn best when they explore, build, experiment, and collaborate in meaningful ways.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-cream rounded-3xl p-6 border-2 border-transparent hover:border-brand-yellow transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 text-brand-orange shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Our Mission</h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed">
                  To empower students with practical exposure, creative confidence, and innovation skills through thoughtfully designed programs that combine learning with doing.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-brand-paleblue rounded-3xl p-6 border-2 border-transparent hover:border-brand-teal transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 text-brand-teal shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Our Vision</h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed">
                  We envision a future where every student has access to engaging, hands-on, and future-focused learning experiences that prepare them to think critically.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
