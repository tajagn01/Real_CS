import React, { useRef, useEffect, useState } from "react";

const binaryTreeData = {
  topic: "Binary Tree",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Think of a family tree where each person has at most two children, or a decision-making flowchart where every question has a yes/no answer. That's exactly how a Binary Tree works in computer science! It's a hierarchical data structure where each node has at most two children - left and right. From organizing data for lightning-fast searches to building efficient file systems and expression parsers, binary trees are the foundation of countless algorithms that power everything from databases to game engines!",

    // Binary Tree Fundamentals
    fundamentals: {
      concept:
        "A Binary Tree is a hierarchical data structure where each node has at most two children, referred to as the left child and right child. A Binary Search Tree (BST) is a special type of binary tree where the left subtree contains values less than the parent node, and the right subtree contains values greater than the parent node, enabling efficient searching, insertion, and deletion operations.",
      realWorldExample:
        "Picture a tournament bracket where each match eliminates half the contestants, or think of how you search through a phone book by opening to the middle and deciding which half to search next!",
      key_operations: [
        "🌱 Insert - Add new node maintaining BST property",
        "🗑️ Delete - Remove node while preserving structure",
        "🔍 Search - Find specific value efficiently",
        "🚶 Traversal - Visit nodes in specific order",
        "📏 Height - Calculate tree depth",
        "🔢 Count - Get total number of nodes"
      ],
      industry_applications: [
        "🗃️ Databases - B+ trees for indexing and quick queries",
        "🗂️ File Systems - Directory structures and file organization",
        "🔍 Search Engines - Efficient data retrieval algorithms",
        "🎮 Gaming - Decision trees for AI and pathfinding",
        "💼 Finance - Option pricing models and risk analysis",
        "🧮 Compilers - Abstract syntax trees for code parsing",
        "🌐 Networks - Routing tables and network topology"
      ],
      advantages: [
        "⚡ O(log n) average search, insert, delete",
        "🎯 Efficient range queries and sorted traversal",
        "💾 Dynamic size with no memory waste",
        "🔄 Self-organizing data structure",
        "📊 Natural hierarchical data representation"
      ],
      disadvantages: [
        "⚠️ Can degenerate to O(n) if unbalanced",
        "🏗️ More complex implementation than arrays",
        "💾 Extra memory overhead for pointers",
        "🔄 Requires balancing for optimal performance"
      ],
    },

    // Implementation Types
    implementation_types: {
      binary_search_tree: {
        concept: "Standard BST where left child < parent < right child. Simple to implement but can become unbalanced.",
        advantages: ["Simple implementation", "Efficient for balanced trees", "In-order traversal gives sorted sequence"],
        disadvantages: ["Can degenerate to linked list", "No self-balancing", "Worst case O(n) operations"]
      },
      avl_tree: {
        concept: "Self-balancing BST where height difference between left and right subtrees is at most 1.",
        advantages: ["Guaranteed O(log n) operations", "Automatically maintains balance", "Good for frequent searches"],
        disadvantages: ["More complex implementation", "Extra storage for height information", "More rotations during insertion/deletion"]
      }
    },


code_examples : {
  c: `#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;string.h&gt;

typedef struct TreeNode {
    int fileSize;
    char fileName[256];
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

TreeNode* createNode(int size, const char* name) {
    TreeNode* newNode = (TreeNode*)malloc(sizeof(TreeNode));
    newNode-&gt;fileSize = size;
    strncpy(newNode-&gt;fileName, name, 255);
    newNode-&gt;fileName[255] = '\0';
    newNode-&gt;left = newNode-&gt;right = NULL;
    return newNode;
}

TreeNode* insertFile(TreeNode* root, int size, const char* name) {
    if (root == NULL) return createNode(size, name);
    if (size &lt; root-&gt;fileSize) root-&gt;left = insertFile(root-&gt;left, size, name);
    else if (size &gt; root-&gt;fileSize) root-&gt;right = insertFile(root-&gt;right, size, name);
    return root;
}

TreeNode* findMin(TreeNode* node) {
    while (node &amp;&amp; node-&gt;left != NULL) node = node-&gt;left;
    return node;
}

TreeNode* deleteFile(TreeNode* root, int size) {
    if (root == NULL) return root;
    if (size &lt; root-&gt;fileSize) root-&gt;left = deleteFile(root-&gt;left, size);
    else if (size &gt; root-&gt;fileSize) root-&gt;right = deleteFile(root-&gt;right, size);
    else {
        if (root-&gt;left == NULL) {
            TreeNode* temp = root-&gt;right; free(root); return temp;
        } else if (root-&gt;right == NULL) {
            TreeNode* temp = root-&gt;left; free(root); return temp;
        }
        TreeNode* temp = findMin(root-&gt;right);
        root-&gt;fileSize = temp-&gt;fileSize;
        strcpy(root-&gt;fileName, temp-&gt;fileName);
        root-&gt;right = deleteFile(root-&gt;right, temp-&gt;fileSize);
    }
    return root;
}

void inorderTraversal(TreeNode* root) {
    if (root != NULL) {
        inorderTraversal(root-&gt;left);
        printf("%s (%d KB) -&gt; ", root-&gt;fileName, root-&gt;fileSize);
        inorderTraversal(root-&gt;right);
    }
}

int main() {
    TreeNode* fs = NULL;
    fs = insertFile(fs, 500, "document.pdf");
    fs = insertFile(fs, 250, "image.jpg");
    fs = insertFile(fs, 750, "video.mp4");
    inorderTraversal(fs);
    fs = deleteFile(fs, 250);
    inorderTraversal(fs);
    return 0;
}`,

  cpp: `#include &lt;iostream&gt;
#include &lt;string&gt;

class GradeTree {
    struct Student {
        int grade;
        std::string name;
        Student* left;
        Student* right;
        Student(int g, std::string n): grade(g), name(n), left(nullptr), right(nullptr) {}
    };
    Student* root;

    Student* insertHelper(Student* node, int grade, std::string name) {
        if (!node) return new Student(grade, name);
        if (grade &lt; node-&gt;grade) node-&gt;left = insertHelper(node-&gt;left, grade, name);
        else if (grade &gt; node-&gt;grade) node-&gt;right = insertHelper(node-&gt;right, grade, name);
        return node;
    }

    Student* findMin(Student* node) {
        while (node &amp;&amp; node-&gt;left) node = node-&gt;left;
        return node;
    }

    Student* deleteHelper(Student* node, int grade) {
        if (!node) return node;
        if (grade &lt; node-&gt;grade) node-&gt;left = deleteHelper(node-&gt;left, grade);
        else if (grade &gt; node-&gt;grade) node-&gt;right = deleteHelper(node-&gt;right, grade);
        else {
            if (!node-&gt;left) { Student* t = node-&gt;right; delete node; return t; }
            else if (!node-&gt;right) { Student* t = node-&gt;left; delete node; return t; }
            Student* t = findMin(node-&gt;right);
            node-&gt;grade = t-&gt;grade; node-&gt;name = t-&gt;name;
            node-&gt;right = deleteHelper(node-&gt;right, t-&gt;grade);
        }
        return node;
    }

    void inorderHelper(Student* node) {
        if (!node) return;
        inorderHelper(node-&gt;left);
        std::cout &lt;&lt; node-&gt;name &lt;&lt; "(" &lt;&lt; node-&gt;grade &lt;&lt; ") -&gt; ";
        inorderHelper(node-&gt;right);
    }

public:
    GradeTree(): root(nullptr) {}
    void insert(int g, std::string n) { root = insertHelper(root, g, n); }
    void remove(int g) { root = deleteHelper(root, g); }
    void display() { inorderHelper(root); std::cout &lt;&lt; "END\n"; }
};

int main() {
    GradeTree gt; gt.insert(85, "Alice"); gt.insert(92, "Bob"); gt.insert(78, "Charlie");
    gt.display();
    gt.remove(78);
    gt.display();
    return 0;
}`,

  java: `import java.util.*;

class Product {
    int id; String name; double price;
    Product left, right;
    Product(int id, String n, double p){ this.id=id; name=n; price=p; }
}

public class ProductInventory {
    private Product root;

    public void addProduct(int id, String n, double p) { root = insert(root,id,n,p); }
    public void removeProduct(int id) { root = delete(root,id); }
    public void display() { inorder(root); System.out.println("END"); }

    private Product insert(Product node,int id,String n,double p){
        if(node==null) return new Product(id,n,p);
        if(id &lt; node.id) node.left=insert(node.left,id,n,p);
        else if(id &gt; node.id) node.right=insert(node.right,id,n,p);
        return node;
    }

    private Product delete(Product node,int id){
        if(node==null) return node;
        if(id &lt; node.id) node.left=delete(node.left,id);
        else if(id &gt; node.id) node.right=delete(node.right,id);
        else {
            if(node.left==null) return node.right;
            if(node.right==null) return node.left;
            Product s=findMin(node.right);
            node.id=s.id; node.name=s.name; node.price=s.price;
            node.right=delete(node.right,s.id);
        }
        return node;
    }

    private Product findMin(Product node){ while(node.left!=null) node=node.left; return node; }
    private void inorder(Product n){ if(n!=null){ inorder(n.left); System.out.println("-&gt; "+n.name); inorder(n.right);} }

    public static void main(String[] a){
        ProductInventory inv=new ProductInventory();
        inv.addProduct(500,"Laptop",999.99);
        inv.addProduct(250,"Mouse",25.5);
        inv.addProduct(750,"Monitor",299.99);
        inv.display();
        inv.removeProduct(250);
        inv.display();
    }
}`,

  python: `class BookNode:
    def __init__(self,isbn,title,author):
        self.isbn=isbn; self.title=title; self.author=author
        self.left=None; self.right=None
    def __str__(self): return f'"{self.title}" by {self.author} ({self.isbn})'

class Library:
    def __init__(self): self.root=None
    def add(self,isbn,title,author): self.root=self._insert(self.root,isbn,title,author)
    def remove(self,isbn): self.root=self._delete(self.root,isbn)
    def display(self): self._inorder(self.root); print("END")

    def _insert(self,node,isbn,t,a):
        if not node: return BookNode(isbn,t,a)
        if isbn&lt;node.isbn: node.left=self._insert(node.left,isbn,t,a)
        elif isbn&gt;node.isbn: node.right=self._insert(node.right,isbn,t,a)
        return node

    def _findMin(self,node):
        while node.left: node=node.left
        return node

    def _delete(self,node,isbn):
        if not node: return node
        if isbn&lt;node.isbn: node.left=self._delete(node.left,isbn)
        elif isbn&gt;node.isbn: node.right=self._delete(node.right,isbn)
        else:
            if not node.left: return node.right
            if not node.right: return node.left
            s=self._findMin(node.right)
            node.isbn,node.title,node.author=s.isbn,s.title,s.author
            node.right=self._delete(node.right,s.isbn)
        return node

    def _inorder(self,node):
        if node: self._inorder(node.left); print("-&gt;",node); self._inorder(node.right)

if __name__=="__main__":
    lib=Library()
    lib.add(500,"Data Structures","John")
    lib.add(250,"Python","Jane")
    lib.add(750,"AI","Bob")
    lib.display()
    lib.remove(250)
    lib.display()` ,

  javascript: `class TaskNode { constructor(p,d){this.priority=p;this.description=d;this.left=null;this.right=null;} }
class TaskMgr {
    constructor(){this.root=null;}
    add(p,d){this.root=this._ins(this.root,p,d);} remove(p){this.root=this._del(this.root,p);} display(){this._in(this.root);} 
    _ins(n,p,d){ if(!n) return new TaskNode(p,d); if(p&lt;n.priority) n.left=this._ins(n.left,p,d); else if(p&gt;n.priority) n.right=this._ins(n.right,p,d); return n; }
    _findMin(n){ while(n.left) n=n.left; return n; }
    _del(n,p){ if(!n) return null; if(p&lt;n.priority) n.left=this._del(n.left,p); else if(p&gt;n.priority) n.right=this._del(n.right,p); else { if(!n.left) return n.right; if(!n.right) return n.left; const s=this._findMin(n.right); n.priority=s.priority; n.description=s.description; n.right=this._del(n.right,s.priority);} return n; }
    _in(n){ if(n){this._in(n.left); console.log("-&gt; ["+n.priority+"] "+n.description); this._in(n.right);} }
}

const t=new TaskMgr();
t.add(85,"Proposal"); t.add(92,"Taxes"); t.add(78,"Groceries");
t.display(); t.remove(78); t.display();`
},



  



    interview_questions: [
      {
        question: "What is the time complexity of search, insert, and delete operations in a Binary Search Tree?",
        answer:
          "In a balanced BST, all three operations have O(log n) average time complexity. However, in the worst case (when the tree becomes skewed/unbalanced), they degrade to O(n). This is why self-balancing trees like AVL and Red-Black trees are preferred for guaranteed performance.",
        difficulty: "Easy",
      },
      {
        question: "How would you check if a binary tree is a valid Binary Search Tree?",
        answer:
          "Use in-order traversal and verify the sequence is sorted, or use a recursive approach with min/max bounds for each node. For each node, ensure all values in left subtree are less than node's value and all values in right subtree are greater, while maintaining valid bounds from ancestors.",
        difficulty: "Medium",
      },
      {
        question: "Explain the difference between complete, full, and perfect binary trees.",
        answer:
          "Complete: All levels filled except possibly the last, which fills left to right. Full: Every node has either 0 or 2 children (no node has exactly 1 child). Perfect: All internal nodes have 2 children and all leaves are at the same level. A perfect tree is both complete and full.",
        difficulty: "Medium",
      },
      {
        question: "How would you find the Lowest Common Ancestor (LCA) of two nodes in a BST?",
        answer:
          "Start from root. If both nodes are smaller than current node, go left. If both are larger, go right. When nodes are on different sides (one smaller, one larger) or one equals current node, that's the LCA. This leverages BST property for O(log n) solution.",
        difficulty: "Medium",
      },
      {
        question: "Design an algorithm to convert a sorted array into a height-balanced BST.",
        answer:
          "Use divide and conquer: pick middle element as root, recursively build left subtree from left half and right subtree from right half. This ensures balanced tree with O(log n) height. Time: O(n), Space: O(log n) for recursion stack.",
        difficulty: "Hard",
      },
      {
        question: "How would you serialize and deserialize a Binary Search Tree?",
        answer:
          "Serialize using preorder traversal (root, left, right) which preserves BST structure. Store as comma-separated string with null markers. Deserialize by recursively building tree: first element is root, partition remaining elements based on BST property, recurse on sublists.",
        difficulty: "Hard",
      },
    ],

    project_ideas: [
     {
      "title": "Expression Parser & Evaluator",
      "description": "Build a calculator that parses mathematical expressions into binary expression trees and evaluates them. Support operators like +, -, *, /, and parentheses.",
      "difficulty": "Beginner",
      "technologies": ["Python"]
    },
    {
      "title": "File System Directory Tree",
      "description": "Create a hierarchical file system representation using binary trees. Support operations like create directory, delete files, search by name/size, and display tree structure.",
      "difficulty": "Intermediate",
      "technologies": ["Java", "C++"]
    },
    {
      "title": "Auto-Complete Search Engine",
      "description": "Implement a search suggestion system using binary search trees. Store dictionary words and provide real-time suggestions as user types, with ranking by frequency.",
      "difficulty": "Intermediate",
      "technologies": ["JavaScript", "Python"]
    },
    {
      "title": "Database Index Simulator",
      "description": "Simulate database indexing using B+ trees (advanced binary trees). Support range queries, bulk insertions, and demonstrate how databases optimize query performance.",
      "difficulty": "Advanced",
      "technologies": ["C++", "Java"]
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

export default function EnhancedBinaryTreePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [treeNodes, setTreeNodes] = useState([50, 30, 70, 20, 40, 60, 80]);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [animatingNode, setAnimatingNode] = useState(-1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [operation, setOperation] = useState("");
  const [traversalOrder, setTraversalOrder] = useState([]);
  const [currentTraversal, setCurrentTraversal] = useState("");
  
  // Search state
  const [searchPath, setSearchPath] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  const { topic, category, sections } = binaryTreeData;
  const languages = ["c", "cpp", "java", "python", "javascript"];

  // Animation effect
  useEffect(() => {
    if (animatingNode >= 0) {
      const timer = setTimeout(() => setAnimatingNode(-1), 1000);
      return () => clearTimeout(timer);
    }
  }, [animatingNode]);

  // Tree operations
  const insertNode = () => {
    if (inputValue !== "") {
      const newValue = parseInt(inputValue, 10);
      if (!treeNodes.includes(newValue)) {
        setTreeNodes([...treeNodes, newValue].sort((a, b) => a - b));
        setAnimatingNode(newValue);
        setOperation("INSERT");
        setInputValue("");
        
        setTimeout(() => setOperation(""), 1000);
      } else {
        setOperation("DUPLICATE");
        setTimeout(() => setOperation(""), 1000);
      }
    }
  };

  const deleteNode = () => {
    if (inputValue !== "") {
      const deleteValue = parseInt(inputValue, 10);
      if (treeNodes.includes(deleteValue)) {
        setAnimatingNode(deleteValue);
        setOperation("DELETE");
        
        setTimeout(() => {
          setTreeNodes(treeNodes.filter(node => node !== deleteValue));
          setOperation("");
        }, 1000);
      } else {
        setOperation("NOT_FOUND");
        setTimeout(() => setOperation(""), 1000);
      }
      setInputValue("");
    }
  };

  const searchNode = () => {
    if (searchValue !== "") {
      const searchVal = parseInt(searchValue, 10);
      const path = [];
      let current = treeNodes.slice().sort((a, b) => a - b);
      let found = false;
      
      // Simulate BST search path
      if (current.length > 0) {
        let rootIndex = Math.floor(current.length / 2);
        let root = current[rootIndex];
        path.push(root);
        
        if (root === searchVal) {
          found = true;
        } else if (searchVal < root) {
          // Search left subtree
          const leftSubtree = current.slice(0, rootIndex);
          for (let val of leftSubtree) {
            path.push(val);
            if (val === searchVal) {
              found = true;
              break;
            }
          }
        } else {
          // Search right subtree
          const rightSubtree = current.slice(rootIndex + 1);
          for (let val of rightSubtree) {
            path.push(val);
            if (val === searchVal) {
              found = true;
              break;
            }
          }
        }
      }
      
      setSearchPath(path);
      setSearchResult(found ? searchVal : null);
      setOperation("SEARCH");
      
      setTimeout(() => {
        setOperation("");
        setSearchPath([]);
      }, 3000);
    }
  };

  const performTraversal = (type) => {
    const sortedNodes = [...treeNodes].sort((a, b) => a - b);
    let order = [];
    
    switch (type) {
      case 'inorder':
        order = sortedNodes; // In BST, inorder gives sorted sequence
        break;
      case 'preorder':
        // Root, Left, Right
        if (sortedNodes.length > 0) {
          const rootIndex = Math.floor(sortedNodes.length / 2);
          const root = sortedNodes[rootIndex];
          const left = sortedNodes.slice(0, rootIndex);
          const right = sortedNodes.slice(rootIndex + 1);
          order = [root, ...left, ...right];
        }
        break;
      case 'postorder':
        // Left, Right, Root
        if (sortedNodes.length > 0) {
          const rootIndex = Math.floor(sortedNodes.length / 2);
          const root = sortedNodes[rootIndex];
          const left = sortedNodes.slice(0, rootIndex);
          const right = sortedNodes.slice(rootIndex + 1);
          order = [...left, ...right, root];
        }
        break;
    }
    
    setTraversalOrder(order);
    setCurrentTraversal(type);
    setOperation(`TRAVERSAL_${type.toUpperCase()}`);
    
    setTimeout(() => {
      setOperation("");
      setTraversalOrder([]);
      setCurrentTraversal("");
    }, 4000);
  };

  // Tree visualization component


// Keep your surrounding state/handlers the same: treeNodes, inputValue, setInputValue,
// insertNode, deleteNode, searchValue, setSearchValue, searchNode, performTraversal,
// animatingNode, operation, searchResult, searchPath, traversalOrder, currentTraversal.

const TreeVisualization = () => {
  const sortedNodes = [...treeNodes].sort((a, b) => a - b);

  // Refs to measure node positions + the container
  const containerRef = React.useRef(null);
  const nodeRefs = React.useRef({});
  const [lines, setLines] = React.useState([]);

  // Build the visual tree (same look/feel), but attach refs to each node
  const treeStructure = (nodes) => {
    if (nodes.length === 0) return null;
    const mid = Math.floor(nodes.length / 2);
    const root = nodes[mid];
    const left = nodes.slice(0, mid);
    const right = nodes.slice(mid + 1);

    return (
      <div className="flex flex-col items-center w-full">
        <div
          ref={(el) => (nodeRefs.current[root] = el)}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-500 transform ${
            animatingNode === root
              ? operation === "INSERT"
                ? "bg-green-400 border-green-500 animate-pulse scale-125"
                : operation === "DELETE"
                ? "bg-red-400 border-red-500 animate-pulse scale-125"
                : "bg-purple-200 dark:bg-purple-700 border-purple-400"
              : searchPath.includes(root)
              ? "bg-yellow-400 border-yellow-500 animate-pulse scale-110"
              : traversalOrder.includes(root)
              ? "bg-blue-400 border-blue-500 animate-pulse scale-110"
              : "bg-purple-200 dark:bg-purple-700 border-purple-400 dark:border-purple-600"
          } text-purple-800 dark:text-purple-200`}
        >
          {root}
        </div>

        {(left.length > 0 || right.length > 0) && (
          <div className="flex justify-between w-full mt-4 gap-2">
            <div className="flex-1 text-center pt-4">{treeStructure(left)}</div>
            <div className="flex-1 text-center pt-4">{treeStructure(right)}</div>
          </div>
        )}
      </div>
    );
  };

  // Collect edges (parent -> child) that match how treeStructure splits the array
  const edges = React.useMemo(() => {
    const out = [];
    const walk = (nodes) => {
      if (!nodes || nodes.length === 0) return;
      const mid = Math.floor(nodes.length / 2);
      const root = nodes[mid];
      const left = nodes.slice(0, mid);
      const right = nodes.slice(mid + 1);
      if (left.length) {
        out.push([root, left[Math.floor(left.length / 2)]]);
        walk(left);
      }
      if (right.length) {
        out.push([root, right[Math.floor(right.length / 2)]]);
        walk(right);
      }
    };
    walk(sortedNodes);
    return out;
  }, [sortedNodes]);

  // Recalculate line positions relative to the container
  React.useEffect(() => {
    const recalc = () => {
      const container = containerRef.current;
      if (!container) return;
      const cRect = container.getBoundingClientRect();

      const newLines = edges
        .map(([p, c]) => {
          const pEl = nodeRefs.current[p];
          const cEl = nodeRefs.current[c];
          if (!pEl || !cEl) return null;
          const pRect = pEl.getBoundingClientRect();
          const cRect2 = cEl.getBoundingClientRect();
          return {
            x1: pRect.left + pRect.width / 2 - cRect.left,
            y1: pRect.top + pRect.height / 2 - cRect.top,
            x2: cRect2.left + cRect2.width / 2 - cRect.left,
            y2: cRect2.top + cRect2.height / 2 - cRect.top,
          };
        })
        .filter(Boolean);
      setLines(newLines);
    };

    // Measure after layout/animations settle
    const id = requestAnimationFrame(recalc);
    window.addEventListener("resize", recalc);
    window.addEventListener("scroll", recalc, true);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", recalc);
      window.removeEventListener("scroll", recalc, true);
    };
  }, [edges, treeNodes, animatingNode, operation]);

  return (
    <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center text-purple-800 dark:text-purple-200">
        🌳 Binary Search Tree Interactive Demo
      </h3>

      {/* Tree Visual */}
      <div className="flex justify-center mb-6 overflow-x-auto">
        <div
          ref={containerRef}
          className="relative w-full max-w-4xl h-auto p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 overflow-hidden min-h-[200px]"
        >
          {/* SVG overlay for connectors */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {lines.map((l, i) => (
              <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="gray" strokeWidth="2" />
            ))}
          </svg>

          {sortedNodes.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Empty Tree</span>
            </div>
          ) : (
            treeStructure(sortedNodes)
          )}
        </div>
      </div>

      {/* Operation Status */}
      {operation && (
        <div className="text-center mb-4">
          <span
            className={`px-4 py-2 rounded-lg font-bold text-white shadow-md ${
              operation?.includes("INSERT")
                ? "bg-green-500"
                : operation?.includes("DELETE")
                ? "bg-red-500"
                : operation?.includes("SEARCH")
                ? "bg-blue-500"
                : operation?.includes("TRAVERSAL")
                ? "bg-indigo-500"
                : operation === "DUPLICATE"
                ? "bg-yellow-500"
                : operation === "NOT_FOUND"
                ? "bg-red-500"
                : "bg-purple-500"
            }`}
          >
            {operation === "DUPLICATE"
              ? "Value Already Exists!"
              : operation === "NOT_FOUND"
              ? "Value Not Found!"
              : operation?.includes("TRAVERSAL")
              ? `${currentTraversal.toUpperCase()} Traversal`
              : `${operation} Operation`}
          </span>
        </div>
      )}

      {/* Search Result */}
      {operation === "SEARCH" && (
        <div className="text-center mb-4">
          <div
            className={`p-3 rounded-lg ${
              searchResult
                ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300"
                : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300"
            }`}
          >
            {searchResult ? `✅ Found ${searchResult}!` : `❌ Value ${searchValue} not found`}
            {searchPath.length > 0 && (
              <div className="text-sm mt-1">Search path: {searchPath.join(" → ")}</div>
            )}
          </div>
        </div>
      )}

      {/* Traversal Result (FIXED: safe optional chaining) */}
      {operation?.includes("TRAVERSAL") && traversalOrder.length > 0 && (
        <div className="text-center mb-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-lg">
            <div className="font-bold">
              {currentTraversal.charAt(0).toUpperCase() + currentTraversal.slice(1)} Traversal:
            </div>
            <div className="text-sm mt-1">{traversalOrder.join(" → ")}</div>
          </div>
        </div>
      )}

      {/* Tree Info */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <span className="text-sm text-gray-500">Nodes</span>
            <div className="text-2xl font-bold text-purple-600">{treeNodes.length}</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Root</span>
            <div className="text-2xl font-bold text-purple-600">
              {treeNodes.length > 0 ? sortedNodes[Math.floor(sortedNodes.length / 2)] : "None"}
            </div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Height</span>
            <div className="text-2xl font-bold text-purple-600">
              {treeNodes.length > 0 ? Math.ceil(Math.log2(treeNodes.length + 1)) : 0}
            </div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Balance</span>
            <div className="text-lg font-bold text-purple-600">
              {treeNodes.length > 0 ? "Balanced" : "Empty"}
            </div>
          </div>
        </div>
      </div>

      {/* Tree Operations */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-4">
        <h4 className="text-lg font-bold text-center">Binary Tree Operations</h4>

        {/* Insert & Delete */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value"
            className="px-4 py-2 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-purple-500 transition-colors duration-200 w-full sm:w-auto"
          />
          <div className="flex gap-2">
            <button
              onClick={insertNode}
              disabled={!inputValue}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
            >
              🌱 Insert
            </button>
            <button
              onClick={deleteNode}
              disabled={!inputValue || treeNodes.length === 0}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
            >
              🗑️ Delete
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="number"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search value"
            className="px-4 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200 w-full sm:w-auto"
          />
          <button
            onClick={searchNode}
            disabled={!searchValue || treeNodes.length === 0}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
          >
            🔍 Search
          </button>
        </div>

        {/* Traversal Operations */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Traversals:</span>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => performTraversal("inorder")}
              disabled={treeNodes.length === 0}
              className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
            >
              📊 Inorder
            </button>
            <button
              onClick={() => performTraversal("preorder")}
              disabled={treeNodes.length === 0}
              className="px-3 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
            >
              🌿 Preorder
            </button>
            <button
              onClick={() => performTraversal("postorder")}
              disabled={treeNodes.length === 0}
              className="px-3 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
            >
              🍃 Postorder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


// export default TreeVisualization;



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
              <span className="px-3 py-1 bg-white/20 rounded-full">🌳 Hierarchical</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🔍 O(log n) Search</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">📊 Self-Organizing</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Student Hook */}
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🎯 Why Binary Trees Matter
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-purple-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* Binary Tree Fundamentals */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🌳 Binary Tree Fundamentals
          </h2>
          
          {/* Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-purple-500">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">💡 Understanding Binary Trees</h3>
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
          <TreeVisualization />

          {/* Key Operations */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">🔧 Key Binary Tree Operations</h3>
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
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">🏢 Binary Trees in Industry</h3>
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

        {/* Implementation Types */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
            🏗️ Implementation Types
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
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            💻 Implementation Examples
          </h2>
          
          {/* Language Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === lang
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
                  binary_tree.{selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage === 'python' ? 'py' : selectedLanguage === 'javascript' ? 'js' : selectedLanguage === 'java' ? 'java' : 'c'}
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
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        qa.difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
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
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' :
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
            Binary trees are fundamental to computer science and form the backbone of many advanced data structures.
            Practice implementing different tree types and explore their applications in real-world scenarios.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full">📚 Study Tree Algorithms</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">💡 Practice Tree Problems</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">🚀 Build Tree Applications</span>
          </div>
        </footer>
      </main>
    </div>
  );
}