import React, { useState } from "react";
import { HelpCircle, Rocket } from "lucide-react";

const LinkedList = () => {
  const [activeLanguage, setActiveLanguage] = useState("javascript");

  // Node model: { id, value }
  const [nodes, setNodes] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [animation, setAnimation] = useState("");
  const [autoId, setAutoId] = useState(4);

  const pushBack = () => {
    if (!inputValue.trim()) return;
    const value = parseInt(inputValue) || inputValue;
    setAnimation("append");
    setTimeout(() => {
      setNodes((prev) => [...prev, { id: autoId, value }]);
      setAutoId((x) => x + 1);
      setInputValue("");
      setSelectedIndex(nodes.length);
      setAnimation("");
    }, 300);
  };

  const pushFront = () => {
    if (!inputValue.trim()) return;
    const value = parseInt(inputValue) || inputValue;
    setAnimation("prepend");
    setTimeout(() => {
      setNodes((prev) => [{ id: autoId, value }, ...prev]);
      setAutoId((x) => x + 1);
      setInputValue("");
      setSelectedIndex(0);
      setAnimation("");
    }, 300);
  };

  const popFront = () => {
    if (nodes.length === 0) return;
    setAnimation("popFront");
    setTimeout(() => {
      setNodes((prev) => prev.slice(1));
      setSelectedIndex(0);
      setAnimation("");
    }, 300);
  };

  const popBack = () => {
    if (nodes.length === 0) return;
    setAnimation("popBack");
    setTimeout(() => {
      setNodes((prev) => prev.slice(0, -1));
      setSelectedIndex(Math.max(0, nodes.length - 2));
      setAnimation("");
    }, 300);
  };

  const codeExamples = {
    javascript: `// Singly Linked List in JavaScript
class Node { constructor(value){ this.value = value; this.next = null; } }
class LinkedList {
  constructor(){ this.head = null; this.length = 0; }
  pushFront(value){ const n = new Node(value); n.next = this.head; this.head = n; this.length++; }
  pushBack(value){ const n = new Node(value); if(!this.head){ this.head = n; } else { let cur=this.head; while(cur.next) cur = cur.next; cur.next = n; } this.length++; }
  popFront(){ if(!this.head) return null; const v = this.head.value; this.head = this.head.next; this.length--; return v; }
  popBack(){ if(!this.head) return null; if(!this.head.next){ const v=this.head.value; this.head=null; this.length--; return v;} let cur=this.head; while(cur.next.next) cur=cur.next; const v=cur.next.value; cur.next=null; this.length--; return v; }
  toArray(){ const arr=[]; let cur=this.head; while(cur){ arr.push(cur.value); cur=cur.next; } return arr; }
}
const ll = new LinkedList(); ll.pushBack(10); ll.pushFront(5); console.log(ll.toArray());`,

    java: `// Singly Linked List in Java
class Node { int value; Node next; Node(int v){ value=v; } }
class LinkedList { Node head; int length=0;
  void pushFront(int v){ Node n=new Node(v); n.next=head; head=n; length++; }
  void pushBack(int v){ Node n=new Node(v); if(head==null){ head=n; } else { Node c=head; while(c.next!=null) c=c.next; c.next=n; } length++; }
  Integer popFront(){ if(head==null) return null; int v=head.value; head=head.next; length--; return v; }
  Integer popBack(){ if(head==null) return null; if(head.next==null){ int v=head.value; head=null; length--; return v;} Node c=head; while(c.next.next!=null) c=c.next; int v=c.next.value; c.next=null; length--; return v; }
}`,

    python: `# Singly Linked List in Python
class Node:
  def __init__(self, value):
    self.value = value
    self.next = None

class LinkedList:
  def __init__(self):
    self.head = None
    self.length = 0
  def push_front(self, v):
    n = Node(v); n.next = self.head; self.head = n; self.length += 1
  def push_back(self, v):
    n = Node(v)
    if not self.head: self.head = n
    else:
      cur = self.head
      while cur.next: cur = cur.next
      cur.next = n
    self.length += 1
  def pop_front(self):
    if not self.head: return None
    v = self.head.value; self.head = self.head.next; self.length -= 1; return v
  def pop_back(self):
    if not self.head: return None
    if not self.head.next:
      v = self.head.value; self.head = None; self.length -= 1; return v
    cur = self.head
    while cur.next.next: cur = cur.next
    v = cur.next.value; cur.next = None; self.length -= 1; return v`,

    c: `// Singly Linked List in C
#include <stdio.h>
#include <stdlib.h>
typedef struct Node{ int value; struct Node* next; } Node;
Node* pushFront(Node* head, int v){ Node* n=malloc(sizeof(Node)); n->value=v; n->next=head; return n; }
Node* pushBack(Node* head, int v){ Node* n=malloc(sizeof(Node)); n->value=v; n->next=NULL; if(!head) return n; Node* c=head; while(c->next) c=c->next; c->next=n; return head; }
Node* popFront(Node* head){ if(!head) return NULL; Node* n=head->next; free(head); return n; }`,

    cpp: `// Singly Linked List in C++
#include <iostream>
struct Node{ int value; Node* next; Node(int v): value(v), next(nullptr) {} };
struct LinkedList{ Node* head=nullptr; int length=0; 
  void pushFront(int v){ Node* n=new Node(v); n->next=head; head=n; length++; }
  void pushBack(int v){ Node* n=new Node(v); if(!head){ head=n; } else { Node* c=head; while(c->next) c=c->next; c->next=n; } length++; }
};`
  };

  const industryExamples = [
    "- Memory Managers: Free-lists for dynamic allocation",
    "- Browsers: Navigation history as linked structures",
    "- Music Players: Playlists with next/prev navigation",
    "- Graphs: Adjacency lists for sparse graphs",
    "- LRU Cache: Doubly linked list for eviction order"
  ];

  const interviewQuestions = [
    { question: "Array vs Linked List trade-offs?", answer: "Arrays offer O(1) random access and better spatial locality; linked lists allow O(1) insertion/deletion at known nodes but O(n) access and extra pointer memory." },
    { question: "Detect a cycle in a linked list.", answer: "Use Floyd's tortoise and hare pointers; if they meet, a cycle exists. To find entry point, reset one pointer to head and move both one step until they meet again." },
    { question: "Reverse a linked list.", answer: "Iteratively rewire next pointers using three references: prev, curr, next. Time O(n), space O(1)." }
  ];

  const projects = [
    { title: "LRU Cache", difficulty: "Intermediate", description: "Build an LRU cache with HashMap + Doubly Linked List.", features: ["O(1) get/put", "Eviction policy", "Unit tests"] },
    { title: "Playlist Manager", difficulty: "Beginner", description: "Simulate a music playlist with next/prev operations.", features: ["Add/Remove", "Reorder", "Persistence"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Code Examples */}
        <div className="max-w-6xl mx-auto px-4 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Linked List - Linear Data Structure</h2>
          <p className="text-gray-400 mb-8 text-center text-lg">Understand Linked List implementation across languages</p>
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
        <div className="p-6 bg-gradient-to-r from-pink-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 rounded-xl border-2 border-pink-200 dark:border-rose-800">
          <h3 className="text-2xl font-bold mb-6 text-center text-pink-800 dark:text-pink-200">📚 Linked List Interactive Demo</h3>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {nodes.map((node, index) => (
                <div key={node.id} className="flex items-center gap-2">
                  <div
                    onClick={() => setSelectedIndex(index)}
                    className={`w-24 h-16 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-300 relative ${selectedIndex === index
                      ? "bg-pink-500 border-pink-600 text-white scale-110 shadow-lg"
                      : "bg-white dark:bg-gray-800 border-pink-300 dark:border-pink-600 text-pink-800 dark:text-pink-200 hover:scale-105"}
                      ${animation === 'append' && index === nodes.length - 1 ? 'animate-bounce' : ''}
                      ${animation === 'prepend' && index === 0 ? 'animate-bounce' : ''}
                      ${animation === 'popFront' && index === 0 ? 'animate-pulse opacity-50' : ''}
                      ${animation === 'popBack' && index === nodes.length - 1 ? 'animate-pulse opacity-50' : ''}`}
                  >
                    <span className="font-bold">{node.value}</span>
                    {index === 0 && (
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-pink-600 font-bold text-xs">HEAD</div>
                    )}
                    {index === nodes.length - 1 && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-pink-600 font-bold text-xs">TAIL</div>
                    )}
                  </div>
                  {index < nodes.length - 1 && <div className="w-10 h-1 bg-pink-500 rounded" />}
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
                  className="px-3 py-2 border-2 border-pink-300 dark:border-pink-600 rounded-lg focus:border-pink-500 focus:outline-none bg-white dark:bg-gray-800 text-pink-800 dark:text-pink-200"
                  onKeyPress={(e) => e.key === 'Enter' && pushBack()}
                />
                <button onClick={pushFront} disabled={!inputValue.trim()} className="px-4 py-2 bg-pink-500 hover:bg-pink-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200">Push Front</button>
                <button onClick={pushBack} disabled={!inputValue.trim()} className="px-4 py-2 bg-rose-500 hover:bg-rose-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200">Push Back</button>
              </div>
              <button onClick={popFront} disabled={nodes.length === 0} className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200">Pop Front</button>
              <button onClick={popBack} disabled={nodes.length === 0} className="px-4 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200">Pop Back</button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow w-full max-w-3xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
                <div><span className="text-gray-500">Size</span><div className="font-bold text-pink-600">{nodes.length}</div></div>
                <div><span className="text-gray-500">Selected Index</span><div className="font-bold text-pink-600">{nodes.length > 0 ? selectedIndex : 'N/A'}</div></div>
                <div><span className="text-gray-500">Head</span><div className="font-bold text-pink-600">{nodes.length > 0 ? nodes[0].value : 'Empty'}</div></div>
                <div><span className="text-gray-500">Tail</span><div className="font-bold text-pink-600">{nodes.length > 0 ? nodes[nodes.length - 1].value : 'Empty'}</div></div>
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
                "from-pink-600 to-red-500","from-purple-600 to-pink-500","from-rose-600 to-orange-500",
                "from-teal-600 to-green-500","from-indigo-600 to-purple-500","from-yellow-500 to-orange-500"
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

export default LinkedList;
