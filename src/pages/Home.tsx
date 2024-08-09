import { useState, useEffect } from "react";

import { ProfileDescription } from "../components/ProfileDescription";
import { Projects } from "../components/Projects";

import './Home.css'


export const Home = () => {

  const [currentSection, setCurrentSection] = useState(0)
  const sections = [0, 1]

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        // Scroll down
        if (currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1);
        }
      } else {
        // Scroll up
        if (currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
        }
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection, sections.length]);

  

  return (
    <div>
      <div className="container" style={{ transform: `translateY(-${currentSection * 100}vh)` }}>
        <div className="section">
          <ProfileDescription />
        </div>
        <div className="section">
          <Projects />
        </div>
      </div>
    </div>
  );
}