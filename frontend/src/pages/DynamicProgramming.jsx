import React, { useState, useEffect } from "react";

// CORRECTED AND CONSOLIDATED DATA OBJECT
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
        advantages: [
          "🚀 Exponential to polynomial time improvement",
          "📝 Easy to implement (add caching to recursion)",
          "🧠 Intuitive top-down thinking approach",
          "🔄 Natural recursive problem decomposition",
        ],
        disadvantages: [
          "📚 Higher memory usage due to cache storage",
          "🔄 Potential stack overflow with deep recursion",
          "💾 Cache management overhead",
          "🎯 May compute unnecessary subproblems",
        ],
      },
      tabulation: {
        concept:
          "Tabulation builds solutions bottom-up, starting from the smallest subproblems and working towards the final answer. It's like filling out a table systematically, where each cell depends on previously computed cells. This iterative approach eliminates recursion entirely.",
        realWorldExample:
          "Think of building a pyramid - you start with the foundation blocks and systematically build each layer, ensuring each level is complete before moving to the next!",
        advantages: [
          "💾 Optimal space usage (often reducible)",
          "⚡ No recursion overhead or stack issues",
          "🎯 Computes only necessary subproblems",
          "🔄 Easy to optimize space complexity",
        ],
        disadvantages: [
          "🧮 Requires careful order of computation",
          "📊 Bottom-up thinking can be less intuitive",
          "🎯 Must solve all subproblems (even unused ones)",
          "🔧 More complex to implement initially",
        ],
      },
      optimal_substructure: {
        concept:
          "A problem has optimal substructure if the optimal solution contains optimal solutions to its subproblems. This means you can break down a complex problem into smaller pieces, solve each piece optimally, and combine them for the overall optimal solution.",
        realWorldExample:
          "Finding the shortest path from New York to Los Angeles through Chicago means finding the shortest path from NY to Chicago AND the shortest path from Chicago to LA!",
        examples: [
          "🛤️ Shortest Path Problems",
          "💰 Knapsack Problem",
          "✂️ Edit Distance",
          "📏 Longest Common Subsequence",
        ],
      },
    },
    interview_questions: [
      {
        question: "What is the difference between memoization and tabulation?",
        answer:
          "Memoization is top-down DP using recursion with caching, solving problems on-demand. Tabulation is bottom-up DP using iteration, solving all subproblems systematically. Memoization may skip unnecessary subproblems but uses recursion stack, while tabulation is iterative but may compute all subproblems.",
        difficulty: "Medium",
      },
      {
        question: "When should you use Dynamic Programming?",
        answer:
          "Look for two key properties: (1) Optimal Substructure - optimal solution contains optimal solutions to subproblems, and (2) Overlapping Subproblems - same subproblems are solved multiple times. If both exist, DP can optimize the solution from exponential to polynomial time.",
        difficulty: "Medium",
      },
      {
        question:
          "Explain the time and space complexity of the Fibonacci sequence using different approaches.",
        answer:
          "Naive recursion: O(2^n) time, O(n) space. Memoization: O(n) time, O(n) space. Tabulation: O(n) time, O(n) space. Space-optimized: O(n) time, O(1) space. The space-optimized version only keeps track of the last two values.",
        difficulty: "Easy",
      },
      {
        question: "How would you solve the 0/1 Knapsack problem using DP?",
        answer:
          "Use a 2D DP table dp[i][w] representing maximum value using first i items with weight limit w. For each item, choose max of (excluding item: dp[i-1][w]) or (including item: value[i] + dp[i-1][w-weight[i]] if weight[i] <= w). Time: O(nW), Space: O(nW), optimizable to O(W).",
        difficulty: "Hard",
      },
      {
        question:
          "What is the optimal substructure property and why is it important for DP?",
        answer:
          "Optimal substructure means an optimal solution to a problem contains optimal solutions to its subproblems. It's crucial for DP because it allows us to build optimal solutions from smaller optimal solutions. Without this property, DP won't guarantee optimal results.",
        difficulty: "Medium",
      },
    ],
    industry_applications: [
      "💰 Finance - Portfolio optimization and algorithmic trading",
      "🎮 Gaming - AI decision making and pathfinding algorithms",
      "🧬 Bioinformatics - DNA sequence alignment and gene prediction",
      "📱 Mobile Apps - Auto-correct and text prediction systems",
      "🚗 Autonomous Vehicles - Route planning and collision avoidance",
      "📊 Machine Learning - Neural network optimization",
      "🏪 E-commerce - Recommendation systems and pricing strategies",
      "📡 Telecommunications - Network routing and bandwidth allocation",
    ],
    code_examples: {
      c: `// C Dynamic Programming - Fibonacci with Memoization
#include <stdio.h>
#include <string.h>

#define MAX_N 100

// Memoization approach
long long memo[MAX_N];

long long fibonacci_memo(int n) {
    // Base cases
    if (n <= 1) return n;
    
    // Check if already computed
    if (memo[n] != -1) return memo[n];
    
    // Compute and store result
    memo[n] = fibonacci_memo(n-1) + fibonacci_memo(n-2);
    return memo[n];
}

// Tabulation approach
long long fibonacci_tabulation(int n) {
    if (n <= 1) return n;
    
    long long dp[n+1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    
    return dp[n];
}

// Space-optimized tabulation
long long fibonacci_optimized(int n) {
    if (n <= 1) return n;
    
    long long prev2 = 0, prev1 = 1, current;
    
    for (int i = 2; i <= n; i++) {
        current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return current;
}

int main() {
    int n = 40;
    
    // Initialize memoization array
    memset(memo, -1, sizeof(memo));
    
    printf("=== Fibonacci Computation Comparison ===\\n");
    printf("Computing F(%d):\\n", n);
    
    printf("Memoization: %lld\\n", fibonacci_memo(n));
    printf("Tabulation: %lld\\n", fibonacci_tabulation(n));
    printf("Space-Optimized: %lld\\n", fibonacci_optimized(n));
    
    // Demonstrate the power of DP
    printf("\\n=== Performance Analysis ===\\n");
    printf("Without DP: O(2^n) = %lld operations\\n", (1LL << n));
    printf("With DP: O(n) = %d operations\\n", n);
    printf("Speedup: %.2fx faster!\\n", (double)(1LL << n) / n);
    
    return 0;
}`,
      cpp: `// C++ Dynamic Programming - Longest Common Subsequence
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class LongestCommonSubsequence {
private:
    string text1, text2;
    vector<vector<int>> memo;
    
    // Memoization approach
    int lcs_memo(int i, int j) {
        if (i >= text1.length() || j >= text2.length()) {
            return 0;
        }
        
        if (memo[i][j] != -1) {
            return memo[i][j];
        }
        
        if (text1[i] == text2[j]) {
            memo[i][j] = 1 + lcs_memo(i + 1, j + 1);
        } else {
            memo[i][j] = max(lcs_memo(i + 1, j), lcs_memo(i, j + 1));
        }
        
        return memo[i][j];
    }
    
public:
    LongestCommonSubsequence(string s1, string s2) : text1(s1), text2(s2) {
        memo.resize(s1.length(), vector<int>(s2.length(), -1));
    }
    
    // Tabulation approach with path reconstruction
    pair<int, string> lcs_tabulation() {
        int m = text1.length(), n = text2.length();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        
        // Fill DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1[i-1] == text2[j-1]) {
                    dp[i][j] = dp[i-1][j-1] + 1;
                } else {
                    dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        
        // Reconstruct LCS
        string lcs = "";
        int i = m, j = n;
        while (i > 0 && j > 0) {
            if (text1[i-1] == text2[j-1]) {
                lcs = text1[i-1] + lcs;
                i--; j--;
            } else if (dp[i-1][j] > dp[i][j-1]) {
                i--;
            } else {
                j--;
            }
        }
        
        return {dp[m][n], lcs};
    }
    
    int lcs_memoization() {
        return lcs_memo(0, 0);
    }
    
    void printAnalysis() {
        cout << "=== Longest Common Subsequence Analysis ===\\n";
        cout << "Text 1: \\"" << text1 << "\\"\\n";
        cout << "Text 2: \\"" << text2 << "\\"\\n";
        
        auto result = lcs_tabulation();
        cout << "LCS Length: " << result.first << "\\n";
        cout << "LCS String: \\"" << result.second << "\\"\\n";
        
        cout << "\\n=== Applications ===\\n";
        cout << "📝 Text diff tools (Git, editors)\\n";
        cout << "🧬 DNA sequence analysis\\n";
        cout << "🔍 Plagiarism detection\\n";
        cout << "📱 Auto-complete features\\n";
    }
};

int main() {
    // Example: Compare two DNA sequences
    LongestCommonSubsequence lcs("AGGTAB", "GXTXAYB");
    lcs.printAnalysis();
    
    // Example: Text similarity
    cout << "\\n" << string(50, '=') << "\\n";
    LongestCommonSubsequence textSim("programming", "algorithm");
    textSim.printAnalysis();
    
    return 0;
}`,
      java: `// Java Dynamic Programming - Knapsack Problem
import java.util.*;

public class KnapsackProblem {
    static class Item {
        int weight, value;
        String name;
        
        Item(String name, int weight, int value) {
            this.name = name;
            this.weight = weight;
            this.value = value;
        }
        
        @Override
        public String toString() {
            return String.format("%s (W:%d, V:%d)", name, weight, value);
        }
    }
    
    // Memoization approach
    public static int knapsackMemo(Item[] items, int capacity, int index, 
                                   Map<String, Integer> memo) {
        // Base case
        if (index >= items.length || capacity <= 0) {
            return 0;
        }
        
        String key = index + "," + capacity;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        
        // Don't include current item
        int exclude = knapsackMemo(items, capacity, index + 1, memo);
        
        // Include current item (if it fits)
        int include = 0;
        if (items[index].weight <= capacity) {
            include = items[index].value + 
                      knapsackMemo(items, capacity - items[index].weight, index + 1, memo);
        }
        
        int result = Math.max(include, exclude);
        memo.put(key, result);
        return result;
    }
    
    // Tabulation approach with item tracking
    public static Result knapsackTabulation(Item[] items, int capacity) {
        int n = items.length;
        int[][] dp = new int[n + 1][capacity + 1];
        
        // Fill DP table
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= capacity; w++) {
                // Don't include current item
                dp[i][w] = dp[i-1][w];
                
                // Include current item if it fits and gives better value
                if (items[i-1].weight <= w) {
                    int includeValue = items[i-1].value + dp[i-1][w - items[i-1].weight];
                    if (includeValue > dp[i][w]) {
                        dp[i][w] = includeValue;
                    }
                }
            }
        }
        
        // Backtrack to find selected items
        List<Item> selectedItems = new ArrayList<>();
        int w = capacity;
        for (int i = n; i > 0 && dp[i][w] > 0; i--) {
            if (dp[i][w] != dp[i-1][w]) {
                selectedItems.add(items[i-1]);
                w -= items[i-1].weight;
            }
        }
        
        return new Result(dp[n][capacity], selectedItems);
    }
    
    static class Result {
        int maxValue;
        List<Item> selectedItems;
        
        Result(int maxValue, List<Item> selectedItems) {
            this.maxValue = maxValue;
            this.selectedItems = selectedItems;
        }
    }
    
    public static void main(String[] args) {
        // Real-world example: Resource allocation for a project
        Item[] items = {
            new Item("Machine Learning Engineer", 5, 80),
            new Item("Frontend Developer", 3, 50),
            new Item("Backend Developer", 4, 60),
            new Item("DevOps Engineer", 2, 40),
            new Item("UI/UX Designer", 3, 45),
            new Item("Product Manager", 2, 35),
            new Item("Data Scientist", 4, 70)
        };
        
        int budgetCapacity = 15; // Budget units available
        
        System.out.println("=== Project Team Optimization (Knapsack) ===");
        System.out.println("Available Budget: " + budgetCapacity + " units");
        System.out.println("\\nAvailable Team Members:");
        for (Item item : items) {
            System.out.println("  " + item);
        }
        
        // Memoization solution
        Map<String, Integer> memo = new HashMap<>();
        int memoResult = knapsackMemo(items, budgetCapacity, 0, memo);
        
        // Tabulation solution
        Result tabulationResult = knapsackTabulation(items, budgetCapacity);
        
        System.out.println("\\n=== Optimal Team Selection ===");
        System.out.println("Maximum Team Value: " + tabulationResult.maxValue);
        System.out.println("Selected Team Members:");
        
        int totalWeight = 0;
        for (Item item : tabulationResult.selectedItems) {
            System.out.println("  ✓ " + item);
            totalWeight += item.weight;
        }
        
        System.out.println("\\nTotal Budget Used: " + totalWeight + "/" + budgetCapacity);
        System.out.println("Budget Efficiency: " + 
                           String.format("%.2f", (double)tabulationResult.maxValue / totalWeight) + 
                           " value per unit");
        
        System.out.println("\\n=== Algorithm Comparison ===");
        System.out.println("Memoization Result: " + memoResult);
        System.out.println("Tabulation Result: " + tabulationResult.maxValue);
        System.out.println("✓ Both approaches give same optimal result!");
    }
}`,
      python: `# Python Dynamic Programming - Edit Distance (Levenshtein Distance)
import time
from functools import lru_cache

class EditDistanceAnalyzer:
    def __init__(self, str1, str2):
        self.str1 = str1
        self.str2 = str2
        self.memo = {}
    
    # Memoization approach
    @lru_cache(maxsize=None)
    def edit_distance_memo(self, i, j):
        """Top-down DP with memoization"""
        if i == 0:
            return j
        if j == 0:
            return i
        
        if self.str1[i-1] == self.str2[j-1]:
            return self.edit_distance_memo(i-1, j-1)
        
        return 1 + min(
            self.edit_distance_memo(i, j-1),     # Insert
            self.edit_distance_memo(i-1, j),     # Remove
            self.edit_distance_memo(i-1, j-1)    # Replace
        )
    
    # Tabulation approach
    def edit_distance_tabulation(self):
        """Bottom-up DP with tabulation"""
        m, n = len(self.str1), len(self.str2)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # Initialize base cases
        for i in range(m + 1):
            dp[i][0] = i
        for j in range(n + 1):
            dp[0][j] = j
        
        # Fill DP table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if self.str1[i-1] == self.str2[j-1]:
                    dp[i][j] = dp[i-1][j-1]
                else:
                    dp[i][j] = 1 + min(
                        dp[i-1][j],      # Remove
                        dp[i][j-1],      # Insert
                        dp[i-1][j-1]     # Replace
                    )
        
        return dp[m][n]

def analyze_performance():
    """Compare different approaches and their performance"""
    test_cases = [
        ("kitten", "sitting"),
        ("saturday", "sunday"),
        ("intention", "execution")
    ]
    
    print("=== Edit Distance Analysis & Performance Comparison ===\\n")
    
    for str1, str2 in test_cases:
        analyzer = EditDistanceAnalyzer(str1, str2)
        
        print(f"Comparing: '{str1}' → '{str2}'")
        print("-" * 50)
        
        # Tabulation
        start_time = time.time()
        distance = analyzer.edit_distance_tabulation()
        tabulation_time = time.time() - start_time
        
        # Memoization
        start_time = time.time()
        memo_distance = analyzer.edit_distance_memo(len(str1), len(str2))
        memo_time = time.time() - start_time
        
        print(f"Edit Distance: {distance}")
        print(f"Tabulation Time: {tabulation_time:.6f}s")
        print(f"Memoization Time: {memo_time:.6f}s")
        print("\\n" + "="*60 + "\\n")

if __name__ == "__main__":
    analyze_performance()`,
      javascript: `// JavaScript Dynamic Programming - Coin Change Problem
class CoinChangeAnalyzer {
    constructor(coins) {
        this.coins = coins.sort((a, b) => a - b);
        this.memoCache = new Map();
    }
    
    // Tabulation approach - Bottom Up
    coinChangeTabulation(amount) {
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;
        
        // Build solution for all amounts from 1 to target
        for (let i = 1; i <= amount; i++) {
            for (const coin of this.coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        return dp[amount] === Infinity ? -1 : dp[amount];
    }
    
    // Get the actual coins used (with backtracking)
    getCoinCombination(amount) {
        const dp = new Array(amount + 1).fill(Infinity);
        const parent = new Array(amount + 1).fill(-1);
        dp[0] = 0;
        
        for (let i = 1; i <= amount; i++) {
            for (const coin of this.coins) {
                if (coin <= i && dp[i - coin] + 1 < dp[i]) {
                    dp[i] = dp[i - coin] + 1;
                    parent[i] = coin;
                }
            }
        }
        
        if (dp[amount] === Infinity) return { minCoins: -1, combination: [] };
        
        // Reconstruct the combination
        const combination = [];
        let current = amount;
        while (current > 0) {
            const coin = parent[current];
            combination.push(coin);
            current -= coin;
        }
        
        return { minCoins: dp[amount], combination: combination.sort((a, b) => b - a) };
    }
}

function runDemo() {
    console.log("=== Coin Change Demo ===\\n");
    
    const scenarios = [
        { coins: [1, 5, 10, 25], amount: 67, name: "US Coins" },
        { coins: [1, 4, 5], amount: 8, name: "Greedy Fails Case" }
    ];
    
    scenarios.forEach(({ coins, amount, name }) => {
        console.log(\`\\n📊 Test Case: \${name}\`);
        console.log(\`Coins: [\${coins.join(', ')}], Target: \${amount}\`);
        console.log("-".repeat(50));
        
        const analyzer = new CoinChangeAnalyzer(coins);
        const { minCoins, combination } = analyzer.getCoinCombination(amount);
        
        console.log(\`Minimum coins needed: \${minCoins}\`);
        console.log(\`Optimal combination: [\${combination.join(', ')}]\`);
    });
}

runDemo();`,
    },
    project_ideas: [
      {
        title: "Stock Trading Profit Optimizer",
        description:
          "Build a system that finds the maximum profit from buying and selling stocks with various constraints (single transaction, multiple transactions, cooldown period, transaction fees). Visualize profit curves and decision points.",
        difficulty: "Intermediate",
        technologies: [
          "React",
          "Chart.js",
          "Financial APIs",
          "Data visualization",
        ],
      },
      {
        title: "Text Auto-Complete Engine",
        description:
          "Create an intelligent text prediction system using DP algorithms like longest common subsequence and edit distance. Include features like spell-check, word suggestions, and typing efficiency analysis.",
        difficulty: "Advanced",
        technologies: [
          "Python/JavaScript",
          "NLP libraries",
          "Trie data structure",
          "Machine Learning",
        ],
      },
      {
        title: "Route Optimization System",
        description:
          "Develop a GPS-like application that finds optimal paths using DP algorithms. Include features like shortest path, minimum cost, avoiding toll roads, and real-time traffic integration.",
        difficulty: "Advanced",
        technologies: [
          "Graph algorithms",
          "Maps API",
          "Real-time data",
          "Mobile development",
        ],
      },
      {
        title: "Game Strategy AI",
        description:
          "Build an AI player for games like chess, tic-tac-toe, or custom games using DP techniques like minimax with memoization. Include difficulty levels and move analysis features.",
        difficulty: "Beginner",
        technologies: [
          "Game engines",
          "AI algorithms",
          "Interactive UI",
          "Animation",
        ],
      },
    ],
  },
};

