import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import zafyr3 from "../assets/zafyr3.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <a href="#home">
          <img src={zafyr3} alt="Logo" className="h-32 cursor-pointer object-contain" />
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 text-[15px]">
          <a href="#home" className="hover:text-[#A6A6A6] transition">Home</a>
          <a href="#services" className="hover:text-[#A6A6A6] transition">Services</a>
          <a href="#about-us" className="hover:text-[#A6A6A6] transition">About Us</a>
          <a href="#contact-us" className="hover:text-[#A6A6A6] transition">Contact Us</a>
        </nav>

        {/* RIGHT BUTTON */}
        <a
          href="#contact-us"
          className="hidden md:flex px-6 py-[10px] rounded-full bg-[#6C7CFF] hover:bg-[#5968D8] transition font-semibold"
        >
          Contact us
        </a>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* MOBILE SIDEBAR */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-[75%] h-full bg-black text-white flex flex-col gap-8 px-6 py-10 shadow-xl z-[60]">
          
          <div className="flex justify-between items-center">
            <img src={zafyr3} alt="Logo" className="h-16 object-contain" />
            <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          </div>

          {/* MOBILE MENU */}
          <div className="flex flex-col gap-6 text-lg font-medium">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about-us" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#contact-us" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </div>

          {/* CTA BUTTON */}
          <a
            href="#contact-us"
            className="mt-10 w-full px-6 py-3 rounded-full bg-[#6C7CFF] hover:bg-[#5968D8] text-center transition font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
