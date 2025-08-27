import React, { useState, useEffect } from "react";

const stackData = {
  topic: "Stack",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Imagine you're stacking plates in a restaurant kitchen - you always add new plates to the top and take plates from the top too. That's exactly how a Stack works in programming! It's a Last-In-First-Out (LIFO) data structure that's like a tower where you can only access the topmost element. From managing function calls in your programs to implementing the 'undo' feature in applications, stacks are the invisible backbone powering countless features you use daily!",

    // Stack Fundamentals
    fundamentals: {
      concept:
        "A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Think of it as a vertical container where elements are added (pushed) and removed (popped) only from the top. The last element added is the first one to be removed, making it perfect for managing nested operations and temporary storage.",
      realWorldExample:
        "Picture a stack of books on your desk - you can only add a new book to the top and take books from the top. Or think of the browser's back button history!",
      key_operations: [
        "🔼 Push - Add element to top",
        "🔽 Pop - Remove element from top",
        "👁️ Peek/Top - View top element without removing",
        "❓ isEmpty - Check if stack is empty",
        "📏 Size - Get number of elements"
      ],
      industry_applications: [
        "🌐 Browser - Back/Forward navigation history",
        "💻 Programming - Function call management (Call Stack)",
        "📝 Text Editors - Undo/Redo functionality",
        "🧮 Calculators - Expression evaluation and parsing",
        "🎮 Gaming - Save states and game history",
        "🏗️ Compilers - Syntax parsing and bracket matching",
        "🔐 Security - Balanced parentheses validation"
      ],
      advantages: [
        "⚡ O(1) push and pop operations",
        "💾 Memory efficient implementation",
        "🎯 Simple and intuitive structure",
        "🔄 Perfect for LIFO scenarios",
        "🛡️ Automatic memory management"
      ],
      disadvantages: [
        "🚫 No random access to elements",
        "📏 Limited access (only top element)",
        "💥 Stack overflow if size limit exceeded",
        "🔍 Linear search required for specific elements"
      ],
    },

    // Implementation Types
    implementation_types: {
      array_based: {
        concept: "Stack implemented using arrays with a top pointer indicating the current top element position.",
        advantages: ["Fast access", "Memory efficient", "Simple implementation"],
        disadvantages: ["Fixed size", "Stack overflow possibility", "Memory waste if underutilized"]
      },
      linked_list_based: {
        concept: "Stack implemented using linked list where head node represents the top of stack.",
        advantages: ["Dynamic size", "No overflow (memory permitting)", "Memory efficient"],
        disadvantages: ["Extra memory for pointers", "Slightly slower due to pointer dereferencing"]
      }
    },

    code_examples: {
      "c": "#include &lt;stdio.h&gt;\n#define MAX 5\n\nint stack[MAX], top = -1;\n\nvoid push(int x) {\n    if (top == MAX - 1) printf(\"Stack Overflow\\n\");\n    else stack[++top] = x;\n}\n\nvoid pop() {\n    if (top == -1) printf(\"Stack Underflow\\n\");\n    else printf(\"Popped: %d\\n\", stack[top--]);\n}\n\nvoid peek() {\n    if (top == -1) printf(\"Stack Empty\\n\");\n    else printf(\"Top: %d\\n\", stack[top]);\n}\n\nint main() {\n    push(10); push(20); push(30);\n    peek(); pop(); peek();\n    return 0;\n}",
    "cpp": "#include &lt;iostream&gt;\n#include &lt;stack&gt;\nusing namespace std;\n\nint main() {\n    stack&lt;int&gt; st;\n    st.push(10);\n    st.push(20);\n    st.push(30);\n\n    cout &lt;&lt; \"Top: \" &lt;&lt; st.top() &lt;&lt; endl;\n    st.pop();\n    cout &lt;&lt; \"Top after pop: \" &lt;&lt; st.top() &lt;&lt; endl;\n\n    return 0;\n}",
    "java": "import java.util.*;\n\npublic class StackDemo {\n    public static void main(String[] args) {\n        Stack&lt;Integer&gt; st = new Stack&lt;&gt;();\n        st.push(10);\n        st.push(20);\n        st.push(30);\n\n        System.out.println(\"Top: \" + st.peek());\n        st.pop();\n        System.out.println(\"Top after pop: \" + st.peek());\n    }\n}",
    "python": "stack = []\n\nstack.append(10)\nstack.append(20)\nstack.append(30)\n\nprint(\"Top:\", stack[-1])\nstack.pop()\nprint(\"Top after pop:\", stack[-1])",
    "javascript": "class Stack {\n  constructor() {\n    this.items = [];\n  }\n  push(x) { this.items.push(x); }\n  pop() { return this.items.pop(); }\n  peek() { return this.items[this.items.length - 1]; }\n  isEmpty() { return this.items.length === 0; }\n}\n\nconst st = new Stack();\nst.push(10);\nst.push(20);\nst.push(30);\n\nconsole.log(\"Top:\", st.peek());\nst.pop();\nconsole.log(\"Top after pop:\", st.peek());"
  },

    interview_questions: [
      {
        question: "What is the time complexity of push and pop operations in a stack?",
        answer:
          "Both push and pop operations have O(1) time complexity because they only involve adding or removing elements from one end (top) of the stack. No searching or shifting of elements is required.",
        difficulty: "Easy",
      },
      {
        question: "How would you implement two stacks using a single array?",
        answer:
          "Use two pointers: one starting from index 0 (stack1) growing rightward, and another starting from the last index (stack2) growing leftward. Stack overflow occurs when the pointers meet. Push/pop operations update respective pointers.",
        difficulty: "Medium",
      },
      {
        question: "Explain how function calls are managed using a call stack.",
        answer:
          "When a function is called, its activation record (parameters, local variables, return address) is pushed onto the call stack. When the function returns, its record is popped. This LIFO behavior naturally handles nested function calls and recursion.",
        difficulty: "Medium",
      },
      {
        question: "How can you sort a stack using only one additional stack?",
        answer:
          "Use a temporary stack. Pop elements from original stack, find correct position in temp stack by popping larger elements back to original, then insert. Repeat until original is empty. Finally, pop all from temp back to original.",
        difficulty: "Hard",
      },
      {
        question: "What is the difference between stack overflow and buffer overflow?",
        answer:
          "Stack overflow occurs when the call stack exceeds its memory limit (usually from infinite recursion). Buffer overflow is when data writes beyond allocated buffer boundaries, potentially overwriting adjacent memory including stack frames.",
        difficulty: "Hard",
      },
    ],

    project_ideas: [
      {
        "title": "Stack-Based Text Reversal Tool",
        "description": "Reads a string and reverses words/characters using a stack. Can be extended to check for palindromes.",
        "difficulty": "Beginner",
        "technologies": ["Python"]
      },
      {
        "title": "Infix to Postfix Expression Converter",
        "description": "Converts algebraic expressions from infix form (A+B)*C into postfix (AB+C*) using stack operations. Optionally evaluate the postfix expression.",
        "difficulty": "Intermediate",
        "technologies": ["Java"]
      },
      {
        "title": "Undo/Redo Text Editor",
        "description": "A console-based text editor with undo and redo functionality. Uses two stacks: one for undo history and one for redo history.",
        "difficulty": "Advanced",
        "technologies": ["Python"]
      },
      {
        "title": "Mini Virtual Machine with Call Stack",
        "description": "Implements a simple interpreter for arithmetic expressions, simulating a call stack for function execution and detecting recursion/stack overflow.",
        "difficulty": "Advanced",
        "technologies": ["C++"]
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

export default function EnhancedStackPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [stackElements, setStackElements] = useState([10, 20, 30, 40]);
  const [inputValue, setInputValue] = useState("");
  const [animatingIndex, setAnimatingIndex] = useState(-1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [operation, setOperation] = useState("");

  // Expression validation state
  const [expression, setExpression] = useState("({[]})");
  const [validationResult, setValidationResult] = useState(null);
  const [bracketStack, setBracketStack] = useState([]);

  const { topic, category, sections } = stackData;
  const languages = ["c", "cpp", "java", "python", "javascript"];

  // Animation effect
  useEffect(() => {
    if (animatingIndex >= 0) {
      const timer = setTimeout(() => setAnimatingIndex(-1), 500);
      return () => clearTimeout(timer);
    }
  }, [animatingIndex]);

  const pushElement = () => {
    if (inputValue !== "") {
      const newElement = parseInt(inputValue, 10) || 0;
      setStackElements([...stackElements, newElement]);
      setAnimatingIndex(stackElements.length);
      setOperation("PUSH");
      setInputValue("");

      setTimeout(() => setOperation(""), 1000);
    }
  };

  const popElement = () => {
    if (stackElements.length > 0) {
      setAnimatingIndex(stackElements.length - 1);
      setOperation("POP");

      setTimeout(() => {
        setStackElements(stackElements.slice(0, -1));
        setOperation("");
      }, 500);
    }
  };

  const peekElement = () => {
    if (stackElements.length > 0) {
      setAnimatingIndex(stackElements.length - 1);
      setOperation("PEEK");

      setTimeout(() => setOperation(""), 1000);
    }
  };

  const validateBrackets = () => {
    const pairs = { ')': '(', '}': '{', ']': '[' };
    const stack = [];
    let isValid = true;

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (['(', '{', '['].includes(char)) {
        stack.push(char);
      } else if ([')', '}', ']'].includes(char)) {
        if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
          isValid = false;
          break;
        }
        stack.pop();
      }
    }

    if (stack.length > 0) isValid = false;

    setValidationResult(isValid);
    setBracketStack([...stack]);
  };

  const StackVisualization = () => {
    const [stackElements, setStackElements] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [operation, setOperation] = useState(null);
    const [animatingIndex, setAnimatingIndex] = useState(null);

    const pushElement = () => {
      if (!isNaN(inputValue) && inputValue !== "") {
        const num = Number(inputValue);
        setStackElements([...stackElements, num]);
        setOperation("PUSH");
        setAnimatingIndex(stackElements.length);
        setTimeout(() => setAnimatingIndex(null), 800);
        setInputValue(""); // clear after push
      }
    };

    const popElement = () => {
      if (stackElements.length > 0) {
        const newStack = [...stackElements];
        newStack.pop();
        setStackElements(newStack);
        setOperation("POP");
        setAnimatingIndex(stackElements.length - 1);
        setTimeout(() => setAnimatingIndex(null), 800);
      }
    };

    const peekElement = () => {
      if (stackElements.length > 0) {
        setOperation("PEEK");
        setAnimatingIndex(stackElements.length - 1);
        setTimeout(() => setAnimatingIndex(null), 800);
      }
    };

    return (
      <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-bold mb-6 text-center text-purple-800 dark:text-purple-200">
          📚 Stack Interactive Demo
        </h3>

        {/* Stack Visual */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Stack Base */}
            <div className="w-32 h-4 bg-gray-400 rounded-b-lg"></div>

            {/* Stack Elements */}
            <div className="flex flex-col-reverse">
              {stackElements.map((value, index) => (
                <div
                  key={index}
                  className={`w-32 h-16 border-2 border-purple-400 dark:border-purple-600 flex items-center justify-center transition-all duration-500 ${animatingIndex === index
                      ? operation === "PUSH"
                        ? "bg-green-400 border-green-500 animate-bounce scale-110"
                        : operation === "POP"
                          ? "bg-red-400 border-red-500 animate-pulse scale-110"
                          : operation === "PEEK"
                            ? "bg-yellow-400 border-yellow-500 animate-pulse scale-110"
                            : "bg-purple-200 dark:bg-purple-700"
                      : "bg-purple-200 dark:bg-purple-700"
                    } ${index === stackElements.length - 1
                      ? "border-t-4 border-t-purple-600"
                      : ""
                    }`}
                  style={{
                    marginBottom: index === 0 ? "0px" : "-2px",
                    zIndex: stackElements.length - index,
                  }}
                >
                  <div className="font-bold text-lg text-purple-800 dark:text-purple-200">
                    {value}
                  </div>
                  {index === stackElements.length - 1 && (
                    <div className="absolute -right-16 text-sm text-purple-600 dark:text-purple-300 font-medium">
                      ← TOP
                    </div>
                  )}
                </div>
              ))}
            </div>

            {stackElements.length === 0 && (
              <div className="w-32 h-16 border-2 border-dashed border-gray-400 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Empty Stack</span>
              </div>
            )}
          </div>
        </div>

        {/* Operation Status */}
        {operation && (
          <div className="text-center mb-4">
            <span
              className={`px-4 py-2 rounded-lg font-bold text-white ${operation === "PUSH"
                  ? "bg-green-500"
                  : operation === "POP"
                    ? "bg-red-500"
                    : "bg-yellow-500"
                }`}
            >
              {operation} Operation
            </span>
          </div>
        )}

        {/* Stack Info */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <span className="text-sm text-gray-500">Stack Size</span>
              <div className="text-2xl font-bold text-purple-600">
                {stackElements.length}
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Top Element</span>
              <div className="text-2xl font-bold text-purple-600">
                {stackElements.length > 0
                  ? stackElements[stackElements.length - 1]
                  : "None"}
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Status</span>
              <div className="text-lg font-bold text-purple-600">
                {stackElements.length === 0 ? "Empty" : "Active"}
              </div>
            </div>
          </div>
        </div>

        {/* Stack Operations */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h4 className="text-lg font-bold mb-3 text-center">
            Stack Operations
          </h4>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="text" // changed from number to text
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value"
              className="px-4 py-2 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-purple-500 transition-colors duration-200"
            />
            <div className="flex gap-2">
              <button
                onClick={pushElement}
                disabled={!inputValue}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                📥 Push
              </button>
              <button
                onClick={popElement}
                disabled={stackElements.length === 0}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                📤 Pop
              </button>
              <button
                onClick={peekElement}
                disabled={stackElements.length === 0}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                👁️ Peek
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  const BracketValidator = () => {
  const [expression, setExpression] = React.useState("");
  const [validationResult, setValidationResult] = React.useState(null);
  const [bracketStack, setBracketStack] = React.useState([]);

  const validateBrackets = () => {
    const stack = [];
    const pairs = {
      ")": "(",
      "}": "{",
      "]": "[",
    };

    for (let char of expression) {
      if (["(", "{", "["].includes(char)) {
        stack.push(char);
      } else if ([")", "}", "]"].includes(char)) {
        if (stack.pop() !== pairs[char]) {
          setValidationResult(false);
          setBracketStack(stack);
          return;
        }
      }
    }

    const isValid = stack.length === 0;
    setValidationResult(isValid);
    setBracketStack(stack);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-amber-800 dark:text-amber-200">
        🔍 Bracket Validation Demo
      </h3>

      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Enter expression with brackets"
            className="flex-1 px-4 py-2 border-2 border-amber-300 dark:border-amber-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-amber-500 transition-colors duration-200"
          />
          <button
            onClick={validateBrackets}
            className="px-3 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500 to-orange-500 
             text-white text-sm sm:text-base rounded-lg 
             hover:from-amber-600 hover:to-orange-600 
             transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Validate
          </button>
        </div>

        {validationResult !== null && (
          <div
            className={`p-4 rounded-lg border-l-4 ${
              validationResult
                ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                : "bg-red-50 dark:bg-red-900/20 border-red-500"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`text-2xl ${
                  validationResult ? "text-green-600" : "text-red-600"
                }`}
              >
                {validationResult ? "✅" : "❌"}
              </span>
              <span
                className={`font-bold ${
                  validationResult
                    ? "text-green-800 dark:text-green-300"
                    : "text-red-800 dark:text-red-300"
                }`}
              >
                {validationResult
                  ? "Valid Expression!"
                  : "Invalid Expression!"}
              </span>
            </div>
            {bracketStack.length > 0 && !validationResult && (
              <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                Unmatched opening brackets: {bracketStack.join(", ")}
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
          {["()", "{}", "[]", "({[]})"].map((sample) => (
            <button
              key={sample}
              onClick={() => setExpression(sample)}
              className="p-2 bg-white dark:bg-gray-800 rounded border hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              {sample}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


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
              <span className="px-3 py-1 bg-white/20 rounded-full">📥 Push/Pop</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🔍 LIFO</span>
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
        Why Stacks Matter
    </span>
</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-purple-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* Stack Fundamentals */}
        <section>
      <h2 className="text-5xl font-bold mb-8 text-center">
    📚
    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Stack Fundamentals
    </span>
</h2>

          {/* Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-purple-500">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">💡 Understanding Stacks</h3>
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
          <StackVisualization />

          {/* Key Operations */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">🔧 Key Stack Operations</h3>
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
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">🏢 Stacks in Industry</h3>
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

        {/* Bracket Validation Demo */}
        <section>
         <h2 className="text-4xl font-bold mb-8 text-center">
    🔍
    <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
        Practical Application: Bracket Validation
    </span>
</h2>
          <BracketValidator />
        </section>

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
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${selectedLanguage === lang
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
                  stack_implementation.{selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage === 'python' ? 'py' : selectedLanguage === 'javascript' ? 'js' : selectedLanguage === 'java' ? 'java' : 'c'}
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
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            🎤 Interview Questions
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
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${qa.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
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
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
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
            Stacks are fundamental to computer science. Practice implementing them in different languages
            and explore their applications in real-world scenarios.
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

