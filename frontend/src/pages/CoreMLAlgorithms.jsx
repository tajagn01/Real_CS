import React from "react";

const data = {
  title: "Core Machine Learning Algorithms",
  intro:
    "Essential supervised and unsupervised methods used across industry. Focus on modeling goals, assumptions, and evaluation.",
  groups: [
    {
      name: "Supervised Learning",
      items: [
        "Linear/Logistic Regression",
        "SVMs (kernels)",
        "Decision Trees & Random Forests",
        "Gradient Boosting (XGBoost, LightGBM)",
        "Calibration & probabilities",
      ],
    },
    {
      name: "Unsupervised Learning",
      items: [
        "Clustering (KMeans, DBSCAN)",
        "Dimensionality Reduction (PCA, t-SNE, UMAP)",
        "Anomaly Detection",
        "Topic Modeling (LDA)"
      ],
    },
    {
      name: "Modeling Practice",
      items: [
        "Feature engineering & leakage",
        "Cross-validation & resampling",
        "Metrics (AUC, F1, RMSE, MAP@K)",
        "Handling imbalance & cost-sensitive learning"
      ],
    },
  ],
  toolstack: ["scikit-learn", "XGBoost", "LightGBM", "CatBoost", "statsmodels"],
};

const Box = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    {children}
  </div>
);

export default function CoreMLAlgorithms() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {data.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{data.intro}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {data.groups.map((g, i) => (
          <Box key={i} title={g.name}>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {g.items.map((it, k) => (
                <li key={k}>{it}</li>
              ))}
            </ul>
          </Box>
        ))}
        <div className="md:col-span-2">
          <Box title="Popular Tooling">
            <div className="flex flex-wrap gap-2">
              {data.toolstack.map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </Box>
        </div>
      </main>
    </div>
  );
}

