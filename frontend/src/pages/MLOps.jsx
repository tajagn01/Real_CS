import React from "react";

const mlops = {
  title: "MLOps & AI Systems Engineering",
  intro:
    "Engineering practices for building, deploying, and operating ML systems reliably at scale.",
  domains: [
    {
      name: "Data & Reproducibility",
      items: [
        "Data versioning & lineage",
        "Feature stores",
        "Datasets governance & PII handling",
        "Reproducible pipelines"
      ],
    },
    {
      name: "Experimentation & Training",
      items: [
        "Tracking (metrics, params, artifacts)",
        "Hyperparameter tuning",
        "Distributed & scheduled training",
        "Cost & carbon efficiency"
      ],
    },
    {
      name: "Serving & Monitoring",
      items: [
        "Batch/online serving, A/B & canary",
        "Shadow deployments & safety gates",
        "Monitoring drift, performance, bias",
        "Feedback loops & retraining"
      ],
    },
  ],
  tools: ["MLflow", "Weights & Biases", "Kubeflow", "Ray", "SageMaker", "Vertex AI"],
};

const Section = ({ title, items }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  </div>
);

export default function MLOps() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {mlops.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{mlops.intro}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {mlops.domains.map((d, i) => (
          <Section key={i} title={d.name} items={d.items} />
        ))}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-3">Ecosystem</h3>
          <div className="flex flex-wrap gap-2">
            {mlops.tools.map((t, i) => (
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

