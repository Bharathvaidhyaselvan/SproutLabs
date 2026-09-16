import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import { SectionHeading } from '../components/common/SectionHeading';
import CTASection from '../components/sections/CTASection';
import { Hammer, Trophy, CalendarDays, Building2 } from 'lucide-react';

const eventTypes = [
  {
    title: 'Hands-On Workshops',
    description: 'Interactive sessions focused on STEM, creativity, coding, robotics, and innovation.',
    icon: <Hammer className="h-7 w-7" />,
    color: 'bg-brand-cream text-brand-orange',
  },
  {
    title: 'Student Competitions',
    description: 'Challenge-based events that encourage teamwork, problem-solving, and idea presentation.',
    icon: <Trophy className="h-7 w-7" />,
    color: 'bg-brand-lavender text-purple-700',
  },
  {
    title: 'Holiday and Special Programs',
    description: 'Seasonal learning experiences designed to keep students engaged during breaks and special occasions.',
    icon: <CalendarDays className="h-7 w-7" />,
    color: 'bg-brand-yellow/30 text-yellow-800',
  },
  {
    title: 'Institution Collaboration Events',
    description: 'Custom events planned with schools, colleges, and learning centers for student engagement and outreach.',
    icon: <Building2 className="h-7 w-7" />,
    color: 'bg-brand-paleblue text-brand-teal',
  },
];

export default function Events() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-cream px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-heading text-3xl font-black text-brand-navy sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Events & Workshops
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy/70 sm:text-sm"
          >
            <span>Home</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <span className="text-brand-teal">Events</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-20 md:px-12 md:py-24">
        <SectionHeading
          eyebrow="Experiences"
          title="Workshops, Competitions, and Community Learning Experiences"
          description="SproutLabs hosts and supports events that bring learning to life through active participation, collaboration, and discovery. Our events are designed to energize students, engage institutions, and create memorable experiences that combine education with creativity and innovation."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:mt-14 sm:grid-cols-2 sm:gap-6 md:mt-16">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[28px] border border-brand-paleblue bg-white p-6 shadow-sm sm:rounded-[32px] sm:p-8"
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${event.color}`}>
                {event.icon}
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-brand-navy">{event.title}</h3>
              <p className="text-sm leading-relaxed text-brand-navy/70 sm:text-base">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
