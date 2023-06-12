import React from "react";
import { GiCrystalGrowth, GiAlienStare, GiUfo } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className="fixed right-0 top-0 z-10 h-screen w-14">
      <ul className="mt-28 flex h-screen flex-col justify-center">
        <li className="has-tooltip">
          <a href="#home" aria-label="Go to homepage">
            <IoMdPlanet className="icon mt-2" />
          </a>
          <span className="navbar-tooltip mx-1 w-auto rounded-md px-1.5 py-1 text-xs font-bold opacity-0 shadow-md">
            Home
          </span>
        </li>
        <li className="has-tooltip">
          <a href="#projects" aria-label="Go to projects section">
            <GiCrystalGrowth className="icon mt-2" />
          </a>
          <span className="navbar-tooltip w-auto rounded-md px-1.5 py-1 text-xs font-bold opacity-0 shadow-md">
            Projects
          </span>
        </li>
        <li className="has-tooltip">
          <a href="#about" aria-label="Go to about section">
            <GiAlienStare className="icon mt-2" />
          </a>
          <span className="navbar-tooltip mx-1 w-auto rounded-md px-1.5 py-1 text-xs font-bold opacity-0 shadow-md">
            About
          </span>
        </li>
        <li className="has-tooltip">
          <a href="#contact" aria-label="Go to contact section">
            <GiUfo className="icon mt-2" />
          </a>
          <span className="navbar-tooltip w-auto rounded-md px-1.5 py-1 text-xs font-bold opacity-0 shadow-md">
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
}
