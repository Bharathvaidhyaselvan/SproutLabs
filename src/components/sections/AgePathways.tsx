import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { WaveTop } from '../common/Waves';
import { DecorativeElement } from '../common/DecorativeElement';

const ageGroups = [
  {
    title: "Junior Innovators",
    age: "Primary School",
    grades: "KG–5",
    color: "bg-brand-yellow",
    delay: 0,
    icon: "🌱"
  },
  {
    title: "STEM Explorers",
    age: "Middle School",
    grades: "Grades 6–8",
    color: "bg-brand-orange",
    delay: 0.2,
    icon: "🚀"
  },
  {
    title: "Tech Pioneers",
    age: "High School",
    grades: "Grades 9–12",
    color: "bg-brand-teal",
    delay: 0.4,
    icon: "⚡"
  }
];

export default function AgePathways() {
  return (
    <section className="relative bg-brand-cream py-24 overflow-hidden">
      <DecorativeElement type="dots" className="w-64 h-64 top-10 left-10 text-brand-orange/10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-navy mb-4">
            A Journey of Growth
          </h2>
          <p className="text-brand-navy/80 text-lg max-w-2xl mx-auto">
            Our programs evolve as students grow, ensuring age-appropriate challenges and continuous skill development.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {/* Desktop connector through icon centers */}
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
                {/* Mobile connector */}
                {index !== ageGroups.length - 1 && (
                  <div className="absolute left-1/2 top-full mt-2 flex h-8 -translate-x-1/2 flex-col items-center md:hidden">
                    <div className="h-full w-px border-l-2 border-dashed border-brand-navy/20" />
                  </div>
                )}

                <div className={`relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white text-4xl shadow-md ${group.color}`}>
                  {group.icon}
                </div>

                <div className="relative z-10 w-full rounded-[32px] border border-brand-navy/5 bg-white p-6 shadow-sm">
                  <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand-orange">{group.age}</span>
                  <h3 className="mb-1 font-heading text-2xl font-black text-brand-navy">{group.title}</h3>
                  <span className="font-medium text-brand-navy/60">{group.grades}</span>
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
