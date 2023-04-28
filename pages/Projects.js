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
    <>
      <h1 className="z-50 text-center mt-10 dark:text-white dark:text-opacity-80 font-bold lg:text-3xl animated-item hide2 delay-75">
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
    </>
  );
}
