import React, {useContext} from 'react';
import { FaHome } from "react-icons/fa";
import { AppContext } from '../context/ContextContainer';

// Project
import { SiTask } from "react-icons/si";

// skill
import { GrVulnerability } from "react-icons/gr";


const MobileMenu = () => {
  const {darkMood} = useContext(AppContext);
  return (
    <div className={!darkMood ? "fixed w-[70%] md:hidden flex justify-between rounded-full m-auto bottom-5 left-0 right-0 backdrop-blur-lg bg-black/30 z-40 py-4 px-6" : "fixed w-[70%] md:hidden flex justify-between rounded-full m-auto bottom-5 left-0 right-0 backdrop-blur-lg bg-white/30 z-40 py-4 px-6"}>
      <FaHome color='white' size='35' />
      <SiTask color='white' size='35' />
      <GrVulnerability color='white' size='35' />
    </div>
  )
}

export default MobileMenu
