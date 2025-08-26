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
      "code": "#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n\nstruct Node {\n    int data;\n    struct Node* left;\n    struct Node* right;\n};\n\nstruct Node* createNode(int data) {\n    struct Node* node = malloc(sizeof(struct Node));\n    node-&gt;data = data;\n    node-&gt;left = node-&gt;right = NULL;\n    return node;\n}\n\nvoid inorder(struct Node* root) {\n    if (root) {\n        inorder(root-&gt;left);\n        printf(\"%d \", root-&gt;data);\n        inorder(root-&gt;right);\n    }\n}\n\nint main() {\n    struct Node* root = createNode(1);\n    root-&gt;left = createNode(2);\n    root-&gt;right = createNode(3);\n    inorder(root); // Output: 2 1 3\n    return 0;\n}",
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
      "code": "#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n#include &lt;string.h&gt;\n\n#define SIZE 10\n\nstruct Node {\n    char key[50];\n    int value;\n    struct Node* next;\n};\n\nstruct Node* table[SIZE];\n\nint hash(char* key) {\n    int sum = 0;\n    for (int i = 0; key[i]; i++)\n        sum += key[i];\n    return sum % SIZE;\n}\n\nvoid insert(char* key, int value) {\n    int index = hash(key);\n    struct Node* node = malloc(sizeof(struct Node));\n    strcpy(node-&gt;key, key);\n    node-&gt;value = value;\n    node-&gt;next = table[index];\n    table[index] = node;\n}\n\nint search(char* key) {\n    int index = hash(key);\n    struct Node* node = table[index];\n    while (node) {\n        if (strcmp(node-&gt;key, key) == 0)\n            return node-&gt;value;\n        node = node-&gt;next;\n    }\n    return -1;\n}\n\nint main() {\n    insert(\"name\", 100);\n    printf(\"%d\\n\", search(\"name\")); // 100\n    return 0;\n}",
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
      "code": "#include &lt;stdio.h&gt;\n\n#define MAX_SIZE 100\n\nint heap[MAX_SIZE];\nint size = 0;\n\nvoid swap(int* a, int* b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}\n\nvoid insert(int value) {\n    heap[size] = value;\n    int i = size++;\n    \n    // Bubble up\n    while (i &gt; 0 && heap[i] &gt; heap[(i-1)/2]) {\n        swap(&amp;heap[i], &amp;heap[(i-1)/2]);\n        i = (i-1)/2;\n    }\n}\n\nint extractMax() {\n    if (size == 0) return -1;\n    int max = heap[0];\n    heap[0] = heap[--size];\n    \n    // Bubble down\n    int i = 0;\n    while (2*i+1 &lt; size) {\n        int largest = i;\n        if (heap[2*i+1] &gt; heap[largest]) largest = 2*i+1;\n        if (2*i+2 &lt; size && heap[2*i+2] &gt; heap[largest]) largest = 2*i+2;\n        if (largest == i) break;\n        swap(&amp;heap[i], &amp;heap[largest]);\n        i = largest;\n    }\n    return max;\n}\n\nint main() {\n    insert(10);\n    insert(20);\n    insert(15);\n    printf(\"%d\\n\", extractMax()); // 20\n    return 0;\n}",
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
      "code": "#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n#include &lt;stdbool.h&gt;\n\n#define ALPHABET_SIZE 26\n\nstruct TrieNode {\n    struct TrieNode* children[ALPHABET_SIZE];\n    bool isEndOfWord;\n};\n\nstruct TrieNode* createNode() {\n    struct TrieNode* node = malloc(sizeof(struct TrieNode));\n    node-&gt;isEndOfWord = false;\n    for (int i = 0; i &lt; ALPHABET_SIZE; i++)\n        node-&gt;children[i] = NULL;\n    return node;\n}\n\nvoid insert(struct TrieNode* root, char* word) {\n    struct TrieNode* current = root;\n    for (int i = 0; word[i]; i++) {\n        int index = word[i] - 'a';\n        if (!current-&gt;children[index])\n            current-&gt;children[index] = createNode();\n        current = current-&gt;children[index];\n    }\n    current-&gt;isEndOfWord = true;\n}\n\nbool search(struct TrieNode* root, char* word) {\n    struct TrieNode* current = root;\n    for (int i = 0; word[i]; i++) {\n        int index = word[i] - 'a';\n        if (!current-&gt;children[index])\n            return false;\n        current = current-&gt;children[index];\n    }\n    return current-&gt;isEndOfWord;\n}\n\nint main() {\n    struct TrieNode* root = createNode();\n    insert(root, \"cat\");\n    printf(\"%d\\n\", search(root, \"cat\")); // 1\n    return 0;\n}",
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
      "code": "#include &lt;stdio.h&gt;\n#include &lt;stdlib.h&gt;\n\n#define MAX_VERTICES 10\n\nint adj[MAX_VERTICES][MAX_VERTICES];\nint visited[MAX_VERTICES];\nint vertices = 0;\n\nvoid addEdge(int u, int v) {\n    adj[u][v] = 1;\n    adj[v][u] = 1; // For undirected graph\n}\n\nvoid dfs(int vertex) {\n    visited[vertex] = 1;\n    printf(\"%d \", vertex);\n    \n    for (int i = 0; i &lt; vertices; i++) {\n        if (adj[vertex][i] && !visited[i]) {\n            dfs(i);\n        }\n    }\n}\n\nvoid bfs(int start) {\n    int queue[MAX_VERTICES], front = 0, rear = 0;\n    visited[start] = 1;\n    queue[rear++] = start;\n    \n    while (front &lt; rear) {\n        int vertex = queue[front++];\n        printf(\"%d \", vertex);\n        \n        for (int i = 0; i &lt; vertices; i++) {\n            if (adj[vertex][i] && !visited[i]) {\n                visited[i] = 1;\n                queue[rear++] = i;\n            }\n        }\n    }\n}\n\nint main() {\n    vertices = 4;\n    addEdge(0, 1);\n    addEdge(0, 2);\n    addEdge(1, 3);\n    dfs(0); // DFS traversal\n    return 0;\n}",
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
      "code": "#include &lt;stdio.h&gt;\n\nvoid bubbleSort(int arr[], int n) {\n    for (int i = 0; i &lt; n-1; i++) {\n        for (int j = 0; j &lt; n-i-1; j++) {\n            if (arr[j] &gt; arr[j+1]) {\n                int temp = arr[j];\n                arr[j] = arr[j+1];\n                arr[j+1] = temp;\n            }\n        }\n    }\n}\n\nvoid quickSort(int arr[], int low, int high) {\n    if (low &lt; high) {\n        int pi = partition(arr, low, high);\n        quickSort(arr, low, pi - 1);\n        quickSort(arr, pi + 1, high);\n    }\n}\n\nint partition(int arr[], int low, int high) {\n    int pivot = arr[high];\n    int i = low - 1;\n    for (int j = low; j &lt; high; j++) {\n        if (arr[j] &lt; pivot) {\n            i++;\n            int temp = arr[i];\n            arr[i] = arr[j];\n            arr[j] = temp;\n        }\n    }\n    int temp = arr[i+1];\n    arr[i+1] = arr[high];\n    arr[high] = temp;\n    return i + 1;\n}\n\nint main() {\n    int arr[] = {64, 34, 25, 12};\n    int n = 4;\n    bubbleSort(arr, n);\n    for (int i = 0; i &lt; n; i++)\n        printf(\"%d \", arr[i]);\n    return 0;\n}",
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
      "code": "#include &lt;stdio.h&gt;\n\n// Fibonacci with memoization\nint memo[100];\n\nint fib(int n) {\n    if (n &lt;= 1) return n;\n    if (memo[n] != 0) return memo[n];\n    \n    memo[n] = fib(n-1) + fib(n-2);\n    return memo[n];\n}\n\n// 0/1 Knapsack Problem\nint knapsack(int W, int wt[], int val[], int n) {\n    int dp[n+1][W+1];\n    \n    for (int i = 0; i &lt;= n; i++) {\n        for (int w = 0; w &lt;= W; w++) {\n            if (i == 0 || w == 0)\n                dp[i][w] = 0;\n            else if (wt[i-1] &lt;= w)\n                dp[i][w] = (val[i-1] + dp[i-1][w-wt[i-1]] &gt; dp[i-1][w]) ? \n                           val[i-1] + dp[i-1][w-wt[i-1]] : dp[i-1][w];\n            else\n                dp[i][w] = dp[i-1][w];\n        }\n    }\n    return dp[n][W];\n}\n\nint main() {\n    printf(\"%d\\n\", fib(10)); // 55\n    \n    int val[] = {60, 100, 120};\n    int wt[] = {10, 20, 30};\n    int W = 50, n = 3;\n    printf(\"%d\\n\", knapsack(W, wt, val, n)); // 220\n    return 0;\n}",
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
      id: "what-is-ai-ml",
      name: "What is AI & ML?",
      description: "Foundations, history, and evolution of Artificial Intelligence and Machine Learning.",
      definition: "Artificial Intelligence (AI) is the field of creating systems that mimic human intelligence, while Machine Learning (ML) is a subset of AI that focuses on algorithms that learn patterns from data. AI aims for intelligent behavior, ML enables that by using data-driven models.",
      useCase: "Early AI: Symbolic reasoning systems in the 1950s.\nML Revolution: Statistical learning, neural networks.\nModern Era: Deep learning, transformers, generative AI.\nFuture: General AI, self-learning systems, and quantum-accelerated AI.",
      code: null,
      questions: []
    },
    {
      id: "aimluseinindustry",
      name: "Industrial Applications & Use Cases",
      description: "How AI/ML transforms industries through automation, prediction, and intelligence.",
      definition: "AI/ML applications span multiple domains—healthcare, finance, manufacturing, logistics, marketing, and robotics. They reduce costs, automate tasks, and enable predictive intelligence.",
      useCase: "Healthcare: Medical imaging, drug discovery.\nFinance: Fraud detection, algorithmic trading.\nRetail: Recommendation engines (Amazon, Netflix).\nManufacturing: Predictive maintenance, quality control.\nAutonomous Systems: Self-driving cars, drones.",
      code: null,
      questions: []
    },
    {
      id: "ai-ml-roadmap",
      name: "AI/ML Learning Roadmap",
      description: "A step-by-step learning journey from beginner to expert to researcher.",
      definition: "The roadmap covers mathematical foundations, core algorithms, deep learning, applied domains, and advanced frontiers like AGI and quantum AI. It ensures structured progression.",
      useCase: "Beginner: Learn Python, basic math, simple ML algorithms.\nIntermediate: Master deep learning (CNNs, RNNs, transformers).\nExpert: Work with MLOps, scalable systems.\nResearcher: Push into frontier AI (AGI, neuromorphic, quantum ML).",
      code: null,
      questions: []
    },
    {
      id: "math-foundations",
      name: "Mathematical & Theoretical Foundations",
      description: "The core mathematical pillars that support AI/ML theory and practice.",
      definition: "AI/ML relies on Linear Algebra (vectors, matrices), Probability & Statistics (uncertainty, inference), Calculus (gradients, optimization), and Optimization Theory (minimizing error).",
      useCase: "Linear Algebra: Represent neural network weights.\nCalculus: Backpropagation with gradients.\nProbability: Bayesian inference, uncertainty modeling.\nOptimization: Gradient descent, convex optimization.",
      code: null,
      questions: []
    },
    {
      id: "core-ml-algorithms",
      name: "Core Machine Learning Algorithms",
      description: "Fundamental ML methods used across industries.",
      definition: "Core ML includes supervised learning (regression, classification), unsupervised learning (clustering, dimensionality reduction), and ensemble methods (boosting, bagging).",
      useCase: "Regression: Predicting house prices.\nClassification: Spam detection.\nClustering: Customer segmentation.\nEnsemble: Random forests for robust predictions.\nDimensionality Reduction: PCA for visualization.",
      code: null,
      questions: []
    },
    {
      id: "deep-learning",
      name: "Deep Learning",
      description: "Neural networks and advanced architectures for complex data.",
      definition: "Deep Learning uses multi-layered neural networks to learn hierarchical representations of data. Includes CNNs (images), RNNs/LSTMs (sequences), Transformers & Attention (NLP, vision).",
      useCase: "CNN: Image classification.\nRNN/LSTM: Stock prediction, text generation.\nTransformers: Large language models (GPT, BERT).\nGANs: Image synthesis.\nDiffusion: AI art generation.",
      code: null,
      questions: []
    },
    {
      id: "nlp",
      name: "Natural Language Processing (NLP)",
      description: "AI for human language understanding and generation.",
      definition: "NLP enables machines to understand, generate, and interact with human language. It includes embeddings, transformers, multimodal models, and generative AI (LLMs).",
      useCase: "Sentiment analysis, Chatbots, Machine translation, Summarization, Multimodal AI like text-to-image.",
      code: null,
      questions: []
    },
    {
      id: "computer-vision",
      name: "Computer Vision",
      description: "Teaching machines to see, interpret, and generate visual content.",
      definition: "Computer Vision applies ML/DL to process and understand images and videos. Includes CNNs, object detection, GANs, diffusion models, and 3D vision.",
      useCase: "Face recognition, Medical imaging, Autonomous vehicles, AR/VR, Industrial inspection.",
      code: null,
      questions: []
    },
    {
      id: "reinforcement-learning",
      name: "Reinforcement Learning (RL)",
      description: "Learning through interaction with environments using rewards and penalties.",
      definition: "RL is based on Markov Decision Processes where an agent learns optimal actions by maximizing cumulative reward. Includes Q-learning, Policy Gradients, and Actor-Critic methods.",
      useCase: "Robotics control, Game AI (AlphaGo), Financial portfolio optimization, Supply chain automation.",
      code: null,
      questions: []
    },
    {
      id: "mlops",
      name: "MLOps & AI Systems Engineering",
      description: "Engineering discipline for building, deploying, and maintaining AI models.",
      definition: "MLOps combines ML with DevOps, covering pipelines, deployment, monitoring, scalability, and cloud/edge AI systems.",
      useCase: "Model versioning, Continuous training, Edge inference for IoT, Cloud AI services (AWS Sagemaker, GCP Vertex).",
      code: null,
      questions: []
    },
    {
      id: "ai-for-data-science",
      name: "AI for Data Science & Analytics",
      description: "Applying AI/ML for data exploration, prediction, and decision-making.",
      definition: "AI enhances data science workflows via automated feature engineering, predictive analytics, and large-scale ML integration with big data systems.",
      useCase: "Churn prediction, Sales forecasting, Customer analytics, Fraud detection in big data pipelines.",
      code: null,
      questions: []
    },
    {
      id: "responsible-ai",
      name: "Ethics, Bias & Responsible AI",
      description: "Ensuring fairness, transparency, and accountability in AI systems.",
      definition: "Responsible AI involves detecting and mitigating bias, ensuring explainability, creating transparent decision-making systems, and complying with regulations.",
      useCase: "Fair credit scoring, Explainable healthcare models, Ethical AI for hiring, Policy compliance.",
      code: null,
      questions: []
    },
    {
      id: "ai-for-business",
      name: "AI for Business & Wealth Creation",
      description: "Using AI for financial growth, productivity, and startups.",
      definition: "AI drives innovation and wealth creation by automating processes, enabling smart analytics, and opening new markets in healthcare, finance, manufacturing, and startups.",
      useCase: "Algorithmic trading, AI-driven manufacturing, SaaS AI startups, Productivity assistants (Copilot, ChatGPT).",
      code: null,
      questions: []
    },
    {
      id: "future-research",
      name: "Future & Frontier Research",
      description: "Exploring the next frontiers of AI beyond current deep learning systems.",
      definition: "Includes Quantum ML, Neuromorphic AI (brain-inspired), Artificial General Intelligence (AGI), Bio-inspired AI, and self-learning adaptive systems.",
      useCase: "Quantum speedups for optimization, Brain-like chips, Self-evolving AI agents, AI-driven scientific discovery.",
      code: null,
      questions: []
    }
  ]
}

