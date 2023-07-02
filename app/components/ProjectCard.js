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
      <h2 className="mb-2 text-center text-lg font-bold text-slate-900 dark:text-white">
        {project.name}
      </h2>
      <div className="has-animation h-[13rem] w-fit">
        <div className="absolute cover-animation mx-auto">
          <img
            src={project.image}
            alt="Project image"
            className="rounded-3xl h-[200px] object-cover shadow-lg shadow-slate-500 dark:shadow-gray-700"
          />
          <img src="/images/uncovericon.svg" className="floating h-[40px] w-[40px] absolute bottom-0 right-0 z-10"/>
        </div>
        <div className="uncover-animation h-[200px] px-4 flex flex-col justify-center">
          <p className="text-justify text-xs text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
            {project.text}
          </p>
          <p className="text-justify text-xs text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
            {project.ps}
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse mt-1 w-11/12 mx-auto">
        <div className="flex flex-row justify-between">
          <button
            onClick={() => {
              setShowPopUp(true);
              setSelectedPopUp(project.id);
            }}
            className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-5 py-0.5 text-xs font-semibold text-slate-900 shadow-md hover:text-blue-700 hover:shadow-md hover:shadow-blue-700 dark:bg-slate-400 sm:text-base md:px-1.5 md:py-1"
          >
            Read more
          </button>
          <div className="flex flex-row justify-end">
            <a
              href={projectinfo.github}
              target="_blank"
              className="my-auto"
              aria-label="Go to GitHub repository"
            >
              <BsGithub className="mx-3 my-auto rounded-full text-3xl text-slate-900 hover:text-blue-700 hover:shadow-lg dark:text-white dark:hover:text-blue-700" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="my-auto"
              aria-label="Go to live demo"
            >
              <button className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-5 py-0.5 text-xs font-semibold text-slate-900 shadow-md hover:text-blue-700 hover:shadow-md hover:shadow-blue-700 dark:bg-slate-400 sm:text-base md:px-1.5 md:py-1 ">
                Live Demo
              </button>
            </a>
          </div>
        </div>
        <span className="lg:my-2 text-xs font-semibold text-gray-700 dark:text-white sm:text-base md:mt-0">
          {project.tech1} <br></br> {project.tech2}{" "}
          {project.link ? (
            <a
              className="italic dark:italic hover:text-blue-700  dark:hover:text-blue-700"
              href="https://app.uizard.io/templates/O4Q0AGM8ZruJw9GpR5YQ?_gl=1*r55hdo*_ga*MTgwNzYxODk1MC4xNjgzMTE1NTQ5*_ga_FV1FRPC5G4*MTY4MzQ0OTg1NS4xMS4xLjE2ODM0NTE5NzMuNTAuMC4w"
            >
              Template
            </a>
          ) : (
            ""
          )}
        </span>
      </div>
    </>
  );
}
