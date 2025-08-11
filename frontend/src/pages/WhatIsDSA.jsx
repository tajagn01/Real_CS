import React from "react";

const dsaData = {
  hook: "Imagine having a superpower that lets you solve any coding problem faster than most programmers — that's what mastering Data Structures & Algorithms feels like.",
  understanding: "Data Structures and Algorithms (DSA) are the foundation of computer science. A Data Structure is a way to organize and store data so that it can be used efficiently, while an Algorithm is a step-by-step process to solve a problem. Together, they are the core tools that let you build efficient, scalable, and intelligent solutions.",
  why_we_need_dsa: [
    "DSA improves your problem-solving skills and logical thinking.",
    "It is the most tested skill in technical interviews for top companies.",
    "Efficient DSA knowledge helps create applications that run faster and handle more data.",
    "Many real-world systems — from search engines to navigation apps — rely on well-designed DSA.",
    "Without DSA, even simple problems can become slow, memory-heavy, and impractical."
  ],
  basic_knowledge: [
    "Data Structures include Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, and Hash Tables.",
    "Algorithms cover Searching, Sorting, Recursion, Dynamic Programming, Greedy Methods, and Graph Traversals.",
    "Time Complexity (Big O notation) and Space Complexity are essential for performance analysis.",
    "Mastering DSA helps in competitive programming, interview preparation, and real-world software development."
  ],
  motivation: "Think of DSA as the art of thinking like a computer — once you master it, you can create anything from a social media platform to a self-driving car. Every great programmer you admire once stood where you are now — and they became great because they embraced DSA."
};

const WhatIsDSA = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    
    

      {/* Understanding Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            What Are Data Structures & Algorithms?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {dsaData.understanding}
          </p>
        </div>
      </div>

      {/* Why Learn DSA Section */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Why You Should Master DSA
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dsaData.why_we_need_dsa.map((reason, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold text-white">{idx + 1}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Knowledge Areas */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Core Knowledge Areas
        </h2>
        <div className="grid gap-6">
          {dsaData.basic_knowledge.map((point, idx) => {
            const gradients = [
              'from-blue-600 to-cyan-500',
              'from-purple-600 to-pink-500',
              'from-green-600 to-teal-500',
              'from-orange-600 to-red-500'
            ];
            return (
              <div
                key={idx}
                className={`bg-gradient-to-r ${gradients[idx]} rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <p className="text-white font-medium text-lg">{point}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Motivation Quote */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 md:p-10 text-center">
          <blockquote className="text-lg md:text-xl italic text-gray-200 leading-relaxed">
            "{dsaData.motivation}"
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default WhatIsDSA;