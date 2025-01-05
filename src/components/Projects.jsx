import React, { useEffect, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectLis } from "../lib/Data";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AppContext } from "../context/ContextContainer";

const Projects = () => {
  const { darkMood } = useContext(AppContext);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll("#cards");

    // Set initial positions and stacking order
    cards.forEach((card, i) => {
      gsap.set(card, {
        position: "fixed",
        top: "14%",
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
          end: "+=500%",
          // markers: true,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      },
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
    <section id="projects">
      <div id="cardContainer" className="md:w-[85%] py-10 mt-10 m-auto">
        <h1
          className={
            !darkMood
              ? "text-2xl text-[#4f46e5] font-[SatoshiFont] text-center font-bold uppercase mb-10"
              : "text-2xl text-[#4f46e5] font-[SatoshiFont] text-center font-bold uppercase mb-10"
          }
        >
          Projects
        </h1>

        <div className="relative py-10 md:min-h-[80vh] min-h-[50vh] ">
          {projectLis.map((project, index) => (
            <div
              key={index}
              id="cards"
              className="md:w-[60%] w-[85%] rounded-lg border border-gray-300 shadow-md bg-[#0d1117] text-white p-2 m-auto "
            >
              {/* img section */}
              <div className="relative overflow-hidden">
                <img src={project.Image} alt="images" />
                <div
                  id="projectOverlay"
                  className="absolute h-full w-full top-0 bottom-0 text-white bg-[#4f46e5] md:p-5 p-2"
                >
                  <div className="flex justify-end space-x-5">
                    <a href={project.githubUrl} target="_blank">
                      <FaGithub color="#fff" size={25} />
                    </a>
                    <a href={project.liveUrl} target="_blank">
                      <FaExternalLinkAlt color="#fff" size={25} />
                    </a>
                  </div>
                  <div className="w-full mt-[2px] md:mt-5">
                    <p className="md:text-base font-[SatoshiFont] md:font-medium font-thin text-xs md:leading-5 leading-tight">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
              <h4 className=" text-sm font-[SatoshiFont] font-bold uppercase py-3">
                {project.header}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
