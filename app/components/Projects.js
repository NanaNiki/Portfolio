import { useState, useEffect } from "react";
import PlanteaShop from "./PlanteaProject";
import EmotionAssistant from "./EmotionAsProject";
import SkySupport from "./SkySupProject"; 
import FCCProjects from "./fCCProjects";
import { observeScroll } from "../page";

export default function Projects({ setShowPopUp, setSelectedPopUp }) {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".animated-item");
    observeScroll(animatedItems);
  }, []);

  return (
    <section
      className="relative flex h-fit w-full flex-col pl-3 pr-16 text-center"
      id="projects"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        className="absolute right-0 top-0 w-screen rotate-180 overflow-hidden rounded-full fill-slate-400"
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
      <h1 className="animated-item fade-in z-50 text-center text-lg font-bold delay-100 dark:text-white dark:text-opacity-80 lg:mt-12 lg:text-3xl">
        Projects
      </h1>
      <div className="my-auto grid grid-col-1 pb-4 pt-14 md:flex-nowrap">
        <PlanteaShop
          setShowPopUp={setShowPopUp}
          setSelectedPopUp={setSelectedPopUp}
        />
         <SkySupport setShowPopUp={setShowPopUp}
          setSelectedPopUp={setSelectedPopUp}
        />
         <EmotionAssistant
          setShowPopUp={setShowPopUp}
          setSelectedPopUp={setSelectedPopUp}
        />
        <FCCProjects />
      </div>
    </section>
  );
}
