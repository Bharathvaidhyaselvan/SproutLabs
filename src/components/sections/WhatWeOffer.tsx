import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { Laptop, Hammer, Award, Trophy, Building2, Wrench } from 'lucide-react';
import { cn } from '../../lib/utils';
import { WaveBottom } from '../common/Waves';

const LEARNING_IMAGE =
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80';

const offers = [
  {
    title: 'Online Sessions',
    description: 'Online sessions for accessible and flexible learning.',
    icon: <Laptop className="h-6 w-6" />,
    color: 'bg-brand-paleblue text-brand-teal',
  },
  {
    title: 'Offline Workshops',
    description: 'Offline workshops with hands-on activities.',
    icon: <Hammer className="h-6 w-6" />,
    color: 'bg-brand-cream text-brand-orange',
  },
  {
    title: 'Three-Month Courses',
    description: 'Three-month certified courses for structured skill-building.',
    icon: <Award className="h-6 w-6" />,
    color: 'bg-brand-yellow/30 text-yellow-700',
  },
  {
    title: 'Student Competitions',
    description: 'Student competitions that encourage creativity and teamwork.',
    icon: <Trophy className="h-6 w-6" />,
    color: 'bg-brand-lavender text-purple-700',
  },
  {
    title: 'School Collaborations',
    description: 'School and institutional collaborations for long-term learning programs.',
    icon: <Building2 className="h-6 w-6" />,
    color: 'bg-green-100 text-green-700',
  },
  {
    title: 'Lab Setup Support',
    description: 'Lab setup support and staff augmentation for institutions.',
    icon: <Wrench className="h-6 w-6" />,
    color: 'bg-red-100 text-red-700',
  },
];

export default function WhatWeOffer() {
  return (
    <section className="relative bg-white py-20 sm:py-28 md:py-32">
      <div className="absolute left-0 top-0 z-20 w-full">
        <WaveBottom fill="fill-brand-lavender" />
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-7xl px-4 sm:mt-12 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6 sm:gap-8">
            <SectionHeading eyebrow="We Offer" title="What We Offer at a Glance" alignment="left" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {offers.map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-3 rounded-3xl border border-brand-paleblue bg-brand-offwhite p-5 transition-shadow hover:shadow-md"
                >
                  <div className={cn('flex h-12 w-12 items-center justify-center rounded-2xl', offer.color)}>
                    {offer.icon}
                  </div>
                  <h4 className="font-heading text-lg font-bold text-brand-navy">{offer.title}</h4>
                  <p className="text-sm leading-relaxed text-brand-navy/70">{offer.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[280px] w-full sm:h-[400px] lg:h-[600px]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[32px] border-4 border-brand-paleblue bg-brand-cream shadow-lg sm:rounded-tl-[100px] sm:rounded-br-[100px] sm:rounded-tr-[30px] sm:rounded-bl-[30px] sm:border-8">
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
