import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { WaveTop, WaveBottom } from '../common/Waves';
import { ArrowRight, Lightbulb, Code2, PenTool, Award, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

const programs = [
  {
    id: 'stem',
    title: 'Foundational STEM Experiences',
    description: 'Spark curiosity through interactive science, technology, engineering, and math experiments.',
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'bg-brand-yellow',
    textColor: 'text-yellow-800',
    link: '/our-programs/foundational-stem-experiences'
  },
  {
    id: 'coding',
    title: 'Coding and Digital Creativity',
    description: 'Learn to code, create games, and understand the logic behind digital innovation.',
    icon: <Code2 className="w-8 h-8" />,
    color: 'bg-brand-orange',
    textColor: 'text-orange-800',
    link: '/our-programs/coding-and-digital-creativity'
  },
  {
    id: 'innovation',
    title: 'Innovation and Design Thinking',
    description: 'Solve real-world problems through structured design thinking and prototyping.',
    icon: <PenTool className="w-8 h-8" />,
    color: 'bg-brand-teal',
    textColor: 'text-teal-900',
    link: '/our-programs/innovation-and-design-thinking'
  },
  {
    id: 'pathways',
    title: 'Certified Three-Month Learning Pathways',
    description: 'Structured, deep-dive courses resulting in practical skills and recognized certificates.',
    icon: <Award className="w-8 h-8" />,
    color: 'bg-brand-lavender',
    textColor: 'text-purple-900',
    link: '/our-programs/certified-three-month-learning-pathways'
  },
  {
    id: 'competitions',
    title: 'Competitions and Challenge-Based Learning',
    description: 'Test skills, work in teams, and build confidence through structured challenges.',
    icon: <Trophy className="w-8 h-8" />,
    color: 'bg-brand-cream',
    textColor: 'text-orange-900',
    link: '/our-programs/competitions-and-challenge-based-learning'
  },
  {
    id: 'custom',
    title: 'Custom Programs for Institutions',
    description: 'Tailored learning journeys designed to meet the specific goals of your school or college.',
    icon: <Users className="w-8 h-8" />,
    color: 'bg-brand-paleblue',
    textColor: 'text-teal-900',
    link: '/our-programs/custom-programs-for-institutions'
  }
];

export default function ProgramsHome() {
  return (
    <section className="relative overflow-hidden bg-brand-paleblue pt-24 pb-32">
      <div className="absolute top-0 left-0 z-20 w-full">
        <WaveBottom fill="fill-brand-offwhite" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mt-12">
        <SectionHeading 
          eyebrow="Our Programs"
          title="Future-Ready Programs for Every Stage of Learning"
          description="At SproutLabs, our programs are designed to spark curiosity, build confidence, and develop practical future-ready skills through engaging, hands-on learning experiences. We work with institutions to create meaningful student journeys that combine creativity, exploration, and applied learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-[40px] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-transparent hover:border-brand-teal/20 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative background blob */}
              <div className={cn("absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-150", program.color)}></div>
              
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10", program.color, program.textColor)}>
                {program.icon}
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4 text-brand-navy relative z-10">
                {program.title}
              </h3>
              
              <p className="text-brand-navy/70 leading-relaxed mb-8 flex-1 relative z-10">
                {program.description}
              </p>
              
              <Link 
                to={program.link}
                className="inline-flex items-center gap-2 font-bold text-brand-teal group-hover:text-brand-orange transition-colors mt-auto relative z-10 w-fit"
              >
                Explore Program
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full">
        <WaveTop fill="fill-brand-cream" />
      </div>
    </section>
  );
}
