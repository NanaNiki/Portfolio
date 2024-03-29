import Image from "next/image";
import { useEffect, useState } from "react";

const slideImages = [
  "/images/rqm.png",
  "/images/mdp.png",
  "/images/dm.png",
  "/images/jsc.png",
  "/images/pc.png",
];

export default function Carousel({
  slides: customSlides,
  autoSlide = true,
  autoSlideInterval = 3000,
}) {
  const slides = customSlides ?? slideImages;
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="w-48 mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((src) => (
          <Image
            className="rounded-3xl"
            src={src}
            key={src}
            height={200}
            width={200}
            alt="freeCodeCamp projects images"
          />
        ))}
      </div>
    </div>
  );
}
