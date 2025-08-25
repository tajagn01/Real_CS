import React, { useState, useEffect } from "react";

const arrayData = {
  topic: "Arrays",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Imagine you're organizing a massive library with millions of books, and you need to find any book instantly by its catalog number. Arrays work exactly like this - they're like numbered shelves that store data in perfect order, making retrieval lightning-fast! Just like how you can grab book #247 directly without searching through hundreds of others, arrays let you access any element instantly using its index position.",

    // 1D Array Content
    oneDimensional: {
      concept:
        "A 1D array is like a row of lockers in a school hallway - each locker has a unique number (index) and can store one item (element). Elements are stored sequentially in memory, making access incredibly fast through simple arithmetic calculations.",
      realWorldExample:
        "Think of a playlist on your phone - song 1, song 2, song 3... You can jump to any song instantly by its position number!",
      industry_applications: [
        "🎵 Spotify - Song playlists and queue management",
        "📊 Excel - Row and column data storage",
        "🎮 Gaming - Player score arrays and leaderboards",
        "📱 Mobile Apps - Contact lists and message threads",
        "💰 Banking - Transaction history arrays",
        "🛒 E-commerce - Shopping cart item lists",
      ],
      advantages: [
        "⚡ O(1) instant access by index",
        "💾 Memory efficient storage",
        "🔄 Cache-friendly sequential access",
        "🎯 Simple and intuitive structure",
      ],
      disadvantages: [
        "📏 Fixed size in most languages",
        "➕ Expensive insertion in middle",
        "➖ Expensive deletion in middle",
        "🔍 Linear search for unknown indices",
      ],
    },

    // 2D Array Content
    twoDimensional: {
      concept:
        "A 2D array is like a spreadsheet or chess board - it has rows and columns forming a grid. Each cell can be accessed using two indices: [row][column]. Perfect for representing matrices, game boards, and image data.",
      realWorldExample:
        "Think of a chess board - each square has a row (A-H) and column (1-8) position. Or a movie theater with rows and seat numbers!",
      industry_applications: [
        "🎬 Netflix - Movie recommendation matrices",
        "🏥 Healthcare - Medical imaging (X-rays, MRIs)",
        "🎮 Gaming - Game boards, maps, and terrain data",
        "📈 Finance - Risk assessment matrices",
        "🎨 Graphics - Image pixel data and filters",
        "🧬 Science - DNA sequence alignment matrices",
      ],
      advantages: [
        "🎯 Perfect for grid-based data",
        "⚡ Fast row/column access",
        "💡 Intuitive for mathematical operations",
        "🔄 Excellent for matrix algorithms",
      ],
      disadvantages: [
        "💾 More memory usage than 1D",
        "🔧 More complex index management",
        "📏 Fixed dimensions in static arrays",
        "🎯 Requires two indices for access",
      ],
    },

    // 3D Array Content
    threeDimensional: {
      concept:
        "A 3D array adds depth to the grid concept - imagine a cube made of smaller cubes. Each element needs three coordinates: [depth][row][column]. Essential for 3D graphics, video processing, and scientific simulations.",
      realWorldExample:
        "Think of a building with floors, rows of rooms, and room numbers. Or a Rubik's cube where each small cube has a 3D position!",
      industry_applications: [
        "🎬 Pixar - 3D animation and rendering",
        "🏥 Medical - CT scans and 3D body imaging",
        "🌡️ Weather - Climate simulation models",
        "🎮 Gaming - 3D world coordinates and voxel data",
        "🧪 Science - Molecular modeling and simulations",
        "🚗 Automotive - 3D crash test simulations",
      ],
      advantages: [
        "🎯 Perfect for 3D data representation",
        "🌍 Natural for spatial algorithms",
        "💡 Ideal for scientific modeling",
        "🎨 Essential for 3D graphics",
      ],
      disadvantages: [
        "💾 High memory consumption",
        "🧮 Complex index calculations",
        "🔧 Difficult to visualize and debug",
        "⚡ Cache performance challenges",
      ],
    },

code_examples: {
  c: `// C Example - Student Marks (1D & 2D Arrays)
#include &lt;stdio.h&gt;

int main() {
    // 1D Array: Marks of 1 student in 3 subjects
    int marks1D[3] = {85, 90, 78};
    
    printf("=== 1D Array - Single Student ===\\n");
    for(int i = 0; i &lt; 3; i++) {
        printf("Subject %d: %d\\n", i+1, marks1D[i]);
    }
    
    // 2D Array: Marks of 3 students in 3 subjects
    int marks2D[3][3] = {
        {85, 90, 78},
        {92, 88, 95},
        {76, 85, 89}
    };
    
    printf("\\n=== 2D Array - Multiple Students ===\\n");
    for(int i = 0; i &lt; 3; i++) {
        printf("Student %d: ", i+1);
        for(int j = 0; j &lt; 3; j++) {
            printf("%d ", marks2D[i][j]);
        }
        printf("\\n");
    }
    
    return 0;
}`,

  cpp: `// C++ Example - Student Marks (1D & 2D Arrays)
#include &lt;iostream&gt;
using namespace std;

int main() {
    // 1D Array: Marks of 1 student in 3 subjects
    int marks1D[3] = {85, 90, 78};
    
    cout &lt;&lt; "=== 1D Array - Single Student ===\\n";
    for(int i = 0; i &lt; 3; i++) {
        cout &lt;&lt; "Subject " &lt;&lt; i+1 &lt;&lt; ": " &lt;&lt; marks1D[i] &lt;&lt; "\\n";
    }
    
    // 2D Array: Marks of 3 students in 3 subjects
    int marks2D[3][3] = {
        {85, 90, 78},
        {92, 88, 95},
        {76, 85, 89}
    };
    
    cout &lt;&lt; "\\n=== 2D Array - Multiple Students ===\\n";
    for(int i = 0; i &lt; 3; i++) {
        cout &lt;&lt; "Student " &lt;&lt; i+1 &lt;&lt; ": ";
        for(int j = 0; j &lt; 3; j++) {
            cout &lt;&lt; marks2D[i][j] &lt;&lt; " ";
        }
        cout &lt;&lt; "\\n";
    }
    
    return 0;
}`,

  java: `// Java Example - Student Marks (1D & 2D Arrays)
public class StudentMarks {
    public static void main(String[] args) {
        // 1D Array: Marks of 1 student in 3 subjects
        int[] marks1D = {85, 90, 78};
        
        System.out.println("=== 1D Array - Single Student ===");
        for(int i = 0; i &lt; marks1D.length; i++) {
            System.out.println("Subject " + (i+1) + ": " + marks1D[i]);
        }
        
        // 2D Array: Marks of 3 students in 3 subjects
        int[][] marks2D = {
            {85, 90, 78},
            {92, 88, 95},
            {76, 85, 89}
        };
        
        System.out.println("\\n=== 2D Array - Multiple Students ===");
        for(int i = 0; i &lt; marks2D.length; i++) {
            System.out.print("Student " + (i+1) + ": ");
            for(int j = 0; j &lt; marks2D[i].length; j++) {
                System.out.print(marks2D[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,

  python: `# Python Example - Student Marks (1D & 2D Arrays)

# 1D Array: Marks of 1 student in 3 subjects
marks1D = [85, 90, 78]

print("=== 1D Array - Single Student ===")
for i in range(len(marks1D)):
    print(f"Subject {i+1}: {marks1D[i]}")

# 2D Array: Marks of 3 students in 3 subjects
marks2D = [
    [85, 90, 78],
    [92, 88, 95],
    [76, 85, 89]
]

print("\\n=== 2D Array - Multiple Students ===")
for i in range(len(marks2D)):
    print(f"Student {i+1}: ", end="")
    for j in range(len(marks2D[i])):
        print(marks2D[i][j], end=" ")
    print()`,

  javascript: `// JavaScript Example - Student Marks (1D & 2D Arrays)

// 1D Array: Marks of 1 student in 3 subjects
let marks1D = [85, 90, 78];

console.log("=== 1D Array - Single Student ===");
for(let i = 0; i &lt; marks1D.length; i++) {
    console.log("Subject " + (i+1) + ": " + marks1D[i]);
}

// 2D Array: Marks of 3 students in 3 subjects
let marks2D = [
    [85, 90, 78],
    [92, 88, 95],
    [76, 85, 89]
];

console.log("\\n=== 2D Array - Multiple Students ===");
for(let i = 0; i &lt; marks2D.length; i++) {
    let row = "Student " + (i+1) + ": ";
    for(let j = 0; j &lt; marks2D[i].length; j++) {
        row += marks2D[i][j] + " ";
    }
    console.log(row);
}`
},



    interview_questions: [
      {
        question: "What is the time complexity of accessing an element in an array by index?",
        answer:
          "O(1) - Constant time, because arrays provide direct access using memory address calculation: base_address + (index * element_size).",
        difficulty: "Easy",
      },
      {
        question: "How do you find the second largest element in an array in one pass?",
        answer:
          "Keep track of largest and second largest while iterating. When you find a larger element, update second largest to previous largest, then update largest.",
        difficulty: "Medium",
      },
      {
        question: "Explain the difference between static and dynamic arrays.",
        answer:
          "Static arrays have fixed size determined at compile time (like C arrays). Dynamic arrays can resize during runtime but may require memory reallocation (like Python lists, JavaScript arrays).",
        difficulty: "Medium",
      },
      {
        question: "How would you rotate an array to the right by k positions?",
        answer:
          "Reverse entire array, then reverse first k elements, then reverse remaining elements. Time: O(n), Space: O(1). Example: [1,2,3,4,5] rotated by 2 becomes [4,5,1,2,3].",
        difficulty: "Hard",
      },
      {
        question: "What are the advantages and disadvantages of arrays?",
        answer:
          "Advantages: O(1) random access, memory efficient, cache friendly, simple indexing. Disadvantages: Fixed size (static), expensive insertion/deletion in middle O(n), no built-in bounds checking in some languages.",
        difficulty: "Easy",
      },
    ],

    project_ideas: [
      {
        title: "Student Grade Management System",
        description:
          "Create a system that stores student grades in arrays, calculates averages, finds top performers, and generates reports with data visualization.",
        difficulty: "Beginner",
        technologies: ["Python", "CSV handling", "Data analysis", "Matplotlib"],
      },
      {
        title: "Image Pixel Manipulator",
        description:
          "Build an application that loads images into 2D arrays and applies filters like blur, sharpen, edge detection, and color adjustments.",
        difficulty: "Intermediate",
        technologies: ["Python/OpenCV", "NumPy", "Image processing", "GUI"],
      },
      {
        title: "Stock Market Data Analyzer",
        description:
          "Develop a tool that stores historical stock prices in arrays and implements technical indicators like moving averages, RSI, and trend analysis.",
        difficulty: "Advanced",
        technologies: ["JavaScript/Python", "APIs", "Data visualization", "Real-time data"],
      },
      {
        title: "3D Game World Generator",
        description:
          "Create a procedural world generator using 3D arrays to represent terrain, biomes, and structures in a voxel-based game world.",
        difficulty: "Advanced",
        technologies: ["C++/Unity", "3D graphics", "Procedural generation", "Game engines"],
      },
    ],
  },
};

// Syntax highlighting function
const highlightSyntax = (code, language) => {
  const keywords = {
    c: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'printf', 'include', 'main'],
    cpp: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'cout', 'cin', 'using', 'namespace', 'std', 'include', 'main', 'string'],
    java: ['public', 'private', 'static', 'void', 'int', 'double', 'String', 'class', 'return', 'if', 'else', 'for', 'while', 'System', 'main', 'println', 'printf'],
    python: ['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'class', 'print', 'len', 'range', 'True', 'False', 'None'],
    javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class', 'this', 'console', 'log', 'true', 'false', 'null', 'undefined']
  };

  const strings = /"[^"]*"|'[^']*'|`[^`]*`/g;
  // Fix: Prevent replacing inside HTML tags by using a function for .replace
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

export default function EnhancedArrayPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedArrayIndex, setSelectedArrayIndex] = useState(0);
  const [arrayValues, setArrayValues] = useState([10, 20, 30, 40, 50]);
  const [inputValue, setInputValue] = useState("");
  const [animatingIndex, setAnimatingIndex] = useState(-1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  
  // 2D Array state
  const [array2D, setArray2D] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);
  const [selected2DIndex, setSelected2DIndex] = useState({ row: 0, col: 0 });
  
  // 3D Array state
  const [array3D, setArray3D] = useState([
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
  ]);
  const [selected3DIndex, setSelected3DIndex] = useState({ depth: 0, row: 0, col: 0 });

  const { topic, category, sections } = arrayData;
  const languages = ["c", "cpp", "java", "python", "javascript"];

  // Animation effect
  useEffect(() => {
    if (animatingIndex >= 0) {
      const timer = setTimeout(() => setAnimatingIndex(-1), 300);
      return () => clearTimeout(timer);
    }
  }, [animatingIndex]);

  const handleArrayUpdate = () => {
    if (inputValue !== "" && selectedArrayIndex >= 0 && selectedArrayIndex < arrayValues.length) {
      const newValues = [...arrayValues];
      newValues[selectedArrayIndex] = parseInt(inputValue, 10) || 0;
      setArrayValues(newValues);
      setAnimatingIndex(selectedArrayIndex);
      setInputValue("");
    }
  };

  const addElement = () => {
    if (inputValue !== "") {
      setArrayValues([...arrayValues, parseInt(inputValue, 10) || 0]);
      setAnimatingIndex(arrayValues.length);
      setInputValue("");
    }
  };

  const removeElement = () => {
    if (arrayValues.length > 1) {
      setArrayValues(arrayValues.slice(0, -1));
      if (selectedArrayIndex >= arrayValues.length - 1) {
        setSelectedArrayIndex(Math.max(0, arrayValues.length - 2));
      }
    }
  };

  const ArrayVisualization1D = () => (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold mb-6 text-center">
    📊
    <span className="text-blue-800 dark:text-blue-200">
        1D Array Interactive Demo
    </span>
</h3>
      
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {arrayValues.map((value, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedArrayIndex(index);
              setAnimatingIndex(index);
            }}
            className={`cursor-pointer transform transition-all duration-300 text-center ${
              selectedArrayIndex === index ? "scale-110" : "hover:scale-105"
            } ${animatingIndex === index ? "animate-bounce" : ""}`}
          >
            <div
              className={`w-20 h-20 rounded-lg shadow-lg border-2 flex items-center justify-center transition-all duration-300 ${
                selectedArrayIndex === index
                  ? "bg-blue-500 border-blue-600 text-white shadow-xl"
                  : "bg-white dark:bg-gray-800 border-blue-300 dark:border-blue-600 text-blue-800 dark:text-blue-200"
              }`}
            >
              <div className="font-bold text-lg">{value}</div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Index: {index}
            </div>
            <div className="text-xs text-gray-500">
              0x{(1000 + index * 4).toString(16)}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <span className="text-sm text-gray-500">Array Length</span>
            <div className="text-2xl font-bold text-blue-600">{arrayValues.length}</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Selected Index</span>
            <div className="text-2xl font-bold text-blue-600">{selectedArrayIndex}</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Current Value</span>
            <div className="text-2xl font-bold text-blue-600">{arrayValues[selectedArrayIndex]}</div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h4 className="text-lg font-bold mb-3 text-center">Array Operations</h4>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value"
            className="px-4 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
          />
          <div className="flex gap-2">
            <button
              onClick={handleArrayUpdate}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
            >
              Update [{selectedArrayIndex}]
            </button>
            <button
              onClick={addElement}
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
            >
              Add
            </button>
            <button
              onClick={removeElement}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ArrayVisualization2D = () => (
    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800">
     <h3 className="text-2xl font-bold mb-6 text-center">
    🎯
    <span className="text-green-800 dark:text-green-200">
        2D Array Interactive Demo
    </span>
</h3>
      
      <div className="flex justify-center mb-6">
        <div className="grid grid-cols-3 gap-2">
          {array2D.map((row, rowIndex) => 
            row.map((value, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => setSelected2DIndex({ row: rowIndex, col: colIndex })}
                className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  selected2DIndex.row === rowIndex && selected2DIndex.col === colIndex
                    ? "bg-green-500 border-green-600 text-white scale-110 shadow-lg"
                    : "bg-white dark:bg-gray-800 border-green-300 dark:border-green-600 text-green-800 dark:text-green-200 hover:scale-105"
                }`}
              >
                <span className="font-bold">{value}</span>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <span className="text-gray-500">Dimensions</span>
            <div className="font-bold text-green-600">3 × 3</div>
          </div>
          <div>
            <span className="text-gray-500">Selected</span>
            <div className="font-bold text-green-600">
              [{selected2DIndex.row}][{selected2DIndex.col}]
            </div>
          </div>
          <div>
            <span className="text-gray-500">Value</span>
            <div className="font-bold text-green-600">
              {array2D[selected2DIndex.row][selected2DIndex.col]}
            </div>
          </div>
          <div>
            <span className="text-gray-500">Total Elements</span>
            <div className="font-bold text-green-600">9</div>
          </div>
        </div>
      </div>
    </div>
  );

  const ArrayVisualization3D = () => (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
     <h3 className="text-2xl font-bold mb-6 text-center">
    🧊
    <span className="text-purple-800 dark:text-purple-200">
        3D Array Interactive Demo
    </span>
</h3>
      
      <div className="flex justify-center gap-8 mb-6">
        {array3D.map((layer, depthIndex) => (
          <div key={depthIndex} className="text-center">
            <div className="text-sm font-medium mb-2 text-purple-600 dark:text-purple-400">
              Layer {depthIndex}
            </div>
            <div className="grid grid-cols-2 gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              {layer.map((row, rowIndex) => 
                row.map((value, colIndex) => (
                  <div
                    key={`${depthIndex}-${rowIndex}-${colIndex}`}
                    onClick={() => setSelected3DIndex({ depth: depthIndex, row: rowIndex, col: colIndex })}
                    className={`w-14 h-14 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      selected3DIndex.depth === depthIndex && 
                      selected3DIndex.row === rowIndex && 
                      selected3DIndex.col === colIndex
                        ? "bg-purple-500 border-purple-600 text-white scale-110 shadow-lg"
                        : "bg-white dark:bg-gray-800 border-purple-300 dark:border-purple-600 text-purple-800 dark:text-purple-200 hover:scale-105"
                    }`}
                  >
                    <span className="font-bold text-sm">{value}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <span className="text-gray-500">Dimensions</span>
            <div className="font-bold text-purple-600">2 × 2 × 2</div>
          </div>
          <div>
            <span className="text-gray-500">Selected</span>
            <div className="font-bold text-purple-600">
              [{selected3DIndex.depth}][{selected3DIndex.row}][{selected3DIndex.col}]
            </div>
          </div>
          <div>
            <span className="text-gray-500">Value</span>
            <div className="font-bold text-purple-600">
              {array3D[selected3DIndex.depth][selected3DIndex.row][selected3DIndex.col]}
            </div>
          </div>
          <div>
            <span className="text-gray-500">Total Elements</span>
            <div className="font-bold text-purple-600">8</div>
          </div>
        </div>
      </div>
    </div>
  );

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
              <span className="px-3 py-1 bg-white/20 rounded-full">📊 1D Arrays</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🎯 2D Arrays</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🧊 3D Arrays</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Student Hook */}
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎯 Why Arrays Matter
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* 1D Arrays Section */}
        <section>
          <h2 class="text-5xl font-bold mb-8 text-center">
    📊
    <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        1D Arrays - Linear Data Structure
    </span>
</h2>
          
          {/* 1D Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">💡 Understanding 1D Arrays</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.oneDimensional.concept}
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.oneDimensional.realWorldExample}
              </p>
            </div>
          </div>

          {/* 1D Interactive Demo */}
          <ArrayVisualization1D />

          {/* 1D Advantages & Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.oneDimensional.advantages.map((advantage, index) => (
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
                {sections.oneDimensional.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 1D Industry Applications */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
<h3 className="text-2xl font-bold mb-6 text-center">
    🏢
    <span className="text-blue-700 dark:text-blue-300">
        1D Arrays in Industry
    </span>
</h3>            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.oneDimensional.industry_applications.map((application, index) => (
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

        {/* 2D Arrays Section */}
        <section>
         <h2 class="text-5xl font-bold mb-8 text-center">
    🎯
    <span class="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
        2D Arrays - Matrix Data Structure
    </span>
</h2>
          {/* 2D Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">💡 Understanding 2D Arrays</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.twoDimensional.concept}
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
              <p className="text-green-800 dark:text-green-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.twoDimensional.realWorldExample}
              </p>
            </div>
          </div>

          {/* 2D Interactive Demo */}
          <ArrayVisualization2D />

          {/* 2D Advantages & Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.twoDimensional.advantages.map((advantage, index) => (
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
                {sections.twoDimensional.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2D Industry Applications */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
<h3 className="text-2xl font-bold mb-6 text-center">
    🏢
    <span className="text-green-700 dark:text-green-300">
        2D Arrays in Industry
    </span>
</h3>            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.twoDimensional.industry_applications.map((application, index) => (
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

        {/* 3D Arrays Section */}
        <section>
       <h2 className="text-5xl font-bold mb-8 text-center">
    🧊
    <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
        3D Arrays - Cube Data Structure
    </span>
</h2>
          
          {/* 3D Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-purple-500">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">💡 Understanding 3D Arrays</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
              {sections.threeDimensional.concept}
            </p>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
              <p className="text-purple-800 dark:text-purple-200 font-medium">
                <span className="font-bold">Real-world example:</span> {sections.threeDimensional.realWorldExample}
              </p>
            </div>
          </div>

          {/* 3D Interactive Demo */}
          <ArrayVisualization3D />

          {/* 3D Advantages & Disadvantages */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
              <ul className="space-y-3">
                {sections.threeDimensional.advantages.map((advantage, index) => (
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
                {sections.threeDimensional.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                    <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3D Industry Applications */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
<h3 className="text-2xl font-bold mb-6 text-center">
    🏢
    <span className="text-purple-700 dark:text-purple-300">
        3D Arrays in Industry
    </span>
</h3>            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.threeDimensional.industry_applications.map((application, index) => (
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

        {/* Code Examples */}
        <section>
         <h2 className="text-4xl font-bold mb-8 text-center">
    💻
    <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
        Real-World Code Examples
    </span>
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
  <div className="relative"> {/* Use a relative container for positioning */}
    <pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed">
      <code
        dangerouslySetInnerHTML={{
          __html: highlightSyntax(sections.code_examples[selectedLanguage], selectedLanguage)
        }}
      />
    </pre>
    {/* The copy button is positioned inside the relative container */}
    <button
      className="absolute top-2 right-2 p-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
      onClick={() => {
        // Here you'll add the logic to copy the code to the clipboard
        const codeText = sections.code_examples[selectedLanguage];
        navigator.clipboard.writeText(codeText);
      }}
    >
      {/* You can use an SVG for the copy icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
  </div>
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
          <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold text-gray-800 dark:text-gray-200">Notes</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
        {[
          { operation: "Access by Index", time: "O(1)", space: "O(1)", notes: "Direct memory address calculation" },
          { operation: "Search (Linear)", time: "O(n)", space: "O(1)", notes: "Must check each element sequentially" },
          { operation: "Insertion at End", time: "O(1)", space: "O(1)", notes: "For dynamic arrays with available space" },
          { operation: "Insertion at Middle", time: "O(n)", space: "O(1)", notes: "Requires shifting elements" },
          { operation: "Deletion at End", time: "O(1)", space: "O(1)", notes: "Simply remove last element" },
          { operation: "Deletion at Middle", time: "O(n)", space: "O(1)", notes: "Requires shifting elements left" }
        ].map((row, index) => (
          <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
            <td className="px-2 py-2 sm:px-4 sm:py-3 font-medium text-gray-800 dark:text-gray-200">{row.operation}</td>
            <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
              <span className={`px-2 py-1 rounded text-[10px] sm:text-xs font-mono ${
                row.time === "O(1)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
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
          <h3 className="text-2xl font-bold mb-4">Master Arrays Today! 🚀</h3>
          <p className="text-lg text-gray-300 mb-6">
            From simple 1D lists to complex 3D structures - arrays are your foundation for efficient programming!
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