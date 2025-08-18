// src/api/mockData.js

export const dsaData = {
  "title": "Data Structures & Algorithms",
  "concepts": [
    {
      "id": "what-is-dsa",
      "name": "What is DSA?",
      "description": "An introduction to Data Structures and Algorithms — the essential building blocks of computer science used to solve problems efficiently.",
      "definition": "DSA (Data Structures and Algorithms) provides structured ways to store, retrieve, and manipulate data to solve computational problems efficiently. Mastering DSA improves problem-solving skills, optimizes code performance, and is essential for software development.",
      "useCase": "Store data: Arrays, linked lists, stacks, and queues organize data for quick access.\nSearch data: Algorithms like binary search find elements in logarithmic time.\nProcess data: Sorting algorithms arrange data for efficient retrieval.\nNavigate connections: Graph algorithms like Dijkstra’s find shortest paths in navigation apps.\nAnalyze performance: Complexity analysis helps choose the most efficient approach for a given problem.",
      "code": null,
      "questions": []
    },
    {
      "id": "usesInIndustry",
      "name": "Industry Applications of DSA",
      "description": "Real-world examples of how data structures and algorithms are used.",
      "definition": "DSA are not just theoretical concepts; they are the backbone of many modern software systems. From search engines to social media, these principles enable the efficient processing and management of large-scale data.",
      "useCase": "Search Engines: Google's search algorithms use graphs and hash tables to index and retrieve web pages quickly.\nSocial Media: Platforms like Facebook and Twitter use graphs to model user connections and relationships.\nE-commerce: Sites like Amazon use sorting and searching algorithms to display products and manage inventory.\nDatabases: B-trees and B+ trees, which are types of tree data structures, are used for efficient database indexing.\nGaming: Pathfinding algorithms (like A*) are used in video games for character movement and AI.",
      "code": null,
      "questions": []
    },
    {
      "id": "learningRoadmap",
      "name": "Learning Roadmap for DSA",
      "description": "A structured guide to learning Data Structures and Algorithms.",
      "definition": "A systematic approach to learning DSA involves starting with the basics and progressively moving to more complex topics. This roadmap helps build a solid foundation and prepares you for real-world problem-solving.",
      "useCase": "Begin with basic data structures: Arrays, Linked Lists, Stacks, and Queues.\nLearn core algorithms: Sorting (Bubble, Merge, Quick), Searching (Linear, Binary).\nMove to non-linear data structures: Trees (Binary Tree, BST), Graphs.\nStudy advanced topics: Heaps, Hash Maps, Tries, and dynamic programming.\nPractice consistently by solving problems on platforms like LeetCode or HackerRank.",
      "code": null,
      "questions": []
    },
    {
      "id": "array",
      "name": "Array",
      "description": "A fundamental data structure that stores a collection of elements at contiguous memory locations.",
      "definition": "An array is a linear data structure that holds a fixed-size sequence of elements of the same type. Elements are accessed using an index, which provides O(1) access time. It's one of the most basic and widely used data structures.",
      "useCase": "Arrays are used for storing lists of items, implementing other data structures like stacks and queues, and in algorithms that require random access to elements, such as sorting and searching.",
      "code": "// Creating and initializing an array\nlet fruits = ['apple', 'banana', 'cherry'];\n\n// Accessing elements by index\nconsole.log(fruits[0]); // 'apple'\n\n// Modifying an element\nfruits[1] = 'blueberry';\nconsole.log(fruits); // ['apple', 'blueberry', 'cherry']\n\n// Iterating through an array\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}",
      "questions": [
        {
          "question": "How do you find a duplicate element in an array?",
          "hint": "You could use a hash set or sort the array first.",
          "answer": "One way is to use a hash set (or map) to store elements as you iterate. If you encounter an element that is already in the set, it's a duplicate. Another way is to sort the array and then iterate through it, checking if any adjacent elements are the same."
        }
      ]
    },
    {
      "id": "recursion",
      "name": "Recursion",
      "description": "An algorithmic technique where a function calls itself to solve a problem.",
      "definition": "Recursion is a programming technique where a function solves a problem by calling a smaller version of itself. A recursive function must have a base case to stop the recursion and a recursive step to call itself with a modified input.",
      "useCase": "Recursion is often used to solve problems that can be broken down into smaller, identical subproblems. Examples include tree and graph traversals (DFS), the factorial calculation, and the Fibonacci sequence.",
      "code": "// Calculating factorial using recursion\nfunction factorial(n) {\n  // Base case: the condition to stop the recursion\n  if (n === 0) {\n    return 1;\n  }\n  // Recursive step: call the function with a smaller input\n  return n * factorial(n - 1);\n}\n\n// Usage\nconsole.log(factorial(5)); // 120",
      "questions": [
        {
          "question": "What are the two key components of a recursive function?",
          "hint": "One is for the problem, the other is for stopping.",
          "answer": "A recursive function must have a **base case** that defines the terminating condition to prevent infinite recursion, and a **recursive step** where the function calls itself to solve a smaller version of the problem."
        }
      ]
    },
    {
      "id": "stack",
      "name": "Stack",
      "description": "A linear data structure that follows Last In First Out (LIFO) principle",
      "definition": "A stack is a fundamental data structure that operates on the Last In, First Out (LIFO) principle. Elements are added and removed from the same end, called the top of the stack. Think of it like a stack of plates - you can only add or remove plates from the top.",
      "useCase": "Stacks are widely used in web browsers for the back button functionality, in programming languages for function call management, in expression evaluation, and in undo operations in text editors. They're also crucial in algorithms like depth-first search and in parsing expressions.",
      "code": "class Stack {\n  constructor() {\n    this.items = [];\n  }\n\n  push(element) {\n    this.items.push(element);\n  }\n\n  pop() {\n    if (this.isEmpty()) return null;\n    return this.items.pop();\n  }\n\n  peek() {\n    return this.items[this.items.length - 1];\n  }\n\n  isEmpty() {\n    return this.items.length === 0;\n  }\n}\n\n// Usage\nconst stack = new Stack();\nstack.push(10);\nstack.push(20);\nconsole.log(stack.peek()); // 20\nconsole.log(stack.pop());  // 20",
      "questions": [
        {
          "question": "How would you implement a stack using two queues?",
          "hint": "Use one queue as main storage and another as temporary storage during pop operations",
          "answer": "Use two queues. For push, add to queue1. For pop, move all but last element from queue1 to queue2, pop the last element, then swap the queues."
        },
        {
          "question": "Design a stack that supports getMin() in O(1) time",
          "hint": "Use an auxiliary stack to keep track of minimum elements",
          "answer": "Maintain two stacks - one for data and another for minimums. Push to min stack only when new element is ≤ current minimum."
        }
      ]
    },
    {
      "id": "queue",
      "name": "Queue",
      "description": "A linear data structure that follows First In First Out (FIFO) principle",
      "definition": "A queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. Elements are added at the back (enqueue) and removed from the front (dequeue). It's like a line of people waiting for a bus.",
      "useCase": "Queues are used in managing task scheduling in an operating system, handling requests on a web server, and in breadth-first search algorithms for traversing trees and graphs. Printers use a queue to manage print jobs.",
      "code": "class Queue {\n  constructor() {\n    this.items = [];\n  }\n\n  enqueue(element) {\n    this.items.push(element);\n  }\n\n  dequeue() {\n    if (this.isEmpty()) return null;\n    return this.items.shift();\n  }\n\n  peek() {\n    if (this.isEmpty()) return null;\n    return this.items[0];\n  }\n\n  isEmpty() {\n    return this.items.length === 0;\n  }\n}\n\n// Usage\nconst queue = new Queue();\nqueue.enqueue(10);\nqueue.enqueue(20);\nconsole.log(queue.peek()); // 10\nconsole.log(queue.dequeue()); // 10",
      "questions": [
        {
          "question": "How would you implement a queue using two stacks?",
          "hint": "One stack for enqueuing, another for dequeuing.",
          "answer": "Use two stacks, `s1` and `s2`. For enqueue, push to `s1`. For dequeue, if `s2` is empty, move all elements from `s1` to `s2` then pop from `s2`."
        }
      ]
    },
    {
      "id": "linkedList",
      "name": "Linked List",
      "description": "A linear data structure where elements are not stored in contiguous memory locations",
      "definition": "A linked list is a linear data structure where each element is a separate object called a node. Each node contains a data field and a 'next' reference or link to the next node in the sequence. It's a dynamic structure, unlike arrays.",
      "useCase": "Linked lists are great for implementing stacks and queues, as well as for managing image viewers where you need to move to the next or previous image. They are also used in web browser history (forward/back) and in some music players.",
      "code": "class Node {\n  constructor(data, next = null) {\n    this.data = data;\n    this.next = next;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n\n  insertFirst(data) {\n    this.head = new Node(data, this.head);\n  }\n\n  size() {\n    let count = 0;\n    let node = this.head;\n    while (node) {\n      count++;\n      node = node.next;\n    }\n    return count;\n  }\n}\n\n// Usage\nconst list = new LinkedList();\nlist.insertFirst(10);\nlist.insertFirst(20);\nconsole.log(list.size()); // 2",
      "questions": [
        {
          "question": "How do you find the middle element of a singly linked list in a single pass?",
          "hint": "Use two pointers, one moving twice as fast as the other.",
          "answer": "Use a slow pointer and a fast pointer. The slow pointer moves one step at a time, while the fast pointer moves two. When the fast pointer reaches the end, the slow pointer will be at the middle."
        },
        {
          "question": "How do you detect a cycle in a linked list?",
          "hint": "Use Floyd's cycle-finding algorithm (tortoise and hare).",
          "answer": "Use two pointers, a slow one and a fast one. If they meet at some point, there is a cycle. If the fast pointer reaches the end of the list, there is no cycle."
        }
      ]
    },
    {
      "id": "binaryTree",
      "name": "Binary Tree",
      "description": "A hierarchical data structure with nodes having at most two children",
      "definition": "A binary tree is a hierarchical data structure where each node has at most two children, referred to as left and right child. It's a fundamental structure that forms the basis for many advanced data structures like binary search trees, heaps, and expression trees.",
      "useCase": "Binary trees are used in database indexing (B-trees), file systems, expression parsing in compilers, decision-making algorithms, and in implementing efficient search algorithms. They're also the foundation for binary search trees which provide O(log n) search, insertion, and deletion operations.",
      "code": "class TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\nclass BinaryTree {\n  constructor() {\n    this.root = null;\n  }\n\n  // Inorder traversal (Left, Root, Right)\n  inorderTraversal(node = this.root) {\n    if (!node) return [];\n\n    return [\n      ...this.inorderTraversal(node.left),\n      node.val,\n      ...this.inorderTraversal(node.right)\n    ];\n  }\n\n  // Find height of tree\n  getHeight(node = this.root) {\n    if (!node) return 0;\n\n    return 1 + Math.max(\n      this.getHeight(node.left),\n      this.getHeight(node.right)\n    );\n  }\n}\n\n// Usage\nconst tree = new BinaryTree();\ntree.root = new TreeNode(1);\ntree.root.left = new TreeNode(2);\ntree.root.right = new TreeNode(3);\nconsole.log(tree.inorderTraversal()); // [2, 1, 3]",
      "questions": [
        {
          "question": "How do you find the lowest common ancestor of two nodes?",
          "hint": "Use recursive approach - if both nodes are on different sides of current node, current is LCA",
          "answer": "Recursively check: if both nodes are in left subtree, recurse left; if both in right, recurse right; otherwise current node is LCA."
        }
      ]
    },
    {
      "id": "hashTable",
      "name": "Hash Table / Hash Map",
      "description": "A data structure that stores key-value pairs for efficient lookup",
      "definition": "A hash table is a data structure that uses a hash function to map keys to a specific index in an array. This allows for very fast, average case O(1), insertion, deletion, and lookup operations.",
      "useCase": "Hash tables are used everywhere: implementing associative arrays, database indexing, caching systems, and in programming languages for objects or dictionaries. They are also used in cryptography for generating unique identifiers.",
      "code": "class HashTable {\n  constructor(size = 53) {\n    this.keyMap = new Array(size);\n  }\n\n  _hash(key) {\n    let total = 0;\n    let WEIRD_PRIME = 31;\n    for (let i = 0; i < Math.min(key.length, 100); i++) {\n      let char = key[i];\n      let value = char.charCodeAt(0) - 96;\n      total = (total * WEIRD_PRIME + value) % this.keyMap.length;\n    }\n    return total;\n  }\n\n  set(key, value) {\n    const index = this._hash(key);\n    if (!this.keyMap[index]) {\n      this.keyMap[index] = [];\n    }\n    this.keyMap[index].push([key, value]);\n  }\n\n  get(key) {\n    const index = this._hash(key);\n    if (this.keyMap[index]) {\n      for (let i = 0; i < this.keyMap[index].length; i++) {\n        if (this.keyMap[index][i][0] === key) {\n          return this.keyMap[index][i][1];\n        }\n      }\n    }\n    return undefined;\n  }\n}\n\n// Usage\nconst ht = new HashTable();\nht.set(\"hello\", \"world\");\nconsole.log(ht.get(\"hello\")); // world",
      "questions": [
        {
          "question": "Explain collision resolution strategies in a hash table.",
          "hint": "There are two main approaches: separate chaining and open addressing.",
          "answer": "Separate chaining handles collisions by creating a linked list at each index to store multiple key-value pairs. Open addressing (like linear probing or quadratic probing) finds the next available empty slot in the array."
        }
      ]
    },
    {
      "id": "heap",
      "name": "Heap",
      "description": "A specialized tree-based data structure that satisfies the heap property",
      "definition": "A heap is a complete binary tree where each parent node is either always greater than or equal to its child nodes (Max Heap) or less than or equal to its child nodes (Min Heap). It is commonly implemented using an array.",
      "useCase": "Heaps are most notably used to implement priority queues, which are essential in scheduling algorithms (e.g., in operating systems) and in algorithms like Dijkstra's for finding the shortest path and Prim's for finding minimum spanning trees.",
      "code": "// A basic implementation of a Max Heap\nclass MaxHeap {\n  constructor() {\n    this.heap = [];\n  }\n\n  insert(value) {\n    this.heap.push(value);\n    this.bubbleUp(this.heap.length - 1);\n  }\n\n  bubbleUp(index) {\n    let parentIndex = Math.floor((index - 1) / 2);\n    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {\n      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];\n      index = parentIndex;\n      parentIndex = Math.floor((index - 1) / 2);\n    }\n  }\n\n  extractMax() {\n    if (this.heap.length === 0) return null;\n    if (this.heap.length === 1) return this.heap.pop();\n    \n    const max = this.heap[0];\n    this.heap[0] = this.heap.pop();\n    this.bubbleDown(0);\n    return max;\n  }\n  \n  bubbleDown(index) {\n    const leftChildIndex = 2 * index + 1;\n    const rightChildIndex = 2 * index + 2;\n    let largestIndex = index;\n    \n    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {\n      largestIndex = leftChildIndex;\n    }\n    \n    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {\n      largestIndex = rightChildIndex;\n    }\n    \n    if (largestIndex !== index) {\n      [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];\n      this.bubbleDown(largestIndex);\n    }\n  }\n}\n\n// Usage\nconst maxHeap = new MaxHeap();\nmaxHeap.insert(41);\nmaxHeap.insert(39);\nmaxHeap.insert(33);\nmaxHeap.insert(18);\nconsole.log(maxHeap.heap); // [41, 39, 33, 18]",
      "questions": [
        {
          "question": "What is the time complexity for inserting an element into a heap?",
          "hint": "Consider the height of the tree.",
          "answer": "The time complexity is O(log n), because you only need to traverse from the newly added element up to the root, and the height of a complete binary tree is O(log n)."
        }
      ]
    },
    {
      "id": "trie",
      "name": "Trie (Prefix Tree)",
      "description": "A tree-like data structure used to store a dynamic set of strings",
      "definition": "A Trie, or Prefix Tree, is an ordered tree data structure used to store a dynamic set of strings. Each node represents a common prefix, and edges represent characters. Traversing from the root to a node spells out a string prefix.",
      "useCase": "Tries are excellent for applications involving autocomplete, spell checkers, and IP routing. Their prefix-based structure allows for very fast searching of a word's existence, typically faster than a hash table in many cases.",
      "code": "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.isEndOfWord = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word) {\n    let current = this.root;\n    for (let i = 0; i < word.length; i++) {\n      const char = word[i];\n      if (!current.children[char]) {\n        current.children[char] = new TrieNode();\n      }\n      current = current.children[char];\n    }\n    current.isEndOfWord = true;\n  }\n\n  search(word) {\n    let current = this.root;\n    for (let i = 0; i < word.length; i++) {\n      const char = word[i];\n      if (!current.children[char]) {\n        return false;\n      }\n      current = current.children[char];\n    }\n    return current.isEndOfWord;\n  }\n}\n\n// Usage\nconst trie = new Trie();\ntrie.insert(\"apple\");\ntrie.insert(\"app\");\nconsole.log(trie.search(\"apple\")); // true\nconsole.log(trie.search(\"app\"));  // true\nconsole.log(trie.search(\"banana\")); // false",
      "questions": [
        {
          "question": "How does a Trie's space complexity compare to a Hash Table for storing a large list of words?",
          "hint": "Consider shared prefixes.",
          "answer": "A Trie can be more space-efficient than a Hash Table if the words share common prefixes, as it reuses nodes. However, for a set of words with no shared prefixes, a Trie can be less space-efficient due to the overhead of storing nodes for each character."
        }
      ]
    },
    {
      "id": "graph",
      "name": "Graph",
      "description": "A non-linear data structure consisting of nodes (vertices) and edges",
      "definition": "A graph is a non-linear data structure composed of a finite set of vertices (or nodes) and a set of edges connecting these vertices. It can be used to model many real-world networks, from social media connections to city routes.",
      "useCase": "Graphs are used extensively in social media networks to represent users and their connections, in Google Maps for finding the shortest path between locations, in logistics for route optimization, and in computer networks.",
      "code": "class Graph {\n  constructor() {\n    this.adjacencyList = {};\n  }\n\n  addVertex(vertex) {\n    if (!this.adjacencyList[vertex]) {\n      this.adjacencyList[vertex] = [];\n    }\n  }\n\n  addEdge(v1, v2) {\n    this.adjacencyList[v1].push(v2);\n    this.adjacencyList[v2].push(v1); // For undirected graph\n  }\n\n  removeEdge(v1, v2) {\n    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);\n    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);\n  }\n\n  removeVertex(vertex) {\n    while (this.adjacencyList[vertex].length) {\n      const adjacentVertex = this.adjacencyList[vertex].pop();\n      this.removeEdge(vertex, adjacentVertex);\n    }\n    delete this.adjacencyList[vertex];\n  }\n}\n\n// Usage\nconst g = new Graph();\ng.addVertex(\"A\");\ng.addVertex(\"B\");\ng.addEdge(\"A\", \"B\");\nconsole.log(g.adjacencyList); // { A: ['B'], B: ['A'] }",
      "questions": [
        {
          "question": "Explain the difference between BFS and DFS traversal.",
          "hint": "Think about the data structure each algorithm uses to explore nodes.",
          "answer": "Breadth-First Search (BFS) explores all neighbor nodes at the present depth before moving on to nodes at the next depth level, typically using a queue. Depth-First Search (DFS) explores as far as possible along each branch before backtracking, typically using a stack or recursion."
        }
      ]
    },
    {
      "id": "sorting-algorithms",
      "name": "Sorting Algorithms",
      "description": "Algorithms for arranging data in a specific order",
      "definition": "Sorting algorithms are a set of instructions that takes an array or list as input and reorders its elements in a specific order, such as ascending or descending. Common examples include bubble sort, merge sort, and quicksort.",
      "useCase": "Sorting is a foundational operation in computer science. It's used in search algorithms to make them more efficient (e.g., binary search), in database management to organize records, and in graphics for rendering objects in the correct order.",
      "code": "// Bubble Sort Example\nfunction bubbleSort(arr) {\n  let len = arr.length;\n  let swapped;\n  do {\n    swapped = false;\n    for (let i = 0; i < len - 1; i++) {\n      if (arr[i] > arr[i + 1]) {\n        let temp = arr[i];\n        arr[i] = arr[i + 1];\n        arr[i + 1] = temp;\n        swapped = true;\n      }\n    }\n  } while (swapped);\n  return arr;\n}\n\n// Usage\nconst numbers = [5, 1, 4, 2, 8];\nconsole.log(bubbleSort(numbers)); // [1, 2, 4, 5, 8]",
      "questions": [
        {
          "question": "When would you use merge sort over quicksort?",
          "hint": "Consider stability and worst-case performance.",
          "answer": "Merge sort is a stable, O(n log n) algorithm in all cases, making it a good choice when worst-case performance is a concern. Quicksort has an average O(n log n) but a worst-case O(n^2), although it is often faster in practice due to lower constant factors and in-place sorting."
        }
      ]
    },
    {
      "id": "dynamic-programming",
      "name": "Dynamic Programming",
      "description": "An algorithmic technique for solving complex problems by breaking them into subproblems",
      "definition": "Dynamic Programming is an optimization technique used to solve complex problems by breaking them down into smaller, overlapping subproblems. The results of these subproblems are stored (memoization or tabulation) to avoid recomputing them, which significantly improves efficiency.",
      "useCase": "DP is used in many areas, including finance for options pricing, bioinformatics for sequence alignment, and in routing algorithms. Classic problems solved with DP include the Fibonacci sequence, the knapsack problem, and the longest common subsequence.",
      "code": "// Fibonacci sequence using memoization (top-down DP)\nfunction fib(n, memo = {}) {\n  if (n <= 1) return n;\n  if (memo[n]) return memo[n];\n\n  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);\n  return memo[n];\n}\n\n// Usage\nconsole.log(fib(10)); // 55",
      "questions": [
        {
          "question": "What are the two key properties a problem must have to be solved with Dynamic Programming?",
          "hint": "One is about breaking the problem down, the other is about solving subproblems multiple times.",
          "answer": "Optimal substructure, which means an optimal solution to the problem contains optimal solutions to its subproblems. And overlapping subproblems, meaning the same subproblems are solved again and again."
        }
      ]
    }
  ]
};



