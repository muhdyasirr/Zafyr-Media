import React from "react";

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Explore from "./components/Explore"
import Why from './components/Why'
import Contact from "./components/Contact"
import How from './components/How'

export default function App() {
  return (
    <>
      <Navbar />

      {/* Sections with scroll IDs */}
      <div id="home">
        <Hero />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="about-us">
        <Explore />
      </div>
      <How/>

      <div id="why">
        <Why />
      </div>

      <div id="contact-us">
        <Contact />
      </div>
    </>
  );
}
