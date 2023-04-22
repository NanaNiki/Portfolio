import { Poppins } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Start from "./Start";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const handleDarkMode = () => {
    if (darkMode) {
      localStorage.theme = "light";
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center dark:bg-gray-950">
      <div className={darkMode ? "dark" : ""}>
        <BsFillMoonStarsFill
          onClick={handleDarkMode}
          className="text-xl m-4 hover:text-blue-500 
        transition-all duration-200 ease-linear
         dark:text-blue-300 dark:hover:text-cyan-300 fixed top-0 left-0 z-50 cursor-pointer"
        />
        <NavBar />
        <Start />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
