import React from "react";

const biz = {
  title: "AI for Business & Wealth Creation",
  intro:
    "Leverage AI to drive productivity, build products, and create value across industries.",
  angles: [
    {
      name: "Value & Strategy",
      items: [
        "Identify high-ROI use cases",
        "Buy vs build decisions",
        "Data moat & platform strategy",
        "Pricing & GTM for AI products"
      ],
    },
    {
      name: "Product & Ops",
      items: [
        "AI copilots & automation",
        "Personalization & recommendations",
        "Risk & compliance management",
        "Ops analytics & forecasting"
      ],
    },
    {
      name: "Startup Playbook",
      items: [
        "MVP with LLMs & no-code",
        "Data partnerships",
        "Unit economics & scaling",
        "Enterprise readiness"
      ],
    },
  ],
  cases: ["Algorithmic trading", "Manufacturing optimization", "AI SaaS", "Agentic workflows"],
};

const Tile = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    {children}
  </div>
);

export default function AIForBusiness() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {biz.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{biz.intro}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {biz.angles.map((a, i) => (
          <Tile key={i} title={a.name}>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {a.items.map((x, k) => (
                <li key={k}>{x}</li>
              ))}
            </ul>
          </Tile>
        ))}
        <div className="md:col-span-2">
          <Tile title="Use Case Examples">
            <div className="flex flex-wrap gap-2">
              {biz.cases.map((c, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm">
                  {c}
                </span>
              ))}
            </div>
          </Tile>
        </div>
      </main>
    </div>
  );
}

