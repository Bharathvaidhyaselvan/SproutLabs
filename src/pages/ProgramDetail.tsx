import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { WaveTop, WaveBottom } from '../components/common/Waves';
import CTASection from '../components/sections/CTASection';
import { Button } from '../components/common/Button';
import { ArrowLeft } from 'lucide-react';

const programsData: Record<string, any> = {
  'foundational-stem-experiences': {
    title: 'Foundational STEM Experiences',
    subtitle: 'Building the building blocks of science and technology.',
    color: 'bg-brand-yellow',
    courses: ['STEM Discovery Workshops', 'Young Inventors Program', 'Everyday Science and Innovation']
  },
  'coding-and-digital-creativity': {
    title: 'Coding and Digital Creativity',
    subtitle: 'From logic to creation in the digital realm.',
    color: 'bg-brand-orange',
    courses: ['Code Blocks for Game Creation', 'Physics Through Play', 'IoT Explorers', 'Robotics for Young Innovators', 'Art and Design Studio']
  },
  'innovation-and-design-thinking': {
    title: 'Innovation and Design Thinking',
    subtitle: 'Structuring creativity to solve real-world problems.',
    color: 'bg-brand-teal',
    courses: ['Innovation Lab Sessions', 'Design Thinking for Students', 'Build, Create, Present']
  },
  'certified-three-month-learning-pathways': {
    title: 'Certified Three-Month Learning Pathways',
    subtitle: 'Deep-dive structured courses for substantial skill building.',
    color: 'bg-brand-lavender',
    courses: ['STEM Foundations Certificate', 'Innovation Skills Certificate', 'Future Skills Explorer Certificate']
  },
  'competitions-and-challenge-based-learning': {
    title: 'Competitions and Challenge-Based Learning',
    subtitle: 'Putting skills to the test in collaborative environments.',
    color: 'bg-brand-cream',
    courses: ['Innovation Challenges', 'STEM Competitions', 'School Showcase Programs']
  },
  'custom-programs-for-institutions': {
    title: 'Custom Programs for Institutions',
    subtitle: 'Tailored solutions for your educational goals.',
    color: 'bg-brand-paleblue',
    courses: ['Weekend workshops', 'Club journeys', 'Bootcamps', 'Holiday intensives', 'Certified three-month tracks']
  }
};

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const program = id ? programsData[id] : null;

  if (!program) {
    return <div className="p-24 text-center">Program not found.</div>;
  }

  return (
    <>
      <section className={`${program.color} pt-20 pb-24 relative overflow-hidden text-center`}>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="mb-8 flex justify-center"
          >
             <Link to="/our-programs" className="inline-flex items-center gap-2 text-brand-navy/60 hover:text-brand-navy transition-colors bg-white/50 px-4 py-2 rounded-full text-sm font-bold">
               <ArrowLeft className="w-4 h-4" /> Back to Programs
             </Link>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-navy mb-4"
          >
            {program.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-brand-navy/80 text-xl font-medium"
          >
            {program.subtitle}
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 z-20 w-full">
          <WaveTop fill="fill-brand-offwhite" />
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-[40px] bg-white border border-brand-paleblue overflow-hidden shadow-sm flex items-center justify-center p-12">
             <div className={`w-full h-full rounded-[24px] flex items-center justify-center ${program.color}`}>
                <span className="font-heading font-bold text-brand-navy/50 text-xl text-center px-4">Program Illustration<br/>Placeholder</span>
             </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-black text-brand-navy mb-8">What's Included</h2>
            <ul className="flex flex-col gap-4">
              {program.courses.map((course: string, i: number) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-brand-paleblue"
                >
                  <div className={`w-3 h-3 rounded-full ${program.color} shrink-0`}></div>
                  <span className="text-brand-navy font-bold text-lg">{course}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-12">
               <Button to="/contact-us" variant="primary">Enquire About This Program</Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
