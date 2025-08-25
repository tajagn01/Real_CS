import React, { useState, useEffect } from "react";


const queueData = {
  topic: "Queue",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Think about waiting in line at your favorite coffee shop - people join at the back and are served from the front in the exact order they arrived. That's precisely how a Queue works in programming! It's a First-In-First-Out (FIFO) data structure that ensures fairness and order. From managing print jobs and handling web requests to implementing breadth-first search algorithms, queues are the organized backbone that keeps systems running smoothly and fairly!",

    // Queue Fundamentals
    fundamentals: {
      concept:
        "A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Think of it as a horizontal line where elements are added (enqueued) at the rear and removed (dequeued) from the front. The first element added is the first one to be removed, making it perfect for managing ordered processing and fair resource allocation.",
      realWorldExample:
        "Picture a line at a bank or supermarket checkout - customers join at the back and are served from the front in order. Or think of print job scheduling in your computer!",
      key_operations: [
        "📥 Enqueue - Add element to rear",
        "📤 Dequeue - Remove element from front", 
        "👁️ Front - View front element without removing",
        "👁️ Rear - View rear element without removing",
        "❓ isEmpty - Check if queue is empty",
        "📏 Size - Get number of elements"
      ],
      industry_applications: [
        "🖨️ Operating Systems - Process scheduling and print job management",
        "🌐 Web Servers - Request handling and load balancing",
        "📞 Call Centers - Customer service queue management", 
        "🎮 Gaming - Turn-based game systems and matchmaking",
        "🚌 Transportation - Traffic management and routing systems",
        "🔄 Algorithms - Breadth-First Search (BFS) traversal",
        "📡 Networking - Data packet transmission and buffering"
      ],
      advantages: [
        "⚡ O(1) enqueue and dequeue operations",
        "⚖️ Fair processing (first-come, first-served)",
        "🎯 Simple and intuitive structure",
        "🔄 Perfect for FIFO scenarios",
        "📊 Efficient for sequential processing"
      ],
      disadvantages: [
        "🚫 No random access to elements",
        "📏 Limited access (only front and rear)",
        "💾 May require dynamic memory allocation",
        "🔍 Linear search required for specific elements"
      ],
    },

    // Implementation Types
    implementation_types: {
      array_based: {
        concept: "Queue implemented using arrays with front and rear pointers. Can use circular array to optimize space usage.",
        advantages: ["Fast access", "Memory efficient", "Simple implementation"],
        disadvantages: ["Fixed size", "May waste space", "Complex circular array logic"]
      },
      linked_list_based: {
        concept: "Queue implemented using linked list with separate front and rear pointers for efficient operations.",
        advantages: ["Dynamic size", "No size limitations", "Simple logic"],
        disadvantages: ["Extra memory for pointers", "Slightly slower due to pointer dereferencing"]
      }
    },

  
  code_examples: {
    "c": "// C - Simple Queue Example\n#include &lt;stdio.h&gt;\n#define MAX 5\n\nint queue[MAX], front = 0, rear = -1, size = 0;\n\nvoid enqueue(int value) {\n    if (size == MAX) {\n        printf(\"Queue full!\\n\");\n        return;\n    }\n    rear = (rear + 1) % MAX;\n    queue[rear] = value;\n    size++;\n    printf(\"Enqueued: %d\\n\", value);\n}\n\nvoid dequeue() {\n    if (size == 0) {\n        printf(\"Queue empty!\\n\");\n        return;\n    }\n    printf(\"Dequeued: %d\\n\", queue[front]);\n    front = (front + 1) % MAX;\n    size--;\n}\n\nvoid showFront() {\n    if (size == 0) {\n        printf(\"Queue empty!\\n\");\n        return;\n    }\n    printf(\"Front: %d\\n\", queue[front]);\n}\n\nint main() {\n    enqueue(10);\n    enqueue(20);\n    enqueue(30);\n    showFront();\n    dequeue();\n    showFront();\n    return 0;\n}",

    "cpp": "// C++ - Simple Queue Example\n#include &lt;iostream&gt;\n#include &lt;queue&gt;\nusing namespace std;\n\nint main() {\n    queue&lt;int&gt; q;\n    q.push(10);\n    q.push(20);\n    q.push(30);\n\n    cout &lt;&lt; \"Front: \" &lt;&lt; q.front() &lt;&lt; endl;\n    q.pop();\n    cout &lt;&lt; \"Front after dequeue: \" &lt;&lt; q.front() &lt;&lt; endl;\n    cout &lt;&lt; \"Size: \" &lt;&lt; q.size() &lt;&lt; endl;\n    return 0;\n}",

    "java": "// Java - Simple Queue Example\nimport java.util.*;\n\npublic class SimpleQueue {\n    public static void main(String[] args) {\n        Queue&lt;Integer&gt; q = new LinkedList&lt;&gt;();\n        q.add(10);\n        q.add(20);\n        q.add(30);\n\n        System.out.println(\"Front: \" + q.peek());\n        q.remove();\n        System.out.println(\"Front after dequeue: \" + q.peek());\n        System.out.println(\"Size: \" + q.size());\n    }\n}",

    "python": "# Python - Simple Queue Example\nfrom collections import deque\n\nq = deque()\nq.append(10)\nq.append(20)\nq.append(30)\n\nprint(\"Front:\", q[0])\nq.popleft()\nprint(\"Front after dequeue:\", q[0])\nprint(\"Size:\", len(q))",

    "javascript": "// JavaScript - Simple Queue Example\nclass Queue {\n    constructor() {\n        this.items = [];\n    }\n    enqueue(val) { this.items.push(val); }\n    dequeue() { return this.items.shift(); }\n    front() { return this.items[0]; }\n    size() { return this.items.length; }\n}\n\nconst q = new Queue();\nq.enqueue(10);\nq.enqueue(20);\nq.enqueue(30);\n\nconsole.log(\"Front:\", q.front());\nq.dequeue();\nconsole.log(\"Front after dequeue:\", q.front());\nconsole.log(\"Size:\", q.size());"
  },



    interview_questions: [
      {
        question: "What is the time complexity of enqueue and dequeue operations in a queue?",
        answer:
          "Both enqueue and dequeue operations have O(1) time complexity when implemented properly. Enqueue adds to the rear and dequeue removes from the front, both requiring constant time operations without any searching or shifting of elements.",
        difficulty: "Easy",
      },
      {
        question: "How would you implement a queue using two stacks?",
        answer:
          "Use two stacks: stack1 for enqueue operations and stack2 for dequeue operations. For enqueue, push to stack1. For dequeue, if stack2 is empty, pop all elements from stack1 and push to stack2, then pop from stack2. This maintains FIFO order.",
        difficulty: "Medium",
      },
      {
        question: "Explain the difference between a circular queue and a linear queue.",
        answer:
          "In a linear queue, rear moves forward but front position isn't reused after dequeue, leading to false overflow. A circular queue treats the array as circular, reusing freed front positions by using modulo operations, maximizing space utilization.",
        difficulty: "Medium",
      },
      {
        question: "How can you detect if a circular queue is full vs empty when front equals rear?",
        answer:
          "Use one of these approaches: 1) Keep a separate size counter, 2) Sacrifice one array slot and consider full when (rear+1)%size == front, or 3) Use a boolean flag to distinguish between empty and full states when front == rear.",
        difficulty: "Hard",
      },
      {
        question: "Design a queue that supports getMin() operation in O(1) time.",
        answer:
          "Use an auxiliary queue that stores minimum elements. For enqueue, add to main queue and add min(current_element, aux_queue.rear()) to aux queue. For dequeue, remove from both queues. The front of aux queue always contains the current minimum.",
        difficulty: "Hard",
      },
    ],

    project_ideas: [
     {
      "title": "Simple Task Queue Processor",
      "description": "Build a basic task queue that processes items in FIFO order. Can be extended to handle different task types and priorities.",
      "difficulty": "Beginner",
      "technologies": ["Python"]
    },
    {
      "title": "Print Job Spooler System",
      "description": "Create a print job management system that queues documents and processes them in order. Include job status tracking and cancellation features.",
      "difficulty": "Intermediate",
      "technologies": ["Java"]
    },
    {
      "title": "Multi-threaded Web Server Request Handler",
      "description": "Implement a web server that uses queues to manage incoming HTTP requests, with multiple worker threads processing requests concurrently.",
      "difficulty": "Advanced",
      "technologies": ["Python"]
    },
    {
      "title": "Real-time Chat Message Broker",
      "description": "Build a message queuing system for a chat application that handles message ordering, delivery guarantees, and handles multiple chat rooms simultaneously.",
      "difficulty": "Advanced",
      "technologies": ["JavaScript"]
    },
    ],
  },
};

