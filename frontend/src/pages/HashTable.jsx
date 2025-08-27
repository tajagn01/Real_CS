import React, { useState, useEffect } from "react";

const hashTableData = {
  topic: "Hash Tables",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Imagine you're at a huge event and need to check in your coat. You're given a numbered ticket. Later, to get your coat back, you don't search through every single coat; you just hand over your ticket, and the attendant instantly finds your coat's location. Hash Tables work just like this! They use a special 'hash function' (the ticket system) to instantly find the exact location of your data (your coat) using its 'key' (your ticket number).",

    core_concepts: {
      concept:
        "A Hash Table, or Hash Map, is a data structure that stores data in an associative manner. It maps keys to values using a special function called a hash function. The hash function takes a key and computes an index into an array of buckets or slots, from which the desired value can be found. This allows for incredibly fast retrieval, insertion, and deletion of data.",
      realWorldExample:
        "Think of a phone's contact list. You search for a name (the key), and the phone instantly retrieves the corresponding phone number and details (the value).",
      key_components: [
        "🔑 **Key:** A unique identifier for a piece of data. It's used by the hash function to determine the storage location.",
        "🧮 **Hash Function:** A function that takes a key and computes an index (a hash code) in the underlying array.",
        "🧺 **Buckets (Slots):** An array where the data (values) is stored. The hash function maps keys to a specific bucket index.",
        "💥 **Collisions:** When two different keys map to the same index. This is a common occurrence that must be handled gracefully.",
      ],
    },

    collision_handling: {
      concept:
        "A collision occurs when a hash function generates the same index for two or more different keys. Since two items can't be stored in the same slot, we need strategies to resolve this. Efficient collision handling is crucial for maintaining the performance of a hash table.",
      strategies: [
        {
          name: "🔗 Separate Chaining (Open Hashing)",
          description:
            "Each bucket in the hash table points to a linked list (or another data structure) of key-value pairs that have the same hash index. When a collision occurs, the new item is simply added to the end of the list at that bucket. This is one of the most common and straightforward methods.",
        },
        {
          name: "➡️ Open Addressing (Closed Hashing)",
          description:
            "All key-value pairs are stored directly in the array. When a collision occurs, the algorithm 'probes' for the next available slot. Common probing techniques include Linear Probing (checking the next slot sequentially), Quadratic Probing, and Double Hashing.",
        },
      ],
    },

    advantages: [
        "⚡ O(1) Average Time: Insert, search, and delete operations are incredibly fast on average.",
        "🔑 Flexible Keys: Can use various data types as keys (e.g., strings, numbers).",
        "💾 Efficient Memory: Memory usage is generally efficient with a good hash function.",
        "🎯 Direct Lookup: Avoids iterating through an entire collection to find an element."
    ],
    disadvantages: [
      "🐌 O(n) Worst Case: A poor hash function or many collisions can degrade performance to linear time.",
      "💥 Collisions are inevitable and require additional logic and memory to handle.",
      "🔄 Unordered: Keys are not stored in any particular order, making sorted traversal difficult.",
      "🧮 Hash Function Quality: The performance heavily depends on the quality of the hash function."
    ],

    industry_applications: [
      "💾 Database Indexing - Speeding up data retrieval from databases.",
      "⚡ Caching - Storing frequently accessed data for quick access.",
      "🖥️ Compilers - Managing symbol tables for variables and functions.",
      "🔍 Spell Checkers - Storing a dictionary of words for efficient lookup.",
      "🔐 Cryptography - Used in hash functions for data integrity and security.",
      "🌐 DNS Resolution - Mapping domain names (keys) to IP addresses (values).",
    ],

code_examples : {
  javascript: `// JavaScript Hash Table Example - simple user cache
class UserCache {
  constructor() {
    // In JS, Map is a common hash-table-like structure
    this.cache = new Map();
  }

  addUser(id, data) { // Insert / Update (avg O(1))
    this.cache.set(id, data);
  }

  getUser(id) { // Search (avg O(1))
    return this.cache.has(id) ? this.cache.get(id) : null;
  }

  removeUser(id) { // Delete (avg O(1))
    this.cache.delete(id);
  }

  display() {
    console.log('--- Cache ---');
    for (const [k, v] of this.cache) console.log(k, v);
    console.log('-------------');
  }
}

// Demo
const c = new UserCache();
c.addUser('u1', {name: 'Alice'});
c.addUser('u2', {name: 'Bob'});
c.display();
console.log(c.getUser('u1'));
c.removeUser('u2');
c.display();`,

  python: `# Python Hash Table Example - word count (simple)
# Python dict is the built-in hash table

def count_words(text):
    freq = {}
    for token in text.lower().split():
        word = ''.join(ch for ch in token if ch.isalnum())
        if not word: continue
        freq[word] = freq.get(word, 0) + 1
    return freq

# Demo
text = "Hash table is simple. Hash table maps keys to values."
print(count_words(text))`,

  java: `// Java Hash Table Example - simple inventory
import java.util.HashMap;
import java.util.Map;

public class InventorySimple {
    public static void main(String[] args) {
        // HashMap is a hash-table implementation
        Map&lt;String, Integer&gt; inv = new HashMap&lt;&gt;();
        inv.put("apple", 10);
        inv.put("orange", 5);
        System.out.println("apple: " + inv.get("apple"));
        inv.put("apple", inv.get("apple") - 2); // update
        inv.remove("orange"); // delete
        System.out.println(inv);
    }
}`,

  cpp: `// C++ Hash Table Example - simple gradebook
#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;unordered_map&gt;

int main() {
    // std::unordered_map is the hash table
    std::unordered_map&lt;std::string, int&gt; grades;
    grades["Alice"] = 90;
    grades["Bob"] = 82;

    // print
    std::cout &lt;&lt; "Alice: " &lt;&lt; grades["Alice"] &lt;&lt; std::endl;

    // update
    grades["Bob"] = 85;

    // delete
    grades.erase("Alice");

    return 0;
}`,

  c: `// C Hash Table Example - very simple symbol table (separate chaining)
// C has no built-in hash table; this shows a tiny manual example
#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;string.h&gt;

#define TABLE_SIZE 5

typedef struct Node {
    char* key;
    int value;
    struct Node* next;
} Node;

Node* table[TABLE_SIZE] = {0};

unsigned int hash(const char* s) {
    unsigned int h = 0;
    while (*s) h = h * 31 + (unsigned char)*s++;
    return h % TABLE_SIZE;
}

void insert(const char* k, int v) {
    unsigned int i = hash(k);
    Node* n = malloc(sizeof(Node));
    n->key = strdup(k);
    n->value = v;
    n->next = table[i];
    table[i] = n;
}

Node* search(const char* k) {
    unsigned int i = hash(k);
    for (Node* cur = table[i]; cur; cur = cur->next) {
        if (strcmp(cur->key, k) == 0) return cur;
    }
    return NULL;
}

int main() {
    insert("one", 1);
    insert("two", 2);
    Node* r = search("two");
    if (r) printf("found %s = %d\n", r->key, r->value);
    return 0;
}`
},




    interview_questions: [
      {
        question: "What is a hash function and what are the properties of a good one?",
        answer: "A hash function is a method that maps data of arbitrary size to a fixed-size value (a hash). A good hash function is deterministic (same input -> same output), fast to compute, and uniformly distributes keys to minimize collisions.",
        difficulty: "Easy",
      },
      {
        question: "What is a hash collision and how can it be handled?",
        answer: "A collision occurs when two different keys map to the same hash index. Common handling methods include Separate Chaining (each bucket stores a linked list of collided items) and Open Addressing (probing for the next empty slot in the table).",
        difficulty: "Medium",
      },
      {
        question: "What is the time complexity for search, insert, and delete in a hash table?",
        answer: "On average, the time complexity is O(1) for all three operations. In the worst-case scenario (many collisions), it can degrade to O(n), where n is the number of elements in the table.",
        difficulty: "Medium",
      },
      {
        question: "What is the 'load factor' and why is it important?",
        answer: "The load factor is the ratio of stored elements to the number of buckets (n/k). It indicates how full the table is. A high load factor increases the probability of collisions, so if it exceeds a certain threshold (e.g., 0.75), the table is often resized to maintain performance.",
        difficulty: "Hard",
      },
    ],

    project_ideas: [
      {
        title: "Word Frequency Counter",
        description: "Build a tool that reads a text file and uses a hash table to count the occurrences of each word, then displays the most frequent words.",
        difficulty: "Beginner",
        technologies: ["Python", "File I/O", "Data processing"],
      },
      {
        title: "In-Memory Caching System",
        description: "Create a simple caching module for a web application. Use a hash table to store results of expensive computations or database queries to speed up subsequent requests.",
        difficulty: "Intermediate",
        technologies: ["JavaScript/Node.js", "Express", "Caching logic"],
      },
      {
        title: "URL Shortener Service",
        description: "Develop a service that takes a long URL and generates a unique short URL. Use a hash table to store the mapping between the short key and the original long URL for fast redirection.",
        difficulty: "Advanced",
        technologies: ["Python/Flask", "Hashing algorithms", "Database"],
      },
    ],
  },
};

