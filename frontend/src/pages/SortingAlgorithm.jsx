import React, { useState, useEffect, useCallback } from "react";

const sortingData = {
  topic: "Sorting Algorithms",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Imagine you're organizing thousands of books in a library, arranging students by height for a photo, or Netflix sorting millions of movies by your preferences. Sorting algorithms are the invisible heroes that bring order to chaos! From the simple elegance of Bubble Sort to the lightning-fast efficiency of Quick Sort, these algorithms transform jumbled data into perfectly organized sequences. Every time you see a leaderboard, search results, or even your phone's contact list, sorting algorithms are working behind the scenes to make your digital life seamless!",

    // Bubble Sort Content
    bubbleSort: {
      concept:
        "Bubble Sort is like arranging cards in your hand - you compare adjacent cards and swap them if they're in the wrong order. The largest element 'bubbles up' to the end after each pass, just like air bubbles rising to the surface of water.",
      realWorldExample:
        "Think of students lining up by height - the teacher asks adjacent students to swap positions if the taller one is in front, repeating until everyone is in order!",
      industry_applications: [
        "🎓 Educational - Teaching sorting concepts to beginners",
        "📊 Small datasets - Simple implementation for tiny lists",
        "🔧 Debugging - Easy to trace and understand step-by-step",
        "📱 Embedded systems - Memory-constrained environments",
        "🎮 Game development - Simple leaderboard sorting",
        "📋 Form validation - Sorting small user input lists",
      ],
      timeComplexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)"
      },
      spaceComplexity: "O(1)",
      advantages: [
        "🧩 Simple implementation and understanding",
        "💾 In-place sorting (O(1) space)",
        "✅ Stable sorting algorithm",
        "🔍 Adaptive for nearly sorted data",
      ],
      disadvantages: [
        "🐌 Poor time complexity O(n²)",
        "📈 Inefficient for large datasets",
        "🔄 Many unnecessary comparisons",
        "⏱️ Not suitable for real-time applications",
      ],
    },

    // Quick Sort Content
    quickSort: {
      concept:
        "Quick Sort uses a 'divide and conquer' approach - pick a pivot element, partition the array so smaller elements go left and larger ones go right, then recursively sort both sides. It's like organizing a tournament bracket!",
      realWorldExample:
        "Imagine organizing a basketball tournament - you pick a reference team, put weaker teams on one side and stronger teams on the other, then repeat for each group!",
      industry_applications: [
        "🗄️ Database systems - Query result sorting",
        "🔍 Search engines - Ranking search results",
        "📊 Big data - Distributed sorting systems",
        "💰 Financial systems - Transaction processing",
        "🎮 Gaming - Player ranking and matchmaking",
        "📈 Analytics - Data preprocessing pipelines",
      ],
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n²)"
      },
      spaceComplexity: "O(log n)",
      advantages: [
        "⚡ Excellent average performance O(n log n)",
        "💾 In-place sorting with minimal extra space",
        "🎯 Cache-efficient due to good locality",
        "🔧 Highly optimizable with good pivot selection",
      ],
      disadvantages: [
        "📉 Worst case O(n²) with bad pivot",
        "🔄 Not stable (relative order may change)",
        "📚 Recursive implementation uses stack space",
        "🎲 Performance depends on pivot selection",
      ],
    },

    // Merge Sort Content
    mergeSort: {
      concept:
        "Merge Sort divides the array into smaller subarrays, sorts them individually, then merges them back together in sorted order. It's like sorting two decks of cards separately, then shuffling them together in order.",
      realWorldExample:
        "Think of organizing a massive library - you divide books into sections, sort each section separately, then merge them back maintaining alphabetical order!",
      industry_applications: [
        "📊 External sorting - Large datasets that don't fit in memory",
        "🔗 Linked list sorting - Natural fit for linked structures",
        "🌐 Distributed systems - Parallel sorting algorithms",
        "🎵 Audio processing - Stable sorting for time-series data",
        "📈 Financial modeling - Maintaining chronological order",
        "🧬 Bioinformatics - DNA sequence analysis",
      ],
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)"
      },
      spaceComplexity: "O(n)",
      advantages: [
        "⚖️ Consistent O(n log n) performance",
        "✅ Stable sorting algorithm",
        "🔄 Excellent for linked lists",
        "📊 Predictable performance",
      ],
      disadvantages: [
        "💾 Requires O(n) additional space",
        "🔧 More complex implementation",
        "📈 Not adaptive to existing order",
        "🎯 Overhead for small arrays",
      ],
    },

    // Selection Sort Content
    selectionSort: {
      concept:
        "Selection Sort finds the smallest element and places it at the beginning, then finds the next smallest for the second position, and so on. It's like picking the best players for your team one by one.",
      realWorldExample:
        "Imagine choosing the shortest person first, then the next shortest, and so on until everyone is arranged by height!",
      industry_applications: [
        "🎓 Educational purposes - Understanding sorting fundamentals",
        "💾 Memory-constrained systems - Minimal space overhead",
        "🔧 Simple embedded systems - Easy implementation",
        "📋 Small dataset sorting - When simplicity matters",
        "🎮 Retro game development - Classic algorithm implementations",
        "📊 Data visualization - Step-by-step demonstration",
      ],
      timeComplexity: {
        best: "O(n²)",
        average: "O(n²)",
        worst: "O(n²)"
      },
      spaceComplexity: "O(1)",
      advantages: [
        "🧩 Simple implementation",
        "💾 In-place sorting (O(1) space)",
        "🔢 Minimum number of swaps",
        "🎯 Performs well on small arrays",
      ],
      disadvantages: [
        "🐌 Poor time complexity O(n²)",
        "❌ Not stable",
        "🔄 Not adaptive to input",
        "📈 Inefficient for large datasets",
      ],
    },

    code_examples: {
      javascript: `// JavaScript Sorting Algorithms - Complete Implementation

class SortingAlgorithms {
    constructor() {
        this.comparisons = 0;
        this.swaps = 0;
        this.steps = [];
    }

    // Reset counters for new sort
    resetCounters() {
        this.comparisons = 0;
        this.swaps = 0;
        this.steps = [];
    }

    // Bubble Sort Implementation
    bubbleSort(arr) {
        this.resetCounters();
        const array = [...arr];
        const n = array.length;
        
        console.log('🫧 Starting Bubble Sort...');
        this.steps.push(\`Initial array: [\${array.join(', ')}]\`);
        
        for (let i = 0; i < n - 1; i++) {
            let swapped = false;
            console.log(\`\\n--- Pass \${i + 1} ---\`);
            
            for (let j = 0; j < n - i - 1; j++) {
                this.comparisons++;
                
                if (array[j] > array[j + 1]) {
                    // Swap elements
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    this.swaps++;
                    swapped = true;
                    
                    const step = \`Swapped \${array[j + 1]} and \${array[j]}: [\${array.join(', ')}]\`;
                    console.log(step);
                    this.steps.push(step);
                }
            }
            
            if (!swapped) {
                console.log('✅ Array is sorted early!');
                break;
            }
        }
        
        console.log(\`\\n🎉 Bubble Sort Complete!\`);
        console.log(\`📊 Comparisons: \${this.comparisons}, Swaps: \${this.swaps}\`);
        return array;
    }

    // Quick Sort Implementation
    quickSort(arr, low = 0, high = arr.length - 1) {
        if (low === 0 && high === arr.length - 1) {
            this.resetCounters();
            console.log('⚡ Starting Quick Sort...');
            this.steps.push(\`Initial array: [\${arr.join(', ')}]\`);
        }
        
        if (low < high) {
            const pi = this.partition(arr, low, high);
            
            // Recursively sort elements before and after partition
            this.quickSort(arr, low, pi - 1);
            this.quickSort(arr, pi + 1, high);
        }
        
        if (low === 0 && high === arr.length - 1) {
            console.log(\`\\n🎉 Quick Sort Complete!\`);
            console.log(\`📊 Comparisons: \${this.comparisons}, Swaps: \${this.swaps}\`);
        }
        
        return arr;
    }

    partition(arr, low, high) {
        const pivot = arr[high]; // Choose last element as pivot
        let i = low - 1; // Index of smaller element
        
        console.log(\`\\n🎯 Partitioning with pivot: \${pivot}\`);
        
        for (let j = low; j < high; j++) {
            this.comparisons++;
            
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                this.swaps++;
                
                const step = \`Moved \${arr[i]} to left of pivot: [\${arr.join(', ')}]\`;
                console.log(step);
                this.steps.push(step);
            }
        }
        
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        this.swaps++;
        
        const step = \`Placed pivot \${pivot} at position \${i + 1}: [\${arr.join(', ')}]\`;
        console.log(step);
        this.steps.push(step);
        
        return i + 1;
    }

    // Merge Sort Implementation
    mergeSort(arr, start = 0, end = arr.length - 1) {
        if (start === 0 && end === arr.length - 1) {
            this.resetCounters();
            console.log('🔀 Starting Merge Sort...');
            this.steps.push(\`Initial array: [\${arr.join(', ')}]\`);
        }
        
        if (start < end) {
            const mid = Math.floor((start + end) / 2);
            
            // Divide
            this.mergeSort(arr, start, mid);
            this.mergeSort(arr, mid + 1, end);
            
            // Conquer
            this.merge(arr, start, mid, end);
        }
        
        if (start === 0 && end === arr.length - 1) {
            console.log(\`\\n🎉 Merge Sort Complete!\`);
            console.log(\`📊 Comparisons: \${this.comparisons}\`);
        }
        
        return arr;
    }

    merge(arr, start, mid, end) {
        const left = arr.slice(start, mid + 1);
        const right = arr.slice(mid + 1, end + 1);
        
        let i = 0, j = 0, k = start;
        
        console.log(\`\\n🔗 Merging [\${left.join(', ')}] and [\${right.join(', ')}]\`);
        
        while (i < left.length && j < right.length) {
            this.comparisons++;
            
            if (left[i] <= right[j]) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }
        
        // Copy remaining elements
        while (i < left.length) {
            arr[k] = left[i];
            i++;
            k++;
        }
        
        while (j < right.length) {
            arr[k] = right[j];
            j++;
            k++;
        }
        
        const step = \`Merged result: [\${arr.slice(start, end + 1).join(', ')}]\`;
        console.log(step);
        this.steps.push(step);
    }

    // Selection Sort Implementation
    selectionSort(arr) {
        this.resetCounters();
        const array = [...arr];
        const n = array.length;
        
        console.log('🎯 Starting Selection Sort...');
        this.steps.push(\`Initial array: [\${array.join(', ')}]\`);
        
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            
            // Find minimum element in remaining array
            for (let j = i + 1; j < n; j++) {
                this.comparisons++;
                
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Swap if needed
            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
                this.swaps++;
                
                const step = \`Selected \${array[i]} as minimum, swapped: [\${array.join(', ')}]\`;
                console.log(step);
                this.steps.push(step);
            }
            
            console.log(\`Position \${i} sorted: \${array[i]}\`);
        }
        
        console.log(\`\\n🎉 Selection Sort Complete!\`);
        console.log(\`📊 Comparisons: \${this.comparisons}, Swaps: \${this.swaps}\`);
        return array;
    }

    // Performance comparison
    compareAlgorithms(arr) {
        const algorithms = [
            { name: 'Bubble Sort', fn: (a) => this.bubbleSort([...a]) },
            { name: 'Selection Sort', fn: (a) => this.selectionSort([...a]) },
            { name: 'Quick Sort', fn: (a) => this.quickSort([...a]) },
            { name: 'Merge Sort', fn: (a) => this.mergeSort([...a]) }
        ];
        
        console.log('\\n🏁 Performance Comparison Results:');
        console.log('=====================================');
        
        algorithms.forEach(algo => {
            const startTime = performance.now();
            algo.fn(arr);
            const endTime = performance.now();
            
            console.log(\`\${algo.name}:\`);
            console.log(\`  ⏱️  Time: \${(endTime - startTime).toFixed(2)}ms\`);
            console.log(\`  🔍 Comparisons: \${this.comparisons}\`);
            console.log(\`  🔄 Swaps: \${this.swaps || 'N/A'}\`);
            console.log('');
        });
    }
}

// Demo usage
const sorter = new SortingAlgorithms();
const testArray = [64, 34, 25, 12, 22, 11, 90, 5];

console.log('🎲 Test Array:', testArray);
console.log('\\n' + '='.repeat(50));

// Test each algorithm
console.log('Testing Bubble Sort:');
sorter.bubbleSort([...testArray]);

console.log('\\n' + '='.repeat(50));
console.log('Testing Quick Sort:');
sorter.quickSort([...testArray]);

console.log('\\n' + '='.repeat(50));
console.log('Testing Merge Sort:');
sorter.mergeSort([...testArray]);

console.log('\\n' + '='.repeat(50));
console.log('Testing Selection Sort:');
sorter.selectionSort([...testArray]);

// Performance comparison
console.log('\\n' + '='.repeat(50));
sorter.compareAlgorithms(testArray);`,

      python: `# Python Sorting Algorithms - Educational Implementation
import time
import random

class SortingVisualizer:
    def __init__(self):
        self.comparisons = 0
        self.swaps = 0
        self.steps = []
        
    def reset_counters(self):
        """Reset performance counters for new sorting operation"""
        self.comparisons = 0
        self.swaps = 0
        self.steps = []
        
    def bubble_sort(self, arr):
        """
        Bubble Sort: O(n²) time, O(1) space
        Best for: Educational purposes, small datasets
        """
        self.reset_counters()
        array = arr.copy()
        n = len(array)
        
        print("🫧 Starting Bubble Sort...")
        self.steps.append(f"Initial: {array}")
        
        for i in range(n - 1):
            swapped = False
            print(f"\\n--- Pass {i + 1} ---")
            
            for j in range(n - i - 1):
                self.comparisons += 1
                
                if array[j] > array[j + 1]:
                    array[j], array[j + 1] = array[j + 1], array[j]
                    self.swaps += 1
                    swapped = True
                    
                    step = f"Swapped {array[j + 1]} <-> {array[j]}: {array}"
                    print(f"  {step}")
                    self.steps.append(step)
            
            if not swapped:
                print("✅ Early termination - array is sorted!")
                break
                
        self._print_results("Bubble Sort", array)
        return array
        
    def selection_sort(self, arr):
        """
        Selection Sort: O(n²) time, O(1) space
        Best for: Minimal swaps required, small datasets
        """
        self.reset_counters()
        array = arr.copy()
        n = len(array)
        
        print("🎯 Starting Selection Sort...")
        self.steps.append(f"Initial: {array}")
        
        for i in range(n - 1):
            min_idx = i
            
            # Find minimum element
            for j in range(i + 1, n):
                self.comparisons += 1
                if array[j] < array[min_idx]:
                    min_idx = j
            
            # Swap if needed
            if min_idx != i:
                array[i], array[min_idx] = array[min_idx], array[i]
                self.swaps += 1
                
                step = f"Selected min {array[i]} from position {min_idx}: {array}"
                print(f"  {step}")
                self.steps.append(step)
                
            print(f"Position {i} sorted with value: {array[i]}")
            
        self._print_results("Selection Sort", array)
        return array
        
    def quick_sort(self, arr, low=0, high=None):
        """
        Quick Sort: O(n log n) average, O(n²) worst case
        Best for: General purpose, large datasets
        """
        if high is None:
            high = len(arr) - 1
            self.reset_counters()
            print("⚡ Starting Quick Sort...")
            self.steps.append(f"Initial: {arr}")
            
        if low < high:
            pivot_idx = self._partition(arr, low, high)
            
            # Recursively sort left and right subarrays
            self.quick_sort(arr, low, pivot_idx - 1)
            self.quick_sort(arr, pivot_idx + 1, high)
            
        if low == 0 and high == len(arr) - 1:
            self._print_results("Quick Sort", arr)
            
        return arr
        
    def _partition(self, arr, low, high):
        """Partition function for Quick Sort using last element as pivot"""
        pivot = arr[high]
        i = low - 1
        
        print(f"\\n🎯 Partitioning with pivot: {pivot}")
        
        for j in range(low, high):
            self.comparisons += 1
            
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
                self.swaps += 1
                
                step = f"Moved {arr[i]} left of pivot: {arr[low:high+1]}"
                print(f"  {step}")
                
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        self.swaps += 1
        
        step = f"Pivot {pivot} placed at index {i + 1}: {arr[low:high+1]}"
        print(f"  {step}")
        self.steps.append(step)
        
        return i + 1
        
    def merge_sort(self, arr, left=0, right=None):
        """
        Merge Sort: O(n log n) time, O(n) space
        Best for: Stable sorting, linked lists, large datasets
        """
        if right is None:
            right = len(arr) - 1
            self.reset_counters()
            print("🔀 Starting Merge Sort...")
            self.steps.append(f"Initial: {arr}")
            
        if left < right:
            mid = (left + right) // 2
            
            # Divide
            self.merge_sort(arr, left, mid)
            self.merge_sort(arr, mid + 1, right)
            
            # Conquer
            self._merge(arr, left, mid, right)
            
        if left == 0 and right == len(arr) - 1:
            self._print_results("Merge Sort", arr)
            
        return arr
        
    def _merge(self, arr, left, mid, right):
        """Merge function for Merge Sort"""
        left_arr = arr[left:mid + 1]
        right_arr = arr[mid + 1:right + 1]
        
        i = j = 0
        k = left
        
        print(f"\\n🔗 Merging {left_arr} and {right_arr}")
        
        while i < len(left_arr) and j < len(right_arr):
            self.comparisons += 1
            
            if left_arr[i] <= right_arr[j]:
                arr[k] = left_arr[i]
                i += 1
            else:
                arr[k] = right_arr[j]
                j += 1
            k += 1
            
        # Copy remaining elements
        while i < len(left_arr):
            arr[k] = left_arr[i]
            i += 1
            k += 1
            
        while j < len(right_arr):
            arr[k] = right_arr[j]
            j += 1
            k += 1
            
        step = f"Merged: {arr[left:right + 1]}"
        print(f"  {step}")
        self.steps.append(step)
        
    def _print_results(self, algorithm, array):
        """Print sorting results and statistics"""
        print(f"\\n🎉 {algorithm} Complete!")
        print(f"📊 Final array: {array}")
        print(f"📈 Statistics:")
        print(f"   🔍 Comparisons: {self.comparisons}")
        print(f"   🔄 Swaps: {self.swaps}")
        print(f"   📏 Array length: {len(array)}")
        
    def performance_analysis(self, sizes=[10, 50, 100, 500]):
        """Analyze performance across different input sizes"""
        print("\\n📊 Performance Analysis")
        print("=" * 60)
        
        algorithms = [
            ("Bubble Sort", self.bubble_sort),
            ("Selection Sort", self.selection_sort),
            ("Quick Sort", lambda arr: self.quick_sort(arr.copy())),
            ("Merge Sort", lambda arr: self.merge_sort(arr.copy()))
        ]
        
        for size in sizes:
            print(f"\\n📏 Array Size: {size}")
            test_array = [random.randint(1, 1000) for _ in range(size)]
            
            for name, algorithm in algorithms:
                start_time = time.time()
                algorithm(test_array.copy())
                end_time = time.time()
                
                print(f"  {name:15}: {(end_time - start_time)*1000:.2f}ms "
                      f"(Comparisons: {self.comparisons}, Swaps: {self.swaps})")

# Demo and testing
if __name__ == "__main__":
    sorter = SortingVisualizer()
    
    # Test data
    test_arrays = [
        [64, 34, 25, 12, 22, 11, 90, 5],
        [5, 2, 8, 1, 9],
        [1, 2, 3, 4, 5],  # Already sorted
        [5, 4, 3, 2, 1],  # Reverse sorted
    ]
    
    for i, arr in enumerate(test_arrays):
        print(f"\\n{'='*60}")
        print(f"🎲 Test Case {i + 1}: {arr}")
        print(f"{'='*60}")
        
        # Test each algorithm
        print("\\n" + "-" * 30)
        sorter.bubble_sort(arr.copy())
        
        print("\\n" + "-" * 30)
        sorter.selection_sort(arr.copy())
        
        print("\\n" + "-" * 30)
        sorter.quick_sort(arr.copy())
        
        print("\\n" + "-" * 30)
        sorter.merge_sort(arr.copy())
        
    # Performance analysis
    print("\\n" + "=" * 60)
    sorter.performance_analysis()`,

      java: `// Java Sorting Algorithms - Enterprise Implementation
import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

public class SortingAlgorithms {
    private int comparisons;
    private int swaps;
    private List<String> steps;
    
    public SortingAlgorithms() {
        this.comparisons = 0;
        this.swaps = 0;
        this.steps = new ArrayList<>();
    }
    
    // Reset counters for new sorting operation
    private void resetCounters() {
        this.comparisons = 0;
        this.swaps = 0;
        this.steps.clear();
    }
    
    /**
     * Bubble Sort: O(n²) time complexity, O(1) space complexity
     * Best for: Educational purposes, small datasets
     * Stable: Yes, In-place: Yes
     */
    public int[] bubbleSort(int[] arr) {
        resetCounters();
        int[] array = arr.clone();
        int n = array.length;
        
        System.out.println("🫧 Starting Bubble Sort...");
        steps.add("Initial array: " + Arrays.toString(array));
        
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            System.out.printf("\\n--- Pass %d ---%n", i + 1);
            
            for (int j = 0; j < n - i - 1; j++) {
                comparisons++;
                
                if (array[j] > array[j + 1]) {
                    // Swap elements
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swaps++;
                    swapped = true;
                    
                    String step = String.format("Swapped %d and %d: %s", 
                        array[j], array[j + 1], Arrays.toString(array));
                    System.out.println("  " + step);
                    steps.add(step);
                }
            }
            
            if (!swapped) {
                System.out.println("✅ Array sorted early!");
                break;
            }
        }
        
        printResults("Bubble Sort", array);
        return array;
    }
    
    /**
     * Selection Sort: O(n²) time complexity, O(1) space complexity
     * Best for: Minimizing swaps, small datasets
     * Stable: No, In-place: Yes
     */
    public int[] selectionSort(int[] arr) {
        resetCounters();
        int[] array = arr.clone();
        int n = array.length;
        
        System.out.println("🎯 Starting Selection Sort...");
        steps.add("Initial array: " + Arrays.toString(array));
        
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            
            // Find minimum element in remaining array
            for (int j = i + 1; j < n; j++) {
                comparisons++;
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Swap if minimum is not at current position
            if (minIndex != i) {
                int temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
                swaps++;
                
                String step = String.format("Selected minimum %d from position %d: %s",
                    array[i], minIndex, Arrays.toString(array));
                System.out.println("  " + step);
                steps.add(step);
            }
            
            System.out.printf("Position %d sorted with value: %d%n", i, array[i]);
        }
        
        printResults("Selection Sort", array);
        return array;
    }
    
    /**
     * Quick Sort: O(n log n) average, O(n²) worst case
     * Best for: General purpose, large datasets
     * Stable: No, In-place: Yes
     */
    public int[] quickSort(int[] arr) {
        resetCounters();
        int[] array = arr.clone();
        
        System.out.println("⚡ Starting Quick Sort...");
        steps.add("Initial array: " + Arrays.toString(array));
        
        quickSortRecursive(array, 0, array.length - 1);
        printResults("Quick Sort", array);
        return array;
    }
    
    private void quickSortRecursive(int[] arr, int low, int high) {
        if (low < high) {
            int pivotIndex = partition(arr, low, high);
            
            // Recursively sort left and right subarrays
            quickSortRecursive(arr, low, pivotIndex - 1);
            quickSortRecursive(arr, pivotIndex + 1, high);
        }
    }
    
    private int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // Choose last element as pivot
        int i = low - 1; // Index of smaller element
        
        System.out.printf("%n🎯 Partitioning with pivot: %d%n", pivot);
        
        for (int j = low; j < high; j++) {
            comparisons++;
            
            if (arr[j] < pivot) {
                i++;
                // Swap elements
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                swaps++;
                
                String step = String.format("Moved %d to left of pivot: %s",
                    arr[i], Arrays.toString(Arrays.copyOfRange(arr, low, high + 1)));
                System.out.println("  " + step);
            }
        }
        
        // Place pivot in correct position
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        swaps++;
        
        String step = String.format("Placed pivot %d at position %d: %s",
            pivot, i + 1, Arrays.toString(Arrays.copyOfRange(arr, low, high + 1)));
        System.out.println("  " + step);
        steps.add(step);
        
        return i + 1;
    }
    
    /**
     * Merge Sort: O(n log n) time complexity, O(n) space complexity
     * Best for: Stable sorting, linked lists, predictable performance
     * Stable: Yes, In-place: No
     */
    public int[] mergeSort(int[] arr) {
        resetCounters();
        int[] array = arr.clone();
        
        System.out.println("🔀 Starting Merge Sort...");
        steps.add("Initial array: " + Arrays.toString(array));
        
        mergeSortRecursive(array, 0, array.length - 1);
        printResults("Merge Sort", array);
        return array;
    }
    
    private void mergeSortRecursive(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            // Divide
            mergeSortRecursive(arr, left, mid);
            mergeSortRecursive(arr, mid + 1, right);
            
            // Conquer
            merge(arr, left, mid, right);
        }
    }
    
    private void merge(int[] arr, int left, int mid, int right) {
        // Create temporary arrays for left and right subarrays
        int[] leftArray = Arrays.copyOfRange(arr, left, mid + 1);
        int[] rightArray = Arrays.copyOfRange(arr, mid + 1, right + 1);
        
        System.out.printf("%n🔗 Merging %s and %s%n", 
            Arrays.toString(leftArray), Arrays.toString(rightArray));
        
        int i = 0, j = 0, k = left;
        
        // Merge the temporary arrays back into arr[left..right]
        while (i < leftArray.length && j < rightArray.length) {
            comparisons++;
            
            if (leftArray[i] <= rightArray[j]) {
                arr[k] = leftArray[i];
                i++;
            } else {
                arr[k] = rightArray[j];
                j++;
            }
            k++;
        }
        
        // Copy remaining elements
        while (i < leftArray.length) {
            arr[k] = leftArray[i];
            i++;
            k++;
        }
        
        while (j < rightArray.length) {
            arr[k] = rightArray[j];
            j++;
            k++;
        }
        
        String step = String.format("Merged result: %s", 
            Arrays.toString(Arrays.copyOfRange(arr, left, right + 1)));
        System.out.println("  " + step);
        steps.add(step);
    }
    
    // Print results and statistics
    private void printResults(String algorithm, int[] array) {
        System.out.printf("%n🎉 %s Complete!%n", algorithm);
        System.out.println("📊 Final array: " + Arrays.toString(array));
        System.out.println("📈 Statistics:");
        System.out.printf("   🔍 Comparisons: %d%n", comparisons);
        System.out.printf("   🔄 Swaps: %d%n", swaps);
        System.out.printf("   📏 Array length: %d%n", array.length);
    }
    
    // Performance analysis method
    public void performanceAnalysis(int[] sizes) {
        System.out.println("\n📊 Performance Analysis");
        System.out.println("=".repeat(60));
        
        Map<String, java.util.function.Function<int[], int[]>> algorithms = new LinkedHashMap<>();
        algorithms.put("Bubble Sort", this::bubbleSort);
        algorithms.put("Selection Sort", this::selectionSort);
        algorithms.put("Quick Sort", this::quickSort);
        algorithms.put("Merge Sort", this::mergeSort);
        
        for (int size : sizes) {
            System.out.printf("%n📏 Array Size: %d%n", size);
            
            // Generate random test array
            int[] testArray = ThreadLocalRandom.current()
                .ints(size, 1, 1001)
                .toArray();
            
            algorithms.forEach((name, algorithm) -> {
                long startTime = System.nanoTime();
                algorithm.apply(testArray.clone());
                long endTime = System.nanoTime();
                
                double timeMs = (endTime - startTime) / 1_000_000.0;
                System.out.printf("  %-15s: %8.2fms (Comparisons: %d, Swaps: %d)%n",
                    name, timeMs, comparisons, swaps);
            });
        }
    }
    
    // Utility method to check if array is sorted
    public static boolean isSorted(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        return true;
    }
    
    // Demo and testing
    public static void main(String[] args) {
        SortingAlgorithms sorter = new SortingAlgorithms();
        
        // Test datasets
        int[][] testArrays = {
            {64, 34, 25, 12, 22, 11, 90, 5},
            {5, 2, 8, 1, 9},
            {1, 2, 3, 4, 5}, // Already sorted
            {5, 4, 3, 2, 1}  // Reverse sorted
        };
        
        for (int i = 0; i < testArrays.length; i++) {
            System.out.println("=".repeat(60));
            System.out.printf("🎲 Test Case %d: %s%n", i + 1, Arrays.toString(testArrays[i]));
            System.out.println("=".repeat(60));
            
            // Test each algorithm
            System.out.println("\n" + "-".repeat(30));
            int[] result1 = sorter.bubbleSort(testArrays[i]);
            System.out.printf("✅ Correctly sorted: %s%n", isSorted(result1));
            
            System.out.println("\n" + "-".repeat(30));
            int[] result2 = sorter.selectionSort(testArrays[i]);
            System.out.printf("✅ Correctly sorted: %s%n", isSorted(result2));
            
            System.out.println("\n" + "-".repeat(30));
            int[] result3 = sorter.quickSort(testArrays[i]);
            System.out.printf("✅ Correctly sorted: %s%n", isSorted(result3));
            
            System.out.println("\n" + "-".repeat(30));
            int[] result4 = sorter.mergeSort(testArrays[i]);
            System.out.printf("✅ Correctly sorted: %s%n", isSorted(result4));
        }
        
        // Performance analysis
        System.out.println("\n" + "=".repeat(60));
        sorter.performanceAnalysis(new int[]{10, 50, 100, 500});
    }
}`,
    },

    interview_questions: [
      {
        question: "What is the difference between stable and unstable sorting algorithms?",
        answer:
          "Stable sorting preserves the relative order of equal elements. For example, if you have two cards with value 5, a stable sort keeps them in their original relative positions. Merge Sort is stable, while Quick Sort is unstable.",
        difficulty: "Medium",
      },
      {
        question: "When would you choose Quick Sort over Merge Sort?",
        answer:
          "Choose Quick Sort when memory is limited (in-place O(log n) vs O(n)), for better cache performance, and when average-case performance matters more than worst-case. Choose Merge Sort for guaranteed O(n log n) performance and when stability is required.",
        difficulty: "Hard",
      },
      {
        question: "What is the time complexity of Bubble Sort in the best case?",
        answer:
          "O(n) in the best case when the array is already sorted, because the optimized version can detect no swaps occurred in the first pass and terminate early.",
        difficulty: "Easy",
      },
      {
        question: "How can you optimize Quick Sort to avoid O(n²) worst case?",
        answer:
          "Use random pivot selection, three-way partitioning for duplicate elements, median-of-three pivot selection, or hybrid approaches like Introsort that switch to Heap Sort when recursion depth exceeds a threshold.",
        difficulty: "Hard",
      },
      {
        question: "Why is Merge Sort preferred for sorting linked lists?",
        answer:
          "Merge Sort doesn't require random access to elements - it only needs sequential access and merging, which are natural operations for linked lists. It also doesn't need extra space for arrays since it works with pointers.",
        difficulty: "Medium",
      },
    ],

    project_ideas: [
      {
        title: "Sorting Algorithm Visualizer",
        description:
          "Build an interactive web application that visualizes different sorting algorithms in real-time with bars, colors, and animations. Include speed controls, step-by-step mode, and performance comparisons.",
        difficulty: "Intermediate",
        technologies: ["React/Vue.js", "D3.js", "Canvas API", "CSS Animations"],
      },
      {
        title: "Custom Sort Performance Benchmark",
        description:
          "Create a comprehensive benchmarking tool that tests sorting algorithms across different data types, sizes, and patterns (random, sorted, reverse-sorted, nearly-sorted).",
        difficulty: "Advanced",
        technologies: ["Python/Java", "Matplotlib", "Statistics", "Memory profiling"],
      },
      {
        title: "Sorting Algorithm Game",
        description:
          "Develop a game where players manually sort elements to learn algorithms. Include challenges, leaderboards, and educational modes for different sorting techniques.",
        difficulty: "Beginner",
        technologies: ["JavaScript", "HTML5 Canvas", "Local Storage", "Game Design"],
      },
      {
        title: "Distributed Sorting System",
        description:
          "Implement a distributed sorting system that can handle massive datasets across multiple machines using external sorting and map-reduce principles.",
        difficulty: "Expert",
        technologies: ["Apache Spark", "Hadoop", "Distributed Systems", "Big Data"],
      },
    ],
  },
};

