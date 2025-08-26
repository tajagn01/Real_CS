import React from "react";

const future = {
  title: "Future & Frontier Research",
  description:
    "Beyond current deep learning: new compute substrates, learning paradigms, alignment, and science discovery.",
  frontiers: [
    {
      name: "Compute & Hardware",
      items: [
        "Neuromorphic computing",
        "Quantum ML & hybrid algorithms",
        "Efficient accelerators & sparsity",
        "In-memory & analog computing"
      ],
    },
    {
      name: "Learning & Reasoning",
      items: [
        "World models & planning",
        "Multi-agent systems",
        "Tool-use & program synthesis",
        "Robustness & generalization"
      ],
    },
    {
      name: "Safety & Society",
      items: [
        "RLHF & constitutional AI",
        "Alignment & oversight scaling",
        "Policy, governance, global coordination",
        "AI for scientific discovery"
      ],
    },
  ],
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

export default function FutureResearch() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {future.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{future.description}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {future.frontiers.map((f, i) => (
          <Section key={i} title={f.name} items={f.items} />
        ))}
      </main>
    </div>
  );
}

