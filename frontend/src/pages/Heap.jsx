import React, { useState, useEffect } from "react";

const heapData = {
  topic: "Heap",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Imagine an emergency room where patients are treated based on the severity of their condition, not who arrived first. Heaps work just like that! They are a specialized tree-based data structure that always keeps the most important element (highest or lowest value) at the top, ready for instant access. Whether it's a 'Max-Heap' for VIP tickets or a 'Min-Heap' for the next task in a CPU scheduler, heaps ensure that priority is always king!",

    // Min-Heap Content
    minHeap: {
      concept:
        "A Min-Heap is a binary tree where the value of each parent node is less than or equal to the value of its children. This means the smallest element is always at the root of the tree. It's incredibly efficient for scenarios where you need to repeatedly find and remove the minimum value from a collection.",
      realWorldExample:
        "Think of a task scheduler in an operating system. The task with the highest priority (lowest priority number) is always at the top of the heap, ensuring it gets processed next!",
      industry_applications: [
        "🥇 Priority Queues - Foundation for many algorithms",
        "🗺️ Graph Algorithms - Dijkstra's shortest path and Prim's MST",
        "🔄 Huffman Coding - Data compression algorithms",
        "💻 OS Scheduling - Managing processes with different priorities",
        "📈 K-way Merge - Merging multiple sorted lists efficiently",
        "🎯 Event Simulation - Managing discrete events in order",
      ],
      advantages: [
        "⚡ O(1) access to min element",
        "🌲 O(log n) insertion time",
        "🔥 O(log n) deletion time",
        "💾 Space-efficient (uses an array)",
      ],
      disadvantages: [
        "🔍 O(n) to search for an element",
        "📊 Not ideal for accessing random elements",
        "↔️ Slower than arrays for simple lists",
        "🔗 Complex parent-child logic",
      ],
    },

    // Max-Heap Content
    maxHeap: {
      concept:
        "A Max-Heap is the opposite of a Min-Heap. The value of each parent node is greater than or equal to the value of its children. This property guarantees that the largest element is always the root node, making it perfect for situations requiring quick access to the maximum value.",
      realWorldExample:
        "Consider a real-time leaderboard in a game. The player with the highest score is always at the top of the Max-Heap, so the leader can be displayed instantly!",
      industry_applications: [
        "🏆 Gaming - Real-time leaderboards and score tracking",
        "📉 Heapsort - An efficient comparison-based sorting algorithm",
        "📊 Statistics - Finding the k-th largest element in a stream",
        " median of a data stream (with a Min-Heap)",
        "🗑️ Garbage Collection - Tracking memory blocks by size",
        "💡 Recommendation Systems - Finding top N items",
      ],
      advantages: [
        "⚡ O(1) access to max element",
        "🌲 O(log n) insertion time",
        "🔥 O(log n) deletion time",
        "📈 Efficient for finding top elements",
      ],
      disadvantages: [
        "🔍 Slow O(n) search for non-max elements",
        "📉 Heap property must be maintained",
        "🔢 Unsorted traversal order",
        "↔️ Less intuitive than simple arrays",
      ],
    },

    // Heap Properties
    heapProperties: {
      concept:
        "Heaps are not just any tree; they have two core properties. The 'Heap Property' (Min or Max) defines the relationship between parent and child nodes. The 'Shape Property' dictates that a heap must be a 'complete binary tree,' meaning all levels are fully filled except possibly the last, which is filled from left to right. This structure is why heaps can be efficiently stored in an array.",
      realWorldExample:
        "Think of a tournament bracket. It's a complete tree, and after each round, the winner (the 'max' element) moves up, maintaining a heap-like structure until the final champion is at the root!",
      industry_applications: [
        "🖥️ Array-based Implementation - Key to its efficiency",
        "🌳 Complete Binary Tree - Guarantees logarithmic height",
        "🔢 Parent-Child Formulas - i-th node's children are at 2i+1 and 2i+2",
        "🏗️ Heapify Algorithm - Efficiently building a heap from an array in O(n)",
        "🧩 Foundation for Heapsort - In-place sorting with O(n log n) complexity",
        "📊 Balanced Structure - Prevents worst-case scenarios unlike BSTs",
      ],
      advantages: [
        "💾 No pointers needed with arrays",
        "🌳 Guaranteed O(log n) height",
        "⚡ Fast heapify operation",
        "🧠 Simple array indexing for navigation",
      ],
      disadvantages: [
        "📏 Array implementation can be rigid",
        "🧮 Index math can be tricky at first",
        "↔️ Not as flexible as node-based trees",
        " visual representation is less direct",
      ],
    },

    code_examples: {
      python: `# Python Max-Heap Example (using heapq library for min-heap)
import heapq

# Note: heapq is a min-heap. To simulate a max-heap, we store negative values.
class MaxHeap:
    def __init__(self):
        self.heap = []

    def push(self, val):
        print(f"Pushing {-val}...")
        heapq.heappush(self.heap, -val)

    def pop(self):
        val = -heapq.heappop(self.heap)
        print(f"Popped max value: {val}")
        return val

    def peek(self):
        return -self.heap[0] if self.heap else None

# Priority Queue for a hospital ER
er_queue = MaxHeap()
print("Patients arriving at ER (priority, name):")

er_queue.push(9) # Critical condition
er_queue.push(5) # Moderate injury
er_queue.push(7) # Serious but stable
er_queue.push(2) # Minor cut

print("\\nTreating patients based on priority:")
print(f"Current Heap (negative values): {er_queue.heap}")
print(f"Next patient to treat (highest priority): {er_queue.peek()}")

er_queue.pop() # Treat patient with priority 9
er_queue.pop() # Treat patient with priority 7

print(f"\\nRemaining patients in queue (negative values): {er_queue.heap}")
`,
      javascript: `// JavaScript Max-Heap Example - Task Scheduler
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  insert(value) {
    console.log(\`Inserting task with priority: \${value}\`);
    this.heap.push(value);
    this.siftUp();
  }

  siftUp() {
    let nodeIndex = this.heap.length - 1;
    while (nodeIndex > 0 && this.heap[nodeIndex] > this.heap[this.getParentIndex(nodeIndex)]) {
      this.swap(nodeIndex, this.getParentIndex(nodeIndex));
      nodeIndex = this.getParentIndex(nodeIndex);
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.siftDown(0);
    console.log(\`Executing task with highest priority: \${max}\`);
    return max;
  }

  siftDown(nodeIndex) {
    let leftChildIndex = this.getLeftChildIndex(nodeIndex);
    let rightChildIndex = this.getRightChildIndex(nodeIndex);
    let largest = nodeIndex;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
      largest = leftChildIndex;
    }
    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
      largest = rightChildIndex;
    }

    if (largest !== nodeIndex) {
      this.swap(nodeIndex, largest);
      this.siftDown(largest);
    }
  }
}

const taskScheduler = new MaxHeap();
taskScheduler.insert(5); // Medium priority
taskScheduler.insert(10); // High priority
taskScheduler.insert(2); // Low priority
taskScheduler.insert(8); // High-ish priority

console.log(\`Current task queue (priorities): \${taskScheduler.heap}\`);

taskScheduler.extractMax(); // Executes task 10
taskScheduler.extractMax(); // Executes task 8

console.log(\`Remaining tasks: \${taskScheduler.heap}\`);
`,
      java: `// Java Max-Heap Example - PriorityQueue
import java.util.PriorityQueue;
import java.util.Collections;

public class GameLeaderboard {
    public static void main(String[] args) {
        // By default, PriorityQueue is a min-heap. Use Collections.reverseOrder() for a max-heap.
        PriorityQueue<Integer> leaderboard = new PriorityQueue<>(Collections.reverseOrder());

        System.out.println("Players are posting scores...");
        leaderboard.add(1200);
        leaderboard.add(2500); // New high score!
        leaderboard.add(1800);
        leaderboard.add(3000); // Another new high score!
        
        System.out.println("Current Leaderboard (internal heap order): " + leaderboard);
        
        // Peek at the top score without removing
        System.out.println("Top score is: " + leaderboard.peek());

        // Remove the top player
        Integer topPlayer = leaderboard.poll();
        System.out.println("Removed top player with score: " + topPlayer);

        System.out.println("New top score is: " + leaderboard.peek());
        System.out.println("Remaining players on leaderboard: " + leaderboard);
    }
}`,
      cpp: `// C++ Max-Heap Example - std::priority_queue
#include <iostream>
#include <queue>
#include <vector>

int main() {
    // std::priority_queue is a max-heap by default
    std::priority_queue<int> bug_tracker;

    std::cout << "Reporting bugs with priority levels..." << std::endl;
    bug_tracker.push(5); // Medium priority
    bug_tracker.push(10); // Critical bug
    bug_tracker.push(2); // Low priority
    bug_tracker.push(8); // High priority

    std::cout << "Number of bugs to fix: " << bug_tracker.size() << std::endl;

    std::cout << "\\nStarting to fix bugs..." << std::endl;
    while (!bug_tracker.empty()) {
        int priority = bug_tracker.top(); // Get the highest priority bug
        bug_tracker.pop(); // Remove it from the queue
        std::cout << "Fixing bug with priority: " << priority << std::endl;
    }

    std::cout << "\\nAll bugs fixed!" << std::endl;

    return 0;
}`,
      c: `// C Max-Heap Implementation Example
#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100
int heap[MAX_SIZE];
int heapSize = 0;

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function to maintain max-heap property (sift down)
void heapify(int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < heapSize && heap[left] > heap[largest])
        largest = left;
    if (right < heapSize && heap[right] > heap[largest])
        largest = right;

    if (largest != i) {
        swap(&heap[i], &heap[largest]);
        heapify(largest);
    }
}

void insert(int value) {
    if (heapSize == MAX_SIZE) {
        printf("Heap is full!\\n");
        return;
    }
    heapSize++;
    int i = heapSize - 1;
    heap[i] = value;
    
    // Sift up
    while (i != 0 && heap[(i - 1) / 2] < heap[i]) {
       swap(&heap[i], &heap[(i - 1) / 2]);
       i = (i - 1) / 2;
    }
}

int extractMax() {
    if (heapSize <= 0) return -1;
    if (heapSize == 1) {
        heapSize--;
        return heap[0];
    }
    int root = heap[0];
    heap[0] = heap[heapSize - 1];
    heapSize--;
    heapify(0);
    return root;
}

void printHeap() {
    printf("Heap array: ");
    for (int i = 0; i < heapSize; ++i)
        printf("%d ", heap[i]);
    printf("\\n");
}

int main() {
    insert(30);
    insert(50);
    insert(20);
    insert(80);
    insert(40);
    printHeap(); // Expected: 80 50 20 30 40 or similar heap order
    
    printf("Extracted max: %d\\n", extractMax());
    printHeap(); // Expected: 50 40 20 30
    
    return 0;
}`,
    },

    interview_questions: [
      {
        question: "What is a Heap and what are its two main properties?",
        answer:
          "A Heap is a specialized tree-based data structure. Its two properties are: 1. Heap Property: All nodes are either greater than or equal to (Max-Heap) or less than or equal to (Min-Heap) each of their children. 2. Shape Property: It must be a complete binary tree, filled from left to right.",
        difficulty: "Easy",
      },
      {
        question: "What is the time complexity for insertion and extracting the min/max element?",
        answer:
          "Both insertion and extraction (deletion of the root) have a time complexity of O(log n). This is because the operations require traversing the height of the tree, which is logarithmic in a complete binary tree.",
        difficulty: "Medium",
      },
      {
        question: "Why are Heaps typically implemented using an array instead of nodes with pointers?",
        answer:
          "Because heaps are complete binary trees, an array implementation is very space-efficient (no overhead for pointers). The parent-child relationship can be calculated mathematically with indices (parent of i is at floor((i-1)/2), children at 2i+1 and 2i+2), which is very fast.",
        difficulty: "Medium",
      },
      {
        question: "How can you find the k-th largest element in an unsorted array using a Heap?",
        answer:
          "Use a Min-Heap of size k. Iterate through the array. For the first k elements, add them to the heap. For the remaining elements, if an element is larger than the heap's root (the smallest of the k largest seen so far), remove the root and insert the new element. After iterating, the root of the heap is the k-th largest element. Time: O(n log k).",
        difficulty: "Hard",
      },
      {
        question: "What is the 'heapify' process and what is its time complexity?",
        answer:
          "Heapify is the process of converting an arbitrary array into a valid heap. It works by starting from the last non-leaf node and calling a 'sift-down' operation on each node up to the root. Surprisingly, this can be done in O(n) time, which is more efficient than inserting n elements one by one (which would be O(n log n)).",
        difficulty: "Hard",
      },
    ],

    project_ideas: [
      {
        title: "Priority To-Do List Application",
        description:
          "Create a to-do list where each task has a priority level. Use a Max-Heap to ensure the highest-priority task is always displayed at the top.",
        difficulty: "Beginner",
        technologies: ["JavaScript", "React", "HTML/CSS"],
      },
      {
        title: "Dijkstra's Algorithm Visualizer",
        description:
          "Build a tool that visualizes how Dijkstra's algorithm finds the shortest path in a graph. A Min-Heap (Priority Queue) is crucial for efficiently selecting the next node to visit.",
        difficulty: "Intermediate",
        technologies: ["Python/Pygame", "JavaScript/Canvas", "Data Visualization"],
      },
      {
        title: "Streaming Median Finder",
        description:
          "Develop a system that can find the median of a continuous stream of numbers. This is a classic problem solved efficiently using two heaps: a Max-Heap for the smaller half and a Min-Heap for the larger half.",
        difficulty: "Advanced",
        technologies: ["Java/Python", "Data Streams", "Algorithm Design"],
      },
      {
        title: "Custom Task Scheduler Simulation",
        description:
          "Simulate an operating system's CPU scheduler. Allow processes with different priorities and burst times to be added, and use a heap to determine which process runs next.",
        difficulty: "Advanced",
        technologies: ["C++/Java", "Simulation", "OS Concepts"],
      },
    ],
  },
};

