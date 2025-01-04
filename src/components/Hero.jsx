import { useId } from "react";
import React, { useContext, useState } from "react";
import { ShinyButton } from "../lib/Button";
import { AppContext } from "../context/ContextContainer";
import SparklesText from "../lib/Text";
import { RiLightbulbFlashFill } from "react-icons/ri";
import MyImage from "../assets/my-image.webp";
import MyResume from "../assets/My Resume.pdf";

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

  const { darkMood } = useContext(AppContext);

  const [isImageZoomed, setIsImageZoomed] = useState(false);

  return (
    <div className="relative -top-[100px] flex h-[800px] md:w-[85%] w-[90%] m-auto items-center justify-center overflow-hidden z-10 rounded-lg bg-background">
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

      {isImageZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center cursor-pointer"
          onClick={() => setIsImageZoomed(false)}
        >
          <img
            className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full transform transition-transform duration-500 scale-100"
            src={MyImage}
            alt="MyImage"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="border mt-[200px] px-5 z-20 border-gray-400 rounded-lg py-3 md:w-[450px]">
        <img
          className="w-[150px] bg-slate-500 h-[150px] m-auto object-cover rounded-full cursor-pointer transition-transform"
          src={MyImage}
          alt="MyImage"
          onClick={() => setIsImageZoomed(true)}
        />
        <div className="space-y-2">
          <SparklesText
            className={
              !darkMood
                ? " text-black uppercase text-center mb-5 text-3xl font-bold"
                : "text-center mb-5 text-white text-3xl font-bold"
            }
            text="Ozibo Joshua"
          ></SparklesText>

          <div className=" w-full flex justify-center items-center">
            <ShinyButton
              textColor="bg-black text-white rounded-full border md:text-sm sm:text-lg text-xs font-bold rounded-full px-3 py-2 cursor-pointer"
              onClick={() => {
                const link = document.createElement("a");
                link.href = { MyResume };
                link.download = "Ozibo-Joshua-CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </ShinyButton>
            <a
              href="https://wa.me/+2347085531738"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShinyButton textColor="bg-black text-white rounded-full border md:text-sm sm:text-lg text-xs font-bold rounded-full px-3 py-2 cursor-pointer">
                Let’s Connect
              </ShinyButton>
            </a>
          </div>

          <div className=" flex justify-center items-center space-x-1">
            <RiLightbulbFlashFill color={!darkMood ? "red" : "yellow"} />
            <p
              className={
                !darkMood
                  ? "text-center text-black text-sm font-medium"
                  : "text-center text-white text-sm font-medium"
              }
            >
              Expect a response within 24 hours.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p
            className={
              !darkMood
                ? "text-medium text-black font-bold"
                : "text-medium text-white font-bold"
            }
          >
            About Me.
          </p>
          <p
            className={
              !darkMood
                ? " text-sm leading-5 text-black "
                : " text-sm leading-5 bg-[#0d1117] text-white "
            }
          >
            I am a passionate Frontend Developer with expertise in Next.js,
            React.js, and TypeScript.
            <br />
            I specialize in building websites from scratch, creating scalable
            designs, and crafting beautiful, user-friendly interfaces. My skill
            set also extends to optimizing website performance, ensuring fast,
            seamless, and efficient user experiences.
            <br />I thrive on turning ideas into visually appealing and
            functional web applications, combining technical precision with
            creative design to deliver impactful solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
