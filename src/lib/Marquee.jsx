import { cn } from "@/lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
  ...props
}) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem] relative",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {/* Left gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />

      <div
        className={cn("flex shrink-0 items-center [gap:var(--gap)]", {
          "animate-marquee flex-row": !vertical,
          "animate-marquee-vertical flex-col": vertical,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
        })}
      >
        {children}
      </div>

      <div
        className={cn("flex shrink-0 items-center [gap:var(--gap)]", {
          "animate-marquee flex-row": !vertical,
          "animate-marquee-vertical flex-col": vertical,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
        })}
      >
        {children}
      </div>

      {/* Right gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
