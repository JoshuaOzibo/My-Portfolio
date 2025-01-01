import React, {useContext} from "react";
import Navbar from "./components/Navbar";
import IntroAnimation from "./components/introAnimation";
import { AppContext } from "./context/ContextContainer";


export default function App() {
const {darkMood} = useContext(AppContext)
  return (
    <div className={darkMood ? "relative h-screen bg-black" : "relative h-screen"}>
      <IntroAnimation />
      <div className="fixed w-full">
        <Navbar />
      </div>
    </div>
  );
}
