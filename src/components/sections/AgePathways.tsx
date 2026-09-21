import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion, useInView } from "motion/react";
import { ChevronRight, Cpu, Rocket, Sprout, type LucideProps } from "lucide-react";
import { WaveTop } from "../common/Waves";
import { DecorativeElement } from "../common/DecorativeElement";
import { Button } from "../common/Button";
import { useEnquiryModal } from "../enquiry/EnquiryModalContext";

type PathwayIcon = ComponentType<LucideProps>;

const ageGroups: {
  title: string;
  age: string;
  grades: string;
  description: string;
  color: string;
  ringGradient: string;
  pathStrokeEnd: string;
  delay: number;
  icon: PathwayIcon;
  program: string;
}[] = [
  {
    title: "Junior Innovators",
    age: "Primary School",
    grades: "KG–5",
    description:
      "Designed for curiosity-led learning, creative exploration, foundational STEM exposure, and early innovation.",
    color: "bg-brand-yellow",
    ringGradient:
      "conic-gradient(from 0deg, #F5B84D, #2E9B5D, #019CB7, #FB9722, #F5B84D)",
    pathStrokeEnd: "#FB9722",
    delay: 0,
    icon: Sprout,
    program: "junior",
  },
  {
    title: "STEM Explorers",
    age: "Middle School",
    grades: "Grades 6–8",
    description:
      "Focused on hands-on discovery, structured STEM learning, collaborative problem-solving, and skill development.",
    color: "bg-brand-orange",
    ringGradient:
      "conic-gradient(from 0deg, #FB9722, #FFC48A, #F5B84D, #DA5C67, #FB9722)",
    pathStrokeEnd: "#019CB7",
    delay: 0.2,
    icon: Rocket,
    program: "explorers",
  },
  {
    title: "Tech Pioneers",
    age: "High School",
    grades: "Grades 9–12",
    description:
      "Built for deeper technology engagement, project-based learning, design thinking, competitions, and future skills development.",
    color: "bg-brand-teal",
    ringGradient:
      "conic-gradient(from 0deg, #019CB7, #00A0E0, #5D59D3, #2E9B5D, #019CB7)",
    pathStrokeEnd: "#019CB7",
    delay: 0.4,
    icon: Cpu,
    program: "pioneers",
  },
];

/** -1 = idle; 0–4 = circle → path → circle → path → circle */
type TimelinePhase = -1 | 0 | 1 | 2 | 3 | 4;

const CIRCLE_PHASE_MS = 900;
const PATH_PHASE_MS = 850;
const START_DELAY_MS = 400;

/** Two pulses when a step is reached, then hold — no loop */
const RING_PULSE_ANIMATE = { scale: [1, 1.03, 1, 1.025, 1] };
const RING_PULSE_TRANSITION = {
  duration: 0.85,
  ease: "easeInOut" as const,
  times: [0, 0.25, 0.5, 0.75, 1],
};

const ICON_PULSE_ANIMATE = {
  scale: [1, 1.2, 1, 1.14, 1],
  rotate: [0, -10, 0, 8, 0],
  y: [0, -2, 0, -1, 0],
};
const ICON_PULSE_TRANSITION = {
  duration: 0.85,
  ease: "easeInOut" as const,
  times: [0, 0.25, 0.5, 0.75, 1],
};

function PathwayNode({
  group,
  index,
  phase,
}: {
  group: (typeof ageGroups)[number];
  index: number;
  phase: TimelinePhase;
}) {
  const circlePhase = index * 2;
  const isActive = phase === circlePhase;
  const isReached = phase >= circlePhase;
  const Icon = group.icon;
  const { openEnquiry } = useEnquiryModal();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: group.delay, duration: 0.55, ease: "easeOut" }}
      className="relative z-10 flex flex-col items-center text-center"
    >
      {index !== ageGroups.length - 1 && (
        <div className="absolute left-1/2 top-full mt-2 flex h-8 -translate-x-1/2 flex-col items-center md:hidden">
          <div className="relative h-full w-0.5 overflow-hidden rounded-full bg-brand-navy/15">
            <motion.div
              className="absolute inset-0 origin-top rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${index === 0 ? "#F5B84D" : "#FB9722"}, ${group.pathStrokeEnd})`,
              }}
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: phase >= circlePhase + 1 ? 1 : 0,
              }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
              aria-hidden
            />
          </div>
        </div>
      )}

      <div className="relative mb-5 sm:mb-6">
        {isReached ? (
          <motion.div
            key={isActive ? `pulse-${circlePhase}` : `rest-${circlePhase}`}
            className="relative rounded-full p-[3px] shadow-md"
            style={{ background: group.ringGradient }}
            initial={{ scale: 1 }}
            animate={isActive ? RING_PULSE_ANIMATE : { scale: 1 }}
            transition={isActive ? RING_PULSE_TRANSITION : { duration: 0.2 }}
          >
            <div className="rounded-full bg-white p-[3px]">
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full border-4 border-white shadow-md sm:h-24 sm:w-24 ${group.color}`}
              >
                <motion.span
                  key={isActive ? `icon-pulse-${circlePhase}` : `icon-rest-${circlePhase}`}
                  className="inline-flex"
                  initial={{ scale: 1, rotate: 0, y: 0 }}
                  animate={isActive ? ICON_PULSE_ANIMATE : { scale: 1, rotate: 0, y: 0 }}
                  transition={isActive ? ICON_PULSE_TRANSITION : { duration: 0.2 }}
                >
                  <Icon className="h-9 w-9 text-white sm:h-10 sm:w-10" strokeWidth={2.25} aria-hidden />
                </motion.span>
              </div>
            </div>
          </motion.div>
        ) : (
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full border-4 border-white shadow-md sm:h-24 sm:w-24 ${group.color}`}
          >
            <Icon className="h-9 w-9 text-white sm:h-10 sm:w-10" strokeWidth={2.25} aria-hidden />
          </div>
        )}
      </div>

      <div className="relative z-10 flex w-full flex-col rounded-[28px] border border-brand-navy/5 bg-white p-5 shadow-sm sm:rounded-[32px] sm:p-6">
        <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-orange sm:text-sm">
          {group.age}
        </span>
        <h3 className="mb-1 font-heading text-xl font-black text-brand-navy sm:text-2xl">
          {group.title}
        </h3>
        <span className="mb-3 block font-medium text-brand-navy/60">
          {group.grades}
        </span>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-brand-navy/70">
          {group.description}
        </p>
        <Button
          type="button"
          variant="primary"
          className="w-full px-5 py-2.5 text-sm shadow-none hover:shadow-md sm:text-base"
          onClick={() => openEnquiry({ program: group.program })}
        >
          Explore This Pathway
        </Button>
      </div>
    </motion.div>
  );
}

