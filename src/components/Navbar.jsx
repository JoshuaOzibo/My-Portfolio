import React, { useContext } from "react";
import { MdOutlineNightlightRound } from "react-icons/md";
import { LiaGithub } from "react-icons/lia";
import { MdOutlineLightMode } from "react-icons/md";
import { AppContext } from "../context/ContextContainer";

const Navbar = () => {
  const { darkMood, handleDarkmoodButton } = useContext(AppContext);

  return (
    <div className=" w-full flex border-b border-gray-500 h-16 justify-center items-center ">
      <div className="w-[85%] h-full items-center flex justify-between">
        {/* Header */}
        <h1 className="text-2xl font-bold uppercase">Portfolio</h1>

        {/* Logos and Menu */}
        <div className=" flex justify-between w-[40%] rounded-full px-16 py-2 border border-black">
          <h1 className="">Home</h1>
          <h1>Skill</h1>
          <h1>Project</h1>
        </div>

        <div className="flex items-center space-x-5">
          {/* light mood Icon */}
          {!darkMood && (
            <MdOutlineLightMode
              onClick={handleDarkmoodButton}
              className="cursor-pointer"
              size={22}
            />
          )}
          {darkMood && (
            <MdOutlineNightlightRound
              onClick={handleDarkmoodButton}
              className="cursor-pointer"
              size={22}
              color="#fff"
            />
          )}
          {
            <LiaGithub
              className="cursor-pointer"
              color={!darkMood ? "" : "#fff"}
              size={25}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
