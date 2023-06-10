import { BsGithub } from "react-icons/bs";

export default function PlanteaShop({ setShowPopUp, setSelectedPopUp }) {
  return (
    <div className="z-10 flex flex-col justify-between w-full p-4 m-2 delay-500 bg-gray-300 shadow-lg animated-item slide-in rounded-3xl shadow-slate-500 dark:bg-transparent dark:shadow-gray-600">
      <img
        src="images/plantea.png"
        alt="E-commerce website gif"
        className="mx-auto h-[194px] w-11/12 rounded-3xl object-cover"
      />
      <h2 className="w-11/12 my-2 text-lg font-bold text-slate-900 dark:text-white">
        E-commerce webstie: Plant Shop
      </h2>
      <p className="p-2 text-xs text-justify text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
        Plantea Shop is a demo plant shop website. The site offers intuitive
        user interface solutions and functionalities such as search bar,
        shopping cart, blog section displaying posts, sortable products with an
        option to add them to the shopping cart, and a simulated checkout
        process...{" "}
        <button
          onClick={() => {
            setShowPopUp(true);
            setSelectedPopUp(1);
          }}
          className="my-auto rounded-full bg-transparent px-1.5 py-1 text-xs font-semibold text-slate-900 shadow-none hover:text-gray-600 hover:shadow-md dark:text-white dark:hover:text-gray-300 dark:hover:shadow-gray-600 sm:text-base"
        >
          Read more
        </button>
      </p>
      <p className="p-2 text-xs text-justify text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
        P.S. If you are fan of “The Office” click on Privacy Policy link 😊
      </p>
      <div className="flex flex-row-reverse p-2 mt-3">
        <div className="flex flex-row justify-end">
          <a
            href="https://github.com/NanaNiki/E-commerce"
            target="_blank"
            className="my-auto"
          >
            <BsGithub className="mx-2 my-auto text-2xl rounded-full text-slate-900 hover:text-blue-700 hover:shadow-lg dark:text-white dark:hover:text-blue-700 sm:mt-1" />
          </a>
          <a
            href="https://plantea-shop.netlify.app/"
            target="_blank"
            className="my-auto"
          >
            <button className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-5 py-0.5 text-xs font-semibold text-slate-900 shadow-md hover:text-blue-700 hover:shadow-md hover:shadow-blue-700 dark:bg-slate-400 sm:text-base md:px-1.5 md:py-1 ">
              Live Demo
            </button>
          </a>
        </div>
        <span className="my-auto mt-2 text-xs font-semibold text-gray-700 dark:text-white sm:text-base md:mt-0">
          React.js Next.js Tailwind CSS
        </span>
      </div>
    </div>
  );
}
