import React, { useState, useEffect, useCallback, useRef } from "react";

// DATA OBJECT
const dynamicProgrammingData = {
  topic: "Dynamic Programming",
  category: "Advanced Algorithms",
  sections: {
    student_hook:
      "Imagine you're climbing a staircase with 100 steps, and at each step you can either take 1 or 2 steps forward. How many different ways can you reach the top? Instead of calculating this millions of times, Dynamic Programming teaches you to remember previous answers and build upon them - just like how you remember that 2+2=4 instead of counting on your fingers every time! This 'smart laziness' turns impossible problems into lightning-fast solutions.",
    core_concepts: {
      memoization: {
        concept:
          "Memoization is like having a smart notebook where you write down answers to problems you've already solved. When the same problem appears again, you simply look up the answer instead of solving it from scratch. This top-down approach saves massive amounts of computation time.",
        realWorldExample:
          "Think of GPS navigation - once it calculates the fastest route from your home to work, it remembers this route and doesn't recalculate every morning unless traffic conditions change!",
        advantages: ["🚀 Exponential to polynomial time improvement", "📝 Easy to implement (add caching to recursion)", "🧠 Intuitive top-down thinking approach", "🔄 Natural recursive problem decomposition"],
        disadvantages: ["📚 Higher memory usage due to cache storage", "🔄 Potential stack overflow with deep recursion", "💾 Cache management overhead", "🎯 May compute unnecessary subproblems"],
      },
      tabulation: {
        concept:
          "Tabulation builds solutions bottom-up, starting from the smallest subproblems and working towards the final answer. It's like filling out a table systematically, where each cell depends on previously computed cells. This iterative approach eliminates recursion entirely.",
        realWorldExample:
          "Think of building a pyramid - you start with the foundation blocks and systematically build each layer, ensuring each level is complete before moving to the next!",
        advantages: ["💾 Optimal space usage (often reducible)", "⚡ No recursion overhead or stack issues", "🎯 Computes only necessary subproblems", "🔄 Easy to optimize space complexity"],
        disadvantages: ["🧮 Requires careful order of computation", "📊 Bottom-up thinking can be less intuitive", "🎯 Must solve all subproblems (even unused ones)", "🔧 More complex to implement initially"],
      },
      optimal_substructure: {
        concept:
          "A problem has optimal substructure if the optimal solution contains optimal solutions to its subproblems. This means you can break down a complex problem into smaller pieces, solve each piece optimally, and combine them for the overall optimal solution.",
        realWorldExample:
          "Finding the shortest path from New York to Los Angeles through Chicago means finding the shortest path from NY to Chicago AND the shortest path from Chicago to LA!",
        examples: ["🛤️ Shortest Path Problems", "💰 Knapsack Problem", "✂️ Edit Distance", "📏 Longest Common Subsequence"],
      },
    },
    interview_questions: [ { question: "What is the difference between memoization and tabulation?", answer: "Memoization is top-down DP using recursion with caching, solving problems on-demand. Tabulation is bottom-up DP using iteration, solving all subproblems systematically. Memoization may skip unnecessary subproblems but uses recursion stack, while tabulation is iterative but may compute all subproblems.", difficulty: "Medium", }, { question: "When should you use Dynamic Programming?", answer: "Look for two key properties: (1) Optimal Substructure - optimal solution contains optimal solutions to subproblems, and (2) Overlapping Subproblems - same subproblems are solved multiple times. If both exist, DP can optimize the solution from exponential to polynomial time.", difficulty: "Medium", }, { question: "Explain the time and space complexity of the Fibonacci sequence using different approaches.", answer: "Naive recursion: O(2^n) time, O(n) space. Memoization: O(n) time, O(n) space. Tabulation: O(n) time, O(n) space. Space-optimized: O(n) time, O(1) space. The space-optimized version only keeps track of the last two values.", difficulty: "Easy", }, { question: "How would you solve the 0/1 Knapsack problem using DP?", answer: "Use a 2D DP table dp[i][w] representing maximum value using first i items with weight limit w. For each item, choose max of (excluding item: dp[i-1][w]) or (including item: value[i] + dp[i-1][w-weight[i]] if weight[i] <= w). Time: O(nW), Space: O(nW), optimizable to O(W).", difficulty: "Hard", }, { question: "What is the optimal substructure property and why is it important for DP?", answer: "Optimal substructure means an optimal solution to a problem contains optimal solutions to its subproblems. It's crucial for DP because it allows us to build optimal solutions from smaller optimal solutions. Without this property, DP won't guarantee optimal results.", difficulty: "Medium", }, ],
    industry_applications: ["💰 Finance - Portfolio optimization and algorithmic trading", "🎮 Gaming - AI decision making and pathfinding algorithms", "🧬 Bioinformatics - DNA sequence alignment and gene prediction", "📱 Mobile Apps - Auto-correct and text prediction systems", "🚗 Autonomous Vehicles - Route planning and collision avoidance", "📊 Machine Learning - Neural network optimization", "🏪 E-commerce - Recommendation systems and pricing strategies", "📡 Telecommunications - Network routing and bandwidth allocation"],
    code_examples: { c: `#include <stdio.h>\n\nint fib(int n){\n    int f[n+2];\n    f[0]=0; f[1]=1;\n    for(int i=2;i<=n;i++) f[i]=f[i-1]+f[i-2];\n    return f[n];\n}\n\nint main(){\n    int n=10;\n    printf("%d\\n",fib(n));\n    return 0;\n}`, cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint fib(int n){\n    vector<int> f(n+2,0); f[1]=1;\n    for(int i=2;i<=n;i++) f[i]=f[i-1]+f[i-2];\n    return f[n];\n}\n\nint main(){\n    cout << fib(10) << endl;\n    return 0;\n}`, java: `public class FibonacciDP {\n    public static int fib(int n){\n        int[] f=new int[n+2]; f[1]=1;\n        for(int i=2;i<=n;i++) f[i]=f[i-1]+f[i-2];\n        return f[n];\n    }\n    public static void main(String[] args){\n        System.out.println(fib(10));\n    }\n}`, python: `def fib(n):\n    f=[0]*(n+2); f[1]=1\n    for i in range(2,n+1): f[i]=f[i-1]+f[i-2]\n    return f[n]\n\nprint(fib(10))`, javascript: `let n=10;\nlet f=Array(n+2).fill(0); f[1]=1;\nfor(let i=2;i<=n;i++) f[i]=f[i-1]+f[i-2];\nconsole.log(f[n]);` },
    project_ideas: [ { title: "Stock Trading Profit Optimizer", description: "Build a system that finds the maximum profit from buying and selling stocks with various constraints (single transaction, multiple transactions, cooldown period, transaction fees). Visualize profit curves and decision points.", difficulty: "Intermediate", technologies: ["React", "Chart.js", "Financial APIs", "Data visualization"] }, { title: "Text Auto-Complete Engine", description: "Create an intelligent text prediction system using DP algorithms like longest common subsequence and edit distance. Include features like spell-check, word suggestions, and typing efficiency analysis.", difficulty: "Advanced", technologies: ["Python/JavaScript", "NLP libraries", "Trie data structure", "Machine Learning"] }, { title: "Route Optimization System", description: "Develop a GPS-like application that finds optimal paths using DP algorithms. Include features like shortest path, minimum cost, avoiding toll roads, and real-time traffic integration.", difficulty: "Advanced", technologies: ["Graph algorithms", "Maps API", "Real-time data", "Mobile development"] }, { title: "Game Strategy AI", description: "Build an AI player for games like chess, tic-tac-toe, or custom games using DP techniques like minimax with memoization. Include difficulty levels and move analysis features.", difficulty: "Beginner", technologies: ["Game engines", "AI algorithms", "Interactive UI", "Animation"] } ],
  },
};

// Syntax highlighting function
const highlightSyntax = (code, language) => {
  if (!code) return "";
  const keywords = { c: ["int", "float", "double", "char", "void", "return", "if", "else", "for", "while", "printf", "include", "main", "long", "memset", "sizeof"], cpp: ["int", "float", "double", "char", "void", "return", "if", "else", "for", "while", "cout", "cin", "using", "namespace", "std", "include", "main", "string", "vector", "class", "private", "public", "auto", "pair", "max"], java: ["public", "private", "static", "void", "int", "double", "String", "class", "return", "if", "else", "for", "while", "System", "main", "println", "printf", "import", "new", "Map", "List", "ArrayList", "HashMap", "Math"], python: ["def", "return", "if", "else", "elif", "for", "while", "import", "from", "class", "print", "len", "range", "True", "False", "None", "self", "lru_cache", "in", "time"], javascript: ["function", "const", "let", "var", "return", "if", "else", "for", "while", "class", "this", "console", "log", "true", "false", "null", "undefined", "new", "Map", "Array", "module", "exports", "Math", "performance"] };
  const strings = /"[^"]*"|'[^']*'|`[^`]*`/g;
  const comments = language === "python" ? /#.*$/gm : /\/\/.*$|\/\*[\s\S]*?\*\//gm;
  const numbers = /\b\d+\.?\d*\b/g;
  let highlightedCode = code;
  highlightedCode = highlightedCode.replace(strings, (match) => `<span style="color: #22c55e;">${match}</span>`);
  highlightedCode = highlightedCode.replace(comments, (match) => `<span style="color: #6b7280;">${match}</span>`);
  highlightedCode = highlightedCode.replace(numbers, (match) => `<span style="color: #f97316;">${match}</span>`);
  if (keywords[language]) { keywords[language].forEach((keyword) => { const regex = new RegExp(`\\b${keyword}\\b`, "g"); highlightedCode = highlightedCode.replace(regex, (match) => `<span style="color: #3b82f6;">${match}</span>`); }); }
  return highlightedCode;
};


// ##################################################################
// # 🚀 NEW AND IMPROVED VISUALIZATION COMPONENTS 🚀
// ##################################################################

// 

// 📈 Fibonacci Visualization with Recursion Tree
const FibonacciVisualization = ({ n, setN, result, tree, showMemo }) => {
  const renderTree = (node) => {
    if (!node) return null;
    const isCached = node.isCached ? "bg-green-200 dark:bg-green-800 border-green-400" : "bg-red-200 dark:bg-red-800 border-red-400";
    const isBase = node.children.length === 0 ? "font-bold" : "";
    
    return (
      <div key={node.id} className="flex flex-col items-center text-center p-2">
        <div className={`flex items-center justify-center w-16 h-10 rounded-lg border-2 ${showMemo && node.isDuplicate ? isCached : 'bg-blue-100 dark:bg-gray-700 border-blue-300'} ${isBase} transition-all duration-300`}>
          F({node.n})
        </div>
        {node.children.length > 0 && (
          <>
            <div className="w-px h-6 bg-gray-400"></div>
            <div className="flex justify-center gap-4">
              {node.children.map(child => renderTree(child))}
            </div>
          </>
        )}
      </div>
    );
  };
  
  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold mb-4 text-center text-blue-800 dark:text-blue-200">
        📈 Fibonacci Sequence & Recursion Tree
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
        <label htmlFor="fibN" className="font-medium">Calculate F(n):</label>
        <input id="fibN" type="number" value={n} onChange={(e) => setN(Math.min(10, Math.max(0, parseInt(e.target.value) || 0)))} min="0" max="10" className="w-20 px-2 py-1 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-center"/>
        <p className="text-xs text-gray-500">(Max 10 for visualization)</p>
      </div>
      
      {result !== null && (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
          <div className="text-center mb-4">
            <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              F({n}) = {result.toLocaleString()}
            </h4>
            <div className="text-sm text-gray-500 mt-1">
              {showMemo ? "With Memoization" : "Naive Recursion"}
            </div>
          </div>
          <div className="overflow-x-auto p-4">
            {tree ? renderTree(tree) : <p>Calculating...</p>}
          </div>
          <div className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
              <span className="inline-block w-3 h-3 bg-red-200 border border-red-400 rounded-sm mr-1"></span> Red = Redundant Call.
              <span className="inline-block w-3 h-3 bg-green-200 border border-green-400 rounded-sm ml-4 mr-1"></span> Green = Cached Result (Memoized).
          </div>
        </div>
      )}
    </div>
  );
};


// 🧩 Animated Longest Common Subsequence (LCS) Visualizer
const LCSVisualizer = () => {
  const [stringA, setStringA] = useState("AGGTAB");
  const [stringB, setStringB] = useState("GXTXAYB");
  const [dpTable, setDpTable] = useState([]);
  const [status, setStatus] = useState("idle"); // idle, playing, backtracking, finished
  const [activeCell, setActiveCell] = useState(null);
  const [deps, setDeps] = useState([]);
  const [path, setPath] = useState([]);
  const [lcs, setLcs] = useState("");
  const [speed, setSpeed] = useState(150);
  const timerRef = useRef(null);

  const initialize = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const m = stringA.length;
    const n = stringB.length;
    const initialTable = Array(m + 1).fill(null).map(() => Array(n + 1).fill(null));
    for(let i = 0; i <= m; i++) initialTable[i][0] = 0;
    for(let j = 0; j <= n; j++) initialTable[0][j] = 0;
    setDpTable(initialTable);
    setActiveCell({ r: 1, c: 1 });
    setStatus("idle");
    setPath([]);
    setDeps([]);
    setLcs("");
  }, [stringA, stringB]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (status !== 'playing' && status !== 'backtracking') return;
  
    timerRef.current = setTimeout(() => {
      setDpTable(prevTable => {
        const newTable = prevTable.map(row => [...row]);
        if (status === 'playing') {
          const { r, c } = activeCell;
          const newDeps = [];
          if (stringA[r - 1] === stringB[c - 1]) {
            newTable[r][c] = newTable[r - 1][c - 1] + 1;
            newDeps.push({r: r-1, c: c-1});
          } else {
            newTable[r][c] = Math.max(newTable[r - 1][c], newTable[r][c - 1]);
            newDeps.push({r: r-1, c: c});
            newDeps.push({r: r, c: c-1});
          }
          setDeps(newDeps);
  
          if (c < stringB.length) {
            setActiveCell({ r, c: c + 1 });
          } else if (r < stringA.length) {
            setActiveCell({ r: r + 1, c: 1 });
          } else {
            setStatus("backtracking"); // Start backtracking
            setActiveCell({r: stringA.length, c: stringB.length});
          }
        } else if (status === 'backtracking') {
          let { r, c } = activeCell;
          if(r > 0 && c > 0) {
            setPath(prevPath => [...prevPath, {r,c}]);
             if (stringA[r - 1] === stringB[c - 1]) {
                setLcs(prev => stringA[r-1] + prev);
                setActiveCell({r: r-1, c: c-1});
            } else if (newTable[r - 1][c] > newTable[r][c - 1]) {
                setActiveCell({r: r-1, c});
            } else {
                setActiveCell({r, c: c-1});
            }
          } else {
            setStatus("finished");
            setDeps([]);
          }
        }
        return newTable;
      });
    }, speed);
  
    return () => clearTimeout(timerRef.current);
  }, [status, activeCell, dpTable, speed, stringA, stringB]);
  
  const handlePlayPause = () => {
      if (status === 'playing' || status === 'backtracking') {
        setStatus('idle');
      } else if (status === 'idle' && activeCell.r <= stringA.length) {
        setStatus('playing');
      } else if (status === 'idle') {
        setStatus('backtracking');
      }
  };


  return (
    <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl border-2 border-teal-200 dark:border-teal-800">
      <h3 className="text-2xl font-bold mb-4 text-center text-teal-800 dark:text-teal-200">
        🧩 Animated Longest Common Subsequence
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input type="text" value={stringA} onChange={(e) => setStringA(e.target.value.toUpperCase())} disabled={status !== 'idle'} className="w-full px-3 py-2 font-mono border-2 border-teal-300 dark:border-teal-600 rounded-lg bg-white dark:bg-gray-700 disabled:opacity-50" />
        <input type="text" value={stringB} onChange={(e) => setStringB(e.target.value.toUpperCase())} disabled={status !== 'idle'} className="w-full px-3 py-2 font-mono border-2 border-teal-300 dark:border-teal-600 rounded-lg bg-white dark:bg-gray-700 disabled:opacity-50" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
        <button onClick={handlePlayPause} disabled={status==='finished'} className="px-4 py-2 w-24 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed">
          {status === 'playing' || status === 'backtracking' ? 'Pause' : 'Play'}
        </button>
        <button onClick={initialize} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">Reset</button>
        <div className="flex items-center gap-2">
            <label htmlFor="speed" className="text-sm">Speed</label>
            <input type="range" id="speed" min="50" max="500" step="50" value={550-speed} onChange={(e) => setSpeed(550 - parseInt(e.target.value))} className="w-24"/>
        </div>
      </div>
       <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-inner">
          <div className="text-center mb-4">
            <p className="font-semibold text-lg">
              LCS: <span className="font-mono text-teal-600 dark:text-teal-400 font-bold text-xl">{lcs || (status !== 'idle' ? '...' : '')}</span>
            </p>
          </div>
          <div className="overflow-x-auto p-2">
          {dpTable.length > 0 && <div className="inline-block relative font-mono text-sm">
              <div className="flex">
                  <div className="w-10 h-10 flex-shrink-0"></div><div className="w-10 h-10 flex-shrink-0"></div>
                  {stringB.split('').map((char, j) => (<div key={j} className="w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold text-teal-700 dark:text-teal-300">{char}</div>))}
              </div>
              {dpTable.map((row, r) => (
                  <div key={r} className="flex">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center font-bold text-teal-700 dark:text-teal-300">{r > 0 ? stringA[r-1] : ''}</div>
                      {row.map((val, c) => {
                          const isActive = activeCell && activeCell.r === r && activeCell.c === c;
                          const isDep = deps.some(d => d.r === r && d.c === c);
                          const isPath = path.some(p => p.r === r && p.c === c);
                          return (
                          <div key={c} className={`w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gray-200 dark:border-gray-600 transition-all duration-200
                              ${isPath ? 'bg-teal-400 dark:bg-teal-500 text-white' : 
                               isActive ? 'bg-yellow-300 dark:bg-yellow-600 ring-2 ring-yellow-500' :
                               isDep ? 'bg-blue-200 dark:bg-blue-800' :
                               val !== null ? 'bg-gray-50 dark:bg-gray-700' : 'bg-gray-200 dark:bg-gray-800'
                              }`}>{val}</div>
                          )}
                      )}
                  </div>
              ))}
          </div>}
          </div>
       </div>
    </div>
  );
};


