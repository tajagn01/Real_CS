import React, { useState, useEffect } from "react";

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

    code_examples: {
      c: `// C Binary Search Tree Implementation - File System Navigator
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME_LENGTH 256

typedef struct TreeNode {
    int fileSize;
    char fileName[MAX_NAME_LENGTH];
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

typedef struct {
    TreeNode* root;
    int totalFiles;
} FileSystemTree;

// Create new file node
TreeNode* createNode(int size, const char* name) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    node->fileSize = size;
    strcpy(node->fileName, name);
    node->left = node->right = NULL;
    return node;
}

// Insert file into system
TreeNode* insertFile(TreeNode* root, int size, const char* name) {
    if (root == NULL) {
        printf("📁 Created file: %s (%d KB)\\n", name, size);
        return createNode(size, name);
    }
    
    if (size < root->fileSize) {
        root->left = insertFile(root->left, size, name);
    } else if (size > root->fileSize) {
        root->right = insertFile(root->right, size, name);
    } else {
        printf("⚠️  File size %d already exists!\\n", size);
    }
    
    return root;
}

// Search for file by size
TreeNode* searchFile(TreeNode* root, int size) {
    if (root == NULL || root->fileSize == size) {
        return root;
    }
    
    printf("🔍 Checking %s (%d KB)\\n", root->fileName, root->fileSize);
    
    if (size < root->fileSize) {
        return searchFile(root->left, size);
    }
    
    return searchFile(root->right, size);
}

// In-order traversal (sorted by size)
void listFilesSorted(TreeNode* root) {
    if (root != NULL) {
        listFilesSorted(root->left);
        printf("📄 %s: %d KB\\n", root->fileName, root->fileSize);
        listFilesSorted(root->right);
    }
}

// Find minimum file size
TreeNode* findMin(TreeNode* root) {
    while (root && root->left) {
        root = root->left;
    }
    return root;
}

// Delete file by size
TreeNode* deleteFile(TreeNode* root, int size) {
    if (root == NULL) {
        printf("⚠️  File with size %d not found!\\n", size);
        return root;
    }
    
    if (size < root->fileSize) {
        root->left = deleteFile(root->left, size);
    } else if (size > root->fileSize) {
        root->right = deleteFile(root->right, size);
    } else {
        printf("🗑️  Deleted file: %s (%d KB)\\n", root->fileName, root->fileSize);
        
        if (root->left == NULL) {
            TreeNode* temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            TreeNode* temp = root->left;
            free(root);
            return temp;
        }
        
        TreeNode* temp = findMin(root->right);
        root->fileSize = temp->fileSize;
        strcpy(root->fileName, temp->fileName);
        root->right = deleteFile(root->right, temp->fileSize);
    }
    
    return root;
}

int main() {
    TreeNode* fileSystem = NULL;
    
    fileSystem = insertFile(fileSystem, 500, "document.pdf");
    fileSystem = insertFile(fileSystem, 250, "image.jpg");
    fileSystem = insertFile(fileSystem, 750, "video.mp4");
    fileSystem = insertFile(fileSystem, 100, "notes.txt");
    
    printf("\\n📂 Files sorted by size:\\n");
    listFilesSorted(fileSystem);
    
    printf("\\n🔍 Searching for 250 KB file:\\n");
    TreeNode* found = searchFile(fileSystem, 250);
    if (found) {
        printf("✅ Found: %s\\n", found->fileName);
    }
    
    fileSystem = deleteFile(fileSystem, 250);
    
    return 0;
}`,
      cpp: `// C++ Binary Search Tree Implementation - Grade Management System
#include <iostream>
#include <string>
#include <queue>
using namespace std;

struct Student {
    int grade;
    string name;
    Student* left;
    Student* right;
    
    Student(int g, string n) : grade(g), name(n), left(nullptr), right(nullptr) {}
};

class GradeTree {
private:
    Student* root;
    
    Student* insertHelper(Student* node, int grade, string name) {
        if (node == nullptr) {
            cout << "✅ Added student: " << name << " (Grade: " << grade << ")" << endl;
            return new Student(grade, name);
        }
        
        if (grade < node->grade) {
            node->left = insertHelper(node->left, grade, name);
        } else if (grade > node->grade) {
            node->right = insertHelper(node->right, grade, name);
        } else {
            cout << "⚠️  Grade " << grade << " already exists!" << endl;
        }
        
        return node;
    }
    
    Student* findMin(Student* node) {
        while (node && node->left) {
            node = node->left;
        }
        return node;
    }
    
    Student* deleteHelper(Student* node, int grade) {
        if (node == nullptr) {
            cout << "⚠️  Grade " << grade << " not found!" << endl;
            return node;
        }
        
        if (grade < node->grade) {
            node->left = deleteHelper(node->left, grade);
        } else if (grade > node->grade) {
            node->right = deleteHelper(node->right, grade);
        } else {
            cout << "🗑️  Removed: " << node->name << " (Grade: " << grade << ")" << endl;
            
            if (node->left == nullptr) {
                Student* temp = node->right;
                delete node;
                return temp;
            } else if (node->right == nullptr) {
                Student* temp = node->left;
                delete node;
                return temp;
            }
            
            Student* temp = findMin(node->right);
            node->grade = temp->grade;
            node->name = temp->name;
            node->right = deleteHelper(node->right, temp->grade);
        }
        
        return node;
    }
    
    void inorderHelper(Student* node) {
        if (node) {
            inorderHelper(node->left);
            cout << "📊 " << node->name << ": " << node->grade << endl;
            inorderHelper(node->right);
        }
    }
    
public:
    GradeTree() : root(nullptr) {}
    
    void insert(int grade, string name) {
        root = insertHelper(root, grade, name);
    }
    
    void remove(int grade) {
        root = deleteHelper(root, grade);
    }
    
    Student* search(int grade) {
        Student* current = root;
        while (current && current->grade != grade) {
            cout << "🔍 Checking: " << current->name << " (" << current->grade << ")" << endl;
            if (grade < current->grade) {
                current = current->left;
            } else {
                current = current->right;
            }
        }
        return current;
    }
    
    void displayGrades() {
        cout << "\\n📈 Students by grade (ascending):" << endl;
        inorderHelper(root);
    }
    
    void levelOrderTraversal() {
        if (!root) return;
        
        cout << "\\n🌳 Tree structure (level order):" << endl;
        queue<Student*> q;
        q.push(root);
        
        int level = 0;
        while (!q.empty()) {
            int levelSize = q.size();
            cout << "Level " << level++ << ": ";
            
            for (int i = 0; i < levelSize; i++) {
                Student* node = q.front();
                q.pop();
                
                cout << node->name << "(" << node->grade << ") ";
                
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
            cout << endl;
        }
    }
};

int main() {
    GradeTree gradebook;
    
    gradebook.insert(85, "Alice");
    gradebook.insert(92, "Bob");
    gradebook.insert(78, "Charlie");
    gradebook.insert(88, "Diana");
    
    gradebook.displayGrades();
    gradebook.levelOrderTraversal();
    
    cout << "\\n🔍 Searching for grade 88:" << endl;
    Student* found = gradebook.search(88);
    if (found) {
        cout << "✅ Found: " << found->name << endl;
    }
    
    gradebook.remove(78);
    gradebook.displayGrades();
    
    return 0;
}`,
      java: `// Java Binary Search Tree Implementation - Product Inventory System
import java.util.*;

class Product {
    int id;
    String name;
    double price;
    Product left, right;
    
    public Product(int id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.left = this.right = null;
    }
    
    @Override
    public String toString() {
        return String.format("%s (ID: %d, $%.2f)", name, id, price);
    }
}

public class ProductInventory {
    private Product root;
    private int totalProducts;
    
    public ProductInventory() {
        root = null;
        totalProducts = 0;
    }
    
    public void addProduct(int id, String name, double price) {
        root = insertProduct(root, id, name, price);
    }
    
    private Product insertProduct(Product node, int id, String name, double price) {
        if (node == null) {
            totalProducts++;
            System.out.println("✅ Added: " + name + " (ID: " + id + ")");
            return new Product(id, name, price);
        }
        
        if (id < node.id) {
            node.left = insertProduct(node.left, id, name, price);
        } else if (id > node.id) {
            node.right = insertProduct(node.right, id, name, price);
        } else {
            System.out.println("⚠️  Product with ID " + id + " already exists!");
        }
        
        return node;
    }
    
    public Product searchProduct(int id) {
        return searchHelper(root, id);
    }
    
    private Product searchHelper(Product node, int id) {
        if (node == null || node.id == id) {
            return node;
        }
        
        System.out.println("🔍 Checking: " + node.toString());
        
        if (id < node.id) {
            return searchHelper(node.left, id);
        }
        
        return searchHelper(node.right, id);
    }
    
    public void removeProduct(int id) {
        root = deleteHelper(root, id);
    }
    
    private Product deleteHelper(Product node, int id) {
        if (node == null) {
            System.out.println("⚠️  Product with ID " + id + " not found!");
            return node;
        }
        
        if (id < node.id) {
            node.left = deleteHelper(node.left, id);
        } else if (id > node.id) {
            node.right = deleteHelper(node.right, id);
        } else {
            System.out.println("🗑️  Removed: " + node.toString());
            totalProducts--;
            
            if (node.left == null) return node.right;
            if (node.right == null) return node.left;
            
            Product successor = findMin(node.right);
            node.id = successor.id;
            node.name = successor.name;
            node.price = successor.price;
            node.right = deleteHelper(node.right, successor.id);
        }
        
        return node;
    }
    
    private Product findMin(Product node) {
        while (node.left != null) {
            node = node.left;
        }
        return node;
    }
    
    public void displayInventory() {
        System.out.println("\\n📦 Product Inventory (sorted by ID):");
        inorderTraversal(root);
        System.out.println("Total products: " + totalProducts);
    }
    
    private void inorderTraversal(Product node) {
        if (node != null) {
            inorderTraversal(node.left);
            System.out.println("📦 " + node.toString());
            inorderTraversal(node.right);
        }
    }
    
    public void preorderTraversal() {
        System.out.println("\\n🌿 Preorder traversal:");
        preorderHelper(root);
    }
    
    private void preorderHelper(Product node) {
        if (node != null) {
            System.out.println("📦 " + node.toString());
            preorderHelper(node.left);
            preorderHelper(node.right);
        }
    }
    
    public static void main(String[] args) {
        ProductInventory inventory = new ProductInventory();
        
        inventory.addProduct(500, "Laptop", 999.99);
        inventory.addProduct(250, "Mouse", 25.50);
        inventory.addProduct(750, "Monitor", 299.99);
        inventory.addProduct(100, "Keyboard", 75.00);
        
        inventory.displayInventory();
        
        System.out.println("\\n🔍 Searching for product 250:");
        Product found = inventory.searchProduct(250);
        if (found != null) {
            System.out.println("✅ Found: " + found.toString());
        }
        
        inventory.removeProduct(250);
        inventory.displayInventory();
        inventory.preorderTraversal();
    }
}`,
      python: `# Python Binary Search Tree Implementation - Library Book Management
class BookNode:
    def __init__(self, isbn, title, author):
        self.isbn = isbn
        self.title = title
        self.author = author
        self.left = None
        self.right = None
    
    def __str__(self):
        return f"{self.title} by {self.author} (ISBN: {self.isbn})"

class LibrarySystem:
    def __init__(self):
        self.root = None
        self.total_books = 0
    
    def add_book(self, isbn, title, author):
        """Add a new book to the library"""
        self.root = self._insert_book(self.root, isbn, title, author)
    
    def _insert_book(self, node, isbn, title, author):
        if node is None:
            self.total_books += 1
            print(f"📚 Added: {title} by {author}")
            return BookNode(isbn, title, author)
        
        if isbn < node.isbn:
            node.left = self._insert_book(node.left, isbn, title, author)
        elif isbn > node.isbn:
            node.right = self._insert_book(node.right, isbn, title, author)
        else:
            print(f"⚠️  Book with ISBN {isbn} already exists!")
        
        return node
    
    def search_book(self, isbn):
        """Search for a book by ISBN"""
        return self._search_helper(self.root, isbn)
    
    def _search_helper(self, node, isbn):
        if node is None or node.isbn == isbn:
            return node
        
        print(f"🔍 Checking: {node}")
        
        if isbn < node.isbn:
            return self._search_helper(node.left, isbn)
        else:
            return self._search_helper(node.right, isbn)
    
    def remove_book(self, isbn):
        """Remove a book from the library"""
        self.root = self._delete_helper(self.root, isbn)
    
    def _delete_helper(self, node, isbn):
        if node is None:
            print(f"⚠️  Book with ISBN {isbn} not found!")
            return node
        
        if isbn < node.isbn:
            node.left = self._delete_helper(node.left, isbn)
        elif isbn > node.isbn:
            node.right = self._delete_helper(node.right, isbn)
        else:
            print(f"🗑️  Removed: {node}")
            self.total_books -= 1
            
            # Case 1: No children
            if node.left is None and node.right is None:
                return None
            
            # Case 2: One child
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            
            # Case 3: Two children
            successor = self._find_min(node.right)
            node.isbn = successor.isbn
            node.title = successor.title
            node.author = successor.author
            node.right = self._delete_helper(node.right, successor.isbn)
        
        return node
    
    def _find_min(self, node):
        while node.left:
            node = node.left
        return node
    
    def display_library(self):
        """Display all books sorted by ISBN"""
        print("\\n📖 Library Catalog (sorted by ISBN):")
        self._inorder_traversal(self.root)
        print(f"Total books: {self.total_books}")
    
    def _inorder_traversal(self, node):
        if node:
            self._inorder_traversal(node.left)
            print(f"📖 {node}")
            self._inorder_traversal(node.right)
    
    def preorder_traversal(self):
        """Display books in preorder (root, left, right)"""
        print("\\n🌿 Preorder traversal:")
        self._preorder_helper(self.root)
    
    def _preorder_helper(self, node):
        if node:
            print(f"📖 {node}")
            self._preorder_helper(node.left)
            self._preorder_helper(node.right)
    
    def postorder_traversal(self):
        """Display books in postorder (left, right, root)"""
        print("\\n🍃 Postorder traversal:")
        self._postorder_helper(self.root)
    
    def _postorder_helper(self, node):
        if node:
            self._postorder_helper(node.left)
            self._postorder_helper(node.right)
            print(f"📖 {node}")
    
    def find_books_in_range(self, min_isbn, max_isbn):
        """Find all books with ISBN in given range"""
        print(f"\\n🔍 Books with ISBN between {min_isbn} and {max_isbn}:")
        self._range_search(self.root, min_isbn, max_isbn)
    
    def _range_search(self, node, min_isbn, max_isbn):
        if node is None:
            return
        
        if min_isbn < node.isbn:
            self._range_search(node.left, min_isbn, max_isbn)
        
        if min_isbn <= node.isbn <= max_isbn:
            print(f"📚 {node}")
        
        if node.isbn < max_isbn:
            self._range_search(node.right, min_isbn, max_isbn)
    
    def get_height(self):
        """Calculate height of the tree"""
        return self._height_helper(self.root)
    
    def _height_helper(self, node):
        if node is None:
            return 0
        
        left_height = self._height_helper(node.left)
        right_height = self._height_helper(node.right)
        
        return max(left_height, right_height) + 1

# Example usage
library = LibrarySystem()

library.add_book(500, "Data Structures", "John Doe")
library.add_book(250, "Python Programming", "Jane Smith")
library.add_book(750, "Machine Learning", "Bob Wilson")
library.add_book(100, "Web Development", "Alice Brown")
library.add_book(300, "Database Systems", "Charlie Davis")

library.display_library()

print("\\n🔍 Searching for book with ISBN 250:")
found_book = library.search_book(250)
if found_book:
    print(f"✅ Found: {found_book}")

library.find_books_in_range(200, 600)
print(f"\\n📏 Tree height: {library.get_height()}")

library.preorder_traversal()
library.postorder_traversal()

library.remove_book(250)
library.display_library()`,
      javascript: `// JavaScript Binary Search Tree Implementation - Task Priority Manager
class TaskNode {
    constructor(priority, description, category) {
        this.priority = priority;
        this.description = description;
        this.category = category;
        this.left = null;
        this.right = null;
        this.timestamp = new Date().toLocaleTimeString();
    }
    
    toString() {
        return \`[\${this.priority}] \${this.description} (\${this.category})\`;
    }
}

class TaskManager {
    constructor() {
        this.root = null;
        this.totalTasks = 0;
    }
    
    addTask(priority, description, category = 'General') {
        this.root = this.insertTask(this.root, priority, description, category);
        this.totalTasks++;
    }
    
    insertTask(node, priority, description, category) {
        if (node === null) {
            console.log(\`✅ Added task: [\${priority}] \${description}\`);
            return new TaskNode(priority, description, category);
        }
        
        if (priority < node.priority) {
            node.left = this.insertTask(node.left, priority, description, category);
        } else if (priority > node.priority) {
            node.right = this.insertTask(node.right, priority, description, category);
        } else {
            console.log(\`⚠️  Task with priority \${priority} already exists!\`);
        }
        
        return node;
    }
    
    searchTask(priority) {
        return this.searchHelper(this.root, priority);
    }
    
    searchHelper(node, priority) {
        if (node === null || node.priority === priority) {
            return node;
        }
        
        console.log(\`🔍 Checking: \${node.toString()}\`);
        
        if (priority < node.priority) {
            return this.searchHelper(node.left, priority);
        }
        
        return this.searchHelper(node.right, priority);
    }
    
    completeTask(priority) {
        const initialCount = this.totalTasks;
        this.root = this.deleteTask(this.root, priority);
        if (this.totalTasks < initialCount) {
            console.log(\`🎉 Task completed!\`);
        }
    }
    
    deleteTask(node, priority) {
        if (node === null) {
            console.log(\`⚠️  Task with priority \${priority} not found!\`);
            return node;
        }
        
        if (priority < node.priority) {
            node.left = this.deleteTask(node.left, priority);
        } else if (priority > node.priority) {
            node.right = this.deleteTask(node.right, priority);
        } else {
            console.log(\`✅ Completed: \${node.toString()}\`);
            this.totalTasks--;
            
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;
            
            const successor = this.findMin(node.right);
            node.priority = successor.priority;
            node.description = successor.description;
            node.category = successor.category;
            node.timestamp = successor.timestamp;
            node.right = this.deleteTask(node.right, successor.priority);
        }
        
        return node;
    }
    
    findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
    
    findMax(node) {
        while (node.right !== null) {
            node = node.right;
        }
        return node;
    }
    
    displayTasks() {
        console.log('\\n📋 Task List (by priority):');
        this.inorderTraversal(this.root);
        console.log(\`Total tasks: \${this.totalTasks}\`);
    }
    
    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(\`📋 \${node.toString()} - Added: \${node.timestamp}\`);
            this.inorderTraversal(node.right);
        }
    }
    
    getHighestPriorityTask() {
        if (this.root === null) {
            console.log('📭 No tasks available');
            return null;
        }
        
        const highestPriorityNode = this.findMax(this.root);
        console.log(\`🔥 Highest priority: \${highestPriorityNode.toString()}\`);
        return highestPriorityNode;
    }
    
    getLowestPriorityTask() {
        if (this.root === null) {
            console.log('📭 No tasks available');
            return null;
        }
        
        const lowestPriorityNode = this.findMin(this.root);
        console.log(\`📌 Lowest priority: \${lowestPriorityNode.toString()}\`);
        return lowestPriorityNode;
    }
    
    getTasksByCategory(category) {
        console.log(\`\\n🏷️  Tasks in category: \${category}\`);
        this.categorySearch(this.root, category);
    }
    
    categorySearch(node, category) {
        if (node !== null) {
            this.categorySearch(node.left, category);
            if (node.category.toLowerCase() === category.toLowerCase()) {
                console.log(\`📋 \${node.toString()}\`);
            }
            this.categorySearch(node.right, category);
        }
    }
    
    levelOrderTraversal() {
        if (this.root === null) return;
        
        console.log('\\n🌳 Task tree structure:');
        const queue = [this.root];
        let level = 0;
        
        while (queue.length > 0) {
            const levelSize = queue.length;
            console.log(\`Level \${level++}:\`);
            
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                console.log(\`  📋 \${node.toString()}\`);
                
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
    }
}

// Example usage
const taskManager = new TaskManager();

taskManager.addTask(85, "Complete project proposal", "Work");
taskManager.addTask(92, "Submit tax documents", "Personal");
taskManager.addTask(78, "Buy groceries", "Shopping");
taskManager.addTask(88, "Schedule dentist appointment", "Health");

taskManager.displayTasks();
taskManager.levelOrderTraversal();

console.log("\\n🔍 Searching for task with priority 88:");
const foundTask = taskManager.searchTask(88);
if (foundTask) {
    console.log(\`✅ Found: \${foundTask.toString()}\`);
}

taskManager.getHighestPriorityTask();
taskManager.getLowestPriorityTask();
taskManager.getTasksByCategory("Work");

taskManager.completeTask(78);
taskManager.displayTasks();`
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
  const TreeVisualization = () => {
    const sortedNodes = [...treeNodes].sort((a, b) => a - b);
    const treeHeight = Math.ceil(Math.log2(sortedNodes.length + 1));
    
    const getNodePosition = (value, index, level) => {
      const totalWidth = 400;
      const levelWidth = totalWidth / Math.pow(2, level);
      const position = (index % Math.pow(2, level)) * levelWidth + levelWidth / 2;
      return position;
    };

    const renderTreeLevel = (nodes, level) => {
      if (nodes.length === 0) return null;
      
      return (
        <div key={level} className="flex justify-center items-center h-20 relative">
          {nodes.map((value, index) => (
            <div
              key={value}
              className={`absolute w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                animatingNode === value
                  ? operation === "INSERT" 
                    ? "bg-green-400 border-green-500 animate-bounce scale-125"
                    : operation === "DELETE"
                    ? "bg-red-400 border-red-500 animate-pulse scale-125"
                    : "bg-purple-200 dark:bg-purple-700 border-purple-400"
                  : searchPath.includes(value)
                  ? "bg-yellow-400 border-yellow-500 animate-pulse scale-110"
                  : traversalOrder.includes(value)
                  ? `bg-blue-400 border-blue-500 animate-pulse scale-110`
                  : "bg-purple-200 dark:bg-purple-700 border-purple-400 dark:border-purple-600"
              } text-purple-800 dark:text-purple-200`}
              style={{
                left: `${getNodePosition(value, index, level)}px`,
                marginLeft: '-24px'
              }}
            >
              {value}
            </div>
          ))}
        </div>
      );
    };

    return (
      <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
        <h3 className="text-2xl font-bold mb-6 text-center text-purple-800 dark:text-purple-200">
          🌳 Binary Search Tree Interactive Demo
        </h3>
        
        {/* Tree Visual */}
        <div className="flex justify-center mb-6">
          <div className="relative w-96 h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 overflow-hidden">
            {treeNodes.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-500 dark:text-gray-400 text-lg">Empty Tree</span>
              </div>
            ) : (
              <div className="p-4 space-y-2">
                {/* Simple tree representation */}
                <div className="flex justify-center">
                  <div className={`w-12 h-12 rounded-full border-2 border-purple-400 dark:border-purple-600 bg-purple-200 dark:bg-purple-700 flex items-center justify-center font-bold ${
                    sortedNodes.length > 0 && (animatingNode === sortedNodes[Math.floor(sortedNodes.length / 2)] || searchPath.includes(sortedNodes[Math.floor(sortedNodes.length / 2)]))
                      ? "animate-pulse scale-110 bg-yellow-400 border-yellow-500" 
                      : ""
                  }`}>
                    {sortedNodes.length > 0 ? sortedNodes[Math.floor(sortedNodes.length / 2)] : ''}
                  </div>
                </div>
                
                {/* Level 2 */}
                {sortedNodes.length > 1 && (
                  <div className="flex justify-center space-x-16">
                    {sortedNodes.slice(0, Math.floor(sortedNodes.length / 2)).map((value, idx) => (
                      <div key={value} className={`w-10 h-10 rounded-full border-2 border-purple-400 dark:border-purple-600 bg-purple-200 dark:bg-purple-700 flex items-center justify-center text-sm font-bold ${
                        animatingNode === value || searchPath.includes(value) || traversalOrder.includes(value)
                          ? "animate-pulse scale-110 bg-yellow-400 border-yellow-500" 
                          : ""
                      }`}>
                        {value}
                      </div>
                    ))}
                    
                    {sortedNodes.slice(Math.floor(sortedNodes.length / 2) + 1).map((value, idx) => (
                      <div key={value} className={`w-10 h-10 rounded-full border-2 border-purple-400 dark:border-purple-600 bg-purple-200 dark:bg-purple-700 flex items-center justify-center text-sm font-bold ${
                        animatingNode === value || searchPath.includes(value) || traversalOrder.includes(value)
                          ? "animate-pulse scale-110 bg-yellow-400 border-yellow-500" 
                          : ""
                      }`}>
                        {value}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Operation Status */}
        {operation && (
          <div className="text-center mb-4">
            <span className={`px-4 py-2 rounded-lg font-bold text-white ${
              operation.includes("INSERT") ? "bg-green-500" :
              operation.includes("DELETE") ? "bg-red-500" :
              operation.includes("SEARCH") ? "bg-blue-500" :
              operation.includes("TRAVERSAL") ? "bg-indigo-500" :
              operation === "DUPLICATE" ? "bg-yellow-500" :
              operation === "NOT_FOUND" ? "bg-red-500" : "bg-purple-500"
            }`}>
              {operation === "DUPLICATE" ? "Value Already Exists!" :
               operation === "NOT_FOUND" ? "Value Not Found!" :
               operation.includes("TRAVERSAL") ? `${currentTraversal.toUpperCase()} Traversal` :
               `${operation} Operation`}
            </span>
          </div>
        )}

        {/* Search Result */}
        {operation === "SEARCH" && (
          <div className="text-center mb-4">
            <div className={`p-3 rounded-lg ${searchResult ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300" : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300"}`}>
              {searchResult ? `✅ Found ${searchResult}!` : `❌ Value ${searchValue} not found`}
              {searchPath.length > 0 && (
                <div className="text-sm mt-1">
                  Search path: {searchPath.join(" → ")}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Traversal Result */}
        {operation.includes("TRAVERSAL") && traversalOrder.length > 0 && (
          <div className="text-center mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-lg">
              <div className="font-bold">{currentTraversal.charAt(0).toUpperCase() + currentTraversal.slice(1)} Traversal:</div>
              <div className="text-sm mt-1">{traversalOrder.join(" → ")}</div>
            </div>
          </div>
        )}

        {/* Tree Info */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
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
              className="px-4 py-2 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-purple-500 transition-colors duration-200"
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
              className="px-4 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
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
            <div className="flex gap-2">
              <button
                onClick={() => performTraversal('inorder')}
                disabled={treeNodes.length === 0}
                className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                📊 Inorder
              </button>
              <button
                onClick={() => performTraversal('preorder')}
                disabled={treeNodes.length === 0}
                className="px-3 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                🌿 Preorder
              </button>
              <button
                onClick={() => performTraversal('postorder')}
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