// Syntax highlighting function (reused from Array.jsx)
const highlightSyntax = (code, language) => {
  const keywords = {
    c: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'printf', 'include', 'main'],
    cpp: ['int', 'float', 'double', 'char', 'void', 'return', 'if', 'else', 'for', 'while', 'cout', 'cin', 'using', 'namespace', 'std', 'include', 'main', 'string'],
    java: ['public', 'private', 'static', 'void', 'int', 'double', 'String', 'class', 'return', 'if', 'else', 'for', 'while', 'System', 'main', 'println', 'printf'],
    python: ['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'import', 'from', 'class', 'print', 'len', 'range', 'True', 'False', 'None'],
    javascript: ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while', 'class', 'this', 'console', 'log', 'true', 'false', 'null', 'undefined']
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

export default function SortingAlgorithm() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubbleSort");
  const [arrayValues, setArrayValues] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [sortingSteps, setSortingSteps] = useState([]);
  const [sortStats, setSortStats] = useState({ comparisons: 0, swaps: 0, time: 0 });
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [animatingIndices, setAnimatingIndices] = useState([]);

  const { topic, category, sections } = sortingData;
  const languages = ["javascript", "python", "java"];
  const algorithms = ["bubbleSort", "quickSort", "mergeSort", "selectionSort"];

  // Animation effect for sorting visualization
  useEffect(() => {
    if (animatingIndices.length > 0) {
      const timer = setTimeout(() => setAnimatingIndices([]), 300);
      return () => clearTimeout(timer);
    }
  }, [animatingIndices]);

  // Bubble Sort Implementation with visualization
  const bubbleSort = useCallback((arr) => {
    const steps = [];
    const array = [...arr];
    let comparisons = 0;
    let swaps = 0;
    
    steps.push({ array: [...array], comparing: [], swapping: [], message: "Starting Bubble Sort" });
    
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        comparisons++;
        steps.push({ 
          array: [...array], 
          comparing: [j, j + 1], 
          swapping: [], 
          message: `Comparing ${array[j]} and ${array[j + 1]}` 
        });
        
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swaps++;
          steps.push({ 
            array: [...array], 
            comparing: [], 
            swapping: [j, j + 1], 
            message: `Swapped ${array[j]} and ${array[j + 1]}` 
          });
        }
      }
    }
    
    steps.push({ array: [...array], comparing: [], swapping: [], message: "Bubble Sort Complete!" });
    return { steps, comparisons, swaps };
  }, []);

  // Selection Sort Implementation
  const selectionSort = useCallback((arr) => {
    const steps = [];
    const array = [...arr];
    let comparisons = 0;
    let swaps = 0;
    
    steps.push({ array: [...array], comparing: [], swapping: [], message: "Starting Selection Sort" });
    
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      
      for (let j = i + 1; j < array.length; j++) {
        comparisons++;
        steps.push({ 
          array: [...array], 
          comparing: [minIndex, j], 
          swapping: [], 
          message: `Finding minimum: comparing ${array[minIndex]} and ${array[j]}` 
        });
        
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
        swaps++;
        steps.push({ 
          array: [...array], 
          comparing: [], 
          swapping: [i, minIndex], 
          message: `Swapped ${array[i]} with ${array[minIndex]}` 
        });
      }
    }
    
    steps.push({ array: [...array], comparing: [], swapping: [], message: "Selection Sort Complete!" });
    return { steps, comparisons, swaps };
  }, []);

  const algorithmImplementations = {
    bubbleSort,
    selectionSort,
    quickSort: (arr) => ({ steps: [{ array: [...arr], comparing: [], swapping: [], message: "Quick Sort - Complex visualization" }], comparisons: 0, swaps: 0 }),
    mergeSort: (arr) => ({ steps: [{ array: [...arr], comparing: [], swapping: [], message: "Merge Sort - Complex visualization" }], comparisons: 0, swaps: 0 })
  };

  const runSortingAnimation = async () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentStep(0);
    
    const startTime = performance.now();
    const { steps, comparisons, swaps } = algorithmImplementations[selectedAlgorithm](arrayValues);
    const endTime = performance.now();
    
    setSortingSteps(steps);
    setSortStats({ comparisons, swaps, time: (endTime - startTime).toFixed(2) });
    
    // Animate through steps
    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      setAnimatingIndices([...steps[i].comparing, ...steps[i].swapping]);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    setIsAnimating(false);
  };

  const resetArray = () => {
    setArrayValues([64, 34, 25, 12, 22, 11, 90]);
    setCurrentStep(0);
    setSortingSteps([]);
    setSortStats({ comparisons: 0, swaps: 0, time: 0 });
  };

  const shuffleArray = () => {
    const newArray = [...arrayValues];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setArrayValues(newArray);
    setCurrentStep(0);
    setSortingSteps([]);
  };

  const SortingVisualization = () => {
    const currentArray = sortingSteps.length > 0 ? sortingSteps[currentStep]?.array || arrayValues : arrayValues;
    const currentComparing = sortingSteps.length > 0 ? sortingSteps[currentStep]?.comparing || [] : [];
    const currentSwapping = sortingSteps.length > 0 ? sortingSteps[currentStep]?.swapping || [] : [];
    const currentMessage = sortingSteps.length > 0 ? sortingSteps[currentStep]?.message || "" : "Ready to sort";
    
    return (
      <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-bold mb-6 text-center text-purple-800 dark:text-purple-200">
          🎯 Sorting Algorithm Visualizer
        </h3>
        
        {/* Algorithm Selector */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {algorithms.map((algo) => (
            <button
              key={algo}
              onClick={() => setSelectedAlgorithm(algo)}
              disabled={isAnimating}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedAlgorithm === algo
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600"
              } ${isAnimating ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {algo.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Array Visualization */}
        <div className="flex justify-center items-end gap-2 mb-6 min-h-[200px]">
          {currentArray.map((value, index) => {
            const isComparing = currentComparing.includes(index);
            const isSwapping = currentSwapping.includes(index);
            const isAnimating = animatingIndices.includes(index);
            
            return (
              <div
                key={index}
                className={`transition-all duration-300 flex flex-col items-center ${
                  isAnimating ? "animate-pulse" : ""
                }`}
              >
                <div className="text-xs mb-1 font-mono text-gray-600 dark:text-gray-400">
                  {value}
                </div>
                <div
                  className={`w-8 rounded-t-lg border-2 transition-all duration-300 ${
                    isSwapping
                      ? "bg-red-500 border-red-600 shadow-lg scale-110"
                      : isComparing
                      ? "bg-yellow-500 border-yellow-600 shadow-lg scale-105"
                      : "bg-blue-500 border-blue-600"
                  }`}
                  style={{ height: `${Math.max(value * 2, 20)}px` }}
                ></div>
                <div className="text-xs mt-1 text-gray-500">
                  [{index}]
                </div>
              </div>
            );
          })}
        </div>

        {/* Status Message */}
        <div className="text-center mb-4">
          <p className="text-lg font-medium text-purple-700 dark:text-purple-300">
            {currentMessage}
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={runSortingAnimation}
            disabled={isAnimating}
            className={`px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg ${
              isAnimating ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isAnimating ? "Sorting..." : "Start Sort"}
          </button>
          
          <button
            onClick={shuffleArray}
            disabled={isAnimating}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Shuffle
          </button>
          
          <button
            onClick={resetArray}
            disabled={isAnimating}
            className="px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Reset
          </button>
        </div>

        {/* Statistics */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <span className="text-sm text-gray-500">Comparisons</span>
              <div className="text-2xl font-bold text-purple-600">{sortStats.comparisons}</div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Swaps</span>
              <div className="text-2xl font-bold text-purple-600">{sortStats.swaps}</div>
            </div>
            <div>
              <span className="text-sm text-gray-500">Time (ms)</span>
              <div className="text-2xl font-bold text-purple-600">{sortStats.time}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AlgorithmSection = ({ algorithmKey, algorithmData, colorScheme }) => (
    <section className="mb-16">
      <h2 className={`text-5xl font-bold mb-8 text-center bg-gradient-to-r ${colorScheme.gradient} bg-clip-text text-transparent`}>
        {algorithmKey === 'bubbleSort' && '🫧 Bubble Sort - Simple & Educational'}
        {algorithmKey === 'selectionSort' && '🎯 Selection Sort - Minimal Swaps'}
        {algorithmKey === 'quickSort' && '⚡ Quick Sort - Divide & Conquer'}
        {algorithmKey === 'mergeSort' && '🔀 Merge Sort - Stable & Consistent'}
      </h2>
      
      {/* Concept */}
      <div className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 ${colorScheme.border}`}>
        <h3 className={`text-2xl font-bold mb-4 ${colorScheme.text}`}>💡 Understanding {algorithmKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
          {algorithmData.concept}
        </p>
        <div className={`${colorScheme.bg} p-4 rounded-lg border-l-4 ${colorScheme.border}`}>
          <p className={`${colorScheme.text} font-medium`}>
            <span className="font-bold">Real-world example:</span> {algorithmData.realWorldExample}
          </p>
        </div>
      </div>

      {/* Complexity Analysis */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-blue-500">
          <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">⏱️ Time Complexity</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium">Best Case:</span>
              <span className={`px-2 py-1 rounded text-sm font-mono ${
                algorithmData.timeComplexity.best === "O(n)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                algorithmData.timeComplexity.best.includes("log") ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
              }`}>
                {algorithmData.timeComplexity.best}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Average Case:</span>
              <span className={`px-2 py-1 rounded text-sm font-mono ${
                algorithmData.timeComplexity.average === "O(n)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                algorithmData.timeComplexity.average.includes("log") ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
              }`}>
                {algorithmData.timeComplexity.average}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Worst Case:</span>
              <span className={`px-2 py-1 rounded text-sm font-mono ${
                algorithmData.timeComplexity.worst === "O(n)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                algorithmData.timeComplexity.worst.includes("log") ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
              }`}>
                {algorithmData.timeComplexity.worst}
              </span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-purple-500">
          <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">💾 Space Complexity</h3>
          <div className="text-center">
            <span className={`px-4 py-2 rounded-lg text-lg font-mono ${
              algorithmData.spaceComplexity === "O(1)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
              algorithmData.spaceComplexity.includes("log") ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
              "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
            }`}>
              {algorithmData.spaceComplexity}
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {algorithmData.spaceComplexity === "O(1)" ? "In-place sorting" :
               algorithmData.spaceComplexity === "O(log n)" ? "Recursive stack space" :
               "Additional array space required"}
            </p>
          </div>
        </div>
      </div>

      {/* Advantages & Disadvantages */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
          <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
          <ul className="space-y-3">
            {algorithmData.advantages.map((advantage, index) => (
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
            {algorithmData.disadvantages.map((disadvantage, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Industry Applications */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h3 className={`text-2xl font-bold mb-6 text-center ${colorScheme.text}`}>🏢 Industry Applications</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {algorithmData.industry_applications.map((application, index) => (
            <div
              key={index}
              className={`${colorScheme.bg} p-4 rounded-xl border-l-4 ${colorScheme.border} hover:shadow-lg transition-shadow duration-300`}
            >
              <p className="text-gray-700 dark:text-gray-300">{application}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 text-gray-900 dark:text-white">
      {/* Animated Header */}
      <header className="py-16 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
          <p className="text-xl">{category}</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-white/20 rounded-full">🫧 Bubble Sort</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🎯 Selection Sort</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">⚡ Quick Sort</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🔀 Merge Sort</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Student Hook */}
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🎯 Why Sorting Algorithms Matter
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-purple-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* Interactive Sorting Visualizer */}
        <SortingVisualization />

        {/* Algorithm Sections */}
        <AlgorithmSection 
          algorithmKey="bubbleSort" 
          algorithmData={sections.bubbleSort}
          colorScheme={{
            gradient: "from-blue-600 to-indigo-600",
            border: "border-blue-500",
            text: "text-blue-700 dark:text-blue-300",
            bg: "bg-blue-50 dark:bg-blue-900/20"
          }}
        />

        <AlgorithmSection 
          algorithmKey="selectionSort" 
          algorithmData={sections.selectionSort}
          colorScheme={{
            gradient: "from-green-600 to-emerald-600",
            border: "border-green-500",
            text: "text-green-700 dark:text-green-300",
            bg: "bg-green-50 dark:bg-green-900/20"
          }}
        />

        <AlgorithmSection 
          algorithmKey="quickSort" 
          algorithmData={sections.quickSort}
          colorScheme={{
            gradient: "from-yellow-600 to-orange-600",
            border: "border-yellow-500",
            text: "text-yellow-700 dark:text-yellow-300",
            bg: "bg-yellow-50 dark:bg-yellow-900/20"
          }}
        />

        <AlgorithmSection 
          algorithmKey="mergeSort" 
          algorithmData={sections.mergeSort}
          colorScheme={{
            gradient: "from-indigo-600 to-purple-600",
            border: "border-indigo-500",
            text: "text-indigo-700 dark:text-indigo-300",
            bg: "bg-indigo-50 dark:bg-indigo-900/20"
          }}
        />

        {/* Code Examples */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            💻 Production-Ready Code Examples
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
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Code Display with Syntax Highlighting */}
            <div className="p-6">
              <pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed max-h-96">
                <code 
                  dangerouslySetInnerHTML={{ 
                    __html: highlightSyntax(sections.code_examples[selectedLanguage], selectedLanguage) 
                  }}
                />
              </pre>
            </div>
          </div>
        </section>

        {/* Algorithm Comparison Table */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
            📊 Algorithm Comparison
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <table className="w-full text-xs sm:text-sm md:text-base">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold text-gray-800 dark:text-gray-200">Algorithm</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold text-gray-800 dark:text-gray-200">Best</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold text-gray-800 dark:text-gray-200">Average</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold text-gray-800 dark:text-gray-200">Worst</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold text-gray-800 dark:text-gray-200">Space</th>
                  <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold text-gray-800 dark:text-gray-200">Stable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {[
                  { name: "Bubble Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)", stable: "Yes" },
                  { name: "Selection Sort", best: "O(n²)", avg: "O(n²)", worst: "O(n²)", space: "O(1)", stable: "No" },
                  { name: "Quick Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n²)", space: "O(log n)", stable: "No" },
                  { name: "Merge Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)", space: "O(n)", stable: "Yes" }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                    <td className="px-2 py-2 sm:px-4 sm:py-3 font-medium text-gray-800 dark:text-gray-200">{row.name}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
                      <span className={`px-2 py-1 rounded text-[10px] sm:text-xs font-mono ${
                        row.best === "O(n)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                        row.best.includes("log") ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                        "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      }`}>
                        {row.best}
                      </span>
                    </td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
                      <span className={`px-2 py-1 rounded text-[10px] sm:text-xs font-mono ${
                        row.avg === "O(n)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                        row.avg.includes("log") ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                        "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      }`}>
                        {row.avg}
                      </span>
                    </td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
                      <span className={`px-2 py-1 rounded text-[10px] sm:text-xs font-mono ${
                        row.worst === "O(n)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                        row.worst.includes("log") ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                        "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      }`}>
                        {row.worst}
                      </span>
                    </td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
                      <span className={`px-2 py-1 rounded text-[10px] sm:text-xs font-mono ${
                        row.space === "O(1)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                        row.space.includes("log") ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" :
                        "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                      }`}>
                        {row.space}
                      </span>
                    </td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
                      <span className={`px-2 py-1 rounded text-[10px] sm:text-xs font-medium ${
                        row.stable === "Yes" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
                        "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      }`}>
                        {row.stable}
                      </span>
                    </td>
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
                    project.difficulty === "Advanced" ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300" :
                    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
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
          <h3 className="text-2xl font-bold mb-4">Master Sorting Algorithms Today! 🚀</h3>
          <p className="text-lg text-gray-300 mb-6">
            From simple Bubble Sort to efficient Quick Sort - understanding these algorithms opens doors to efficient programming and system design!
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full">📊 Analyze</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">💻 Implement</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">🎯 Optimize</span>
          </div>
        </div>
      </footer>
    </div>
  );
}