export const webdevData = {
  title: "Web Development",
  concepts: [
    {
      id: "what-is-webdev",
      name: "What is Web Development?",
      description: "Foundations, history, and evolution of Web Development.",
      definition: "Web Development is the discipline of building websites and web applications that run on the internet. It spans frontend, backend, and full-stack systems. It has evolved from static HTML pages to dynamic, scalable, and interactive experiences.",
      useCase: "History: Static pages (1990s).\nPresent: Interactive SPAs, cloud-native apps.\nFuture: Web3, AI-driven web, immersive AR/VR web.",
      code: null,
      questions: []
    },
    {
      id: "industrial-applications",
      name: "Industrial Applications & Use Cases",
      description: "How Web Development powers industries through digital platforms and services.",
      definition: "Web Development is at the core of digital transformation across industries, enabling commerce, education, healthcare, and entertainment platforms.",
      useCase: "E-commerce: Amazon, Flipkart.\nFinance: Online banking & trading.\nHealthcare: Telemedicine portals.\nEducation: Coursera, edX.\nSocial: Facebook, Twitter.",
      code: null,
      questions: []
    },
    {
      id: "webdev-roadmap",
      name: "Web Development Learning Roadmap",
      description: "Step-by-step roadmap from beginner to expert to researcher.",
      definition: "The roadmap covers static websites, dynamic applications, full-stack, scalable systems, and cutting-edge research in Web3 & AI-driven apps.",
      useCase: "Beginner: HTML, CSS, JavaScript basics.\nIntermediate: React, Node.js, Databases.\nExpert: DevOps, scalable architectures.\nResearcher: Web3, AI-driven web, immersive 3D.",
      code: null,
      questions: []
    },
    {
      id: "foundations",
      name: "Foundations of the Web",
      description: "Core building blocks of the internet and web technologies.",
      definition: "HTML (structure), CSS (style), JavaScript (logic), DOM (document object model), browser rendering, and HTTP form the base of all web applications.",
      useCase: "HTML for content.\nCSS for responsive design.\nJavaScript for dynamic behavior.\nDOM for manipulation.\nBrowser rendering optimization.",
      code: null,
      questions: []
    },
    {
      id: "frontend-development",
      name: "Frontend Development",
      description: "Designing and building interactive user interfaces.",
      definition: "Frontend involves creating user-facing parts of applications using modern JavaScript, frameworks (React, Vue, Angular, Svelte), and UI/UX design.",
      useCase: "React for SPAs.\nVue/Angular for enterprise UIs.\nSvelte for lightweight apps.\nAccessibility and UI principles for inclusive design.",
      code: null,
      questions: []
    },
    {
      id: "backend-development",
      name: "Backend Development",
      description: "Server-side systems, APIs, and authentication.",
      definition: "Backend focuses on handling data, business logic, authentication, and serving APIs. Common stacks include Node.js, Django, Express, and Spring Boot.",
      useCase: "REST & GraphQL APIs.\nAuthentication with JWT, OAuth.\nBusiness logic for e-commerce.\nServer-side rendering for SEO.",
      code: null,
      questions: []
    },
    {
      id: "databases",
      name: "Databases & Data Handling",
      description: "Persistent storage, optimization, and real-time data handling.",
      definition: "Includes SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis), ORMs, caching, and database optimization strategies.",
      useCase: "Relational DB for transactions.\nNoSQL for scalability.\nRedis for caching.\nRealtime data with Firebase or WebSockets.",
      code: null,
      questions: []
    },
    {
      id: "fullstack",
      name: "Full-Stack Development",
      description: "Bridging frontend and backend into integrated systems.",
      definition: "Full-stack development integrates frontend and backend, using monolithic or microservices-based architectures.",
      useCase: "MERN/MEAN stack apps.\nMicroservices APIs.\nEnd-to-end development for startups.\nMonolith → microservices migration.",
      code: null,
      questions: []
    },
    {
      id: "performance",
      name: "Web Performance & Optimization",
      description: "Techniques to make web applications fast and efficient.",
      definition: "Covers Core Web Vitals, rendering speed, lazy loading, caching, CDNs, and optimization strategies for scalability.",
      useCase: "Lighthouse audits.\nCDN caching.\nLazy loading images.\nCore Web Vitals optimization.",
      code: null,
      questions: []
    },
    {
      id: "security",
      name: "Security in Web Development",
      description: "Protecting applications from vulnerabilities and attacks.",
      definition: "Covers OWASP Top 10, HTTPS, secure authentication (JWT, OAuth), and protection against XSS, CSRF, SQL injection, and insecure coding practices.",
      useCase: "Login security with OAuth.\nXSS protection in React.\nCSRF tokens in APIs.\nHTTPS for secure traffic.",
      code: null,
      questions: []
    },
    {
      id: "devops",
      name: "DevOps & Deployment",
      description: "Automating build, deployment, and scaling of apps.",
      definition: "Includes CI/CD pipelines, Docker, Kubernetes, and deployment platforms like AWS, Azure, GCP, Vercel, and Netlify.",
      useCase: "Dockerized microservices.\nCI/CD with GitHub Actions.\nKubernetes scaling.\nServerless deployment on Vercel.",
      code: null,
      questions: []
    },
    {
      id: "pwa",
      name: "Mobile & Progressive Web Apps (PWAs)",
      description: "Building mobile-friendly, offline-capable web apps.",
      definition: "PWAs use responsive design, service workers, caching, and APIs to create mobile-like web apps that work offline and integrate with devices.",
      useCase: "Responsive UIs.\nOffline-first apps.\nPush notifications.\nHybrid apps with Capacitor/Ionic.",
      code: null,
      questions: []
    },
    {
      id: "testing",
      name: "Testing & Quality Assurance",
      description: "Ensuring reliability and correctness of web applications.",
      definition: "Covers unit testing, integration testing, and end-to-end testing using tools like Jest, Cypress, Playwright, and Selenium.",
      useCase: "Jest for unit tests.\nCypress for E2E.\nSelenium for browser automation.\nAutomated CI/CD testing.",
      code: null,
      questions: []
    },
    {
      id: "system-design",
      name: "Scalable Architecture & System Design",
      description: "Designing web apps to handle millions of users.",
      definition: "Covers microservices, event-driven systems, API gateways, load balancing, caching strategies, and distributed design.",
      useCase: "Load balancing with Nginx.\nEvent-driven apps with Kafka.\nAPI Gateway for microservices.\nScaling databases with sharding.",
      code: null,
      questions: []
    },
    {
      id: "future-web",
      name: "Future of Web Development",
      description: "Next frontiers of the web ecosystem.",
      definition: "Future includes Web3, blockchain apps, serverless computing, edge networks, AI-powered web, AR/VR, and immersive 3D web experiences.",
      useCase: "Web3 decentralized apps.\nAI copilots for web.\nMetaverse & AR/VR apps.\nEdge computing for latency.\nQuantum-secure web protocols.",
      code: null,
      questions: []
    }
  ]
}

