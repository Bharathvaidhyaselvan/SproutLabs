import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { WaveTop } from '../components/common/Waves';
import CTASection from '../components/sections/CTASection';
import { Button } from '../components/common/Button';
import { ArrowLeft } from 'lucide-react';
import { programsById } from '../data/programs';

const PROGRAM_IMAGES: Record<string, string> = {
  'foundational-stem-experiences':
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
  'coding-and-digital-creativity':
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80',
  'innovation-and-design-thinking':
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
  'certified-three-month-learning-pathways':
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
  'competitions-and-challenge-based-learning':
    'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=1000&q=80',
  'custom-programs-for-institutions':
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
};

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const program = id ? programsById[id] : null;

  if (!program) {
    return (
      <div className="px-4 py-20 text-center sm:py-24">
        <p className="mb-6 text-brand-navy/70">Program not found.</p>
        <Button to="/our-programs" variant="primary">
          Back to Programs
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className={`${program.color} relative overflow-hidden px-4 pb-20 pt-16 text-center sm:px-6 sm:pb-24 sm:pt-20`}>
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 flex justify-center sm:mb-8">
            <Link
              to="/our-programs"
              className="inline-flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-sm font-bold text-brand-navy/60 transition-colors hover:text-brand-navy"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Programs
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-heading text-3xl font-black text-brand-navy sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {program.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base font-medium text-brand-navy/80 sm:text-lg md:text-xl"
          >
            {program.subtitle}
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:px-12 md:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-brand-paleblue bg-white shadow-sm sm:aspect-square sm:rounded-[40px]">
            <img
              src={PROGRAM_IMAGES[program.id]}
              alt={program.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="mb-8 text-base leading-relaxed text-brand-navy/80 sm:text-lg">{program.description}</p>
            <h2 className="mb-5 font-heading text-2xl font-black text-brand-navy sm:mb-8 sm:text-3xl">What&apos;s Included</h2>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {program.courses.map((course, i) => (
                <motion.li
                  key={course.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-brand-paleblue bg-white p-4 shadow-sm sm:p-5"
                >
                  <div className="mb-1 flex items-center gap-3">
                    <div className={`h-3 w-3 shrink-0 rounded-full ${program.color}`} />
                    <span className="font-heading text-base font-bold text-brand-navy sm:text-lg">{course.name}</span>
                  </div>
                  <p className="pl-6 text-sm leading-relaxed text-brand-navy/70">{course.description}</p>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 sm:mt-12">
              <Button to="/contact-us" variant="primary" className="w-full justify-center sm:w-auto">
                Enquire About This Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
