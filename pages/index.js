import Start from "./Start";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

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
      } ${montserrat.className}`}
    >
      <Start handleDarkMode={handleDarkMode} />
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
