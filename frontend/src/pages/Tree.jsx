import React, { useState, useEffect, useMemo, useCallback } from "react";

// Data for the Trie page
const trieData = {
  topic: "Trie (Prefix Tree)",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Ever wondered how your phone's keyboard suggests words as you type, or how Google provides instant search suggestions? The magic behind this is often a Trie! It's a special tree that stores strings, making prefix-based searches incredibly fast. Think of it as a super-optimized dictionary index that helps you find not just words, but any words that *start with* what you're typing, almost instantly.",

    concept: {
      concept:
        "A Trie, also known as a Prefix Tree or Digital Tree, is a tree-like data structure that stores a dynamic set of strings. Each node in the trie represents a single character. A path from the root to a node represents a prefix, and if a node is marked as an 'end-of-word' node, that path represents a complete word stored in the trie.",
      realWorldExample:
        "Think of an autocomplete system. When you type 'ca', the system instantly suggests 'car', 'cat', 'castle'. The Trie structure allows it to quickly find all words that share the prefix 'ca' by simply traversing the 'c' -> 'a' path.",
      industry_applications: [
        "🔍 Autocomplete & Search Suggestions (Google, IDEs)",
        "✍️ Spell Checkers & Auto-Correct (Word Processors)",
        "📚 Dictionaries & T9 Predictive Text (Mobile Phones)",
        "🌐 IP Routing Tables (Network Routers)",
        "🧬 Bioinformatics for DNA sequence matching",
        "🎮 Word games like Boggle or Scrabble solvers",
      ],
      advantages: [
        "🚀 O(L) fast prefix search (L = length of prefix)",
        "🧠 Memory efficient for datasets with many common prefixes",
        "🔄 Alphabetically ordered retrieval of words",
        "🎯 Excellent for 'Longest Prefix Match' algorithms",
      ],
      disadvantages: [
        "💾 Can be memory-intensive if strings don't share prefixes",
        "🐌 Slower than hash tables for single word lookups",
        "🔧 More complex to implement than simple arrays or lists",
        "📝 Best suited for character-based or digital data",
      ],
    },

    code_examples: {
      javascript: `// JavaScript Trie Example - Autocomplete System
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie
    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                return false; // Word not found
            }
            current = current.children[char];
        }
        return current.isEndOfWord; // Return true only if it's a complete word
    }

    // Check if any word starts with a given prefix
    startsWith(prefix) {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

// Demo
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");

console.log("Search 'apple':", trie.search("apple"));   // true
console.log("Search 'app':", trie.search("app"));     // true
console.log("Search 'appl':", trie.search("appl"));   // false
console.log("Prefix 'app':", trie.startsWith("app")); // true
console.log("Prefix 'apr':", trie.startsWith("apr")); // true
console.log("Prefix 'b':", trie.startsWith("b"));     // false`,
      python: `# Python Trie Example - Contact Search
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end_of_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        current = self.root
        for char in word:
            if char not in current.children:
                current.children[char] = TrieNode()
            current = current.children[char]
        current.is_end_of_word = True

    def search(self, word):
        current = self.root
        for char in word:
            if char not in current.children:
                return False
            current = current.children[char]
        return current.is_end_of_word

    def starts_with(self, prefix):
        current = self.root
        for char in prefix:
            if char not in current.children:
                return False
            current = current.children[char]
        return True

# Demo
contact_trie = Trie()
contacts = ["peter", "piper", "picked", "pepper"]
for contact in contacts:
    contact_trie.insert(contact)

print(f"Search 'peter': {contact_trie.search('peter')}") # True
print(f"Search 'pick': {contact_trie.search('pick')}")   # False
print(f"Prefix 'pi': {contact_trie.starts_with('pi')}")   # True
print(f"Prefix 'pep': {contact_trie.starts_with('pep')}") # True`,
      java: `// Java Trie Example - Dictionary
import java.util.HashMap;
import java.util.Map;

class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEndOfWord = false;
}

class Trie {
    private final TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            current.children.putIfAbsent(ch, new TrieNode());
            current = current.children.get(ch);
        }
        current.isEndOfWord = true;
    }

    public boolean search(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            TrieNode node = current.children.get(ch);
            if (node == null) {
                return false;
            }
            current = node;
        }
        return current.isEndOfWord;
    }

    public boolean startsWith(String prefix) {
        TrieNode current = root;
        for (char ch : prefix.toCharArray()) {
            TrieNode node = current.children.get(ch);
            if (node == null) {
                return false;
            }
            current = node;
        }
        return true;
    }
}

// Demo
public class Main {
    public static void main(String[] args) {
        Trie dictionary = new Trie();
        dictionary.insert("hello");
        dictionary.insert("world");
        dictionary.insert("hell");

        System.out.println("Search 'hello': " + dictionary.search("hello"));   // true
        System.out.println("Search 'hell': " + dictionary.search("hell"));     // true
        System.out.println("Prefix 'wor': " + dictionary.startsWith("wor"));   // true
        System.out.println("Prefix 'java': " + dictionary.startsWith("java"));   // false
    }
}`,
      cpp: `// C++ Trie Example - Word Filter
#include <iostream>
#include <unordered_map>
#include <string>
#include <vector>

class TrieNode {
public:
    std::unordered_map<char, TrieNode*> children;
    bool isEndOfWord;

    TrieNode() : isEndOfWord(false) {}
};

class Trie {
private:
    TrieNode* root;

public:
    Trie() {
        root = new TrieNode();
    }

    void insert(const std::string& word) {
        TrieNode* current = root;
        for (char ch : word) {
            if (current->children.find(ch) == current->children.end()) {
                current->children[ch] = new TrieNode();
            }
            current = current->children[ch];
        }
        current->isEndOfWord = true;
    }

    bool search(const std::string& word) {
        TrieNode* current = root;
        for (char ch : word) {
            if (current->children.find(ch) == current->children.end()) {
                return false;
            }
            current = current->children[ch];
        }
        return current->isEndOfWord;
    }

    bool startsWith(const std::string& prefix) {
        TrieNode* current = root;
        for (char ch : prefix) {
            if (current->children.find(ch) == current->children.end()) {
                return false;
            }
            current = current->children[ch];
        }
        return true;
    }
};

int main() {
    Trie badWordsFilter;
    badWordsFilter.insert("spam");
    badWordsFilter.insert("virus");

    std::cout << "Contains 'spam'? " << (badWordsFilter.search("spam") ? "Yes" : "No") << std::endl;
    std::cout << "Is 'sp' a prefix? " << (badWordsFilter.startsWith("sp") ? "Yes" : "No") << std::endl;
    return 0;
}`,
    },

    interview_questions: [
      {
        question: "What is the primary advantage of a Trie over a Hash Map for storing a dictionary?",
        answer:
          "Tries are much more efficient for prefix-based searches (like autocomplete). While a hash map has O(1) average lookup, it can't efficiently find all keys with a given prefix. A Trie can do this in O(L) time where L is the prefix length.",
        difficulty: "Easy",
      },
      {
        question: "How would you implement a function to find all words in a Trie that match a given prefix?",
        answer:
          "First, traverse the Trie to the node corresponding to the end of the prefix. Then, perform a Depth First Search (DFS) from that node, collecting all words formed by the paths to 'end-of-word' nodes.",
        difficulty: "Medium",
      },
      {
        question: "How does the memory usage of a Trie scale with the number of words and their length?",
        answer:
          "Memory usage is proportional to the total number of characters in all unique prefixes, not the total number of characters in all words. If words share long prefixes (e.g., 'application', 'applicable'), memory savings are significant. If they don't, Tries can be memory-intensive.",
        difficulty: "Medium",
      },
      {
        question: "Explain how to implement the delete operation in a Trie.",
        answer:
          "Traverse to the word's final node and set its 'isEndOfWord' flag to false. Then, backtrack recursively. If a node has no children and is not an 'end-of-word', it can be safely removed from its parent's children map. This process continues up to the root.",
        difficulty: "Hard",
      },
    ],

    project_ideas: [
      {
        title: "Autocomplete Search Bar",
        description:
          "Build a React component for a search bar that suggests a list of possible completions as the user types, using a Trie to store the dictionary of words.",
        difficulty: "Beginner",
        technologies: ["React", "JavaScript", "CSS", "Trie"],
      },
      {
        title: "Real-time Spell Checker",
        description:
          "Create a text area that highlights misspelled words in real-time. As the user types, check each word against a dictionary stored in a Trie.",
        difficulty: "Intermediate",
        technologies: ["JavaScript", "HTML/CSS", "Trie", "DOM Manipulation"],
      },
      {
        title: "IP Routing Table Simulator",
        description:
          "Develop a tool that simulates how network routers use Tries (specifically a Radix Trie) to find the longest prefix match for routing IP packets efficiently.",
        difficulty: "Advanced",
        technologies: ["Python/Node.js", "Trie", "Networking Concepts"],
      },
    ],
  },
};