export const cybersecurityData = {
  title: "Cybersecurity",
  concepts: [
    {
      id: "what-is-cybersecurity",
      name: "What is Cybersecurity?",
      description: "Foundations, history, and evolution of cybersecurity as a discipline.",
      definition: "Cybersecurity is the practice of protecting systems, networks, and data from digital attacks, unauthorized access, and damage. It covers defensive strategies, offensive techniques (ethical hacking), and governance.",
      useCase: "History: Early antivirus & firewalls in 1980s–1990s.\nPresent: Advanced threat intelligence, zero-trust security.\nFuture: AI-driven defense, quantum-safe cryptography.",
      code: null,
      questions: []
    },
    {
      id: "industrial-applications",
      name: "Industrial Applications & Use Cases",
      description: "How cybersecurity protects industries and governments from digital threats.",
      definition: "Cybersecurity is vital for protecting critical infrastructure, financial systems, healthcare records, military defense, and consumer data privacy.",
      useCase: "Finance: Fraud detection, secure transactions.\nHealthcare: HIPAA compliance, patient data protection.\nManufacturing: ICS/SCADA protection.\nGovernment: Cyber defense, election security.\nCloud: Securing SaaS and data pipelines.",
      code: null,
      questions: []
    },
    {
      id: "cybersecurity-roadmap",
      name: "Cybersecurity Learning Roadmap",
      description: "Step-by-step roadmap from beginner to expert to researcher in cybersecurity.",
      definition: "Covers networking fundamentals, cryptography, ethical hacking, digital forensics, penetration testing, security engineering, and advanced research like quantum security.",
      useCase: "Beginner: Networking, Linux, system security basics.\nIntermediate: Penetration testing, incident response, secure coding.\nExpert: Red teaming, blue teaming, malware analysis.\nResearcher: AI-driven defense, quantum cryptography.",
      code: null,
      questions: []
    },
    {
      id: "network-security",
      name: "Network Security",
      description: "Protecting data and systems across computer networks.",
      definition: "Network security includes firewalls, intrusion detection systems (IDS/IPS), VPNs, and secure communication protocols.",
      useCase: "Firewalls for perimeter defense.\nVPNs for secure remote access.\nIDS for detecting intrusions.\nTLS/SSL for encrypted communication.",
      code: null,
      questions: []
    },
    {
      id: "application-security",
      name: "Application Security",
      description: "Securing software applications against vulnerabilities and attacks.",
      definition: "Application security involves secure coding practices, code reviews, security testing, and frameworks to mitigate risks.",
      useCase: "OWASP Top 10 protection.\nSecure APIs.\nCode audits.\nRuntime Application Self-Protection (RASP).",
      code: null,
      questions: []
    },
    {
      id: "cryptography",
      name: "Cryptography",
      description: "Mathematical methods to secure communication and data.",
      definition: "Cryptography ensures confidentiality, integrity, and authentication through encryption, hashing, digital signatures, and key management.",
      useCase: "AES for encryption.\nSHA-256 for hashing.\nRSA/ECC for secure key exchange.\nDigital signatures for verification.",
      code: null,
      questions: []
    },
    {
      id: "ethical-hacking",
      name: "Ethical Hacking & Penetration Testing",
      description: "Offensive security methods to identify vulnerabilities before attackers do.",
      definition: "Ethical hacking uses penetration testing, vulnerability scanning, and exploitation frameworks to test system defenses.",
      useCase: "Web app pentesting.\nWireless security testing.\nSocial engineering simulations.\nRed teaming engagements.",
      code: null,
      questions: []
    },
    {
      id: "incident-response",
      name: "Incident Response & Digital Forensics",
      description: "Responding to cyberattacks and investigating breaches.",
      definition: "Incident response involves detection, containment, eradication, and recovery, while digital forensics analyzes compromised systems for evidence.",
      useCase: "Malware containment.\nData breach investigation.\nLog analysis.\nForensic imaging of disks.",
      code: null,
      questions: []
    },
    {
      id: "cloud-security",
      name: "Cloud Security",
      description: "Protecting applications, infrastructure, and data in the cloud.",
      definition: "Cloud security involves shared responsibility models, cloud IAM, encryption, and securing APIs/services across AWS, Azure, and GCP.",
      useCase: "IAM role policies.\nData encryption at rest/in transit.\nCloud monitoring.\nCompliance automation.",
      code: null,
      questions: []
    },
    {
      id: "identity-access",
      name: "Identity & Access Management (IAM)",
      description: "Managing user identities and permissions securely.",
      definition: "IAM enforces authentication, authorization, and auditing (AAA). Includes SSO, MFA, RBAC, and Zero Trust principles.",
      useCase: "SSO with OAuth2.\nMFA for login security.\nRBAC in enterprises.\nZero Trust network access.",
      code: null,
      questions: []
    },
    {
      id: "security-tools",
      name: "Security Tools & Automation",
      description: "Popular tools for security scanning, monitoring, and automation.",
      definition: "Includes penetration testing tools (Metasploit, Burp Suite), monitoring tools (Splunk, SIEM), and automation frameworks.",
      useCase: "Vulnerability scanning with Nessus.\nPacket analysis with Wireshark.\nSIEM for real-time monitoring.\nSOAR for automated responses.",
      code: null,
      questions: []
    },
    {
      id: "compliance",
      name: "Compliance, Governance & Risk Management",
      description: "Standards and policies to ensure secure and legal operations.",
      definition: "Covers GDPR, HIPAA, ISO 27001, NIST frameworks, and risk management practices.",
      useCase: "GDPR for data privacy.\nHIPAA for healthcare compliance.\nRisk assessments.\nISO 27001 audits.",
      code: null,
      questions: []
    },
    {
      id: "security-architecture",
      name: "Scalable Security Architecture & System Design",
      description: "Designing secure systems that scale with enterprise growth.",
      definition: "Involves layered defense, zero-trust networks, microsegmentation, secure APIs, and threat modeling for large-scale applications.",
      useCase: "Zero Trust enterprise model.\nLoad-balanced firewalls.\nAPI gateways with WAF.\nMicrosegmentation in cloud systems.",
      code: null,
      questions: []
    },
    {
      id: "future-cybersecurity",
      name: "Future of Cybersecurity",
      description: "Emerging trends and next-generation defenses.",
      definition: "Future cybersecurity includes AI-driven defense, quantum-safe cryptography, autonomous SOCs, and integration with blockchain for decentralized security.",
      useCase: "AI for threat detection.\nQuantum-resistant algorithms.\nBlockchain for identity.\nAutonomous SOCs for response.",
      code: null,
      questions: []
    }
  ]
}


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