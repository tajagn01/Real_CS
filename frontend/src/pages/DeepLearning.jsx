import React from "react";

const content = {
  title: "Deep Learning",
  subtitle: "Neural networks, architectures, and training strategies.",
  areas: [
    {
      name: "Architectures",
      items: [
        "MLP, CNN, RNN/LSTM/GRU",
        "Attention & Transformers",
        "Graph Neural Networks",
        "Autoencoders, VAEs, GANs",
        "Diffusion Models"
      ],
    },
    {
      name: "Training & Optimization",
      items: [
        "Initialization & normalization",
        "Schedulers, warmup, weight decay",
        "Mixed precision & gradient clipping",
        "Regularization & data augmentation",
        "Distributed training"
      ],
    },
    {
      name: "Practical Techniques",
      items: [
        "Transfer learning & fine-tuning",
        "Prompting & adapters/LoRA",
        "Quantization & pruning",
        "Serving & latency optimization",
        "Eval & safety checks"
      ],
    },
  ],
  frameworks: ["PyTorch", "TensorFlow/Keras", "JAX/Flax", "Hugging Face", "Lightning"],
};

const Card = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    {children}
  </div>
);

export default function DeepLearning() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {content.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{content.subtitle}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {content.areas.map((a, i) => (
          <Card key={i} title={a.name}>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {a.items.map((x, k) => (
                <li key={k}>{x}</li>
              ))}
            </ul>
          </Card>
        ))}
        <div className="md:col-span-2">
          <Card title="Ecosystem & Frameworks">
            <div className="flex flex-wrap gap-2">
              {content.frameworks.map((f, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm">
                  {f}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

