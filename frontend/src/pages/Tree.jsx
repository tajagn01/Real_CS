import React, { useState, useEffect } from "react";

const treeData = {
  topic: "Trees",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Imagine you're navigating a vast family tree or the file system on your computer. You start at the top (the root), and to find someone or a specific file, you follow branches down through generations or folders. Trees work exactly like this—they are a non-linear way to organize data hierarchically, making it incredibly efficient for searching, sorting, and storing information that has a natural hierarchy.",

    // General Tree Concepts
    generalConcepts: {
      concept:
        "A tree is a non-linear data structure that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node. Unlike an array, elements are not stored sequentially. Instead, they are connected via nodes and edges.",
      realWorldExample:
        "Think of a file system on your computer: the root directory (C: or /) branches out into folders, which in turn contain sub-folders and files. Or an organizational chart showing management structure!",
      industry_applications: [
        "🌐 Web Dev - DOM (Document Object Model) structure",
        "📂 OS - File and directory systems",
        "💻 Compilers - Abstract Syntax Trees (AST)",
        "📊 Databases - B-Trees for indexing",
        "🤖 AI - Decision trees for classification",
        "🎮 Gaming - Scene graphs for organizing objects",
      ],
      advantages: [
        "🔍 Efficient searching and sorting",
        "💾 Flexible for hierarchical data",
        "➕ Efficient insertions and deletions",
        "🎯 Great for parent-child relationships",
      ],
      disadvantages: [
        "📈 More complex to implement than arrays",
        "🚶 Slower to traverse than arrays",
        "🧩 Can become unbalanced, leading to poor performance",
        "⚠️ No random access (O(n) for a search)",
      ],
    },

    // Binary Tree Concepts
    binaryTree: {
      concept:
        "A binary tree is a special type of tree where each node can have at most two children, referred to as the left child and the right child. This constraint makes them highly efficient for search and traversal algorithms, forming the basis for many other advanced tree types.",
      realWorldExample:
        "A phone's contact list could be organized as a binary search tree. To find a name, you decide whether to go left (names before) or right (names after) at each node, quickly narrowing down the search space.",
      industry_applications: [
        "🌐 Web Dev - Binary Search Trees for fast data lookup",
        "🏥 Healthcare - Medical diagnosis systems",
        "📦 Data Compression - Huffman coding trees",
        "🗺️ Pathfinding - A* search algorithms in games",
        "💻 Machine Learning - Classification and regression trees",
        "🔐 Cryptography - Merkle trees for data verification",
      ],
    },

    code_examples: {
      c: `// C Tree Example - Simple Binary Tree Traversal
#include <stdio.h>
#include <stdlib.h>

// Node structure for a binary tree
struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};

// Function to create a new node
struct Node* newNode(int data) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

// Function to perform in-order traversal
void printInorder(struct Node* node) {
    if (node == NULL) return;
    printInorder(node->left);
    printf("%d ", node->data);
    printInorder(node->right);
}

int main() {
    // Create the tree
    struct Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);

    printf("In-order traversal of binary tree is: \\n");
    printInorder(root);
    printf("\\n");
    return 0;
}`,
      cpp: `// C++ Tree Example - Binary Search Tree (BST)
#include <iostream>
#include <vector>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* left;
    Node* right;
    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};

// Function to insert a node into BST
Node* insert(Node* root, int data) {
    if (root == nullptr) {
        return new Node(data);
    }
    if (data < root->data) {
        root->left = insert(root->left, data);
    } else if (data > root->data) {
        root->right = insert(root->right, data);
    }
    return root;
}

// Function to find a value in BST
bool search(Node* root, int data) {
    if (root == nullptr) {
        return false;
    }
    if (root->data == data) {
        return true;
    }
    return data < root->data ? search(root->left, data) : search(root->right, data);
}

int main() {
    Node* root = nullptr;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 20);
    insert(root, 40);
    insert(root, 70);
    insert(root, 60);
    insert(root, 80);
    
    cout << "Searching for 40: " << (search(root, 40) ? "Found" : "Not Found") << endl;
    cout << "Searching for 99: " << (search(root, 99) ? "Found" : "Not Found") << endl;
    return 0;
}`,
      java: `// Java Tree Example - Binary Tree Traversal
import java.util.Stack;

class TreeNode {
    int data;
    TreeNode left, right;
    public TreeNode(int item) {
        data = item;
        left = right = null;
    }
}

public class BinaryTreeTraversal {
    TreeNode root;
    public BinaryTreeTraversal() { root = null; }

    // Pre-order traversal
    void preOrder(TreeNode node) {
        if (node == null) return;
        System.out.print(node.data + " ");
        preOrder(node.left);
        preOrder(node.right);
    }

    // In-order traversal
    void inOrder(TreeNode node) {
        if (node == null) return;
        inOrder(node.left);
        System.out.print(node.data + " ");
        inOrder(node.right);
    }

    public static void main(String[] args) {
        BinaryTreeTraversal tree = new BinaryTreeTraversal();
        tree.root = new TreeNode(1);
        tree.root.left = new TreeNode(2);
        tree.root.right = new TreeNode(3);
        tree.root.left.left = new TreeNode(4);
        tree.root.left.right = new TreeNode(5);

        System.out.println("Pre-order traversal:");
        tree.preOrder(tree.root);
        System.out.println("\\nIn-order traversal:");
        tree.inOrder(tree.root);
    }
}`,
      python: `# Python Tree Example - Binary Search Tree (BST)
class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return Node(key)
    else:
        if root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return root

def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val, end=" ")
        inorder_traversal(root.right)

# Create a sample BST
r = Node(50)
r = insert(r, 30)
r = insert(r, 20)
r = insert(r, 40)
r = insert(r, 70)
r = insert(r, 60)
r = insert(r, 80)

print("In-order traversal of the BST:")
inorder_traversal(r)
print()`,
      javascript: `// JavaScript Tree Example - Binary Search Tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  inorder(node = this.root) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log("In-order traversal of the BST:");
bst.inorder();`,
    },

    interview_questions: [
      {
        question: "What is the difference between a Tree and a Graph?",
        answer:
          "A tree is a type of graph with specific constraints. Trees are connected and acyclic (no cycles), and they have a single root node. Graphs can have cycles and can be disconnected.",
        difficulty: "Easy",
      },
      {
        question: "Explain the three main types of tree traversal.",
        answer:
          "Pre-order: root -> left -> right. In-order: left -> root -> right. Post-order: left -> right -> root. They are used for different purposes, such as copying a tree (pre-order) or getting a sorted list from a BST (in-order).",
        difficulty: "Medium",
      },
      {
        question: "What is a Binary Search Tree (BST) and what are its properties?",
        answer:
          "A BST is a binary tree where for every node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater. This property allows for efficient searching, insertion, and deletion.",
        difficulty: "Medium",
      },
      {
        question: "How do you find the lowest common ancestor of two nodes in a binary tree?",
        answer:
          "You can use recursion. If a node is an ancestor of both, a recursive call on its left and right children will return non-null. The current node is the LCA. If not, the LCA is in whichever subtree returns a non-null value.",
        difficulty: "Hard",
      },
      {
        question: "What are the advantages and disadvantages of using trees?",
        answer:
          "Advantages: Efficient for hierarchical data, fast searching (O(log n) in balanced trees), and flexible for insertion/deletion. Disadvantages: More complex implementation, potential for imbalance (leading to O(n) worst-case performance), and no direct random access.",
        difficulty: "Easy",
      },
    ],

    project_ideas: [
      {
        title: "File System Explorer",
        description:
          "Build a command-line or GUI application that mimics a file system, allowing users to navigate, create, and delete directories and files, all represented by a tree data structure.",
        difficulty: "Beginner",
        technologies: ["Python", "JavaScript/Node.js", "File I/O"],
      },
      {
        title: "Contact Manager with Auto-Complete",
        description:
          "Create a contact manager that stores contact names in a Trie (a type of tree) to provide fast auto-completion suggestions as the user types.",
        difficulty: "Intermediate",
        technologies: ["JavaScript/React", "Trie Data Structure", "UI/UX"],
      },
      {
        title: "Expression Evaluator",
        description:
          "Develop a program that takes a mathematical expression (e.g., '2 + 3 * 5') and builds an expression tree to correctly evaluate the result based on operator precedence.",
        difficulty: "Advanced",
        technologies: ["C++", "C", "Stack", "Tree Traversal"],
      },
      {
        title: "Basic AI for a Chess Game",
        description:
          "Use a Minimax algorithm with a game tree to create a simple AI opponent for a game like Tic-Tac-Toe or a simplified chess problem.",
        difficulty: "Advanced",
        technologies: ["Python", "Game Logic", "Recursion", "Algorithm design"],
      },
    ],
  },
};