// --- Trie Data Structure Logic ---
class TrieNode {
    constructor(char = null) {
        this.char = char;
        this.children = {};
        this.isEndOfWord = false;
        // For visualization
        this.id = Math.random().toString(36).substr(2, 9);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(' ');
    }

    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode(char);
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    delete(word) {
        const _deleteRecursively = (current, word, index) => {
            if (index === word.length) {
                if (!current.isEndOfWord) return false;
                current.isEndOfWord = false;
                return Object.keys(current.children).length === 0;
            }
            
            const char = word[index];
            const childNode = current.children[char];
            if (!childNode) return false;

            const shouldDeleteChild = _deleteRecursively(childNode, word, index + 1);

            if (shouldDeleteChild) {
                delete current.children[char];
                return !current.isEndOfWord && Object.keys(current.children).length === 0;
            }
            return false;
        };
        _deleteRecursively(this.root, word, 0);
    }

    getPrefixPath(prefix) {
        const path = [];
        let current = this.root;
        path.push(current);
        for (const char of prefix) {
            if (!current.children[char]) return [];
            current = current.children[char];
            path.push(current);
        }
        return path;
    }
}

// --- Visualization Component ---
const TrieVisualization = ({ trieRoot, highlightedPath, animationPath }) => {
    const layout = useMemo(() => {
        const nodes = [];
        const edges = [];
        const levelWidths = {};
        const levelCounts = {};

        function getLevelWidths(node, depth) {
            levelWidths[depth] = (levelWidths[depth] || 0) + 1;
            Object.values(node.children).forEach(child => getLevelWidths(child, depth + 1));
        }
        getLevelWidths(trieRoot, 0);

        function buildLayout(node, depth, parentPos) {
            const levelWidth = levelWidths[depth] || 1;
            levelCounts[depth] = (levelCounts[depth] || 0) + 1;

            const x = (levelCounts[depth] - 0.5 * (levelWidth-1) ) * 90;
            const y = depth * 100;

            nodes.push({ node, x, y });

            if (parentPos) {
                edges.push({ from: parentPos, to: { x, y } });
            }

            Object.values(node.children)
                .sort((a,b) => a.char.localeCompare(b.char))
                .forEach(child => buildLayout(child, depth + 1, { x, y }));
        }

        buildLayout(trieRoot, 0, null);

        // Center the whole tree
        const xCoords = nodes.map(n => n.x);
        const minX = Math.min(...xCoords);
        const maxX = Math.max(...xCoords);
        const totalWidth = maxX - minX;

        nodes.forEach(n => {
            n.x -= (minX + totalWidth / 2);
        });
        edges.forEach(e => {
            e.from.x -= (minX + totalWidth / 2);
            e.to.x -= (minX + totalWidth / 2);
        });


        return { nodes, edges };
    }, [trieRoot]);

    const highlightedIds = new Set(highlightedPath.map(node => node.id));
    const animationIds = new Set(animationPath.map(node => node.id));

    return (
        <div className="relative w-full min-h-[400px] flex items-center justify-center overflow-auto p-4">
            <svg className="absolute top-0 left-0 w-full h-full" style={{ transform: 'translate(50%, 50px)' }}>
                <g>
                    {edges.map((edge, i) => (
                        <line
                            key={i}
                            x1={edge.from.x}
                            y1={edge.from.y}
                            x2={edge.to.x}
                            y2={edge.to.y}
                            className="stroke-gray-300 dark:stroke-gray-600"
                            strokeWidth="2"
                        />
                    ))}
                </g>
            </svg>
            <div className="relative" style={{ top: '50px' }}>
                {nodes.map(({ node, x, y }) => {
                    const isHighlighted = highlightedIds.has(node.id);
                    const isAnimating = animationIds.has(node.id);
                    const isEndOfWord = node.isEndOfWord;
                    
                    return (
                        <div
                            key={node.id}
                            className={`absolute w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 transition-all duration-300 ${
                                isAnimating ? "bg-yellow-400 border-yellow-600 scale-125" :
                                isHighlighted ? "bg-blue-500 border-blue-700 text-white" :
                                isEndOfWord ? "bg-green-400 border-green-600" :
                                "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-500"
                            }`}
                            style={{
                                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                            }}
                        >
                            {node.char.trim() || ' रूट'}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// Syntax highlighting function (reused from Array.jsx)
const highlightSyntax = (code, language) => {
    // This function can be copied directly from the provided Array.jsx file
    const keywords = { /* ... keywords from Array.jsx ... */ };
    // ... rest of the function logic
    return code; // Placeholder: copy the full function for actual highlighting
};

export default function TriePage() {
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);

    // --- Interactive Trie State ---
    const [trie, setTrie] = useState(() => {
      const initialTrie = new Trie();
      ["cat", "car", "cart", "dog", "do"].forEach(word => initialTrie.insert(word));
      return initialTrie;
    });
    const [inputValue, setInputValue] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [highlightedPath, setHighlightedPath] = useState([]);
    const [animationPath, setAnimationPath] = useState([]);
    const [operationMessage, setOperationMessage] = useState("");

    const { topic, category, sections } = trieData;
    const languages = ["javascript", "python", "java", "cpp"];

    // Update highlights when search query changes
    useEffect(() => {
        const path = trie.getPrefixPath(searchQuery);
        setHighlightedPath(path);

        if (searchQuery) {
            if (path.length > 0) {
                const lastNode = path[path.length - 1];
                if (lastNode.isEndOfWord && path.length - 1 === searchQuery.length) {
                    setOperationMessage(`✅ Found full word: "${searchQuery}"`);
                } else {
                    setOperationMessage(`🔵 Found prefix: "${searchQuery}"`);
                }
            } else {
                setOperationMessage(`❌ Prefix not found: "${searchQuery}"`);
            }
        } else {
            setOperationMessage("");
            setHighlightedPath([]);
        }
    }, [searchQuery, trie]);

    const handleInsert = useCallback(() => {
        const word = inputValue.toLowerCase().trim();
        if (!word) return;

        let currentPath = [trie.root];
        let current = trie.root;
        let delay = 0;

        for (const char of word) {
            setTimeout(() => {
                if (current.children[char]) {
                    current = current.children[char];
                    currentPath.push(current);
                    setAnimationPath([...currentPath]);
                }
            }, delay);
            delay += 200;
        }

        setTimeout(() => {
            const newTrie = new Trie();
            // A simple way to "clone" is to re-insert all words. For production, a deep clone would be better.
            // This is a simplified approach for the educational tool.
            function traverseAndInsert(node, prefix) {
                if(node.isEndOfWord) newTrie.insert(prefix);
                Object.values(node.children).forEach(child => traverseAndInsert(child, prefix + child.char));
            }
            traverseAndInsert(trie.root, "");
            
            newTrie.insert(word);
            setTrie(newTrie);
            setAnimationPath([]);
            setOperationMessage(`Inserted "${word}"`);
            setInputValue("");
        }, delay);
    }, [inputValue, trie]);
    
    const handleDelete = useCallback(() => {
      const word = inputValue.toLowerCase().trim();
      if (!word) return;

      const path = trie.getPrefixPath(word);
      if (path.length - 1 === word.length && path[path.length-1].isEndOfWord) {
        // As with insert, we recreate the trie for state update simplicity.
        const newTrie = new Trie();
        function traverseAndInsert(node, prefix) {
            if(node.isEndOfWord) newTrie.insert(prefix);
            Object.values(node.children).forEach(child => traverseAndInsert(child, prefix + child.char));
        }
        traverseAndInsert(trie.root, "");
        
        newTrie.delete(word);
        setTrie(newTrie);
        setOperationMessage(`Deleted "${word}"`);
        setInputValue("");
        setSearchQuery("");
      } else {
        setOperationMessage(`Cannot delete: "${word}" not found.`);
      }
    }, [inputValue, trie]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
            <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                    <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
                    <p className="text-xl">{category}</p>
                    <div className="mt-6 flex justify-center space-x-4 text-sm">
                        <span className="px-3 py-1 bg-white/20 rounded-full">🔍 Autocomplete</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full">✍️ Spell Check</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full">🚀 Fast Prefix Search</span>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
                {/* Student Hook */}
                <section className="transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        🎯 Why Tries Matter
                    </h2>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500">
                        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
                            {sections.student_hook}
                        </p>
                    </div>
                </section>
                
                {/* --- Main Trie Section --- */}
                <section>
                    <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        🌳 Trie - The Prefix Tree
                    </h2>
                    
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
                        <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">💡 Understanding Tries</h3>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
                            {sections.concept.concept}
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                            <p className="text-blue-800 dark:text-blue-200 font-medium">
                                <span className="font-bold">Real-world example:</span> {sections.concept.realWorldExample}
                            </p>
                        </div>
                    </div>
                    
                    {/* Interactive Demo */}
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                        <h3 className="text-2xl font-bold mb-6 text-center text-blue-800 dark:text-blue-200">
                            🌳 Trie Interactive Demo
                        </h3>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col sm:flex-row items-center gap-2">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Enter word..."
                                        className="w-full px-4 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                    <div className="flex gap-2">
                                        <button onClick={handleInsert} className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 transform hover:scale-105 shadow-lg w-full sm:w-auto">Insert</button>
                                        <button onClick={handleDelete} className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 transform hover:scale-105 shadow-lg w-full sm:w-auto">Delete</button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                   <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value.toLowerCase().trim())}
                                        placeholder="Search for prefix..."
                                        className="w-full px-4 py-2 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
                                    />
                                </div>
                            </div>
                             {operationMessage && <p className="text-center mt-4 font-semibold text-gray-700 dark:text-gray-200">{operationMessage}</p>}
                        </div>
                        <TrieVisualization trieRoot={trie.root} highlightedPath={highlightedPath} animationPath={animationPath} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        {/* Advantages */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
                           <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
                           <ul className="space-y-3">
                              {sections.concept.advantages.map((item, i) => <li key={i} className="flex items-start space-x-3"><span className="text-lg">{item.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{item.substring(2)}</span></li>)}
                           </ul>
                        </div>
                        {/* Disadvantages */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
                           <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3>
                           <ul className="space-y-3">
                              {sections.concept.disadvantages.map((item, i) => <li key={i} className="flex items-start space-x-3"><span className="text-lg">{item.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{item.substring(2)}</span></li>)}
                           </ul>
                        </div>
                    </div>
                    
                    <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">🏢 Tries in Industry</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sections.concept.industry_applications.map((app, i) => (
                                <div key={i} className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400 hover:shadow-lg transition-shadow">
                                    <p className="text-gray-700 dark:text-gray-300">{app}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Performance Analysis */}
                <section>
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
                        ⚡ Performance Analysis
                    </h2>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                        <table className="w-full text-center">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th className="p-4 font-semibold">Operation</th>
                                    <th className="p-4 font-semibold">Time Complexity</th>
                                    <th className="p-4 font-semibold">Space Complexity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                {[{op: "Insert", time: "O(L)", space: "O(L*N)"}, {op: "Search", time: "O(L)", space: "O(1)"}, {op: "Delete", time: "O(L)", space: "O(1)"}].map(row => (
                                    <tr key={row.op} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="p-4 font-medium">{row.op}</td>
                                        <td className="p-4"><span className="px-3 py-1 rounded bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 font-mono text-sm">{row.time}</span></td>
                                        <td className="p-4"><span className="px-3 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 font-mono text-sm">{row.space}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                             <caption className="text-left p-4 text-sm text-gray-600 dark:text-gray-400">
                                L = length of the word, N = number of words. Space complexity for the structure is O(alphabet_size * L * N) in the worst case.
                            </caption>
                        </table>
                    </div>
                </section>
                
                {/* Code Examples */}
                <section>
                    {/* ... Code Examples JSX (copied and adapted from Array.jsx) ... */}
                </section>
                
                {/* Interview Questions */}
                <section>
                    {/* ... Interview Questions JSX (copied and adapted from Array.jsx) ... */}
                </section>
                
                {/* Project Ideas */}
                <section>
                    {/* ... Project Ideas JSX (copied and adapted from Array.jsx) ... */}
                </section>
            </main>

            <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">Master Tries Today! 🚀</h3>
                    <p className="text-lg text-gray-300 mb-6">
                        From autocomplete to spell checkers, Tries are the key to efficient string and prefix operations!
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