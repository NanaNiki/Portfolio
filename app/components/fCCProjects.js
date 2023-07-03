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
        <div className="blur-in my-auto flex flex-row justify-center align-middle md:justify-end">
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
    <div className="flex-col justify-between">
      <div className="flex flex-col align-middle md:flex-row">
        <div className="m-auto flex flex-col justify-center align-middle">
          <h2 className="mb-2 text-center text-lg font-bold text-slate-900 dark:text-white">
            freeCodeCamp Projects
          </h2>
          <Carousel />
        </div>

        <ul className="mx-auto list-inside text-start text-sm sm:text-base xl:ms-4 md:pt-10 md:my-auto lg:mt-2">
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
      </div>

      <div className="flex flex-col justify-between md:mt-2 md:flex-row">
        <div className="my-2 flex flex-row justify-center text-xs font-semibold text-gray-700 dark:text-white sm:text-base md:mt-4 md:text-center lg:text-start">
          React JavaScript<br className="hidden md:inline lg:hidden"></br> Html
          Bootsrap CSS
        </div>
        {getCodeAndLive("RQM")}
        {getCodeAndLive("MDP")}
        {getCodeAndLive("DM")}
        {getCodeAndLive("JSC")}
        {getCodeAndLive("PC")}
      </div>
    </div>
  );
}
