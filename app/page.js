"use client";
import Start from "./components/Start";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Loading from "./loading";
import dynamic from "next/dynamic";
import { useState, Suspense } from "react";

export function observeScroll(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  elements.forEach((el) => observer.observe(el));
}

export default function Home() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedPopUp, setSelectedPopUp] = useState(null);

  const onHandleClose = () => {
    setShowPopUp(false);
  };

  return (
    <>
      <main
        className={`relative min-h-screen text-lg bg-stone-100 dark:bg-gray-950 ${showPopUp ? "opacity-30" : ""}`}
      >
        <Suspense fallback={<Loading />}>
          <Start />
          <NavBar />
        </Suspense>
        <Projects
          setShowPopUp={setShowPopUp}
          setSelectedPopUp={setSelectedPopUp}
        />
        <DynamicAbout />
        <DynamicContact />
      </main>
      {showPopUp && (
        <DynamicPopUp
          onHandleClose={onHandleClose}
          selectedPopUp={selectedPopUp}
        />
      )}
    </>
  );
}
const DynamicAbout = dynamic(() => import("./components/About"), {
  ssr: false,
});
const DynamicContact = dynamic(() => import("./components/Contact"), {
  ssr: false,
});
const DynamicPopUp = dynamic(() => import("./components/PopUp"), {
  ssr: false,
});
