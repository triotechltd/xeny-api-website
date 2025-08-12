import React from "react";

export default function NewsLetter() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-3 md:px-6 py-12">
        <div
          className="bg-[#22086] rounded-2xl p-6 md:p-12"
          style={{
            background:
              "linear-gradient(90deg, rgb(0 105 213) 44%, rgb(137 193 250) 90%)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Left side - Text */}
            <div className="text-white md:w-1/2 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl md:text-3xl font-bold">
                Stay connected with our news
              </h3>
            </div>

            {/* Right side - Subscribe Form */}
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  className="w-full sm:w-auto px-4 py-3 md:py-4 rounded-lg sm:rounded-r-none bg-white text-gray-800 min-w-[250px] focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 md:py-4 bg-[#1c149c] text-white rounded-lg sm:rounded-l-none hover:bg-[#150f7d] transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
