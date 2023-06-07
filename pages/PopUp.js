import { RxCross1 } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";

const projectinfo = [
  {
    id: 1,
    name: "E-commerce website",
    text1:
      "Plantea Shop is an e-commerce website designed to showcase and sell a variety of plants. The design template from",
    text2:
      "provided the home page, product page and pop up message, leaving plenty room for design decisions on other functional elements and pages. I tried to mimic the style and feeling of the main concept on the whole website, as well as provide intuitive user interface solutions, for example when clicking on search-bar or shopping-cart, when user clicks off the area, mentioned elements close themselves automatically. Apart from these functionalities the website displays posts in blog section, products, that can be sorted and added to shopping cart, and even simulate the checkout process. Plantea Shop is built with responsive design ensuring compatibility across different devices and screen sizes. While it was my first time building demo-functional e-commerce website, a lot of functionalities was challenging especially shopping-cart and checkout, as well as creating dynamic routes, which render post page and product page.",
    link: "https://app.uizard.io/templates/O4Q0AGM8ZruJw9GpR5YQ?_gl=1*r55hdo*_ga*MTgwNzYxODk1MC4xNjgzMTE1NTQ5*_ga_FV1FRPC5G4*MTY4MzQ0OTg1NS4xMS4xLjE2ODM0NTE5NzMuNTAuMC4w",
    demo: "https://plantea-shop.netlify.app/",
    github: "https://github.com/NanaNiki/E-commerce",
  },
  {
    id: 2,
    name: "SPA like App",
    text1:
      "Emotions Assistant is a SPA like, web application designed to assist users in recognizing and managing their emotions effectively. The whole app from blobs, UX/UI and idea is my original work, inspired by experience as movement teacher. The app offers a guided step by step process of emotional integration by breathing exercises, emotion notes, space for journaling and helpful resources. Users can select their current mood from a range of options and display notes to provide further context and better understanding. The emotion journal feature provides a platform for users to express and reflect on their emotions, either by free flow of thoughts or prompt with helpful question. In the final step user can get their report of their process in PDF form.",
    text2:
      " My goal with Emotions Assistant app was to empower users in managing their emotions, providing them with tools and resources to cultivate emotional well-being and self-care. Even though the Emotion Assistant app is simpler than E-commerce website, the process of building this from idea to product was more time-consuming, and required much more decision making.",
    demo: "https://emotions-assistant.netlify.app/",
    github: "https://github.com/NanaNiki/Emotions-Assistant",
  },
];

export default function PopUp({ onHandleClose, selectedPopUp }) {
  const projectPopUp = projectinfo.find((item) => item.id === selectedPopUp);

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <div className="z-30 fixed top-[20%] h-fit w-6/12 rounded-3xl  bg-slate-300 bg-opacity-60 dark:bg-gradient-to-b from-gray-300 to-gray-200 dark:shadow-slate-500 text-slate-900 shadow-lg">
        <button
          onClick={onHandleClose}
          aria-label="Close the popup message"
          className="text-gray-700 text-2xl font-extrabold hover:text-blue-700 text-end absolute right-8 top-6"
        >
          <RxCross1 />
        </button>
        {projectPopUp.id === selectedPopUp ? (
          <div
            key={projectPopUp.index}
            className="md:p-8 py-10 px-12 text-justify sm:text-lg text-base"
          >
            <h1 className="text-center my-4 text-xl font-extrabold mt-2 mb-1 dark:text-slate-900">
              {projectPopUp.name}
            </h1>
            <p className="text-gray-700 p-2 text-justify md:text-base sm:text-sm special-text-xs">
              {projectPopUp.text1}
              {projectPopUp.link ? (
                <a
                  href={projectPopUp.link}
                  target="_blank"
                  className="italic hover:text-blue-700"
                >
                  {" "}
                  Uizard{" "}
                </a>
              ) : (
                ""
              )}
              {projectPopUp.text2 ? projectPopUp.text2 : ""}
            </p>
            <div className="flex flex-row-reverse justify-between p-2">
              <div className="flex flex-row justify-end">
                <a href={projectPopUp.github} target="_blank">
                  <BsGithub className="mx-2 mt-1 text-slate-900 text-2xl   hover:text-blue-700" />
                </a>
                <a href={projectPopUp.demo} target="_blank">
                  <button className="bg-gradient-to-t from-slate-100 to-slate-200 my-auto text-base font-semibold px-1.5 py-1 rounded-full shadow-md text-slate-900  hover:shadow-blue-700 hover:shadow-md hover:text-blue-700 ">
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
