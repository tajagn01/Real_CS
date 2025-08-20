import React, { useState } from 'react';
import { Code, Lightbulb, Building2, HelpCircle, Rocket } from 'lucide-react';

const Stack = () => {
  
 const [activeLanguage, setActiveLanguage] = useState('javascript');
  // Interactive demo state (migrated from unused StackVisualization)
  const [stack, setStack] = useState([10, 20, 30, 40]);
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(stack.length - 1);
  const [animation, setAnimation] = useState('');

  const push = () => {
    if (inputValue.trim() !== '') {
      const newValue = parseInt(inputValue) || inputValue;
      setAnimation('push');
      setTimeout(() => {
        setStack(prev => [...prev, newValue]);
        setSelectedIndex(prev => Math.max(0, prev + 1));
        setInputValue('');
        setAnimation('');
      }, 300);
    }
  };

  const pop = () => {
    if (stack.length > 0) {
      setAnimation('pop');
      setTimeout(() => {
        setStack(prev => prev.slice(0, -1));
        setSelectedIndex(prev => Math.max(0, stack.length - 2));
        setAnimation('');
      }, 300);
    }
  };

  const peek = () => {
    if (stack.length > 0) {
      setSelectedIndex(stack.length - 1);
      setAnimation('peek');
      setTimeout(() => setAnimation(''), 600);
    }
  };


  const stackData = {
    concept: {
      name: "Stack Data Structure in Industry",
      description: "A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. It's fundamental for managing function calls, expression evaluation, undo operations, and memory management in modern software systems.",
      definition: "A Stack is a way of organizing and storing data where elements are added and removed from the same end (top). An algorithm works with stacks to solve problems like expression evaluation, backtracking, and parsing. Together, Stack data structure enables developers to solve computational problems efficiently with O(1) operations for push, pop, and peek.",
      useCase: "- Google (Search Engines): Uses call stacks for recursive algorithms, expression parsing in search queries, and managing browser history navigation.\n" +
        "- Facebook / Instagram (Social Media): Use call stacks for React component rendering, undo functionality in post editing, and managing navigation states.\n" +
        "- Amazon (E-Commerce): Uses stacks for shopping cart operations, undo/redo in product customization, and managing user session states.\n" +
        "- Uber / Google Maps (Navigation): Use stacks for route backtracking algorithms, managing navigation history, and GPS coordinate processing.\n" +
        "- MySQL / PostgreSQL (Databases): Use call stacks for recursive query execution, transaction management, and rollback operations.\n" +
        "- Cloudflare (Cybersecurity): Uses stacks for parsing security rules, managing firewall states, and handling nested configuration structures.\n" +
        "- GCC / LLVM (Compilers): Use parsing stacks for syntax analysis, managing function call frames, and handling nested code blocks.\n" +
        "- Epic Games (Gaming): Uses stacks for game state management, undo systems in level editors, and managing recursive pathfinding algorithms.\n" +
        "- Bloomberg / Goldman Sachs (Finance): Use stacks for mathematical expression evaluation, managing trading algorithm states, and undo operations in trading platforms.\n" +
        "- Philips / Siemens (Healthcare): Use stacks for managing medical device states, undo functionality in imaging software, and recursive diagnostic algorithms.\n" +
        "- Microsoft Windows / Linux (Operating Systems): Use call stacks for system call management, process state handling, and memory allocation tracking.\n" +
        "- AWS / Azure (Cloud Computing): Use stacks for managing deployment states, CloudFormation/ARM template processing, and serverless function execution.\n" +
        "- Netflix (Streaming Platforms): Uses stacks for video player state management, subtitle processing, and content recommendation algorithm states.\n" +
        "- Tesla (Autonomous Vehicles): Uses stacks for sensor data processing states, decision-making algorithms, and managing autonomous driving contexts.\n" +
        "- Spotify (Music Recommendation): Uses stacks for playlist generation algorithms, music player state management, and undo functionality in playlist editing.\n" +
        "- LinkedIn (Professional Networking): Uses stacks for managing connection algorithms, job matching states, and activity feed processing.\n" +
        "- Adobe Photoshop (Image Processing): Uses stacks extensively for undo/redo operations, layer management, and filter processing pipelines.\n" +
        "- Salesforce (CRM Systems): Uses stacks for workflow state management, form processing, and managing complex business rule evaluations.\n" +
        "- Zoom / Microsoft Teams (Video Conferencing): Uses stacks for managing call states, screen sharing contexts, and audio/video processing pipelines."
    },
    domain: "Computer Science & Software Engineering",
    domainData: {
      importance: "Critical for managing program execution flow, implementing undo functionality, and enabling efficient recursive algorithm execution in software systems.",
      relatedTechnologies: [
        "Recursion",
        "Function Calls",
        "Expression Parsing",
        "Backtracking Algorithms",
        "Memory Management",
        "Compiler Design",
        "Browser Development",
        "Operating Systems"
      ],
      growthTrend: "Stack concepts remain fundamental due to their essential role in programming language implementation, web browsers, and modern software architecture."
    }
  };

  const codeExamples = {
    javascript: `// Stack Implementation in JavaScript
class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }
    
    // Push operation - O(1)
    push(element) {
        this.top++;
        this.items[this.top] = element;
        console.log(\`Pushed: \${element}\`);
    }
    
    // Pop operation - O(1)
    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow");
            return null;
        }
        const poppedElement = this.items[this.top];
        this.top--;
        console.log(\`Popped: \${poppedElement}\`);
        return poppedElement;
    }
    
    // Peek/Top operation - O(1)
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[this.top];
    }
    
    // Check if stack is empty
    isEmpty() {
        return this.top === -1;
    }
    
    // Get stack size
    size() {
        return this.top + 1;
    }
    
    // Display stack
    display() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
        }
        console.log("Stack:", this.items.slice(0, this.top + 1));
    }
}

// Usage Example
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // [10, 20, 30]
console.log("Top element:", stack.peek()); // 30
stack.pop(); // Removes 30
stack.display(); // [10, 20]`,

    java: `// Stack Implementation in Java
import java.util.Arrays;

public class Stack {
    private int[] items;
    private int top;
    private int capacity;
    
    // Constructor
    public Stack(int size) {
        this.capacity = size;
        this.items = new int[capacity];
        this.top = -1;
    }
    
    // Push operation - O(1)
    public void push(int element) {
        if (isFull()) {
            System.out.println("Stack Overflow");
            return;
        }
        items[++top] = element;
        System.out.println("Pushed: " + element);
    }
    
    // Pop operation - O(1)
    public int pop() {
        if (isEmpty()) {
            System.out.println("Stack Underflow");
            return -1;
        }
        int poppedElement = items[top--];
        System.out.println("Popped: " + poppedElement);
        return poppedElement;
    }
    
    // Peek/Top operation - O(1)
    public int peek() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return -1;
        }
        return items[top];
    }
    
    // Check if stack is empty
    public boolean isEmpty() {
        return top == -1;
    }
    
    // Check if stack is full
    public boolean isFull() {
        return top == capacity - 1;
    }
    
    // Get stack size
    public int size() {
        return top + 1;
    }
    
    // Display stack
    public void display() {
        if (isEmpty()) {
            System.out.println("Stack is empty");
            return;
        }
        System.out.println("Stack: " + Arrays.toString(Arrays.copyOfRange(items, 0, top + 1)));
    }
}`,

    python: `# Stack Implementation in Python
class Stack:
    def __init__(self):
        """Initialize an empty stack"""
        self.items = []
    
    # Push operation - O(1)
    def push(self, element):
        """Add an element to the top of the stack"""
        self.items.append(element)
        print(f"Pushed: {element}")
    
    # Pop operation - O(1)  
    def pop(self):
        """Remove and return the top element from the stack"""
        if self.is_empty():
            print("Stack Underflow")
            return None
        popped_element = self.items.pop()
        print(f"Popped: {popped_element}")
        return popped_element
    
    # Peek/Top operation - O(1)
    def peek(self):
        """Return the top element without removing it"""
        if self.is_empty():
            print("Stack is empty")
            return None
        return self.items[-1]
    
    # Check if stack is empty
    def is_empty(self):
        """Check if the stack is empty"""
        return len(self.items) == 0
    
    # Get stack size
    def size(self):
        """Return the number of elements in the stack"""
        return len(self.items)
    
    # Display stack
    def display(self):
        """Print all elements in the stack"""
        if self.is_empty():
            print("Stack is empty")
            return
        print("Stack:", self.items)

# Usage Example
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.display()  # [10, 20, 30]
print(f"Top element: {stack.peek()}")  # 30
stack.pop()  # Removes 30
stack.display()  # [10, 20]`,

    c: `// Stack Implementation in C
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];
    int top;
} Stack;

// Initialize stack
void initStack(Stack* stack) {
    stack->top = -1;
}

// Check if stack is empty
bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

// Check if stack is full
bool isFull(Stack* stack) {
    return stack->top == MAX_SIZE - 1;
}

// Push operation - O(1)
void push(Stack* stack, int element) {
    if (isFull(stack)) {
        printf("Stack Overflow\\n");
        return;
    }
    stack->items[++stack->top] = element;
    printf("Pushed: %d\\n", element);
}

// Pop operation - O(1)
int pop(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack Underflow\\n");
        return -1;
    }
    int poppedElement = stack->items[stack->top--];
    printf("Popped: %d\\n", poppedElement);
    return poppedElement;
}

// Peek/Top operation - O(1)
int peek(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return -1;
    }
    return stack->items[stack->top];
}

// Get stack size
int size(Stack* stack) {
    return stack->top + 1;
}

// Display stack
void display(Stack* stack) {
    if (isEmpty(stack)) {
        printf("Stack is empty\\n");
        return;
    }
    printf("Stack: [");
    for (int i = 0; i <= stack->top; i++) {
        printf("%d", stack->items[i]);
        if (i < stack->top) printf(", ");
    }
    printf("]\\n");
}`,

    cpp: `// Stack Implementation in C++
#include <iostream>
#include <vector>
#include <stdexcept>

template <typename T>
class Stack {
private:
    std::vector<T> items;
    
public:
    // Constructor
    Stack() {}
    
    // Push operation - O(1)
    void push(const T& element) {
        items.push_back(element);
        std::cout << "Pushed: " << element << std::endl;
    }
    
    // Pop operation - O(1)
    T pop() {
        if (isEmpty()) {
            throw std::runtime_error("Stack Underflow");
        }
        T poppedElement = items.back();
        items.pop_back();
        std::cout << "Popped: " << poppedElement << std::endl;
        return poppedElement;
    }
    
    // Peek/Top operation - O(1)
    T peek() const {
        if (isEmpty()) {
            throw std::runtime_error("Stack is empty");
        }
        return items.back();
    }
    
    // Check if stack is empty
    bool isEmpty() const {
        return items.empty();
    }
    
    // Get stack size
    size_t size() const {
        return items.size();
    }
    
    // Display stack
    void display() const {
        if (isEmpty()) {
            std::cout << "Stack is empty" << std::endl;
            return;
        }
        std::cout << "Stack: [";
        for (size_t i = 0; i < items.size(); ++i) {
            std::cout << items[i];
            if (i < items.size() - 1) std::cout << ", ";
        }
        std::cout << "]" << std::endl;
    }
};`
  };

  const industryExamples = stackData.concept.useCase.split("\n").filter(Boolean);

  const interviewQuestions = [
    {
      question: "What is a Stack and what are its main characteristics?",
      answer: "A Stack is a linear data structure that follows the Last In First Out (LIFO) principle. Main characteristics: 1) Elements are added and removed from the same end (top), 2) Only the top element is accessible, 3) Main operations are Push, Pop, and Peek with O(1) time complexity, 4) No random access to middle elements."
    },
    {
      question: "How do you implement two stacks in a single array?",
      answer: "Use two pointers: one starting from index 0 (stack1) growing rightward, and another from last index (stack2) growing leftward. Push operations increment/decrement respective pointers, pop operations do the reverse. Stack overflow occurs when pointers meet or cross each other."
    },
    {
      question: "What is the difference between Stack and Queue?",
      answer: "Stack follows LIFO (Last In First Out) principle where elements are added and removed from the same end. Queue follows FIFO (First In First Out) where elements are added at rear and removed from front. Stack has push/pop operations, Queue has enqueue/dequeue operations."
    },
    {
      question: "How do you reverse a string using Stack?",
      answer: "Push all characters of the string onto the stack one by one. Then pop all characters from stack and concatenate them to form the reversed string. This works because stack's LIFO nature automatically reverses the order of elements."
    },
    {
      question: "What are the applications of Stack in expression evaluation?",
      answer: "Stacks are used for: 1) Converting infix to postfix notation, 2) Evaluating postfix expressions, 3) Checking balanced parentheses, 4) Parsing mathematical expressions, 5) Handling operator precedence in compilers and calculators."
    },
    {
      question: "How do you find the next greater element using Stack?",
      answer: "Use a monotonic decreasing stack. Iterate through array, for each element: pop smaller elements from stack (they found their next greater), push current element. Elements remaining in stack have no next greater element. Time: O(n), Space: O(n)."
    },
    {
      question: "What is Stack Overflow and Stack Underflow?",
      answer: "Stack Overflow occurs when trying to push an element onto a full stack (in fixed-size implementation). Stack Underflow occurs when trying to pop or peek from an empty stack. Both are error conditions that need proper handling in stack implementation."
    },
    {
      question: "How do you implement a Stack with getMin() operation in O(1)?",
      answer: "Use an auxiliary stack to store minimum values. When pushing: if new element is smaller than current min, push it to both stacks; otherwise push to main stack only. When popping: if popped element equals top of min stack, pop from both stacks."
    }
  ];

  const projects = [
    {
      title: "Expression Evaluator Calculator",
      description: "Build a scientific calculator that evaluates complex mathematical expressions using stacks for operator precedence and parentheses handling.",
      features: ["Infix to Postfix conversion", "Postfix evaluation", "Parentheses balancing", "Operator precedence handling"],
      difficulty: "Intermediate"
    },
    {
      title: "Undo/Redo Text Editor",
      description: "Create a text editor with unlimited undo/redo functionality using two stacks to manage editing operations and states.",
      features: ["Text manipulation", "Command pattern", "State management", "Memory optimization"],
      difficulty: "Beginner"
    },
    {
      title: "Browser History Manager",
      description: "Implement a browser-like navigation system with forward/backward functionality using stacks to manage page history.",
      features: ["Page navigation", "History tracking", "Bookmark system", "URL validation"],
      difficulty: "Intermediate"
    },
    {
      title: "Function Call Tracer",
      description: "Build a debugging tool that traces function calls and returns in a program, showing the call stack and execution flow.",
      features: ["Call stack visualization", "Execution tracing", "Memory usage tracking", "Performance analysis"],
      difficulty: "Advanced"
    }
  ];

  

  return (

    
    <div className="min-h-screen bg-gray-900 text-white">
   

     <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">Stack</h1>
          <p className="text-xl">Organizing Data with Last-In, First-Out</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-white/20 rounded-full">🧠 Concepts</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🎬 Visualize</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🏭 Industry</span>
            </div>
          </div>
        </div>
      </header>
      
 <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      {/* Definition Section */}
     

      <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎯     What Does Stack Enable in Industry?
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
                {stackData.concept.definition}
            </p>
          </div>
        </section>

      {/* Code Understanding Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Stack - Linear Data Structure
        </h2>
        <p className="text-gray-400 mb-8 text-center text-lg max-w-4xl mx-auto">
          Understand Stack implementation with comprehensive examples across multiple programming languages
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Choose Programming Language:</h3>
          <div className="flex justify-center flex-wrap gap-3">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeLanguage === lang
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto mb-8">
          <pre className="text-sm">
            <code className="text-gray-300">
              {codeExamples[activeLanguage]}
            </code>
          </pre>
        </div>

        {/* Interactive Visualization */}
        <div className="bg-gray-800 rounded-lg p-6 mb-12">
          <h4 className="text-lg font-semibold text-white mb-4 text-center">Stack Interactive Demo</h4>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex flex-col items-center">
              <div className="text-orange-400 text-lg font-bold mb-2">Stack Operations</div>
              <div className="space-y-2">
                <div className="bg-red-600 text-white px-4 py-2 rounded text-center min-w-16">30</div>
                <div className="bg-blue-600 text-white px-4 py-2 rounded text-center min-w-16">20</div>
                <div className="bg-green-600 text-white px-4 py-2 rounded text-center min-w-16">10</div>
              </div>
              <div className="text-gray-400 text-sm mt-2">↑ Top of Stack</div>
            </div>
            <div className="text-gray-400">
              <div className="space-y-2">
                <div>• <span className="text-green-400">Push(30)</span> - Add to top</div>
                <div>• <span className="text-blue-400">Push(20)</span> - Add to top</div>
                <div>• <span className="text-purple-400">Push(10)</span> - Add to top</div>
                <div>• <span className="text-red-400">Pop()</span> - Remove from top</div>
                <div>• <span className="text-yellow-400">Peek()</span> - View top element</div>
              </div>
            </div>
          </div>
        </div>

         <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-green-800 dark:text-green-200">
        📚 Stack Interactive Demo
      </h3>

      {/* Stack Visualization */}
      <div className="flex justify-center mb-6">
        <div className="flex flex-col-reverse gap-2">
          {stack.map((value, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-20 h-16 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-300 relative ${
                selectedIndex === index
                  ? "bg-green-500 border-green-600 text-white scale-110 shadow-lg"
                  : "bg-white dark:bg-gray-800 border-green-300 dark:border-green-600 text-green-800 dark:text-green-200 hover:scale-105"
              } ${
                animation === 'push' && index === stack.length - 1 ? 'animate-bounce' : ''
              } ${
                animation === 'pop' && index === stack.length - 1 ? 'animate-pulse opacity-50' : ''
              } ${
                animation === 'peek' && index === stack.length - 1 ? 'animate-pulse bg-yellow-400' : ''
              }`}
            >
              <span className="font-bold">{value}</span>
              {index === stack.length - 1 && (
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-green-600 font-bold text-sm">
                  TOP
                </div>
              )}
            </div>
          ))}
          
          {/* Stack Base */}
          <div className="w-24 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
          <div className="text-center text-green-600 dark:text-green-400 font-bold text-sm mt-1">
            STACK
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value"
            className="px-3 py-2 border-2 border-green-300 dark:border-green-600 rounded-lg focus:border-green-500 focus:outline-none bg-white dark:bg-gray-800 text-green-800 dark:text-green-200"
            onKeyPress={(e) => e.key === 'Enter' && push()}
          />
          <button
            onClick={push}
            disabled={!inputValue.trim()}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200"
          >
            Push
          </button>
        </div>
        
        <button
          onClick={pop}
          disabled={stack.length === 0}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200"
        >
          Pop
        </button>
        
        <button
          onClick={peek}
          disabled={stack.length === 0}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors duration-200"
        >
          Peek
        </button>
      </div>

      {/* Stack Information */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <span className="text-gray-500">Size</span>
            <div className="font-bold text-green-600">{stack.length}</div>
          </div>
          <div>
            <span className="text-gray-500">Selected Index</span>
            <div className="font-bold text-green-600">
              {stack.length > 0 ? selectedIndex : 'N/A'}
            </div>
          </div>
          <div>
            <span className="text-gray-500">Top Value</span>
            <div className="font-bold text-green-600">
              {stack.length > 0 ? stack[stack.length - 1] : 'Empty'}
            </div>
          </div>
          <div>
            <span className="text-gray-500">Status</span>
            <div className="font-bold text-green-600">
              {stack.length === 0 ? 'Empty' : 'Active'}
            </div>
          </div>
        </div>
      </div>

      {/* Stack Operations Info */}
      <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
        <div className="text-sm text-green-700 dark:text-green-300">
          <strong>Stack Operations:</strong>
          <div className="mt-1">
            • <strong>Push:</strong> Add element to top • <strong>Pop:</strong> Remove top element • <strong>Peek:</strong> View top element
          </div>
        </div>
      </div>
    </div>

      </div>

      {/* Industry Use Cases */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Industry Applications & Company Examples
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryExamples.map((example, idx) => {
            const gradients = [
              "from-green-600 to-blue-500",
              "from-blue-600 to-cyan-500", 
              "from-purple-600 to-pink-500",
              "from-orange-600 to-red-500",
              "from-teal-600 to-green-500",
              "from-yellow-500 to-orange-500",
              "from-red-500 to-pink-500",
              "from-indigo-600 to-purple-500",
              "from-cyan-600 to-blue-500",
              "from-pink-600 to-red-500",
              "from-emerald-600 to-teal-500",
              "from-violet-600 to-purple-500",
              "from-amber-600 to-orange-500",
              "from-rose-600 to-pink-500",
              "from-sky-600 to-blue-500",
              "from-lime-600 to-green-500",
              "from-fuchsia-600 to-purple-500",
              "from-orange-500 to-red-500",
              "from-teal-500 to-cyan-500"
            ];
            const [company, description] = example
              .replace(/^- /, "")
              .split(":");
            return (
              <div
                key={idx}
                className={`bg-gradient-to-r ${gradients[idx % gradients.length]} rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <span className="block font-bold text-white text-xl mb-2">
                  {company.trim()}
                </span>
                <p className="text-white text-md">{description.trim()}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Domain Importance & Related Tech */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Why Stack Matters for Modern Tech
          </h2>
          <p className="text-gray-300 mb-6 text-center text-lg">
            {stackData.domainData.importance}
          </p>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-12">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-blue-400 mb-3 text-center text-xl">
                Related Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {stackData.domainData.relatedTechnologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-3 text-center text-xl">
                Growth Trend
              </h3>
              <p className="text-gray-300 max-w-xs">
                {stackData.domainData.growthTrend}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interview Questions */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <HelpCircle className="inline-block mr-3 text-orange-400" size={32} />
          Interview Questions & Answers
        </h2>
        <p className="text-gray-400 mb-12 text-center text-lg">
          Master these essential Stack interview questions to crack your next coding interview
        </p>
        
        <div className="space-y-6">
          {interviewQuestions.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">
                Q{index + 1}: {item.question}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-green-400">Answer:</strong> {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <Rocket className="inline-block mr-3 text-pink-400" size={32} />
          Hands-on Project Ideas
        </h2>
        <p className="text-gray-400 mb-12 text-center text-lg">
          Build these projects to master Stack concepts and showcase your skills to potential employers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.difficulty === 'Beginner' ? 'bg-green-600 text-white' :
                  project.difficulty === 'Intermediate' ? 'bg-yellow-600 text-white' :
                  'bg-red-600 text-white'
                }`}>
                  {project.difficulty}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-400">Key Features:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
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
          <p className="text-gray-400 text-center text-sm">
            © 2025 The Real CS. Master every corner of computer science.
          </p>
        </div>
      </footer>
      </main>
    </div>
    
  );
};


export default Stack;