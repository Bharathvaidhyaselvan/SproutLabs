import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import { SectionHeading } from '../components/common/SectionHeading';
import CTASection from '../components/sections/CTASection';

export default function LabSetup() {
  return (
    <>
      <section className="bg-brand-cream pt-20 pb-24 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-navy mb-4"
          >
            Lab Setup & Support
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-brand-navy/70 text-sm font-bold uppercase tracking-wider"
          >
            <span>Home</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-brand-teal">Lab Setup</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="Infrastructure"
          title="Building Learning Environments"
          description="SproutLabs supports institutions in creating practical and engaging learning environments through lab setup collaboration, implementation guidance, and program alignment."
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-brand-cream p-10 rounded-[32px]">
             <h3 className="text-2xl font-heading font-bold mb-4 text-brand-navy">Lab Infrastructure</h3>
             <p className="text-brand-navy/80 leading-relaxed">
               We help you select, source, and set up the right equipment for robotics, IoT, and maker spaces, ensuring your investment directly translates to student outcomes.
             </p>
           </div>
           <div className="bg-brand-paleblue p-10 rounded-[32px]">
             <h3 className="text-2xl font-heading font-bold mb-4 text-brand-navy">Staff Augmentation</h3>
             <p className="text-brand-navy/80 leading-relaxed">
               Need expert facilitators? We provide external trainers, delivery support, and co-facilitators to help your institution run successful innovation programs without the overhead of full-time specialized staff.
             </p>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
