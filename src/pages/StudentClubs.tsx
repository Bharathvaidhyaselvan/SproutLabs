import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import { SectionHeading } from '../components/common/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const clubs = [
  {
    title: 'Junior Innovators',
    ageGroup: 'KG–5',
    description:
      'A club for young learners to explore ideas, imagination, and early innovation through engaging, age-appropriate activities.',
    color: 'bg-brand-yellow',
    textColor: 'text-yellow-900',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'STEM Explorers',
    ageGroup: 'Grades 6–8',
    description:
      'A club designed to introduce students to science, technology, engineering, and mathematics through practical discovery, guided experimentation, and collaborative learning.',
    color: 'bg-brand-orange',
    textColor: 'text-orange-900',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Tech Pioneers',
    ageGroup: 'Grades 9–12',
    description:
      'A club for students interested in deeper technology exposure, project-based learning, innovation challenges, and future-focused exploration.',
    color: 'bg-brand-teal',
    textColor: 'text-teal-900',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
  },
];

export default function StudentClubs() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-cream px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-heading text-3xl font-black text-brand-navy sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Student Clubs
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy/70 sm:text-sm"
          >
            <span>Home</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <span className="text-brand-teal">Student Clubs</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <SectionHeading
          eyebrow="Our Clubs"
          title="Focused Clubs for Continuous Learning"
          description="SproutLabs hosts focused student clubs that encourage curiosity, creativity, collaboration, and continuous learning."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 md:mt-16 md:grid-cols-3 md:gap-8">
          {clubs.map((club, index) => (
            <motion.div
              key={club.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[28px] border border-brand-paleblue bg-white p-5 shadow-sm transition-all hover:shadow-xl sm:rounded-[40px] sm:p-8"
            >
              <div className="mb-6 h-44 overflow-hidden rounded-[20px] sm:mb-8 sm:h-48 sm:rounded-[24px]">
                <img src={club.image} alt={club.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>

              <div className="mb-4 flex items-center gap-3">
                <span className={cn('rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider', club.color, club.textColor)}>
                  {club.ageGroup}
                </span>
              </div>

              <h3 className="mb-3 font-heading text-xl font-bold text-brand-navy sm:mb-4 sm:text-2xl">{club.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-brand-navy/70 sm:mb-8 sm:text-base">{club.description}</p>

              <Link to="/contact-us" className="mt-auto inline-flex items-center gap-2 font-bold text-brand-teal transition-colors group-hover:text-brand-orange">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
