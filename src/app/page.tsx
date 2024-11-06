"use client"

import Hero from "./hero/page";
import About from "./about/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      delay:100,
      mirror:true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  },[]); 
  
  return (
    <div>
     <Hero />
     <Projects />
     <About />
     <Contact />
      </div>
  );
}
