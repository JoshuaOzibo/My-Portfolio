import React, { useContext } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Socials } from "../lib/Data";
import { AppContext } from "../context/ContextContainer";

const Footer = () => {
  const { darkMood } = useContext(AppContext);

  return (
    <div className="border-t border-2 py-10 w-full">
      <h1
        className={
          !darkMood
            ? "text-2xl text-black text-center font-bold uppercase mb-5"
            : "text-2xl text-white text-center font-bold uppercase mb-5"
        }
      >
        Ozibo Joshua Chinedu
      </h1>
      <div className="flex w-full justify-center items-center">
        <div className="flex space-x-5">
          <a href={Socials.Github}>
            <FaGithub color={!darkMood ? "#000" : "#fff"} size={35} />
          </a>
          <a href={Socials.Linkedin}>
            <FaLinkedin color={!darkMood ? "#000" : "#fff"} size={35} />
          </a>
          <a href={Socials.Instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare color={!darkMood ? "#000" : "#fff"} size={35} />
          </a>
          <a href={Socials.TikTok}>
            <AiFillTikTok color={!darkMood ? "#000" : "#fff"} size={35} />
          </a>
        </div>
      </div>
      <p
        className={
          !darkMood
            ? "text-2xl text-black text-center font-bold uppercase mb-10 mt-5"
            : "text-2xl text-white text-center font-bold uppercase mb-10 mt-5"
        }
      >
        &copy; All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
