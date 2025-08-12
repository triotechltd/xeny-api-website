import React from "react";

export default function InternationalNumber() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold">Batteries included!</h2>
          <span className="text-3xl font-extrabold text-[#3a0ffb]">
            International phone <br /> numbers
          </span>
          <p className="text-gray-600">
            Everything is already included in the platform: from top <br />{" "}
            voice providers, LLMs to
            <span className="text-[#3a0ffb]">
              {" "}
              dedicated phone <br /> numbers
            </span>{" "}
            from every corner of the world.
          </p>
          <button className="bg-[#3a0ffb] text-white px-6 py-3 rounded-full hover:bg-[#2a0be6] transition-colors bg-gradient-to-r from-[#0069d5] via-[#0069d5] to-[#0052a8] flex items-center gap-2">
            Start now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Right Content - Map */}
        <div className="relative">
          <img
            src="images/map.svg"
            alt="World Map with Country Connections"
            className="w-full max-w-full md:max-w-none"
          />
        </div>
      </div>

      {/* Diamond Background Image */}
      <img
        src="images/diamond.svg"
        alt="Diamond"
        className="absolute hidden md:block -bottom-32 -right-20 w-[700px] md:w-[1400px] h-[650px] md:h-[1300px] opacity-80 z-[-1]"
        style={{ maxWidth: "none" }}
      />
    </section>
  );
}