// Syntax highlighting function (unchanged)
const highlightSyntax = (code, language) => {
  const keywords = {
    c: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'printf', 'include', 'main', 'struct', 'typedef', 'stdlib', 'stdio'],
    cpp: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'cout', 'cin', 'using', 'namespace', 'std', 'include', 'main', 'string', 'vector', 'queue', 'priority_queue'],
    java: ['public', 'private', 'static', 'void', 'int', 'double', 'String', 'class', 'return', 'if', 'else', 'for', 'while', 'System', 'main', 'println', 'printf', 'import', 'util', 'PriorityQueue', 'Collections'],
    python: ['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'class', 'print', 'len', 'range', 'True', 'False', 'None', 'self'],
    javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class', 'this', 'console', 'log', 'true', 'false', 'null', 'undefined', 'constructor']
  };

  const strings = /"[^"]*"|'[^']*'|`[^`]*`/g;
  const comments = language === 'python' ? /#.*$/gm : /\/\/.*$|\/\*[\s\S]*?\*\//gm;
  const numbers = /\b\d+\.?\d*\b/g;

  let highlightedCode = code;
  highlightedCode = highlightedCode.replace(strings, match => `<span style="color: #22c55e;">${match}</span>`);
  highlightedCode = highlightedCode.replace(comments, match => `<span style="color: #6b7280;">${match}</span>`);
  highlightedCode = highlightedCode.replace(numbers, match => `<span style="color: #f97316;">${match}</span>`);

  if (keywords[language]) {
    keywords[language].forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlightedCode = highlightedCode.replace(regex, match => `<span style="color: #3b82f6;">${match}</span>`);
    });
  }
  return highlightedCode;
};

