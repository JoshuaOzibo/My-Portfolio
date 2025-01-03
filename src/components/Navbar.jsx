import React, { useContext } from "react";
import { MdOutlineNightlightRound } from "react-icons/md";
import { LiaGithub } from "react-icons/lia";
import { MdOutlineLightMode } from "react-icons/md";
import { AppContext } from "../context/ContextContainer";

// navbar blue :     <div className="w-full z-20 fixed flex border-b-[0.1px] border-gray-200 h-16 justify-center items-center bg-white/40 backdrop-blur-lg">
// ... existing code ...
// </div>

const Navbar = () => {
  const { darkMood, handleDarkmoodButton } = useContext(AppContext);

  return (
    <div className="w-full z-20 fixed flex h-16 justify-center items-center bg-white/40 backdrop-blur-lg">
      <div className="w-[85%] h-full items-center flex md:justify-between">
        {/* Header */}
        <h1 className="md:text-2xl sm:text-sm text-xs font-bold uppercase">
          Portfolio
        </h1>

        {/* Logos and Menu */}
        <div className=" md:flex hidden justify-between w-[40%] rounded-full px-16 py-2 border border-black">
          <h1 className="">Home</h1>
          <h1>Skill</h1>
          <h1>Project</h1>
        </div>

        <div className="m-auto w-[120px] hover:w-[130px] rounded-full duration-150 cursor-pointer px-[4px] py-[4px] md:hidden flex justify-between items-center bg-black">
          {!darkMood && (
            <MdOutlineLightMode
              onClick={handleDarkmoodButton}
              className="cursor-pointer"
              color="#fff"
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
          <LiaGithub
            className={
              !darkMood
                ? "cursor-pointer border border-[#6de67c] rounded-full"
                : "cursor-pointer border border-red-400 rounded-full"
            }
            color={!darkMood ? "#fff" : "#fff"}
            size={25}
          />
        </div>

        <div className="md:flex hidden items-center space-x-5">
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
