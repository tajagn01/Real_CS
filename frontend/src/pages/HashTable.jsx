import React from "react";

const HashTable = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">Hash Table</h1>
          <p className="text-xl">Mapping Keys to Values with Constant Time Access</p>
          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-white/20 rounded-full">🧠 Concepts</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🎬 Visualize</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🏭 Industry</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Concepts */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">🧠 Concepts</h2>
          <p>
            A <strong>Hash Table</strong> is a data structure that stores data in
            <em> key-value pairs</em>. It uses a hash function to compute an index
            into an array where the value is stored, allowing <strong>O(1)</strong>
            average time complexity for search, insert, and delete.
          </p>
        </section>

        {/* Visualize */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">🎬 Visualize</h2>
          <p>
            Imagine a row of lockers, each labeled with a number. A hash function
            decides which locker a key goes into. If two keys map to the same
            locker, collision resolution methods (like chaining or open
            addressing) are used.
          </p>
        </section>

        {/* Industry */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">🏭 Industry</h2>
          <p>
            Hash tables are widely used in{" "}
            <strong>databases (indexes)</strong>,{" "}
            <strong>caching systems</strong>,{" "}
            <strong>symbol tables in compilers</strong>, and{" "}
            <strong>key-value stores</strong> like Redis.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HashTable;
