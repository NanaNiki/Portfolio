import { BsGithub } from "react-icons/bs";
import projectinfo from "../data/projectinfo.json";

export default function ProjectCard({
  selectedProject,
  setShowPopUp,
  setSelectedPopUp,
}) {
  const project = projectinfo.find((item) => item.id === selectedProject);
  return (
    <>
      <h2 className="text-center text-lg font-bold text-slate-900 dark:text-white">
        {project.name}
      </h2>
      <div className="has-animation m-auto flex items-center py-4">
        <div className="cover-animation relative">
          <img
            src={project.image}
            alt="Project image"
            className="rounded-3xl object-cover shadow-lg shadow-slate-500 dark:shadow-gray-700"
          />
          <img
            src="/images/uncovericon.svg"
            className="floating absolute bottom-0 right-0 z-10 h-10 w-10 rounded-ee-3xl bg-slate-400 bg-opacity-70"
          />
        </div>
        <div className="uncover-animation invisible absolute w-10/12">
          <p className="text-justify text-xs text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
            {project.text}
          </p>
          <p className="text-justify text-xs text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
            {project.ps}
          </p>
        </div>
      </div>
      <div className="relative mx-auto flex flex-col lg:mt-3">
        <span className="block text-xs font-semibold text-gray-700 dark:text-white sm:text-base md:mt-0 lg:my-2">
          {project.tech1} <br></br> {project.tech2}{" "}
          {project.link ? (
            <a
              className="italic hover:text-blue-700 dark:italic  dark:hover:text-blue-700"
              href="https://app.uizard.io/templates/O4Q0AGM8ZruJw9GpR5YQ?_gl=1*r55hdo*_ga*MTgwNzYxODk1MC4xNjgzMTE1NTQ5*_ga_FV1FRPC5G4*MTY4MzQ0OTg1NS4xMS4xLjE2ODM0NTE5NzMuNTAuMC4w"
            >
              Template
            </a>
          ) : (
            ""
          )}
        </span>
        <div className="flex flex-row justify-between">
          <button
            onClick={() => {
              setShowPopUp(true);
              setSelectedPopUp(project.id);
            }}
            className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-1.5 py-1 text-xs font-semibold text-slate-900 shadow-md hover:text-blue-700 hover:shadow-md hover:shadow-blue-700 dark:bg-slate-400 sm:text-base"
          >
            Read more
          </button>
          <div className="my-2 flex flex-row justify-end">
            <a
              href={project.github}
              target="_blank"
              className="my-auto"
              aria-label="Go to GitHub repository"
            >
              <BsGithub className="mx-3 my-auto rounded-full text-3xl text-slate-900 hover:text-blue-700 hover:shadow-lg dark:text-white dark:hover:text-blue-700" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="mb-1 md:my-auto"
              aria-label="Go to live demo"
            >
              <button className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-1.5 py-1 text-xs font-semibold text-slate-900 shadow-md hover:text-blue-700 hover:shadow-md hover:shadow-blue-700 dark:bg-slate-400 sm:text-base ">
                Live Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