export const aimlData = {
  title: "Artificial Intelligence & Machine Learning",
  concepts: [
    {
      id: "linear-regression",
      name: "Linear Regression",
      description: "A statistical method to model relationship between dependent and independent variables",
      definition: "Linear regression is a fundamental machine learning algorithm that models the relationship between a dependent variable and independent variables by fitting a linear equation. It assumes that the relationship between variables is linear and tries to find the best line that minimizes the sum of squared residuals.",
      useCase: "Linear regression is widely used in business for sales forecasting, in economics for predicting GDP, in healthcare for drug dosage calculations, in real estate for price prediction, and in marketing for ROI analysis. It's often the starting point for more complex predictive models.",
      code: `import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Generate sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Create and train model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predictions = model.predict(X)

# Model parameters
print(f"Slope: {model.coef_[0]}")
print(f"Intercept: {model.intercept_}")

# Simple implementation from scratch
class SimpleLinearRegression:
    def fit(self, X, y):
        n = len(X)
        self.slope = (n * sum(X * y) - sum(X) * sum(y)) / (n * sum(X**2) - sum(X)**2)
        self.intercept = (sum(y) - self.slope * sum(X)) / n

    def predict(self, X):
        return self.slope * X + self.intercept`,
      questions: [
        {
          question: "What assumptions does linear regression make?",
          hint: "Think about linearity, independence, homoscedasticity, and normality",
          answer: "Linear relationship, independence of residuals, homoscedasticity (constant variance), normality of residuals, and no multicollinearity among features."
        }
      ]
    },
    {
      id: "neural-networks",
      name: "Neural Networks",
      description: "Computing systems inspired by biological neural networks",
      definition: "Neural networks are computing systems inspired by biological neural networks. They consist of interconnected nodes (neurons) organized in layers that can learn complex patterns in data through training. Each connection has a weight that adjusts during learning to minimize prediction errors.",
      useCase: "Neural networks power image recognition in social media, natural language processing in chatbots, recommendation systems in streaming platforms, autonomous vehicles, medical diagnosis, financial fraud detection, and voice assistants like Siri and Alexa.",
      code: `import numpy as np

class NeuralNetwork:
    def __init__(self, input_size, hidden_size, output_size):
        # Initialize weights randomly
        self.W1 = np.random.randn(input_size, hidden_size) * 0.1
        self.b1 = np.zeros((1, hidden_size))
        self.W2 = np.random.randn(hidden_size, output_size) * 0.1
        self.b2 = np.zeros((1, output_size))

    def sigmoid(self, x):
        return 1 / (1 + np.exp(-np.clip(x, -250, 250)))

    def sigmoid_derivative(self, x):
        return x * (1 - x)

    def forward(self, X):
        self.z1 = np.dot(X, self.W1) + self.b1
        self.a1 = self.sigmoid(self.z1)
        self.z2 = np.dot(self.a1, self.W2) + self.b2
        self.a2 = self.sigmoid(self.z2)
        return self.a2

    def backward(self, X, y, output):
        m = X.shape[0]

        # Calculate gradients
        dz2 = output - y
        dW2 = np.dot(self.a1.T, dz2) / m
        db2 = np.sum(dz2, axis=0, keepdims=True) / m

        da1 = np.dot(dz2, self.W2.T)
        dz1 = da1 * self.sigmoid_derivative(self.a1)
        dW1 = np.dot(X.T, dz1) / m
        db1 = np.sum(dz1, axis=0, keepdims=True) / m

        return dW1, db1, dW2, db2`,
      questions: [
        {
          question: "What is backpropagation and why is it important?",
          hint: "It's about calculating gradients to update weights efficiently",
          answer: "Backpropagation calculates gradients of loss function with respect to weights by applying chain rule backwards through network, enabling efficient weight updates."
        }
      ]
    }
  ]
};

