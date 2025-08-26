import React from "react";

const aimlData = {
  hook: "Imagine having a superpower that lets you create systems that learn and adapt, solving problems faster than any human — that's what mastering AI and ML feels like.",
  understanding: "AI stands for Artificial Intelligence and ML stands for Machine Learning. AI is the broader field of creating intelligent agents that can reason and solve problems, while ML is a subset of AI that focuses on building systems that can learn and improve from data without being explicitly programmed. Together, they are the core tools that let you build efficient, scalable, and intelligent solutions.",
  why_we_need_aiml: [
    "AI/ML is among the most sought-after skills in the tech industry, leading to high-paying jobs and numerous career opportunities.",
    "It allows you to build solutions for complex, real-world problems, from self-driving cars to medical diagnosis.",
    "AI/ML is at the forefront of technological innovation, enabling the creation of new products and services.",
    "It helps organizations make smarter, data-driven decisions by extracting valuable insights from large datasets.",
    "AI/ML can automate repetitive and complex tasks, increasing efficiency and freeing up humans for creative work."
  ],
  basic_knowledge: [
    "Key Concepts: Understand the difference between supervised, unsupervised, and reinforcement learning.",
    "Algorithms: Learn fundamental ML algorithms like linear regression, decision trees, and neural networks.",
    "Data: Mastering data collection, cleaning, and preprocessing is crucial for building effective models.",
    "Tools & Frameworks: Become proficient in popular libraries and frameworks like TensorFlow, PyTorch, and scikit-learn."
  ],
  motivation: "AI is not a force to be feared but a tool to be wielded. Once you master it, you can create a future where machines and humans work together to solve the world's greatest challenges."
};

const WhatIsAIML = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Understanding Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            What Is Artificial Intelligence & Machine Learning?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {aimlData.understanding}
          </p>
        </div>
      </div>

      {/* Why Learn AI/ML Section */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Why You Should Master AI/ML
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aimlData.why_we_need_aiml.map((reason, idx) => (
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
          {aimlData.basic_knowledge.map((point, idx) => {
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
            "{aimlData.motivation}"
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default WhatIsAIML;