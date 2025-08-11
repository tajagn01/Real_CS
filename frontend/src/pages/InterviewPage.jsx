// src/pages/InterviewPage.js

import React from 'react';
import QuestionAnswer from '../components/QuestionAnswer';
import { interviewQuestionsData } from '../api/mockData';

const InterviewPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="max-w-4xl mx-auto px-4 text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Interview Preparation</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Practice common interview questions across different technical domains.
        </p>
      </header>
      <main className="max-w-4xl mx-auto px-4 pb-16 space-y-8">
        {Object.entries(interviewQuestionsData).map(([domain, questions]) => (
          <section key={domain}>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 capitalize">
              {domain === 'dsa' ? 'Data Structures & Algorithms' : domain === 'aiml' ? 'AI/ML' : domain === 'webdev' ? 'Web Development' : 'Cybersecurity'}
            </h2>
            <div className="space-y-4">
              {questions.map((q, index) => (
                <QuestionAnswer key={q.id} questionData={q} index={index} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default InterviewPage;