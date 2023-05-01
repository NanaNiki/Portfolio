import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import Carousel from "./Carousel";
import { observeScroll } from "./index";

const projectData = [
  {
    id: "RQM",
    code: "https://github.com/NanaNiki/fCC-RQM",
    live: "https://nananiki.github.io/fCC-RQM/",
  },
  {
    id: "MDP",
    code: "https://github.com/NanaNiki/fCC-MDP",
    live: "https://nananiki.github.io/fCC-MDP/",
  },
  {
    id: "DM",
    code: "https://github.com/NanaNiki/fCC-DM",
    live: "https://nananiki.github.io/fCC-DM/",
  },
  {
    id: "JSC",
    code: "https://github.com/NanaNiki/fCC-JSC",
    live: "https://nananiki.github.io/fCC-JSC/",
  },
  {
    id: "PC",
    code: "https://github.com/NanaNiki/fCC-PC",
    live: "https://nananiki.github.io/fCC-PC/",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getCodeAndLive = (id) => {
    const project = projectData.find((item) => item.id === id);
    if (project && project.id === selectedProject) {
      return (
        <div className="flex flex-row justify-end">
          <a href={project.code} target="_blank">
            <BsGithub className="special-text-sm mx-2 mt-1.5 text-slate-900 text-xl   hover:text-blue-700" />
          </a>
          <a href={project.live} target="_blank">
            <button className="special-text-xs bg-gradient-to-t from-slate-100 to-slate-200 my-auto text-sm font-semibold px-1 py-0.5 rounded-full shadow-md text-slate-900  hover:shadow-blue-700 hover:shadow-md hover:text-blue-700 ">
              Live Demo
            </button>
          </a>
        </div>
      );
    }
    return null;
  };

  const toggleCodeAndLive = (id) => {
    setSelectedProject((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  return (
    <section
      className="relative flex flex-col h-screen w-full pr-16 pl-3 text-center"
      id="projects"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        className="top-0 right-0 absolute w-screen overflow-hidden fill-slate-400 rounded-full rotate-180"
      >
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
      <h1 className="z-50 text-center dark:text-white dark:text-opacity-80 font-bold lg:text-3xl lg:mt-12 animated-item hide2 delay-100">
        Projects
      </h1>
      <div className="special-flex-wrap flex flex-row my-auto">
        <div className="z-10 w-full p-4 rounded-3xl shadow-lg m-2 bg-slate-300 bg-opacity-60 dark:bg-gradient-to-b from-gray-300 to-gray-200 dark:shadow-slate-500 animated-item hide delay-500">
          {/**<img src="image.jpg" alt="Card image" class="w-full h-48 object-cover">*/}
          <h2 className="font-bold text-lg my-2 dark:text-slate-900">
            E-commerce Webstie
          </h2>
          <p className="text-gray-700 p-2 text-justify md:text-base sm:text-sm special-text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            elit eu odio posuere, vitae vestibulum est dictum.
          </p>
        </div>
        <div className="z-10 w-full p-4 rounded-3xl shadow-lg m-2 bg-slate-300 bg-opacity-60 dark:bg-gradient-to-b from-gray-300 to-gray-200 dark:shadow-slate-500 animated-item hide delay-300">
          {/**<img src="image.jpg" alt="Card image" class="w-full h-48 object-cover">*/}
          <h2 className="font-bold text-lg my-2 dark:text-slate-900">
            Emotions Menager
          </h2>
          <p className="text-gray-700 p-2 text-justify md:text-base sm:text-sm special-text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            elit eu odio posuere, vitae vestibulum est dictum.
          </p>
        </div>
        <div className="z-10 w-full p-4 rounded-3xl shadow-lg m-2 bg-slate-300 bg-opacity-60 dark:bg-gradient-to-b from-gray-300 to-gray-200 dark:shadow-slate-500 animated-item hide delay-100">
          <div className="flex flex-row justify-center">
            <Carousel />
          </div>
          <h2 className="font-bold text-lg my-2 dark:text-slate-900">
            freeCodeCamp Projects
          </h2>
          <div className="text-gray-700 p-2 text-justify md:text-base sm:text-sm special-text-xs">
            Earning the Front End development Libraries Certification I build
            five projects:
            <ul className="list-inside list-disc m-2 text-start">
              <div className="flex flex-row justify-between">
                <li
                  className="cursor-pointer hover:text-blue-800 hover:font-semibold active:text-blue-900 focus:font-bold"
                  id="RQM"
                  onClick={() => toggleCodeAndLive("RQM")}
                >
                  {" "}
                  Random Quote Machine
                </li>
                {getCodeAndLive("RQM")}
              </div>

              <div className="flex flex-row justify-between">
                <li
                  className="cursor-pointer hover:text-blue-800 hover:font-semibold active:text-blue-900 focus:font-bold"
                  id="MDP"
                  onClick={() => toggleCodeAndLive("MDP")}
                >
                  {" "}
                  Markdown Previewer
                </li>
                {getCodeAndLive("MDP")}
              </div>

              <div className="flex flex-row justify-between">
                <li
                  className="cursor-pointer hover:text-blue-800 hover:font-semibold active:text-blue-900 focus:font-bold"
                  id="DM"
                  onClick={() => toggleCodeAndLive("DM")}
                >
                  {" "}
                  Drum Machine
                </li>
                {getCodeAndLive("DM")}
              </div>

              <div className="flex flex-row justify-between">
                <li
                  className="cursor-pointer hover:text-blue-800 hover:font-semibold active:text-blue-900 focus:font-bold"
                  id="JSC"
                  onClick={() => toggleCodeAndLive("JSC")}
                >
                  {" "}
                  JavaScript Calculator
                </li>
                {getCodeAndLive("JSC")}
              </div>

              <div className="flex flex-row justify-between">
                <li
                  className="cursor-pointer hover:text-blue-800 hover:font-semibold active:text-blue-900 focus:font-bold"
                  id="PC"
                  onClick={() => toggleCodeAndLive("PC")}
                >
                  {" "}
                  Pomodoro Clock
                </li>
                {getCodeAndLive("PC")}
              </div>
            </ul>
            <div className="font-semibold flex flex-row justify-end">
              React JavaScript Html Bootsrap CSS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
