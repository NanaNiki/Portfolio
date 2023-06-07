import { BsGithub } from "react-icons/bs";

export default function PlanteaShop({ setShowPopUp, setSelectedPopUp }) {
  return (
    <div className="z-10 w-full p-4 rounded-3xl shadow-lg m-2 bg-slate-300 bg-opacity-60 dark:bg-gradient-to-b from-gray-300 to-gray-200 dark:shadow-slate-500 animated-item slide-in delay-500">
      <img src="images/plantea.png" alt="E-commerce website gif" className="w-11/12 h-[194px] object-cover rounded-3xl mx-auto"/>
      <h2 className="font-bold text-lg my-2 dark:text-slate-900">
        E-commerce webstie: Plant Shop
      </h2>
      <p className="text-gray-700 p-2 text-justify md:text-base sm:text-sm special-text-xs">
        Plantea Shop is a demo plant shop website. The site offers intuitive user interface solutions
        and functionalities such as search bar, shopping cart, blog section
        displaying posts, sortable products with an option to add them to the
        shopping cart, and a simulated checkout process...{" "}
        <button
          onClick={() => {setShowPopUp(true); setSelectedPopUp(1)}}
          className="bg-transparent my-auto text-base font-semibold px-1.5 py-1 rounded-full shadow-none text-slate-900 hover:shadow-md hover:text-gray-600"
        >
          Read more
        </button>
      </p>
      <p className="text-gray-700 p-2 text-justify md:text-base sm:text-sm special-text-xs">
        P.S. If you are fan of “The Office” click on Privacy Policy link 😊
      </p>
      <div className="flex flex-row-reverse justify-between p-2 mt-3">
        <div className="flex flex-row justify-end">
          <a href="https://github.com/NanaNiki/E-commerce" target="_blank">
            <BsGithub className="mx-2 mt-1 text-slate-900 text-2xl rounded-full hover:shadow-lg hover:text-blue-700" />
          </a>
          <a href="https://plantea-shop.netlify.app/" target="_blank">
            <button className="bg-gradient-to-t from-slate-100 to-slate-200 my-auto text-base font-semibold px-1.5 py-1 rounded-full shadow-md text-slate-900  hover:shadow-blue-700 hover:shadow-md hover:text-blue-700 ">
              Live Demo
            </button>
          </a>
        </div>
        <span className="text-gray-700 my-auto md:text-base sm:text-sm special-text-xs font-semibold">
          React.js Next.js Tailwind CSS
        </span>
      </div>
    </div>
  );
}
