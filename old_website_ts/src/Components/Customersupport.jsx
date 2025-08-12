import React from "react";

export default function CustomerSupport() {
  const features = [
    "24/7 Availability and parallel calls",
    "Real-time interaction with your systems",
    "Inject support procedure documents",
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 p-4 lg:p-14">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Automate customer
                <span className="text-[#3a0ffb] block">support inquiries</span>
              </h2>
              <p className="text-sm lg:text-base text-gray-600 mb-6">
                Instantly answer customer support phone calls –
                <span className="hidden lg:block">
                  {" "}
                  zero waiting time, zero queue, zero customer frustrations.
                </span>
                <span className="lg:hidden">
                  {" "}
                  zero waiting time, zero queue,
                  <br />
                  zero customer frustrations.
                </span>
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3 lg:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 lg:gap-3">
                  <img
                    src="images/plus.webp"
                    alt="Plus"
                    className="inline-block"
                    width="30px"
                  />
                  <span className="text-sm lg:text-base text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full lg:w-auto text-white px-4 lg:px-6 py-2.5 lg:py-3 border-r-50 hover:opacity-90 transition-colors bg-gradient-to-r from-[#0069d5] via-[#0069d5] to-[#0052a8] text-sm lg:text-base rounded-lg">
              Get Your Agent Now in 60 Seconds
            </button>
          </div>

          {/* Right Content */}
          <div className="relative mt-6 lg:mt-0">
            <img
              src="images/automate-customer.png"
              alt="Smiling customer service representative"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:w-[1200px] lg:h-[600px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
