import React, { useState, useEffect } from "react";

// A placeholder for the interactive visualization component.
// In a real app, this would be a complex component using a library like D3.js or react-flow.
const GraphVisualization = () => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-cyan-500 text-center">
    <p className="text-lg text-gray-700 dark:text-gray-200">
      Interactive Graph Visualization Placeholder
    </p>
    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
      (Imagine a dynamic graph here where you can add/remove nodes and edges!)
    </div>
  </div>
);

const graphData = {
  topic: "Graphs",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Imagine you're navigating through a city using Google Maps, finding the shortest route between locations, or discovering how your friends are connected on social media. Graphs are the invisible backbone powering these everyday experiences! They're like digital spider webs that connect data points, enabling us to model relationships, find optimal paths, and solve complex network problems that linear data structures simply can't handle.",

    // Directed Graph Content
    directed: {
      concept:
        "A directed graph (digraph) is like a one-way street system where each road has a specific direction. Edges have arrows indicating the direction of the relationship, making it perfect for modeling hierarchical relationships, workflows, and dependencies.",
      realWorldExample:
        "Think of Twitter follows - if you follow someone, it doesn't mean they follow you back. Each 'follow' is a directed edge!",
      industry_applications: [
        "🐦 Twitter - User follow relationships and influence networks",
        "📧 Email - Message routing and delivery systems",
        "🏗️ Project Management - Task dependencies and scheduling",
        "🧬 Biology - Gene regulatory networks and protein interactions",
        "📚 Academic - Course prerequisites and curriculum planning",
        "🌐 Web - Page linking and SEO relationship analysis",
      ],
      advantages: [
        "🎯 Models asymmetric relationships perfectly",
        "📊 Excellent for hierarchical data representation",
        "🔄 Supports topological sorting for dependencies",
        "💡 Natural for workflow and process modeling",
      ],
      disadvantages: [
        "🧮 More complex algorithms needed",
        "💾 Requires additional storage for direction info",
        "🔍 Harder to visualize than undirected graphs",
        "⚡ Some algorithms have higher complexity",
      ],
    },

    // Undirected Graph Content
    undirected: {
      concept:
        "An undirected graph is like a network of two-way streets where relationships are mutual. If there's an edge between two nodes, you can travel in both directions, making it perfect for modeling symmetric relationships and connections.",
      realWorldExample:
        "Think of Facebook friendships - if you're friends with someone, they're automatically friends with you too. It's a mutual connection!",
      industry_applications: [
        "👥 Facebook - Friend connections and social networks",
        "🗺️ GPS Navigation - Road networks and route planning",
        "💡 Electrical - Circuit design and power grid analysis",
        "🧬 Chemistry - Molecular structures and chemical bonds",
        "📶 Networking - Computer networks and internet topology",
        "🎮 Gaming - Game maps and collision detection systems",
      ],
      advantages: [
        "🤝 Perfect for mutual relationships",
        "🔄 Simpler algorithms for many operations",
        "💾 More memory efficient representation",
        "📊 Easier to visualize and understand",
      ],
      disadvantages: [
        "❌ Cannot model one-way relationships",
        "🚫 Limited for dependency modeling",
        "🔧 Less flexible for complex workflows",
        "📏 Cannot represent hierarchical structures well",
      ],
    },

    // Weighted Graph Content
    weighted: {
      concept:
        "A weighted graph assigns costs, distances, or values to edges, making it perfect for optimization problems. Each edge carries additional information beyond just the connection, enabling sophisticated pathfinding and network analysis.",
      realWorldExample:
        "Think of Google Maps calculating the fastest route - roads have different speeds, distances, and traffic conditions represented as weights!",
      industry_applications: [
        "🚗 Google Maps - Route optimization and traffic analysis",
        "✈️ Airlines - Flight scheduling and cost optimization",
        "📦 Logistics - Supply chain and delivery optimization",
        "💰 Finance - Risk assessment and portfolio optimization",
        "🌐 Internet - Network routing and bandwidth allocation",
        "🎮 Gaming - AI pathfinding and decision systems",
      ],
      advantages: [
        "🎯 Enables sophisticated optimization algorithms",
        "📊 Perfect for cost and distance problems",
        "⚡ Supports shortest path algorithms",
        "💡 Natural for real-world modeling",
      ],
      disadvantages: [
        "💾 Higher memory requirements",
        "🧮 More complex algorithms needed",
        "⚙️ Additional computational overhead",
        "🔧 Requires careful weight management",
      ],
    },
    
    interview_questions: [
      {
        question: "What is the difference between BFS and DFS graph traversal?",
        answer:
          "BFS uses a queue and explores nodes level by level, guaranteeing shortest path in unweighted graphs. DFS uses a stack (or recursion) and goes as deep as possible before backtracking. BFS: O(V+E) time, O(V) space. DFS: O(V+E) time, O(V) space for recursion stack.",
        difficulty: "Easy",
      },
      {
        question: "Explain Dijkstra's algorithm and its time complexity.",
        answer:
          "Dijkstra's algorithm finds shortest paths from a source vertex to all other vertices in a weighted graph with non-negative edge weights. Uses a min-heap and relaxation. Time complexity: O((V+E)logV) with binary heap, O(V²) with simple array. Space: O(V).",
        difficulty: "Medium",
      },
      {
        question: "How do you detect a cycle in a directed graph?",
        answer:
          "Use DFS with three colors: White (unvisited), Gray (visiting), Black (visited). If during DFS we encounter a Gray vertex from current path, there's a cycle. Can also use topological sort - if we can't sort all vertices, there's a cycle.",
        difficulty: "Medium",
      },
      {
        question: "What is the difference between Prim's and Kruskal's algorithm?",
        answer:
          "Both find Minimum Spanning Tree. Prim's grows MST from a starting vertex, uses priority queue, good for dense graphs O(V²) or O(ElogV). Kruskal's sorts all edges and uses Union-Find, good for sparse graphs O(ElogE). Prim's builds tree vertex by vertex, Kruskal's edge by edge.",
        difficulty: "Hard",
      },
      {
        question: "How would you implement a graph using adjacency matrix vs adjacency list?",
        answer:
          "Adjacency Matrix: 2D array, O(V²) space, O(1) edge check, O(V²) traversal. Good for dense graphs. Adjacency List: Array of lists, O(V+E) space, O(degree) edge check, O(V+E) traversal. Better for sparse graphs and most real-world applications.",
        difficulty: "Easy",
      },
    ],

    project_ideas: [
      {
        title: "Social Network Analyzer",
        description:
          "Build a system that analyzes social media connections, finds influencers, detects communities, calculates network metrics, and suggests new connections based on mutual friends and interests.",
        difficulty: "Beginner",
        technologies: ["Python", "NetworkX", "Data visualization", "Graph algorithms"],
      },
      {
        title: "Route Optimization System",
        description:
          "Create a GPS-like application that finds shortest paths, considers traffic conditions, suggests alternate routes, and optimizes delivery schedules using advanced graph algorithms.",
        difficulty: "Intermediate",
        technologies: ["JavaScript", "Dijkstra's Algorithm", "Maps API", "Real-time data"],
      },
      {
        title: "Dependency Resolver",
        description:
          "Develop a tool that analyzes code dependencies, detects circular dependencies, suggests refactoring opportunities, and generates build orders for complex software projects.",
        difficulty: "Advanced",
        technologies: ["Python/Java", "AST parsing", "Topological sort", "Static analysis"],
      },
      {
        title: "Knowledge Graph Engine",
        description:
          "Build an AI-powered knowledge graph that connects concepts, finds relationships, enables semantic search, and provides intelligent recommendations based on graph neural networks.",
        difficulty: "Advanced",
        technologies: ["Python", "Neo4j", "Machine Learning", "NLP", "Graph Neural Networks"],
      },
    ],
    
    code_examples: {
      python: `# Python Graph Implementation - Social Media Influence Network...`,
      javascript: `// JavaScript Graph Implementation - Website Link Analysis...`,
      java: `// Java Graph Implementation - Course Prerequisites System...`,
      cpp: `// C++ Graph Implementation - City Road Network...`,
      c: `// C Graph Implementation - Social Network...`,
    },
  },
};

