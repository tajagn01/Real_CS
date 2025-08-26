import React from "react";

const page = {
  title: "AI/ML Learning Roadmap",
  sections: {
    overview:
      "A structured journey from foundations to advanced research. Progress through math, core ML, deep learning, applied domains, systems/MLOps, and frontier topics.",
    tracks: [
      {
        name: "Foundations",
        items: [
          "Python & NumPy/Pandas",
          "Linear Algebra (vectors, matrices)",
          "Calculus (derivatives, gradients)",
          "Probability & Statistics",
          "Optimization basics"
        ],
      },
      {
        name: "Core ML",
        items: [
          "Regression & Classification",
          "Model evaluation & validation",
          "Clustering & Dimensionality Reduction",
          "Ensembles (RF, XGBoost)",
          "Feature engineering"
        ],
      },
      {
        name: "Deep Learning",
        items: [
          "Neural networks & backprop",
          "CNNs, RNNs/LSTMs/GRUs",
          "Attention & Transformers",
          "Self-supervised & Generative models",
          "Fine-tuning & Transfer learning"
        ],
      },
      {
        name: "Applied Domains",
        items: [
          "NLP (LLMs, embeddings)",
          "Computer Vision (detection, diffusion)",
          "Reinforcement Learning",
          "Recommendation systems",
          "Time-series forecasting"
        ],
      },
      {
        name: "MLOps & Systems",
        items: [
          "Data pipelines & versioning",
          "Experiment tracking",
          "Model serving & monitoring",
          "Scaling & cost optimization",
          "Edge/On-device inference"
        ],
      },
      {
        name: "Frontier",
        items: [
          "RLHF & alignment",
          "Multi-agent systems",
          "Neuromorphic & Quantum ML",
          "AI safety & policy",
          "Agentic workflows"
        ],
      }
    ],
    resources: [
      "Hands-On ML with Scikit-Learn, Keras, and TensorFlow",
      "Deep Learning (Goodfellow, Bengio, Courville)",
      "Dive into Deep Learning",
      "Effective Python",
      "Designing Machine Learning Systems"
    ],
  },
};

const Card = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{title}</h3>
    {children}
  </div>
);

export default function AIMLRoadmap() {
  const { title, sections } = page;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {sections.overview}
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {sections.tracks.map((track, idx) => (
          <Card key={idx} title={track.name}>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {track.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}

        <div className="md:col-span-2">
          <Card title="Recommended Resources">
            <div className="grid sm:grid-cols-2 gap-3">
              {sections.resources.map((r, i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  {r}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

