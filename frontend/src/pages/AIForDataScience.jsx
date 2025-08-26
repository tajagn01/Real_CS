import React from "react";

const ds = {
  title: "AI for Data Science & Analytics",
  overview:
    "Applying ML to extract insight, forecast outcomes, and drive decisions across analytics workflows.",
  modules: [
    {
      name: "Analytics + ML",
      items: [
        "Feature engineering & pipelines",
        "Forecasting & time-series",
        "Churn & propensity modeling",
        "Causal inference basics"
      ],
    },
    {
      name: "Data Platforms",
      items: [
        "Big data (Spark, Dask)",
        "Lakehouses & warehouses",
        "Streaming inference",
        "BI & dashboards with ML"
      ],
    },
    {
      name: "Use Cases",
      items: [
        "Customer segmentation",
        "Fraud detection",
        "Pricing & revenue optimization",
        "Marketing mix modeling"
      ],
    },
  ],
  tools: ["pandas", "scikit-learn", "XGBoost", "Spark MLlib", "dbt", "Airflow"],
};

const Block = ({ title, items }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  </div>
);

export default function AIForDataScience() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {ds.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{ds.overview}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {ds.modules.map((m, i) => (
          <Block key={i} title={m.name} items={m.items} />
        ))}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-3">Tooling</h3>
          <div className="flex flex-wrap gap-2">
            {ds.tools.map((t, i) => (
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