function DesktopPathTimeline({ phase }: { phase: TimelinePhase }) {
  const path1Done = phase >= 1;
  const path2Done = phase >= 3;
  const path1Active = phase === 1;
  const path2Active = phase === 3;
  const chevron1Lit = phase >= 1;
  const chevron2Lit = phase >= 3;

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-12 z-[1] hidden -translate-y-1/2 md:block"
      aria-hidden
    >
      <div className="absolute left-[16.5%] right-[16.5%] top-1/2 h-0 -translate-y-1/2 border-t-2 border-dashed border-brand-navy/25" />

      <div className="absolute left-[16.5%] right-[50.5%] top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full">
        <motion.div
          className="h-full w-full origin-left rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #F5B84D 0 10px, transparent 10px 18px), linear-gradient(90deg, #F5B84D, #FB9722)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: path1Done ? 1 : 0 }}
          transition={{
            duration: path1Active ? 0.95 : 0.15,
            ease: "easeInOut",
          }}
        />
      </div>
      <div className="absolute left-[50%] right-[16.5%] top-1/2 h-1 -translate-y-1/2 overflow-hidden rounded-full">
        <motion.div
          className="h-full w-full origin-left rounded-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #FB9722 0 10px, transparent 10px 18px), linear-gradient(90deg, #FB9722, #019CB7)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: path2Done ? 1 : 0 }}
          transition={{
            duration: path2Active ? 0.95 : 0.15,
            ease: "easeInOut",
          }}
        />
      </div>

      <div
        className="absolute left-1/3 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-cream p-0.5"
        style={{ color: chevron1Lit ? "#FB9722" : "rgba(0, 64, 128, 0.35)" }}
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
      </div>
      <div
        className="absolute left-2/3 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-cream p-0.5"
        style={{ color: chevron2Lit ? "#019CB7" : "rgba(0, 64, 128, 0.35)" }}
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function AgePathways() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineStartedRef = useRef(false);
  const inView = useInView(timelineRef, { once: true, amount: 0.15 });
  const [phase, setPhase] = useState<TimelinePhase>(-1);

  useEffect(() => {
    if (!inView || timelineStartedRef.current) return;
    timelineStartedRef.current = true;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setPhase(4);
      return;
    }

    setPhase(0);
    let current = 0;
    const timeoutIds: number[] = [];

    const schedule = (fn: () => void, ms: number) => {
      timeoutIds.push(window.setTimeout(fn, ms));
    };

    const delayForPhase = (next: TimelinePhase) =>
      next === 1 || next === 3 ? PATH_PHASE_MS : CIRCLE_PHASE_MS;

    const tick = () => {
      if (current >= 4) return;
      current += 1;
      const next = current as TimelinePhase;
      setPhase(next);
      schedule(tick, delayForPhase(next));
    };

    schedule(tick, START_DELAY_MS);

    return () => {
      timeoutIds.forEach((id) => window.clearTimeout(id));
    };
  }, [inView]);

  return (
    <section
      id="age-pathways"
      className="relative -mt-px overflow-hidden bg-brand-cream py-16 sm:py-20 md:py-24"
    >
      <DecorativeElement
        type="dots"
        className="left-6 top-8 hidden h-48 w-48 text-brand-orange/10 sm:block md:left-10 md:top-10 md:h-64 md:w-64"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="mb-10 text-center sm:mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 font-heading text-2xl font-black text-brand-navy sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Age-Aligned Learning Pathways
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto max-w-2xl text-base text-brand-navy/80 sm:text-lg"
          >
            Our programs evolve as students grow, ensuring age-appropriate
            challenges and continuous skill development.
          </motion.p>
        </div>

        <div ref={timelineRef} className="relative">
          <DesktopPathTimeline phase={phase} />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {ageGroups.map((group, index) => (
              <PathwayNode
                key={group.title}
                group={group}
                index={index}
                phase={phase}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full">
        <WaveTop fill="fill-white" />
      </div>
    </section>
  );
}
