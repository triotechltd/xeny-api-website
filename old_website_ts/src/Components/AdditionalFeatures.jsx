import React from "react";

export default function AdditionalFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Auto Data Enrichment */}
        <div className="bg-[#e1e7ff] h-[440px] rounded-3xl pl-8 pr-8 pt-8 pb-0 hover:shadow-lg transition-shadow">
          {/* Title Section */}
          <h3 className="text-[#1400FF] text-2xl font-bold mb-2">
            Auto Data Enrichment
          </h3>
          <p className="text-gray-600 mb-2">
            Automate your entire call operations, from converting inbound
            prospects into meetings, qualifying leads, or customer care
            operations. Mike seamlessly embeds in your current workflows.
          </p>
          {/* Image */}
          <img
            src="images/auto-data.png"
            alt="Auto Data Enrichment"
            className="w-full mt-4"
          />
        </div>

        {/* Card 2: Zero Latency */}
        <div className="bg-[#e1e7ff] h-[440px] rounded-3xl p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-[#1400FF] mb-2">
            Zero Latency
          </h3>
          <p className="text-gray-600 mb-2">
            Automate your entire call operations, from converting inbound
            prospects into meetings, qualifying leads, or customer care
            operations. Mike seamlessly embeds in your current workflows.
          </p>
          <div className="relative w-fit mt-4">
            <img
              src="images/zero-latency.png"
              alt="Zero Latency"
              className="w-full"
            />
          </div>
        </div>

        {/* Card 3: Seamless Integrations */}
        <div className="bg-[#e1e7ff] h-[440px] rounded-3xl p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-[#1400FF] text-2xl font-bold mb-2">
            Seamless Integrations
          </h3>
          <p className="text-gray-600 mb-2">
            Automate your entire call operations, from converting inbound
            prospects into meetings, qualifying leads, or customer care
            operations. Mike seamlessly embeds in your current workflows.
          </p>
          <div className="relative w-fit mt-4">
            <img
              src="images/seamless-integrations.png"
              alt="Seamless Integrations"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
