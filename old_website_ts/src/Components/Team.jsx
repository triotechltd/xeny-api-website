import React, { useState } from "react";

export default function Team() {
  const teamMembers = [
    "images/01.png",
    "images/02.png",
    "images/03.png",
    "images/04.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Desktop View */}
      <div className="w-full relative mt-[80px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-14">
          <div className="hidden lg:flex justify-between gap-6">
            {teamMembers.map((img, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="w-56 h-72 rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`Team Member ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="lg:hidden relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((img, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="relative group cursor-pointer mx-auto w-56">
                    <div className="w-56 h-72 rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`Team Member ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-r-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-l-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-full mx-auto -mt-16 pb-12">
        <div className="bg-gradient-to-b from-[#0069d5] via-[#0069d5] to-[#004fa1] text-white text-center py-12">
          <h2 className="text-4xl font-semibold mt-16">
            Get started in 3 simple steps & start
          </h2>
          <p className="text-4xl font-semibold">wowing your customers today</p>
        </div>
      </div>
    </div>
  );
}
