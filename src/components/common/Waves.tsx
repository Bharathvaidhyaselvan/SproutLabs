import { cn } from "../../lib/utils";

interface WaveProps {
  className?: string;
  fill?: string;
}

export function WaveTop({ className, fill = "fill-brand-cream" }: WaveProps) {
  return (
    <div className={cn("pointer-events-none w-full overflow-hidden leading-none", className)} aria-hidden>
      <svg
        className="relative block h-[56px] w-full md:h-[90px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path
          d="M0,90 L1440,90 L1440,42 C1260,78 1080,90 900,68 C720,46 540,10 360,28 C180,46 90,70 0,52 Z"
          className={fill}
        />
      </svg>
    </div>
  );
}

export function WaveBottom({ className, fill = "fill-brand-cream" }: WaveProps) {
  return (
    <div className={cn("pointer-events-none w-full overflow-hidden leading-none", className)} aria-hidden>
      <svg
        className="relative block h-[56px] w-full md:h-[90px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L1440,0 L1440,48 C1260,12 1080,0 900,22 C720,44 540,80 360,62 C180,44 90,20 0,38 Z"
          className={fill}
        />
      </svg>
    </div>
  );
}
