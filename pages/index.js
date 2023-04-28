import { Poppins } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Start from "./Start";
import dynamic from "next/dynamic";

const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

export function observeScroll(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  elements.forEach((el) => observer.observe(el));
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
    <main
      className={`relative min-h-screen text-lg bg-stone-100 dark:bg-gray-950 ${
        darkMode ? "dark" : ""
      }`}
    >
      <section className="overflow-hidden relative z-20 p-0 h-screen mb-8 bg-stone-100 dark:bg-gray-950">
        <BsFillMoonStarsFill
          onClick={handleDarkMode}
          className="z-10 text-xl m-4 hover:text-blue-500 transition-all duration-200 ease-linear fixed top-0 right-0 cursor-pointer
   dark:text-blue-300 dark:hover:text-cyan-300"
        />
        <Start />
      </section>
      <DynamicNavBar />
      <DynamicProjects />
      <DynamicAbout />
      <DynamicContact />
    </main>
  );
}
const DynamicNavBar = dynamic(() => import("./NavBar"));
const DynamicProjects = dynamic(() => import("./Projects"));
const DynamicAbout = dynamic(() => import("./About"));
const DynamicContact = dynamic(() => import("./Contact"));
