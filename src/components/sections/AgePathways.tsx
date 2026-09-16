import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { WaveTop } from '../common/Waves';
import { DecorativeElement } from '../common/DecorativeElement';

const ageGroups = [
  {
    title: 'Junior Innovators',
    age: 'Primary School',
    grades: 'KG–5',
    description:
      'Designed for curiosity-led learning, creative exploration, foundational STEM exposure, and early innovation.',
    color: 'bg-brand-yellow',
    delay: 0,
    icon: '🌱',
  },
  {
    title: 'STEM Explorers',
    age: 'Middle School',
    grades: 'Grades 6–8',
    description:
      'Focused on hands-on discovery, structured STEM learning, collaborative problem-solving, and skill development.',
    color: 'bg-brand-orange',
    delay: 0.2,
    icon: '🚀',
  },
  {
    title: 'Tech Pioneers',
    age: 'High School',
    grades: 'Grades 9–12',
    description:
      'Built for deeper technology engagement, project-based learning, design thinking, competitions, and future skills development.',
    color: 'bg-brand-teal',
    delay: 0.4,
    icon: '⚡',
  },
];

export default function AgePathways() {
  return (
    <section className="relative overflow-hidden bg-brand-cream py-16 sm:py-20 md:py-24">
      <DecorativeElement type="dots" className="left-6 top-8 hidden h-48 w-48 text-brand-orange/10 sm:block md:left-10 md:top-10 md:h-64 md:w-64" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="mb-10 text-center sm:mb-14 md:mb-16">
          <h2 className="mb-3 font-heading text-2xl font-black text-brand-navy sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Age-Aligned Learning Pathways
          </h2>
          <p className="mx-auto max-w-2xl text-base text-brand-navy/80 sm:text-lg">
            Our programs evolve as students grow, ensuring age-appropriate challenges and continuous skill development.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            <div className="pointer-events-none absolute inset-x-0 top-12 z-0 hidden -translate-y-1/2 md:block" aria-hidden>
              <div className="absolute left-[16.5%] right-[16.5%] top-1/2 h-0 -translate-y-1/2 border-t-2 border-dashed border-brand-navy/25" />
              <div className="absolute left-1/3 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-cream p-0.5 text-brand-navy/35">
                <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="absolute left-2/3 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-cream p-0.5 text-brand-navy/35">
                <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
              </div>
            </div>

            {ageGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: group.delay }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {index !== ageGroups.length - 1 && (
                  <div className="absolute left-1/2 top-full mt-2 flex h-8 -translate-x-1/2 flex-col items-center md:hidden">
                    <div className="h-full w-px border-l-2 border-dashed border-brand-navy/20" />
                  </div>
                )}

                <div className={`relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white text-3xl shadow-md sm:mb-6 sm:h-24 sm:w-24 sm:text-4xl ${group.color}`}>
                  {group.icon}
                </div>

                <div className="relative z-10 w-full rounded-[28px] border border-brand-navy/5 bg-white p-5 shadow-sm sm:rounded-[32px] sm:p-6">
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-orange sm:text-sm">{group.age}</span>
                  <h3 className="mb-1 font-heading text-xl font-black text-brand-navy sm:text-2xl">{group.title}</h3>
                  <span className="mb-3 block font-medium text-brand-navy/60">{group.grades}</span>
                  <p className="text-sm leading-relaxed text-brand-navy/70">{group.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full">
        <WaveTop fill="fill-white" />
      </div>
    </section>
  );
}
