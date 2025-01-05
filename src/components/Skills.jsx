import React, { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { skillsList } from "../lib/Data";
import { AppContext } from "../context/ContextContainer";

const Skills = () => {
  const { darkMood } = useContext(AppContext);
  return (
    <div id="skills" className="w-full mt-24 md:w-[84%] md:px-0 px-6 m-auto py-10">
      <h1
        className={
          !darkMood
            ? "text-2xl text-black font-[SatoshiFont] text-center font-bold uppercase mb-10"
            : "text-2xl text-white font-[SatoshiFont] text-center font-bold uppercase mb-10"
        }
      >
        Skills and Expertise
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillsList.map((skill, index) => (
          <div
            className="border font-[SatoshiFont] hover:bg-slate-100 hover:text-slate-800 ease-out text-center border-gray-300 rounded-full cursor-pointer "
            key={index}
            data-tooltip-id={`skill-tooltip-${index}`}
            data-tooltip-content={skill.description}
          >
            <p
              className={
                !darkMood
                  ? "text-black font-[SatoshiFont] text-base font-bold px-3 py-2"
                  : "text-white font-[SatoshiFont] font-bold hover:text-black h-full px-3 py-2"
              }
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      {skillsList.map((_, index) => (
        <Tooltip
          key={index}
          id={`skill-tooltip-${index}`}
          style={{
            maxWidth: "50%",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
          className="text-sm"
        />
      ))}
    </div>
  );
};

export default Skills;
