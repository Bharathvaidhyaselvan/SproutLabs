import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import ProgramsHome from '../components/sections/ProgramsHome';
import AgePathways from '../components/sections/AgePathways';
import CTASection from '../components/sections/CTASection';
import { SectionHeading } from '../components/common/SectionHeading';
import Process from '../components/sections/Process';

export default function Programs() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-cream px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20">
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-heading text-3xl font-black text-brand-navy sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mx-auto mb-4 max-w-3xl text-base text-brand-navy/80 sm:text-lg"
          >
            Future-ready programs for every stage of learning — online sessions, offline workshops, certified courses, competitions, and custom institutional pathways.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy/70 sm:text-sm"
          >
            <span>Home</span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <span className="text-brand-teal">Our Programs</span>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-paleblue" />
        </div>
      </section>

      <ProgramsHome showWaves={false} />

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Delivery"
            title="How We Deliver"
            description="Our delivery models are intentionally flexible — ranging from one-time workshops and recurring sessions to certified three-month pathways and challenge-based engagement programs. This allows schools and learning centers to choose formats that align with their academic priorities, student needs, and delivery preferences."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {[
              { title: 'Online Sessions', text: 'Live, interactive sessions that make learning accessible and flexible for students and institutions.' },
              { title: 'Offline Workshops', text: 'In-person, hands-on workshops that encourage practical participation and deeper engagement.' },
              { title: 'Three-Month Certified Courses', text: 'Structured learning pathways designed to build knowledge, confidence, and applied skills over time.' },
              { title: 'Competitions and Challenges', text: 'Events that motivate students to think creatively, solve problems, and showcase their ideas.' },
            ].map((item) => (
              <div key={item.title} className="rounded-[24px] border border-brand-paleblue bg-brand-offwhite p-5 sm:rounded-[28px] sm:p-6">
                <h3 className="mb-2 font-heading text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-brand-navy/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AgePathways />
      <Process />
      <CTASection />
    </>
  );
}
