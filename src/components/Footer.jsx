import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Socials } from "../lib/Data";

const Footer = () => {
  return (
    <div className="border-t border-2 py-10 w-full">
      <h1 className="text-2xl text-center font-bold uppercase mb-10">
        Ozibo Joshua Chinedu
      </h1>
      <div className="flex w-full justify-center items-center">
        <div className="flex space-x-5">
          <a href={Socials.Instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare size={35} />
          </a>
          <a href={Socials.Linkedin}>
            <FaLinkedin size={35} />
          </a>
          <a href={Socials.Github}>
            <FaGithub size={35} />
          </a>
          <a href={Socials.TikTok}>
            <AiFillTikTok size={35} />
          </a>
        </div>
      </div>
      <p className="text-center font-semibold mt-3">
        &copy; All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