export const webdevData = {
  title: "Web Development",
  concepts: [
    {
      id: "react-hooks",
      name: "React Hooks",
      description: "Functions that let you use state and lifecycle features in functional components",
      definition: "React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 as a way to write components without classes, making code more reusable and easier to understand.",
      useCase: "Hooks are used throughout modern React applications for state management (useState), side effects (useEffect), context consumption (useContext), performance optimization (useMemo, useCallback), and custom logic reuse. They're essential in building scalable React applications.",
      code: `import React, { useState, useEffect, useMemo } from 'react';

// useState Hook
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// useEffect Hook
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(\`/api/users/\${userId}\`);
      const userData = await response.json();
      setUser(userData);
      setLoading(false);
    }

    fetchUser();
  }, [userId]); // Dependency array

  if (loading) return <div>Loading...</div>;
  return <div>Hello, {user?.name}!</div>;
}

// Custom Hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`,
      questions: [
        {
          question: "What's the difference between useState and useRef?",
          hint: "Think about re-rendering and mutable values",
          answer: "useState triggers re-renders when state changes, while useRef stores mutable values that persist across renders without triggering re-renders."
        }
      ]
    },
    {
      id: "rest-apis",
      name: "REST APIs",
      description: "Architectural style for designing networked applications using HTTP methods",
      definition: "REST (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs. RESTful APIs are stateless, cacheable, and provide a uniform interface.",
      useCase: "REST APIs are the backbone of modern web applications, enabling communication between frontend and backend, mobile app integration, third-party service integration, microservices architecture, and data exchange between different systems. Examples include Twitter API, GitHub API, and payment gateways.",
      code: `// Express.js REST API Example
const express = require('express');
const app = express();

app.use(express.json());

// In-memory data store
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET /api/users - Retrieve all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET /api/users/:id - Retrieve specific user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// POST /api/users - Create new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    id: users.length + 1,
    name,
    email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /api/users/:id - Update user
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  res.json(user);
});

// DELETE /api/users/:id - Delete user
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'User not found' });

  users.splice(index, 1);
  res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));`,
      questions: [
        {
          question: "What are the key principles of REST?",
          hint: "Think about statelessness, uniform interface, client-server, and caching",
          answer: "Stateless communication, uniform interface, client-server architecture, cacheability, layered system, and code on demand (optional)."
        }
      ]
    }
  ]
};

