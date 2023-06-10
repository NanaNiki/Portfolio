import { useState } from "react";
import { BsGithub } from "react-icons/bs";
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
          <a href={project.code} target="_blank" className="my-auto">
            <BsGithub className="mx-2 mt-0.5 text-base text-slate-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-700 sm:text-xl" />
          </a>
          <a href={project.live} target="_blank" className="my-auto">
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
    <div className="animated-item slide-in z-10 m-2 flex w-full flex-col justify-between rounded-3xl bg-gray-300 p-4 shadow-lg shadow-slate-500 delay-100 dark:bg-transparent dark:shadow-gray-600">
      <div className="flex flex-row justify-center">
        <Carousel />
      </div>
      <h2 className="my-2 text-lg font-bold text-slate-900 dark:text-white">
        freeCodeCamp Projects
      </h2>
      <div className="mt-3 p-2 text-justify text-xs text-gray-700 dark:text-white sm:text-sm md:text-base">
        Earning the Front End development Libraries Certification I build five
        projects:
        <ul className="m-2 my-4 list-inside list-disc text-start">
          <div className="flex flex-row justify-between py-0.5">
            <li
              className="cursor-pointer py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900"
              id="RQM"
              onClick={() => toggleCodeAndLive("RQM")}
            >
              Random Quote Machine
            </li>
            {getCodeAndLive("RQM")}
          </div>

          <div className="flex flex-row justify-between py-0.5">
            <li
              className="cursor-pointer py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900"
              id="MDP"
              onClick={() => toggleCodeAndLive("MDP")}
            >
              Markdown Previewer
            </li>
            {getCodeAndLive("MDP")}
          </div>

          <div className="flex flex-row justify-between py-0.5">
            <li
              className="cursor-pointer py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900"
              id="DM"
              onClick={() => toggleCodeAndLive("DM")}
            >
              Drum Machine
            </li>
            {getCodeAndLive("DM")}
          </div>

          <div className="flex flex-row justify-between py-0.5">
            <li
              className="cursor-pointer py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900"
              id="JSC"
              onClick={() => toggleCodeAndLive("JSC")}
            >
              JavaScript Calculator
            </li>
            {getCodeAndLive("JSC")}
          </div>

          <div className="flex flex-row justify-between py-0.5">
            <li
              className="cursor-pointer py-0.5 hover:font-semibold hover:text-blue-700 focus:font-bold active:text-blue-900"
              id="PC"
              onClick={() => toggleCodeAndLive("PC")}
            >
              Pomodoro Clock
            </li>
            {getCodeAndLive("PC")}
          </div>
        </ul>
      </div>
      <div className="mt-3 flex flex-row justify-end p-2 text-justify text-xs font-semibold text-gray-700 dark:text-white sm:text-base">
        React JavaScript Html Bootsrap CSS
      </div>
    </div>
  );
}
