import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import ProgramsHome from '../components/sections/ProgramsHome';
import AgePathways from '../components/sections/AgePathways';
import CTASection from '../components/sections/CTASection';

export default function Programs() {
  return (
    <>
      {/* Inner Page Hero */}
      <section className="bg-brand-cream pt-20 pb-24 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-navy mb-4"
          >
            Our Programs
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-brand-navy/70 text-sm font-bold uppercase tracking-wider"
          >
            <span>Home</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-brand-teal">Our Programs</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-paleblue" />
        </div>
      </section>

      {/* Reusing Home components for layout */}
      <ProgramsHome />
      <AgePathways />
      <CTASection />
    </>
  );
}
