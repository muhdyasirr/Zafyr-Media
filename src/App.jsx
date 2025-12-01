import React from "react";

import Navbar from "./compoents/Navbar"
import Hero from "./compoents/Hero"
import Services from "./compoents/Services"
import Explore from "./compoents/Explore"
import Why from './compoents/Why'
import Contact from "./compoents/Contact"

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

      <div id="why">
        <Why />
      </div>

      <div id="contact-us">
        <Contact />
      </div>
    </>
  );
}
