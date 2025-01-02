import React, {useContext} from "react";
import Navbar from "./components/Navbar";
import IntroAnimation from "./components/introAnimation";
import { AppContext } from "./context/ContextContainer";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects";
import Skills from './components/Skills';
import Footer from './components/Footer';
export default function App() {
const {darkMood} = useContext(AppContext)
  return (
    <div style={darkMood ? {backgroundColor: 'black'} : {}}>
      <IntroAnimation />
      <div className=" w-full">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