// Main Page Component
export default function DynamicProgrammingPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const { topic, category, sections } = dynamicProgrammingData;
  const languages = ["c", "cpp", "java", "python", "javascript"];

  // --- State for Fibonacci Visualization ---
  const [fibN, setFibN] = useState(5);
  const [fibResult, setFibResult] = useState(null);
  const [fibTree, setFibTree] = useState(null);
  const [showMemoInFib, setShowMemoInFib] = useState(true);

  // --- Fibonacci Calculation Logic ---
  const calculateFibonacci = useCallback(() => {
    let nodeId = 0;
    const memo = {};
    const seen = {}; 

    function buildTree(n) {
      const id = nodeId++;
      if (seen[n] && showMemoInFib) {
        if (memo[n] !== undefined) {
          return { n, id, children: [], isCached: true, isDuplicate: true };
        }
      }
      seen[n] = true;

      if (n <= 1) {
        return { n, id, children: [], isCached: false, isDuplicate: seen[n] && n > 1 };
      }

      if (showMemoInFib && memo[n] !== undefined) {
         return { n, id, children: [], isCached: true, isDuplicate: true };
      }
      
      const leftChild = buildTree(n - 1);
      const rightChild = buildTree(n - 2);
      
      function fib(num) {
        if (num <= 1) return num;
        if (memo[num]) return memo[num];
        return memo[num] = fib(num - 1) + fib(num - 2);
      }
      fib(n);

      return { n, id, children: [leftChild, rightChild], isCached: false, isDuplicate: false };
    }

    function fibSimple(n) {
        if (n <= 1) return n;
        return fibSimple(n-1) + fibSimple(n-2);
    }
    
    setFibResult(showMemoInFib ? (memo[fibN] || fibSimple(fibN)) : fibSimple(fibN));
    setFibTree(buildTree(fibN));
  }, [fibN, showMemoInFib]);

  useEffect(() => {
    calculateFibonacci();
  }, [calculateFibonacci]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
          <p className="text-xl">{category}</p>
          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-white/20 rounded-full">🧠 Memoization</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">📊 Tabulation</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">⚡ Optimization</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">🎯 Why Dynamic Programming Matters</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-purple-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">{sections.student_hook}</p>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">🎮 Interactive DP Demonstrations</h2>
          <div className="space-y-8">
            <FibonacciVisualization n={fibN} setN={setFibN} result={fibResult} tree={fibTree} showMemo={showMemoInFib} />
            <LCSVisualizer />
          </div>
        </section>
        
        {/* ======================================= */}
        {/* == ALL MISSING SECTIONS ARE RESTORED == */}
        {/* ======================================= */}

        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">🧠 Memoization - Top-Down Approach</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">💡 Understanding Memoization</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sections.core_concepts.memoization.concept}</p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 dark:text-blue-200 font-medium"><span className="font-bold">Real-world example:</span> {sections.core_concepts.memoization.realWorldExample}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.core_concepts.memoization.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">{advantage.split(" ")[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{advantage.substring(advantage.indexOf(" ") + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3>
              <ul className="space-y-3">
                {sections.core_concepts.memoization.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">{disadvantage.split(" ")[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(disadvantage.indexOf(" ") + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">📊 Tabulation - Bottom-Up Approach</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">💡 Understanding Tabulation</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sections.core_concepts.tabulation.concept}</p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800 dark:text-green-200 font-medium"><span className="font-bold">Real-world example:</span> {sections.core_concepts.tabulation.realWorldExample}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
            	<ul className="space-y-3">
                {sections.core_concepts.tabulation.advantages.map((advantage, index) => (<li key={index} className="flex items-start space-x-3"><span className="text-green-500 text-lg">{advantage.split(" ")[0]}</span><span className="text-gray-700 dark:text-gray-300">{advantage.substring(advantage.indexOf(" ") + 1)}</span></li>))}
            	</ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
            	<h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3>
            	<ul className="space-y-3">
                {sections.core_concepts.tabulation.disadvantages.map((disadvantage, index) => (<li key={index} className="flex items-start space-x-3"><span className="text-red-500 text-lg">{disadvantage.split(" ")[0]}</span><span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(disadvantage.indexOf(" ") + 1)}</span></li>))}
            	</ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">🎯 Optimal Substructure Property</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-orange-500">
            <h3 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">💡 Understanding Optimal Substructure</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sections.core_concepts.optimal_substructure.concept}</p>
          	<div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-400">
            	<p className="text-orange-800 dark:text-orange-200 font-medium"><span className="font-bold">Real-world example:</span> {sections.core_concepts.optimal_substructure.realWorldExample}</p>
          	</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          	<h3 className="text-2xl font-bold mb-6 text-center text-orange-700 dark:text-orange-300">🔍 Classic Examples</h3>
          	<div className="grid md:grid-cols-2 gap-4">
            	{sections.core_concepts.optimal_substructure.examples.map((example, index) => (<div key={index} className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border-l-4 border-orange-400 hover:shadow-lg transition-shadow duration-300"><p className="text-gray-700 dark:text-gray-300">{example}</p></div>))}
          	</div>
          </div>
      	</section>

        <section>
        	<h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">🏢 Dynamic Programming in Industry</h2>
        	<div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          	<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            	{sections.industry_applications.map((application, index) => (<div key={index} className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border-l-4 border-violet-400 hover:shadow-lg transition-shadow duration-300"><p className="text-gray-700 dark:text-gray-300">{application}</p></div>))}
          	</div>
        	</div>
      	</section>

        <section>
        	<h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">💻 Real-World Code Examples</h2>
        	<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          	<div className="bg-gray-100 dark:bg-gray-700 p-4">
            	<div className="flex flex-wrap justify-center gap-2">
              	{languages.map((lang) => (<button key={lang} onClick={() => setSelectedLanguage(lang)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedLanguage === lang ? "bg-rose-500 text-white shadow-lg" : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500"}`}>{lang.toUpperCase()}</button>))}
            	</div>
          	</div>
          	<div className="p-6">
            	<pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed"><code dangerouslySetInnerHTML={{ __html: highlightSyntax(sections.code_examples[selectedLanguage], selectedLanguage) }}/></pre>
          	</div>
        	</div>
      	</section>

        <section>
        	<h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">⚡ Performance Analysis</h2>
        	<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          	<div className="overflow-x-auto">
            	<table className="w-full">
              	<thead className="bg-gray-100 dark:bg-gray-700">
                	<tr>
                  	<th className="px-6 py-4 text-left text-lg font-semibold text-gray-800 dark:text-gray-200">Problem</th>
                  	<th className="px-6 py-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">Naive Approach</th>
                  	<th className="px-6 py-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">DP Approach</th>
                  	<th className="px-6 py-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">Improvement</th>
                	</tr>
              	</thead>
              	<tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                	{[ { problem: "Fibonacci Sequence", naive: "O(2^n)", dp: "O(n)", improvement: "Exponential → Linear" }, { problem: "Longest Common Subsequence", naive: "O(2^n)", dp: "O(m×n)", improvement: "Exponential → Quadratic" }, { problem: "0/1 Knapsack", naive: "O(2^n)", dp: "O(n×W)", improvement: "Exponential → Polynomial" }, { problem: "Edit Distance", naive: "O(3^n)", dp: "O(m×n)", improvement: "Exponential → Quadratic" }, { problem: "Coin Change", naive: "O(S^n)", dp: "O(n×amount)", improvement: "Exponential → Linear" }, { problem: "Matrix Chain Multiplication", naive: "O(2^n)", dp: "O(n³)", improvement: "Exponential → Cubic" }].map((row, index) => (
                  	<tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                    	<td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">{row.problem}</td>
                    	<td className="px-6 py-4 text-center"><span className="px-3 py-1 rounded-full text-sm font-mono bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">{row.naive}</span></td>
                    	<td className="px-6 py-4 text-center"><span className="px-3 py-1 rounded-full text-sm font-mono bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">{row.dp}</span></td>
                    	<td className="px-6 py-4 text-center"><span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">{row.improvement}</span></td>
                  	</tr>
                	))}
              	</tbody>
            	</table>
          	</div>
        	</div>
      	</section>

        <section>
        	<h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">🎤 Interview Questions & Answers</h2>
        	<div className="space-y-4">
          	{sections.interview_questions.map((qa, index) => (
            	<div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              	<button onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === index ? -1 : index)} className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                	<div className="flex justify-between items-start">
                  	<div className="flex-1">
                    	<h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{qa.question}</h3>
                    	<span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${qa.difficulty === "Easy" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : qa.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"}`}>{qa.difficulty}</span>
                  	</div>
                  	<div className="ml-4"><svg className={`w-6 h-6 transition-transform duration-200 ${selectedQuestionIndex === index ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div>
                	</div>
              	</button>
              	{selectedQuestionIndex === index && (<div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"><div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4"><p className="text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Answer:</strong> {qa.answer}</p></div></div>)}
            	</div>
          	))}
        	</div>
      	</section>

        <section>
        	<h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">🚀 Hands-on Project Ideas</h2>
        	<div className="grid md:grid-cols-2 gap-8">
          	{sections.project_ideas.map((project, index) => (
            	<div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-violet-500">
              	<div className="mb-4">
                	<h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3>
                	<span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.difficulty === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : project.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"}`}>{project.difficulty}</span>
              	</div>
              	<p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{project.description}</p>
              	<div className="space-y-2">
                	<h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies:</h4>
                	<div className="flex flex-wrap gap-2">
                  	{project.technologies.map((tech, techIndex) => (<span key={techIndex} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-medium">{tech}</span>))}
                	</div>
              	</div>
            	</div>
          	))}
        	</div>
      	</section>

      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Master Dynamic Programming Today! 🚀</h3>
          <p className="text-lg text-gray-300 mb-6">Turn impossible exponential problems into efficient polynomial solutions with the power of DP!</p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full">🧠 Remember</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">🔄 Reuse</span>
          	<span className="px-4 py-2 bg-white/10 rounded-full">⚡ Optimize</span>
          </div>
        </div>
      </footer>
    </div>
  );
}