import React from "react";

export default function Language() {
  return (
    <div>
      <div className="max-w-7xl mx-auto shadow-lg rounded-3xl">
        {/* Language Pills at Top */}

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center p-4 md:p-8">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-[#1c1399] border-r-50 px-4 py-1 mb-4 md:mb-6">
              <span className="text-[#FFFFFF] font-semibold">Listen Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-[#1c1399] text-4xl md:text-5xl">
                40+ languages
              </span>{" "}
              to choose from
            </h2>
            <p className="text-gray-600 mb-6 md:mb-8">
              AI Voice Bot supports over 40 languages and diverse accents, to
              address global audience. Each language is equipped with{" "}
              <span className="text-[#1c1399]">hundreds</span> of
              natural-sounding voice options, while also allowing you to{" "}
              <span className="text-[#1c1399]">clone your own voice.</span>
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <img src="images/tick.svg" alt="Tick" className="w-4 h-4" />
                <span className="text-sm">Clone your voice</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="images/tick.svg" alt="Tick" className="w-4 h-4" />
                <span className="text-sm">Multiple accents</span>
              </div>
            </div>
          </div>

          {/* Right Preview Section */}
          <div className="w-full lg:w-1/2 rounded-2xl p-4 md:p-8">
            <div className="mb-4 md:mb-6">
              <span className="text-lg md:text-xl font-semibold text-gray-600">
                🔊 Preview language
              </span>
            </div>

            {/* Language Selector */}
            <div className="space-y-4 pb-4">
              {/* English Selector */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <img
                    src="images/america.svg"
                    alt="American Flag"
                    className="w-5 md:w-6 h-5 md:h-6"
                  />
                  <span className="text-gray-700 font-medium">English</span>
                </div>
                <select className="w-full px-4 py-3 md:py-4 pl-28 rounded-xl bg-[#f5f5f5] border border-gray-200 text-gray-700 appearance-none focus:outline-none focus:border-[#3a0ffb] focus:bg-white transition-all">
                  <option>US Accent</option>
                  <option>UK Accent</option>
                  <option>Australian Accent</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Play Button */}
            <button className="w-fit bg-gradient-to-r from-[#0069d5] via-[#0069d5] to-[#0052a8] text-white border-r-50 py-2 px-4 flex items-center justify-center gap-2 ml-auto rounded-lg">
              Play voice
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2020_605)">
                  <path
                    d="M18.5703 9.84473C18.5703 11.4847 18.1703 12.9947 17.3703 14.3747C16.5703 15.7547 15.4803 16.8447 14.1003 17.6447C12.7203 18.4447 11.2103 18.8447 9.57031 18.8447C7.93031 18.8447 6.42031 18.4447 5.04031 17.6447C3.66031 16.8447 2.57031 15.7547 1.77031 14.3747C0.970312 12.9947 0.570312 11.4847 0.570312 9.84473C0.570312 8.20473 0.970312 6.69473 1.77031 5.31473C2.57031 3.93473 3.66031 2.84473 5.04031 2.04473C6.42031 1.24473 7.93031 0.844727 9.57031 0.844727C11.2103 0.844727 12.7203 1.24473 14.1003 2.04473C15.4803 2.84473 16.5703 3.93473 17.3703 5.31473C18.1703 6.69473 18.5703 8.20473 18.5703 9.84473ZM8.19031 6.54473C8.03031 6.42473 7.85031 6.41473 7.65031 6.51473C7.45031 6.61473 7.35031 6.78473 7.35031 7.02473V12.6647C7.35031 12.9047 7.45031 13.0747 7.65031 13.1747C7.85031 13.2747 8.03031 13.2647 8.19031 13.1447L12.1503 10.3247C12.3103 10.2047 12.3903 10.0447 12.3903 9.84473C12.3903 9.64473 12.3103 9.48473 12.1503 9.36473L8.19031 6.54473Z"
                    fill="#FAFFFC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2020_605">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="matrix(1 0 0 -1 0.570312 18.8447)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center md:text-end mt-4 mb-6 md:mb-8 px-4 md:px-8 pb-4">
          10+ accents and 100+ voices for each language are available in-app.
        </p>
      </div>
    </div>
  );
}
