import { Poppins } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Start from "./Start";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export function observeScroll(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    })
  })
 elements.forEach((el) => observer.observe(el))
  }

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
    <main className="min-h-screen bg-stone-100 dark:bg-gray-950">
      <div className={darkMode ? "dark" : ""}>
        <BsFillMoonStarsFill
          onClick={handleDarkMode}
          className="button-darkmode"
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
