import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { DecorativeElement } from '../common/DecorativeElement';
import { CheckCircle2 } from 'lucide-react';

const CENTRAL_IMAGE =
  'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1000&q=80';

const reasons = [
  "Flexible delivery in both online and offline modes",
  "Practical, engaging, and student-friendly learning experiences",
  "Programs aligned to institutional needs and student growth",
  "Certified learning pathways for stronger outcomes",
  "Support for innovation clubs, competitions, and experiential learning environments"
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-brand-lavender py-16 sm:py-20 md:py-24">
      <DecorativeElement type="blob2" className="pointer-events-none -left-20 -top-20 hidden h-[400px] w-[400px] text-white/50 sm:block md:h-[600px] md:w-[600px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto lg:max-w-none"
            >
              <div className="absolute inset-0 bg-brand-teal rounded-[40px] md:rounded-full transform rotate-3 shadow-lg"></div>
              <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-[40px] border-8 border-brand-cream bg-white md:rounded-full">
                <img
                  src={CENTRAL_IMAGE}
                  alt="Students engaged in classroom learning"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Accent Cards */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-brand-paleblue flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-xl">🏆</div>
                <div className="font-bold text-brand-navy text-sm">Award Winning</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-brand-paleblue flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-xl">⭐</div>
                <div className="font-bold text-brand-navy text-sm">Expert Mentors</div>
              </motion.div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <SectionHeading 
              eyebrow="Why Choose" 
              title="Why Choose SproutLabs" 
              alignment="left"
            />
            
            <ul className="flex flex-col gap-6">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/60 p-4 rounded-2xl hover:bg-white transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-brand-navy/80 font-medium leading-relaxed">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
