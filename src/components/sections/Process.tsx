import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";
import { DecorativeElement } from "../common/DecorativeElement";

const steps = [
  {
    number: "01",
    title: "Choose Your Learning Format",
    description:
      "Online sessions, offline workshops, or hybrid models tailored for your institution.",
  },
  {
    number: "02",
    title: "Expert Teachers & Facilitators",
    description:
      "Learn from passionate educators who bring real-world experience into the classroom.",
  },
  {
    number: "03",
    title: "Hands-On Experience",
    description:
      "Practical building, coding, and creating rather than just theoretical learning.",
  },
  {
    number: "04",
    title: "Structured Programs",
    description:
      "Clear pathways from foundational skills to advanced innovation challenges.",
  },
];

const STEP_MS = 950;
const START_DELAY_MS = 350;

/** Matches hover: scale-110 + teal ring visible */
const CIRCLE_HOVER_SCALE = 1.1;

function ProcessNumberCircle({
  number,
  index,
  activeIndex,
  timelineDone,
  hoveredIndex,
  onHoverStart,
  onHoverEnd,
}: {
  number: string;
  index: number;
  activeIndex: number;
  timelineDone: boolean;
  hoveredIndex: number | null;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const isHovered = hoveredIndex === index;
  const isAutoActive = !timelineDone && activeIndex === index && !isHovered;

  return (
    <motion.div
      className="relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-brand-cream shadow-md"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      animate={{
        scale: isHovered
          ? CIRCLE_HOVER_SCALE
          : isAutoActive
            ? [1, CIRCLE_HOVER_SCALE]
            : 1,
      }}
      transition={{
        duration: 0.55,
        ease: "easeInOut",
        repeat: isAutoActive ? Infinity : 0,
        repeatType: "mirror",
      }}
    >
      <span className="font-heading text-3xl font-black text-brand-teal">
        {number}
      </span>
      <motion.div
        className="pointer-events-none absolute inset-0 scale-110 rounded-full border-2 border-brand-teal"
        aria-hidden
        animate={{
          opacity: isHovered ? 1 : isAutoActive ? [0, 1] : 0,
        }}
        transition={{
          duration: 0.55,
          ease: "easeInOut",
          repeat: isAutoActive ? Infinity : 0,
          repeatType: "mirror",
        }}
      />
    </motion.div>
  );
}

export default function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineStartedRef = useRef(false);
  const inView = useInView(timelineRef, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(-1);
  const [timelineDone, setTimelineDone] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || timelineStartedRef.current) return;
    timelineStartedRef.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setTimelineDone(true);
      setActiveIndex(steps.length - 1);
      return;
    }

    const timeoutIds: number[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timeoutIds.push(window.setTimeout(fn, ms));
    };

    let step = 0;
    setActiveIndex(0);

    const tick = () => {
      if (step >= steps.length - 1) {
        setTimelineDone(true);
        setActiveIndex(-1);
        return;
      }
      step += 1;
      setActiveIndex(step);
      schedule(tick, STEP_MS);
    };

    schedule(tick, START_DELAY_MS);

    return () => {
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, [inView]);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <DecorativeElement
        type="cloud"
        className="left-20 top-20 h-16 w-16 text-brand-paleblue"
      />
      <DecorativeElement
        type="star"
        className="bottom-20 right-20 h-8 w-8 text-brand-yellow"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading eyebrow="Process" title="How We Deliver" />

        <div ref={timelineRef} className="relative mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div
              className="pointer-events-none absolute inset-x-0 top-12 z-0 hidden -translate-y-1/2 lg:block"
              aria-hidden
            >
              <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-0 -translate-y-1/2 border-t-2 border-dashed border-brand-teal/30" />
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-0.5 text-brand-teal/40"
                  style={{ left: `${i * 25}%` }}
                >
                  <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
                </div>
              ))}
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {index !== steps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-24 h-12 w-px -translate-x-1/2 border-l-2 border-dashed border-brand-teal/30 lg:hidden"
                    aria-hidden
                  />
                )}

                <ProcessNumberCircle
                  number={step.number}
                  index={index}
                  activeIndex={activeIndex}
                  timelineDone={timelineDone}
                  hoveredIndex={hoveredIndex}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                />

                <h3 className="mb-3 min-h-[3.5rem] font-heading text-xl font-bold text-brand-navy">
                  {step.title}
                </h3>
                <p className="px-2 text-sm leading-relaxed text-brand-navy/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
