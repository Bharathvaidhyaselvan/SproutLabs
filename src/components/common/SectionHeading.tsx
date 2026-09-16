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
    <div className={cn("flex flex-col gap-3", alignment === 'center' ? "items-center text-center" : "items-start text-left", className)}>
      {eyebrow && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-orange font-bold tracking-wider uppercase text-sm md:text-base bg-brand-lightorange/30 px-4 py-1.5 rounded-full"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-brand-navy leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn("text-brand-navy/80 text-lg max-w-2xl mt-2 leading-relaxed", alignment === 'center' ? "mx-auto" : "")}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
