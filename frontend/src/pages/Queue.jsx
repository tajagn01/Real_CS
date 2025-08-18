import React from "react";

const Queue = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">Queue</h1>
          <p className="text-xl">Organizing Data with First-In, First-Out</p>
          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-white/20 rounded-full">🧠 Concepts</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🎬 Visualize</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🏭 Industry</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">🧠 Concepts</h2>
          <p>
            A <strong>Queue</strong> is a linear data structure that follows the{" "}
            <em>First-In, First-Out (FIFO)</em> principle. The element added
            first is removed first.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">🎬 Visualize</h2>
          <p>
            Think of a queue of people waiting in line: the first person to join
            is the first to be served. New people join at the rear, and people
            leave from the front.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">🏭 Industry</h2>
          <p>
            Queues are widely used in{" "}
            <strong>task scheduling</strong>,{" "}
            <strong>printer job management</strong>,{" "}
            <strong>network packet processing</strong>, and{" "}
            <strong>BFS algorithms</strong>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Queue;
