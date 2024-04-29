"use client";
import { useState } from "react";
import RightIcon from "./icons/right";
import LeftIcon from "./icons/left";
import StartsIcon from "./icons/start";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      title: 'Hans Han',
      desc: 'Good Money Changer, very friendly and honest staff, they can give best rate compare to other'
    },
    {
      title: 'Michael Bubbles',
      desc: 'My hotel told me to go here, so i went and the rates is better'
    },
    {
      title: 'Michael J. Scofield',
      desc: 'Good rate, good staff & services and no commission, thank you'
    }
  ];
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel w-full px-5">
      <div className="w-full relative px-5">
        <div className="w-full px-5">
          <div className="text-xl font-bold text-center mb-4 text-black-100">Testimonial</div>
          <div className="carousel-inner w-full px-5 relative h-24 overflow-hidden">
            {images.map((item, index) => (
              <div
                key={index}
                className={`carousel-item absolute top-0 left-0 w-full transition duration-500 ease-in-out ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
                style={{ transform: `translateX(${index - currentIndex}00%)` }}
              >
                <div className="text-base text-black text-center font-light	 mb-2">{item.title}</div>
                <div className="flex justify-center mb-2"><StartsIcon/></div>
                <div className="text-sm text-black text-center">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-2"
          onClick={goToPrevious}
        >
          <LeftIcon />
        </button>
        <button
          className="carousel-control absolute top-0 bottom-0 right-0 flex items-center justify-center p-2"
          onClick={goToNext}
        >
          <RightIcon />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
