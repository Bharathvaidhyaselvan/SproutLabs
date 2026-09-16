import { motion } from 'motion/react';
import { SectionHeading } from '../components/common/SectionHeading';
import { WaveTop } from '../components/common/Waves';
import CTASection from '../components/sections/CTASection';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80';

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-cream px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-heading text-3xl font-black text-brand-navy sm:text-4xl md:text-5xl lg:text-6xl"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy/70 sm:text-sm"
          >
            <span>Home</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <span className="text-brand-teal">About Us</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="mb-16 grid grid-cols-1 items-center gap-10 lg:mb-24 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border-4 border-white bg-brand-paleblue shadow-sm sm:rounded-[40px]">
              <img src={ABOUT_IMAGE} alt="Students engaged in classroom learning" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="order-1 flex flex-col gap-5 lg:order-2 sm:gap-6">
            <SectionHeading eyebrow="Who We Are" title="Bridging Education and Real-World Innovation" alignment="left" />
            <p className="text-base leading-relaxed text-brand-navy/80 sm:text-lg">
              SproutLabs is a learning-focused startup designed to bridge the gap between education and real-world innovation. Our goal is to make learning interactive, practical, and inspiring for students across different age groups and learning levels.
            </p>
            <p className="leading-relaxed text-brand-navy/80">
              As an initiative of Verena Haptic and VR Systems Pvt. Ltd., SproutLabs is rooted in innovation-led learning and future-ready education. We believe that students learn best when they explore, build, experiment, and collaborate in meaningful ways.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-[28px] border border-brand-yellow/30 bg-brand-cream p-6 sm:rounded-[40px] sm:p-10 lg:p-14">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-brand-orange shadow-sm sm:mb-6 sm:h-16 sm:w-16">
              🎯
            </div>
            <h3 className="mb-3 font-heading text-2xl font-black text-brand-navy sm:mb-4 sm:text-3xl">Our Mission</h3>
            <p className="text-base leading-relaxed text-brand-navy/80 sm:text-lg">
              Our mission is to empower students with practical exposure, creative confidence, and innovation skills through thoughtfully designed programs that combine learning with doing.
            </p>
          </div>
          <div className="rounded-[28px] border border-brand-teal/30 bg-brand-paleblue p-6 sm:rounded-[40px] sm:p-10 lg:p-14">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-brand-teal shadow-sm sm:mb-6 sm:h-16 sm:w-16">
              👁️
            </div>
            <h3 className="mb-3 font-heading text-2xl font-black text-brand-navy sm:mb-4 sm:text-3xl">Our Vision</h3>
            <p className="text-base leading-relaxed text-brand-navy/80 sm:text-lg">
              We envision a future where every student has access to engaging, hands-on, and future-focused learning experiences that prepare them to think critically, innovate confidently, and participate meaningfully in a changing world.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
