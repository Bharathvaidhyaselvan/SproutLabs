import { motion } from 'motion/react';
import { WaveTop, WaveBottom } from '../components/common/Waves';
import { SectionHeading } from '../components/common/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { CheckCircle2, Users, BookOpen, GraduationCap, Building2 } from 'lucide-react';

const partners = [
  { icon: <Building2 className="w-8 h-8" />, title: "Schools" },
  { icon: <GraduationCap className="w-8 h-8" />, title: "Colleges" },
  { icon: <BookOpen className="w-8 h-8" />, title: "Training Institutes" },
  { icon: <Users className="w-8 h-8" />, title: "Educational Organizations" }
];

const models = [
  "Workshops and special sessions",
  "Recurring training programs for students",
  "Three-month certified course delivery",
  "Innovation clubs and competitions",
  "Academic support and staff augmentation",
  "Advisory support for practical learning and lab development"
];

export default function SchoolPartnerships() {
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
            School Partnerships
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-brand-navy/70 text-sm font-bold uppercase tracking-wider"
          >
            <span>Home</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-brand-teal">School Partnerships</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="Collaboration"
          title="Collaboration with Schools and Institutions"
          description="We work closely with principals, academic leaders, and institutional heads to integrate hands-on STEM and innovation learning seamlessly into their existing ecosystem."
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-paleblue rounded-[32px] p-8 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform shadow-sm border border-brand-teal/20"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-teal shadow-sm">
                {partner.icon}
              </div>
              <h3 className="font-heading font-bold text-brand-navy">{partner.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Models */}
      <section className="py-32 bg-brand-lavender relative overflow-hidden">
        <div className="absolute top-0 left-0 z-20 w-full">
          <WaveBottom fill="fill-brand-offwhite" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-brand-teal rounded-[40px] transform rotate-3"></div>
            <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-[40px] border-4 border-brand-paleblue bg-white">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                alt="Educators collaborating on school partnership programs"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="Partnership Models" title="How We Work Together" alignment="left" />
            
            <ul className="flex flex-col gap-4">
              {models.map((model, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/80 p-4 rounded-2xl"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0" />
                  <span className="text-brand-navy/80 font-medium">{model}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
