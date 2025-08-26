import React from "react";

const content = {
  title: "Mathematical & Theoretical Foundations",
  intro:
    "The pillars of AI/ML: Linear Algebra, Calculus, Probability & Statistics, and Optimization. Mastering these builds intuition for models, training dynamics, and generalization.",
  sections: [
    {
      name: "Linear Algebra",
      items: [
        "Vectors, matrices, tensor operations",
        "Matrix factorization (SVD, eigendecomposition)",
        "Distance metrics, norms, projections",
        "Applications: embeddings, attention, PCA"
      ],
    },
    {
      name: "Calculus",
      items: [
        "Derivatives, gradients, Jacobians, Hessians",
        "Chain rule & backpropagation",
        "Convex vs non-convex landscapes",
        "Learning rates & curvature intuition"
      ],
    },
    {
      name: "Probability & Statistics",
      items: [
        "Random variables, distributions",
        "Bayes' rule, MAP/MLE",
        "Bias-variance tradeoff",
        "Uncertainty & calibration"
      ],
    },
    {
      name: "Optimization",
      items: [
        "Gradient descent variants (SGD, Adam, RMSProp)",
        "Regularization (L1/L2, dropout)",
        "Constraints & Lagrange multipliers",
        "Convergence and stability"
      ],
    },
  ],
  resources: [
    "Linear Algebra Done Right",
    "The Matrix Cookbook",
    "Statistical Rethinking",
    "Convex Optimization (Boyd & Vandenberghe)",
    "Deep Learning Book (theory chapters)",
  ],
};

const SectionCard = ({ title, items }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
      {items.map((i, idx) => (
        <li key={idx}>{i}</li>
      ))}
    </ul>
  </div>
);

export default function MathFoundations() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {content.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{content.intro}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {content.sections.map((s, i) => (
          <SectionCard key={i} title={s.name} items={s.items} />
        ))}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-3">Suggested Resources</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.resources.map((r, i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                {r}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

