import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { AppContext } from "../context/ContextContainer";

// Project
import { SiTask } from "react-icons/si";

// skill
import { GrVulnerability } from "react-icons/gr";

const MobileMenu = () => {
  const { darkMood } = useContext(AppContext);
  return (
    <div
      className={
        !darkMood
          ? "fixed w-[70%] md:hidden flex justify-between rounded-full m-auto bottom-3 left-0 right-0 backdrop-blur-lg bg-black/30 z-40 py-4 px-6"
          : "fixed w-[70%] md:hidden flex justify-between rounded-full m-auto bottom-3 left-0 right-0 backdrop-blur-lg bg-white/30 z-40 py-4 px-6"
      }
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0 });
        }}
      >
        <FaHome color="white" size="30" />
      </a>
      <a href="#projects">
        <SiTask color="white" size="30" />
      </a>
      <a href="#skills">
        <GrVulnerability color="white" size="30" />
      </a>
    </div>
  );
};

export default MobileMenu;
