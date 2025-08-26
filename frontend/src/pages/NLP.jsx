import React from "react";

const info = {
  title: "Natural Language Processing (NLP)",
  overview:
    "Techniques and models that enable machines to understand and generate human language.",
  topics: [
    {
      name: "Representations",
      items: [
        "Tokenization & subword methods",
        "Word2Vec/GloVe, contextual embeddings",
        "Sentence embeddings",
        "Multi-lingual embeddings"
      ],
    },
    {
      name: "Models & Tasks",
      items: [
        "Transformers & LLMs",
        "Sequence labeling, QA, NER",
        "Summarization, translation, RAG",
        "Safety, toxicity, hallucinations"
      ],
    },
    {
      name: "Production & Evaluation",
      items: [
        "Prompting, fine-tuning, adapters",
        "Retrieval-augmented generation",
        "Guardrails & red-teaming",
        "Task metrics (BLEU, ROUGE, BERTScore)"
      ],
    },
  ],
  tools: ["Hugging Face Transformers", "spaCy", "OpenAI/LLM APIs", "Sentence-Transformers", "LangChain"],
};

const Block = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    {children}
  </div>
);

export default function NLP() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {info.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{info.overview}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {info.topics.map((t, i) => (
          <Block key={i} title={t.name}>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {t.items.map((x, k) => (
                <li key={k}>{x}</li>
              ))}
            </ul>
          </Block>
        ))}
        <div className="md:col-span-2">
          <Block title="Popular Tools">
            <div className="flex flex-wrap gap-2">
              {info.tools.map((tool, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </Block>
        </div>
      </main>
    </div>
  );
}

