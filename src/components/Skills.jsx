import React, { useContext } from "react";
import { Tooltip } from "react-tooltip";
import { skillsList } from "../lib/Data";
import { AppContext } from "../context/ContextContainer";
import { Marquee } from "../lib/Marquee";

const Skills = () => {
  const { darkMood } = useContext(AppContext);

  // Split skills into three groups for different rows
  const firstRow = skillsList.slice(0, Math.floor(skillsList.length / 3));
  const secondRow = skillsList.slice(
    Math.floor(skillsList.length / 3),
    Math.floor((2 * skillsList.length) / 3),
  );
  const thirdRow = skillsList.slice(Math.floor((2 * skillsList.length) / 3));

  const SkillItem = ({ skill, index }) => (
    <div
      className="border font-[SatoshiFont] hover:bg-slate-100 hover:text-slate-800 ease-out text-center border-gray-300 rounded-full cursor-pointer mx-4"
      key={index}
      data-tooltip-id={`skill-tooltip-${index}`}
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
  );

  return (
    <div
      id="skills"
      className="w-full mt-24 md:w-[84%] md:px-0 px-6 m-auto py-10"
    >
      <h1
        className={
          !darkMood
            ? "text-2xl text-[#4f46e5] font-[SatoshiFont] text-center font-bold"
            : "text-2xl font-[SatoshiFont] text-[#4f46e5] text-center font-bold"
        }
      >
        Skills and Expertise
      </h1>

      <div className="flex flex-col py-10 gap-4 mt-6 relative">
        <Marquee speed={50} gradient={false} pauseOnHover>
          {[...firstRow, ...firstRow].map((skill, index) => (
            <SkillItem skill={skill} index={index} key={index} />
          ))}
        </Marquee>

        <Marquee speed={50} gradient={false} pauseOnHover reverse={true}>
          {[...secondRow, ...secondRow].map((skill, index) => (
            <SkillItem
              skill={skill}
              index={index + firstRow.length}
              key={index}
            />
          ))}
        </Marquee>

        <Marquee speed={60} gradient={false} pauseOnHover>
          {[...thirdRow, ...thirdRow].map((skill, index) => (
            <SkillItem
              skill={skill}
              index={index + firstRow.length + secondRow.length}
              key={index}
            />
          ))}
        </Marquee>

        {[...firstRow, ...secondRow, ...thirdRow].map((skill, index) => (
          <Tooltip
            key={`tooltip-${index}`}
            id={`skill-tooltip-${index}`}
            place="top"
            content={skill.description}
            className={"!bg-gray-800 !text-white"}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
