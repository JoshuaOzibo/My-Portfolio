import React, { useContext } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Socials } from "../lib/Data";
import { AppContext } from "../context/ContextContainer";

const Footer = () => {
  const { darkMood } = useContext(AppContext);

  return (
    <div className="border-t py-10 w-full">
      <h1
        className={
          !darkMood
            ? "md:text-2xl font-[SatoshiFont] text-xl text-black text-center font-bold uppercase mb-5"
            : "md:text-2xl font-[SatoshiFont] text-xl text-white text-center font-bold uppercase mb-5"
        }
      >
        Ozibo Joshua Chinedu
      </h1>
      <div className="flex w-full justify-center items-center">
        <div className="flex space-x-5">
          <a href={Socials.Github} target="_blank" rel="noopener noreferrer">
            <FaGithub color={!darkMood ? "#000" : "#fff"} size={35} />
          </a>
          <a href={Socials.Linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin color={!darkMood ? "#000" : "#fff"} size={35} />
          </a>
          <a href={Socials.Instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare color={!darkMood ? "#000" : "#fff"} size={35} />
          </a>
          <a href="mailto:joshuamichaelozibo@gmail.com">
            <MdEmail color={!darkMood ? "#000" : "#fff"} size={35} />
          </a>
        </div>
      </div>
      <p
        className={
          !darkMood
            ? "md:text-2xl font-[SatoshiFont] text-xl text-black text-center font-bold uppercase mb-10 mt-5"
            : "md:text-2xl font-[SatoshiFont] text-xl text-white text-center font-bold uppercase mb-10 mt-5"
        }
      >
        &copy; All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
