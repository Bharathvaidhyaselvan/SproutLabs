import { motion } from 'motion/react';
import { Button } from '../common/Button';
import { WaveTop, WaveBottom } from '../common/Waves';
import { DecorativeElement } from '../common/DecorativeElement';
import { useEnquiryModal } from '../enquiry/EnquiryModalContext';

interface CTASectionProps {
  topFill?: string;
  bottomFill?: string;
}

export default function CTASection({
  topFill = 'fill-brand-cream',
  bottomFill = 'fill-brand-cream',
}: CTASectionProps) {
  const { openEnquiry } = useEnquiryModal();

  return (
    <section className="relative overflow-hidden bg-brand-teal pb-36 pt-32 text-center">
      <div className="absolute left-0 top-0 z-20 w-full">
        <WaveBottom fill={topFill} />
      </div>

      <DecorativeElement type="star" className="left-20 top-20 h-12 w-12 text-brand-yellow" />
      <DecorativeElement type="cloud" className="bottom-28 right-20 h-20 w-20 text-white/50" />

      <div className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-darkteal opacity-50 mix-blend-multiply blur-3xl filter" />
      <div className="absolute right-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-paleblue opacity-20 mix-blend-multiply blur-3xl filter" />

      <div className="relative z-10 mx-auto mt-16 max-w-4xl px-6 md:mt-20 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="mb-6 font-heading text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Let's Build Meaningful Learning Experiences Together
          </h2>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
            Whether you are a school, college, learning center, principal, or academic leader, SproutLabs is ready to collaborate with you on workshops, certified courses, competitions, clubs, lab setup, and staffing support. Get in touch with us to discuss your institution's training goals and explore how we can design the right learning experience for your students.
          </p>
          <Button
            type="button"
            variant="accent"
            className="px-10 py-4 text-xl shadow-xl"
            onClick={() => openEnquiry()}
          >
            Apply Now
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full">
        <WaveTop fill={bottomFill} />
      </div>
    </section>
  );
}
