import React from "react";

const rai = {
  title: "Ethics, Bias & Responsible AI",
  summary:
    "Designing AI systems that are fair, transparent, safe, and compliant with regulations.",
  facets: [
    {
      name: "Fairness & Bias",
      items: [
        "Bias sources (data, model, objective)",
        "Fairness metrics (EO, DP, EOpp)",
        "Mitigation: reweighting, adversarial debiasing",
        "Representative datasets"
      ],
    },
    {
      name: "Explainability & Safety",
      items: [
        "XAI (SHAP, LIME)",
        "Interpretable models & transparency",
        "Robustness, red-teaming, jailbreak prevention",
        "Alignment & human oversight"
      ],
    },
    {
      name: "Governance & Compliance",
      items: [
        "Risk assessments & model cards",
        "Privacy (GDPR, differential privacy)",
        "Audit trails & monitoring",
        "AI Act & policy trends"
      ],
    },
  ],
  tools: ["SHAP", "LIME", "WhyLabs", "Fiddler", "Aequitas", "Fairlearn"],
};

const Box = ({ title, items }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  </div>
);

export default function ResponsibleAI() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {rai.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{rai.summary}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {rai.facets.map((f, i) => (
          <Box key={i} title={f.name} items={f.items} />
        ))}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-3">Tooling</h3>
          <div className="flex flex-wrap gap-2">
            {rai.tools.map((t, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