const GraphsPage = () => {
  const { topic, category, sections } = graphData;
  const [activeLang, setActiveLang] = useState("python");
  const [openQuestion, setOpenQuestion] = useState(0);
  const [copyStatus, setCopyStatus] = useState("Copy");

  const handleCopy = () => {
    navigator.clipboard.writeText(sections.code_examples[activeLang]);
    setCopyStatus("Copied!");
    setTimeout(() => setCopyStatus("Copy"), 2000);
  };

  const getDifficultyClass = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      {/* Animated Header */}
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
          <p className="text-xl">{category}</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-white/20 rounded-full">🔄 Directed</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🤝 Undirected</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">⚖️ Weighted</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Student Hook */}
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🌐 Why Graphs Matter
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* Interactive Graph Demo */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            🎮 Interactive Graph Playground
          </h2>
          <GraphVisualization />
        </section>

        {/* Directed Graphs Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            🔄 Directed Graphs - One-Way Relationships
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">💡 Understanding Directed Graphs</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.directed.concept}
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.directed.realWorldExample}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.directed.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">{advantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{advantage.substring(advantage.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3>
              <ul className="space-y-3">
                {sections.directed.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(disadvantage.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">🏢 Directed Graphs in Industry</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.directed.industry_applications.map((application, index) => (
                <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-gray-700 dark:text-gray-300">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Undirected Graphs Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            🤝 Undirected Graphs - Mutual Relationships
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">💡 Understanding Undirected Graphs</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.undirected.concept}
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800 dark:text-green-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.undirected.realWorldExample}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.undirected.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">{advantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{advantage.substring(advantage.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3>
              <ul className="space-y-3">
                {sections.undirected.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(disadvantage.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-green-300">🏢 Undirected Graphs in Industry</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.undirected.industry_applications.map((application, index) => (
                <div key={index} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-400 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-gray-700 dark:text-gray-300">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Weighted Graphs Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            ⚖️ Weighted Graphs - Cost & Optimization
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-yellow-500">
            <h3 className="text-2xl font-bold mb-4 text-yellow-700 dark:text-yellow-300">💡 Understanding Weighted Graphs</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.weighted.concept}
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.weighted.realWorldExample}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.weighted.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">{advantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{advantage.substring(advantage.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3>
              <ul className="space-y-3">
                {sections.weighted.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(disadvantage.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-700 dark:text-yellow-300">🏢 Weighted Graphs in Industry</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.weighted.industry_applications.map((application, index) => (
                <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-400 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-gray-700 dark:text-gray-300">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            💻 Code Implementations
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-2">
            <div className="flex space-x-1 p-2 bg-gray-100 dark:bg-gray-900 rounded-t-lg">
              {Object.keys(sections.code_examples).map(lang => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    activeLang === lang
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>
            <div className="relative bg-gray-900 dark:bg-black p-4 rounded-b-lg">
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
              >
                {copyStatus}
              </button>
              <pre className="text-white text-sm overflow-x-auto">
                <code>{sections.code_examples[activeLang]}</code>
              </pre>
            </div>
          </div>
        </section>
        
        {/* Interview Questions Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            🧠 Technical Interview Prep
          </h2>
          <div className="space-y-4">
            {sections.interview_questions.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-l-4 border-red-500">
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center"
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{item.question}</h3>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyClass(item.difficulty)}`}>{item.difficulty}</span>
                    <span className={`transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}>▼</span>
                  </div>
                </button>
                {openQuestion === index && (
                  <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Project Ideas Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            🚀 Project Ideas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.project_ideas.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-t-8 border-teal-500 transform hover:-translate-y-2 transition-transform duration-300">
                 <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${getDifficultyClass(project.difficulty)}`}>{project.difficulty}</span>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 text-xs font-medium rounded-full">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6 mt-16">
          <p>&copy; 2025 Graph Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GraphsPage;