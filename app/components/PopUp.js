import { RxCross1 } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import popupinfo from "../data/popupinfo.json";

export default function PopUp({ onHandleClose, selectedPopUp }) {
  const projectPopUp = popupinfo.find((item) => item.id === selectedPopUp);

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="fixed top-[15%] z-30 h-fit w-full overflow-y-scroll rounded-3xl bg-slate-300 from-gray-300 to-gray-200 shadow-lg dark:bg-slate-900 dark:shadow-slate-500 sm:top-[20%] md:top-[10%] md:w-10/12 lg:top-[12%] lg:w-6/12">
        <button
          onClick={onHandleClose}
          aria-label="Close the popup message"
          className="absolute right-4 top-4 text-end text-2xl font-extrabold text-gray-700 dark:hover:text-blue-700 hover:text-blue-700 dark:text-slate-200 md:right-8 md:top-6"
        >
          <RxCross1 />
        </button>
        {projectPopUp.id === selectedPopUp ? (
          <div
            key={projectPopUp.index}
            className="p-4 text-justify text-base sm:text-lg md:p-8 md:px-12 md:py-10"
          >
            <h1 className="my-4 mb-1 mt-2 text-center text-xl font-bold dark:text-slate-200">
              {projectPopUp.name}
            </h1>
            <p className="p-2 text-justify text-xs text-gray-700 dark:text-slate-200 sm:text-sm md:text-base">
              {projectPopUp.text}
            </p>
            <h2 className="my-2 text-center text-xl font-bold dark:text-slate-200">
              Features
            </h2>
            <ul className="p-2 list-disc">
              {projectPopUp.features.map((feature, index) => {
                return (
                  <li key={index}>
                    <p className="text-justify text-xs text-gray-700 dark:text-slate-200 sm:text-sm md:text-base">
                      <span className="font-bold">{feature.title}</span>{" "}
                      {feature.content}
                    </p>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-row-reverse justify-between p-2">
              <div className="flex flex-row justify-end">
                <a href={projectPopUp.github} target="_blank">
                  <BsGithub className="mx-2 text-3xl text-slate-200 hover:text-blue-700" />
                </a>
                <a href={projectPopUp.demo} target="_blank">
                  <button className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-1.5 py-1 text-base font-semibold text-slate-900 shadow-md  hover:text-blue-700 hover:shadow-md hover:shadow-blue-700 ">
                    Live Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
