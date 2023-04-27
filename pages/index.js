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
      className={`relative min-h-screen bg-stone-100 dark:bg-gray-950 ${
        darkMode ? "dark" : ""
      }`}
    >
      <section className="relative z-20 p-0 h-screen mb-8 bg-stone-100 dark:bg-gray-950">
        <BsFillMoonStarsFill
          onClick={handleDarkMode}
          className="button-darkmode absolute z-10"
        />
        <section className="start absolute z-20" id="home">
          <Start />
        </section>
      </section>
      
      <NavBar />
      <section className="projects" id="projects">
        <div className="divider-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
            <path
              d="M0,0H1200V46.29c-47.79,22.2-103.59,32.17-158,28-70.36-5.37-136.33-33.31-206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0H1200V15.81c-13,21.11-27.64,41.05-47.69,56.24-51.72,39.22-117.31,39-176.89,19.58-31.15-10.15-60.09-26.07-89.67-39.8-40.92-19-84.73-46-130.83-49.67-36.26-2.85-70.9,9.42-98.6,31.56-31.77,25.39-62.32,62-103.63,73-40.44,10.79-81.35-6.69-119.13-24.28s-75.16-39-116.92-43.05c-59.73-5.85-113.28,22.88-168.9,38.84-30.2,8.66-59,6.17-87.09-7.5-22.43-10.89-48-26.93-60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0H1200V5.63c-149.93,53.32-314.09,65.64-475.83,36.89-43-7.64-84.23-20.12-127.61-26.46-59-8.63-112.48,12.24-165.56,35.4C372.07,68.22,314,86.24,248.8,81c-86.53-7-172.46-45.71-248.8-84.81V0Z"></path>
          </svg>
        </div>
        <Projects />
      </section>
      <section className="about" id="about">
        <About />
      </section>
      <section className="contact" id="contact">
        <Contact />
        <div className="divider-2">
          <svg
            id="visual"
            viewBox="0 0 900 500"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <path
              d="M0 451L69 432L138 410L208 446L277 467L346 410L415 470L485 472L554 473L623 438L692 473L762 388L831 470L900 473L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
              fill="#4c0519"
            ></path>
            <path
              d="M0 491L69 415L138 489L208 475L277 439L346 488L415 452L485 480L554 437L623 418L692 501L762 459L831 469L900 426L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
              fill="#73122a"
            ></path>
            <path
              d="M0 506L69 515L138 465L208 474L277 506L346 507L415 506L485 478L554 462L623 460L692 473L762 460L831 497L900 462L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
              fill="#9c203b"
            ></path>
            <path
              d="M0 536L69 510L138 546L208 524L277 515L346 508L415 530L485 535L554 538L623 492L692 527L762 526L831 500L900 525L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
              fill="#c72f4c"
            ></path>
            <path
              d="M0 546L69 543L138 538L208 562L277 542L346 556L415 547L485 537L554 564L623 530L692 550L762 533L831 538L900 569L900 601L831 601L762 601L692 601L623 601L554 601L485 601L415 601L346 601L277 601L208 601L138 601L69 601L0 601Z"
              fill="#f43f5e"
            ></path>
          </svg>
        </div> 
      </section>
    
    </main>
  );
}
