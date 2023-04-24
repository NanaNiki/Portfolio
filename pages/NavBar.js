import React from "react";
import { GiCrystalGrowth, GiAlienStare, GiUfo } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className="fixed top-0 right-0 h-screen w-14 z-40">
      <ul className="flex flex-col h-screen justify-center mt-28">
        <li className="has-tooltip">
          <a href="#home">
            <IoMdPlanet className="icon mt-2" />
          </a>
          <span className="tooltip mx-1">Home</span>
        </li>
        <li className="has-tooltip">
          <a href="#projects">
            <GiCrystalGrowth className="icon mt-2" />
          </a>
          <span className="tooltip">Projects</span>
        </li>
        <li className="has-tooltip">
          <a href="#about">
            <GiAlienStare className="icon mt-2" />
          </a>
          <span className="tooltip mx-1">About</span>
        </li>
        <li className="has-tooltip">
          <a href="#contact">
            <GiUfo className="icon mt-2" />
          </a>
          <span className="tooltip">Contact</span>
        </li>
      </ul>
    </nav>
  );
}