// Syntax highlighting function
const highlightSyntax = (code, language) => {
  const keywords = {
    c: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'printf', 'include', 'main', 'struct', 'typedef'],
    cpp: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'cout', 'cin', 'using', 'namespace', 'std', 'include', 'main', 'string', 'class', 'private', 'public'],
    java: ['public', 'private', 'static', 'void', 'int', 'double', 'String', 'class', 'return', 'if', 'else', 'for', 'while', 'System', 'main', 'println', 'printf', 'import'],
    python: ['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'class', 'print', 'len', 'range', 'True', 'False', 'None', 'self'],
    javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class', 'this', 'console', 'log', 'true', 'false', 'null', 'undefined', 'new']
  };

  const strings = /"[^"]*"|'[^']*'|`[^`]*`/g;
  const comments = language === 'python' ? /#.*$/gm : /\/\/.*$|\/\*[\s\S]*?\*\//gm;
  const numbers = /\b\d+\.?\d*\b/g;

  let highlightedCode = code;

  // Highlight strings (green)
  highlightedCode = highlightedCode.replace(strings, match => `<span style="color: #22c55e;">${match}</span>`);
  
  // Highlight comments (gray)
  highlightedCode = highlightedCode.replace(comments, match => `<span style="color: #6b7280;">${match}</span>`);
  
  // Highlight numbers (orange)
  highlightedCode = highlightedCode.replace(numbers, match => `<span style="color: #f97316;">${match}</span>`);
  
  // Highlight keywords (blue)
  if (keywords[language]) {
    keywords[language].forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlightedCode = highlightedCode.replace(regex, match => `<span style="color: #3b82f6;">${match}</span>`);
    });
  }

  return highlightedCode;
};

