import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const introAnimation = () => {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from("#welcomeText", {
      y: 100,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.5,
    });

    tl.fromTo(
      "#line",
      {
        opacity: 0,
        width: 5,
        margin: "auto",
      },
      {
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        width: "100%",
      }
    ),
      "<";

    tl.to(
      "#blackOverlay",
      {
        yPercent: -100,
        duration: 1,
      },
      "> 0.3"
    );

    tl.eventCallback("onComplete", () => {
      document.body.style.overflow = "auto";
    });
  }, []);
  return (
    <div
      id="blackOverlay"
      className="z-50 bg-black fixed inset-0 flex justify-center items-center"
    >
      <div className=" px-10 pt-1 overflow-hidden">
        <h1
          id="welcomeText"
          className="text-white mb-1 text-center md:text-5xl sm:text-3xl text-lg uppercase font-bold"
        >
          Welcome to my Portfolio
        </h1>

        <div id="line" className=" h-1 bg-blue-500"></div>
      </div>
    </div>
  );
};

export default introAnimation;
