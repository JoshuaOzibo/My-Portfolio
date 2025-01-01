import React from "react";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function App() {

  useGSAP(() => {
    let tl = gsap.timeline();
    console.log('start animation')

    tl.from("#welcomeText", {
      y: 100,
      duration: 1.2,
      ease: 'power2.out',
      delay: 0.5
    });

    tl.fromTo("#line", {
      opacity: 0,
      width: 5,
      margin: 'auto',
    }, {
      opacity: 1,
      ease: 'power2.out',
      duration: 1,
      width: '100%',
    }
  ), '<';

    tl.to('#blackOverlay', {
      yPercent: -100,
      // opacity: 0,
      duration: 1
    }, '> 0.3')

    // console.log('end animation')
  }, [])


  return (
    <div className="relative">
      <div id="blackOverlay" className="z-10 bg-black flex justify-center items-center absolute h-screen w-full bottom-0 top-0">
        <div className=" px-10 pt-1 overflow-hidden">
          <h1 id="welcomeText" className="text-white mb-1 text-center text-5xl uppercase font-bold">
            Welcome to my Portfolio
          </h1>

          <div id="line" className=" h-1 bg-blue-500"></div>
        </div>
      </div>
      <div className="z-5">
        <Navbar />
      </div>
    </div>
  );
}