export const cybersecurityData = {
  title: "Cybersecurity",
  concepts: [
    {
      id: "encryption",
      name: "Encryption",
      description: "Process of converting data into a coded form to prevent unauthorized access",
      definition: "Encryption is the process of converting plaintext data into ciphertext using an algorithm and a key, making it unreadable to unauthorized users. It's a fundamental security measure that protects data confidentiality during storage and transmission.",
      useCase: "Encryption is used everywhere: HTTPS for secure web Browse, WhatsApp for message privacy, banking applications for transaction security, password storage, file system protection, VPNs for network security, and cryptocurrency transactions.",
      code: `// Node.js Encryption Example using built-in crypto module
const crypto = require('crypto');

class SimpleEncryption {
  constructor() {
    this.algorithm = 'aes-256-gcm';
    this.keyLength = 32; // 256 bits
    this.ivLength = 16;  // 128 bits
  }

  // Generate a random key
  generateKey() {
    return crypto.randomBytes(this.keyLength);
  }

  // Encrypt data
  encrypt(text, key) {
    const iv = crypto.randomBytes(this.ivLength);
    const cipher = crypto.createCipher(this.algorithm, key, iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const authTag = cipher.getAuthTag();

    return {
      encrypted,
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex')
    };
  }

  // Decrypt data
  decrypt(encryptedData, key) {
    const decipher = crypto.createDecipher(
      this.algorithm,
      key,
      Buffer.from(encryptedData.iv, 'hex')
    );

    decipher.setAuthTag(Buffer.from(encryptedData.authTag, 'hex'));

    let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}

// Usage
const encryption = new SimpleEncryption();
const key = encryption.generateKey();
const message = "Secret message";

const encrypted = encryption.encrypt(message, key);
console.log('Encrypted:', encrypted);

const decrypted = encryption.decrypt(encrypted, key);
console.log('Decrypted:', decrypted);

// Hash function example
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return { salt, hash };
}`,
      questions: [
        {
          question: "What's the difference between symmetric and asymmetric encryption?",
          hint: "Think about key usage and performance",
          answer: "Symmetric uses same key for encrypt/decrypt (faster), asymmetric uses key pairs - public/private keys (slower but enables secure key exchange)."
        }
      ]
    },
    {
      id: "sql-injection",
      name: "SQL Injection",
      description: "A code injection technique that exploits vulnerabilities in database queries",
      definition: "SQL injection is a code injection technique where malicious SQL statements are inserted into application entry points, allowing attackers to interfere with database queries. It can lead to unauthorized data access, modification, or deletion.",
      useCase: "Understanding SQL injection is crucial for web developers and security professionals. It's one of the OWASP Top 10 vulnerabilities and has been responsible for major data breaches at companies like Equifax, Yahoo, and Target. Prevention is essential in any database-driven application.",
      code: `// Vulnerable Code (DON'T DO THIS)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // VULNERABLE: Direct string concatenation
  const query = \`SELECT * FROM users WHERE username = '\${username}' AND password = '\${password}'\`;

  db.query(query, (err, results) => {
    if (results.length > 0) {
      res.json({ success: true, user: results[0] });
    } else {
      res.json({ success: false });
    }
  });
});

// Malicious input example:
// username: admin'--
// This becomes: SELECT * FROM users WHERE username = 'admin'--' AND password = 'anything'
// The -- comments out the password check!

// SECURE CODE (DO THIS)
const bcrypt = require('bcrypt');

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Use parameterized queries (prepared statements)
    const query = 'SELECT * FROM users WHERE username = ? LIMIT 1';

    db.query(query, [username], async (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      if (results.length === 0) {
        return res.json({ success: false, message: 'Invalid credentials' });
      }

      const user = results[0];

      // Use proper password hashing
      const isValidPassword = await bcrypt.compare(password, user.password_hash);

      if (isValidPassword) {
        res.json({ success: true, user: { id: user.id, username: user.username } });
      } else {
        res.json({ success: false, message: 'Invalid credentials' });
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Prevention techniques:
// 1. Use parameterized queries/prepared statements
// 2. Input validation and sanitization
// 3. Principle of least privilege for database users
// 4. Use ORM/ODM libraries
// 5. Regular security audits

// Example with Sequelize ORM (safer approach)
const User = require('./models/User');

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: { username: username } // Sequelize handles sanitization
    });

    if (user && await bcrypt.compare(password, user.password_hash)) {
      res.json({ success: true, user: { id: user.id, username: user.username } });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});`,
      questions: [
        {
          question: "What are the main types of SQL injection attacks?",
          hint: "Think about in-band, blind, and time-based attacks",
          answer: "In-band (union-based, error-based), inferential/blind (boolean-based, time-based), and out-of-band SQL injection attacks."
        }
      ]
    }
  ]
};

