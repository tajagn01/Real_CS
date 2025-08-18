import React from "react";

const BinaryTree = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">Binary Tree</h1>
          <p className="text-xl">Structuring Data with Hierarchical Branches</p>
          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-white/20 rounded-full">🧠 Concepts</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🎬 Visualize</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🏭 Industry</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-yellow-600 dark:text-yellow-400">🧠 Concepts</h2>
          <p>
            A <strong>Binary Tree</strong> is a hierarchical data structure where
            each node has at most two children: a left child and a right child.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-amber-500 dark:text-amber-400">🎬 Visualize</h2>
          <p>
            Imagine a family tree: each parent can have up to two children,
            forming a branching structure that grows downward.
          </p>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-lime-600 dark:text-lime-400">🏭 Industry</h2>
          <p>
            Binary trees are used in{" "}
            <strong>binary search algorithms</strong>,{" "}
            <strong>expression parsing</strong>,{" "}
            <strong>databases (B-trees)</strong>, and{" "}
            <strong>file systems</strong>.
          </p>
        </section>
      </main>
    </div>
  );
};

export default BinaryTree;