// Syntax highlighting function
const highlightSyntax = (code, language) => {
  const keywords = {
    c: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'printf', 'include', 'main', 'struct', 'typedef', 'malloc', 'NULL', 'stdlib'],
    cpp: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'cout', 'cin', 'using', 'namespace', 'std', 'include', 'main', 'string', 'bool', 'class', 'struct', 'nullptr', 'new'],
    java: ['public', 'private', 'static', 'void', 'int', 'double', 'String', 'class', 'return', 'if', 'else', 'for', 'while', 'System', 'main', 'println', 'printf', 'import', 'null'],
    python: ['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'class', 'print', 'len', 'range', 'True', 'False', 'None'],
    javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class', 'this', 'console', 'log', 'true', 'false', 'null', 'undefined', 'new']
  };

  const strings = /"[^"]*"|'[^']*'|`[^`]*`/g;
  const comments = language === 'python' ? /#.*$/gm : /\/\/.*$|\/\*[\s\S]*?\*\//gm;
  const numbers = /\b\d+\.?\d*\b/g;

  let highlightedCode = code;

  highlightedCode = highlightedCode.replace(strings, match => `<span style="color: #22c55e;">${match}</span>`);
  highlightedCode = highlightedCode.replace(comments, match => `<span style="color: #6b7280;">${match}</span>`);
  highlightedCode = highlightedCode.replace(numbers, match => `<span style="color: #f97316;">${match}</span>`);

  if (keywords[language]) {
    keywords[language].forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlightedCode = highlightedCode.replace(regex, match => `<span style="color: #3b82f6;">${match}</span>`);
    });
  }

  return highlightedCode;
};

