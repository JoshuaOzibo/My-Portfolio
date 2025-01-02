import React from "react";
import { Tooltip } from "react-tooltip";
import { skillsList } from "../lib/Data";

const Skills = () => {
  return (
    <div className="w-full md:w-[84%] md:px-0 px-6 m-auto py-10">
      <h1 className="text-2xl text-center font-bold uppercase mb-10">
        Skills and Expertise
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillsList.map((skill, index) => (
          <div
            className="border hover:bg-slate-100 ease-out text-center border-gray-300 rounded-full px-3 py-2"
            key={index}
            data-tooltip-id={`skill-tooltip-${index}`}
            data-tooltip-content={skill.description}
          >
            <p>{skill.name}</p>
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
