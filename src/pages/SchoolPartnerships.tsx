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
      <section className="relative overflow-hidden bg-brand-cream px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-heading text-3xl font-black text-brand-navy sm:text-4xl md:text-5xl lg:text-6xl"
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

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <SectionHeading 
          eyebrow="Collaboration"
          title="Collaboration with Schools and Institutions"
          description="SproutLabs collaborates with schools, colleges, training institutes, principals, academic leaders, and educational organizations to create meaningful student learning journeys. Our approach is adaptable and aligned to the goals of each institution."
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
      <section className="relative overflow-hidden bg-brand-lavender py-20 sm:py-28 md:py-32">
        <div className="absolute left-0 top-0 z-20 w-full">
          <WaveBottom fill="fill-brand-offwhite" />
        </div>
        
        <div className="relative z-10 mx-auto mt-8 grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:mt-12 sm:px-6 md:px-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="absolute inset-0 rotate-3 rounded-[32px] bg-brand-teal sm:rounded-[40px]"></div>
            <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-[32px] border-4 border-brand-paleblue bg-white sm:rounded-[40px]">
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