export default function EnhancedQueuePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  // const [queueElements, setQueueElements] = useState([10, 20, 30, 40]);
  // const [inputValue, setInputValue] = useState("");
  // const [animatingIndex, setAnimatingIndex] = useState(-1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  // const [operation, setOperation] = useState("");
   const [queueElements, setQueueElements] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [operation, setOperation] = useState(null);
  const [animatingIndex, setAnimatingIndex] = useState(null);
  
  // Process scheduling state
  const [processes, setProcesses] = useState(["P1", "P2", "P3"]);
  const [newProcess, setNewProcess] = useState("");
  const [schedulingResult, setSchedulingResult] = useState(null);
  const [executionOrder, setExecutionOrder] = useState([]);

  const { topic, category, sections } = queueData;
  const languages = ["c", "cpp", "java", "python", "javascript"];

  // Animation effect
  useEffect(() => {
    if (animatingIndex >= 0) {
      const timer = setTimeout(() => setAnimatingIndex(-1), 500);
      return () => clearTimeout(timer);
    }
  }, [animatingIndex]);

 const enqueueElement = () => {
    if (!inputValue) return;
    const num = parseInt(inputValue, 10);
    if (isNaN(num)) return;

    setQueueElements([...queueElements, num]);
    setOperation("ENQUEUE");
    setAnimatingIndex(queueElements.length);

    setTimeout(() => setAnimatingIndex(null), 1000);
   
  };

  // ✅ Dequeue function
  const dequeueElement = () => {
    if (queueElements.length === 0) return;
    setQueueElements(queueElements.slice(1));
    setOperation("DEQUEUE");
    setAnimatingIndex(0);

    setTimeout(() => setAnimatingIndex(null), 1000);
  };

  // ✅ Front function
  const frontElement = () => {
    if (queueElements.length === 0) return;
    setOperation("FRONT");
    setAnimatingIndex(0);

    setTimeout(() => setAnimatingIndex(null), 1000);
  };

  // ✅ Rear function
  const rearElement = () => {
    if (queueElements.length === 0) return;
    setOperation("REAR");
    setAnimatingIndex(queueElements.length - 1);

    setTimeout(() => setAnimatingIndex(null), 1000);
  };

  const simulateProcessScheduling = () => {
    if (processes.length === 0) return;
    
    const execution = [...processes];
    setExecutionOrder(execution);
    setSchedulingResult(execution);
  };

  const addProcess = () => {
    if (newProcess.trim() !== "") {
      setProcesses([...processes, newProcess.trim()]);
      setNewProcess("");
    }
  };

  const removeProcess = () => {
    if (processes.length > 0) {
      setProcesses(processes.slice(1));
      if (executionOrder.length > 0) {
        setExecutionOrder(executionOrder.slice(1));
      }
    }
  };
