import Image from "next/image";
import { useEffect, useState } from "react";

const slideImages = [
  "/rqmSQ.png",
  "/mdpSQ.png",
  "/dmSQ.png",
  "/jscSQ.png",
  "/pcSQ.png",
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
    <div className="w-48 overflow-hidden">
      <div
        className="flex transition-transform ease-in duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((src) => (
          <Image
            className="rounded-3xl"
            src={src}
            key={src}
            height={200}
            width={200}
          />
        ))}
      </div>
    </div>
  );
}
