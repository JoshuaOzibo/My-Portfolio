import React, { useRef, useEffect } from "react";
import swiftcareerPreviewImage from "../assets/swiftcareerPreviewImage.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll("#cards");

    // Set initial positions and stacking order
    cards.forEach((card, i) => {
      gsap.set(card, {
        position: "fixed",
        top: "7%",
        left: "50%",
        xPercent: -50,
        zIndex: i + 1,
      });
    });

    // Create the animation
    gsap.fromTo(
      cards,
      {
        y: window.innerHeight,
        opacity: 0,
      },
      {
        opacity: 1,
        y: (i) => i * 20,
        scale: (i) => 1 + i * 0.02,
        stagger: {
          each: 0.4,
          from: "start",
        },
        scrollTrigger: {
          trigger: "#cardContainer",
          start: "top 5%",
          end: "+=800%",
          markers: true,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="cardContainer" className="w-[85%] py-10 mt-10 m-auto">
      <h1 className="text-2xl text-center font-bold uppercase mb-10">
        Projects
      </h1>

      <div className="relative bg-slate-400 py-10 min-h-[200vh]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <div
            key={index}
            id="cards"
            className="md:w-[60%]  bg-red-500 p-2 m-auto "
          >
            {/* img section */}
            <div>
              <img src={swiftcareerPreviewImage} alt="swiftcareerImage" />
            </div>
            <div className="md:flex md:space-y-0 space-y-5 justify-between gap-5 m-auto my-5">
              <button className="bg-blue-400 font-bold w-full py-2 rounded-md">
                Github Url
              </button>
              <button className="bg-blue-400 font-bold w-full py-2 rounded-md">
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