const QueueVisualization = () => (
  <div className="m-4 sm:m-10 p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 shadow-xl">
    <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-purple-800 dark:text-purple-200">
      🚶‍♂️ Queue Interactive Demo
    </h3>

    {/* Queue Visual */}
    <div className="flex justify-center mb-6 px-2">
      <div className="relative flex flex-wrap justify-center items-start gap-2 py-12">
        {queueElements.map((value, index) => (
          <div key={index} className="relative">
            {/* FRONT Indicator */}
            {index === 0 && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm sm:text-base text-purple-600 dark:text-purple-300 font-medium text-center">
                FRONT
                <div className="text-lg sm:text-xl">⬇️</div>
              </div>
            )}

            {/* Queue Box */}
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 border-2 border-purple-400 dark:border-purple-600 flex items-center justify-center transition-all duration-500 ${
                animatingIndex === index
                  ? operation === "ENQUEUE"
                    ? "bg-green-400 border-green-500 animate-bounce scale-110"
                    : operation === "DEQUEUE"
                    ? "bg-red-400 border-red-500 animate-pulse scale-110"
                    : operation === "FRONT"
                    ? "bg-yellow-400 border-yellow-500 animate-pulse scale-110"
                    : operation === "REAR"
                    ? "bg-blue-400 border-blue-500 animate-pulse scale-110"
                    : "bg-purple-200 dark:bg-purple-700"
                  : "bg-purple-200 dark:bg-purple-700"
              }`}
            >
              <div className="font-bold text-base sm:text-lg text-purple-800 dark:text-purple-200">
                {value}
              </div>
            </div>

            {/* REAR Indicator */}
            {index === queueElements.length - 1 && (
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm sm:text-base text-purple-600 dark:text-purple-300 font-medium text-center">
                <div className="text-lg sm:text-xl">⬆️</div>
                REAR
              </div>
            )}
          </div>
        ))}

        {queueElements.length === 0 && (
          <div className="w-64 h-16 border-2 border-dashed border-gray-400 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Empty Queue</span>
          </div>
        )}
      </div>
    </div>

    {/* Operation Status */}
    {operation && (
      <div className="text-center mb-4">
        <span
          className={`px-4 py-2 rounded-lg font-bold text-white text-sm sm:text-base ${
            operation === "ENQUEUE"
              ? "bg-green-500"
              : operation === "DEQUEUE"
              ? "bg-red-500"
              : operation === "FRONT"
              ? "bg-yellow-500"
              : "bg-blue-500"
          }`}
        >
          {operation} Operation
        </span>
      </div>
    )}

    {/* Queue Info */}
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div>
          <span className="text-xs sm:text-sm text-gray-500">Queue Size</span>
          <div className="text-xl sm:text-2xl font-bold text-purple-600">
            {queueElements.length}
          </div>
        </div>
        <div>
          <span className="text-xs sm:text-sm text-gray-500">Front Element</span>
          <div className="text-xl sm:text-2xl font-bold text-purple-600">
            {queueElements.length > 0 ? queueElements[0] : "None"}
          </div>
        </div>
        <div>
          <span className="text-xs sm:text-sm text-gray-500">Rear Element</span>
          <div className="text-xl sm:text-2xl font-bold text-purple-600">
            {queueElements.length > 0
              ? queueElements[queueElements.length - 1]
              : "None"}
          </div>
        </div>
      </div>
    </div>

    {/* Queue Operations */}
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h4 className="text-lg font-bold mb-3 text-center">Queue Operations</h4>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d*$/.test(val)) {
              setInputValue(val);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue !== "") {
              e.preventDefault();
              enqueueElement();
            }
          }}
          placeholder="Enter value"
          className="w-full sm:w-auto px-4 py-2 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-purple-500 transition-colors duration-200"
        />

        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={enqueueElement}
            disabled={!inputValue}
            className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
          >
            📥 Enqueue
          </button>
          <button
            onClick={dequeueElement}
            disabled={queueElements.length === 0}
            className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
          >
            📤 Dequeue
          </button>
          <button
            onClick={frontElement}
            disabled={queueElements.length === 0}
            className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
          >
            👁️ Front
          </button>
          <button
            onClick={rearElement}
            disabled={queueElements.length === 0}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
          >
            🔙 Rear
          </button>
        </div>
      </div>
    </div>
  </div>
);






  const ProcessScheduler = () => (
    <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-amber-800 dark:text-amber-200">
        ⚙️ Process Scheduling Demo (FCFS)
      </h3>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newProcess}
            onChange={(e) => setNewProcess(e.target.value)}
            placeholder="Enter process name (e.g., P4)"
            className="flex-1 px-4 py-2 border-2 border-amber-300 dark:border-amber-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500 transition-colors duration-200"
          />
          <button
            onClick={addProcess}
            disabled={!newProcess.trim()}
            className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Add Process
          </button>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={simulateProcessScheduling}
            disabled={processes.length === 0}
            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Schedule Processes
          </button>
          <button
            onClick={removeProcess}
            disabled={processes.length === 0}
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Execute Next
          </button>
        </div>
        
        {/* Process Queue Visualization */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
          <h4 className="font-bold mb-2">Ready Queue:</h4>
          <div className="flex gap-1 flex-wrap">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`px-3 py-2 rounded border-2 ${
                  index === 0 
                    ? "bg-green-100 border-green-400 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                    : "bg-gray-100 border-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                }`}
              >
                {process} {index === 0 && "(Next)"}
              </div>
            ))}
            {processes.length === 0 && (
              <span className="text-gray-500 italic">No processes in queue</span>
            )}
          </div>
        </div>
        
        {schedulingResult && (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500">
            <h4 className="font-bold mb-2">Execution Order (FCFS):</h4>
            <div className="flex gap-2 items-center">
              {schedulingResult.map((process, index) => (
                <React.Fragment key={index}>
                  <span className="px-3 py-1 bg-amber-100 border border-amber-400 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 rounded">
                    {process}
                  </span>
                  {index < schedulingResult.length - 1 && (
                    <span className="text-gray-500">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      {/* Animated Header */}
      <header className="py-16 text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
          <p className="text-xl">{category}</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-white/20 rounded-full">📥 Enqueue/Dequeue</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🔄 FIFO</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">⚡ O(1) Operations</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Student Hook */}
        <section className="transform hover:scale-105 transition-transform duration-300">
       <h2 className="text-4xl font-bold mb-6 text-center">
    🎯
    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Why Queues Matter
    </span>
</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-purple-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* Queue Fundamentals */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center">
    📚
    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Queue Fundamentals
    </span>
</h2>
          {/* Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-purple-500">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">💡 Understanding Queues</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.fundamentals.concept}
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
              <p className="text-purple-800 dark:text-purple-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.fundamentals.realWorldExample}
              </p>
            </div>
          </div>

          {/* Interactive Demo */}
          <QueueVisualization />

          {/* Key Operations */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">🔧 Key Queue Operations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.fundamentals.key_operations.map((operation, index) => (
                <div
                  key={index}
                  className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-400 hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{operation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages & Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.fundamentals.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">{advantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{advantage.substring(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3>
              <ul className="space-y-3">
                {sections.fundamentals.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industry Applications */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">🏢 Queues in Industry</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.fundamentals.industry_applications.map((application, index) => (
                <div
                  key={index}
                  className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-400 hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-gray-700 dark:text-gray-300">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Scheduling Demo */}
        {/* <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            ⚙️ Practical Application: Process Scheduling
          </h2>
          <ProcessScheduler />
        </section> */}

        {/* Implementation Types */}
        <section>
          <h2 class="text-4xl font-bold mb-8 text-center">
    🏗️
    <span class="bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
        Implementation Approaches
    </span>
</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(sections.implementation_types).map(([type, details]) => (
              <div key={type} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 capitalize">
                  {type.replace('_', ' ')} Implementation
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{details.concept}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Advantages</h4>
                    <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                      {details.advantages.map((adv, idx) => (
                        <li key={idx}>• {adv}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Disadvantages</h4>
                    <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                      {details.disadvantages.map((dis, idx) => (
                        <li key={idx}>• {dis}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Code Examples */}
        <section>
         <h2 className="text-4xl font-bold mb-8 text-center">
    💻
    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Implementation Examples
    </span>
</h2>
          
          {/* Language Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === lang
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-emerald-200 dark:border-emerald-800"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-gray-300 font-mono text-sm">
                  queue_implementation.{selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage === 'python' ? 'py' : selectedLanguage === 'javascript' ? 'js' : selectedLanguage === 'java' ? 'java' : 'c'}
                </span>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(sections.code_examples[selectedLanguage])}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors duration-200"
              >
                📋 Copy
              </button>
            </div>
            
            <div className="p-6 overflow-x-auto">
              <pre
                className="text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: highlightSyntax(sections.code_examples[selectedLanguage], selectedLanguage)
                }}
              />
            </div>
          </div>
        </section>

        {/* Interview Questions */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
    🎤
    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Interview Questions
    </span>
</h2>
          
          <div className="space-y-4">
            {sections.interview_questions.map((qa, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <button
                  onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === index ? -1 : index)}
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        qa.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                        qa.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                      }`}>
                        {qa.difficulty}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {qa.question}
                    </h3>
                  </div>
                  <span className="text-2xl text-gray-400">
                    {selectedQuestionIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                {selectedQuestionIndex === index && (
                  <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {qa.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Project Ideas */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            🚀 Project Ideas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sections.project_ideas.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' :
                    'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">🎓 Keep Learning!</h3>
          <p className="text-gray-300 mb-6">
            Queues are essential for fair resource management and sequential processing. Practice implementing them in different scenarios
            and explore their applications in system design and algorithms.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full">📚 Study More DSA</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">💡 Practice Problems</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">🚀 Build Projects</span>
          </div>
        </footer>
      </main>
    </div>
  );
}