// Syntax highlighting function
const highlightSyntax = (code, language) => {
  if (!code) return "";
  const keywords = {
    c: [
      "int", "float", "double", "char", "void", "return", "if", "else", "for",
      "while", "printf", "include", "main", "long", "memset", "sizeof",
    ],
    cpp: [
      "int", "float", "double", "char", "void", "return", "if", "else", "for",
      "while", "cout", "cin", "using", "namespace", "std", "include", "main",
      "string", "vector", "class", "private", "public", "auto", "pair", "max",
    ],
    java: [
      "public", "private", "static", "void", "int", "double", "String", "class",
      "return", "if", "else", "for", "while", "System", "main", "println",
      "printf", "import", "new", "Map", "List", "ArrayList", "HashMap", "Math",
    ],
    python: [
      "def", "return", "if", "else", "elif", "for", "while", "import", "from",
      "class", "print", "len", "range", "True", "False", "None", "self",
      "lru_cache", "in", "time",
    ],
    javascript: [
      "function", "const", "let", "var", "return", "if", "else", "for", "while",
      "class", "this", "console", "log", "true", "false", "null", "undefined",
      "new", "Map", "Array", "module", "exports", "Math", "performance",
    ],
  };

  const strings = /"[^"]*"|'[^']*'|`[^`]*`/g;
  const comments = language === "python" ? /#.*$/gm : /\/\/.*$|\/\*[\s\S]*?\*\//gm;
  const numbers = /\b\d+\.?\d*\b/g;

  let highlightedCode = code;

  // Highlight strings (green)
  highlightedCode = highlightedCode.replace(
    strings,
    (match) => `<span style="color: #22c55e;">${match}</span>`
  );

  // Highlight comments (gray)
  highlightedCode = highlightedCode.replace(
    comments,
    (match) => `<span style="color: #6b7280;">${match}</span>`
  );

  // Highlight numbers (orange)
  highlightedCode = highlightedCode.replace(
    numbers,
    (match) => `<span style="color: #f97316;">${match}</span>`
  );

  // Highlight keywords (blue)
  if (keywords[language]) {
    keywords[language].forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g");
      highlightedCode = highlightedCode.replace(
        regex,
        (match) => `<span style="color: #3b82f6;">${match}</span>`
      );
    });
  }

  return highlightedCode;
};

