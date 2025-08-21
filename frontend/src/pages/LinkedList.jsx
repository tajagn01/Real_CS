import React, { useState, useEffect } from "react";

const linkedListData = {
  topic: "Linked List",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Think of a treasure hunt where each clue leads to the next location - that's exactly how a Linked List works! Unlike arrays where elements sit next to each other in memory, linked lists are like a chain of nodes scattered throughout memory, each holding data and a pointer to the next node. From implementing dynamic memory allocation to building the foundation for other data structures, linked lists are the flexible backbone that powers everything from music playlists to browser navigation!",

    // Linked List Fundamentals
    fundamentals: {
      concept:
        "A Linked List is a linear data structure where elements are stored in nodes, and each node contains data and a reference (pointer) to the next node. Unlike arrays, linked lists don't store elements in contiguous memory locations, making them dynamic and flexible for insertion and deletion operations.",
      realWorldExample:
        "Picture a chain of paperclips - each clip holds something and is connected to the next clip. Or think of a train where each car is connected to the next one!",
      key_operations: [
        "➕ Insert at Head - Add element at beginning",
        "📎 Insert at Tail - Add element at end", 
        "🔍 Search - Find element in the list",
        "🗑️ Delete - Remove element from list",
        "👁️ Traverse - Visit all elements sequentially",
        "📏 Size - Get number of elements"
      ],
      industry_applications: [
        "🎵 Music Players - Playlist management and navigation",
        "💾 Memory Management - Dynamic memory allocation",
        "📱 Mobile Apps - Implementing undo functionality", 
        "🌐 Web Browsers - Managing browser history efficiently",
        "🎮 Gaming - Inventory systems and game state management",
        "🗃️ Databases - Implementing indexes and data organization",
        "🔄 Operating Systems - Process scheduling and management"
      ],
      advantages: [
        "🔄 Dynamic size allocation",
        "⚡ O(1) insertion and deletion at head",
        "💾 Efficient memory usage",
        "🎯 No memory waste unlike arrays",
        "🏗️ Foundation for other data structures"
      ],
      disadvantages: [
        "🚫 No random access to elements",
        "🔍 O(n) search time complexity",
        "💾 Extra memory overhead for pointers",
        "🐌 Poor cache performance",
        "➡️ Sequential access only"
      ],
    },

    // Implementation Types
    implementation_types: {
      singly_linked: {
        concept: "Each node contains data and a pointer to the next node. Traversal is only possible in one direction (forward).",
        advantages: ["Simple implementation", "Memory efficient", "Fast insertion at head"],
        disadvantages: ["No backward traversal", "Deletion requires previous node", "Only forward iteration"]
      },
      doubly_linked: {
        concept: "Each node contains data and two pointers - one to the next node and one to the previous node. Allows bidirectional traversal.",
        advantages: ["Bidirectional traversal", "Easier deletion", "Can traverse backward"],
        disadvantages: ["Extra memory for prev pointer", "More complex implementation", "Additional pointer maintenance"]
      },
      circular_linked: {
        concept: "Similar to singly linked list but the last node points back to the first node, forming a circle.",
        advantages: ["Continuous traversal possible", "No null pointers", "Useful for round-robin algorithms"],
        disadvantages: ["Risk of infinite loops", "Complex termination conditions", "Harder to detect list end"]
      }
    },

    code_examples: {
      c: `// C Linked List Implementation - Dynamic Student Database
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_NAME_LENGTH 50

typedef struct Student {
    int id;
    char name[MAX_NAME_LENGTH];
    float grade;
    struct Student* next;
} Student;

typedef struct {
    Student* head;
    int size;
} StudentDatabase;

// Initialize database
StudentDatabase* createDatabase() {
    StudentDatabase* db = (StudentDatabase*)malloc(sizeof(StudentDatabase));
    db->head = NULL;
    db->size = 0;
    return db;
}

// Insert student at head
void addStudent(StudentDatabase* db, int id, char* name, float grade) {
    Student* newStudent = (Student*)malloc(sizeof(Student));
    newStudent->id = id;
    strcpy(newStudent->name, name);
    newStudent->grade = grade;
    newStudent->next = db->head;
    
    db->head = newStudent;
    db->size++;
    
    printf("✅ Added student: %s (ID: %d, Grade: %.2f)\\n", name, id, grade);
}

// Search for student by ID
Student* findStudent(StudentDatabase* db, int id) {
    Student* current = db->head;
    int position = 0;
    
    while (current != NULL) {
        if (current->id == id) {
            printf("🔍 Found: %s at position %d\\n", current->name, position);
            return current;
        }
        current = current->next;
        position++;
    }
    
    printf("❌ Student with ID %d not found\\n", id);
    return NULL;
}

// Delete student by ID
void removeStudent(StudentDatabase* db, int id) {
    if (db->head == NULL) {
        printf("📭 Database is empty\\n");
        return;
    }
    
    // If head node needs to be deleted
    if (db->head->id == id) {
        Student* temp = db->head;
        printf("🗑️  Removed: %s (ID: %d)\\n", temp->name, temp->id);
        db->head = db->head->next;
        free(temp);
        db->size--;
        return;
    }
    
    Student* current = db->head;
    while (current->next != NULL && current->next->id != id) {
        current = current->next;
    }
    
    if (current->next != NULL) {
        Student* temp = current->next;
        printf("🗑️  Removed: %s (ID: %d)\\n", temp->name, temp->id);
        current->next = temp->next;
        free(temp);
        db->size--;
    }
}

// Display all students
void displayAllStudents(StudentDatabase* db) {
    if (db->head == NULL) {
        printf("📭 No students in database\\n");
        return;
    }
    
    printf("\\n📚 Student Database (%d students):\\n", db->size);
    Student* current = db->head;
    int position = 0;
    
    while (current != NULL) {
        printf("   %d. %s (ID: %d, Grade: %.2f)\\n", 
               position + 1, current->name, current->id, current->grade);
        current = current->next;
        position++;
    }
}

int main() {
    StudentDatabase* db = createDatabase();
    
    addStudent(db, 101, "Alice Johnson", 95.5);
    addStudent(db, 102, "Bob Smith", 87.2);
    addStudent(db, 103, "Carol White", 92.8);
    
    displayAllStudents(db);
    
    findStudent(db, 102);
    removeStudent(db, 102);
    displayAllStudents(db);
    
    return 0;
}`,
      cpp: `// C++ Linked List Implementation - Music Playlist Manager
#include <iostream>
#include <string>
using namespace std;

class Song {
public:
    string title;
    string artist;
    int duration; // in seconds
    Song* next;
    
    Song(string t, string a, int d) : title(t), artist(a), duration(d), next(nullptr) {}
};

class MusicPlaylist {
private:
    Song* head;
    Song* current; // Currently playing song
    int totalSongs;
    
public:
    MusicPlaylist() : head(nullptr), current(nullptr), totalSongs(0) {}
    
    void addSong(const string& title, const string& artist, int duration) {
        Song* newSong = new Song(title, artist, duration);
        
        if (head == nullptr) {
            head = newSong;
            current = head;
        } else {
            Song* temp = head;
            while (temp->next != nullptr) {
                temp = temp->next;
            }
            temp->next = newSong;
        }
        
        totalSongs++;
        cout << "🎵 Added: " << title << " by " << artist 
             << " (" << duration << "s)" << endl;
    }
    
    void removeSong(const string& title) {
        if (head == nullptr) {
            cout << "🎵 Playlist is empty!" << endl;
            return;
        }
        
        // If head song needs to be removed
        if (head->title == title) {
            Song* temp = head;
            cout << "🗑️  Removed: " << temp->title << " by " << temp->artist << endl;
            head = head->next;
            if (current == temp) current = head;
            delete temp;
            totalSongs--;
            return;
        }
        
        Song* prev = head;
        while (prev->next != nullptr && prev->next->title != title) {
            prev = prev->next;
        }
        
        if (prev->next != nullptr) {
            Song* temp = prev->next;
            cout << "🗑️  Removed: " << temp->title << " by " << temp->artist << endl;
            if (current == temp) current = prev->next;
            prev->next = temp->next;
            delete temp;
            totalSongs--;
        } else {
            cout << "❌ Song '" << title << "' not found" << endl;
        }
    }
    
    void nextSong() {
        if (current != nullptr && current->next != nullptr) {
            current = current->next;
            cout << "⏭️  Now playing: " << current->title << " by " << current->artist << endl;
        } else {
            cout << "🔚 End of playlist" << endl;
        }
    }
    
    void displayPlaylist() {
        if (head == nullptr) {
            cout << "📭 Playlist is empty" << endl;
            return;
        }
        
        cout << "\\n🎵 Music Playlist (" << totalSongs << " songs):" << endl;
        Song* temp = head;
        int position = 1;
        
        while (temp != nullptr) {
            string indicator = (temp == current) ? " 🔊" : "";
            cout << "   " << position << ". " << temp->title 
                 << " by " << temp->artist << " (" << temp->duration << "s)" 
                 << indicator << endl;
            temp = temp->next;
            position++;
        }
    }
    
    ~MusicPlaylist() {
        while (head != nullptr) {
            Song* temp = head;
            head = head->next;
            delete temp;
        }
    }
};

int main() {
    MusicPlaylist playlist;
    
    playlist.addSong("Bohemian Rhapsody", "Queen", 355);
    playlist.addSong("Hotel California", "Eagles", 391);
    playlist.addSong("Imagine", "John Lennon", 183);
    
    playlist.displayPlaylist();
    
    playlist.nextSong();
    playlist.removeSong("Hotel California");
    playlist.displayPlaylist();
    
    return 0;
}`,
      java: `// Java Linked List Implementation - Task Management System
import java.util.*;

class Task {
    private int id;
    private String description;
    private String priority;
    private boolean completed;
    private Task next;
    
    public Task(int id, String description, String priority) {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.completed = false;
        this.next = null;
    }
    
    // Getters and setters
    public int getId() { return id; }
    public String getDescription() { return description; }
    public String getPriority() { return priority; }
    public boolean isCompleted() { return completed; }
    public Task getNext() { return next; }
    public void setNext(Task next) { this.next = next; }
    public void setCompleted(boolean completed) { this.completed = completed; }
    
    @Override
    public String toString() {
        return String.format("[%d] %s (%s) %s", 
            id, description, priority, completed ? "✅" : "⏳");
    }
}

public class TaskManager {
    private Task head;
    private int taskCount;
    private int nextId;
    
    public TaskManager() {
        this.head = null;
        this.taskCount = 0;
        this.nextId = 1;
    }
    
    public void addTask(String description, String priority) {
        Task newTask = new Task(nextId++, description, priority);
        
        // Insert based on priority (High -> Medium -> Low)
        if (head == null || shouldInsertBefore(newTask, head)) {
            newTask.setNext(head);
            head = newTask;
        } else {
            Task current = head;
            while (current.getNext() != null && 
                   !shouldInsertBefore(newTask, current.getNext())) {
                current = current.getNext();
            }
            newTask.setNext(current.getNext());
            current.setNext(newTask);
        }
        
        taskCount++;
        System.out.println("✅ Added task: " + newTask);
    }
    
    private boolean shouldInsertBefore(Task newTask, Task existingTask) {
        String[] priorities = {"High", "Medium", "Low"};
        int newPriority = Arrays.asList(priorities).indexOf(newTask.getPriority());
        int existingPriority = Arrays.asList(priorities).indexOf(existingTask.getPriority());
        return newPriority < existingPriority;
    }
    
    public void completeTask(int id) {
        Task current = head;
        while (current != null) {
            if (current.getId() == id) {
                current.setCompleted(true);
                System.out.println("🎉 Completed task: " + current);
                return;
            }
            current = current.getNext();
        }
        System.out.println("❌ Task with ID " + id + " not found");
    }
    
    public void removeTask(int id) {
        if (head == null) {
            System.out.println("📭 No tasks to remove");
            return;
        }
        
        if (head.getId() == id) {
            System.out.println("🗑️  Removed: " + head);
            head = head.getNext();
            taskCount--;
            return;
        }
        
        Task current = head;
        while (current.getNext() != null && current.getNext().getId() != id) {
            current = current.getNext();
        }
        
        if (current.getNext() != null) {
            Task taskToRemove = current.getNext();
            System.out.println("🗑️  Removed: " + taskToRemove);
            current.setNext(taskToRemove.getNext());
            taskCount--;
        } else {
            System.out.println("❌ Task with ID " + id + " not found");
        }
    }
    
    public void displayTasks() {
        if (head == null) {
            System.out.println("📭 No tasks in the list");
            return;
        }
        
        System.out.println("\\n📋 Task List (" + taskCount + " tasks):");
        Task current = head;
        
        while (current != null) {
            System.out.println("   " + current);
            current = current.getNext();
        }
    }
    
    public static void main(String[] args) {
        TaskManager manager = new TaskManager();
        
        manager.addTask("Complete project proposal", "High");
        manager.addTask("Review code changes", "Medium");
        manager.addTask("Update documentation", "Low");
        manager.addTask("Fix critical bug", "High");
        
        manager.displayTasks();
        
        manager.completeTask(1);
        manager.removeTask(2);
        manager.displayTasks();
    }
}`,
      python: `# Python Linked List Implementation - Web Browser History
class WebPage:
    def __init__(self, url, title, timestamp):
        self.url = url
        self.title = title
        self.timestamp = timestamp
        self.next = None
    
    def __str__(self):
        return f"{self.title} ({self.url}) - {self.timestamp}"

class BrowserHistory:
    def __init__(self, max_history=100):
        self.head = None
        self.current = None
        self.size = 0
        self.max_history = max_history
    
    def visit_page(self, url, title):
        import datetime
        timestamp = datetime.datetime.now().strftime("%H:%M:%S")
        new_page = WebPage(url, title, timestamp)
        
        # Add to beginning of list (most recent first)
        new_page.next = self.head
        self.head = new_page
        self.current = new_page
        self.size += 1
        
        # Remove oldest pages if exceeding max history
        if self.size > self.max_history:
            self.remove_tail()
        
        print(f"🌐 Visited: {title}")
        self.display_current()
    
    def remove_tail(self):
        if self.head is None:
            return
        
        if self.head.next is None:
            self.head = None
            self.size = 0
            return
        
        current = self.head
        while current.next.next is not None:
            current = current.next
        
        print(f"🗑️  Removed from history: {current.next.title}")
        current.next = None
        self.size -= 1
    
    def go_back_to(self, title):
        current = self.head
        while current is not None:
            if current.title.lower() == title.lower():
                self.current = current
                print(f"🔙 Navigated back to: {current.title}")
                self.display_current()
                return
            current = current.next
        
        print(f"❌ Page '{title}' not found in history")
    
    def search_history(self, keyword):
        results = []
        current = self.head
        position = 0
        
        while current is not None:
            if keyword.lower() in current.title.lower() or keyword.lower() in current.url.lower():
                results.append((position, current))
            current = current.next
            position += 1
        
        if results:
            print(f"\\n🔍 Found {len(results)} results for '{keyword}':")
            for pos, page in results:
                print(f"   {pos + 1}. {page}")
        else:
            print(f"❌ No results found for '{keyword}'")
        
        return results
    
    def clear_history(self):
        count = self.size
        self.head = None
        self.current = None
        self.size = 0
        print(f"🗑️  Cleared {count} pages from history")
    
    def display_current(self):
        if self.current:
            print(f"📍 Current: {self.current.title}")
    
    def display_history(self, limit=10):
        if self.head is None:
            print("📭 No pages in history")
            return
        
        print(f"\\n📚 Browser History (showing {min(limit, self.size)} of {self.size} pages):")
        current = self.head
        count = 0
        
        while current is not None and count < limit:
            indicator = " 👉" if current == self.current else ""
            print(f"   {count + 1}. {current}{indicator}")
            current = current.next
            count += 1
        
        if self.size > limit:
            print(f"   ... and {self.size - limit} more pages")
    
    def get_history_size(self):
        return self.size

# Example usage and demonstration
def demo_browser_history():
    print("🌐 Web Browser History Demo\\n")
    browser = BrowserHistory(max_history=50)
    
    # Visit some pages
    browser.visit_page("https://google.com", "Google Search")
    browser.visit_page("https://github.com", "GitHub")
    browser.visit_page("https://stackoverflow.com", "Stack Overflow")
    browser.visit_page("https://python.org", "Python.org")
    
    # Display history
    browser.display_history()
    
    # Search in history
    browser.search_history("github")
    
    # Navigate back to a previous page
    browser.go_back_to("Google Search")
    
    # Display updated history
    browser.display_history()
    
    print(f"\\n📊 Total pages in history: {browser.get_history_size()}")

if __name__ == "__main__":
    demo_browser_history()`,
      javascript: `// JavaScript Linked List Implementation - Shopping Cart System
class Product {
    constructor(id, name, price, quantity = 1) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.next = null;
    }
    
    getTotalPrice() {
        return this.price * this.quantity;
    }
    
    toString() {
        return \`\${this.name} x\${this.quantity} - $\${this.getTotalPrice().toFixed(2)}\`;
    }
}

class ShoppingCart {
    constructor() {
        this.head = null;
        this.itemCount = 0;
        this.totalValue = 0;
    }
    
    addProduct(id, name, price, quantity = 1) {
        // Check if product already exists
        const existingProduct = this.findProduct(id);
        if (existingProduct) {
            existingProduct.quantity += quantity;
            console.log(\`📦 Updated: \${existingProduct.toString()}\`);
        } else {
            const newProduct = new Product(id, name, price, quantity);
            newProduct.next = this.head;
            this.head = newProduct;
            this.itemCount++;
            console.log(\`🛒 Added: \${newProduct.toString()}\`);
        }
        
        this.updateTotal();
        this.displayCartSummary();
    }
    
    findProduct(id) {
        let current = this.head;
        while (current !== null) {
            if (current.id === id) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
    
    removeProduct(id) {
        if (this.head === null) {
            console.log("🛒 Cart is empty!");
            return;
        }
        
        // If head product needs to be removed
        if (this.head.id === id) {
            const removedProduct = this.head;
            console.log(\`🗑️  Removed: \${removedProduct.toString()}\`);
            this.head = this.head.next;
            this.itemCount--;
            this.updateTotal();
            return;
        }
        
        let current = this.head;
        while (current.next !== null && current.next.id !== id) {
            current = current.next;
        }
        
        if (current.next !== null) {
            const removedProduct = current.next;
            console.log(\`🗑️  Removed: \${removedProduct.toString()}\`);
            current.next = removedProduct.next;
            this.itemCount--;
            this.updateTotal();
        } else {
            console.log(\`❌ Product with ID \${id} not found\`);
        }
    }
    
    updateQuantity(id, newQuantity) {
        const product = this.findProduct(id);
        if (product) {
            if (newQuantity <= 0) {
                this.removeProduct(id);
            } else {
                const oldQuantity = product.quantity;
                product.quantity = newQuantity;
                console.log(\`📝 Updated quantity: \${product.name} from \${oldQuantity} to \${newQuantity}\`);
                this.updateTotal();
            }
        } else {
            console.log(\`❌ Product with ID \${id} not found\`);
        }
    }
    
    updateTotal() {
        this.totalValue = 0;
        let current = this.head;
        
        while (current !== null) {
            this.totalValue += current.getTotalPrice();
            current = current.next;
        }
    }
    
    displayCart() {
        if (this.head === null) {
            console.log("🛒 Your cart is empty");
            return;
        }
        
        console.log(\`\\n🛒 Shopping Cart (\${this.itemCount} items):\`);
        let current = this.head;
        let position = 1;
        
        while (current !== null) {
            console.log(\`   \${position}. \${current.toString()}\`);
            current = current.next;
            position++;
        }
        
        console.log(\`\\n💰 Total: $\${this.totalValue.toFixed(2)}\`);
    }
    
    displayCartSummary() {
        console.log(\`📊 Cart: \${this.itemCount} items, Total: $\${this.totalValue.toFixed(2)}\`);
    }
    
    checkout() {
        if (this.head === null) {
            console.log("🛒 Cannot checkout - cart is empty!");
            return;
        }
        
        console.log(\`\\n🎉 Checkout Summary:\`);
        this.displayCart();
        console.log(\`\\n💳 Processing payment of $\${this.totalValue.toFixed(2)}...\`);
        console.log("✅ Order placed successfully!");
        
        // Clear cart after checkout
        this.head = null;
        this.itemCount = 0;
        this.totalValue = 0;
        console.log("🛒 Cart cleared");
    }
    
    clearCart() {
        const itemCount = this.itemCount;
        this.head = null;
        this.itemCount = 0;
        this.totalValue = 0;
        console.log(\`🗑️  Cleared \${itemCount} items from cart\`);
    }
    
    findMostExpensive() {
        if (this.head === null) {
            console.log("🛒 Cart is empty");
            return null;
        }
        
        let mostExpensive = this.head;
        let current = this.head.next;
        
        while (current !== null) {
            if (current.getTotalPrice() > mostExpensive.getTotalPrice()) {
                mostExpensive = current;
            }
            current = current.next;
        }
        
        console.log(\`💎 Most expensive item: \${mostExpensive.toString()}\`);
        return mostExpensive;
    }
}

// Example usage and demonstration
const cart = new ShoppingCart();

console.log("🛒 Shopping Cart Demo\\n");

// Add products to cart
cart.addProduct(1, "Wireless Headphones", 89.99, 1);
cart.addProduct(2, "USB-C Cable", 12.99, 2);
cart.addProduct(3, "Phone Case", 24.99, 1);
cart.addProduct(1, "Wireless Headphones", 89.99, 1); // Add same product

// Display cart
cart.displayCart();

// Update quantity
cart.updateQuantity(2, 3);

// Find most expensive item
cart.findMostExpensive();

// Remove a product
cart.removeProduct(3);

// Final cart display and checkout
cart.displayCart();
cart.checkout();`
    },

    interview_questions: [
      {
        question: "What are the time complexities of basic operations in a singly linked list?",
        answer:
          "Insertion at head: O(1), Search: O(n), Deletion: O(n) if searching for element, O(1) if deleting head with reference. Space complexity is O(1) for operations. Accessing by index is O(n) unlike arrays which have O(1) access.",
        difficulty: "Easy",
      },
      {
        question: "How do you detect a cycle in a linked list?",
        answer:
          "Use Floyd's Cycle Detection Algorithm (tortoise and hare). Use two pointers - slow moves one step, fast moves two steps. If there's a cycle, fast will eventually meet slow. If fast reaches null, no cycle exists. Time: O(n), Space: O(1).",
        difficulty: "Medium",
      },
      {
        question: "How would you reverse a linked list iteratively and recursively?",
        answer:
          "Iteratively: Use three pointers (prev, current, next). Traverse list, reverse links. Recursively: Base case is null/single node. Recursively reverse rest, then adjust pointers. Both are O(n) time, iterative is O(1) space, recursive is O(n) space due to call stack.",
        difficulty: "Medium",
      },
      {
        question: "How do you find the middle element of a linked list in one pass?",
        answer:
          "Use two pointers technique: slow pointer moves one step, fast pointer moves two steps. When fast reaches end, slow will be at middle. For even length, slow will be at first middle element. Time: O(n), Space: O(1).",
        difficulty: "Medium",
      },
      {
        question: "How would you merge two sorted linked lists?",
        answer:
          "Use two pointers to traverse both lists simultaneously. Compare values and append smaller node to result list. Continue until one list is exhausted, then append remaining nodes. Can be done iteratively O(1) space or recursively O(n) space. Time: O(m+n).",
        difficulty: "Hard",
      },
    ],

    project_ideas: [
     {
      "title": "Simple Contact List Manager",
      "description": "Create a contact management system using linked list to store contacts with insert, delete, and search functionality.",
      "difficulty": "Beginner",
      "technologies": ["Python"]
    },
    {
      "title": "Music Playlist with Skip/Previous",
      "description": "Build a music player playlist using doubly linked list allowing forward/backward navigation and shuffle functionality.",
      "difficulty": "Intermediate",
      "technologies": ["Java"]
    },
    {
      "title": "LRU Cache Implementation",
      "description": "Implement Least Recently Used cache using doubly linked list and hash map for O(1) get and put operations.",
      "difficulty": "Advanced",
      "technologies": ["C++"]
    },
    {
      "title": "Multi-level Undo/Redo System",
      "description": "Build an advanced text editor with branching undo/redo using linked list trees, supporting complex editing operations.",
      "difficulty": "Advanced",
      "technologies": ["JavaScript"]
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

export default function EnhancedLinkedListPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [listNodes, setListNodes] = useState([
    { id: 1, data: 10, next: 2 },
    { id: 2, data: 20, next: 3 },
    { id: 3, data: 30, next: null }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [animatingIndex, setAnimatingIndex] = useState(-1);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [operation, setOperation] = useState("");
  const [insertPosition, setInsertPosition] = useState("head");
  const [deleteValue, setDeleteValue] = useState("");
  
  // Traversal demonstration state
  const [traversalIndex, setTraversalIndex] = useState(-1);
  const [isTraversing, setIsTraversing] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const { topic, category, sections } = linkedListData;
  const languages = ["c", "cpp", "java", "python", "javascript"];

  // Animation effect
  useEffect(() => {
    if (animatingIndex >= 0) {
      const timer = setTimeout(() => setAnimatingIndex(-1), 500);
      return () => clearTimeout(timer);
    }
  }, [animatingIndex]);

  const insertAtHead = () => {
    if (inputValue !== "") {
      const newElement = parseInt(inputValue, 10) || 0;
      const newId = Math.max(...listNodes.map(n => n.id), 0) + 1;
      const newNode = {
        id: newId,
        data: newElement,
        next: listNodes.length > 0 ? listNodes[0].id : null
      };
      
      setListNodes([newNode, ...listNodes]);
      setAnimatingIndex(0);
      setOperation("INSERT HEAD");
      setInputValue("");
      
      setTimeout(() => setOperation(""), 1000);
    }
  };

  const insertAtTail = () => {
    if (inputValue !== "") {
      const newElement = parseInt(inputValue, 10) || 0;
      const newId = Math.max(...listNodes.map(n => n.id), 0) + 1;
      const newNode = {
        id: newId,
        data: newElement,
        next: null
      };
      
      if (listNodes.length === 0) {
        setListNodes([newNode]);
      } else {
        const updatedNodes = [...listNodes];
        updatedNodes[updatedNodes.length - 1].next = newId;
        updatedNodes.push(newNode);
        setListNodes(updatedNodes);
      }
      
      setAnimatingIndex(listNodes.length);
      setOperation("INSERT TAIL");
      setInputValue("");
      
      setTimeout(() => setOperation(""), 1000);
    }
  };

  const deleteNode = () => {
    if (deleteValue !== "") {
      const valueToDelete = parseInt(deleteValue, 10) || 0;
      const nodeIndex = listNodes.findIndex(node => node.data === valueToDelete);
      
      if (nodeIndex === -1) {
        setOperation("NOT FOUND");
        setTimeout(() => setOperation(""), 1000);
        return;
      }
      
      setAnimatingIndex(nodeIndex);
      setOperation("DELETE");
      
      setTimeout(() => {
        const updatedNodes = [...listNodes];
        const nodeToDelete = updatedNodes[nodeIndex];
        
        // Update previous node's next pointer
        if (nodeIndex > 0) {
          updatedNodes[nodeIndex - 1].next = nodeToDelete.next;
        }
        
        // Remove the node
        updatedNodes.splice(nodeIndex, 1);
        
        setListNodes(updatedNodes);
        setOperation("");
      }, 500);
      
      setDeleteValue("");
    }
  };

  const searchNode = () => {
    if (searchValue !== "") {
      const valueToSearch = parseInt(searchValue, 10) || 0;
      const nodeIndex = listNodes.findIndex(node => node.data === valueToSearch);
      
      if (nodeIndex !== -1) {
        setAnimatingIndex(nodeIndex);
        setSearchResult({ found: true, index: nodeIndex, value: valueToSearch });
        setOperation("FOUND");
      } else {
        setSearchResult({ found: false, value: valueToSearch });
        setOperation("NOT FOUND");
      }
      
      setTimeout(() => {
        setOperation("");
        setSearchResult(null);
      }, 2000);
      
      setSearchValue("");
    }
  };

  const traverseList = async () => {
    if (listNodes.length === 0) return;
    
    setIsTraversing(true);
    setOperation("TRAVERSING");
    
    for (let i = 0; i < listNodes.length; i++) {
      setTraversalIndex(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    setTraversalIndex(-1);
    setIsTraversing(false);
    setOperation("");
  };

  const LinkedListVisualization = () => (
    <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-purple-800 dark:text-purple-200">
        🔗 Linked List Interactive Demo
      </h3>
      
      {/* Linked List Visual */}
      <div className="flex justify-center mb-6 overflow-x-auto pb-4">
        <div className="flex items-center space-x-2 min-w-max">
          {listNodes.length === 0 ? (
            <div className="flex items-center justify-center w-24 h-16 border-2 border-dashed border-gray-400 rounded-lg">
              <span className="text-gray-500 text-sm">NULL</span>
            </div>
          ) : (
            listNodes.map((node, index) => (
              <React.Fragment key={node.id}>
                {/* Node */}
                <div
                  className={`relative flex border-2 rounded-lg transition-all duration-500 ${
                    animatingIndex === index
                      ? operation === "INSERT HEAD" || operation === "INSERT TAIL"
                        ? "bg-green-400 border-green-500 animate-bounce scale-110"
                        : operation === "DELETE"
                        ? "bg-red-400 border-red-500 animate-pulse scale-110"
                        : operation === "FOUND"
                        ? "bg-yellow-400 border-yellow-500 animate-pulse scale-110"
                        : "bg-purple-200 dark:bg-purple-700 border-purple-400 dark:border-purple-600"
                      : traversalIndex === index
                      ? "bg-blue-400 border-blue-500 animate-pulse scale-105"
                      : "bg-purple-200 dark:bg-purple-700 border-purple-400 dark:border-purple-600"
                  }`}
                >
                  {/* Data part */}
                  <div className="w-16 h-16 flex items-center justify-center border-r-2 border-purple-400 dark:border-purple-600">
                    <span className="font-bold text-purple-800 dark:text-purple-200">
                      {node.data}
                    </span>
                  </div>
                  
                  {/* Next pointer part */}
                  <div className="w-8 h-16 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-300 text-xs">
                      {node.next ? "→" : "∅"}
                    </span>
                  </div>
                  
                  {/* Node label */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-600 dark:text-purple-300 font-medium">
                    Node {index + 1}
                  </div>
                  
                  {/* Head indicator */}
                  {index === 0 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-green-600 dark:text-green-300 font-bold">
                      HEAD
                    </div>
                  )}
                  
                  {/* Tail indicator */}
                  {index === listNodes.length - 1 && (
                    <div className="absolute -bottom-8 right-0 text-xs text-red-600 dark:text-red-300 font-bold">
                      TAIL
                    </div>
                  )}
                </div>
                
                {/* Arrow between nodes */}
                {index < listNodes.length - 1 && (
                  <div className="flex items-center">
                    <div className="w-8 h-1 bg-purple-400 dark:bg-purple-600"></div>
                    <div className="w-0 h-0 border-l-4 border-l-purple-400 dark:border-l-purple-600 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </React.Fragment>
            ))
          )}
        </div>
      </div>

      {/* Operation Status */}
      {operation && (
        <div className="text-center mb-4">
          <span className={`px-4 py-2 rounded-lg font-bold text-white ${
            operation.includes("INSERT") ? "bg-green-500" :
            operation === "DELETE" ? "bg-red-500" :
            operation === "FOUND" ? "bg-yellow-500" :
            operation === "NOT FOUND" ? "bg-red-500" :
            operation === "TRAVERSING" ? "bg-blue-500" : "bg-gray-500"
          }`}>
            {operation}
          </span>
        </div>
      )}

      {/* Search Result */}
      {searchResult && (
        <div className="text-center mb-4">
          <div className={`inline-block px-4 py-2 rounded-lg ${
            searchResult.found 
              ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-300" 
              : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-300"
          }`}>
            {searchResult.found 
              ? `✅ Found ${searchResult.value} at position ${searchResult.index + 1}`
              : `❌ Value ${searchResult.value} not found in list`
            }
          </div>
        </div>
      )}

      {/* List Info */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <span className="text-sm text-gray-500">List Size</span>
            <div className="text-2xl font-bold text-purple-600">{listNodes.length}</div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Head Value</span>
            <div className="text-2xl font-bold text-purple-600">
              {listNodes.length > 0 ? listNodes[0].data : "None"}
            </div>
          </div>
          <div>
            <span className="text-sm text-gray-500">Tail Value</span>
            <div className="text-2xl font-bold text-purple-600">
              {listNodes.length > 0 ? listNodes[listNodes.length - 1].data : "None"}
            </div>
          </div>
        </div>
      </div>

      {/* Linked List Operations */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-4">
        <h4 className="text-lg font-bold text-center">Linked List Operations</h4>
        
        {/* Insert Operations */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value to insert"
              className="flex-1 px-4 py-2 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-purple-500 transition-colors duration-200"
            />
            <div className="flex gap-2">
              <button
                onClick={insertAtHead}
                disabled={!inputValue}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                ➕ Insert Head
              </button>
              <button
                onClick={insertAtTail}
                disabled={!inputValue}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                📎 Insert Tail
              </button>
            </div>
          </div>
          
          {/* Delete Operation */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="number"
              value={deleteValue}
              onChange={(e) => setDeleteValue(e.target.value)}
              placeholder="Enter value to delete"
              className="flex-1 px-4 py-2 border-2 border-red-300 dark:border-red-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-red-500 transition-colors duration-200"
            />
            <button
              onClick={deleteNode}
              disabled={!deleteValue || listNodes.length === 0}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
            >
              🗑️ Delete
            </button>
          </div>
          
          {/* Search Operation */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="number"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Enter value to search"
              className="flex-1 px-4 py-2 border-2 border-yellow-300 dark:border-yellow-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
            />
            <div className="flex gap-2">
              <button
                onClick={searchNode}
                disabled={!searchValue || listNodes.length === 0}
                className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                🔍 Search
              </button>
              <button
                onClick={traverseList}
                disabled={listNodes.length === 0 || isTraversing}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
              >
                👁️ Traverse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ListTypeComparison = () => (
    <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
      <h3 className="text-2xl font-bold mb-6 text-center text-amber-800 dark:text-amber-200">
        🔄 Linked List Types Comparison
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Singly Linked List */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
          <h4 className="text-lg font-bold mb-3 text-blue-700 dark:text-blue-300">
            📗 Singly Linked List
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
              <span>Forward traversal</span>
              <span className="text-green-600">✅</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
              <span>Backward traversal</span>
              <span className="text-red-600">❌</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
              <span>Memory per node</span>
              <span className="text-blue-600 font-mono">data + 1 ptr</span>
            </div>
          </div>
        </div>
        
        {/* Doubly Linked List */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
          <h4 className="text-lg font-bold mb-3 text-green-700 dark:text-green-300">
            📘 Doubly Linked List
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
              <span>Forward traversal</span>
              <span className="text-green-600">✅</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
              <span>Backward traversal</span>
              <span className="text-green-600">✅</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
              <span>Memory per node</span>
              <span className="text-green-600 font-mono">data + 2 ptrs</span>
            </div>
          </div>
        </div>
        
        {/* Circular Linked List */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
          <h4 className="text-lg font-bold mb-3 text-purple-700 dark:text-purple-300">
            📙 Circular Linked List
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
              <span>Continuous traversal</span>
              <span className="text-green-600">✅</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
              <span>No NULL pointers</span>
              <span className="text-green-600">✅</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
              <span>Memory per node</span>
              <span className="text-purple-600 font-mono">data + 1 ptr</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Use Cases */}
      <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg">
        <h5 className="text-lg font-bold mb-3 text-center">💡 When to Use Each Type</h5>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-blue-600 font-bold mb-1">Singly Linked</div>
            <div className="text-gray-600 dark:text-gray-300">Simple queues, stacks, basic lists</div>
          </div>
          <div className="text-center">
            <div className="text-green-600 font-bold mb-1">Doubly Linked</div>
            <div className="text-gray-600 dark:text-gray-300">Browser history, text editors, LRU cache</div>
          </div>
          <div className="text-center">
            <div className="text-purple-600 font-bold mb-1">Circular Linked</div>
            <div className="text-gray-600 dark:text-gray-300">Round-robin scheduling, multiplayer games</div>
          </div>
        </div>
      </div>
    </div>
  );

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
              <span className="px-3 py-1 bg-white/20 rounded-full">🔗 Dynamic Structure</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">➡️ Sequential Access</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">⚡ O(1) Insertion</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Student Hook */}
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🎯 Why Linked Lists Matter
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-purple-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>

        {/* Linked List Fundamentals */}
        <section>
          <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            📚 Linked List Fundamentals
          </h2>
          
          {/* Concept */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-purple-500">
            <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">💡 Understanding Linked Lists</h3>
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
          <LinkedListVisualization />

          {/* Key Operations */}
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">🔧 Key Linked List Operations</h3>
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
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">🏢 Linked Lists in Industry</h3>
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

        {/* List Type Comparison */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            🔄 Types of Linked Lists
          </h2>
          <ListTypeComparison />
        </section>

        {/* Implementation Types */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
            🏗️ Implementation Approaches
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(sections.implementation_types).map(([type, details]) => (
              <div key={type} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 capitalize">
                  {type.replace('_', ' ')} List
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{details.concept}</p>
                
                <div className="space-y-4">
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
                  linkedlist_implementation.{selectedLanguage === 'cpp' ? 'cpp' : selectedLanguage === 'python' ? 'py' : selectedLanguage === 'javascript' ? 'js' : selectedLanguage === 'java' ? 'java' : 'c'}
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
            Linked Lists are the foundation of many complex data structures. Practice implementing different variations
            and explore their real-world applications in modern software development.
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full">📚 Study More DSA</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">💡 Practice Problems</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">🚀 Build Projects</span>
          </div>
        </footer>
      </main>
    </div>
  );
}