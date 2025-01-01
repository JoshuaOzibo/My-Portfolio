import { useId } from "react";

import { cn } from "../lib/utils";

export function Hero({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}) {
  const id = useId();

  return (
    <div className="relative flex h-[500px] w-[85%] m-auto items-center justify-center overflow-hidden rounded-lg bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        Dot Pattern
      </p>

      <svg
        aria-hidden="true"
        className={cn(
          " inset-0 absolute h-full top-10 w-full fill-neutral-400/80",
          className
        )}
        {...props}
      >
        <defs>
          <radialGradient id={`fade-${id}`}>
            <stop offset="50%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.1" />
          </radialGradient>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
          </pattern>
          <mask id={`mask-${id}`}>
            <rect width="100%" height="100%" fill={`url(#fade-${id})`} />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill={`url(#${id})`}
          mask={`url(#mask-${id})`}
        />
      </svg>
    </div>
  );
}

export default Hero;
