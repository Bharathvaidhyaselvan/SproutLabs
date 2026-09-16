import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import { SectionHeading } from '../components/common/SectionHeading';
import CTASection from '../components/sections/CTASection';

export default function Gallery() {
  return (
    <>
      <section className="bg-brand-cream pt-20 pb-24 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-navy mb-4"
          >
            Gallery
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-brand-navy/70 text-sm font-bold uppercase tracking-wider"
          >
            <span>Home</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-brand-teal">Gallery</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <SectionHeading 
          eyebrow="Our Work"
          title="Moments of Innovation"
          description="See our young innovators in action across various workshops and school programs."
        />
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="aspect-square bg-brand-paleblue rounded-[32px] overflow-hidden flex items-center justify-center border-4 border-white shadow-sm hover:shadow-md transition-all">
                <span className="text-brand-teal/50 font-bold">Image Placeholder</span>
             </div>
           ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
