import React, { useState, useEffect } from 'react';
import { Play, Code, Lightbulb, Building2, ChevronDown, ChevronUp, Clock, Zap, Brain, Cpu } from 'lucide-react';

const DynamicProgramming = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const [fibInput, setFibInput] = useState(10);
  const [fibResult, setFibResult] = useState(null);
  const [showVisualization, setShowVisualization] = useState(false);

  // Code examples in 5 languages
  const codeExamples = {
    javascript: {
      name: 'JavaScript',
      code: `// Fibonacci using Dynamic Programming - Memoization
function fibMemo(n, memo = {}) {
    // Base cases
    if (n <= 1) return n;
    
    // Check if already computed
    if (memo[n]) return memo[n];
    
    // Compute and store result
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

// Tabulation approach (Bottom-up)
function fibTab(n) {
    if (n <= 1) return n;
    
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Space optimized O(1)
function fibOptimized(n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}`,
      color: 'text-yellow-400'
    },
    python: {
      name: 'Python',
      code: `# Fibonacci using Dynamic Programming - Memoization
def fib_memo(n, memo={}):
    # Base cases
    if n <= 1:
        return n
    
    # Check if already computed
    if n in memo:
        return memo[n]
    
    # Compute and store result
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]

# Tabulation approach (Bottom-up)
def fib_tab(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

# Space optimized O(1)
def fib_optimized(n):
    if n <= 1:
        return n
    
    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    
    return b`,
      color: 'text-blue-400'
    },
    java: {
      name: 'Java',
      code: `import java.util.HashMap;
import java.util.Map;

public class DynamicProgramming {
    
    // Fibonacci using Memoization
    public static long fibMemo(int n, Map<Integer, Long> memo) {
        // Base cases
        if (n <= 1) return n;
        
        // Check if already computed
        if (memo.containsKey(n)) {
            return memo.get(n);
        }
        
        // Compute and store result
        long result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
        memo.put(n, result);
        return result;
    }
    
    // Tabulation approach (Bottom-up)
    public static long fibTab(int n) {
        if (n <= 1) return n;
        
        long[] dp = new long[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n];
    }
    
    // Space optimized O(1)
    public static long fibOptimized(int n) {
        if (n <= 1) return n;
        
        long a = 0, b = 1, c;
        for (int i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
}`,
      color: 'text-orange-400'
    },
    c: {
      name: 'C',
      code: `#include <stdio.h>
#include <string.h>

// Fibonacci using Memoization
long long memo[1001];

long long fibMemo(int n) {
    // Base cases
    if (n <= 1) return n;
    
    // Check if already computed
    if (memo[n] != -1) return memo[n];
    
    // Compute and store result
    memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
    return memo[n];
}

// Tabulation approach (Bottom-up)
long long fibTab(int n) {
    if (n <= 1) return n;
    
    long long dp[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Space optimized O(1)
long long fibOptimized(int n) {
    if (n <= 1) return n;
    
    long long a = 0, b = 1, c;
    for (int i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

int main() {
    // Initialize memo array
    memset(memo, -1, sizeof(memo));
    
    int n = 10;
    printf("Fibonacci of %d: %lld\\n", n, fibMemo(n));
    return 0;
}`,
      color: 'text-green-400'
    },
    cpp: {
      name: 'C++',
      code: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class DynamicProgramming {
public:
    // Fibonacci using Memoization
    long long fibMemo(int n, unordered_map<int, long long>& memo) {
        // Base cases
        if (n <= 1) return n;
        
        // Check if already computed
        if (memo.find(n) != memo.end()) {
            return memo[n];
        }
        
        // Compute and store result
        memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
        return memo[n];
    }
    
    // Tabulation approach (Bottom-up)
    long long fibTab(int n) {
        if (n <= 1) return n;
        
        vector<long long> dp(n + 1);
        dp[0] = 0;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n];
    }
    
    // Space optimized O(1)
    long long fibOptimized(int n) {
        if (n <= 1) return n;
        
        long long a = 0, b = 1, c;
        for (int i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
};

int main() {
    DynamicProgramming dp;
    unordered_map<int, long long> memo;
    
    int n = 10;
    cout << "Fibonacci of " << n << ": " << dp.fibMemo(n, memo) << endl;
    return 0;
}`,
      color: 'text-purple-400'
    }
  };

  // Interactive Fibonacci calculator
  const calculateFibonacci = () => {
    if (fibInput <= 1) {
      setFibResult(fibInput);
      return;
    }
    
    let a = 0, b = 1, c;
    for (let i = 2; i <= fibInput; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    setFibResult(b);
  };

  useEffect(() => {
    calculateFibonacci();
  }, [fibInput]);

  const realWorldApplications = [
    {
      company: "Google",
      application: "PageRank Algorithm",
      description: "Uses DP principles for web page ranking and search optimization",
      icon: "🔍"
    },
    {
      company: "Netflix",
      application: "Content Recommendation",
      description: "Matrix factorization with DP for personalized content suggestions",
      icon: "🎬"
    },
    {
      company: "Amazon",
      application: "Supply Chain Optimization",
      description: "Warehouse inventory management and delivery route optimization",
      icon: "📦"
    },
    {
      company: "Uber/Lyft",
      application: "Route Planning",
      description: "Shortest path algorithms for efficient ride routing",
      icon: "🚗"
    },
    {
      company: "Facebook/Meta",
      application: "News Feed Algorithm",
      description: "Content prioritization using DP-based optimization",
      icon: "📱"
    },
    {
      company: "Microsoft",
      application: "Excel Calculations",
      description: "Dependency resolution and formula optimization",
      icon: "📊"
    },
    {
      company: "Tesla",
      application: "Battery Management",
      description: "Energy optimization for maximum battery efficiency",
      icon: "🔋"
    },
    {
      company: "Spotify",
      application: "Music Recommendation",
      description: "Collaborative filtering using DP techniques",
      icon: "🎵"
    },
    {
      company: "Trading Firms",
      application: "Algorithmic Trading",
      description: "Portfolio optimization and risk management strategies",
      icon: "💹"
    },
    {
      company: "Bioinformatics",
      application: "DNA Sequence Alignment",
      description: "Gene matching and protein folding prediction",
      icon: "🧬"
    }
  ];

  const interviewQuestions = [
    {
      question: "What are the two main characteristics of Dynamic Programming problems?",
      answer: "1. Overlapping Subproblems: The recursive solution involves solving the same subproblems multiple times. 2. Optimal Substructure: The optimal solution can be constructed from optimal solutions of its subproblems."
    },
    {
      question: "Explain the difference between Memoization and Tabulation in DP.",
      answer: "Memoization (Top-down): Uses recursion with caching, solves subproblems on-demand, may cause stack overflow for deep recursion. Tabulation (Bottom-up): Uses iteration to build solution from smallest subproblems, avoids recursion overhead, generally more space-efficient."
    },
    {
      question: "What is the time complexity improvement of DP Fibonacci over naive recursion?",
      answer: "Naive recursion: O(2^n) exponential time. DP approach: O(n) linear time. This is a massive improvement - for n=40, naive takes seconds while DP takes microseconds."
    },
    {
      question: "When should you NOT use Dynamic Programming?",
      answer: "Don't use DP when: 1. No overlapping subproblems exist (like Merge Sort), 2. Greedy approach gives optimal solution, 3. Problem doesn't have optimal substructure, 4. Space constraints are too tight for memoization."
    },
    {
      question: "How do you identify if a problem can be solved using DP?",
      answer: "Look for: 1. Optimization problems (min/max), 2. Counting problems, 3. Decision problems with yes/no, 4. Problems that can be broken into similar smaller subproblems, 5. Recursive patterns with repeated calculations."
    },
    {
      question: "What is the space complexity trade-off in DP?",
      answer: "DP trades space for time. We use O(n) or O(n²) extra space to achieve dramatic time improvements from exponential to polynomial. However, space-optimized versions can often reduce space to O(1) when only recent values are needed."
    }
  ];

  const projectIdeas = [
    {
      title: "Smart Budget Planner",
      difficulty: "Beginner",
      description: "Build a personal finance app that uses DP to optimize spending across categories and maximize savings over time.",
      technologies: ["React", "JavaScript", "Chart.js"],
      dpConcept: "Knapsack Problem variant for budget allocation"
    },
    {
      title: "Route Optimization System",
      difficulty: "Intermediate",
      description: "Create a delivery route planner that finds the most efficient path for multiple stops using DP algorithms.",
      technologies: ["Python", "Flask", "Google Maps API"],
      dpConcept: "Traveling Salesman Problem with DP"
    },
    {
      title: "Text Auto-Correct Engine",
      difficulty: "Intermediate",
      description: "Develop a spell checker that suggests corrections using edit distance algorithms and DP optimization.",
      technologies: ["Java", "Spring Boot", "NLP Libraries"],
      dpConcept: "Edit Distance (Levenshtein Distance)"
    },
    {
      title: "Stock Trading Bot",
      difficulty: "Advanced",
      description: "Build an algorithmic trading system that uses DP to maximize profit from stock transactions with various constraints.",
      technologies: ["Python", "Pandas", "TradingView API"],
      dpConcept: "Stock Buy-Sell with cooldown and transaction limits"
    }
  ];

  // Generate Fibonacci sequence for visualization
  const generateFibSequence = (n) => {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Dynamic Programming
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Master the art of optimization. Transform exponential problems into linear solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold">Memoization</span>
            <span className="bg-green-500 text-black px-4 py-2 rounded-full font-semibold">Tabulation</span>
            <span className="bg-blue-500 text-black px-4 py-2 rounded-full font-semibold">Optimization</span>
          </div>
        </div>
      </div>

      {/* Hook Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-slate-800 rounded-2xl p-8 mb-12 border border-purple-500">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="text-yellow-400" size={32} />
              <h2 className="text-3xl font-bold text-yellow-400">The "Impossible" Speed-Up</h2>
            </div>
            <p className="text-xl leading-relaxed mb-6">
              Did you know that calculating the 45th Fibonacci number using standard recursion could take 
              <span className="text-red-400 font-bold"> several minutes</span> on a modern computer? 
              Yet with Dynamic Programming, you can find the 1000th term in 
              <span className="text-green-400 font-bold"> less than a microsecond</span>.
            </p>
            <div className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">🤔 The Paradox</h3>
              <p className="text-lg">
                How can being strategically lazy—by refusing to re-calculate something you've already solved—
                make a program not just a little faster, but <span className="text-yellow-400 font-bold">trillions of times faster</span>?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Definition */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Brain className="mx-auto text-purple-400 mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-6">What is Dynamic Programming?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-xl p-6 border border-blue-500">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Core Definition</h3>
              <p className="text-lg leading-relaxed">
                Dynamic Programming is an optimization technique that solves complex problems by breaking them into 
                simpler overlapping subproblems, solving each subproblem just once, and storing their solutions 
                to avoid redundant computation.
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-green-500">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Key Requirements</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">1.</span>
                  <span><strong>Overlapping Subproblems:</strong> Same subproblems appear multiple times</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-400">2.</span>
                  <span><strong>Optimal Substructure:</strong> Optimal solution contains optimal solutions to subproblems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Code Examples */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Code className="mx-auto text-green-400 mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-6">Code Examples in 5 Languages</h2>
            <p className="text-xl text-gray-300">See Fibonacci implementation with DP optimization</p>
          </div>

          {/* Language Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(codeExamples).map(([lang, data]) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedLanguage === lang
                    ? 'bg-purple-600 text-white scale-105'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto border border-purple-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-semibold ${codeExamples[selectedLanguage].color}`}>
                {codeExamples[selectedLanguage].name} Implementation
              </h3>
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <Play size={16} />
                Run Code
              </button>
            </div>
            <pre className="text-sm leading-relaxed overflow-x-auto">
              <code className={codeExamples[selectedLanguage].color}>
                {codeExamples[selectedLanguage].code}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Interactive Fibonacci Calculator */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Cpu className="mx-auto text-blue-400 mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-6">Interactive Fibonacci Demo</h2>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-blue-500">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">Calculate Fibonacci</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Enter n (1-50):</label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={fibInput}
                      onChange={(e) => setFibInput(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>1</span>
                      <span className="font-bold text-white">n = {fibInput}</span>
                      <span>50</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowVisualization(!showVisualization)}
                    className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg transition-colors"
                  >
                    {showVisualization ? 'Hide' : 'Show'} Visualization
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-green-400">Result</h3>
                <div className="bg-slate-700 rounded-lg p-6 text-center">
                  <p className="text-lg mb-2">Fibonacci({fibInput}) =</p>
                  <p className="text-3xl font-bold text-green-400">{fibResult?.toLocaleString()}</p>
                  <div className="mt-4 text-sm text-gray-400">
                    <p>Computed in O(n) time using DP</p>
                    <p>vs O(2^n) for naive recursion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visualization */}
            {showVisualization && (
              <div className="mt-8 p-6 bg-slate-700 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-yellow-400">Fibonacci Sequence Visualization</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {generateFibSequence(Math.min(fibInput, 20)).map((val, idx) => (
                    <div
                      key={idx}
                      className={`px-3 py-2 rounded text-sm font-semibold ${
                        idx === fibInput ? 'bg-green-500 text-black' : 'bg-slate-600 text-white'
                      }`}
                    >
                      F({idx}): {val}
                    </div>
                  ))}
                  {fibInput > 20 && <div className="px-3 py-2 text-gray-400">... and more</div>}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Real World Applications */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <Building2 className="mx-auto text-orange-400 mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-6">Real-World Applications</h2>
            <p className="text-xl text-gray-300">See how tech giants use Dynamic Programming</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realWorldApplications.map((app, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{app.icon}</span>
                  <h3 className="text-xl font-semibold text-purple-400">{app.company}</h3>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-blue-400">{app.application}</h4>
                <p className="text-gray-300 leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Questions */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Lightbulb className="mx-auto text-yellow-400 mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-6">Common Interview Questions</h2>
            <p className="text-xl text-gray-300">Master these concepts for your next technical interview</p>
          </div>

          <div className="space-y-4">
            {interviewQuestions.map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl border border-gray-700">
                <button
                  onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700 transition-colors rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-blue-400">{item.question}</h3>
                  {expandedQuestion === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {expandedQuestion === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Code className="mx-auto text-green-400 mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-6">Build Real Projects</h2>
            <p className="text-xl text-gray-300">Apply your DP knowledge with these hands-on projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectIdeas.map((project, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-green-400">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.difficulty === 'Beginner' ? 'bg-green-500 text-black' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-500 text-black' :
                    'bg-red-500 text-black'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700 px-2 py-1 rounded text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-700 p-3 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-400 mb-1">DP Concept:</h4>
                  <p className="text-sm text-gray-300">{project.dpConcept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Complexity Comparison */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Clock className="mx-auto text-red-400 mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-6">Performance Comparison</h2>
            <p className="text-xl text-gray-300">See the dramatic difference DP makes</p>
          </div>

          <div className="bg-slate-800 rounded-xl p-8 border border-red-500">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-red-900/30 rounded-lg p-6 border border-red-500">
                <h3 className="text-2xl font-bold text-red-400 mb-2">Naive Recursion</h3>
                <p className="text-4xl font-bold mb-2">O(2^n)</p>
                <p className="text-gray-300">Exponential growth</p>
                <p className="text-sm text-red-300 mt-2">fib(45) ≈ 8 seconds</p>
              </div>
              
              <div className="bg-yellow-900/30 rounded-lg p-6 border border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">With Memoization</h3>
                <p className="text-4xl font-bold mb-2">O(n)</p>
                <p className="text-gray-300">Linear growth</p>
                <p className="text-sm text-yellow-300 mt-2">fib(45) ≈ 0.001ms</p>
              </div>
              
              <div className="bg-green-900/30 rounded-lg p-6 border border-green-500">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Space Optimized</h3>
                <p className="text-4xl font-bold mb-2">O(1)</p>
                <p className="text-gray-300">Constant space</p>
                <p className="text-sm text-green-300 mt-2">fib(1000) ≈ 0.001ms</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-xl text-yellow-400 font-semibold">
                That's a speedup of over 8 million times! 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common DP Patterns */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Brain className="mx-auto text-purple-400 mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-6">Common DP Patterns</h2>
            <p className="text-xl text-gray-300">Master these patterns to solve any DP problem</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                pattern: "Linear DP",
                examples: "Fibonacci, Climbing Stairs, House Robber",
                complexity: "O(n) time, O(n) space",
                color: "border-blue-500"
              },
              {
                pattern: "2D DP",
                examples: "Unique Paths, Edit Distance, LCS",
                complexity: "O(m×n) time, O(m×n) space",
                color: "border-green-500"
              },
              {
                pattern: "Knapsack DP",
                examples: "0/1 Knapsack, Subset Sum, Coin Change",
                complexity: "O(n×W) time, O(n×W) space",
                color: "border-yellow-500"
              },
              {
                pattern: "Interval DP",
                examples: "Matrix Chain, Palindrome Partitioning",
                complexity: "O(n³) time, O(n²) space",
                color: "border-purple-500"
              },
              {
                pattern: "Tree DP",
                examples: "Binary Tree, Max Path Sum",
                complexity: "O(n) time, O(h) space",
                color: "border-red-500"
              },
              {
                pattern: "State Machine DP",
                examples: "Stock Trading, Game Strategy",
                complexity: "O(n×states) time",
                color: "border-pink-500"
              }
            ].map((pattern, index) => (
              <div key={index} className={`bg-slate-800 rounded-xl p-6 border ${pattern.color}`}>
                <h3 className="text-xl font-semibold mb-3 text-white">{pattern.pattern}</h3>
                <p className="text-gray-300 mb-3">{pattern.examples}</p>
                <p className="text-sm text-gray-400">{pattern.complexity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Lightbulb className="mx-auto text-yellow-400 mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-6">Your Learning Journey</h2>
            <p className="text-xl text-gray-300">Follow this path to master Dynamic Programming</p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Master the Basics",
                topics: "Fibonacci, Climbing Stairs, Min Cost Climbing Stairs",
                time: "1-2 weeks",
                color: "bg-green-600"
              },
              {
                step: 2,
                title: "Linear DP Problems",
                topics: "House Robber, Maximum Subarray, Decode Ways",
                time: "2-3 weeks",
                color: "bg-blue-600"
              },
              {
                step: 3,
                title: "2D DP Challenges",
                topics: "Unique Paths, Edit Distance, Longest Common Subsequence",
                time: "3-4 weeks",
                color: "bg-purple-600"
              },
              {
                step: 4,
                title: "Advanced Patterns",
                topics: "Knapsack variants, Interval DP, State Machine DP",
                time: "4-6 weeks",
                color: "bg-red-600"
              },
              {
                step: 5,
                title: "Expert Level",
                topics: "Tree DP, Digit DP, Probability DP, Game Theory",
                time: "6-8 weeks",
                color: "bg-yellow-600"
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-center gap-6 bg-slate-800 rounded-xl p-6 border border-gray-700">
                <div className={`w-16 h-16 ${phase.color} rounded-full flex items-center justify-center text-2xl font-bold text-white`}>
                  {phase.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">{phase.title}</h3>
                  <p className="text-gray-300 mb-1">{phase.topics}</p>
                  <p className="text-sm text-gray-400">Estimated time: {phase.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Code?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start with simple problems, understand the patterns, and gradually work your way up to complex optimizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
              Start Learning
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View More Examples
            </button>
          </div>
          <p className="text-gray-400 mt-8">
            Remember: Dynamic Programming isn't just about coding—it's about thinking efficiently.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DynamicProgramming;