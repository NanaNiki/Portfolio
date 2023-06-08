"use client";
import Start from "./components/Start";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300"] });

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
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedPopUp, setSelectedPopUp] = useState(null);

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

  const onHandleClose = () => {
    setShowPopUp(false);
  };
  return (
    <>
      <main
        className={`relative min-h-screen text-lg bg-stone-100 dark:bg-gray-950 ${
          darkMode ? "dark" : ""
        } ${montserrat.className} ${showPopUp ? "opacity-30" : ""}`}
      >
        <Start handleDarkMode={handleDarkMode} />
        <DynamicNavBar />
        <DynamicProjects
          setShowPopUp={setShowPopUp}
          setSelectedPopUp={setSelectedPopUp}
        />
        <DynamicAbout />
        <DynamicContact />
      </main>
      {showPopUp && (
        <DynamicPopUp
          onHandleClose={onHandleClose}
          selectedPopUp={selectedPopUp}
        />
      )}
    </>
  );
}
const DynamicNavBar = dynamic(() => import("./components/NavBar"), {
  ssr: false,
});
const DynamicProjects = dynamic(() => import("./components/Projects"), {
  ssr: false,
});
const DynamicAbout = dynamic(() => import("./components/About"), {
  ssr: false,
});
const DynamicContact = dynamic(() => import("./components/Contact"), {
  ssr: false,
});
const DynamicPopUp = dynamic(() => import("./components/PopUp"), {
  ssr: false,
});
