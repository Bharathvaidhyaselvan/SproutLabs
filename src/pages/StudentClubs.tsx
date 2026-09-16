import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import { SectionHeading } from '../components/common/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const clubs = [
  {
    title: "Junior Innovators",
    ageGroup: "KG–5",
    description: "A fun, highly interactive environment where young minds learn basic logic, building, and simple science experiments through play.",
    color: "bg-brand-yellow",
    textColor: "text-yellow-900"
  },
  {
    title: "STEM Explorers",
    ageGroup: "Grades 6–8",
    description: "Diving deeper into coding, robotics, and design thinking. Students start building their own functional projects and learning problem-solving.",
    color: "bg-brand-orange",
    textColor: "text-orange-900"
  },
  {
    title: "Tech Pioneers",
    ageGroup: "Grades 9–12",
    description: "Advanced innovation labs focusing on real-world applications, complex programming, electronics, and preparing for competitive challenges.",
    color: "bg-brand-teal",
    textColor: "text-teal-900"
  }
];

export default function StudentClubs() {
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
            Student Clubs
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-brand-navy/70 text-sm font-bold uppercase tracking-wider"
          >
            <span>Home</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span className="text-brand-teal">Student Clubs</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      {/* Clubs Content */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading 
          eyebrow="Our Clubs"
          title="After-School Innovation Hubs"
          description="Our student clubs provide a dedicated space for continuous, curiosity-driven learning outside of standard academic hours."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {clubs.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[40px] p-8 shadow-sm border border-brand-paleblue hover:shadow-xl transition-all flex flex-col group"
            >
              <div className={cn("h-48 rounded-[24px] mb-8 flex items-center justify-center", club.color)}>
                 <span className={cn("font-heading font-bold opacity-60", club.textColor)}>Illustration Placeholder</span>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <span className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider", club.color, club.textColor)}>
                  {club.ageGroup}
                </span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">{club.title}</h3>
              <p className="text-brand-navy/70 leading-relaxed mb-8 flex-1">{club.description}</p>
              
              <Link to="/contact-us" className="inline-flex items-center gap-2 font-bold text-brand-teal group-hover:text-brand-orange transition-colors mt-auto">
                Learn More
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
