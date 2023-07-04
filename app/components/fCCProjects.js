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
        <div className="blur-in my-auto flex flex-row justify-end align-middle xl:justify-center">
          <a
            href={project.code}
            target="_blank"
            className="my-auto"
            aria-label="Go to GitHub repository"
          >
            <BsGithub className="mx-3 my-auto rounded-full text-3xl text-slate-900 hover:text-blue-700 hover:shadow-lg dark:text-white dark:hover:text-blue-700" />
          </a>
          <a
            href={project.live}
            target="_blank"
            className="my-auto"
            aria-label="Go to demo view"
          >
            <button className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-1.5 py-1 text-xs font-semibold text-slate-900 shadow-md hover:text-blue-700 hover:shadow-md hover:shadow-blue-700 dark:bg-slate-400 sm:text-base">
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

  return (
    <div className="z-10 mx-auto grid w-full grid-cols-1 justify-between  md:h-full md:grid-cols-2 md:pe-0 xl:grid-cols-3">
      <div className="my-auto flex flex-col justify-center py-1">
        <h2 className="mb-2 ms-4 text-lg font-bold text-slate-900 dark:text-white xl:hidden">
          freeCodeCamp Projects
        </h2>
        <Carousel />
        <span className="my-3 flex-row justify-center text-center text-xs font-semibold text-gray-700 dark:text-white sm:text-base md:my-0 md:mt-6 md:flex xl:mb-3 xl:hidden">
          React JavaScript<br></br>
          Html Bootsrap CSS
        </span>
      </div>

      <div className="hidden xl:flex xl:flex-col">
        <h2 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
          freeCodeCamp Projects
        </h2>
        <div className="mt-3 text-justify text-xs text-gray-700 dark:text-white sm:text-sm md:text-base">
          Earning the Front End development Libraries Certification I build five
          mini-projects.
        </div>
        <div className="flex flex-col justify-between">
          <div className="my-4 flex flex-row justify-center text-center text-xs font-semibold text-gray-700 dark:text-white xl:text-base">
            React JavaScript Html Bootsrap CSS
          </div>
          <div className="hidden justify-center xl:flex">
            {getCodeAndLive("RQM")}
            {getCodeAndLive("MDP")}
            {getCodeAndLive("DM")}
            {getCodeAndLive("JSC")}
            {getCodeAndLive("PC")}
          </div>
        </div>
      </div>
      <div className="md:m-auto">
        <ul className="list-inside text-start text-sm sm:text-base md:text-end md:text-sm lg:text-base">
          <li id="RQM">
            <button
              className="flex flex-row py-1 hover:font-semibold hover:text-blue-700 focus:font-bold"
              onClick={() => toggleCodeAndLive("RQM")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> Random Quote Machine
            </button>
          </li>
          <li id="MDP">
            <button
              className="flex flex-row py-1 hover:font-semibold hover:text-blue-700 focus:font-bold"
              onClick={() => toggleCodeAndLive("MDP")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> Markdown Previewer
            </button>
          </li>
          <li id="DM">
            <button
              className="flex flex-row py-1 hover:font-semibold hover:text-blue-700 focus:font-bold"
              onClick={() => toggleCodeAndLive("DM")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> Drum Machine
            </button>
          </li>
          <li id="JSC">
            <button
              className="flex flex-row py-1 hover:font-semibold hover:text-blue-700 focus:font-bold"
              onClick={() => toggleCodeAndLive("JSC")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> JavaScript Calculator
            </button>
          </li>
          <li id="PC">
            <button
              className="flex flex-row py-1 hover:font-semibold hover:text-blue-700 focus:font-bold"
              onClick={() => toggleCodeAndLive("PC")}
              aria-label="see more"
            >
              <GiAlienFire className="my-auto me-2" /> Pomodoro Clock
            </button>
          </li>
        </ul>
        <div className="md:absolute md:bottom-8 md:right-8 xl:hidden">
          {getCodeAndLive("RQM")}
          {getCodeAndLive("MDP")}
          {getCodeAndLive("DM")}
          {getCodeAndLive("JSC")}
          {getCodeAndLive("PC")}
        </div>
      </div>
    </div>
  );
}
