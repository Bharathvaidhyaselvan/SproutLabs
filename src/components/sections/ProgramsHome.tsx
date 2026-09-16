import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { WaveTop, WaveBottom } from '../common/Waves';
import { ArrowRight, Lightbulb, Code2, PenTool, Award, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { programs as programsData } from '../../data/programs';

const icons = [
  <Lightbulb className="h-7 w-7 sm:h-8 sm:w-8" />,
  <Code2 className="h-7 w-7 sm:h-8 sm:w-8" />,
  <PenTool className="h-7 w-7 sm:h-8 sm:w-8" />,
  <Award className="h-7 w-7 sm:h-8 sm:w-8" />,
  <Trophy className="h-7 w-7 sm:h-8 sm:w-8" />,
  <Users className="h-7 w-7 sm:h-8 sm:w-8" />,
];

const textColors = [
  'text-yellow-800',
  'text-orange-800',
  'text-teal-900',
  'text-purple-900',
  'text-orange-900',
  'text-teal-900',
];

export default function ProgramsHome({ showWaves = true }: { showWaves?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-brand-paleblue pb-24 pt-16 sm:pb-28 sm:pt-20 md:pb-32 md:pt-24">
      {showWaves && (
        <div className="absolute left-0 top-0 z-20 w-full">
          <WaveBottom fill="fill-brand-offwhite" />
        </div>
      )}

      <div className="relative z-10 mx-auto mt-6 max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-12 md:px-12">
        <SectionHeading
          eyebrow="Our Programs"
          title="Future-Ready Programs for Every Stage of Learning"
          description="At SproutLabs, our programs are designed to spark curiosity, build confidence, and develop practical future-ready skills through engaging, hands-on learning experiences. We work with institutions to create meaningful student journeys that combine creativity, exploration, and applied learning."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {programsData.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/20 hover:shadow-xl sm:rounded-[40px] sm:p-8"
            >
              <div className={cn('absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-150', program.color)} />

              <div className={cn('relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl sm:mb-6 sm:h-16 sm:w-16', program.color, textColors[index])}>
                {icons[index]}
              </div>

              <h3 className="relative z-10 mb-3 font-heading text-xl font-bold text-brand-navy sm:mb-4 sm:text-2xl">
                {program.title}
              </h3>

              <p className="relative z-10 mb-6 flex-1 text-sm leading-relaxed text-brand-navy/70 sm:mb-8 sm:text-base">
                {program.description}
              </p>

              <Link
                to={`/our-programs/${program.id}`}
                className="relative z-10 mt-auto inline-flex w-fit items-center gap-2 font-bold text-brand-teal transition-colors group-hover:text-brand-orange"
              >
                Explore Program
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {showWaves && (
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-cream" />
        </div>
      )}
    </section>
  );
}