export default function DynamicProgrammingPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);

  // Fibonacci visualization state
  const [fibN, setFibN] = useState(10);
  const [fibResult, setFibResult] = useState(null);
  const [fibComputations, setFibComputations] = useState([]);
  const [animatingFib, setAnimatingFib] = useState(false);

  // Coin change visualization state
  const [coins, setCoins] = useState([1, 5, 10, 25]);
  const [targetAmount, setTargetAmount] = useState(30);
  const [coinResult, setCoinResult] = useState(null);
  const [animatingCoin, setAnimatingCoin] = useState(false);

  // Knapsack visualization state
  const [knapsackItems] = useState([
    { name: "Diamond", weight: 1, value: 100 },
    { name: "Gold", weight: 2, value: 80 },
    { name: "Silver", weight: 3, value: 60 },
    { name: "Bronze", weight: 4, value: 40 },
  ]);
  const [knapsackCapacity, setKnapsackCapacity] = useState(5);
  const [knapsackResult, setKnapsackResult] = useState(null);

  const { topic, category, sections } = dynamicProgrammingData;
  const languages = ["c", "cpp", "java", "python", "javascript"];

  // Fibonacci calculation with memoization
  const calculateFibonacci = () => {
    setAnimatingFib(true);
    const memo = {};
    const computations = [];

    const fibMemo = (n) => {
      if (n <= 1) {
        computations.push({ n, result: n, fromCache: false });
        return n;
      }

      if (memo[n]) {
        computations.push({ n, result: memo[n], fromCache: true });
        return memo[n];
      }

      const result = fibMemo(n - 1) + fibMemo(n - 2);
      memo[n] = result;
      computations.push({ n, result, fromCache: false });
      return result;
    };

    const result = fibMemo(fibN);
    setFibResult(result);
    setFibComputations(computations.slice(-10)); // Show last 10 computations

    setTimeout(() => setAnimatingFib(false), 500);
  };

  // Coin change calculation
  const calculateCoinChange = () => {
    setAnimatingCoin(true);

    const dp = Array(targetAmount + 1).fill(Infinity);
    const parent = Array(targetAmount + 1).fill(-1);
    dp[0] = 0;

    for (let i = 1; i <= targetAmount; i++) {
      for (const coin of coins) {
        if (coin <= i && dp[i - coin] + 1 < dp[i]) {
          dp[i] = dp[i - coin] + 1;
          parent[i] = coin;
        }
      }
    }

    // Reconstruct solution
    const combination = [];
    let current = targetAmount;
    while (current > 0 && parent[current] !== -1) {
      const coin = parent[current];
      combination.push(coin);
      current -= coin;
    }

    setCoinResult({
      minCoins: dp[targetAmount] === Infinity ? -1 : dp[targetAmount],
      combination: combination.sort((a, b) => b - a),
    });

    setTimeout(() => setAnimatingCoin(false), 500);
  };

  // Knapsack calculation
  const calculateKnapsack = () => {
    const n = knapsackItems.length;
    const dp = Array(n + 1)
      .fill()
      .map(() => Array(knapsackCapacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= knapsackCapacity; w++) {
        dp[i][w] = dp[i - 1][w];

        if (knapsackItems[i - 1].weight <= w) {
          const includeValue =
            knapsackItems[i - 1].value +
            dp[i - 1][w - knapsackItems[i - 1].weight];
          if (includeValue > dp[i][w]) {
            dp[i][w] = includeValue;
          }
        }
      }
    }

    // Backtrack to find selected items
    const selectedItems = [];
    let w = knapsackCapacity;
    for (let i = n; i > 0 && dp[i][w] > 0; i--) {
      if (dp[i][w] !== dp[i - 1][w]) {
        selectedItems.push(knapsackItems[i - 1]);
        w -= knapsackItems[i - 1].weight;
      }
    }

    setKnapsackResult({
      maxValue: dp[n][knapsackCapacity],
      selectedItems,
      totalWeight: selectedItems.reduce((sum, item) => sum + item.weight, 0),
    });
  };

  useEffect(() => {
    calculateFibonacci();
  }, [fibN]);

  useEffect(() => {
    calculateCoinChange();
  }, [coins, targetAmount]);

  useEffect(() => {
    calculateKnapsack();
  }, [knapsackCapacity]);
  
  // MOVED VISUALIZATION COMPONENTS HERE, INSIDE THE MAIN COMPONENT
  
  // Fibonacci Visualization Component
  const FibonacciVisualization = () => (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-800 dark:text-blue-200">
        📈 Fibonacci Sequence with Memoization
      </h3>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Calculate F(
          </label>
          <input
            type="number"
            value={fibN}
            onChange={(e) => setFibN(Math.max(0, parseInt(e.target.value) || 0))}
            min="0"
            max="50"
            className="w-16 px-2 py-1 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-center"
          />
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            )
          </label>
        </div>
        <button
          onClick={calculateFibonacci}
          disabled={animatingFib}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50"
        >
          {animatingFib ? "Calculating..." : "Calculate"}
        </button>
      </div>

      {fibResult !== null && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="text-center mb-4">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              F({fibN}) = {fibResult.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Computed using memoization for optimal performance
            </div>
          </div>

          {fibComputations.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
                Recent Computations:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {fibComputations.slice(-5).map((comp, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded text-center text-sm ${
                      comp.fromCache
                        ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                        : "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300"
                    }`}
                  >
                    <div className="font-semibold">F({comp.n})</div>
                    <div>{comp.result}</div>
                    <div className="text-xs">
                      {comp.fromCache ? "🟢 Cached" : "🔶 Computed"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Coin Change Visualization Component
  const CoinChangeVisualization = () => (
    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-green-800 dark:text-green-200">
        💰 Coin Change Problem Solver
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Available Coins:
          </label>
          <input
            type="text"
            value={coins.join(", ")}
            onChange={(e) => {
              const newCoins = e.target.value
                .split(",")
                .map((c) => parseInt(c.trim()))
                .filter((c) => !isNaN(c) && c > 0);
              setCoins(newCoins);
            }}
            className="w-full px-3 py-2 border-2 border-green-300 dark:border-green-600 rounded-lg bg-white dark:bg-gray-700"
            placeholder="e.g. 1, 5, 10, 25"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Target Amount:
          </label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) =>
              setTargetAmount(Math.max(1, parseInt(e.target.value) || 1))
            }
            min="1"
            max="1000"
            className="w-full px-3 py-2 border-2 border-green-300 dark:border-green-600 rounded-lg bg-white dark:bg-gray-700"
          />
        </div>
      </div>

      {coinResult && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {coinResult.minCoins === -1 ? (
            <div className="text-center text-red-600 dark:text-red-400">
              <div className="text-xl font-bold">Cannot make exact change!</div>
              <div className="text-sm mt-2">
                Try different coin denominations or amount
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
                Minimum Coins: {coinResult.minCoins}
              </div>
              <div className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Making {targetAmount}¢ with: [{coinResult.combination.join(", ")}]¢
              </div>

              <div className="flex justify-center gap-2 flex-wrap">
                {coinResult.combination.map((coin, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform transition-all duration-300 ${
                      animatingCoin ? "animate-bounce" : "hover:scale-110"
                    }`}
                    style={{
                      backgroundColor:
                        coin >= 25
                          ? "#f59e0b"
                          : coin >= 10
                          ? "#8b5cf6"
                          : coin >= 5
                          ? "#ef4444"
                          : "#10b981",
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {coin}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Knapsack Visualization Component
  const KnapsackVisualization = () => (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-purple-800 dark:text-purple-200">
        🎒 0/1 Knapsack Problem
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <h4 className="text-lg font-semibold mb-3 text-purple-700 dark:text-purple-300">
            Available Items:
          </h4>
          <div className="space-y-2">
            {knapsackItems.map((item, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                  knapsackResult?.selectedItems.some(
                    (selected) => selected.name === item.name
                  )
                    ? "bg-purple-500 text-white border-purple-600"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-purple-300 dark:border-purple-600"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.name}</span>
                  <div className="text-sm">
                    <span>W: {item.weight}</span>
                    <span className="ml-2">V: {item.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-purple-700 dark:text-purple-300 mb-2">
              Knapsack Capacity: {knapsackCapacity}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={knapsackCapacity}
              onChange={(e) => setKnapsackCapacity(parseInt(e.target.value))}
              className="w-full h-2 bg-purple-200 dark:bg-purple-800 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {knapsackResult && (
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  Max Value: {knapsackResult.maxValue}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Weight Used: {knapsackResult.totalWeight}/{knapsackCapacity}
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="font-medium text-purple-700 dark:text-purple-300">
                  Selected Items:
                </h5>
                {knapsackResult.selectedItems.length > 0 ? (
                  knapsackResult.selectedItems.map((item, index) => (
                    <div
                      key={index}
                      className="text-sm bg-purple-100 dark:bg-purple-900/30 p-2 rounded"
                    >
                      ✓ {item.name} (W:{item.weight}, V:{item.value})
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 italic p-2">
                    No items selected.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      {/* Animated Header */}
      <header className="py-16 text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
          <p className="text-xl">{category}</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-white/20 rounded-full">
                🧠 Memoization
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full">
                📊 Tabulation
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full">
                ⚡ Optimization
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Student Hook */}
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🎯 Why Dynamic Programming Matters
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-purple-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* Interactive Visualizations */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            🎮 Interactive DP Demonstrations
          </h2>

          <div className="space-y-8">
            <FibonacciVisualization />
            <CoinChangeVisualization />
            <KnapsackVisualization />
          </div>
        </section>

        {/* Core Concepts - Memoization */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            🧠 Memoization - Top-Down Approach
          </h2>

          {/* Memoization Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">
              💡 Understanding Memoization
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.core_concepts.memoization.concept}
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                <span className="font-bold">Real-world example:</span>{" "}
                {sections.core_concepts.memoization.realWorldExample}
              </p>
            </div>
          </div>

          {/* Memoization Advantages & Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
                ✅ Advantages
              </h3>
              <ul className="space-y-3">
                {sections.core_concepts.memoization.advantages.map(
                  (advantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 text-lg">
                        {advantage.split(" ")[0]}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {advantage.substring(advantage.indexOf(" ") + 1)}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">
                ❌ Disadvantages
              </h3>
              <ul className="space-y-3">
                {sections.core_concepts.memoization.disadvantages.map(
                  (disadvantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 text-lg">
                        {disadvantage.split(" ")[0]}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {disadvantage.substring(disadvantage.indexOf(" ") + 1)}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Core Concepts - Tabulation */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            📊 Tabulation - Bottom-Up Approach
          </h2>

          {/* Tabulation Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
              💡 Understanding Tabulation
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.core_concepts.tabulation.concept}
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800 dark:text-green-200 font-medium">
                <span className="font-bold">Real-world example:</span>{" "}
                {sections.core_concepts.tabulation.realWorldExample}
              </p>
            </div>
          </div>

          {/* Tabulation Advantages & Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
                ✅ Advantages
              </h3>
              <ul className="space-y-3">
                {sections.core_concepts.tabulation.advantages.map(
                  (advantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 text-lg">
                        {advantage.split(" ")[0]}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {advantage.substring(advantage.indexOf(" ") + 1)}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">
                ❌ Disadvantages
              </h3>
              <ul className="space-y-3">
                {sections.core_concepts.tabulation.disadvantages.map(
                  (disadvantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 text-lg">
                        {disadvantage.split(" ")[0]}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {disadvantage.substring(disadvantage.indexOf(" ") + 1)}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Optimal Substructure */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            🎯 Optimal Substructure Property
          </h2>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-orange-500">
            <h3 className="text-2xl font-bold mb-4 text-orange-700 dark:text-orange-300">
              💡 Understanding Optimal Substructure
            </h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.core_concepts.optimal_substructure.concept}
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-400">
              <p className="text-orange-800 dark:text-orange-200 font-medium">
                <span className="font-bold">Real-world example:</span>{" "}
                {sections.core_concepts.optimal_substructure.realWorldExample}
              </p>
            </div>
          </div>

          {/* Examples of Optimal Substructure */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-700 dark:text-orange-300">
              🔍 Classic Examples
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.core_concepts.optimal_substructure.examples.map(
                (example, index) => (
                  <div
                    key={index}
                    className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border-l-4 border-orange-400 hover:shadow-lg transition-shadow duration-300"
                  >
                    <p className="text-gray-700 dark:text-gray-300">
                      {example}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            🏢 Dynamic Programming in Industry
          </h2>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.industry_applications.map((application, index) => (
                <div
                  key={index}
                  className="bg-violet-50 dark:bg-violet-900/20 p-4 rounded-xl border-l-4 border-violet-400 hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-gray-700 dark:text-gray-300">
                    {application}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            💻 Real-World Code Examples
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            {/* Language Selector */}
            <div className="bg-gray-100 dark:bg-gray-700 p-4">
              <div className="flex flex-wrap justify-center gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedLanguage === lang
                        ? "bg-rose-500 text-white shadow-lg"
                        : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Display with Syntax Highlighting */}
            <div className="p-6">
              <pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed">
                <code
                  dangerouslySetInnerHTML={{
                    __html: highlightSyntax(
                      sections.code_examples[selectedLanguage],
                      selectedLanguage
                    ),
                  }}
                />
              </pre>
            </div>
          </div>
        </section>

        {/* Time & Space Complexity Analysis */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
            ⚡ Performance Analysis
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Problem
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Naive Approach
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                      DP Approach
                    </th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Improvement
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {[
                    {
                      problem: "Fibonacci Sequence",
                      naive: "O(2^n)",
                      dp: "O(n)",
                      improvement: "Exponential → Linear",
                    },
                    {
                      problem: "Longest Common Subsequence",
                      naive: "O(2^n)",
                      dp: "O(m×n)",
                      improvement: "Exponential → Quadratic",
                    },
                    {
                      problem: "0/1 Knapsack",
                      naive: "O(2^n)",
                      dp: "O(n×W)",
                      improvement: "Exponential → Polynomial",
                    },
                    {
                      problem: "Edit Distance",
                      naive: "O(3^n)",
                      dp: "O(m×n)",
                      improvement: "Exponential → Quadratic",
                    },
                    {
                      problem: "Coin Change",
                      naive: "O(S^n)",
                      dp: "O(n×amount)",
                      improvement: "Exponential → Linear",
                    },
                    {
                      problem: "Matrix Chain Multiplication",
                      naive: "O(2^n)",
                      dp: "O(n³)",
                      improvement: "Exponential → Cubic",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">
                        {row.problem}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 rounded-full text-sm font-mono bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
                          {row.naive}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 rounded-full text-sm font-mono bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                          {row.dp}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          {row.improvement}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          qa.difficulty === "Easy"
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
                        className={`w-6 h-6 transition-transform duration-200 ${
                          selectedQuestionIndex === index ? "rotate-180" : ""
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

        {/* Project Ideas */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
            🚀 Hands-on Project Ideas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.project_ideas.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-violet-500"
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
                        className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-medium"
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
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Master Dynamic Programming Today! 🚀
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Turn impossible exponential problems into efficient polynomial
            solutions with the power of DP!
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full">
              🧠 Remember
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full">
              🔄 Reuse
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full">
              ⚡ Optimize
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}