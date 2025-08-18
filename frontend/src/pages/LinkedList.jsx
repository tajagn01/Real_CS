import React from "react";

const LinkedList = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">Linked List</h1>
          <p className="text-xl">Connecting Data with Sequential Nodes</p>
          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-white/20 rounded-full">🧠 Concepts</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🎬 Visualize</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🏭 Industry</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-400">🧠 Concepts</h2>
          <p>
            A <strong>Linked List</strong> is a linear data structure where
            elements (nodes) are connected using pointers. Each node contains
            data and a reference to the next node.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">🎬 Visualize</h2>
          <p>
            Picture a chain where each link points to the next. You can easily
            insert or remove links without reorganizing the whole chain.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">🏭 Industry</h2>
          <p>
            Linked lists are used in{" "}
            <strong>dynamic memory allocation</strong>,{" "}
            <strong>implementing stacks & queues</strong>,{" "}
            <strong>adjacency lists for graphs</strong>, and{" "}
            <strong>navigation in software</strong>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default LinkedList;
