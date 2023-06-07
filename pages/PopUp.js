const projectinfo = [
  {
    id: 1,
    name: "E-commerce website",
    text1:
      "Plantea Shop is an e-commerce website designed to showcase and sell a variety of plants. The design template from",
    text2:
      "Uizard, provided the home page, product page and pop up message, leaving plenty room for design decisions on other functional elements and pages. I tried to mimic the style and feeling of the main concept on the whole website, as well as provide intuitive user interface solutions, for example when clicking on search-bar or shopping-cart, when user clicks off the area, mentioned elements close themselves automatically. Apart from these functionalities the website displays posts in blog section, products, that can be sorted and added to shopping cart, and even mimic the checkout process. Plantea Shop is built with responsive design ensuring compatibility across different devices and screen sizes. While it was my first time building demo-functional e-commerce website, a lot of functionalities was challenging especially shopping-cart and checkout, as well as creating dynamic routes, which render post page and product page.",
    link: "https://app.uizard.io/templates/O4Q0AGM8ZruJw9GpR5YQ?_gl=1*r55hdo*_ga*MTgwNzYxODk1MC4xNjgzMTE1NTQ5*_ga_FV1FRPC5G4*MTY4MzQ0OTg1NS4xMS4xLjE2ODM0NTE5NzMuNTAuMC4w",
  },
  { id: 2 },
];
export default function PopUp({onHandleClose}) {
  return (
    <div className="z-30 fixed sm:top-1/3 sm:right-1/4 top-1/4 md:w-6/12 w-[24rem] rounded-3xl bg-indigo-200 font-bold text-slate-900 shadow-lg shadow-pink-600">
      <button
        onClick={onHandleClose}
        aria-label="Close the popup message"
        className="text-purple-700 text-2xl hover:text-pink-700 text-end absolute right-8 top-6"
      >
        <RxCross1 />
      </button>

      {projectinfo.map((project, index) => {
        return (
          <div
            key={index}
            className="md:p-8 md:ms-8 py-10 px-12 text-justify sm:text-lg text-base"
          >
            <h1 className="text-center my-4 text-xl font-extrabold text-pink-700">
              {project.name}
            </h1>
            <p>{project.text1}
            {project.link ? (
                <a
              href="https://app.uizard.io/templates/O4Q0AGM8ZruJw9GpR5YQ?_gl=1*r55hdo*_ga*MTgwNzYxODk1MC4xNjgzMTE1NTQ5*_ga_FV1FRPC5G4*MTY4MzQ0OTg1NS4xMS4xLjE2ODM0NTE5NzMuNTAuMC4w"
              target="_blank"
              className="italic hover:text-blue-900"
            >
              Uizard
            </a>
            ) : ""}
            {project.text2 ? project.text2 : ""}
            </p>
          </div>
        );
      })}
    </div>
  );
}
