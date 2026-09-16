import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import { SectionHeading } from '../components/common/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { Button } from '../components/common/Button';

export default function LabSetup() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-cream px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-heading text-3xl font-black text-brand-navy sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Lab Setup & Support
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy/70 sm:text-sm"
          >
            <span>Home</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <span className="text-brand-teal">Lab Setup</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <SectionHeading
          eyebrow="Infrastructure"
          title="Building Learning Environments"
          description="SproutLabs supports institutions in creating practical and engaging learning environments through lab setup collaboration, implementation guidance, and program alignment."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          <div className="rounded-[28px] bg-brand-cream p-6 sm:rounded-[32px] sm:p-10">
            <h3 className="mb-3 font-heading text-xl font-bold text-brand-navy sm:mb-4 sm:text-2xl">Lab Setup Collaboration</h3>
            <p className="leading-relaxed text-brand-navy/80">
              We help institutions create practical and engaging learning environments through lab setup collaboration, implementation guidance, and program alignment that supports hands-on STEM and innovation learning.
            </p>
          </div>
          <div className="rounded-[28px] bg-brand-paleblue p-6 sm:rounded-[32px] sm:p-10">
            <h3 className="mb-3 font-heading text-xl font-bold text-brand-navy sm:mb-4 sm:text-2xl">Staff Augmentation</h3>
            <p className="leading-relaxed text-brand-navy/80">
              We also offer flexible staff augmentation models for schools and institutions that need external trainers, facilitators, or delivery support based on academic requirements and scale.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Button to="/contact-us" variant="primary" className="w-full justify-center sm:w-auto">
            Discuss Lab Setup
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
