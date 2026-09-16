import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { Laptop, Hammer, Award, Trophy, Building2, Wrench } from 'lucide-react';
import { cn } from '../../lib/utils';
import { WaveBottom } from '../common/Waves';

const LEARNING_IMAGE =
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80';

const offers = [
  {
    title: "Online Sessions",
    description: "Accessible and flexible learning from anywhere.",
    icon: <Laptop className="w-6 h-6" />,
    color: "bg-brand-paleblue text-brand-teal"
  },
  {
    title: "Offline Workshops",
    description: "Hands-on activities and practical building.",
    icon: <Hammer className="w-6 h-6" />,
    color: "bg-brand-cream text-brand-orange"
  },
  {
    title: "Three-Month Courses",
    description: "Certified pathways for structured skill-building.",
    icon: <Award className="w-6 h-6" />,
    color: "bg-brand-yellow/30 text-yellow-700"
  },
  {
    title: "Student Competitions",
    description: "Encouraging creativity and teamwork.",
    icon: <Trophy className="w-6 h-6" />,
    color: "bg-brand-lavender text-purple-700"
  },
  {
    title: "School Collaborations",
    description: "Long-term learning programs for institutions.",
    icon: <Building2 className="w-6 h-6" />,
    color: "bg-green-100 text-green-700"
  },
  {
    title: "Lab Setup Support",
    description: "Infrastructure and staff augmentation.",
    icon: <Wrench className="w-6 h-6" />,
    color: "bg-red-100 text-red-700"
  }
];

export default function WhatWeOffer() {
  return (
    <section className="relative bg-white py-32">
      <div className="absolute top-0 left-0 z-20 w-full">
        <WaveBottom fill="fill-brand-lavender" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-8">
            <SectionHeading 
              eyebrow="We Offer" 
              title="What We Offer at a Glance" 
              alignment="left"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-3 p-5 rounded-3xl bg-brand-offwhite border border-brand-paleblue hover:shadow-md transition-shadow"
                >
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", offer.color)}>
                    {offer.icon}
                  </div>
                  <h4 className="font-heading font-bold text-brand-navy text-lg">{offer.title}</h4>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">{offer.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] w-full"
            >
              <div className="absolute inset-0 overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-[30px] rounded-bl-[30px] border-8 border-brand-paleblue bg-brand-cream shadow-lg">
                <img
                  src={LEARNING_IMAGE}
                  alt="Children learning together in school"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
