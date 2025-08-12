import React from "react";

export default function Integration() {
  const icons = [
    "slack.svg",
    "docx.svg",
    "gmail.svg",
    "paws.svg",
    "yellowline.svg",
    "whatsp.svg",
    "tinker.svg",
    "phataka.svg",
    "cpp.svg",
    "pintrest.svg",
    "googlecalender.svg",
    "zapya.svg",
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 bg-[#e1e7ff] rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-4 lg:p-8">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 p-4 lg:p-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 lg:mb-6">
              <span className="text-[#1c1399] text-4xl lg:text-5xl">
                Integrate AI Agents with your entire stack
              </span>
            </h2>
            <p className="text-gray-600 text-sm lg:text-base mb-6 lg:mb-8">
              Automate your entire call operations, from converting inbound
              prospect into meetings, qualifying leads or customer care
              operations, Mike seamlessly embeds in your current workflows.
            </p>
          </div>

          {/* Right Content - Integration Icons Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 lg:gap-6 bg-white rounded-2xl p-3 lg:p-4 shadow-[0_4px_20px_0px_rgba(58,15,251,0.1)]">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2 lg:p-4 rounded-xl"
              >
                <img
                  src={`images/${icon}`}
                  alt={icon}
                  className="w-8 h-8 lg:w-auto lg:h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
