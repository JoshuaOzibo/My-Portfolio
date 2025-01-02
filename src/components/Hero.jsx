import { useId } from "react";
import MyImage from "../assets/swiftcareerPreviewImage.webp";

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
    <div className="relative -top-[100px] flex h-[800px] w-[85%] m-auto items-center justify-center overflow-hidden z-10 rounded-lg bg-background">
      <svg
        aria-hidden="true"
        className={cn(
          " inset-0 absolute h-full z-10 top-20 w-full fill-neutral-400/80",
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

      <div className=" border mt-[200px] px-5 z-20 border-gray-400 rounded-lg py-3 md:w-[450px]">
        <img
          className="w-[150px] bg-slate-500 h-[150px] m-auto object-cover rounded-full"
          src={MyImage}
          alt="MyImage"
        />
        <div className="space-y-2">
          <h1 className="text-center text-3xl font-bold">Ozibo Joshua</h1>

          <div className=" w-full flex justify-center items-center">
            <button className="border text-2xl font-bold rounded-full px-14 py-2 cursor-pointer">
              Contact Me
            </button>
          </div>

          <p className="text-center text-sm font-medium">
            Typical response within 24 hours
          </p>
        </div>

        <div className="mt-5">
          <p className="text-medium font-bold">About Me.</p>
        <p className=" text-sm leading-5 text-black ">
          I am a passionate Frontend Developer with expertise in Next.js,
          React.js, and TypeScript.
          <br />
          I specialize in building websites from scratch, creating scalable
          designs, and crafting beautiful, user-friendly interfaces. My skill
          set also extends to optimizing website performance, ensuring fast,
          seamless, and efficient user experiences.
          <br />I thrive on turning ideas into visually appealing and functional
          web applications, combining technical precision with creative design
          to deliver impactful solutions.
        </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
