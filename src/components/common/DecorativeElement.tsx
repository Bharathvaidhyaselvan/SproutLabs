import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { Star, Cloud, Sparkles, BookOpen, Lightbulb, Rocket } from 'lucide-react';

type ElementType = 'star' | 'cloud' | 'sparkle' | 'book' | 'bulb' | 'rocket' | 'blob1' | 'blob2' | 'dots';

interface DecorativeElementProps {
  type: ElementType;
  className?: string;
  color?: string;
  delay?: number;
  duration?: number;
}

export function DecorativeElement({ type, className, color = 'text-brand-yellow', delay = 0, duration = 4 }: DecorativeElementProps) {
  
  const getElement = () => {
    switch (type) {
      case 'star': return <Star className="w-full h-full fill-current" />;
      case 'cloud': return <Cloud className="w-full h-full fill-current" />;
      case 'sparkle': return <Sparkles className="w-full h-full fill-current" />;
      case 'book': return <BookOpen className="w-full h-full fill-current" />;
      case 'bulb': return <Lightbulb className="w-full h-full fill-current" />;
      case 'rocket': return <Rocket className="w-full h-full fill-current" />;
      case 'blob1': return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current opacity-20">
          <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.6,76,43.9C68.2,57.2,57,68.5,43.4,75.4C29.8,82.3,14.9,84.8,-0.1,85C-15.1,85.2,-30.2,83.1,-43.3,76.1C-56.4,69.1,-67.5,57.2,-75.7,43.4C-83.9,29.6,-89.2,14.8,-89.6,-0.2C-90,-15.2,-85.5,-30.4,-77.3,-44.2C-69.1,-58,-57.2,-70.4,-43.1,-77.6C-29,-84.8,-14.5,-86.8,0.7,-88C15.9,-89.2,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      );
      case 'blob2': return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current opacity-20">
          <path d="M51.7,-64.3C66.5,-54.6,77.5,-38.5,82.1,-21.1C86.7,-3.7,84.9,15.1,76.5,31.4C68.1,47.7,53.1,61.5,36.4,69.3C19.7,77.1,1.3,79,-16.1,75.5C-33.5,72,-49.9,63.2,-61.4,49.8C-72.9,36.4,-79.5,18.2,-79.8,-0.2C-80.1,-18.6,-74.1,-37.2,-62.1,-51.2C-50.1,-65.2,-32.1,-74.6,-14.7,-74C2.7,-73.4,20.1,-62.8,36.9,-73.9Z" transform="translate(100 100)" />
        </svg>
      );
      case 'dots': return (
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="fill-current opacity-20">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle fill="currentColor" cx="10" cy="10" r="2"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
        </svg>
      );
      default: return null;
    }
  };

  return (
    <motion.div
      className={cn("absolute pointer-events-none z-0", color, className)}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      {getElement()}
    </motion.div>
  );
}
