import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { DecorativeElement } from '../common/DecorativeElement';

const ABOUT_IMAGE_1 =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80';
const ABOUT_IMAGE_2 =
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80';

export default function AboutHome() {
  return (
    <section className="relative overflow-hidden bg-brand-offwhite py-16 sm:py-20 md:py-24">
      <DecorativeElement type="cloud" className="right-6 top-16 hidden h-20 w-20 text-brand-cream sm:block md:right-10 md:top-20 md:h-24 md:w-24" duration={6} />
      <DecorativeElement type="star" className="bottom-32 left-6 hidden h-8 w-8 text-brand-orange sm:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto hidden h-[380px] w-full max-w-[440px] md:block lg:mx-0 lg:h-[480px] lg:max-w-none">
            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cream opacity-60 blur-3xl filter lg:h-[380px] lg:w-[380px]" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 z-10 h-[220px] w-[220px] overflow-hidden rounded-[32px] border-4 border-white bg-brand-paleblue shadow-md lg:h-[280px] lg:w-[280px] lg:rounded-[36px]"
            >
              <img src={ABOUT_IMAGE_1} alt="Students learning together in a classroom" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 right-0 z-20 h-[180px] w-[240px] overflow-hidden rounded-[32px] border-4 border-white bg-brand-yellow/20 shadow-md lg:h-[230px] lg:w-[300px] lg:rounded-[36px]"
            >
              <img src={ABOUT_IMAGE_2} alt="Children exploring hands-on learning activities" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute right-[18%] top-[38%] z-30 flex h-20 w-20 -translate-y-1/2 rotate-12 items-center justify-center rounded-full bg-brand-teal text-center text-base font-bold leading-tight text-white shadow-lg lg:h-28 lg:w-28 lg:text-xl"
            >
              10K+
              <br />
              Kids
            </motion.div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <SectionHeading eyebrow="About us" title="Who We Are" alignment="left" />

            <div className="flex flex-col gap-4 text-base leading-relaxed text-brand-navy/80 sm:text-lg">
              <p>
                SproutLabs is a learning-focused startup designed to bridge the gap between education and real-world innovation. Our goal is to make learning interactive, practical, and inspiring for students across different age groups and learning levels.
              </p>
              <p>
                As an initiative of Verena Haptic and VR Systems Pvt. Ltd., SproutLabs is rooted in innovation-led learning and future-ready education. We believe that students learn best when they explore, build, experiment, and collaborate in meaningful ways.
              </p>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-4 sm:mt-4 sm:grid-cols-2 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border-2 border-transparent bg-brand-cream p-5 transition-colors hover:border-brand-yellow sm:p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-orange shadow-sm">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">Our Mission</h3>
                <p className="text-sm leading-relaxed text-brand-navy/70">
                  Our mission is to empower students with practical exposure, creative confidence, and innovation skills through thoughtfully designed programs that combine learning with doing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl border-2 border-transparent bg-brand-paleblue p-5 transition-colors hover:border-brand-teal sm:p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-teal shadow-sm">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">Our Vision</h3>
                <p className="text-sm leading-relaxed text-brand-navy/70">
                  We envision a future where every student has access to engaging, hands-on, and future-focused learning experiences that prepare them to think critically, innovate confidently, and participate meaningfully in a changing world.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
