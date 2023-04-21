import Image from "next/image";
import { Poppins } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiCrystalGrowth, GiAlienStare, GiUfo } from "react-icons/gi";
import { IoMdPlanet } from "react-icons/io";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  const [darkMode, SetDarmMode] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className={darkMode ? "dark" : ""}>
        <nav>
          <ul>
            <BsFillMoonStarsFill
              onClick={() => SetDarmMode(!darkMode)}
              className="curser-pointer text-xl hover:text-cyan-500"
            />
          </ul>
          <ul>
            <IoMdPlanet />
          </ul>
          <ul>
            <GiCrystalGrowth />
          </ul>
          <ul>
            <GiAlienStare />
          </ul>
          <ul>
            <GiUfo />
          </ul>
        </nav>
        <section className="home">
          {" "}
          <h1 className="text-lg">Hi! I'm Nicol Wesołowska</h1>
          <h5>Fresh Baby Front End Developer</h5>
        </section>
        <section className="projects">
          <h1>Here are my porjects</h1>
        </section>
        <section className="about">
          <p>
            So far, I have been professionally involved in culture and creative
            work in Poland and in international european environments.
            <code> /!-- Biggest plot twist:--/</code> Art is by far the most
            indirect way of connection and delivery. With coding I can offer my
            skills and knolewledge, providing a desired product/help-tool. And
            what's even better it might end up being useful.
          </p>
        </section>
      </div>
    </main>
  );
}
