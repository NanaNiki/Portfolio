import { BsGithub } from "react-icons/bs";

export default function SkySupport({ setShowPopUp, setSelectedPopUp }) {
  return (
    <div className="animated-item slide-in z-10 m-2 w-full grid grid-cols-3 justify-between rounded-3xl bg-gray-300 p-4 shadow-lg shadow-slate-500 delay-300 dark:bg-transparent dark:shadow-gray-600">
      <img
        src="images/skysup.png"
        alt="SPA like app image"
        className="mx-auto h-[194px] w-11/12 rounded-3xl object-cover"
      />
      <div className="flex flex-col ms-4">
      <h2 className="mb-2 w-11/12 text-lg font-bold text-slate-900 dark:text-white">
        Sky Support
      </h2>
      <p className="p-2 text-justify text-xs text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
        Web application designed to provide a space of inspiration and enhanced focus. 
        The app offers personalized sky images, greek pilosophical quotes and soothing sounds.
        <button
          onClick={() => {
            setShowPopUp(true);
            setSelectedPopUp(2);
          }}
          className="my-auto rounded-full bg-transparent px-1.5 py-1 mx-1 text-xs font-semibold text-slate-900 shadow-none hover:text-gray-600 hover:shadow-md dark:text-white dark:hover:text-gray-300 dark:hover:shadow-gray-600 sm:text-base "
        >
          Read more
        </button>
      </p>
      <p className="p-2 text-justify text-xs text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
        ?
      </p>
      </div>
      <div className="flex flex-col-reverse justify-evenly">
        <div className="flex flex-row justify-center">
          <a
            href="https://github.com/NanaNiki/Sky-Support"
            target="_blank"
            className="my-auto"
            aria-label="Go to GitHub repository"
          >
            <BsGithub className="mx-3 rounded-full text-3xl text-slate-900 hover:text-blue-700 hover:shadow-lg dark:text-white dark:hover:text-blue-700" />
          </a>
          <a
            href="https://skysupport.netlify.app/"
            target="_blank"
            className="my-auto"
            aria-label="Go to Sky Support App"
          >
            <button className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-5 py-0.5 text-xs font-semibold text-slate-900 shadow-md hover:text-blue-700 hover:shadow-md hover:shadow-blue-700  sm:text-base md:px-1.5 md:py-1 ">
              Live Demo
            </button>
          </a>
        </div>
        <span className="lg:mt-2 text-xs font-semibold text-gray-700 dark:text-white sm:text-base md:mt-0">
          Vue.js Vanilla CSS <br></br> Unsplash API Geolocation API 
        </span>
      </div>
    </div>
  );
}
