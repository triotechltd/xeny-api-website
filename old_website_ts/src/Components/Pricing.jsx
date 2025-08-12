import React from "react";

export default function Pricing() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 bg-gradient-to-b from-[#0069d5] via-[#0069d5] to-[#0052a8]">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl text-white font-semibold mb-4 px-4">
          Ready to start automating
          <br className="hidden md:block" />
          phone calls with AI?
        </h2>
        {/* Toggle Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="hidden md:block w-64 h-[1px] bg-white/30"></span>
          <div className="inline-flex items-center bg-[#00ff40] rounded-md p-3 md:p-4">
            <span className="text-xs md:text-sm font-semibold px-3 md:px-4 py-2 rounded-l-md bg-[#1c1399] text-white mr-2">
              Monthly
            </span>
            <span className="text-xs md:text-sm font-semibold px-3 md:px-4 py-1 text-dark rounded-r-md">
              Yearly 2 months free
            </span>
          </div>
          <span className="hidden md:block w-64 h-[1px] bg-white/30"></span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto px-2 md:px-0">
        {/* Pricing Plan Card */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-4 md:p-6 min-w-[280px] md:min-w-0"
          >
            <h3 className="text-base md:text-lg font-semibold mb-2 text-[#1c1399] text-center">
              {plan.title}
            </h3>
            <p
              className="text-xs md:text-sm text-dark/80 mb-4 text-center"
              dangerouslySetInnerHTML={{ __html: plan.description }}
            ></p>
            <div className="flex items-baseline justify-center mb-4 md:mb-6">
              <span className="text-2xl md:text-3xl font-semibold text-[#1c1399]">
                {plan.price}
              </span>
              <span className="text-xs md:text-sm text-dark/80 ml-2">
                {plan.billing}
              </span>
            </div>
            <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center text-xs md:text-sm text-dark"
                >
                  <img
                    src="images/tick2.png"
                    alt="Checkmark"
                    className="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-3"
                  />
                  <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                </li>
              ))}
            </ul>
            <button className="w-full text-white px-4 md:px-5 py-2 text-sm md:text-base rounded-full hover:opacity-90 transition-colors bg-gradient-to-r from-[#0069d5] via-[#0069d5] to-[#0052a8] flex items-center justify-center">
              Subscribe now
              <svg
                className="ml-2 w-3 md:w-4 h-3 md:h-4"
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
        ))}
      </div>
    </section>
  );
}

const plans = [
  {
    title: "Starter plan",
    description: "Start automating calls<br>with<br>voice AI agents.",
    price: "$34",
    billing: "Monthly",
    features: [
      '120 included minutes, then<br><span class="text-[#1c1399] font-semibold">$0.20 / extra minute</span>',
      "1 assistant",
      "1 outbound campaign",
      "3 calls in parallel",
      "1 cloned voice",
      "900 no-code automate<br>platform runs monthly",
    ],
  },
  {
    title: "Pro plan",
    description:
      "For small businesses<br>automating<br>inbound and outbound calls.",
    price: "$129",
    billing: "Monthly",
    features: [
      '700 included minutes, then<br><span class="text-[#1c1399] font-semibold">$0.16 / extra minute</span>',
      "5 assistants",
      "5 outbound campaigns",
      "10 calls in parallel",
      "5 cloned voices",
      "10,000 no-code automate<br>platform runs monthly",
    ],
  },
  {
    title: "Agency plan",
    description:
      "Ideal for agencies<br>scaling<br>customer engagement<br>with<br>automation.",
    price: "$249",
    billing: "Monthly",
    features: [
      '1700 included minutes, then<br><span class="text-[#1c1399] font-semibold">$0.09 / extra minute</span>',
      "Unlimited assistants",
      "Unlimited outbound campaigns",
      "500 calls in parallel",
      "10 cloned voices",
      "100,000 no-code<br>automate platform runs<br>monthly",
    ],
  },
  {
    title: "Lifetime agent plan",
    description:
      "Boost revenue with AI call<br>automation under your<br>brand.",
    price: "$5000",
    billing: "one time",
    features: [
      "Unlimited included minutes",
      "Unlimited assistants",
      "Unlimited outbound campaigns",
      "1000 calls in parallel",
      "Unlimited cloned voices",
      "Unlimited no-code automate<br>platform runs monthly",
    ],
  },
];
