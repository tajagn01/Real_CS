import React, { useState, useEffect } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Handle,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  CheckCircle,
  Circle,
  Book,
  Code,
  Target,
  Zap,
  Brain,
  Network,
  Database,
} from "lucide-react";

const nodeTypes = {
  customNode: ({ data }) => {
    const { title, icon, color, difficulty, isUnlocked, isCompleted, toggle } =
      data;

    const getDifficultyColor = (difficulty) => {
      switch (difficulty) {
        case "Beginner":
          return "text-green-600 bg-green-100";
        case "Intermediate":
          return "text-yellow-600 bg-yellow-100";
        case "Advanced":
          return "text-red-600 bg-red-100";
        default:
          return "text-gray-600 bg-gray-100";
      }
    };

    return (
      <div
        className={`p-3 rounded-xl shadow-lg border-2 text-xs sm:text-sm w-40 sm:w-48 bg-gradient-to-r ${color} 
        ${isCompleted ? "border-green-400" : isUnlocked ? "border-blue-400" : "border-gray-600 opacity-60"}`}
      >
        <Handle type="target" position="top" />

        <div className="flex justify-between items-center mb-2">
          <div className="text-white">{icon}</div>
          <button onClick={toggle} className="text-white">
            {isCompleted ? (
              <CheckCircle size={18} className="text-green-200" />
            ) : isUnlocked ? (
              <Circle size={18} />
            ) : (
              <Circle size={18} className="text-gray-400" />
            )}
          </button>
        </div>

        <h3 className="text-white font-bold mb-1">{title}</h3>
        <div
          className={`px-2 py-1 rounded-full text-xs inline-block ${getDifficultyColor(
            difficulty
          )}`}
        >
          {difficulty}
        </div>

        <Handle type="source" position="bottom" />
      </div>
    );
  },
};

const LearningRoadmap = () => {
  const [completedNodes, setCompletedNodes] = useState(new Set());

  const roadmapData = {
    basics: {
      title: "Programming Basics",
      icon: <Code size={18} />,
      color: "from-blue-400 to-blue-600",
      prerequisites: [],
      difficulty: "Beginner",
      position: { x: 50, y: 50 },
    },
    complexity: {
      title: "Time & Space Complexity",
      icon: <Target size={18} />,
      color: "from-purple-400 to-purple-600",
      prerequisites: ["basics"],
      difficulty: "Beginner",
      position: { x: 300, y: 50 },
    },
    arrays: {
      title: "Arrays & Strings",
      icon: <Database size={18} />,
      color: "from-green-400 to-green-600",
      prerequisites: ["basics"],
      difficulty: "Beginner",
      position: { x: 50, y: 200 },
    },
    linkedlist: {
      title: "Linked Lists",
      icon: <Network size={18} />,
      color: "from-orange-400 to-orange-600",
      prerequisites: ["arrays"],
      difficulty: "Beginner",
      position: { x: 300, y: 200 },
    },
    stacks: {
      title: "Stacks & Queues",
      icon: <Zap size={18} />,
      color: "from-yellow-400 to-yellow-600",
      prerequisites: ["linkedlist"],
      difficulty: "Intermediate",
      position: { x: 550, y: 200 },
    },
    recursion: {
      title: "Recursion",
      icon: <Brain size={18} />,
      color: "from-red-400 to-red-600",
      prerequisites: ["basics"],
      difficulty: "Intermediate",
      position: { x: 50, y: 350 },
    },
    sorting: {
      title: "Sorting Algorithms",
      icon: <Book size={18} />,
      color: "from-indigo-400 to-indigo-600",
      prerequisites: ["arrays", "recursion"],
      difficulty: "Intermediate",
      position: { x: 300, y: 350 },
    },
    graphs: {
      title: "Graphs",
      icon: <Network size={18} />,
      color: "from-emerald-400 to-emerald-600",
      prerequisites: ["stacks", "sorting"],
      difficulty: "Advanced",
      position: { x: 550, y: 350 },
    },
    dp: {
      title: "Dynamic Programming",
      icon: <Brain size={18} />,
      color: "from-rose-400 to-rose-600",
      prerequisites: ["recursion", "arrays"],
      difficulty: "Advanced",
      position: { x: 800, y: 250 },
    },
  };

  const nodes = Object.entries(roadmapData).map(([id, node]) => {
    const isUnlocked = node.prerequisites.every((p) => completedNodes.has(p));
    const isCompleted = completedNodes.has(id);

    return {
      id,
      type: "customNode",
      data: {
        ...node,
        isUnlocked,
        isCompleted,
        toggle: () =>
          setCompletedNodes((prev) => {
            const newSet = new Set(prev);
            newSet.has(id) ? newSet.delete(id) : newSet.add(id);
            return newSet;
          }),
      },
      position: node.position,
    };
  });

  const edges = Object.entries(roadmapData)
    .flatMap(([id, node]) =>
      node.prerequisites.map((prereq) => ({
        id: `${prereq}-${id}`,
        source: prereq,
        target: id,
        animated: completedNodes.has(prereq),
        style: {
          stroke: completedNodes.has(prereq) ? "#10b981" : "#9ca3af",
        },
      }))
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Interactive DSA Roadmap
      </h1>

      <div className="h-[70vh] bg-slate-800/40 rounded-xl border border-slate-700 overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          nodeTypes={nodeTypes}
        >
          <MiniMap />
          <Controls />
          <Background gap={16} color="#444" />
        </ReactFlow>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg text-white text-center">
          <div className="text-xl font-bold">{completedNodes.size}</div>
          <div className="text-sm">Completed</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg text-white text-center">
          <div className="text-xl font-bold">
            {Object.keys(roadmapData).filter(
              (id) =>
                roadmapData[id].prerequisites.every((p) =>
                  completedNodes.has(p)
                ) && !completedNodes.has(id)
            ).length}
          </div>
          <div className="text-sm">Available</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg text-white text-center">
          <div className="text-xl font-bold">
            {Math.round(
              (completedNodes.size / Object.keys(roadmapData).length) * 100
            )}
            %
          </div>
          <div className="text-sm">Progress</div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-lg text-white text-center">
          <div className="text-xl font-bold">{Object.keys(roadmapData).length}</div>
          <div className="text-sm">Total Nodes</div>
        </div>
      </div>
    </div>
  );
};

export default LearningRoadmap;
