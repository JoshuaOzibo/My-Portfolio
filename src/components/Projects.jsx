import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectLis } from "../lib/Data";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

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

    // Add this new animation for project overlays
    cards.forEach((card) => {
      const overlay = card.querySelector("#projectOverlay");

      // Set initial position of overlay (hidden below)
      gsap.set(overlay, {
        y: "100%",
      });

      // Create hover animations
      card.addEventListener("mouseenter", () => {
        gsap.to(overlay, {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(overlay, {
          y: "100%",
          duration: 0.3,
          ease: "power2.in",
        });
      });
    });

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
            <div className="relative overflow-hidden">
              <img src={project.Image} alt="swiftcareerImage" />
              <div
                id="projectOverlay"
                className="absolute h-full w-full top-0 bottom-0 bg-red-500 p-5"
              >
                <div className="flex justify-end space-x-5">
                  <a href={project.githubUrl} target="_blank">
                    <FaGithub size={25} />
                  </a>
                  <a href={project.liveUrl} target="_blank">
                    <FaExternalLinkAlt size={25} />
                  </a>
                </div>
                <div className="w-full mt-5">
                  <p className="text-sm font-light">{project.description}</p>
                </div>
              </div>
            </div>
            <h4 className=" text-sm font-bold uppercase py-3">
              {project.header}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
