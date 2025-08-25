import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, Play, Pause, ArrowRight, Code, Brain, Target, Rocket, Folder, BookOpen, RotateCcw, StepForward, Eye, EyeOff } from 'lucide-react';

const Recursion = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);

  const [copiedCode, setCopiedCode] = useState('');
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };


  //ind. application 
  const sections1 = {
    recursion: {
      industry_applications: [
        {
          title: "Google Search",
          color: "#ef4444", // red
          points: [
            "Web crawling algorithms recursively follow links",
            "PageRank algorithm uses recursive calculations",
            "Search tree traversal for query optimization",
          ],
        },
        {
          title: "Facebook / Meta",
          color: "#3b82f6", // blue
          points: [
            "Social graph traversal (friends of friends)",
            "News feed algorithm uses recursive sorting",
            "Comment thread nesting and replies",
          ],
        },
        {
          title: "File Systems",
          color: "#22c55e", // green
          points: [
            "Directory traversal (Windows, macOS, Linux)",
            "File search operations",
            "Backup and synchronization tools",
          ],
        },
        {
          title: "Gaming Industry",
          color: "#a855f7", // purple
          points: [
            "AI decision trees (Chess, Go)",
            "Pathfinding algorithms",
            "Procedural content generation",
          ],
        },
        {
          title: "Data Compression",
          color: "#f97316", // orange
          points: [
            "Recursive Huffman coding",
            "Image compression (quadtree decomposition)",
            "Recursive run-length encoding",
          ],
        },
        {
          title: "Networking",
          color: "#06b6d4", // cyan
          points: [
            "Recursive DNS lookups",
            "Packet routing through recursive algorithms",
            "Recursive parsing of network protocols",
          ],
        },
        {
          title: "Compiler Design",
          color: "#eab308", // yellow
          points: [
            "Recursive descent parsing",
            "Expression tree generation",
            "Syntax checking via recursion",
          ],
        },
        {
          title: "Artificial Intelligence",
          color: "#9333ea", // violet
          points: [
            "Recursive search in decision trees",
            "Minimax algorithm in game AI",
            "Recursive neural network architectures",
          ],
        },
        {
          title: "Cybersecurity",
          color: "#0ea5e9", // sky blue
          points: [
            "Recursive scanning for malware patterns",
            "Recursive log analysis for threat detection",
            "Recursive traversal in penetration testing",
          ],
        },
      ],
    },
  };



  const highlightSyntax = (code, language) => {
    const keywords = {
      c: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'printf', 'include', 'main'],
      cpp: ['include','int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'cout', 'cin', 'using', 'namespace', 'std', 'include', 'main', 'string'],
      java: ['public', 'private', 'static', 'void', 'int', 'double', 'String', 'class', 'return', 'if', 'else', 'for', 'while', 'System', 'main', 'println', 'printf'],
      python: ['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'class', 'print', 'len', 'range', 'True', 'False', 'None'],
      javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class', 'this', 'console', 'log', 'true', 'false', 'null', 'undefined']
    };

    const strings = /"[^"]*"|'[^']*'|`[^`]*`/g;
    const comments = language.toLowerCase() === 'python' ? /#.*$/gm : /\/\/.*$|\/\*[\s\S]*?\*\//gm;
    const numbers = /\b\d+\.?\d*\b/g;

    let highlightedCode = code;

    // Strings → green
    highlightedCode = highlightedCode.replace(strings, m => `<span style="color: #22c55e;">${m}</span>`);
    // Comments → gray
    highlightedCode = highlightedCode.replace(comments, m => `<span style="color: #6b7280;">${m}</span>`);
    // Numbers → orange
    highlightedCode = highlightedCode.replace(numbers, m => `<span style="color: #f97316;">${m}</span>`);

    // Keywords → blue
    const lang = language.toLowerCase();
    if (keywords[lang]) {
      keywords[lang].forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        highlightedCode = highlightedCode.replace(regex, `<span style="color: #3b82f6;">${keyword}</span>`);
      });
    }

    return highlightedCode;
  };

  //questions
  const sections = {
    interview_questions: [
      {
        question: "What is recursion?",
        answer: "A function calling itself to solve smaller subproblems.",
        difficulty: "Easy",
      },
      {
        question: "How do you optimize a recursive function?",
        answer: "Use memoization or convert it to dynamic programming.",
        difficulty: "Medium",
      },
      {
        question: "Explain the N-Queens problem.",
        answer: "Place N queens on an N×N board so none attack each other.",
        difficulty: "Hard",
      },
      {
        question: "What are base and recursive cases?",
        answer: "Base case stops recursion; recursive case breaks problem down.",
        difficulty: "Easy",
      },
      {
        question: "How does recursion differ from iteration?",
        answer: "Recursion uses the call stack; iteration uses loops.",
        difficulty: "Medium",
      },
    ],
  };


  // Enhanced recursion tracer with more features
  const useRecursionTracer = () => {
    const [traceSteps, setTraceSteps] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speed, setSpeed] = useState(1000);
    const timerRef = useRef(null);

    const buildTrace = (n) => {
      const steps = [];
      let depth = 0;
      const factorialTrace = (k) => {
        depth++;
        steps.push({
          type: 'call',
          label: `factorial(${k})`,
          depth: depth - 1,
          value: k
        });

        if (k <= 1) {
          steps.push({
            type: 'return',
            label: `return 1`,
            depth: depth - 1,
            value: 1
          });
          depth--;
          return 1;
        }

        const sub = factorialTrace(k - 1);
        const res = k * sub;
        steps.push({
          type: 'return',
          label: `return ${res}`,
          depth: depth - 1,
          value: res
        });
        depth--;
        return res;
      };

      const value = factorialTrace(n);
      return { steps, value };
    };

    const start = (n) => {
      if (timerRef.current) clearInterval(timerRef.current);
      const { steps } = buildTrace(n);
      setTraceSteps(steps);
      setCurrentIndex(0);
      setIsPlaying(false);
    };

    const next = () => setCurrentIndex((i) => Math.min(i + 1, traceSteps.length - 1));
    const prev = () => setCurrentIndex((i) => Math.max(i - 1, 0));
    const reset = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      setCurrentIndex(0);
      setIsPlaying(false);
    };

    useEffect(() => {
      if (!isPlaying) return;
      if (traceSteps.length === 0) return;

      timerRef.current = setInterval(() => {
        setCurrentIndex((i) => {
          if (i >= traceSteps.length - 1) {
            setIsPlaying(false);
            return i;
          }
          return i + 1;
        });
      }, speed);

      return () => timerRef.current && clearInterval(timerRef.current);
    }, [isPlaying, traceSteps, speed]);

    const stackAt = (idx) => {
      const stack = [];
      for (let i = 0; i <= idx && i < traceSteps.length; i++) {
        const step = traceSteps[i];
        if (step.type === 'call') {
          stack.push(step);
        } else if (step.type === 'return') {
          if (stack.length > 0) stack.pop();
        }
      }
      return stack;
    };

    const isFinished = traceSteps.length > 0 && currentIndex >= traceSteps.length - 1;

    return {
      start, next, prev, reset, isPlaying, setIsPlaying,
      currentIndex, traceSteps, speed, setSpeed,
      currentStep: traceSteps[currentIndex],
      stack: stackAt(currentIndex),
      isFinished
    };
  };

  // Enhanced Factorial Animation with more visual elements
  const FactorialAnimation = () => {
    const [step, setStep] = useState(0);
    const [showExplanation, setShowExplanation] = useState(true);

    const steps = [
      {
        equation: 'factorial(4)',
        explanation: 'Start with factorial(4) - we need to find 4!',
        color: 'text-blue-400'
      },
      {
        equation: 'factorial(4) = 4 × factorial(3)',
        explanation: 'Break down: 4! = 4 × 3!',
        color: 'text-purple-400'
      },
      {
        equation: 'factorial(4) = 4 × 3 × factorial(2)',
        explanation: 'Continue breaking down: 3! = 3 × 2!',
        color: 'text-pink-400'
      },
      {
        equation: 'factorial(4) = 4 × 3 × 2 × factorial(1)',
        explanation: 'Keep going: 2! = 2 × 1!',
        color: 'text-orange-400'
      },
      {
        equation: 'factorial(4) = 4 × 3 × 2 × 1',
        explanation: 'Base case reached: 1! = 1',
        color: 'text-green-400'
      },
      {
        equation: 'factorial(4) = 24',
        explanation: 'Calculate final result: 4 × 3 × 2 × 1 = 24',
        color: 'text-cyan-400'
      }
    ];

    useEffect(() => {
      if (!isAnimationPlaying) return;

      const interval = setInterval(() => {
        setStep((prev) => (prev + 1) % steps.length);
      }, 2500);
      return () => clearInterval(interval);
    }, [isAnimationPlaying]);

    return (
      <div className="bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-gray-700 mb-8 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-semibold text-white flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-400" />
            Interactive Factorial Animation
          </h4>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm border border-gray-600"
            >
              {showExplanation ? <EyeOff size={16} /> : <Eye size={16} />}
              {showExplanation ? 'Hide' : 'Show'} Details
            </button>
            <button
              onClick={() => setIsAnimationPlaying(!isAnimationPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              {isAnimationPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isAnimationPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className={`text-3xl font-mono font-bold mb-4 transition-all duration-500 ${steps[step]?.color || 'text-green-400'}`}>
            {steps[step]?.equation}
          </div>

          {showExplanation && (
            <div className="text-gray-300 text-lg mb-6 min-h-[3rem] flex items-center justify-center">
              {steps[step]?.explanation}
            </div>
          )}

          <div className="flex justify-center gap-2 mb-4">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setStep(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${index === step
                  ? 'bg-blue-500 scale-125'
                  : index < step
                    ? 'bg-blue-400 opacity-60'
                    : 'bg-gray-600'
                  }`}
              />
            ))}
          </div>

          <div className="text-sm text-gray-400">
            Step {step + 1} of {steps.length}
          </div>
        </div>
      </div>
    );
  };

  // Enhanced code snippets
const codeSnippets = {
  java: {
    label: "Java",
    code: `public class FactorialExample {
    public static int factorial(int n) {
        if (n <= 1)
            return 1;
        else
            return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(factorial(5)); // Output: 120
    }
}`
  },
  cpp: {
    label: "C++",
    code: `#include &lt;iostream&gt;
using namespace std;

int factorial(int n) {
    if (n <= 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    cout &lt;&lt; factorial(5); // Output: 120
    return 0;
}`
  },
  c: {
    label: "C",
    code: `#include &lt;stdio.h&gt;

int factorial(int n) {
    if (n &lt;= 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    printf("%d", factorial(5)); // Output: 120
    return 0;
}`
  },
  python: {
    label: "Python",
    code: `def factorial(n):
    if n &lt;= 1:
        return 1
    return n * factorial(n - 1)

if __name__ == "__main__":
    print(factorial(5))  # Output: 120`
  },
  javascript: {
    label: "JavaScript",
    code: `function factorial(n) {
  if (n &lt;= 1) return 1;
  return n * factorial(n - 1);
}

function main() {
  console.log(factorial(5)); // Output: 120
}

main();`
  }
};



  const powerSnippets = {
    javascript: {
      label: "JavaScript",
      code: `function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  if (exponent % 2 === 0) {
    let half = power(base, exponent / 2);
    return half * half;
  } else {
    return base * power(base, exponent - 1);
  }
}
// Time Complexity: O(log n)`
    },
    python: {
      label: "Python",
      code: `def power(base, exponent):
    if exponent == 0:
        return 1
    if exponent == 1:
        return base
    if exponent % 2 == 0:
        half = power(base, exponent // 2)
        return half * half
    else:
        return base * power(base, exponent - 1)
# Time Complexity: O(log n)`
    },
    c: {
      label: "C",
      code: `int power(int base, int exponent) {
  if (exponent == 0) return 1;
  if (exponent == 1) return base;
  if (exponent % 2 == 0) {
    int half = power(base, exponent / 2);
    return half * half;
  } else {
    return base * power(base, exponent - 1);
  }
}
// Time Complexity: O(log n)`
    },
    cpp: {
      label: "C++",
      code: `int power(int base, int exponent) {
  if (exponent == 0) return 1;
  if (exponent == 1) return base;
  if (exponent % 2 == 0) {
    int half = power(base, exponent / 2);
    return half * half;
  } else {
    return base * power(base, exponent - 1);
  }
}
// Time Complexity: O(log n)`
    },
    java: {
      label: "Java",
      code: `public static int power(int base, int exponent) {
  if (exponent == 0) return 1;
  if (exponent == 1) return base;
  if (exponent % 2 == 0) {
    int half = power(base, exponent / 2);
    return half * half;
  } else {
    return base * power(base, exponent - 1);
  }
}
// Time Complexity: O(log n)`
    }
  };

  const parenthesesSnippets = {
    javascript: {
      label: "JavaScript",
      code: `function generateParentheses(n) {
  const result = [];
  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    if (open < n) backtrack(current + '(', open + 1, close);
    if (close < open) backtrack(current + ')', open, close + 1);
  }
  backtrack('', 0, 0);
  return result;
}`
    },
    python: {
      label: "Python",
      code: `def generate_parentheses(n):
    result = []
    def backtrack(current, open, close):
        if len(current) == 2 * n:
            result.append(current)
            return
        if open < n:
            backtrack(current + '(', open + 1, close)
        if close < open:
            backtrack(current + ')', open, close + 1)
    backtrack('', 0, 0)
    return result`
    },
    c: {
      label: "C",
      code: `void generateParentheses(int n, char* str, int open, int close, int pos) {
  if (close == n) {
    str[pos] = '\\0';
    printf("%s\\n", str);
    return;
  }
  if (open < n) {
    str[pos] = '(';
    generateParentheses(n, str, open + 1, close, pos + 1);
  }
  if (close < open) {
    str[pos] = ')';
    generateParentheses(n, str, open, close + 1, pos + 1);
  }
}`
    },
    cpp: {
      label: "C++",
      code: `void generateParentheses(int n, string str, int open, int close) {
  if (close == n) {
    cout << str << endl;
    return;
  }
  if (open < n)
    generateParentheses(n, str + "(", open + 1, close);
  if (close < open)
    generateParentheses(n, str + ")", open, close + 1);
}`
    },
    java: {
      label: "Java",
      code: `public void generateParentheses(int n, String current, int open, int close) {
  if (current.length() == 2 * n) {
    System.out.println(current);
    return;
  }
  if (open < n)
    generateParentheses(n, current + "(", open + 1, close);
  if (close < open)
    generateParentheses(n, current + ")", open, close + 1);
}`
    }
  };

  const nQueensSnippets = {
    javascript: {
      label: "JavaScript",
      code: `function solveNQueens(n) {
  const result = [];
  const board = Array(n).fill().map(() => Array(n).fill('.'));
  
  function isValid(row, col) {
    for (let i = 0; i < row; i++)
      if (board[i][col] === 'Q') return false;
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
      if (board[i][j] === 'Q') return false;
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
      if (board[i][j] === 'Q') return false;
    return true;
  }
  
  function backtrack(row) {
    if (row === n) {
      result.push(board.map(row => row.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        board[row][col] = 'Q';
        backtrack(row + 1);
        board[row][col] = '.';
      }
    }
  }
  
  backtrack(0);
  return result;
}`
    },
    python: {
      label: "Python",
      code: `def solve_n_queens(n):
    result = []
    board = [["." for _ in range(n)] for _ in range(n)]
    
    def is_valid(row, col):
        for i in range(row):
            if board[i][col] == "Q":
                return False
        for i, j in zip(range(row-1, -1, -1), range(col-1, -1, -1)):
            if board[i][j] == "Q":
                return False
        for i, j in zip(range(row-1, -1, -1), range(col+1, n)):
            if board[i][j] == "Q":
                return False
        return True
    
    def backtrack(row):
        if row == n:
            result.append(["".join(r) for r in board])
            return
        for col in range(n):
            if is_valid(row, col):
                board[row][col] = "Q"
                backtrack(row + 1)
                board[row][col] = "."
    
    backtrack(0)
    return result`
    },
    java: {
      label: "Java",
      code: `public List<List<String>> solveNQueens(int n) {
    List<List<String>> result = new ArrayList<>();
    char[][] board = new char[n][n];
    
    for (int i = 0; i < n; i++) {
        Arrays.fill(board[i], '.');
    }
    
    backtrack(result, board, 0, n);
    return result;
}

private void backtrack(List<List<String>> result, char[][] board, int row, int n) {
    if (row == n) {
        List<String> solution = new ArrayList<>();
        for (char[] r : board) {
            solution.add(String.valueOf(r));
        }
        result.add(solution);
        return;
    }
    
    for (int col = 0; col < n; col++) {
        if (isValid(board, row, col, n)) {
            board[row][col] = 'Q';
            backtrack(result, board, row + 1, n);
            board[row][col] = '.';
        }
    }
}`
    },
    cpp: {
      label: "C++",
      code: `vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> result;
    vector<string> board(n, string(n, '.'));
    backtrack(result, board, 0, n);
    return result;
}

void backtrack(vector<vector<string>>& result, vector<string>& board, int row, int n) {
    if (row == n) {
        result.push_back(board);
        return;
    }
    
    for (int col = 0; col < n; col++) {
        if (isValid(board, row, col, n)) {
            board[row][col] = 'Q';
            backtrack(result, board, row + 1, n);
            board[row][col] = '.';
        }
    }
}`
    },
    c: {
      label: "C",
      code: `#define N 8
int board[N][N];

int isSafe(int row, int col) {
    for (int i = 0; i < row; i++)
        if (board[i][col]) return 0;
    
    for (int i = row-1, j = col-1; i >= 0 && j >= 0; i--, j--)
        if (board[i][j]) return 0;
    
    for (int i = row-1, j = col+1; i >= 0 && j < N; i--, j++)
        if (board[i][j]) return 0;
    
    return 1;
}

int solve(int row) {
    if (row == N) return 1;
    
    for (int col = 0; col < N; col++) {
        if (isSafe(row, col)) {
            board[row][col] = 1;
            if (solve(row + 1)) return 1;
            board[row][col] = 0;
        }
    }
    return 0;
}`
    }
  };

  const CodeBlock = ({ code, language, id }) => (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700 mb-6 shadow-xl">
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-3 border-b border-gray-600">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300 font-medium">{language}</span>
        </div>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm px-3 py-1 rounded-lg hover:bg-gray-600"
        >
          {copiedCode === id ? <Check size={14} /> : <Copy size={14} />}
          <span>{copiedCode === id ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-auto text-sm bg-gray-900">
        <code
          className="text-gray-200"
          dangerouslySetInnerHTML={{ __html: highlightSyntax(code, language) }}
        />
      </pre>
    </div>
  );

  const LearningCard = ({ title, children, icon: Icon, color = "blue", borderColor }) => (
    <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700 p-6 sm:p-8 w-full max-w-4xl mx-auto mb-10">
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white text-center">
        {title}
      </h3>
      {children}
    </div>
  );

  const DifficultyBadge = ({ level, color }) => (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${color} mr-3`}>
      {level}
    </span>
  );

  const CompanyLogo = ({ name, color }) => (
    <div className="flex items-center gap-3 mb-3">
      <div className={`w-8 h-8 rounded-full ${color}`}></div>
      <h4 className="text-lg font-semibold text-white">{name}</h4>
      </div>
  );

  const CodeTabs = ({ snippets }) => {
    const defaultTab = snippets.python ? 'python' : Object.keys(snippets)[0];
    const [active, setActive] = useState(defaultTab);

    return (
      <div>
        <div className="flex gap-1 mb-4 overflow-x-auto">
          {Object.entries(snippets).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 rounded-t-lg font-semibold text-sm whitespace-nowrap transition-all ${active === key
                ? 'bg-blue-600 text-white border-b-2 border-blue-400'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
        <CodeBlock
          id={`code-${active}-${Math.random()}`}
          language={snippets[active].label}
          code={snippets[active].code}
        />
      </div>
    );
  };

  const InteractiveTracer = () => {
    const {
      start, next, prev, reset, isPlaying, setIsPlaying,
      currentStep, stack, isFinished, traceSteps,
      currentIndex, speed, setSpeed
    } = useRecursionTracer();
    const [n, setN] = useState(4);

    useEffect(() => {
      start(n);
    }, [n]);

    return (
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-gray-700 mb-8 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <h4 className="text-xl font-semibold text-white flex items-center gap-2">
            <Brain className="w-6 h-6 text-pink-400" />
            Advanced Recursion Tracer
          </h4>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-300">Input:</label>
              <input
                type="range"
                min="0"
                max="7"
                value={n}
                onChange={(e) => setN(Number(e.target.value))}
                className="w-20"
              />
              <span className="text-sm text-blue-300 font-semibold w-6 text-center">{n}</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-300">Speed:</label>
              <select
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="bg-gray-800 text-white px-2 py-1 rounded text-sm border border-gray-600"
              >
                <option value={2000}>Slow</option>
                <option value={1000}>Normal</option>
                <option value={500}>Fast</option>
              </select>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium border border-gray-600 disabled:opacity-50"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={isFinished}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium border border-gray-600 disabled:opacity-50"
            >
              <StepForward size={16} />
            </button>
            <button
              onClick={() => { reset(); start(n); }}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium border border-gray-600"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Step */}
          <div>
            <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Current Step
            </h5>
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 min-h-[80px] flex items-center justify-center border border-gray-600">
              <div className="text-center">
                <div className="font-mono text-lg text-green-300 mb-2">
                  {currentStep ? currentStep.label : '—'}
                </div>
                <div className="text-xs text-gray-400">
                  {currentStep ? `Depth: ${currentStep.depth}` : 'Ready to start'}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Progress</span>
                <span>{currentIndex + 1} / {traceSteps.length || 1}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden border border-gray-600">
                <div
                  className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 transition-all duration-300"
                  style={{ width: traceSteps.length ? `${((currentIndex + 1) / traceSteps.length) * 100}%` : '0%' }}
                />
              </div>
            </div>
          </div>

          {/* Call Stack */}
          <div>
            <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <Folder className="w-4 h-4" />
              Call Stack
            </h5>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 min-h-[200px] border border-gray-600">
              <div className="flex flex-col-reverse gap-2 max-h-[180px] overflow-y-auto">
                {stack.length === 0 && (
                  <div className="text-gray-400 text-sm text-center py-4">
                    Stack is empty
                  </div>
                )}
                {stack.map((frame, idx) => (
                  <div
                    key={`${frame.label}-${idx}`}
                    className={`px-4 py-3 rounded-md text-center text-white font-mono text-sm transition-all ${idx === stack.length - 1
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-105 shadow-lg'
                      : 'bg-gray-700 opacity-80'
                      }`}
                    style={{
                      marginLeft: `${idx * 8}px`
                    }}
                  >
                    <div>{frame.label}</div>
                    <div className="text-xs opacity-75">depth: {frame.depth}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Execution Flow */}
          <div>
            <h5 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Execution Flow
            </h5>
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 min-h-[200px] border border-gray-600">
              <div className="space-y-1 max-h-[180px] overflow-y-auto text-sm">
                {traceSteps.slice(Math.max(0, currentIndex - 5), currentIndex + 1).map((step, idx, arr) => (
                  <div
                    key={idx}
                    className={`p-2 rounded font-mono transition-all ${idx === arr.length - 1
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : step.type === 'call'
                        ? 'bg-blue-900/50 text-blue-200'
                        : 'bg-orange-900/50 text-orange-200'
                      }`}
                    style={{ marginLeft: `${step.depth * 12}px` }}
                  >
                    <div className="flex items-center gap-2">
                      {step.type === 'call' ? '→' : '←'}
                      <span>{step.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  sections.recursion_projects = [
  {
    title: "Factorial Finder",
    description: "Write a function that calculates the factorial of a number recursively.",
    technologies: ["Recursion Basics", "Mathematical Thinking"],
    difficulty: "Beginner",
  },
  {
    title: "Fibonacci Sequence",
    description: "Generate the Fibonacci sequence using a recursive function.",
    technologies: ["Recursion Basics", "Sequence Generation"],
    difficulty: "Beginner",
  },
  {
    title: "Sum of Digits",
    description: "Create a recursive function that finds the sum of all digits of a number.",
    technologies: ["Recursion", "Problem Decomposition"],
    difficulty: "Beginner",
  },
  {
    title: "Countdown Timer",
    description: "Use recursion to print numbers from N down to 1 in order.",
    technologies: ["Recursion", "Base Case & Step"],
    difficulty: "Beginner",
  },
  {
    title: "String Reversal",
    description: "Build a recursive function that reverses a string without loops.",
    technologies: ["Recursion", "String Manipulation"],
    difficulty: "Beginner",
  },
  {
    title: "Palindrome Checker",
    description: "Check if a word is a palindrome using recursion instead of loops.",
    technologies: ["Recursion", "Conditional Logic"],
    difficulty: "Intermediate",
  },
  {
    title: "Nested List Sum",
    description: "Recursively calculate the sum of numbers inside nested lists.",
    technologies: ["Recursion", "List Traversal"],
    difficulty: "Intermediate",
  },
  {
    title: "Tower of Hanoi (Visual Steps)",
    description: "Implement the Tower of Hanoi problem and print each move step by step.",
    technologies: ["Recursion", "Problem Solving"],
    difficulty: "Intermediate",
  },
];




  // New Visual Tree Component
  const RecursionTree = () => {
    const [selectedN, setSelectedN] = useState(3);

    const generateTree = (n, depth = 0) => {
      if (n <= 1) return { value: n, result: 1, children: [], depth };

      return {
        value: n,
        result: n * factorial(n - 1),
        children: [generateTree(n - 1, depth + 1)],
        depth
      };
    };

    const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);

    const tree = generateTree(selectedN);

    const TreeNode = ({ node }) => (
      <div className="flex flex-col items-center">
        <div className={`
          px-4 py-3 rounded-lg border-2 text-center font-mono transition-all duration-300 hover:scale-105
          ${node.value <= 1
            ? 'bg-green-600 border-green-400 text-white'
            : 'bg-blue-600 border-blue-400 text-white'
          }
        `}>
          <div className="text-sm">factorial({node.value})</div>
          <div className="text-xs opacity-80">= {node.result}</div>
        </div>
        {node.children.length > 0 && (
          <div className="mt-4">
            <div className="w-px h-8 bg-gray-400 mx-auto"></div>
            <div className="flex gap-8">
              {node.children.map((child, idx) => (
                <div key={idx} className="relative">
                  <TreeNode node={child} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div className="bg-gradient-to-br from-gray-900 via-indigo-900/20 to-blue-900/20 rounded-xl p-8 border border-gray-700 mb-8 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-semibold text-white flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            Recursion Tree Visualization
          </h4>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-300">Value:</label>
            <select
              value={selectedN}
              onChange={(e) => setSelectedN(Number(e.target.value))}
              className="bg-gray-800 text-white px-3 py-2 rounded border border-gray-600"
            >
              {[1, 2, 3, 4, 5].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
        </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-max py-8 flex justify-center">
            <TreeNode node={tree} />
          </div>
        </div>

        <div className="mt-6 text-center text-gray-400 text-sm">
          Green nodes represent base cases, blue nodes represent recursive calls
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white font-sans">
      {/* Header */}
      <header className="py-12 sm:py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 animate-pulse break-words">Recursion</h1>
          <p className="text-base sm:text-xl">Problem Solving with Self-Reference</p>
          <div className="mt-6">
            <div className="flex justify-center flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm px-4">
              <span className="px-3 py-1 bg-white/20 rounded-full">🧠 Concepts</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🎬 Visualize</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🏭 Industry</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-12 sm:space-y-16">

        {/* Student Hook Section */}
        <section className="transform hover:scale-105 transition-transform duration-300">
         <h2 className="text-4xl font-bold mb-6 text-center">
    🎯
    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Why Recursion Matters
    </span>
</h2>
        </section>

        <section className="transform hover:scale-105 transition-transform duration-300">
          {/* Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-purple-500">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">💡Real life scenario</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              Just like in your computer, a folder can hold files and even other folders. Those folders can again contain files and subfolders. This nesting keeps repeating — a natural example of recursion!
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
              <p className="text-purple-800 dark:text-purple-200 font-medium">
                <span className="font-bold">Real-world example:</span> Opening folders one inside another until you reach the final file.
              </p>
            </div>
          </div>
        </section>

        {/* Concept Understanding Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center">
    🔹
    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        What is Recursion?
    </span>
</h2>

          {/* Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">💡 Understanding Recursion</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              Recursion is when a function calls itself to solve a problem by breaking it
              into smaller sub-problems.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                👉 Think of it like: Solving a big problem by solving smaller versions
                of the same problem until you reach the simplest case
                (called the <span className="font-bold">base case</span>).
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Visual Learning Section */}
        <section>

          {/* Code Examples - Show on mobile but simplified */}
          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <LearningCard title="Factorial Implementation - Multiple Languages">
              <p className="text-gray-300 mb-6 text-center text-sm">
                See how recursion looks in different programming languages:
              </p>
              <CodeTabs snippets={codeSnippets} />
            </LearningCard>
          </div>



      <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center">
    🎬
    <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
        Enhanced Visual Learning
    </span>
</h2>



          {/* Mobile Message - Only show on mobile */}
          <div className="block md:hidden mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-center text-white">
              <p className="text-sm">
                💻 <strong>Use laptop/tablet for interactive visualizations</strong>
              </p>
            </div>
          </div>

          {/* Interactive Components - Hide on mobile */}
          <div className="hidden md:block">


            {/* Code Examples with Multiple Languages
            <LearningCard title="Factorial Implementation - Multiple Languages">
              <p className="text-gray-300 mb-6 text-center">
                See how recursion looks in different programming languages:
              </p>
              <CodeTabs snippets={codeSnippets} />
            </LearningCard> */}

            <FactorialAnimation />
            <InteractiveTracer />
            <RecursionTree />

          </div>

          {/* Call Stack Visualization - Show on all devices */}
          <LearningCard title="Call Stack Visualization">
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg">
              <div className="font-mono text-xs sm:text-sm flex flex-col gap-3">
                <div className="bg-red-600 text-white p-2 sm:p-3 rounded-lg text-center">
                  factorial(4)
                </div>
                <div className="bg-yellow-600 text-white p-2 sm:p-3 rounded-lg text-center ml-2 sm:ml-4">
                  factorial(3)
                </div>
                <div className="bg-purple-600 text-white p-2 sm:p-3 rounded-lg text-center ml-4 sm:ml-8">
                  factorial(2)
                </div>
                <div className="bg-blue-600 text-white p-2 sm:p-3 rounded-lg text-center ml-6 sm:ml-12">
                  factorial(1) → returns 1
                </div>
              </div>
              <div className="mt-6 text-center text-gray-400 flex items-center justify-center gap-2 text-sm sm:text-base">
                <span>Building up the stack</span>
                <ArrowRight className="w-4 h-4" />
                <span>Unwinding and calculating</span>
              </div>
            </div>
          </LearningCard>


        </section>

        {/* Industry Applications */}
        <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-green-300">
            🏭 Industry Applications of Recursion
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections1.recursion.industry_applications.map((app, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl border-l-4 hover:shadow-lg transition-shadow duration-300"
                style={{ borderColor: app.color }}
              >
                <h4 className="text-lg font-semibold mb-3" style={{ color: app.color }}>
                  {app.title}
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  {app.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: app.color }}
                      ></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        {/* Interview Questions */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
    🎤
    <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
        Interview Questions & Answers
    </span>
</h2>

          <div className="space-y-4">
            {sections.interview_questions.map((qa, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setSelectedQuestionIndex(
                      selectedQuestionIndex === index ? -1 : index
                    )
                  }
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {qa.question}
                      </h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${qa.difficulty === "Easy"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : qa.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                          }`}
                      >
                        {qa.difficulty}
                      </span>
                    </div>
                    <div className="ml-4">
                      <svg
                        className={`w-6 h-6 transition-transform duration-200 ${selectedQuestionIndex === index ? "rotate-180" : ""
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {selectedQuestionIndex === index && (
                  <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        <strong>Answer:</strong> {qa.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>


        {/* projects */}
        <section>
  <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
    🔄 Recursion Project Ideas
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    {sections.recursion_projects.map((project, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-emerald-500"
      >
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            {project.title}
          </h3>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              project.difficulty === "Beginner"
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                : project.difficulty === "Intermediate"
                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
            }`}
          >
            {project.difficulty}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Master Recursion?</h2>
          <p className="text-blue-100 mb-4 sm:mb-6 text-base sm:text-lg">
            Join thousands of developers who have mastered recursive problem-solving
          </p>
          <button className="bg-white text-purple-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Practicing Now
          </button>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Master Recursion Today! 🚀</h3>
          <p className="text-lg text-gray-300 mb-6">
            Learn, visualize, and practice recursive thinking with real interview problems.
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
};

export default Recursion;