// New Tree Visualization Component
const TreeVisualization = () => {
  const [selectedNode, setSelectedNode] = useState(10);
  const [animatingNode, setAnimatingNode] = useState(null);

  // Mock data for the visualization component
  const mockTree = {
    value: 10,
    left: {
      value: 5,
      left: { value: 2, left: null, right: null },
      right: { value: 7, left: null, right: null },
    },
    right: {
      value: 15,
      left: { value: 12, left: null, right: null },
      right: { value: 20, left: null, right: null },
    },
  };

  useEffect(() => {
    if (animatingNode !== null) {
      const timer = setTimeout(() => setAnimatingNode(null), 300);
      return () => clearTimeout(timer);
    }
  }, [animatingNode]);

  const renderNode = (node, depth = 0) => {
    if (!node) return null;

    const isSelected = node.value === selectedNode;
    const isAnimating = node.value === animatingNode;

    return (
      <div className="flex flex-col items-center">
        <div
          className={`
            w-16 h-16 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300
            ${isSelected ? "bg-blue-500 border-blue-600 text-white shadow-xl scale-110" : "bg-white dark:bg-gray-800 border-blue-300 dark:border-blue-600 text-blue-800 dark:text-blue-200 hover:scale-105"}
            ${isAnimating ? "animate-bounce" : ""}
          `}
          onClick={() => {
            setSelectedNode(node.value);
            setAnimatingNode(node.value);
          }}
        >
          <span className="font-bold text-lg">{node.value}</span>
        </div>
        {(node.left || node.right) && (
          <div className="flex justify-center w-full mt-4">
            {node.left && (
              <div className="flex flex-col items-center w-1/2">
                <div className="w-px h-6 bg-gray-400 dark:bg-gray-600 transform translate-y-2"></div>
                <div className="w-full flex justify-end">
                  <div className="w-1/2 h-px bg-gray-400 dark:bg-gray-600 transform translate-y-px"></div>
                </div>
              </div>
            )}
            {node.right && (
              <div className="flex flex-col items-center w-1/2">
                <div className="w-px h-6 bg-gray-400 dark:bg-gray-600 transform translate-y-2"></div>
                <div className="w-full flex justify-start">
                  <div className="w-1/2 h-px bg-gray-400 dark:bg-gray-600 transform translate-y-px"></div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="flex justify-center w-full space-x-8 mt-[-10px]">
          {renderNode(node.left, depth + 1)}
          {renderNode(node.right, depth + 1)}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-800 dark:text-blue-200">
        🌳 Binary Tree Interactive Demo
      </h3>
      <div className="flex justify-center items-center py-8 overflow-x-auto">
        {renderNode(mockTree)}
      </div>
      <div className="mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center">
        <span className="text-sm text-gray-500">Selected Node Value</span>
        <div className="text-2xl font-bold text-blue-600">
          {selectedNode}
        </div>
      </div>
    </div>
  );
};


export default function EnhancedTreePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);

  const { topic, category, sections } = treeData;
  const languages = ["c", "cpp", "java", "python", "javascript"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      {/* Animated Header */}
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
          <p className="text-xl">{category}</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-white/20 rounded-full">🌳 General Trees</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🌿 Binary Trees</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🔍 BSTs</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Student Hook */}
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎯 Why Trees Matter
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* General Tree Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            🌳 Trees - Hierarchical Data Structure
          </h2>

          {/* General Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">💡 Understanding Trees</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.generalConcepts.concept}
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.generalConcepts.realWorldExample}
              </p>
            </div>
          </div>

          {/* Advantages & Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.generalConcepts.advantages.map((advantage, index) => (
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
                {sections.generalConcepts.disadvantages.map((disadvantage, index) => (
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
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">🏢 Trees in Industry</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.generalConcepts.industry_applications.map((application, index) => (
                <div
                  key={index}
                  className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400 hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-gray-700 dark:text-gray-300">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Binary Tree Section */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            🌿 Binary Trees - Specialized Trees
          </h2>

          {/* Binary Tree Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">💡 Understanding Binary Trees</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.binaryTree.concept}
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800 dark:text-green-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.binaryTree.realWorldExample}
              </p>
            </div>
          </div>

          {/* Binary Tree Interactive Demo */}
          <TreeVisualization />

          {/* Binary Tree Industry Applications */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-green-300">🏢 Binary Trees in Industry</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.binaryTree.industry_applications.map((application, index) => (
                <div
                  key={index}
                  className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-400 hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-gray-700 dark:text-gray-300">{application}</p>
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
                    __html: highlightSyntax(sections.code_examples[selectedLanguage], selectedLanguage)
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
            <table className="w-full text-xs sm:text-sm md:text-base">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold text-gray-800 dark:text-gray-200">Operation</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold text-gray-800 dark:text-gray-200">Time</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold text-gray-800 dark:text-gray-200">Space</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold text-gray-800 dark:text-gray-200">Notes (for BST)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {[
                  { operation: "Access/Search", time: "O(log n)", space: "O(h)", notes: "Fast in balanced trees, worst-case O(n)" },
                  { operation: "Insertion", time: "O(log n)", space: "O(h)", notes: "Fast in balanced trees, worst-case O(n)" },
                  { operation: "Deletion", time: "O(log n)", space: "O(h)", notes: "Fast in balanced trees, worst-case O(n)" },
                  { operation: "Traversal (DFS)", time: "O(n)", space: "O(h)", notes: "Requires visiting every node once" },
                  { operation: "Traversal (BFS)", time: "O(n)", space: "O(w)", notes: "Level by level, O(w) for max width" }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                    <td className="px-2 py-2 sm:px-4 sm:py-3 font-medium text-gray-800 dark:text-gray-200">{row.operation}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
                      <span className={`px-2 py-1 rounded text-[10px] sm:text-xs font-mono ${
                        row.time === "O(n)" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      }`}>
                        {row.time}
                      </span>
                    </td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
                      <span className="px-2 py-1 rounded text-[10px] sm:text-xs font-mono bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {row.space}
                      </span>
                    </td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-gray-700 dark:text-gray-300 text-[11px] sm:text-sm">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                  onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === index ? -1 : index)}
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {qa.question}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        qa.difficulty === "Easy" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                        qa.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                        "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      }`}>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.difficulty === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                    project.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                    "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                  }`}>
                    {project.difficulty}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies:</h4>
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
          <h3 className="text-2xl font-bold mb-4">Master Trees Today! 🌳</h3>
          <p className="text-lg text-gray-300 mb-6">
            From simple binary trees to complex search algorithms—trees are your foundation for modeling hierarchical data.
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
}