export const interviewQuestionsData = {
  dsa: [
    {
      id: 1,
      question: "Reverse a linked list iteratively and recursively",
      difficulty: "Medium",
      hint: "For iterative: use three pointers (prev, curr, next). For recursive: think about base case and recursive call.",
      answer: "Iterative: Use prev, curr, next pointers. Recursive: Base case is null node, recursively reverse rest and adjust pointers."
    },
    {
      id: 2,
      question: "Find the longest palindromic substring",
      difficulty: "Medium",
      hint: "Consider expanding around centers approach or dynamic programming",
      answer: "Expand around each character and between characters as potential centers, keeping track of the longest palindrome found."
    },
    {
      id: 3,
      question: "Implement LRU Cache",
      difficulty: "Hard",
      hint: "Combine HashMap for O(1) access with doubly linked list for O(1) insertion/deletion",
      answer: "Use HashMap + Doubly Linked List. HashMap stores key->node mapping, DLL maintains order for LRU eviction."
    }
  ],
  aiml: [
    {
      id: 4,
      question: "Explain overfitting and how to prevent it",
      difficulty: "Medium",
      hint: "Think about model complexity, generalization, and regularization techniques",
      answer: "Overfitting occurs when model learns training data too well, failing to generalize. Prevent with regularization, cross-validation, more data, or simpler models."
    },
    {
      id: 5,
      question: "What is gradient descent and its variants?",
      difficulty: "Medium",
      hint: "Consider batch, stochastic, and mini-batch approaches",
      answer: "Gradient descent optimizes by moving opposite to gradient. Variants: Batch GD (all data), SGD (one sample), Mini-batch GD (subset of data)."
    }
  ],
  webdev: [
    {
      id: 6,
      question: "Explain event delegation in JavaScript",
      difficulty: "Easy",
      hint: "Think about event bubbling and attaching listeners to parent elements",
      answer: "Event delegation uses event bubbling to handle events at parent level instead of individual children, improving performance and handling dynamic content."
    },
    {
      id: 7,
      question: "What are React keys and why are they important?",
      difficulty: "Easy",
      hint: "Consider React's reconciliation process and list rendering",
      answer: "Keys help React identify which items have changed, added, or removed, enabling efficient updates and avoiding bugs in stateful components."
    }
  ],
  cybersecurity: [
    {
      id: 8,
      question: "Explain Cross-Site Scripting (XSS) and prevention methods",
      difficulty: "Medium",
      hint: "Think about different types of XSS and input sanitization",
      answer: "XSS injects malicious scripts into web pages. Types: Reflected, Stored, DOM-based. Prevent with input validation, output encoding, CSP headers."
    },
    {
      id: 9,
      question: "What is the principle of least privilege?",
      difficulty: "Easy",
      hint: "Think about access rights and minimizing permissions",
      answer: "Users/processes should have only the minimum access rights needed to perform their functions, reducing security risks from compromised accounts."
    }
  ]
};