// Interactive Heap Visualization Component
const HeapVisualization = () => {
    const [heap, setHeap] = useState([95, 80, 85, 50, 60, 70, 75]);
    const [inputValue, setInputValue] = useState("");
    const [swapping, setSwapping] = useState([-1, -1]);
    const [poppedValue, setPoppedValue] = useState(null);

    const getParentIndex = i => Math.floor((i - 1) / 2);
    
    // Animate swaps
    const animateSwap = async (i1, i2, currentHeap) => {
        setSwapping([i1, i2]);
        await new Promise(res => setTimeout(res, 500));
        const newHeap = [...currentHeap];
        [newHeap[i1], newHeap[i2]] = [newHeap[i2], newHeap[i1]];
        setHeap(newHeap);
        setSwapping([-1, -1]);
        await new Promise(res => setTimeout(res, 300));
        return newHeap;
    };
    
    const insertNode = async () => {
        if (inputValue === "" || isNaN(parseInt(inputValue))) return;
        const value = parseInt(inputValue);
        let newHeap = [...heap, value];
        setHeap(newHeap);
        setInputValue("");
        await new Promise(res => setTimeout(res, 300));
        
        // Sift up
        let i = newHeap.length - 1;
        while (i > 0 && newHeap[getParentIndex(i)] < newHeap[i]) {
            newHeap = await animateSwap(i, getParentIndex(i), newHeap);
            i = getParentIndex(i);
        }
    };
    
    const extractMaxNode = async () => {
        if (heap.length === 0) return;

        let currentHeap = [...heap];
        setPoppedValue(currentHeap[0]);
        await animateSwap(0, currentHeap.length - 1, currentHeap);

        currentHeap = heap.slice(0, heap.length - 1);
        setHeap(currentHeap);
        
        await new Promise(res => setTimeout(res, 500));
        setPoppedValue(null);
        
        // Sift down
        let i = 0;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;
            
            if (left < currentHeap.length && currentHeap[left] > currentHeap[largest]) {
                largest = left;
            }
            if (right < currentHeap.length && currentHeap[right] > currentHeap[largest]) {
                largest = right;
            }
            
            if (largest !== i) {
                currentHeap = await animateSwap(i, largest, currentHeap);
                i = largest;
            } else {
                break;
            }
        }
    };

    const getNodePosition = (index, width) => {
        const level = Math.floor(Math.log2(index + 1));
        const y = level * 80 + 40;
        const nodesInLevel = 2 ** level;
        const indexInLevel = index - (nodesInLevel - 1);
        const x = (width / (nodesInLevel + 1)) * (indexInLevel + 1);
        return { x, y };
    };
    
    const Tree = () => {
        const width = 800;
        const height = 300;
        const positions = heap.map((_, i) => getNodePosition(i, width));
    
        return (
            <div className="relative" style={{ width, height }}>
                {/* Lines */}
                {heap.map((_, i) => {
                    const parentIndex = getParentIndex(i);
                    if (i === 0) return null;
                    const pos = positions[i];
                    const parentPos = positions[parentIndex];
                    const angle = Math.atan2(pos.y - parentPos.y, pos.x - parentPos.x) * 180 / Math.PI;
                    const distance = Math.sqrt(Math.pow(pos.x - parentPos.x, 2) + Math.pow(pos.y - parentPos.y, 2));
    
                    return (
                        <div key={`line-${i}`}
                            className="absolute bg-gray-300 dark:bg-gray-600"
                            style={{
                                left: `${parentPos.x}px`,
                                top: `${parentPos.y}px`,
                                width: `${distance}px`,
                                height: '2px',
                                transformOrigin: '0 0',
                                transform: `rotate(${angle}deg)`,
                                zIndex: 1
                            }}
                        />
                    );
                })}
                {/* Nodes */}
                {heap.map((value, i) => {
                    const { x, y } = positions[i];
                    const isSwapping = swapping.includes(i);
                    return (
                        <div key={i}
                            className={`absolute w-12 h-12 rounded-full flex items-center justify-center font-bold text-white border-2 transition-all duration-300 transform`}
                            style={{
                                left: x - 24,
                                top: y - 24,
                                backgroundColor: isSwapping ? '#f59e0b' : '#3b82f6', // amber-500 or blue-500
                                borderColor: isSwapping ? '#d97706' : '#2563eb', // amber-600 or blue-600
                                zIndex: 10,
                                transform: `scale(${isSwapping ? 1.2 : 1})`,
                            }}
                        >
                            {value}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
        <h3 className="text-2xl font-bold mb-4 text-center text-blue-800 dark:text-blue-200">
          🌲 Max-Heap Interactive Demo
        </h3>
        <div className="flex justify-center overflow-x-auto min-h-[320px]">
          <Tree />
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mt-4">
            <h4 className="text-lg font-bold mb-3 text-center">Heap Operations</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter value"
                    className="px-4 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <div className="flex gap-2">
                    <button onClick={insertNode} className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm">
                        Insert
                    </button>
                    <button onClick={extractMaxNode} className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm">
                       {poppedValue !== null ? `Popped ${poppedValue}!` : `Extract Max`}
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
};


export default function HeapPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  
  const { topic, category, sections } = heapData;
  const languages = ["python", "javascript", "java", "cpp", "c"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
          <p className="text-xl">{category}</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-white/20 rounded-full">🥇 Min-Heap</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🏆 Max-Heap</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🌲 Priority Queue</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎯 Why Heaps Matter
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* Min-Heap Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            🥇 Min-Heaps - Smallest on Top
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">💡 Understanding Min-Heaps</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.minHeap.concept}
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800 dark:text-green-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.minHeap.realWorldExample}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.minHeap.advantages.map((advantage, index) => (
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
                {sections.minHeap.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-green-300">🏢 Min-Heaps in Industry</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.minHeap.industry_applications.map((application, index) => (
                <div key={index} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-400 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-gray-700 dark:text-gray-300">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Max-Heap Section with Interactive Demo */}
        <section>
            <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              🏆 Max-Heaps - Biggest on Top
            </h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">💡 Understanding Max-Heaps</h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
                {sections.maxHeap.concept}
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  <span className="font-bold">Real-world example:</span> {sections.maxHeap.realWorldExample}
                </p>
              </div>
            </div>
            
            {/* Interactive Heap Visualization */}
            <HeapVisualization />

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
                <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
                <ul className="space-y-3">
                  {sections.maxHeap.advantages.map((advantage, index) => (
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
                  {sections.maxHeap.disadvantages.map((disadvantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                      <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">🏢 Max-Heaps in Industry</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.maxHeap.industry_applications.map((application, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400 hover:shadow-lg transition-shadow duration-300">
                    <p className="text-gray-700 dark:text-gray-300">{application}</p>
                  </div>
                ))}
              </div>
            </div>
        </section>
        
        {/* Performance Analysis */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
            ⚡ Performance Analysis
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <table className="w-full text-xs sm:text-sm md:text-base">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold">Operation</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold">Time</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {[
                  { op: "Find Min/Max", time: "O(1)", notes: "Always at the root of the tree." },
                  { op: "Insert Element", time: "O(log n)", notes: "Add to bottom, then 'sift-up'." },
                  { op: "Delete Min/Max", time: "O(log n)", notes: "Replace root with last element, then 'sift-down'." },
                  { op: "Search for Element", time: "O(n)", notes: "No specific order besides root, must check all nodes." },
                  { op: "Build Heap (Heapify)", time: "O(n)", notes: "Efficiently converts an array into a heap." }
                ].map((row) => (
                  <tr key={row.op} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-2 py-2 sm:px-4 sm:py-3 font-medium">{row.op}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
                      <span className={`px-2 py-1 rounded text-[10px] sm:text-xs font-mono ${
                        row.time === "O(1)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                        row.time === "O(log n)" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" :
                        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                      }`}>
                        {row.time}
                      </span>
                    </td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-gray-700 dark:text-gray-300 text-[11px] sm:text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            💻 Real-World Code Examples
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-700 p-4">
              <div className="flex flex-wrap justify-center gap-2">
                {languages.map((lang) => (
                  <button key={lang} onClick={() => setSelectedLanguage(lang)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedLanguage === lang ? "bg-rose-500 text-white shadow-lg" : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500"}`}>
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              <pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed">
                <code dangerouslySetInnerHTML={{ __html: highlightSyntax(sections.code_examples[selectedLanguage], selectedLanguage) }}/>
              </pre>
            </div>
          </div>
        </section>

        {/* Interview Questions */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
            🎤 Interview Questions & Answers
          </h2>
          <div className="space-y-4">
            {sections.interview_questions.map((qa, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <button onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === index ? -1 : index)} className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{qa.question}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${qa.difficulty === "Easy" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : qa.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"}`}>
                        {qa.difficulty}
                      </span>
                    </div>
                    <div className="ml-4">
                      <svg className={`w-6 h-6 transition-transform duration-200 ${selectedQuestionIndex === index ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </button>
                {selectedQuestionIndex === index && (
                  <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Answer:</strong> {qa.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* Project Ideas */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            🚀 Hands-on Project Ideas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.project_ideas.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-violet-500">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.difficulty === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : project.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"}`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{project.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Master Heaps Today! 🚀</h3>
          <p className="text-lg text-gray-300 mb-6">
            From OS scheduling to graph algorithms, the Heap is your key to handling priorities efficiently!
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full">📚 Learn</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">💻 Practice</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">🎯 Master</span>
          </div>
        </div>
      </footer>
    </div>
  );
}