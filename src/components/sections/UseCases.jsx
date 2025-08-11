import React, { useRef } from "react";

const UseCases = () => {
  const scrollRef = useRef(null);

  const tabs = [
    { id: "lead", label: "Lead Qualification" },
    { id: "assisted", label: "Assisted Selling" },
    { id: "sdr", label: "SDR Automation" },
  ];

  const tabContent = {
    lead: {
      title: "Intelligent Lead Qualification & Routing",
      description:
        "Automate top-of-funnel engagement with AI-driven voice interactions that capture prospect intent, apply qualification logic, and route Sales-Qualified Leads (SQLs) directly into your CRM or sales workflows.",
      benefits: [
        "Dynamic lead scoring through conversational AI",
        "Customizable qualification frameworks",
        "Real-time CRM integration & lead assignment",
        "Automated follow-ups to nurture MQLs",
      ],
    },
    assisted: {
      title: "AI-Powered Assisted Selling",
      description:
        "Deploy AI Voice Agents as on-demand sales assistants for product discovery, answering complex buyer questions, and converting opportunities through contextual, human-like conversations.",
      benefits: [
        "Instantly answer complex buyer questions",
        "Contextual product recommendations",
        "Reduce sales cycle with AI assistance",
        "Scalable support without extra headcount",
      ],
    },
    sdr: {
      title: "SDR Automation for Faster Outreach",
      description:
        "Automate SDR tasks like prospecting, cold calls, and initial discovery meetings with AI agents that qualify and schedule meetings instantly.",
      benefits: [
        "Automated outbound prospecting",
        "Personalized outreach at scale",
        "Instant scheduling with CRM sync",
        "Free up human SDRs for high-value tasks",
      ],
    },
  };

  const scrollToCard = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="px-6 md:px-16 py-20 text-center relative"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/6842c12c45ec90209c9b7470_nb-industry-hero-bg.avif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-blue-600 font-medium mb-3">● Use Cases</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Voice Agents for each stage of your Sales Funnel
      </h2>
      <p className="mb-10 text-lg max-w-2xl mx-auto">
        From first contact to qualified leads, see how Olli AI Voice Agents
        streamline critical sales tasks.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => scrollToCard(index)}
            className="px-6 py-2 rounded-full bg-white text-blue-600 font-semibold shadow hover:bg-gray-200 transition"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Horizontal Scroll Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="flex-shrink-0 w-full max-w-6xl mx-auto bg-white text-gray-900 p-10 rounded-xl shadow-lg min-h-[450px] snap-center"
          >
            <div className="flex flex-col lg:flex-row gap-8 h-full">
              {/* Left content */}
              <div className="lg:w-2/3 text-left">
                <h3 className="text-2xl font-semibold mb-4">
                  {tabContent[tab.id].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tabContent[tab.id].description}
                </p>
                <div className="bg-gray-100 rounded-lg p-4 text-sm">
                  <div className="w-full h-40 bg-gray-300 rounded flex items-center justify-center">
                    Image / Graphic Here
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="lg:w-1/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-3 text-gray-700 text-left">
                    {tabContent[tab.id].benefits.map((benefit, i) => (
                      <li key={i}>✔ {benefit}</li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow hover:scale-105 transition">
                  ● BOOK A DEMO
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
