import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, CheckCircle, Circle, Book, Code, Target, Zap, Brain, Network, Database } from 'lucide-react';

const LearningRoadmap = () => {
  const [completedNodes, setCompletedNodes] = useState(new Set());
  const [selectedNode, setSelectedNode] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // --- Hardcoded roadmapData and connections, no mockData import ---
  const roadmapData = {
    "basics": {
      id: "basics",
      title: "Programming Basics",
      icon: <Code size={20} />,
      color: "from-blue-400 to-blue-600",
      position: { x: 100, y: 100 },
      prerequisites: [],
      topics: ["Variables", "Loops", "Functions", "Basic I/O"],
      difficulty: "Beginner"
    },
    "complexity": {
      id: "complexity",
      title: "Time & Space Complexity",
      icon: <Target size={20} />,
      color: "from-purple-400 to-purple-600",
      position: { x: 350, y: 100 },
      prerequisites: ["basics"],
      topics: ["Big O Notation", "Time Analysis", "Space Analysis", "Best/Worst/Average Case"],
      difficulty: "Beginner"
    },
    "arrays": {
      id: "arrays",
      title: "Arrays & Strings",
      icon: <Database size={20} />,
      color: "from-green-400 to-green-600",
      position: { x: 100, y: 250 },
      prerequisites: ["basics"],
      topics: ["Array Operations", "String Manipulation", "Two Pointers", "Sliding Window"],
      difficulty: "Beginner"
    },
    "linkedlist": {
      id: "linkedlist",
      title: "Linked Lists",
      icon: <Network size={20} />,
      color: "from-orange-400 to-orange-600",
      position: { x: 350, y: 250 },
      prerequisites: ["arrays"],
      topics: ["Singly Linked List", "Doubly Linked List", "Circular Linked List", "Reversing"],
      difficulty: "Beginner"
    },
    "stacks": {
      id: "stacks",
      title: "Stacks & Queues",
      icon: <Zap size={20} />,
      color: "from-yellow-400 to-yellow-600",
      position: { x: 600, y: 200 },
      prerequisites: ["linkedlist"],
      topics: ["Stack Operations", "Queue Operations", "Deque", "Priority Queue"],
      difficulty: "Intermediate"
    },
    "recursion": {
      id: "recursion",
      title: "Recursion",
      icon: <Brain size={20} />,
      color: "from-red-400 to-red-600",
      position: { x: 100, y: 400 },
      prerequisites: ["basics"],
      topics: ["Base Case", "Recursive Relations", "Backtracking", "Memoization"],
      difficulty: "Intermediate"
    },
    "sorting": {
      id: "sorting",
      title: "Sorting Algorithms",
      icon: <Book size={20} />,
      color: "from-indigo-400 to-indigo-600",
      position: { x: 350, y: 400 },
      prerequisites: ["arrays", "recursion"],
      topics: ["Bubble Sort", "Quick Sort", "Merge Sort", "Heap Sort"],
      difficulty: "Intermediate"
    },
    "searching": {
      id: "searching",
      title: "Searching Algorithms",
      icon: <Target size={20} />,
      color: "from-pink-400 to-pink-600",
      position: { x: 600, y: 350 },
      prerequisites: ["arrays", "sorting"],
      topics: ["Linear Search", "Binary Search", "Ternary Search", "Interpolation Search"],
      difficulty: "Intermediate"
    },
    "trees": {
      id: "trees",
      title: "Trees",
      icon: <Network size={20} />,
      color: "from-teal-400 to-teal-600",
      position: { x: 100, y: 550 },
      prerequisites: ["recursion"],
      topics: ["Binary Trees", "BST", "AVL Trees", "Tree Traversals"],
      difficulty: "Advanced"
    },
    "heaps": {
      id: "heaps",
      title: "Heaps",
      icon: <Zap size={20} />,
      color: "from-cyan-400 to-cyan-600",
      position: { x: 350, y: 550 },
      prerequisites: ["trees", "sorting"],
      topics: ["Min Heap", "Max Heap", "Heap Sort", "Priority Queue"],
      difficulty: "Advanced"
    },
    "graphs": {
      id: "graphs",
      title: "Graphs",
      icon: <Network size={20} />,
      color: "from-emerald-400 to-emerald-600",
      position: { x: 600, y: 500 },
      prerequisites: ["trees", "stacks"],
      topics: ["Graph Representation", "DFS", "BFS", "Shortest Path"],
      difficulty: "Advanced"
    },
    "dp": {
      id: "dp",
      title: "Dynamic Programming",
      icon: <Brain size={20} />,
      color: "from-rose-400 to-rose-600",
      position: { x: 850, y: 400 },
      prerequisites: ["recursion", "arrays"],
      topics: ["Overlapping Subproblems", "Optimal Substructure", "Memoization", "Tabulation"],
      difficulty: "Advanced"
    }
  };

  const connections = [
    { from: "basics", to: "complexity" },
    { from: "basics", to: "arrays" },
    { from: "basics", to: "recursion" },
    { from: "arrays", to: "linkedlist" },
    { from: "linkedlist", to: "stacks" },
    { from: "recursion", to: "sorting" },
    { from: "arrays", to: "sorting" },
    { from: "sorting", to: "searching" },
    { from: "arrays", to: "searching" },
    { from: "recursion", to: "trees" },
    { from: "trees", to: "heaps" },
    { from: "sorting", to: "heaps" },
    { from: "trees", to: "graphs" },
    { from: "stacks", to: "graphs" },
    { from: "recursion", to: "dp" },
    { from: "arrays", to: "dp" }
  ];

  const toggleNodeCompletion = (nodeId) => {
    setCompletedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = containerRef.current.getBoundingClientRect();
      containerRef.current.scrollLeft = dragOffset.x - (e.clientX - rect.left);
      containerRef.current.scrollTop = dragOffset.y - (e.clientY - rect.top);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const isNodeUnlocked = (nodeId) => {
    const node = roadmapData[nodeId];
    return node.prerequisites.every(prereq => completedNodes.has(prereq));
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case "Beginner": return "text-green-600 bg-green-100";
      case "Intermediate": return "text-yellow-600 bg-yellow-100";
      case "Advanced": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const renderConnection = (connection) => {
    const fromNode = roadmapData[connection.from];
    const toNode = roadmapData[connection.to];

    const x1 = fromNode.position.x + 100;
    const y1 = fromNode.position.y + 50;
    const x2 = toNode.position.x + 100;
    const y2 = toNode.position.y + 50;

    return (
      <line
        key={`${connection.from}-${connection.to}`}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={completedNodes.has(connection.from) ? "#10b981" : "#d1d5db"}
        strokeWidth="2"
        strokeDasharray={completedNodes.has(connection.from) ? "0" : "5,5"}
        className="transition-all duration-300"
      />
    );
  };

  // Set container and roadmap area to fit all nodes, no scrollbars
  // Remove overflow-auto and set width/height to fit content
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            DSA Mastery Roadmap
          </h1>
          <p className="text-gray-300 text-xl">
            Your interactive journey through Data Structures and Algorithms
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Circle size={12} className="text-gray-400" /> Locked
            </span>
            <span className="flex items-center gap-2">
              <Circle size={12} className="text-blue-400" /> Available
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={12} className="text-green-400" /> Completed
            </span>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative bg-slate-800/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 p-2 sm:p-8 overflow-auto hide-scrollbar"
          style={{
            width: '100%',
            maxWidth: '1400px',
            height: '70vh',
            minHeight: '400px',
            margin: '0 auto',
            touchAction: 'pan-x pan-y'
          }}
        >
          <div
            className="relative"
            style={{
              width: '1200px',
              height: '800px',
              minWidth: '100vw',
              minHeight: '60vh'
            }}
          >
            {/* Render connections */}
            <svg
              className="absolute inset-0 pointer-events-none"
              style={{
                width: '1200px',
                height: '800px',
                minWidth: '100vw',
                minHeight: '60vh'
              }}
            >
              {connections.map(renderConnection)}
            </svg>

            {/* Render nodes */}
            {Object.values(roadmapData).map(node => {
              const isCompleted = completedNodes.has(node.id);
              const isUnlocked = isNodeUnlocked(node.id);
              const isSelected = selectedNode === node.id;

              return (
                <div
                  key={node.id}
                  className={`absolute transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    isSelected ? 'scale-110 z-20' : ''
                  }`}
                  style={{
                    left: `${node.position.x}px`,
                    top: `${node.position.y}px`,
                    width: '180px',
                    maxWidth: '90vw'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isUnlocked) {
                      setSelectedNode(isSelected ? null : node.id);
                    }
                  }}
                >
                  <div className={`
                    relative bg-gradient-to-r ${node.color} p-3 sm:p-4 rounded-xl shadow-2xl border-2 
                    ${isCompleted ? 'border-green-400 shadow-green-400/20' : 
                      isUnlocked ? 'border-blue-400 shadow-blue-400/20' : 
                      'border-gray-600 shadow-gray-600/20 opacity-60'}
                    ${isSelected ? 'ring-4 ring-white/30' : ''}
                  `}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white">
                        {node.icon}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isUnlocked) toggleNodeCompletion(node.id);
                        }}
                        className="text-white hover:scale-110 transition-transform"
                      >
                        {isCompleted ? (
                          <CheckCircle size={20} className="text-green-200" />
                        ) : isUnlocked ? (
                          <Circle size={20} />
                        ) : (
                          <Circle size={20} className="text-gray-400" />
                        )}
                      </button>
                    </div>
                    
                    <h3 className="text-white font-bold text-xs sm:text-sm mb-2">
                      {node.title}
                    </h3>
                    
                    <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block mb-2 ${getDifficultyColor(node.difficulty)}`}>
                      {node.difficulty}
                    </div>

                    {isSelected && (
                      <div className="mt-3 space-y-2 bg-black/20 rounded-lg p-2 sm:p-3">
                        <h4 className="text-white font-semibold text-xs">Topics:</h4>
                        <div className="space-y-1">
                          {node.topics.map((topic, index) => (
                            <div key={index} className="text-white/80 text-xs flex items-center gap-2">
                              <ChevronRight size={12} />
                              {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 bg-slate-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-slate-700/50">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Progress Statistics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 sm:p-4 rounded-lg text-white">
              <div className="text-xl sm:text-2xl font-bold">{completedNodes.size}</div>
              <div className="text-blue-100 text-xs sm:text-base">Completed</div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 sm:p-4 rounded-lg text-white">
              <div className="text-xl sm:text-2xl font-bold">
                {Object.values(roadmapData).filter(node => isNodeUnlocked(node.id) && !completedNodes.has(node.id)).length}
              </div>
              <div className="text-green-100 text-xs sm:text-base">Available</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-3 sm:p-4 rounded-lg text-white">
              <div className="text-xl sm:text-2xl font-bold">
                {Object.keys(roadmapData).length === 0
                  ? 0
                  : Math.round((completedNodes.size / Object.keys(roadmapData).length) * 100)}%
              </div>
              <div className="text-purple-100 text-xs sm:text-base">Progress</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 sm:p-4 rounded-lg text-white">
              <div className="text-xl sm:text-2xl font-bold">{Object.keys(roadmapData).length}</div>
              <div className="text-orange-100 text-xs sm:text-base">Total Topics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningRoadmap;