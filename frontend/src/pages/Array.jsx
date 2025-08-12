import React, { useState, useEffect } from "react";

const arrayData = {
  topic: "Arrays",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Imagine you're organizing a massive library with millions of books, and you need to find any book instantly by its catalog number. Arrays work exactly like this - they're like numbered shelves that store data in perfect order, making retrieval lightning-fast! Just like how you can grab book #247 directly without searching through hundreds of others, arrays let you access any element instantly using its index position.",
    concept_understanding:
      "An array is a fundamental data structure that stores multiple elements of the same type in contiguous memory locations. Think of it as a row of lockers in a school hallway - each locker has a unique number (index) and can store one item (element). The beauty of arrays lies in their simplicity and efficiency: since elements are stored sequentially in memory, the computer can calculate the exact location of any element using simple arithmetic. This makes arrays perfect for scenarios where you need fast, random access to data and know the approximate size of your dataset beforehand.",
    visual_learning: {
      description:
        "Visual representation showing array elements stored in consecutive memory locations with index positions starting from 0",
    },
    code_examples: {
      c: `// C Array Example
#include <stdio.h>
int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    
    // Accessing elements
    printf("First element: %d\\n", numbers[0]);  // Output: 10
    printf("Third element: %d\\n", numbers[2]);  // Output: 30
    
    // Modifying elements
    numbers[1] = 25;
    printf("Modified second element: %d\\n", numbers[1]); // Output: 25
    
    return 0;
}`,
      cpp: `// C++ Array Example
#include <iostream>
using namespace std;

int main() {
    int marks[5] = {85, 90, 78, 92, 88};
    
    // Display all elements
    for(int i = 0; i < 5; i++) {
        cout << "Student " << i+1 << " marks: " << marks[i] << endl;
    }
    
    // Calculate average
    int sum = 0;
    for(int i = 0; i < 5; i++) {
        sum += marks[i];
    }
    cout << "Average marks: " << sum/5 << endl;
    
    return 0;
}`,
      java: `// Java Array Example
public class ArrayExample {
    public static void main(String[] args) {
        String[] fruits = {"Apple", "Banana", "Orange", "Mango", "Grapes"};
        
        // Enhanced for loop
        System.out.println("All fruits:");
        for(String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // Array length
        System.out.println("Total fruits: " + fruits.length);
        
        // Search for a fruit
        String searchFruit = "Orange";
        for(int i = 0; i < fruits.length; i++) {
            if(fruits[i].equals(searchFruit)) {
                System.out.println(searchFruit + " found at index " + i);
                break;
            }
        }
    }
}`,
      python: `# Python Array (List) Example
# Creating and manipulating arrays
temperatures = [23.5, 25.0, 22.8, 26.2, 24.1]

# Accessing elements
print(f"Today's temperature: {temperatures[0]}°C")
print(f"Tomorrow's temperature: {temperatures[1]}°C")

# Adding new temperature
temperatures.append(27.3)
print(f"Updated temperatures: {temperatures}")

# Finding maximum and minimum
print(f"Highest temperature: {max(temperatures)}°C")
print(f"Lowest temperature: {min(temperatures)}°C")

# Sorting temperatures
temperatures.sort()
print(f"Sorted temperatures: {temperatures}")`,
      javascript: `// JavaScript Array Example
let shoppingCart = ['Laptop', 'Mouse', 'Keyboard', 'Monitor'];

// Adding items
shoppingCart.push('Speakers');
console.log('Cart after adding speakers:', shoppingCart);

// Removing items
let removedItem = shoppingCart.pop();
console.log('Removed item:', removedItem);
console.log('Updated cart:', shoppingCart);

// Finding items
let itemIndex = shoppingCart.indexOf('Mouse');
console.log('Mouse is at index:', itemIndex);

// Iterating through cart
shoppingCart.forEach((item, index) => {
    console.log(\`Item \${index + 1}: \${item}\`);
});

// Filter expensive items (example)
let expensiveItems = shoppingCart.filter(item => 
    ['Laptop', 'Monitor'].includes(item)
);
console.log('Expensive items:', expensiveItems);`,
    },

    industry_applications: [
      "Database Indexing - PostgreSQL and MySQL use arrays for B-tree indexes to enable fast data retrieval",
      "Image Processing - Adobe Photoshop represents images as 2D arrays of pixel values for filters and transformations",
      "Game Development - Unity and Unreal Engine store game world coordinates and sprite animations in arrays",
      "Financial Trading - Bloomberg terminals use arrays to store real-time stock price data for analysis",
      "Machine Learning - TensorFlow and PyTorch represent neural network weights and data as multi-dimensional arrays",
      "Video Streaming - Netflix uses arrays to buffer video chunks and manage quality adaptation algorithms",
      "Search Engines - Google's PageRank algorithm processes web page relationships stored in massive arrays",
      "Operating Systems - Linux kernel uses arrays for process scheduling and memory management tables",
      "E-commerce - Amazon's recommendation engine processes user behavior data stored in arrays",
      "Social Media - Instagram stores and processes millions of image thumbnails using array-based data structures",
    ],

    interview_questions: [
      {
        question: "What is the time complexity of accessing an element in an array by index?",
        answer: "O(1) - Constant time, because arrays provide direct access using memory address calculation.",
        difficulty: "Easy",
      },
      {
        question: "How do you find the second largest element in an array in one pass?",
        answer: "Keep track of largest and second largest while iterating. Update both when you find a larger element.",
        difficulty: "Medium",
      },
      {
        question: "Explain the difference between static and dynamic arrays.",
        answer: "Static arrays have fixed size determined at compile time, dynamic arrays can resize during runtime but may require memory reallocation.",
        difficulty: "Medium",
      },
      {
        question: "How would you rotate an array to the right by k positions?",
        answer: "Reverse entire array, then reverse first k elements, then reverse remaining elements. Time: O(n), Space: O(1).",
        difficulty: "Hard",
      },
      {
        question: "What are the advantages and disadvantages of arrays?",
        answer: "Advantages: O(1) access, memory efficient, cache friendly. Disadvantages: Fixed size, expensive insertion/deletion in middle.",
        difficulty: "Easy",
      },
    ],

    project_ideas: [
      {
        title: "Student Grade Management System",
        description:
          "Create a system that stores student grades in arrays, calculates averages, finds top performers, and generates reports.",
        difficulty: "Beginner",
        technologies: ["Python", "CSV handling", "Data analysis"],
      },
      {
        title: "Image Pixel Manipulator",
        description:
          "Build an application that loads images into 2D arrays and applies filters like blur, sharpen, and color adjustments.",
        difficulty: "Intermediate",
        technologies: ["Python/OpenCV", "NumPy", "Image processing"],
      },
      {
        title: "Stock Market Data Analyzer",
        description:
          "Develop a tool that stores historical stock prices in arrays and implements technical indicators like moving averages.",
        difficulty: "Advanced",
        technologies: ["JavaScript/Python", "APIs", "Data visualization"],
      },
      {
        title: "Game Leaderboard System",
        description:
          "Create a leaderboard that maintains player scores in sorted arrays with efficient insertion and ranking algorithms.",
        difficulty: "Intermediate",
        technologies: ["Java/C++", "Sorting algorithms", "File I/O"],
      },
    ],
  },
};