// Syntax highlighting function (re-usable)
const highlightSyntax = (code, language) => {
  const keywords = {
    c: ['int', 'float', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'printf', 'include', 'main', 'struct', 'typedef', 'unsigned', 'const', 'sizeof', 'malloc', 'strdup', 'strcmp'],
    cpp: ['int', 'string', 'void', 'return', 'if', 'else', 'for', 'while', 'cout', 'cin', 'using', 'namespace', 'std', 'include', 'main', 'const', 'auto'],
    java: ['public', 'private', 'static', 'void', 'int', 'String', 'class', 'return', 'if', 'else', 'for', 'while', 'System', 'main', 'import', 'Map', 'HashMap'],
    python: ['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'class', 'print', 'len', 'in', 'del'],
    javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class', 'this', 'console', 'log', 'new', 'JSON']
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


export default function HashTablePage() {
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);

    // State for Interactive Hash Table Visualization
    const TABLE_SIZE = 8;
    const [hashTable, setHashTable] = useState(Array(TABLE_SIZE).fill(null).map(() => []));
    const [keyInput, setKeyInput] = useState("");
    const [valueInput, setValueInput] = useState("");
    const [operationInfo, setOperationInfo] = useState({ message: "Enter a key-value pair to begin.", type: "info" });
    const [animatingIndex, setAnimatingIndex] = useState(-1);
    const [foundValue, setFoundValue] = useState(null);

    const { topic, category, sections } = hashTableData;
    const languages = ["javascript", "python", "java", "cpp", "c"];

    // Animation effect
    useEffect(() => {
        if (animatingIndex >= 0) {
            const timer = setTimeout(() => {
                setAnimatingIndex(-1);
                setFoundValue(null);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [animatingIndex]);

    const simpleHash = (key, size) => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * (i + 1)) % size;
        }
        return hash;
    };

    const handleInsert = () => {
        if (!keyInput || !valueInput) {
            setOperationInfo({ message: "Key and Value cannot be empty.", type: "error" });
            return;
        }
        const index = simpleHash(keyInput, TABLE_SIZE);
        setAnimatingIndex(index);

        const newTable = hashTable.map(bucket => [...bucket]);
        const bucket = newTable[index];
        const existingPairIndex = bucket.findIndex(pair => pair.key === keyInput);

        if (existingPairIndex !== -1) {
            bucket[existingPairIndex].value = valueInput;
            setOperationInfo({ message: `Key "${keyInput}" updated at index ${index}.`, type: "success" });
        } else {
            bucket.push({ key: keyInput, value: valueInput });
            setOperationInfo({ message: `Inserted "${keyInput}" at index ${index}.`, type: "success" });
        }
        setHashTable(newTable);
        setKeyInput("");
        setValueInput("");
    };

    const handleSearch = () => {
        if (!keyInput) {
            setOperationInfo({ message: "Enter a key to search.", type: "error" });
            return;
        }
        const index = simpleHash(keyInput, TABLE_SIZE);
        setAnimatingIndex(index);
        
        const bucket = hashTable[index];
        const foundPair = bucket.find(pair => pair.key === keyInput);

        if (foundPair) {
            setFoundValue(foundPair.value);
            setOperationInfo({ message: `Found key "${keyInput}" at index ${index}.`, type: "success" });
        } else {
            setOperationInfo({ message: `Key "${keyInput}" not found.`, type: "error" });
        }
    };

    const handleDelete = () => {
        if (!keyInput) {
            setOperationInfo({ message: "Enter a key to delete.", type: "error" });
            return;
        }
        const index = simpleHash(keyInput, TABLE_SIZE);
        setAnimatingIndex(index);

        let wasDeleted = false;
        const newTable = hashTable.map((bucket, i) => {
            if (i === index) {
                const newBucket = bucket.filter(pair => pair.key !== keyInput);
                if (newBucket.length < bucket.length) {
                    wasDeleted = true;
                }
                return newBucket;
            }
            return bucket;
        });

        if (wasDeleted) {
            setHashTable(newTable);
            setOperationInfo({ message: `Deleted key "${keyInput}" from index ${index}.`, type: "success" });
        } else {
            setOperationInfo({ message: `Key "${keyInput}" not found for deletion.`, type: "error" });
        }
    };



// const TABLE_SIZE = 16;

// const simpleHash = (key, size) => {
//   let hash = 0;
//   for (let i = 0; i < key.length; i++) {
//     hash += key.charCodeAt(i);
//   }
//   return hash % size;
// };

const HashTableVisualization = () => {
  const [hashTable, setHashTable] = React.useState(
    Array.from({ length: TABLE_SIZE }, () => [])
  );
  const [keyInput, setKeyInput] = React.useState("");
  const [valueInput, setValueInput] = React.useState("");
  const [foundValue, setFoundValue] = React.useState(null);
  const [operationInfo, setOperationInfo] = React.useState({ type: "", message: "" });
  const [animatingIndex, setAnimatingIndex] = React.useState(null);

  const handleInsert = () => {
    if (!keyInput || !valueInput) return;

    const index = simpleHash(keyInput, TABLE_SIZE);
    const bucket = [...hashTable[index]];

    const existing = bucket.find((pair) => pair.key === keyInput);
    if (existing) {
      setOperationInfo({ type: "error", message: `Key "${keyInput}" already exists!` });
      setAnimatingIndex(index);
      setTimeout(() => setAnimatingIndex(null), 1000);
      return;
    }

    bucket.push({ key: keyInput, value: valueInput });
    const newTable = [...hashTable];
    newTable[index] = bucket;
    setHashTable(newTable);
    setOperationInfo({ type: "success", message: `Inserted key "${keyInput}"` });
    setAnimatingIndex(index);
    setTimeout(() => setAnimatingIndex(null), 1000);

    setKeyInput("");
    setValueInput("");
  };

  const handleSearch = () => {
    if (!keyInput) return;
    const index = simpleHash(keyInput, TABLE_SIZE);
    const bucket = hashTable[index];
    const found = bucket.find((pair) => pair.key === keyInput);
    setFoundValue(found ? found.value : null);
    setOperationInfo({
      type: found ? "success" : "error",
      message: found ? `Found key "${keyInput}"` : `Key "${keyInput}" not found`,
    });
    setAnimatingIndex(index);
    setTimeout(() => setAnimatingIndex(null), 1000);
  };

  const handleDelete = () => {
    if (!keyInput) return;
    const index = simpleHash(keyInput, TABLE_SIZE);
    const bucket = hashTable[index];
    const found = bucket.find((pair) => pair.key === keyInput);
    if (!found) {
      setOperationInfo({ type: "error", message: `Key "${keyInput}" not found` });
      setAnimatingIndex(index);
      setTimeout(() => setAnimatingIndex(null), 1000);
      return;
    }

    const newBucket = bucket.filter((pair) => pair.key !== keyInput);
    const newTable = [...hashTable];
    newTable[index] = newBucket;
    setHashTable(newTable);
    setOperationInfo({ type: "success", message: `Deleted key "${keyInput}"` });
    setAnimatingIndex(index);
    setTimeout(() => setAnimatingIndex(null), 1000);

    setKeyInput("");
    setValueInput("");
    setFoundValue(null);
  };

  return (
    <div className="p-6 bg-[#1a2233] rounded-xl border-2 border-blue-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-300">
        🔑 Interactive Hash Table
      </h3>

      {/* Controls */}
      <div className="bg-gray-900/50 p-4 rounded-lg shadow-lg mb-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            placeholder="Enter Key"
            className="px-4 py-2 w-full sm:w-auto border-2 border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            placeholder="Enter Value"
            className="px-4 py-2 w-full sm:w-auto border-2 border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <div className="flex gap-2">
            <button
              onClick={handleInsert}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 shadow-lg text-sm"
            >
              Insert
            </button>
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 shadow-lg text-sm"
            >
              Search
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 shadow-lg text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Operation Info */}
      <div
        className={`p-3 rounded-lg mb-6 text-center font-medium ${
          operationInfo.type === "success"
            ? "bg-green-900/30 text-green-300"
            : operationInfo.type === "error"
            ? "bg-red-900/30 text-red-300"
            : "bg-blue-900/30 text-blue-300"
        }`}
      >
        {keyInput && `hash("${keyInput}") % ${TABLE_SIZE} = ${simpleHash(keyInput, TABLE_SIZE)}`}
        <br />
        {operationInfo.message} {foundValue && `-> Value: "${foundValue}"`}
      </div>

      {/* Hash Table Visualization */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {hashTable.map((bucket, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg border-2 transition-all duration-500 min-h-[120px] ${
              animatingIndex === index ? "border-blue-500 scale-105 bg-blue-900/40 shadow-lg" : "border-gray-700 bg-gray-800"
            }`}
          >
            <div className="text-center font-bold text-sm mb-2 pb-1 border-b-2 border-gray-700 text-blue-400">
              Index {index}
            </div>
            <div className="space-y-1">
              {bucket.map((pair, pairIndex) => (
                <div
                  key={pairIndex}
                  className={`p-1 rounded text-xs text-center transition-all duration-300 ${
                    animatingIndex === index && foundValue === pair.value
                      ? "bg-green-500 text-white font-bold"
                      : "bg-gray-700 text-gray-200"
                  }`}
                >
                  <span className="font-semibold">{pair.key}</span>: {pair.value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




    return (
        <div className="min-h-screen bg-[#111827] text-gray-200">
            <header className="py-16 text-center bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                    <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
                    <p className="text-xl">{category}</p>
                    <div className="mt-6">
                        <div className="flex justify-center space-x-4 text-sm">
                            <span className="px-3 py-1 bg-white/20 rounded-full">🔑 Key-Value Pairs</span>
                            <span className="px-3 py-1 bg-white/20 rounded-full">🧮 Hash Functions</span>
                            <span className="px-3 py-1 bg-white/20 rounded-full">⚡ O(1) Access</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
                <section>
                    <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        💡 Why Hash Tables Matter
                    </h2>
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500">
                        <p className="text-xl leading-relaxed text-gray-300 italic">
                            {sections.student_hook}
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Core Concepts
                    </h2>
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
                        <p className="text-lg leading-relaxed text-gray-300 mb-6">
                            {sections.core_concepts.concept}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {sections.core_concepts.key_components.map((item, index) => (
                                <div key={index} className="bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                                    <p className="text-blue-200">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <HashTableVisualization />
                </section>
                
                <section>
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        💥 Handling Collisions
                    </h2>
                     <div className="bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
                        <p className="text-lg leading-relaxed text-gray-300 mb-6">
                            {sections.collision_handling.concept}
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {sections.collision_handling.strategies.map((strategy, index) => (
                                <div key={index} className="bg-blue-900/20 p-4 rounded-lg">
                                    <h4 className="font-bold text-lg mb-2 text-blue-200">{strategy.name}</h4>
                                    <p className="text-gray-300">{strategy.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
                        <h3 className="text-2xl font-bold mb-4 text-green-300">✅ Advantages</h3>
                        <ul className="space-y-3">
                            {sections.advantages.map((adv, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <span className="text-green-400 text-lg">{adv.split(' ')[0]}</span>
                                    <span className="text-gray-300">{adv.substring(2)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
                        <h3 className="text-2xl font-bold mb-4 text-red-300">❌ Disadvantages</h3>
                        <ul className="space-y-3">
                            {sections.disadvantages.map((dis, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <span className="text-red-400 text-lg">{dis.split(' ')[0]}</span>
                                    <span className="text-gray-300">{dis.substring(2)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <section>
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                        🏢 Industry Applications
                    </h2>
                    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sections.industry_applications.map((app, index) => (
                                <div key={index} className="bg-teal-900/20 p-4 rounded-xl border-l-4 border-teal-400 hover:shadow-lg transition-shadow duration-300">
                                    <p className="text-gray-300">{app}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                        💻 Real-World Code Examples
                    </h2>
                    <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="bg-gray-700 p-4">
                            <div className="flex flex-wrap justify-center gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => setSelectedLanguage(lang)}
                                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedLanguage === lang ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}`}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="p-6">
                            <pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed">
                                <code dangerouslySetInnerHTML={{ __html: highlightSyntax(sections.code_examples[selectedLanguage], selectedLanguage) }}/>
                            </pre>
                        </div>
                    </div>
                </section>
                
                <section>
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                        ⚡ Performance Analysis
                    </h2>
                    <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                        <table className="w-full text-center">
                            <thead className="bg-gray-700">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-200">Operation</th>
                                    <th className="px-4 py-3 font-semibold text-gray-200">Average Case</th>
                                    <th className="px-4 py-3 font-semibold text-gray-200">Worst Case</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-600">
                                {['Insert', 'Search', 'Delete'].map(op => (
                                    <tr key={op} className="hover:bg-gray-700/50 transition-colors">
                                        <td className="px-4 py-3 text-left font-medium">{op}</td>
                                        <td><span className="px-2 py-1 rounded text-xs font-mono bg-green-900/30 text-green-300">O(1)</span></td>
                                        <td><span className="px-2 py-1 rounded text-xs font-mono bg-yellow-900/30 text-yellow-300">O(n)</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        🎤 Interview Questions & Answers
                    </h2>
                    <div className="space-y-4">
                        {sections.interview_questions.map((qa, index) => (
                            <div key={index} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                                <button
                                    onClick={() => setSelectedQuestionIndex(selectedQuestionIndex === index ? -1 : index)}
                                    className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors"
                                >
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold mb-2 text-gray-200">{qa.question}</h3>
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                                qa.difficulty === "Easy" ? "bg-green-900/30 text-green-300" :
                                                qa.difficulty === "Medium" ? "bg-yellow-900/30 text-yellow-300" :
                                                "bg-red-900/30 text-red-300"
                                            }`}>{qa.difficulty}</span>
                                        </div>
                                        <svg className={`w-6 h-6 transition-transform duration-200 text-gray-400 ${selectedQuestionIndex === index ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                {selectedQuestionIndex === index && (
                                    <div className="px-6 pb-6 border-t border-gray-700">
                                        <div className="bg-indigo-900/20 p-4 rounded-lg mt-4">
                                            <p className="text-gray-300"><strong>Answer:</strong> {qa.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                        🚀 Hands-on Project Ideas
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {sections.project_ideas.map((project, index) => (
                            <div key={index} className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-violet-500">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold mb-2 text-gray-200">{project.title}</h3>
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                        project.difficulty === "Beginner" ? "bg-green-900/30 text-green-300" :
                                        project.difficulty === "Intermediate" ? "bg-yellow-900/30 text-yellow-300" :
                                        "bg-red-900/30 text-red-300"
                                    }`}>{project.difficulty}</span>
                                </div>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-violet-900/30 text-violet-300 rounded-full text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">Master Hashing Today! 🚀</h3>
                    <p className="text-lg text-gray-300 mb-6">
                        From database indexing to caching, Hash Tables are a cornerstone of high-performance software!
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