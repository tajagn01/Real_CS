import React, { useState } from "react";
import { HelpCircle, Rocket } from "lucide-react";

const Queue = () => {
  const [activeLanguage, setActiveLanguage] = useState("javascript");

  // Interactive demo state
  const [queue, setQueue] = useState([5, 10, 15, 20]);
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animation, setAnimation] = useState("");

  const enqueue = () => {
    if (inputValue.trim() !== "") {
      const newValue = parseInt(inputValue) || inputValue;
      setAnimation("enqueue");
      setTimeout(() => {
        setQueue((prev) => [...prev, newValue]);
        setSelectedIndex(queue.length);
        setInputValue("");
        setAnimation("");
      }, 300);
    }
  };

  const dequeue = () => {
    if (queue.length > 0) {
      setAnimation("dequeue");
      setTimeout(() => {
        setQueue((prev) => prev.slice(1));
        setSelectedIndex(0);
        setAnimation("");
      }, 300);
    }
  };

  const front = () => {
    if (queue.length > 0) {
      setSelectedIndex(0);
      setAnimation("peek");
      setTimeout(() => setAnimation("") , 600);
    }
  };

  const rear = () => {
    if (queue.length > 0) {
      setSelectedIndex(queue.length - 1);
      setAnimation("peek");
      setTimeout(() => setAnimation("") , 600);
    }
  };

  const codeExamples = {
    javascript: `// Queue Implementation in JavaScript (Array based)
class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue - O(1)
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue - O(n) with array shift (demo-friendly)
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  // Front - O(1)
  front() {
    return this.isEmpty() ? null : this.items[0];
  }

  // Rear - O(1)
  rear() {
    return this.isEmpty() ? null : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const q = new Queue();
q.enqueue(10); q.enqueue(20); q.enqueue(30);
console.log(q.front()); // 10
q.dequeue();
console.log(q.front()); // 20`,

    java: `// Queue Implementation in Java (using circular array)
public class Queue {
  private int[] items;
  private int front, rear, size, capacity;

  public Queue(int capacity) {
    this.capacity = capacity;
    items = new int[capacity];
    front = 0; rear = -1; size = 0;
  }

  public void enqueue(int element) {
    if (isFull()) throw new RuntimeException("Queue Overflow");
    rear = (rear + 1) % capacity;
    items[rear] = element; size++;
  }

  public int dequeue() {
    if (isEmpty()) throw new RuntimeException("Queue Underflow");
    int val = items[front];
    front = (front + 1) % capacity; size--; return val;
  }

  public int front() { if (isEmpty()) return -1; return items[front]; }
  public int rear() { if (isEmpty()) return -1; return items[rear]; }
  public boolean isEmpty() { return size == 0; }
  public boolean isFull() { return size == capacity; }
  public int size() { return size; }
}`,

    python: `# Queue Implementation in Python (collections.deque)
from collections import deque

class Queue:
  def __init__(self):
    self.items = deque()

  def enqueue(self, element):
    self.items.append(element)

  def dequeue(self):
    if self.is_empty():
      return None
    return self.items.popleft()

  def front(self):
    return None if self.is_empty() else self.items[0]

  def rear(self):
    return None if self.is_empty() else self.items[-1]

  def is_empty(self):
    return len(self.items) == 0

  def size(self):
    return len(self.items)

q = Queue(); q.enqueue(10); q.enqueue(20); q.enqueue(30)
print(q.front())  # 10
q.dequeue()
print(q.front())  # 20`,

    c: `// Queue in C using circular array
#include <stdio.h>
#include <stdbool.h>
#define CAP 100

typedef struct { int items[CAP]; int front, rear, size; } Queue;

void init(Queue* q){ q->front = 0; q->rear = -1; q->size = 0; }
bool isEmpty(Queue* q){ return q->size == 0; }
bool isFull(Queue* q){ return q->size == CAP; }
void enqueue(Queue* q, int x){ if(isFull(q)) return; q->rear=(q->rear+1)%CAP; q->items[q->rear]=x; q->size++; }
int dequeue(Queue* q){ if(isEmpty(q)) return -1; int v=q->items[q->front]; q->front=(q->front+1)%CAP; q->size--; return v; }
int front(Queue* q){ return isEmpty(q)?-1:q->items[q->front]; }
int rear(Queue* q){ return isEmpty(q)?-1:q->items[q->rear]; }`,

    cpp: `// Queue in C++ using std::queue
#include <queue>
#include <iostream>

int main(){
  std::queue<int> q;
  q.push(10); q.push(20); q.push(30);
  std::cout << q.front() << "\n"; // 10
  q.pop();
  std::cout << q.front() << "\n"; // 20
  return 0;
}`
  };

  const industryExamples = [
    "- Operating Systems: CPU task scheduling and ready queues",
    "- Networking: Packet buffering and rate limiting",
    "- Printing Systems: Printer job spooling",
    "- Web Servers: Request handling pipelines",
    "- BFS Algorithms: Level-order traversal of graphs/trees",
    "- Messaging: Kafka/RabbitMQ topic partitions"
  ];

  const interviewQuestions = [
    { question: "What is FIFO and how does a queue implement it?",
      answer: "FIFO means the first element inserted is the first removed. Queue supports this via enqueue at rear and dequeue from front." },
    { question: "How do you implement a circular queue?",
      answer: "Use a fixed-size array with front/rear pointers wrapping around using modulo arithmetic, and maintain size to detect full/empty." },
    { question: "Implement a queue using two stacks.",
      answer: "Use an input stack for enqueue; for dequeue, if output stack is empty, move all items from input to output, then pop from output." },
    { question: "What are real-world use cases of queues?",
      answer: "Task scheduling, IO buffering, breadth-first search, producer-consumer systems, and rate limiting." }
  ];

  const projects = [
    { title: "Task Scheduler Simulator", difficulty: "Intermediate", description: "Simulate CPU scheduling (FCFS, Round-Robin) using queues.", features: ["FCFS/RR policies", "Gantt chart", "Throughput metrics"] },
    { title: "Print Spooler", difficulty: "Beginner", description: "Queue print jobs with priorities and simulate processing.", features: ["Enqueue/Dequeue", "Priorities", "Job history"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Code Examples */}
        <div className="max-w-6xl mx-auto px-4 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Queue - Linear Data Structure</h2>
          <p className="text-gray-400 mb-8 text-center text-lg">Understand Queue implementation across languages</p>
          <div className="flex justify-center flex-wrap gap-3 mb-6">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeLanguage === lang ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
          <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto mb-12">
            <pre className="text-sm"><code className="text-gray-300">{codeExamples[activeLanguage]}</code></pre>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="p-6 bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-xl border-2 border-sky-200 dark:border-sky-800">
          <h3 className="text-2xl font-bold mb-6 text-center text-sky-800 dark:text-sky-200">📚 Queue Interactive Demo</h3>
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {queue.map((value, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-20 h-16 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-300 relative ${selectedIndex === index
                    ? "bg-blue-500 border-blue-600 text-white scale-110 shadow-lg"
                    : "bg-white dark:bg-gray-800 border-blue-300 dark:border-blue-600 text-blue-800 dark:text-blue-200 hover:scale-105"
                  } ${animation === 'enqueue' && index === queue.length - 1 ? 'animate-bounce' : ''}
                    ${animation === 'dequeue' && index === 0 ? 'animate-pulse opacity-50' : ''}
                    ${animation === 'peek' && index === selectedIndex ? 'animate-pulse bg-yellow-400' : ''}`}
                >
                  <span className="font-bold">{value}</span>
                  {index === 0 && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-blue-600 font-bold text-xs">FRONT</div>
                  )}
                  {index === queue.length - 1 && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-blue-600 font-bold text-xs">REAR</div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter value"
                  className="px-3 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg focus:border-blue-500 focus:outline-none bg-white dark:bg-gray-800 text-blue-800 dark:text-blue-200"
                  onKeyPress={(e) => e.key === 'Enter' && enqueue()}
                />
                <button onClick={enqueue} disabled={!inputValue.trim()} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200">Enqueue</button>
              </div>
              <button onClick={dequeue} disabled={queue.length === 0} className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200">Dequeue</button>
              <button onClick={front} disabled={queue.length === 0} className="px-4 py-2 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200">Front</button>
              <button onClick={rear} disabled={queue.length === 0} className="px-4 py-2 bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200">Rear</button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow w-full max-w-3xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                <div><span className="text-gray-500">Size</span><div className="font-bold text-blue-600">{queue.length}</div></div>
                <div><span className="text-gray-500">Selected Index</span><div className="font-bold text-blue-600">{queue.length > 0 ? selectedIndex : 'N/A'}</div></div>
                <div><span className="text-gray-500">Front Value</span><div className="font-bold text-blue-600">{queue.length > 0 ? queue[0] : 'Empty'}</div></div>
                <div><span className="text-gray-500">Rear Value</span><div className="font-bold text-blue-600">{queue.length > 0 ? queue[queue.length - 1] : 'Empty'}</div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Use Cases */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Industry Applications & Company Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryExamples.map((example, idx) => {
              const gradients = [
                "from-sky-600 to-blue-500","from-blue-600 to-cyan-500","from-purple-600 to-pink-500",
                "from-teal-600 to-green-500","from-yellow-500 to-orange-500","from-indigo-600 to-purple-500"
              ];
              const [company, description] = example.replace(/^- /, "").split(":");
              return (
                <div key={idx} className={`bg-gradient-to-r ${gradients[idx % gradients.length]} rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <span className="block font-bold text-white text-xl mb-2">{company ? company.trim() : 'Use Case'}</span>
                  <p className="text-white text-md">{description ? description.trim() : example.replace(/^- /, '')}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interview Questions */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <HelpCircle className="inline-block mr-3 text-orange-400" size={32} />
            Interview Questions & Answers
          </h2>
          <div className="space-y-6">
            {interviewQuestions.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Q{index + 1}: {item.question}</h3>
                <p className="text-gray-300 leading-relaxed"><strong className="text-green-400">Answer:</strong> {item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <Rocket className="inline-block mr-3 text-pink-400" size={32} />
            Hands-on Project Ideas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.difficulty === 'Beginner' ? 'bg-green-600 text-white' : project.difficulty === 'Intermediate' ? 'bg-yellow-600 text-white' : 'bg-red-600 text-white'}`}>{project.difficulty}</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-400">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.features.map((feature, idx) => (<li key={idx}>• {feature}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="text-white font-semibold">The Real CS</span>
            </div>
            <p className="text-gray-400 text-center text-sm">© 2025 The Real CS. Master every corner of computer science.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Queue;
