import { BsGithub } from "react-icons/bs";

export default function EmotionAssistant({ setShowPopUp, setSelectedPopUp }) {
  return (
    <div className="z-10 w-full p-4 rounded-3xl shadow-lg m-2 bg-slate-300 bg-opacity-60 dark:bg-gradient-to-b from-gray-300 to-gray-200 dark:shadow-slate-500 animated-item slide-in delay-300">
      <img
        src="images/emotions.png"
        alt="SPA like app gif"
        className="w-11/12 h-[194px] object-cover rounded-3xl mx-auto"
      />
      <h2 className="font-bold text-lg my-2 dark:text-slate-900">
        SPA like app: Emotions Assistant
      </h2>
      <p className="text-gray-700 p-2 text-justify md:text-base sm:text-sm text-xs">
        Emotions Assistant is an application designed to assist
        users in recognizing and managing their emotions effectively. The app
        offers breathing exercises, emotion notes, space for journaling and
        helpful resources. Users can select their current mood from a range of
        options and display notes to...{" "}
        <button
          onClick={() => {
            setShowPopUp(true);
            setSelectedPopUp(2);
          }}
          className="bg-transparent my-auto text-base font-semibold px-1.5 py-1 rounded-full shadow-none text-slate-900 hover:shadow-md hover:text-gray-600"
        >
          Read more
        </button>
      </p>
      <p className="text-gray-700 p-2 text-justify md:text-base sm:text-sm text-xs">
        P.S. The whole app from blobs, UX/UI and idea is my original work 💪
      </p>
      <div className="flex flex-row-reverse justify-between p-2 mt-3">
        <div className="flex flex-row justify-end">
          <a
            href="https://github.com/NanaNiki/Emotions-Assistant"
            target="_blank"
          >
            <BsGithub className="mx-2 mt-1 text-slate-900 text-2xl rounded-full hover:shadow-lg hover:text-blue-700" />
          </a>
          <a href="https://emotions-assistant.netlify.app/" target="_blank">
            <button className="bg-gradient-to-t from-slate-100 to-slate-200 my-auto text-base font-semibold px-1.5 py-1 rounded-full shadow-md text-slate-900  hover:shadow-blue-700 hover:shadow-md hover:text-blue-700 ">
              Live Demo
            </button>
          </a>
        </div>
        <span className="text-gray-700 my-auto md:text-base sm:text-sm text-xs font-semibold">
          React.js Next.js Tailwind CSS
        </span>
      </div>
    </div>
  );
}
