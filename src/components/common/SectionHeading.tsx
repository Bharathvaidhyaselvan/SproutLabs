import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, alignment = 'center', className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2 sm:gap-3", alignment === 'center' ? "items-center text-center" : "items-start text-left", className)}>
      {eyebrow && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-full bg-brand-lightorange/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange sm:px-4 sm:text-sm md:text-base"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-heading text-2xl font-black leading-tight text-brand-navy sm:text-3xl md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn("mt-1 max-w-2xl text-base leading-relaxed text-brand-navy/80 sm:mt-2 sm:text-lg", alignment === 'center' ? "mx-auto" : "")}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
