import React from "react";

export default function Workflow() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-8">
          {/* Left Section */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[700px] w-full">
            <div
              className="absolute inset-0 rounded-3xl w-full h-full"
              style={{
                backgroundImage: "url('images/juliabgimg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col p-4 md:p-8">
              <div className="flex flex-col mb-4 md:mb-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                  <span className="text-[36px] sm:text-[50px] md:text-[100px] font-extrabold text-[#3a0ffb] whitespace-nowrap leading-none">
                    AI
                  </span>
                  <h2 className="text-[24px] sm:text-[30px] md:text-[50px] font-extrabold whitespace-normal md:whitespace-nowrap leading-tight">
                    Digital voice agents for
                  </h2>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-left md:text-center text-[#3a0ffb] mt-2 sm:mt-4 md:mb-8">
                  HOTELS
                </h2>
              </div>

              <div className="max-w-3xl">
                <p className="text-[18px] sm:text-[24px] md:text-[36px] font-extrabold leading-tight break-words">
                  Voice AI tech is ready to handle phone calls and behave like{" "}
                  <span className="text-[#3a0ffb]">real people</span>. Be among
                  the first to take advantage
                  <span className="inline-block ml-2"></span>.
                </p>
              </div>
              <div className="max-w-2xl mt-3 sm:mt-6 md:mt-16">
                <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-tight break-words mt-2 sm:mt-4">
                  Create no-code AI phone call systems with our AI voice agents:
                  never miss a call again and
                  <span className="text-[#3a0ffb]"> convert more leads</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Image */}
          <div className="lg:col-span-2 relative mt-4 sm:mt-8 lg:mt-0">
            <div className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mx-auto">
              {/* Phone Frame */}
              <div className="relative">
                <img
                  src="images/mobile-1.png"
                  alt="iPhone Frame"
                  className="w-[350px] h-[400px] sm:h-[500px] md:h-[570px]"
                />

                {/* Mobile Lines Image - Hidden on mobile */}
                <img
                  src="images/mobileline.svg"
                  alt="Connection Lines"
                  className="hidden lg:block absolute -bottom-[170px] -left-[840px] z-10 scale-[.8]"
                  style={{ minWidth: "1059px", minHeight: "258px" }}
                />

                {/* Call Interface */}
                <div className="absolute inset-0 flex flex-col items-center pt-4 sm:pt-8">
                  {/* Profile Image */}
                  <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 rounded-full overflow-hidden mb-2 sm:mb-3 mt-6 sm:mt-9 mr-4">
                    <img
                      src="images/girl.png"
                      alt="Caller"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-base md:text-lg mb-2 mr-4">
                    Calling Priyanka
                  </p>

                  {/* Call Buttons */}
                  <div className="absolute bottom-12 md:right-20 sm:bottom-16 w-full md:w-[360px] flex justify-center md:justify-start px-2 sm:px-4 md:px-0">
                    <div className="flex items-center justify-between rounded-full bg-[#12151E] bg-gradient-to-r from-[#12151E] via-[#248BFB] to-[#248BFB] w-full md:w-[450px]">
                      <button className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                        <img
                          src="images/greenbtn.svg"
                          alt="Accept Call"
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24"
                        />
                      </button>
                      <span className="text-white text-[10px] sm:text-xs md:text-sm">
                        AI VOICE BOT AI AGENT
                      </span>
                      <button className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                        <img
                          src="images/redbtn.svg"
                          alt="Decline Call"
                          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