export default function EnhancedArrayPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedArrayIndex, setSelectedArrayIndex] = useState(0);
  const [arrayValues, setArrayValues] = useState([10, 20, 30, 40, 50]);
  const [inputValue, setInputValue] = useState("");
  const [arrayDimension, setArrayDimension] = useState("1d");
  const [animatingIndex, setAnimatingIndex] = useState(-1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  
  // 2D Array state
  const [array2D, setArray2D] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]);
  const [selected2DIndex, setSelected2DIndex] = useState({ row: 0, col: 0 });
  
  // 3D Array state - simplified visualization
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

  const update2DArray = (row, col, value) => {
    const newArray = array2D.map((r, i) => 
      r.map((c, j) => (i === row && j === col) ? value : c)
    );
    setArray2D(newArray);
  };

  const update3DArray = (depth, row, col, value) => {
    const newArray = array3D.map((d, i) =>
      d.map((r, j) =>
        r.map((c, k) => (i === depth && j === row && k === col) ? value : c)
      )
    );
    setArray3D(newArray);
  };

  const ArrayVisualization1D = () => (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-800 dark:text-blue-200">
        1D Array - Linear Structure
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
              className={`w-20 h-20 rounded-lg shadow-lg border-3 flex items-center justify-center transition-all duration-300 ${
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

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
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
    </div>
  );

  const ArrayVisualization2D = () => (
    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-green-800 dark:text-green-200">
        2D Array - Matrix Structure (3×3)
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

      <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
        <p className="text-sm text-green-800 dark:text-green-200">
          <strong>Memory Layout:</strong> Elements stored row by row: arr[0][0], arr[0][1], arr[0][2], arr[1][0]...
        </p>
      </div>
    </div>
  );

  const ArrayVisualization3D = () => (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-purple-800 dark:text-purple-200">
        3D Array - Cube Structure (2×2×2)
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

      <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
        <p className="text-sm text-purple-800 dark:text-purple-200">
          <strong>Memory Layout:</strong> Elements stored layer by layer, then row by row within each layer
        </p>
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

        {/* Array Dimensions Selector */}
        <section>
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🎮 Interactive Array Explorer
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg flex space-x-2">
              {[
                { id: "1d", label: "1D Array", icon: "📊" },
                { id: "2d", label: "2D Array", icon: "🎯" },
                { id: "3d", label: "3D Array", icon: "🧊" }
              ].map((dim) => (
                <button
                  key={dim.id}
                  onClick={() => setArrayDimension(dim.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    arrayDimension === dim.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {dim.icon} {dim.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Array Visualization */}
          {arrayDimension === "1d" && <ArrayVisualization1D />}
          {arrayDimension === "2d" && <ArrayVisualization2D />}
          {arrayDimension === "3d" && <ArrayVisualization3D />}

          {/* 1D Array Controls */}
          {arrayDimension === "1d" && (
            <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-center">Array Operations</h4>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter value"
                  className="px-4 py-3 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleArrayUpdate}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Update [{selectedArrayIndex}]
                  </button>
                  <button
                    onClick={addElement}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Add Element
                  </button>
                  <button
                    onClick={removeElement}
                    className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Remove Last
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Array Types Comparison */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            📐 Array Types Comparison
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 1D Arrays */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-blue-500 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📊</div>
                <h3 className="text-2xl font-bold text-blue-600">1D Arrays</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Use Cases:</h4>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• List of numbers, names, or items</li>
                    <li>• Simple data collections</li>
                    <li>• Linear algorithms</li>
                  </ul>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Declaration:</h4>
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                    int arr[5] = {"{1,2,3,4,5}"};
                  </code>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Access:</h4>
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                    arr[index]
                  </code>
                </div>
              </div>
            </div>

            {/* 2D Arrays */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="text-2xl font-bold text-green-600">2D Arrays</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Use Cases:</h4>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• Matrices and grids</li>
                    <li>• Game boards and maps</li>
                    <li>• Image processing</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Declaration:</h4>
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                    int arr[3][3];
                  </code>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Access:</h4>
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                    arr[row][col]
                  </code>
                </div>
              </div>
            </div>

            {/* 3D Arrays */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-purple-500 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🧊</div>
                <h3 className="text-2xl font-bold text-purple-600">3D Arrays</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Use Cases:</h4>
                  <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>• 3D graphics and modeling</li>
                    <li>• Video processing</li>
                    <li>• Scientific simulations</li>
                  </ul>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Declaration:</h4>
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                    int arr[2][2][2];
                  </code>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Access:</h4>
                  <code className="text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded block">
                    arr[depth][row][col]
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concept Understanding */}
        <section>
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            💡 Understanding Arrays
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-6">
              {sections.concept_understanding}
            </p>
            
            {/* Memory Layout Visualization */}
            <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-l-4 border-indigo-500">
              <h3 className="text-xl font-bold mb-4 text-indigo-800 dark:text-indigo-200">Memory Layout Example</h3>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {arrayValues.slice(0, 5).map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-indigo-200 dark:bg-indigo-700 p-2 rounded text-sm font-mono">
                      {value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      0x{(1000 + index * 4).toString(16)}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-indigo-700 dark:text-indigo-300">
                Each element occupies 4 bytes (for int), stored consecutively in memory
              </p>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            💻 Code Examples
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
            
            {/* Code Display */}
            <div className="p-6">
              <pre className="bg-gray-900 text-green-400 p-6 rounded-xl overflow-x-auto text-sm">
                <code>{sections.code_examples[selectedLanguage]}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            🏢 Industry Applications
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.industry_applications.map((application, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-emerald-500"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {application}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Questions */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
            🎤 Interview Questions
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
            🚀 Project Ideas
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

        {/* Array Complexity Analysis */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
            ⚡ Time & Space Complexity
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-800 dark:text-gray-200">Operation</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">Time Complexity</th>
                    <th className="px-6 py-4 text-center text-lg font-semibold text-gray-800 dark:text-gray-200">Space Complexity</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-800 dark:text-gray-200">Notes</th>
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
                      <td className="px-6 py-4 font-medium text-gray-800 dark:text-gray-200">{row.operation}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-mono ${
                          row.time === "O(1)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                        }`}>
                          {row.time}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 rounded-full text-sm font-mono bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          {row.space}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-sm">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Master Arrays Today! 🚀</h3>
          <p className="text-lg text-gray-300 mb-6">
            Arrays are the foundation of efficient programming. Practice with the interactive examples above!
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