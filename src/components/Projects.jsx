import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {projectLis} from '../lib/Data'

const Projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll("#cards");

    // Set initial positions and stacking order
    cards.forEach((card, i) => {
      gsap.set(card, {
        position: "fixed",
        top: "8%",
        left: "50%",
        xPercent: -50,
        zIndex: i + 1,
      });
    });

    // Create Animation for each cards
    gsap.fromTo(
      cards,
      {
        y: window.innerHeight,
        opacity: 1,
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
    <div id="cardContainer" className="w-[85%] bg-slate-300 py-10 mt-10 m-auto">
      <h1 className="text-2xl text-center font-bold uppercase mb-10">
        Projects
      </h1>

      <div className="relative py-10 min-h-[170vh] ">
        {projectLis.map((project, index) => (
          <div
            key={index}
            id="cards"
            className="md:w-[60%] rounded-lg border border-gray-300 shadow-md bg-black text-white p-2 m-auto "
          >
            {/* img section */}
            <div>
              <img src={project.Image} alt="swiftcareerImage" />
            </div>
            <h4 className=" text-sm font-bold uppercase py-3">{project.header}</h4>
            {/* <div className="md:flex md:space-y-0 space-y-5 justify-between gap-5 m-auto">
              <button className="bg-blue-400 font-bold w-full py-2 rounded-md">
                Github Url
              </button>
              <button className="bg-blue-400 font-bold w-full py-2 rounded-md">
                Live Demo
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
