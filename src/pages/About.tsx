import { motion } from 'motion/react';
import { SectionHeading } from '../components/common/SectionHeading';
import { WaveTop } from '../components/common/Waves';
import CTASection from '../components/sections/CTASection';

export default function About() {
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
            About Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-brand-navy/70 text-sm font-bold uppercase tracking-wider"
          >
            <span>Home</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-brand-teal">About Us</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[40px] bg-brand-paleblue overflow-hidden shadow-sm border-4 border-white flex items-center justify-center">
              <span className="text-brand-teal font-heading font-bold">About Image Placeholder</span>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <SectionHeading eyebrow="Our Story" title="Pioneering Future-Ready Education" alignment="left" />
            <p className="text-brand-navy/80 leading-relaxed text-lg">
              SproutLabs, an initiative of Verena Haptic and VR Systems Pvt. Ltd., was founded with a singular vision: to bridge the gap between traditional education and real-world innovation.
            </p>
            <p className="text-brand-navy/80 leading-relaxed">
              We believe that the best way to learn is by doing. Our hands-on programs are designed to spark curiosity, build creative confidence, and develop practical skills that students will need in an rapidly evolving digital world. From foundational STEM concepts in primary school to advanced robotics and design thinking in high school, we provide continuous learning pathways.
            </p>
          </div>
        </div>

        {/* Mission & Vision Full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           <div className="bg-brand-cream rounded-[40px] p-10 lg:p-14 border border-brand-yellow/30">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-orange shadow-sm text-2xl font-bold">🎯</div>
              <h3 className="text-3xl font-heading font-black mb-4 text-brand-navy">Our Mission</h3>
              <p className="text-brand-navy/80 text-lg leading-relaxed">
                To empower students with practical exposure, creative confidence, and innovation skills through thoughtfully designed programs that combine learning with doing. We strive to make high-quality experiential learning accessible to every student.
              </p>
           </div>
           <div className="bg-brand-paleblue rounded-[40px] p-10 lg:p-14 border border-brand-teal/30">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-brand-teal shadow-sm text-2xl font-bold">👁️</div>
              <h3 className="text-3xl font-heading font-black mb-4 text-brand-navy">Our Vision</h3>
              <p className="text-brand-navy/80 text-lg leading-relaxed">
                We envision a future where every student has access to engaging, hands-on, and future-focused learning experiences that prepare them to think critically, innovate confidently, and participate meaningfully in a changing world.
              </p>
           </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
