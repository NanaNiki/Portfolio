import { BsGithub } from "react-icons/bs";

export default function PlanteaShop({ setShowPopUp, setSelectedPopUp }) {
  return (
    <div className="animated-item slide-in z-10 m-2 w-full grid grid-cols-3 justify-between rounded-3xl bg-gray-300 p-4 shadow-lg shadow-slate-500 delay-500 dark:bg-transparent dark:shadow-gray-600">
      <img
        src="images/plantea.png"
        alt="E-commerce website image"
        className="m-auto h-[194px] w-11/12 rounded-3xl object-cover"
      />
      <div className="flex flex-col justify-center ms-4">
        <h2 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
          Plantea Shop
        </h2>
        <p className="p-2 text-justify text-xs text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
          Demo e-commerce website, which offers functionalities such as search
          bar, shopping cart, blog section, sortable products and a simulated
          checkout process.
          <button
            onClick={() => {
              setShowPopUp(true);
              setSelectedPopUp(1);
            }}
            className="my-auto rounded-full bg-transparent px-1.5 py-1 mx-1 text-xs font-semibold text-slate-900 shadow-none hover:text-gray-600 hover:shadow-md dark:text-white dark:hover:text-gray-300 dark:hover:shadow-gray-600 sm:text-base"
          >
            Read more
          </button>
        </p>
        <p className="p-2 text-justify text-xs text-gray-700 dark:text-slate-300 sm:text-sm md:text-base">
          P.S. If you are fan of “The Office” click on Privacy Policy link 😊
        </p>
      </div>
        <div className="flex flex-col-reverse justify-evenly">
          <div className="flex flex-row justify-center">
            <a
              href="https://github.com/NanaNiki/E-commerce"
              target="_blank"
              className="my-auto"
              aria-label="Go to GitHub repository"
            >
              <BsGithub className="mx-3 my-auto rounded-full text-3xl text-slate-900 hover:text-blue-700 hover:shadow-lg dark:text-white dark:hover:text-blue-700" />
            </a>
            <a
              href="https://plantea-shop.netlify.app/"
              target="_blank"
              className="my-auto"
              aria-label="Go to Plantea Shop"
            >
              <button className="my-auto rounded-full bg-gradient-to-t from-slate-100 to-slate-200 px-5 py-0.5 text-xs font-semibold text-slate-900 shadow-md hover:text-blue-700 hover:shadow-md hover:shadow-blue-700 dark:bg-slate-400 sm:text-base md:px-1.5 md:py-1 ">
                Live Demo
              </button>
            </a>
          </div>
          <span className="lg:mt-2 text-xs font-semibold text-gray-700 dark:text-white sm:text-base md:mt-0">
            React.js Next.js Tailwind CSS <br></br>Uizard Design <a className="italic dark:italic hover:text-blue-700  dark:hover:text-blue-700" href="https://app.uizard.io/templates/O4Q0AGM8ZruJw9GpR5YQ?_gl=1*r55hdo*_ga*MTgwNzYxODk1MC4xNjgzMTE1NTQ5*_ga_FV1FRPC5G4*MTY4MzQ0OTg1NS4xMS4xLjE2ODM0NTE5NzMuNTAuMC4w">Template</a>
          </span>
        </div>
    </div>
  );
}
