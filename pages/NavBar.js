import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiCrystalGrowth, GiAlienStare, GiUfo } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";

export default function NavBar() {
  const [darkMode, SetDarkMode] = useState(false);
  return (
    <nav className="fixed top-0 right-0 h-screen w-14 m-0 bg-blue-300 text-slate-900 shadow-lg">
      <BsFillMoonStarsFill
        onClick={() => SetDarkMode(!darkMode)}
        className="text-2xl m-4 hover:text-blue-500 transition-all duration-200 ease-linear active:text-cyan-200"
      />
      <ul className="flex flex-col h-screen justify-center">
        <li className="has-tooltip">
          <a href="#home">
            <IoMdPlanet className="icon" />
          </a>
          <span className="tooltip mx-1">Home</span>
        </li>
        <li className="has-tooltip">
          <a href="#projects">
            <GiCrystalGrowth className="icon" />
          </a>
          <span className="tooltip">Projects</span>
        </li>
        <li className="has-tooltip">
          <a href="#about">
            <GiAlienStare className="icon has-tooltip" />
          </a>
          <span className="tooltip mx-1">About</span>
        </li>
        <li className="has-tooltip">
          <a href="#contact">
            <GiUfo className="icon has-tooltip" />
          </a>
          <span className="tooltip">Contact</span>
        </li>
      </ul>
    </nav>
  );
}
