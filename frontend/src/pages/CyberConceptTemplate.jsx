import React from 'react';
import { Link } from 'react-router-dom';

const CyberConceptTemplate = ({ concept, domain = 'cybersecurity', domainData }) => {
  if (!concept) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {concept.name}
        </h1>
        {concept.description && (
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{concept.description}</p>
        )}
        <Link
          to={`/${domain}`}
          className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          &larr; Back to {domainData?.title || 'Cybersecurity'}
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-4 pb-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          {concept.definition && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">Definition</h2>
              <p className="text-gray-800 dark:text-gray-200">{concept.definition}</p>
            </section>
          )}
          {concept.useCase && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-400">Use Cases</h2>
              <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 rounded p-4">{concept.useCase}</pre>
            </section>
          )}
          {concept.code && (
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">Example Code</h2>
              <pre className="bg-gray-900 text-white rounded p-4 overflow-x-auto text-sm">{concept.code}</pre>
            </section>
          )}
          {concept.questions && concept.questions.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-2 text-pink-700 dark:text-pink-400">Interview Questions</h2>
              <ul className="space-y-4">
                {concept.questions.map((q, idx) => (
                  <li key={idx} className="bg-gray-50 dark:bg-gray-900 rounded p-4 border border-gray-200 dark:border-gray-700">
                    <strong className="block mb-1">{q.question}</strong>
                    {q.hint && <div className="text-sm text-gray-500 mb-1">Hint: {q.hint}</div>}
                    {q.answer && <div className="text-sm text-green-600 dark:text-green-400">Answer: {q.answer}</div>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default CyberConceptTemplate;

