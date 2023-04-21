import { Poppins } from "next/font/google";
import { useState } from "react";
import NavBar from "./NavBar";
import Start from "./Start";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  const [darkMode, SetDarkMode] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className={darkMode ? "dark" : ""}>
        <NavBar />
        <Start />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
