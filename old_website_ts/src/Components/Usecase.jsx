import React from "react";

export default function Usecase() {
  const tags = [
    "Auto",
    "Hotels",
    "Finance",
    "E-commerce",
    "Services",
    "Legal",
    "Tourism",
    "Recruitment",
  ];

  const cards = [
    {
      title: "Lead Generation",
      description:
        "Mike works 24/7 to engage prospects and scale outreach while maintaining genuine connection with buyers at every touchpoint.",
      image: "/images/lg-01.png",
      type: "multi-image",
    },
    {
      title: "Inbound Lead Qualification",
      description:
        "Mike handles your inbound leads, qualifies them and schedules meetings, making your team’s life easier.",
      image: "/images/lg-01.png",
      type: "single-image",
    },
    {
      title: "Customer Support",
      description:
        "Mike is always ready to provide instant, human-like assistance to your customers, anytime, anywhere.",
      image: "/images/lg-01.png",
      type: "single-image",
    },
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 relative">
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-[200px] -z-10"
          style={{
            backgroundImage: "url('/images/juliabgimg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-16">Use Cases</h2>

        {/* Industry Tags */}
        <div className="hidden md:flex md:flex-wrap gap-4 mb-12">
          {tags.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-xl font-medium text-[#5f5c66] px-2">
                {item}
              </span>
              {index !== tags.length - 1 && (
                <img
                  src="/images/plus.webp"
                  alt="Plus"
                  className="inline-block w-[30px]"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Scrollable Tags */}
        <div className="md:hidden relative mb-12">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10"></div>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="inline-flex gap-4 px-8 py-2">
              {tags.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 px-4 py-2"
                >
                  <span className="text-lg font-medium text-[#5f5c66] whitespace-nowrap">
                    {item}
                  </span>
                  <img src="/images/plus.svg" alt="Plus" className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="rounded-2xl p-6 bg-white shadow-md">
              <div className="relative w-full h-[250px] bg-[#E8EDFF] rounded-xl p-4 mb-6 flex flex-col items-center justify-center">
                {card.type === "multi-image" ? (
                  <>
                    {/* Team Member Images */}
                    <div className="flex justify-between mb-4 w-full relative">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="relative w-12 h-12">
                          <img
                            src={`/images/call-center-agent${
                              i % 2 === 0 ? "-1" : ""
                            }.png`}
                            alt="Team"
                            className="w-full h-full rounded-lg"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Center Avatar */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                      <img
                        src={card.image}
                        alt="Center"
                        className="w-24 h-24 rounded-full mx-auto mb-2"
                      />
                      <div className="bg-black text-white text-sm px-4 py-1 rounded-full">
                        Schedule Meetings
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Single image with CTA */}
                    <button className="bg-[#3a0ffb] text-white text-sm px-4 py-2 mx-auto flex items-center gap-2 mb-4 rounded-full">
                      Play voice
                      <img
                        src="/images/plus.svg"
                        alt="Play"
                        className="w-4 h-4"
                      />
                    </button>
                    <div className="bg-[#030014] text-white mx-auto text-sm px-4 py-1.5 rounded-full w-fit mb-4">
                      Human like Talkback
                    </div>
                    <img
                      src={card.image}
                      alt="Avatar"
                      className="w-24 h-24 rounded-full mx-auto"
                    />
                  </>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
