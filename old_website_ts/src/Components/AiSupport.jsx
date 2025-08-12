import React from "react";

export default function AiSupport() {
  return (
    <section className="w-full">
      <div className="relative bg-[#e1e7ff] overflow-hidden">
        {/* Background Design */}
        <div className="absolute left-0 top-0 w-full md:w-1/2 h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E1E7FF] to-transparent"></div>

          {/* Circle with AI logo */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] flex items-center justify-center">
            <img
              src="images/ailast.svg"
              alt="Circle Background"
              className="absolute w-[400px] sm:w-[600px] md:w-[900px] h-[400px] sm:h-[600px] md:h-[900px] opacity-30 sm:opacity-50 md:opacity-100"
            />
            <img
              src="images/aiimg.svg"
              alt="AI Logo"
              className="absolute left-[1px] w-1/4 sm:w-1/3 md:w-1/2 h-1/4 sm:h-1/3 md:h-1/2 object-contain"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative p-4 md:p-8 lg:p-12">
          <div className="space-y-3 px-3 sm:px-4 md:px-8 lg:px-12 mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Extend your support team with our digital AI agents and increase
              productivity
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-md font-medium max-w-3xl mx-auto mt-4">
              Unlock the power of AI and automation to streamline operations and
              optimize your team's performance. Discover how AI Voice Bot AI
              cloud contact center solutions can help you do just that and so
              much more.
            </p>
          </div>
        </div>

        {/* Button Section */}
        {/* <div className="relative sm:pb-8 md:pb-12"> */}
          {/* <div className="flex items-center justify-center">
            <button className="bg-[#1400FF] text-white px-4 sm:px-6 md:px-8 py-2 md:py-3 transition-colors bg-gradient-to-r from-[#0069d5] via-[#0069d5] to-[#0052a8] text-xs sm:text-sm md:text-base border-r-50">
              Contact Sales
            </button>
          </div> */}

          {/* Optional Wave Frame */}
          {/*
          <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 md:right-[150px]">
            <img src="images/waveframe.svg" alt="Wave Frame" className="w-24 sm:w-32 md:w-64" />
          </div>
          */}
        {/* </div> */}
      </div>
    </section>
  );
}
