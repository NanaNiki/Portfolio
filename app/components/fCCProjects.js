import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { GiAlienFire } from "react-icons/gi";
import Carousel from "./Carousel";

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

export default function FCCProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getCodeAndLive = (id) => {
    const project = projectData.find((item) => item.id === id);
    if (project && project.id === selectedProject) {
      return (
        <div className="flex flex-row justify-end align-middle">
          <a
            href={project.code}
            target="_blank"
            className="my-auto"
            aria-label="Go to GitHub repository"
          >
            <BsGithub className="mx-2 mt-0.5 text-base text-slate-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-700 sm:text-xl" />
          </a>
          <a
            href={project.live}
            target="_blank"
            className="my-auto"
            aria-label="Go to demo view"
          >
            <button className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-1 py-0.5 text-xs font-semibold text-slate-900 shadow-md hover:text-blue-700  hover:shadow-md hover:shadow-blue-700 sm:text-sm ">
              <span className="hidden sm:inline">Live</span> Demo
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

  return (
    <div className="m-2 min-w-fit flex flex-row justify-between rounded-3xl bg-gray-300 p-4 dark:bg-transparent">
      <div className="flex flex-col ms-4">
        <h2 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
          freeCodeCamp Projects
        </h2>
        <div className="flex flex-row justify-center">
          <Carousel />
        </div>
        
        <div className="mt-2 flex flex-row justify-center text-justify text-xs font-semibold text-gray-700 dark:text-white sm:text-base">
          React JavaScript Html Bootsrap CSS
        </div>
      </div>
      <ul className="my-auto list-inside text-start">
        <li id="RQM">
          <div className="flex cursor-pointer flex-row justify-between py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900">
            <button
              className="flex flex-row py-0.5"
              onClick={() => toggleCodeAndLive("RQM")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> Random Quote Machine
            </button>
            {getCodeAndLive("RQM")}
          </div>
        </li>

        <li id="MDP">
          <div className="flex cursor-pointer flex-row justify-between py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900">
            <button
              className="flex flex-row py-0.5"
              onClick={() => toggleCodeAndLive("MDP")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> Markdown Previewer
            </button>
            {getCodeAndLive("MDP")}
          </div>
        </li>

        <li id="DM">
          <div className="flex cursor-pointer flex-row justify-between py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900">
            <button
              className="flex flex-row py-0.5"
              onClick={() => toggleCodeAndLive("DM")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> Drum Machine
            </button>
            {getCodeAndLive("DM")}
          </div>
        </li>

        <li id="JSC">
          <div className="flex cursor-pointer flex-row justify-between py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900">
            <button
              className="flex flex-row py-0.5"
              onClick={() => toggleCodeAndLive("JSC")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> JavaScript Calculator
            </button>
            {getCodeAndLive("JSC")}
          </div>
        </li>

        <li id="PC">
          <div className="flex cursor-pointer flex-row justify-between py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900">
            <button
              className="flex flex-row py-0.5"
              onClick={() => toggleCodeAndLive("PC")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> Pomodoro Clock
            </button>
            {getCodeAndLive("PC")}
          </div>
        </li>
      </ul>
    </div>
  );
}
