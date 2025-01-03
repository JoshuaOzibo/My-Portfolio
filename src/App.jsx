import React, {useContext} from "react";
import Navbar from "./components/Navbar";
import IntroAnimation from "./components/introAnimation";
import { AppContext } from "./context/ContextContainer";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects";
import Skills from './components/Skills';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
export default function App() {
const {darkMood} = useContext(AppContext)
  return (
    <div style={darkMood ? {backgroundColor: '#0d1117'} : {}}>
      <IntroAnimation />
      <div className=" w-full">
        <MobileMenu />
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
}
