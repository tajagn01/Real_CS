import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Lock, CheckCircle, User, Trophy, BookOpen, Code, Target, Award } from 'lucide-react';

const LearningRoadmap = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [unlockedSections, setUnlockedSections] = useState(new Set([0]));
  const [completedSections, setCompletedSections] = useState(new Set());
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const roadmapData = [
    {
      id: 0,
      title: 'Programming Fundamentals',
      level: 'Beginner',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500',
      duration: '2-3 weeks',
      icon: <Code className="w-6 h-6" />,
      description: 'Master the basics of programming',
      topics: [
        'Variables and Data Types',
        'Control Structures (if/else, loops)',
        'Functions and Scope',
        'Input/Output Operations',
        'Basic Problem Solving'
      ],
      position: { x: 10, y: 50 }
    },
    {
      id: 1,
      title: 'Time & Space Complexity',
      level: 'Beginner',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500',
      duration: '1-2 weeks',
      icon: <Target className="w-6 h-6" />,
      description: 'Understand algorithm efficiency',
      topics: [
        'Big O Notation',
        'Time Complexity Analysis',
        'Space Complexity Analysis',
        'Best, Average, Worst Cases',
        'Asymptotic Analysis'
      ],
      position: { x: 25, y: 30 }
    },
    {
      id: 2,
      title: 'Arrays & Strings',
      level: 'Beginner',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-500',
      duration: '2-3 weeks',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Master linear data structures',
      topics: [
        'Array Operations',
        'Two Pointer Technique',
        'Sliding Window',
        'String Manipulation',
        'Pattern Matching',
        'Sorting Algorithms'
      ],
      position: { x: 45, y: 20 }
    },
    {
      id: 3,
      title: 'Linked Lists',
      level: 'Intermediate',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-500',
      duration: '2 weeks',
      icon: <Code className="w-6 h-6" />,
      description: 'Dynamic memory management',
      topics: [
        'Singly Linked List',
        'Doubly Linked List',
        'Circular Linked List',
        'List Traversal & Manipulation',
        'Cycle Detection',
        'Merging & Sorting Lists'
      ],
      position: { x: 65, y: 40 }
    },
    {
      id: 4,
      title: 'Stacks & Queues',
      level: 'Intermediate',
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-500',
      duration: '2 weeks',
      icon: <Target className="w-6 h-6" />,
      description: 'LIFO and FIFO structures',
      topics: [
        'Stack Implementation',
        'Queue Implementation',
        'Deque (Double-ended Queue)',
        'Priority Queue',
        'Stack Applications',
        'Queue Applications'
      ],
      position: { x: 80, y: 60 }
    },
    {
      id: 5,
      title: 'Recursion & Backtracking',
      level: 'Intermediate',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500',
      duration: '3 weeks',
      icon: <Award className="w-6 h-6" />,
      description: 'Divide and conquer approach',
      topics: [
        'Recursion Basics',
        'Recursive Problem Solving',
        'Backtracking Algorithm',
        'N-Queens Problem',
        'Sudoku Solver',
        'Permutations & Combinations'
      ],
      position: { x: 70, y: 80 }
    },
    {
      id: 6,
      title: 'Trees',
      level: 'Intermediate',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-500',
      duration: '3-4 weeks',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Hierarchical data structures',
      topics: [
        'Binary Trees',
        'Binary Search Trees',
        'Tree Traversals (DFS, BFS)',
        'AVL Trees',
        'Red-Black Trees',
        'Tree Construction Problems'
      ],
      position: { x: 50, y: 75 }
    },
    {
      id: 7,
      title: 'Heaps & Priority Queues',
      level: 'Intermediate',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-500',
      duration: '2 weeks',
      icon: <Star className="w-6 h-6" />,
      description: 'Efficient priority management',
      topics: [
        'Min Heap & Max Heap',
        'Heap Operations',
        'Heap Sort',
        'Priority Queue Applications',
        'Top K Problems',
        'Merge K Sorted Arrays'
      ],
      position: { x: 30, y: 70 }
    },
    {
      id: 8,
      title: 'Hashing',
      level: 'Intermediate',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-500',
      duration: '2 weeks',
      icon: <Code className="w-6 h-6" />,
      description: 'Fast data retrieval',
      topics: [
        'Hash Tables/Hash Maps',
        'Hash Functions',
        'Collision Resolution',
        'HashSet Applications',
        'Two Sum Variations',
        'Frequency Counting'
      ],
      position: { x: 15, y: 85 }
    },
    {
      id: 9,
      title: 'Graphs',
      level: 'Advanced',
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-500',
      duration: '4-5 weeks',
      icon: <Target className="w-6 h-6" />,
      description: 'Complex relationship modeling',
      topics: [
        'Graph Representation',
        'DFS & BFS Traversal',
        'Shortest Path Algorithms',
        'Minimum Spanning Tree',
        'Topological Sorting',
        'Union-Find (Disjoint Set)'
      ],
      position: { x: 85, y: 25 }
    },
    {
      id: 10,
      title: 'Dynamic Programming',
      level: 'Advanced',
      color: 'from-violet-400 to-violet-600',
      bgColor: 'bg-violet-500',
      duration: '4-6 weeks',
      icon: <Award className="w-6 h-6" />,
      description: 'Optimal substructure solutions',
      topics: [
        'DP Fundamentals',
        '1D Dynamic Programming',
        '2D Dynamic Programming',
        'Knapsack Problem',
        'Longest Common Subsequence',
        'Edit Distance'
      ],
      position: { x: 90, y: 45 }
    },
    {
      id: 11,
      title: 'Greedy Algorithms',
      level: 'Advanced',
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-500',
      duration: '2-3 weeks',
      icon: <Trophy className="w-6 h-6" />,
      description: 'Locally optimal choices',
      topics: [
        'Greedy Strategy',
        'Activity Selection',
        'Fractional Knapsack',
        'Huffman Coding',
        'Job Scheduling',
        'Minimum Coins'
      ],
      position: { x: 75, y: 15 }
    },
    {
      id: 12,
      title: 'Advanced Topics',
      level: 'Expert',
      color: 'from-slate-400 to-slate-600',
      bgColor: 'bg-slate-600',
      duration: '6-8 weeks',
      icon: <Award className="w-6 h-6" />,
      description: 'Master advanced algorithms',
      topics: [
        'Trie (Prefix Tree)',
        'Segment Trees',
        'Binary Indexed Tree',
        'String Algorithms (KMP, Rabin-Karp)',
        'Network Flow',
        'Advanced Graph Algorithms'
      ],
      position: { x: 60, y: 5 }
    }
  ];

  const handleSectionClick = (section) => {
    if (unlockedSections.has(section.id)) {
      setSelectedSection(section);
      setShowModal(true);
    }
  };

  const completeSection = () => {
    if (selectedSection) {
      const newCompleted = new Set(completedSections);
      const newUnlocked = new Set(unlockedSections);
      
      newCompleted.add(selectedSection.id);
      
      // Unlock next section
      if (selectedSection.id + 1 < roadmapData.length) {
        newUnlocked.add(selectedSection.id + 1);
      }
      
      setCompletedSections(newCompleted);
      setUnlockedSections(newUnlocked);
      setCurrentPosition(selectedSection.id + 1);
      setShowModal(false);
      setSelectedSection(null);
    }
  };

  const getSectionStatus = (sectionId) => {
    if (completedSections.has(sectionId)) return 'completed';
    if (unlockedSections.has(sectionId)) return 'unlocked';
    return 'locked';
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-orange-400';
      case 'Expert': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const renderPath = () => {
    const paths = [];
    for (let i = 0; i < roadmapData.length - 1; i++) {
      const current = roadmapData[i];
      const next = roadmapData[i + 1];
      const isActive = completedSections.has(i) || currentPosition > i;
      
      paths.push(
        <line
          key={`path-${i}`}
          x1={`${current.position.x}%`}
          y1={`${current.position.y}%`}
          x2={`${next.position.x}%`}
          y2={`${next.position.y}%`}
          stroke={isActive ? '#8B5CF6' : '#374151'}
          strokeWidth="3"
          strokeDasharray={isActive ? '0' : '10,5'}
          className="transition-all duration-1000"
        />
      );
    }
    return paths;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            DSA Adventure
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Navigate your learning journey through the world of Data Structures & Algorithms
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span>Completed: {completedSections.size}/13</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Target className="w-4 h-4 text-blue-400" />
              <span>Progress: {Math.round((completedSections.size / roadmapData.length) * 100)}%</span>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="relative w-full h-[600px] md:h-[700px] bg-gradient-to-br from-slate-800/50 to-purple-800/50 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-pink-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-10 w-20 h-20 bg-green-500 rounded-full blur-3xl"></div>
          </div>

          {/* SVG for paths */}
          <svg className="absolute inset-0 w-full h-full">
            {renderPath()}
          </svg>

          {/* Student Character */}
          <div 
            className="absolute transition-all duration-1000 ease-in-out transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ 
              left: `${roadmapData[currentPosition]?.position.x || 10}%`, 
              top: `${roadmapData[currentPosition]?.position.y || 50}%` 
            }}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 animate-pulse">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
                You are here!
              </div>
            </div>
          </div>

          {/* Roadmap Sections */}
          {roadmapData.map((section) => {
            const status = getSectionStatus(section.id);
            const isClickable = status !== 'locked';
            
            return (
              <div
                key={section.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  isClickable ? 'cursor-pointer hover:scale-110' : 'cursor-not-allowed'
                }`}
                style={{ left: `${section.position.x}%`, top: `${section.position.y}%` }}
                onClick={() => handleSectionClick(section)}
              >
                <div className={`relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl border-2 transition-all duration-500 ${
                  status === 'completed' 
                    ? 'bg-gradient-to-br from-green-400 to-green-600 border-green-300 shadow-green-500/50' 
                    : status === 'unlocked'
                    ? `bg-gradient-to-br ${section.color} border-white/30 shadow-lg hover:shadow-2xl`
                    : 'bg-gray-600 border-gray-500 opacity-50'
                }`}>
                  {status === 'completed' ? (
                    <CheckCircle className="w-8 h-8 text-white" />
                  ) : status === 'unlocked' ? (
                    <div className="text-white">{section.icon}</div>
                  ) : (
                    <Lock className="w-8 h-8 text-gray-400" />
                  )}
                  
                  {/* Section number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-black/80 text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {section.id + 1}
                  </div>
                </div>
                
                {/* Section label */}
                {status !== 'locked' && (
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap">
                      {section.title}
                    </div>
                    <div className={`text-xs mt-1 ${getLevelColor(section.level)}`}>
                      {section.level}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Detail Modal */}
      {showModal && selectedSection && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-lg w-full border border-white/10 shadow-2xl">
            <div className="text-center mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${selectedSection.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl`}>
                <div className="text-white">{selectedSection.icon}</div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{selectedSection.title}</h2>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-300 mb-4">
                <span className={getLevelColor(selectedSection.level)}>{selectedSection.level}</span>
                <span>•</span>
                <span>{selectedSection.duration}</span>
              </div>
              <p className="text-gray-300 mb-6">{selectedSection.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Topics to Learn:</h3>
              <div className="space-y-2">
                {selectedSection.topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-xl font-semibold transition-colors"
              >
                Close
              </button>
              <button
                onClick={completeSection}
                className={`flex-1 px-6 py-3 bg-gradient-to-r ${selectedSection.color} hover:opacity-90 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2`}
              >
                Complete <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningRoadmap;