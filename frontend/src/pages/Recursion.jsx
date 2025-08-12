import React, { useState, useEffect } from 'react';
import { Copy, Check, Play, Pause, ArrowRight, Code, Brain, Target, Rocket } from 'lucide-react';

const Recursion = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const FactorialAnimation = () => {
    const [step, setStep] = useState(0);
    const steps = [
      'factorial(4)',
      'factorial(4) = 4 × factorial(3)',
      'factorial(4) = 4 × 3 × factorial(2)',
      'factorial(4) = 4 × 3 × 2 × factorial(1)',
      'factorial(4) = 4 × 3 × 2 × 1',
      'factorial(4) = 24'
    ];

    useEffect(() => {
      if (!isAnimationPlaying) return;
      
      const interval = setInterval(() => {
        setStep((prev) => (prev + 1) % steps.length);
      }, 2000);
      return () => clearInterval(interval);
    }, [isAnimationPlaying]);

    return (
      <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-semibold text-white flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-400" />
            Factorial Animation
          </h4>
          <button
            onClick={() => setIsAnimationPlaying(!isAnimationPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            {isAnimationPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isAnimationPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
        <div className="text-center">
          <div className="text-2xl font-mono text-green-400 mb-6 min-h-8">
            {steps[step]}
          </div>
          <div className="flex justify-center gap-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === step ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const codeSnippets = {
    javascript: {
      label: "JavaScript",
      code: `function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120`
    },
    python: {
      label: "Python",
      code: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # Output: 120`
    },
    c: {
      label: "C",
      code: `int factorial(int n) {
  if (n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
}
// printf("%d", factorial(5)); // Output: 120`
    },
    cpp: {
      label: "C++",
      code: `int factorial(int n) {
  if (n <= 1)
    return 1;
  else
    return n * factorial(n - 1);
}
// std::cout << factorial(5); // Output: 120`
    },
    csharp: {
      label: "C#",
      code: `int Factorial(int n) {
  if (n <= 1)
    return 1;
  else
    return n * Factorial(n - 1);
}
// Console.WriteLine(Factorial(5)); // Output: 120`
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
// O(log n)`
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
# O(log n)`
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
// O(log n)`
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
// O(log n)`
    },
    csharp: {
      label: "C#",
      code: `int Power(int baseNum, int exponent) {
  if (exponent == 0) return 1;
  if (exponent == 1) return baseNum;
  if (exponent % 2 == 0) {
    int half = Power(baseNum, exponent / 2);
    return half * half;
  } else {
    return baseNum * Power(baseNum, exponent - 1);
  }
}
// O(log n)`
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
}
// Usage: char str[2*n+1]; generateParentheses(n, str, 0, 0, 0);`
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
}
// Usage: generateParentheses(n, "", 0, 0);`
    },
    csharp: {
      label: "C#",
      code: `void GenerateParentheses(int n, string current, int open, int close) {
  if (current.Length == 2 * n) {
    Console.WriteLine(current);
    return;
  }
  if (open < n)
    GenerateParentheses(n, current + "(", open + 1, close);
  if (close < open)
    GenerateParentheses(n, current + ")", open, close + 1);
}
// Usage: GenerateParentheses(n, "", 0, 0);`
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
    board = [["."] * n for _ in range(n)]
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
    c: {
      label: "C",
      code: `// N-Queens in C (prints one solution)
#define N 8
int board[N][N];
int isSafe(int row, int col) {
  for (int i = 0; i < row; i++)
    if (board[i][col]) return 0;
  for (int i = row-1, j = col-1; i>=0 && j>=0; i--, j--)
    if (board[i][j]) return 0;
  for (int i = row-1, j = col+1; i>=0 && j<N; i--, j++)
    if (board[i][j]) return 0;
  return 1;
}
int solve(int row) {
  if (row == N) return 1;
  for (int col = 0; col < N; col++) {
    if (isSafe(row, col)) {
      board[row][col] = 1;
      if (solve(row+1)) return 1;
      board[row][col] = 0;
    }
  }
  return 0;
}
// Usage: solve(0);`
    },
    cpp: {
      label: "C++",
      code: `void solveNQueens(int n, int row, vector<string>& board, vector<vector<string>>& res) {
  if (row == n) {
    res.push_back(board);
    return;
  }
  for (int col = 0; col < n; col++) {
    bool safe = true;
    for (int i = 0; i < row; i++)
      if (board[i][col] == 'Q') safe = false;
    for (int i = row-1, j = col-1; i>=0 && j>=0; i--, j--)
      if (board[i][j] == 'Q') safe = false;
    for (int i = row-1, j = col+1; i>=0 && j<n; i--, j++)
      if (board[i][j] == 'Q') safe = false;
    if (safe) {
      board[row][col] = 'Q';
      solveNQueens(n, row+1, board, res);
      board[row][col] = '.';
    }
  }
}
// Usage: vector<vector<string>> res; vector<string> board(n, string(n, '.')); solveNQueens(n, 0, board, res);`
    },
    csharp: {
      label: "C#",
      code: `void SolveNQueens(int n, int row, char[,] board, List<List<string>> res) {
  if (row == n) {
    var solution = new List<string>();
    for (int i = 0; i < n; i++) {
      var rowStr = "";
      for (int j = 0; j < n; j++)
        rowStr += board[i, j];
      solution.Add(rowStr);
    }
    res.Add(solution);
    return;
  }
  for (int col = 0; col < n; col++) {
    bool safe = true;
    for (int i = 0; i < row; i++)
      if (board[i, col] == 'Q') safe = false;
    for (int i = row-1, j = col-1; i>=0 && j>=0; i--, j--)
      if (board[i, j] == 'Q') safe = false;
    for (int i = row-1, j = col+1; i>=0 && j<n; i--, j++)
      if (board[i, j] == 'Q') safe = false;
    if (safe) {
      board[row, col] = 'Q';
      SolveNQueens(n, row+1, board, res);
      board[row, col] = '.';
    }
  }
}
// Usage: var res = new List<List<string>>(); var board = new char[n, n]; for (int i=0;i<n;i++) for (int j=0;j<n;j++) board[i,j]='.'; SolveNQueens(n, 0, board, res);`
    }
  };

  const CodeBlock = ({ code, language, id }) => (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 mb-6">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
        <span className="text-sm text-gray-400 font-medium">{language}</span>
        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm px-3 py-1 rounded-lg hover:bg-gray-700"
        >
          {copiedCode === id ? <Check size={14} /> : <Copy size={14} />}
          <span>{copiedCode === id ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-auto text-sm bg-gray-900">
        <code className="text-gray-300">{code}</code>
      </pre>
    </div>
  );

  const LearningCard = ({ title, children, icon: Icon, color = "blue", borderColor }) => (
    <div className={`bg-gray-800 rounded-xl p-6 border ${borderColor || 'border-gray-700'} mb-6 hover:border-gray-600 transition-colors`}>
      {title && (
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
          {Icon && <Icon className={`w-5 h-5 text-${color}-400`} />}
          {title}
        </h3>
      )}
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
        <div className="flex gap-2 mb-2">
          {Object.entries(snippets).map(([key, { label }]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-1 rounded-t-lg font-semibold ${
                active === key
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <CodeBlock
          id={`factorial-${active}`}
          language={snippets[active].label}
          code={snippets[active].code}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-purple-800 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Recursion Mastery
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Master the art of solving problems by breaking them down into smaller versions of themselves
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Student Hook Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <Target className="w-8 h-8 text-purple-400" />
            Why Recursion Matters
          </h2>
          
          <LearningCard title="The Russian Doll Mystery" icon={Brain} color="purple" borderColor="border-purple-500">
            <p className="text-lg text-gray-300 mb-4">
              Imagine you have a Russian doll (Matryoshka) and you want to find the smallest doll inside. 
              How would you do it? You'd open the current doll, and if there's another doll inside, 
              you'd repeat the same process until you find the smallest one!
            </p>
            <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-green-400 font-semibold">
                This is exactly how recursion works in programming - a function calling itself 
                with a smaller version of the same problem until it reaches the simplest case!
              </p>
            </div>
          </LearningCard>
          
          <LearningCard title="Real-World Impact" icon={Rocket} color="blue" borderColor="border-blue-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Google's search algorithms use recursion to crawl web pages</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>File systems use recursion to navigate directories</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Game AI uses recursion for decision trees</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span>Data compression algorithms rely on recursive techniques</span>
              </div>
            </div>
          </LearningCard>
        </section>

        {/* Concept Understanding Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <Code className="w-8 h-8 text-blue-400" />
            Core Concepts
          </h2>

          <LearningCard title="Essential Components">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 p-6 rounded-lg border border-green-500">
                <h4 className="text-lg font-semibold text-green-400 mb-3">1. Base Case</h4>
                <p className="text-gray-300">
                  The condition that stops the recursion. Without this, you get infinite recursion!
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-6 rounded-lg border border-blue-500">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">2. Recursive Case</h4>
                <p className="text-gray-300">
                  The function calls itself with a modified parameter, moving closer to the base case.
                </p>
              </div>
            </div>
          </LearningCard>

          <LearningCard title="Simple Example: Factorial">
            <p className="text-gray-300 mb-4">
              Factorial of n (n!) = n × (n-1) × (n-2) × ... × 1
            </p>
            <CodeTabs snippets={codeSnippets} />
          </LearningCard>
        </section>

        {/* Visual Learning Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            Visual Learning
          </h2>
          
          <FactorialAnimation />
          
          <LearningCard title="Call Stack Visualization">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="font-mono text-sm flex flex-col gap-3">
                <div className="bg-red-600 text-white p-3 rounded-lg text-center">
                  factorial(4)
                </div>
                <div className="bg-yellow-600 text-white p-3 rounded-lg text-center ml-4">
                  factorial(3)
                </div>
                <div className="bg-purple-600 text-white p-3 rounded-lg text-center ml-8">
                  factorial(2)
                </div>
                <div className="bg-blue-600 text-white p-3 rounded-lg text-center ml-12">
                  factorial(1) → returns 1
                </div>
              </div>
              <div className="mt-6 text-center text-gray-400 flex items-center justify-center gap-2">
                <span>Building up the stack</span>
                <ArrowRight className="w-4 h-4" />
                <span>Unwinding and calculating</span>
              </div>
            </div>
          </LearningCard>
        </section>

        {/* Industry Applications */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <Rocket className="w-8 h-8 text-orange-400" />
            Industry Applications
          </h2>

          <LearningCard title="How Tech Giants Use Recursion">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 p-6 rounded-lg border border-red-500">
                <CompanyLogo name="Google Search" color="bg-red-500" />
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    Web crawling algorithms recursively follow links
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    PageRank algorithm uses recursive calculations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    Search tree traversal for query optimization
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-6 rounded-lg border border-blue-500">
                <CompanyLogo name="Facebook/Meta" color="bg-blue-500" />
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Social graph traversal (friends of friends)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    News feed algorithm uses recursive sorting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Comment thread nesting and replies
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 p-6 rounded-lg border border-green-500">
                <CompanyLogo name="File Systems" color="bg-green-500" />
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    Directory traversal (Windows, macOS, Linux)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    File search operations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    Backup and synchronization tools
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 p-6 rounded-lg border border-purple-500">
                <CompanyLogo name="Gaming Industry" color="bg-purple-500" />
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    AI decision trees (Chess, Go)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    Pathfinding algorithms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    Procedural content generation
                  </li>
                </ul>
              </div>
            </div>
          </LearningCard>
        </section>

        {/* Interview Questions */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <Target className="w-8 h-8 text-yellow-400" />
            Interview Questions
          </h2>

          <LearningCard title="Ace Your Technical Interviews">
            <p className="text-lg text-gray-300 mb-8">
              These are real questions asked at top tech companies!
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 p-6 rounded-lg border border-green-500">
                <div className="flex items-center mb-4">
                  <DifficultyBadge level="EASY" color="bg-green-600 text-white" />
                  <h4 className="text-lg font-semibold text-green-400">Google, Amazon</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  Write a recursive function to calculate the power of a number.
                </p>
                <CodeTabs snippets={powerSnippets} />
              </div>

              <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 p-6 rounded-lg border border-yellow-500">
                <div className="flex items-center mb-4">
                  <DifficultyBadge level="MEDIUM" color="bg-yellow-600 text-black" />
                  <h4 className="text-lg font-semibold text-yellow-400">Facebook, Microsoft</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  Generate all possible combinations of n pairs of balanced parentheses.
                </p>
                <CodeTabs snippets={parenthesesSnippets} />
              </div>

              <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 p-6 rounded-lg border border-red-500">
                <div className="flex items-center mb-4">
                  <DifficultyBadge level="HARD" color="bg-red-600 text-white" />
                  <h4 className="text-lg font-semibold text-red-400">Google, Netflix</h4>
                </div>
                <p className="text-gray-300 mb-4">
                  Solve the N-Queens problem: place N queens on N×N chessboard.
                </p>
                <CodeTabs snippets={nQueensSnippets} />
              </div>
            </div>
          </LearningCard>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
            <ArrowRight className="w-8 h-8 text-green-400" />
            Continue Your Journey
          </h2>

          <LearningCard title="What's Next?">
            <p className="text-gray-300 mb-6">
              Ready to tackle more advanced topics? Here's your roadmap:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-green-900/30 to-green-800/30 p-6 rounded-lg border border-green-500 text-center hover:border-green-400 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">🌳</div>
                <h4 className="text-lg font-semibold text-green-400 mb-2">Trees & BST</h4>
                <p className="text-gray-300 text-sm">Master tree traversals using recursion</p>
              </div>
              <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 p-6 rounded-lg border border-blue-500 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">📊</div>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Dynamic Programming</h4>
                <p className="text-gray-300 text-sm">Optimize recursive solutions</p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 p-6 rounded-lg border border-purple-500 text-center hover:border-purple-400 transition-colors cursor-pointer">
                <div className="text-3xl mb-3">🔍</div>
                <h4 className="text-lg font-semibold text-purple-400 mb-2">Graph Algorithms</h4>
                <p className="text-gray-300 text-sm">Apply recursion to pathfinding</p>
              </div>
            </div>
          </LearningCard>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Master Recursion?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Join thousands of developers who have mastered recursive problem-solving
          </p>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Practicing Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recursion;