import React, { useState, useEffect } from "react";

const linkedListData = {
  topic: "Linked Lists",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Imagine you're on a treasure hunt where each clue tells you where to find the *next* clue. Linked Lists are just like this - a series of data items (nodes) where each one holds a pointer to the next, creating a flexible, chain-like structure. Unlike arrays, you don't need a fixed shelf number; you just follow the chain from one item to the next!",
    singlyLinkedList: {
      concept:
        "A Singly Linked List is a collection of nodes where each node contains two parts: a data element and a pointer (or reference) to the next node in the sequence. The list is navigated starting from a 'head' node and ending with a 'tail' node, which points to null.",
      realWorldExample:
        "Think of a music playlist where each song links to the next one. You can only move forward, not backward, and adding or removing a song is as simple as changing a link.",
      industry_applications: [
        "🎵 Spotify & Apple Music - Playlists and music queues",
        "🌐 Web Browsers - Back/Forward history buttons",
        "🧠 Operating Systems - Managing memory allocations",
        "✍️ Text Editors - Undo/Redo functionalities",
        "🖼️ Image Viewers - Traversing through photos",
        "📦 Dynamic Memory Allocation - Linked lists are a fundamental component of memory management",
      ],
      advantages: [
        "🔄 Dynamic Size - Grows and shrinks as needed",
        "➕ Efficient Insertion/Deletion - O(1) time complexity",
        "💾 Efficient Memory Usage - Only allocates memory for nodes needed",
        "🧠 Memory is non-contiguous - Nodes can be anywhere in memory",
      ],
      disadvantages: [
        "❌ No Random Access - O(n) to find an element",
        "🔍 Slower Traversal - Must start from head and iterate",
        "⬆️ More Memory Per Node - Requires extra pointer storage",
        "🔄 No Backwards Traversal - Only moves one direction",
      ],
    },
    doublyLinkedList: {
      concept:
        "A Doubly Linked List is an extension of the singly linked list. Each node now has two pointers: one pointing to the next node and another pointing to the previous node. This allows for traversal in both forward and backward directions.",
      realWorldExample:
        "Consider a word processor's Undo/Redo stack. You can easily move back and forth between states, making it a perfect use case for a doubly linked list.",
      industry_applications: [
        "💻 Web Browsers - Back/Forward button functionality",
        "✍️ Text Editors - Undo and Redo operations",
        "💾 Caches - Least Recently Used (LRU) cache implementation",
        "⚙️ Operating Systems - File system navigation",
        "🎮 Gaming - Turn-based game logic where you can undo moves",
        "📂 Data Structures - Implementing other structures like Deques and stacks",
      ],
      advantages: [
        " bidirectional traversal - Move forward and backward",
        "➕ Efficient Deletion - O(1) if you have the node reference",
        "💡 More intuitive for some applications",
        "🔍 Easier implementation of certain algorithms",
      ],
      disadvantages: [
        "💾 More Memory - Each node stores two pointers",
        "🔧 More Complex Operations - Insertion/deletion requires managing two pointers",
        "⬆️ Slower overall performance due to extra memory and pointer manipulation",
        "🔗 Still no random access by index",
      ],
    },
    circularLinkedList: {
      concept:
        "In a Circular Linked List, the last node's pointer is not null; instead, it points back to the first node (head), forming a continuous loop. This can be either a singly or doubly linked list. This structure is useful for managing things that need to wrap around.",
      realWorldExample:
        "A carousel of images that cycles back to the beginning after the last image. Or a multiplayer game where the turn passes from the last player back to the first.",
      industry_applications: [
        "🎮 Multiplayer Gaming - Passing turns from last player to first",
        "🖥️ Round-Robin Scheduling - Distributing CPU time in a cycle",
        "🗂️ OS Task Management - Task lists that cycle back to the beginning",
        "⏳ Music Players - Continuous song looping",
        "📝 Buffers - Data buffers that need to loop back",
        "🌐 Social Media - Story feeds that loop",
      ],
      advantages: [
        "♾️ Continuous Traversal - Can iterate indefinitely",
        "🔗 Eliminates need for 'null' pointer check",
        "🎯 Simple loop implementation",
        "🔄 Efficient queue and round-robin scheduling",
      ],
      disadvantages: [
        "🐛 Infinite Loop Risk - Can be difficult to stop traversal",
        "🔄 Traversal can be tricky - Requires a way to detect a full loop",
        "💡 More complex logic for basic operations",
        "🔗 Still no random access",
      ],
    },
    code_examples: {
      singly: {
        c: `// C Singly Linked List: Operations at the End
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

void addAtEnd(Node** head_ref, int new_data) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->data = new_data;
    new_node->next = NULL;
    if (*head_ref == NULL) {
        *head_ref = new_node;
        return;
    }
    Node* last = *head_ref;
    while (last->next != NULL) {
        last = last->next;
    }
    last->next = new_node;
}

void deleteLast(Node** head_ref) {
    if (*head_ref == NULL) return;
    if ((*head_ref)->next == NULL) {
        free(*head_ref);
        *head_ref = NULL;
        return;
    }
    Node* second_last = *head_ref;
    while (second_last->next->next != NULL) {
        second_last = second_last->next;
    }
    free(second_last->next);
    second_last->next = NULL;
}

int main() {
    Node* head = NULL;
    addAtEnd(&head, 10);
    addAtEnd(&head, 20);
    addAtEnd(&head, 30);
    printf("Added 10, 20, 30. List is: 10 -> 20 -> 30 -> NULL\n");
    deleteLast(&head);
    printf("Deleted last node. List is: 10 -> 20 -> NULL\n");
    return 0;
}`,
        cpp: `// C++ Singly Linked List: Operations at the End
#include <iostream>
class Node {
public:
    int data;
    Node* next;
    Node(int data) : data(data), next(nullptr) {}
};

class SinglyLinkedList {
private:
    Node* head;
public:
    SinglyLinkedList() : head(nullptr) {}
    void addAtEnd(int data) {
        Node* newNode = new Node(data);
        if (!head) { head = newNode; return; }
        Node* current = head;
        while (current->next) { current = current->next; }
        current->next = newNode;
    }
    void deleteLast() {
        if (!head) return;
        if (!head->next) { delete head; head = nullptr; return; }
        Node* current = head;
        while (current->next->next) { current = current->next; }
        delete current->next;
        current->next = nullptr;
    }
};

int main() {
    SinglyLinkedList list;
    list.addAtEnd(10);
    list.addAtEnd(20);
    list.addAtEnd(30);
    std::cout << "Added 10, 20, 30.\n";
    list.deleteLast();
    std::cout << "Deleted last node.\n";
    return 0;
}`,
        java: `// Java Singly Linked List: Operations at the End
public class SinglyLinkedList {
    static class Node {
        int data;
        Node next;
        Node(int d) { data = d; next = null; }
    }
    Node head;
    public void addAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) { head = newNode; return; }
        Node last = head;
        while (last.next != null) { last = last.next; }
        last.next = newNode;
    }
    public void deleteLast() {
        if (head == null) return;
        if (head.next == null) { head = null; return; }
        Node secondLast = head;
        while (secondLast.next.next != null) { secondLast = secondLast.next; }
        secondLast.next = null;
    }
    public static void main(String[] args) {
        SinglyLinkedList list = new SinglyLinkedList();
        list.addAtEnd(10);
        list.addAtEnd(20);
        list.addAtEnd(30);
        System.out.println("Added 10, 20, 30.");
        list.deleteLast();
        System.out.println("Deleted last node.");
    }
}`,
        python: `// Python Singly Linked List: Operations at the End
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def add_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def delete_last(self,):
        if self.head is None: return
        if self.head.next is None:
            self.head = None
            return
        second_last = self.head
        while second_last.next.next:
            second_last = second_last.next
        second_last.next = None

my_list = SinglyLinkedList()
my_list.add_at_end(10)
my_list.add_at_end(20)
my_list.add_at_end(30)
print("Added 10, 20, 30.")
my_list.delete_last()
print("Deleted last node.")`,
        javascript: `// JavaScript Singly Linked List: Operations at the End
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  addAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  deleteLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
}
const list = new SinglyLinkedList();
list.addAtEnd(10);
list.addAtEnd(20);
list.addAtEnd(30);
console.log("Added 10, 20, 30.");
list.deleteLast();
console.log("Deleted last node.");`
      },
      doubly: {
        c: `// C Doubly Linked List: Insert/Delete at Middle
#include <stdio.h>
#include <stdlib.h>
typedef struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
} Node;
void addAtEnd(Node** head_ref, Node** tail_ref, int new_data) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->data = new_data;
    new_node->next = NULL;
    if (*head_ref == NULL) {
        new_node->prev = NULL;
        *head_ref = new_node;
        *tail_ref = new_node;
        return;
    }
    (*tail_ref)->next = new_node;
    new_node->prev = *tail_ref;
    *tail_ref = new_node;
}
void insertAt(Node** head_ref, Node** tail_ref, int new_data, int position) {
    if (position < 0) return;
    if (position == 0) { // simplified for demo
        // code to insert at head
        return;
    }
    Node* current = *head_ref;
    for(int i = 0; i < position - 1 && current != NULL; i++) {
        current = current->next;
    }
    if (current == NULL) return;
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->data = new_data;
    new_node->next = current->next;
    new_node->prev = current;
    if (current->next != NULL) {
        current->next->prev = new_node;
    } else {
        *tail_ref = new_node;
    }
    current->next = new_node;
}
void deleteAt(Node** head_ref, Node** tail_ref, int position) {
    if (*head_ref == NULL || position < 0) return;
    Node* current = *head_ref;
    for(int i = 0; i < position && current != NULL; i++) {
        current = current->next;
    }
    if (current == NULL) return;
    if (current->prev != NULL) {
        current->prev->next = current->next;
    } else {
        *head_ref = current->next;
    }
    if (current->next != NULL) {
        current->next->prev = current->prev;
    } else {
        *tail_ref = current->prev;
    }
    free(current);
}
int main() {
    Node* head = NULL;
    Node* tail = NULL;
    addAtEnd(&head, &tail, 10);
    addAtEnd(&head, &tail, 20);
    addAtEnd(&head, &tail, 30);
    addAtEnd(&head, &tail, 40);
    printf("Initial list: 10 <-> 20 <-> 30 <-> 40\n");
    insertAt(&head, &tail, 25, 2);
    printf("After inserting 25 at index 2: 10 <-> 20 <-> 25 <-> 30 <-> 40\n");
    deleteAt(&head, &tail, 3);
    printf("After deleting node at index 3: 10 <-> 20 <-> 25 <-> 40\n");
    return 0;
}`,
        cpp: `// C++ Doubly Linked List: Insert/Delete at Middle
#include <iostream>
class Node {
public:
    int data;
    Node* prev;
    Node* next;
    Node(int data) : data(data), prev(nullptr), next(nullptr) {}
};
class DoublyLinkedList {
private:
    Node* head;
    Node* tail;
public:
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}
    void addAtEnd(int data) {
        Node* newNode = new Node(data);
        if (!head) { head = newNode; tail = newNode; return; }
        tail->next = newNode; newNode->prev = tail; tail = newNode;
    }
    void insertAt(int data, int position) {
        if (position < 0) return;
        if (position == 0) { /* code to insert at head */ return; }
        Node* current = head;
        for (int i = 0; i < position - 1 && current; ++i) { current = current->next; }
        if (!current) return;
        Node* newNode = new Node(data);
        newNode->next = current->next; newNode->prev = current;
        if (current->next) { current->next->prev = newNode; } else { tail = newNode; }
        current->next = newNode;
    }
    void deleteAt(int position) {
        if (!head || position < 0) return;
        if (position == 0) { /* code to delete head */ return; }
        Node* current = head;
        for (int i = 0; i < position && current; ++i) { current = current->next; }
        if (!current) return;
        current->prev->next = current->next;
        if (current->next) { current->next->prev = current->prev; } else { tail = current->prev; }
        delete current;
    }
};
int main() {
    DoublyLinkedList list;
    list.addAtEnd(10); list.addAtEnd(20); list.addAtEnd(30); list.addAtEnd(40);
    std::cout << "Initial list: 10 <-> 20 <-> 30 <-> 40\n";
    list.insertAt(25, 2);
    std::cout << "After inserting 25 at index 2: 10 <-> 20 <-> 25 <-> 30 <-> 40\n";
    list.deleteAt(3);
    std::cout << "After deleting node at index 3: 10 <-> 20 <-> 25 <-> 40\n";
    return 0;
}`,
        java: `// Java Doubly Linked List: Insert/Delete at Middle
public class DoublyLinkedList {
    static class Node {
        int data;
        Node prev, next;
        Node(int d) { data = d; prev = null; next = null; }
    }
    Node head, tail;
    public void addAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) { head = newNode; tail = newNode; return; }
        tail.next = newNode; newNode.prev = tail; tail = newNode;
    }
    public void insertAt(int data, int position) {
        if (position < 0) return;
        if (position == 0) { // code to insert at head
            return;
        }
        Node current = head;
        int i = 0;
        while (i < position - 1 && current != null) { current = current.next; i++; }
        if (current == null) return;
        Node newNode = new Node(data);
        newNode.next = current.next; newNode.prev = current;
        if (current.next != null) { current.next.prev = newNode; } else { tail = newNode; }
        current.next = newNode;
    }
    public void deleteAt(int position) {
        if (head == null || position < 0) return;
        if (position == 0) { // code to delete head
            return;
        }
        Node current = head;
        int i = 0;
        while (i < position && current != null) { current = current.next; i++; }
        if (current == null) return;
        current.prev.next = current.next;
        if (current.next != null) { current.next.prev = current.prev; } else { tail = current.prev; }
    }
    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        list.addAtEnd(10); list.addAtEnd(20); list.addAtEnd(30); list.addAtEnd(40);
        System.out.println("Initial list: 10 <-> 20 <-> 30 <-> 40");
        list.insertAt(25, 2);
        System.out.println("After inserting 25 at index 2: 10 <-> 20 <-> 25 <-> 30 <-> 40");
        list.deleteAt(3);
        System.out.println("After deleting node at index 3: 10 <-> 20 <-> 25 <-> 40");
    }
}`,
        python: `// Python Doubly Linked List: Insert/Delete at Middle
class Node:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    def add_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return
        self.tail.next = new_node
        new_node.prev = self.tail
        self.tail = new_node
    def insert_at(self, data, position):
        if position < 0: return
        if position == 0: # code to insert at head
            return
        current = self.head
        for _ in range(position - 1):
            if not current: return
            current = current.next
        if not current: return
        new_node = Node(data)
        new_node.next = current.next
        new_node.prev = current
        if current.next: current.next.prev = new_node
        else: self.tail = new_node
        current.next = new_node
    def delete_at(self, position):
        if self.head is None or position < 0: return
        if position == 0: # code to delete head
            return
        current = self.head
        for _ in range(position):
            if not current: return
            current = current.next
        if not current: return
        current.prev.next = current.next
        if current.next:
            current.next.prev = current.prev
        else:
            self.tail = current.prev
my_list = DoublyLinkedList()
my_list.add_at_end(10); my_list.add_at_end(20); my_list.add_at_end(30); my_list.add_at_end(40);
print("Initial list: 10 <-> 20 <-> 30 <-> 40")
my_list.insert_at(25, 2);
print("After inserting 25 at index 2: 10 <-> 20 <-> 25 <-> 30 <-> 40")
my_list.delete_at(3);
print("After deleting node at index 3: 10 <-> 20 <-> 25 <-> 40")`,
        javascript: `// JavaScript Doubly Linked List: Insert/Delete at Middle
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) { this.head = newNode; this.tail = newNode; return; }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  insertAt(data, position) {
    if (position === 0) { /* Handle head insertion */ }
    let current = this.head;
    let i = 0;
    while (i < position - 1 && current) { current = current.next; i++; }
    if (!current) return;
    const newNode = new Node(data);
    newNode.next = current.next;
    newNode.prev = current;
    if (current.next) { current.next.prev = newNode; } else { this.tail = newNode; }
    current.next = newNode;
  }
  deleteAt(position) {
    if (!this.head) return;
    if (position === 0) { /* Handle head deletion */ }
    let current = this.head;
    let i = 0;
    while (i < position && current) { current = current.next; i++; }
    if (!current) return;
    current.prev.next = current.next;
    if (current.next) { current.next.prev = current.prev; } else { this.tail = current.prev; }
  }
}
const list = new DoublyLinkedList();
list.addAtEnd(10); list.addAtEnd(20); list.addAtEnd(30); list.addAtEnd(40);
console.log("Initial list: ", list);
list.insertAt(25, 2);
console.log("After inserting 25 at index 2: ", list);
list.deleteAt(3);
console.log("After deleting node at index 3: ", list);`
      },
      circular: {
        c: `// C Circular Linked List: Traversal
#include <stdio.h>
#include <stdlib.h>
typedef struct Node {
    int data;
    struct Node* next;
} Node;
void addAtEnd(Node** head_ref, int new_data) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->data = new_data;
    if (*head_ref == NULL) {
        *head_ref = new_node;
        new_node->next = *head_ref;
        return;
    }
    Node* last = *head_ref;
    while (last->next != *head_ref) {
        last = last->next;
    }
    last->next = new_node;
    new_node->next = *head_ref;
}
Node* findNode(Node* head, int search_data) {
    if (head == NULL) return NULL;
    Node* current = head;
    do {
        if (current->data == search_data) return current;
        current = current->next;
    } while (current != head);
    return NULL;
}
int main() {
    Node* head = NULL;
    addAtEnd(&head, 1); addAtEnd(&head, 2); addAtEnd(&head, 3);
    printf("Added 1, 2, 3.\n");
    Node* found = findNode(head, 2);
    if (found != NULL) { printf("Node with data 2 found.\n"); }
    else { printf("Node with data 2 not found.\n"); }
    Node* notFound = findNode(head, 99);
    if (notFound != NULL) { printf("Node with data 99 found.\n"); }
    else { printf("Node with data 99 not found.\n"); }
    return 0;
}`,
        cpp: `// C++ Circular Linked List: Traversal
#include <iostream>
class Node {
public:
    int data;
    Node* next;
    Node(int data) : data(data), next(nullptr) {}
};
class CircularSinglyLinkedList {
private:
    Node* head;
public:
    CircularSinglyLinkedList() : head(nullptr) {}
    void addAtEnd(int data) {
        Node* newNode = new Node(data);
        if (!head) { head = newNode; newNode->next = head; return; }
        Node* current = head;
        while (current->next != head) { current = current->next; }
        current->next = newNode;
        newNode->next = head;
    }
    Node* findNode(int data) {
        if (!head) return nullptr;
        Node* current = head;
        do {
            if (current->data == data) return current;
            current = current->next;
        } while (current != head);
        return nullptr;
    }
};
int main() {
    CircularSinglyLinkedList list;
    list.addAtEnd(1); list.addAtEnd(2); list.addAtEnd(3);
    std::cout << "Added 1, 2, 3.\n";
    Node* found = list.findNode(2);
    if (found) { std::cout << "Node with data 2 found.\n"; }
    else { std::cout << "Node with data 2 not found.\n"; }
    Node* notFound = list.findNode(99);
    if (notFound) { std::cout << "Node with data 99 found.\n"; }
    else { std::cout << "Node with data 99 not found.\n"; }
    return 0;
}`,
        java: `// Java Circular Linked List: Traversal
public class CircularSinglyLinkedList {
    static class Node {
        int data;
        Node next;
        Node(int d) { data = d; next = null; }
    }
    Node head;
    public void addAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) { head = newNode; newNode.next = head; return; }
        Node last = head;
        while (last.next != head) { last = last.next; }
        last.next = newNode;
        newNode.next = head;
    }
    public Node findNode(int data) {
        if (head == null) return null;
        Node current = head;
        do {
            if (current.data == data) return current;
            current = current.next;
        } while (current != head);
        return null;
    }
    public static void main(String[] args) {
        CircularSinglyLinkedList list = new CircularSinglyLinkedList();
        list.addAtEnd(1); list.addAtEnd(2); list.addAtEnd(3);
        System.out.println("Added 1, 2, 3.");
        Node found = list.findNode(2);
        if (found != null) { System.out.println("Node with data 2 found."); }
        else { System.out.println("Node with data 2 not found."); }
        Node notFound = list.findNode(99);
        if (notFound != null) { System.out.println("Node with data 99 found."); }
        else { System.out.println("Node with data 99 not found."); }
    }
}`,
        python: `// Python Circular Linked List: Traversal
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
class CircularSinglyLinkedList:
    def __init__(self):
        self.head = None
    def add_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            new_node.next = self.head
            return
        last = self.head
        while last.next != self.head:
            last = last.next
        last.next = new_node
        new_node.next = self.head
    def find_node(self, data):
        if self.head is None: return None
        current = self.head
        while True:
            if current.data == data: return current
            current = current.next
            if current == self.head: break
        return None
my_list = CircularSinglyLinkedList()
my_list.add_at_end(1); my_list.add_at_end(2); my_list.add_at_end(3);
print("Added 1, 2, 3.")
found = my_list.find_node(2)
if found: print("Node with data 2 found.")
else: print("Node with data 2 not found.")
notFound = my_list.find_node(99)
if notFound: print("Node with data 99 found.")
else: print("Node with data 99 not found.")`,
        javascript: `// JavaScript Circular Linked List: Traversal
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class CircularSinglyLinkedList {
  constructor() {
    this.head = null;
  }
  addAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }
    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    current.next = newNode;
    newNode.next = this.head;
  }
  findNode(data) {
    if (!this.head) return null;
    let current = this.head;
    do {
      if (current.data === data) return current;
      current = current.next;
    } while (current !== this.head);
    return null;
  }
}
const list = new CircularSinglyLinkedList();
list.addAtEnd(1); list.addAtEnd(2); list.addAtEnd(3);
console.log("Added 1, 2, 3.");
const foundNode = list.findNode(2);
console.log(foundNode);
const notFound = list.findNode(99);
console.log(notFound);`
      }
    },
    interview_questions: [
      {
        question:
          "What is the time complexity of searching for an element in a singly linked list?",
        answer:
          "O(n) - Linear time. You must start at the head and traverse each node one by one until you find the element or reach the end of the list.",
        difficulty: "Easy",
      },
      {
        question:
          "Explain the primary difference between a linked list and an array.",
        answer:
          "Arrays store data in contiguous memory locations and provide O(1) random access by index, but insertion/deletion is O(n). Linked lists store data in non-contiguous memory, with each node pointing to the next, offering O(1) insertion/deletion at a known position but O(n) traversal/search.",
        difficulty: "Medium",
      },
      {
        question:
          "How would you detect a loop in a linked list? (Floyd's Cycle-Finding Algorithm)",
        answer:
          "Use two pointers, a 'slow' pointer and a 'fast' pointer. The slow one moves one node at a time, and the fast one moves two nodes at a time. If there is a loop, they will eventually meet at the same node. If the fast pointer reaches null, there is no loop.",
        difficulty: "Hard",
      },
      {
        question:
          "When is a circular linked list a better choice than a doubly linked list?",
        answer:
          "A circular linked list is better for continuous-looping tasks like a round-robin scheduler or a streaming media player that cycles back to the start. It's also simpler if you only need a single pointer (to the tail) to access both the head and tail in O(1) time.",
        difficulty: "Medium",
      },
      {
        question: "What are the advantages and disadvantages of linked lists?",
        answer:
          "Advantages: Dynamic size, efficient insertion and deletion (O(1)), and non-contiguous memory allocation. Disadvantages: Lack of random access (O(n)), extra memory for pointers, and slower traversal than arrays.",
        difficulty: "Easy",
      },
    ],
   project_ideas: [
  {
    title: "Music Playlist Manager",
    description:
      "Build a command-line music player that uses a linked list to manage songs. Allow users to add, remove, and skip songs, as well as move forward and backward in the playlist.",
    difficulty: "Beginner",
    technologies: ["Python"],
  },
  {
    title: "Browser History Simulator",
    description:
      "Create a program that simulates a web browser's history using a doubly linked list. Implement functions for 'back', 'forward', and 'visit new page'.",
    difficulty: "Intermediate",
    technologies: ["Python"],
  },
  {
    title: "Round-Robin Task Scheduler",
    description:
      "Develop a task scheduler for a simple operating system that uses a circular linked list to give CPU time to each process in a round-robin fashion.",
    difficulty: "Intermediate",
    technologies: ["Python"],
  },
  {
    title: "Undo/Redo Stack for Text Editor",
    description:
      "Implement the core logic for a text editor's undo/redo functionality using a doubly linked list. Each node would represent a state of the document.",
    difficulty: "Advanced",
    technologies: ["Python"],
  },
]

  },
};

const highlightSyntax = (code, language) => {
  const keywords = {
    c: ['#include', 'stdio.h', 'stdlib.h', 'typedef', 'struct', 'int', 'void', 'main', 'Node', 'data', 'next', 'prev', 'head', 'tail', 'ref', 'new_data', 'position', 'malloc', 'sizeof', 'NULL', 'printf', 'free', 'while', 'for', 'if', 'else', 'return'],
    cpp: ['#include', 'iostream', 'class', 'public', 'private', 'int', 'void', 'main', 'Node', 'data', 'next', 'prev', 'head', 'tail', 'addAtEnd', 'deleteLast', 'insertAt', 'deleteAt', 'printList', 'new', 'nullptr', 'cout', 'while', 'for', 'if', 'else', 'return'],
    java: ['public', 'class', 'static', 'void', 'main', 'int', 'Node', 'data', 'next', 'prev', 'head', 'tail', 'addAtEnd', 'deleteLast', 'insertAt', 'deleteAt', 'printList', 'null', 'System.out.println', 'while', 'if', 'else', 'return'],
    python: ['class', 'def', '__init__', 'self', 'data', 'next', 'prev', 'head', 'tail', 'add_at_end', 'delete_last', 'insert_at', 'delete_at', 'print_list', 'is', 'None', 'print', 'while', 'for', 'if', 'else', 'return'],
    javascript: [
      'class', 'constructor', 'this', 'return', 'addAtEnd', 'deleteLast', 'insertAt', 'deleteAt',
      'console.log', 'if', 'else', 'while', 'for', 'do', 'let', 'const', 'new', 'null', 'import',
      'export', 'function', 'static', 'var', 'private', 'public', 'super', 'extends', 'try', 'catch', 'finally',
      'instanceof', 'typeof', 'true', 'false', 'break', 'continue', 'switch', 'case', 'default'
    ],
  };
  const strings = /"[^"]*"|'[^']*'|`[^`]*`/g;
  const comments = /\/\/.*$|\/\*[\s\S]*?\*\//gm;
  const numbers = /\b\d+\.?\d*\b/g;

  let highlightedCode = code;
  highlightedCode = highlightedCode.replace(strings, (match) => `<span style="color: #22c55e;">${match}</span>`);
  highlightedCode = highlightedCode.replace(comments, (match) => `<span style="color: #6b7280;">${match}</span>`);
  highlightedCode = highlightedCode.replace(numbers, (match) => `<span style="color: #f97316;">${match}</span>`);

  const langKeywords = keywords[language] || [];
  langKeywords.forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    highlightedCode = highlightedCode.replace(regex, (match) => `<span style="color: #3b82f6;">${match}</span>`);
  });
  return highlightedCode;
};

class SinglyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.address = "0x" + Math.random().toString(16).substr(2, 6);
  }
}

class DoublyNode {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
    this.address = "0x" + Math.random().toString(16).substr(2, 6);
  }
}

const useSinglyLinkedList = (initialNodes) => {
  const [nodes, setNodes] = useState(initialNodes.map(val => new SinglyNode(val)));
  const [animatingIndex, setAnimatingIndex] = useState(-1);
  const [lastOperation, setLastOperation] = useState(null);

  const addNode = (value, position) => {
    const newNode = new SinglyNode(value);
    let newNodes = [...nodes];
    if (position === 'head') {
      newNode.next = newNodes.length > 0 ? newNodes[0] : null;
      newNodes.unshift(newNode);
      setAnimatingIndex(0);
    } else if (position === 'end') {
      if (newNodes.length > 0) {
        newNodes[newNodes.length - 1].next = newNode;
      }
      newNodes.push(newNode);
      setAnimatingIndex(newNodes.length - 1);
    } else { // middle
      const index = Math.min(Math.max(0, parseInt(position)), newNodes.length - 1);
      newNode.next = newNodes[index];
      newNodes[index - 1].next = newNode;
      newNodes.splice(index, 0, newNode);
      setAnimatingIndex(index);
    }
    setNodes(newNodes);
    setLastOperation('add');
  };

  const deleteNode = (position) => {
    let newNodes = [...nodes];
    if (newNodes.length === 0) return;
    if (position === 'head') {
      newNodes = newNodes.slice(1);
      setAnimatingIndex(0);
    } else if (position === 'end') {
      if (newNodes.length > 1) {
        newNodes[newNodes.length - 2].next = null;
      }
      newNodes.pop();
      setAnimatingIndex(newNodes.length - 1);
    } else { // middle
      const index = Math.min(Math.max(1, parseInt(position)), newNodes.length - 1);
      newNodes[index - 1].next = newNodes[index + 1];
      newNodes.splice(index, 1);
      setAnimatingIndex(index);
    }
    setNodes(newNodes);
    setLastOperation('delete');
  };
  
  useEffect(() => {
    if (animatingIndex >= 0) {
      const timer = setTimeout(() => setAnimatingIndex(-1), 1000);
      return () => clearTimeout(timer);
    }
  }, [animatingIndex]);

  return { nodes, addNode, deleteNode, animatingIndex, lastOperation };
};

const useDoublyLinkedList = (initialNodes) => {
    const [nodes, setNodes] = useState(initialNodes.map(val => new DoublyNode(val)));
    const [animatingIndex, setAnimatingIndex] = useState(-1);
    const [lastOperation, setLastOperation] = useState(null);

    const addNode = (value, position) => {
        const newNode = new DoublyNode(value);
        let newNodes = [...nodes];
        if (position === 'head') {
            newNode.next = newNodes.length > 0 ? newNodes[0] : null;
            if (newNodes.length > 0) newNodes[0].prev = newNode;
            newNodes.unshift(newNode);
            setAnimatingIndex(0);
        } else if (position === 'end') {
            if (newNodes.length > 0) {
                newNodes[newNodes.length - 1].next = newNode;
                newNode.prev = newNodes[newNodes.length - 1];
            }
            newNodes.push(newNode);
            setAnimatingIndex(newNodes.length - 1);
        } else {
            const index = Math.min(Math.max(0, parseInt(position)), newNodes.length - 1);
            newNode.next = newNodes[index];
            newNode.prev = newNodes[index - 1];
            newNodes[index - 1].next = newNode;
            newNodes[index].prev = newNode;
            newNodes.splice(index, 0, newNode);
            setAnimatingIndex(index);
        }
        setNodes(newNodes);
        setLastOperation('add');
    };

    const deleteNode = (position) => {
        let newNodes = [...nodes];
        if (newNodes.length === 0) return;
        if (position === 'head') {
            newNodes = newNodes.slice(1);
            if (newNodes.length > 0) newNodes[0].prev = null;
            setAnimatingIndex(0);
        } else if (position === 'end') {
            if (newNodes.length > 1) {
                newNodes[newNodes.length - 2].next = null;
            }
            newNodes.pop();
            setAnimatingIndex(newNodes.length - 1);
        } else {
            const index = Math.min(Math.max(1, parseInt(position)), newNodes.length - 1);
            newNodes[index - 1].next = newNodes[index].next;
            if (newNodes[index].next) {
                newNodes[index].next.prev = newNodes[index].prev;
            }
            newNodes.splice(index, 1);
            setAnimatingIndex(index);
        }
        setNodes(newNodes);
        setLastOperation('delete');
    };
  
    useEffect(() => {
        if (animatingIndex >= 0) {
            const timer = setTimeout(() => setAnimatingIndex(-1), 1000);
            return () => clearTimeout(timer);
        }
    }, [animatingIndex]);

    return { nodes, addNode, deleteNode, animatingIndex, lastOperation };
};

const useCircularLinkedList = (initialNodes) => {
    const [nodes, setNodes] = useState(initialNodes.map(val => new SinglyNode(val)));
    const [animatingIndex, setAnimatingIndex] = useState(-1);
    const [lastOperation, setLastOperation] = useState(null);

    useEffect(() => {
      if (nodes.length > 0) {
        const newNodes = [...nodes];
        newNodes[newNodes.length - 1].next = newNodes[0];
        setNodes(newNodes);
      }
    }, []);

    const addNode = (value, position) => {
        const newNode = new SinglyNode(value);
        let newNodes = [...nodes];
        if (position === 'head') {
          newNode.next = newNodes.length > 0 ? newNodes[0] : newNode;
          if (newNodes.length > 0) newNodes[newNodes.length - 1].next = newNode;
          newNodes.unshift(newNode);
          setAnimatingIndex(0);
        } else if (position === 'end') {
          if (newNodes.length > 0) {
            newNodes[newNodes.length - 1].next = newNode;
            newNode.next = newNodes[0];
          } else {
            newNode.next = newNode;
          }
          newNodes.push(newNode);
          setAnimatingIndex(newNodes.length - 1);
        } else { // middle
          const index = Math.min(Math.max(0, parseInt(position)), newNodes.length - 1);
          newNode.next = newNodes[index];
          newNodes[index - 1].next = newNode;
          newNodes.splice(index, 0, newNode);
          setAnimatingIndex(index);
        }
        setNodes(newNodes);
        setLastOperation('add');
    };

    const deleteNode = (position) => {
        let newNodes = [...nodes];
        if (newNodes.length === 0) return;
        if (position === 'head') {
          newNodes = newNodes.slice(1);
          if (newNodes.length > 0) {
            newNodes[newNodes.length - 1].next = newNodes[0];
          }
          setAnimatingIndex(0);
        } else if (position === 'end') {
          if (newNodes.length > 1) {
            newNodes[newNodes.length - 2].next = newNodes[0];
          }
          newNodes.pop();
          setAnimatingIndex(newNodes.length - 1);
        } else { // middle
          const index = Math.min(Math.max(1, parseInt(position)), newNodes.length - 1);
          newNodes[index - 1].next = newNodes[index].next;
          newNodes.splice(index, 1);
          setAnimatingIndex(index);
        }
        setNodes(newNodes);
        setLastOperation('delete');
    };
  
    useEffect(() => {
        if (animatingIndex >= 0) {
            const timer = setTimeout(() => setAnimatingIndex(-1), 1000);
            return () => clearTimeout(timer);
        }
    }, [animatingIndex]);

    return { nodes, addNode, deleteNode, animatingIndex, lastOperation };
};

export default function EnhancedLinkedListPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [activeTab, setActiveTab] = useState("singly");
  const [inputValue, setInputValue] = useState("");
  const [inputIndex, setInputIndex] = useState("");

  const singlyList = useSinglyLinkedList([13, 36, 39, 52, 65]);
  const doublyList = useDoublyLinkedList([10, 20, 30, 40]);
  const circularList = useCircularLinkedList([1, 2, 3, 4]);

  const { topic, category, sections } = linkedListData;
  const languages = ["c", "cpp", "java", "python", "javascript"];
  
  const getCodeExample = (lang) => {
      switch (activeTab) {
          case 'singly':
              if (lang === 'c') return sections.code_examples.singly.c;
              if (lang === 'cpp') return sections.code_examples.singly.cpp;
              if (lang === 'java') return sections.code_examples.singly.java;
              if (lang === 'python') return sections.code_examples.singly.python;
              if (lang === 'javascript') return sections.code_examples.singly.javascript;
              break;
          case 'doubly':
              if (lang === 'c') return sections.code_examples.doubly.c;
              if (lang === 'cpp') return sections.code_examples.doubly.cpp;
              if (lang === 'java') return sections.code_examples.doubly.java;
              if (lang === 'python') return sections.code_examples.doubly.python;
              if (lang === 'javascript') return sections.code_examples.doubly.javascript;
              break;
          case 'circular':
              if (lang === 'c') return sections.code_examples.circular.c;
              if (lang === 'cpp') return sections.code_examples.circular.cpp;
              if (lang === 'java') return sections.code_examples.circular.java;
              if (lang === 'python') return sections.code_examples.circular.python;
              if (lang === 'javascript') return sections.code_examples.circular.javascript;
              break;
          default:
              return '';
      }
      return '';
  };

  const getActiveTabProps = () => {
    switch (activeTab) {
        case 'singly': return singlyList;
        case 'doubly': return doublyList;
        case 'circular': return circularList;
        default: return {};
    }
  };
  
  const activeTabProps = getActiveTabProps();

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
              <span className="px-3 py-1 bg-white/20 rounded-full">🔗 Singly</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">↔️ Doubly</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🔄 Circular</span>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section className="transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-4xl font-bold mb-6 text-center">
    🎯
    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Why Linked Lists Matter
    </span>
</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
              {sections.student_hook}
            </p>
          </div>
        </section>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("singly")}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeTab === "singly"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
          >
            Singly Linked List
          </button>
          <button
            onClick={() => setActiveTab("doubly")}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeTab === "doubly"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
          >
            Doubly Linked List
          </button>
          <button
            onClick={() => setActiveTab("circular")}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeTab === "circular"
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
          >
            Circular Linked List
          </button>
        </div>
        
        {/* Mobile View Message */}
        <div className="block md:hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-center text-white">
            <p className="text-sm">
              💻 <strong>Use laptop/tablet for interactive visualizations</strong>
            </p>
          </div>
        </div>
        
        {/* Visual & Interactive Demo (Desktop Only) */}
        <section className="hidden md:block">
       <h2 className="text-4xl font-bold mb-6 text-center">
    👀
    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Visual & Interactive Demo
    </span>
</h2>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Value"
                  className="px-4 py-2 w-28 text-center border-2 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col items-center">
                <input
                  type="number"
                  value={inputIndex}
                  onChange={(e) => setInputIndex(e.target.value)}
                  placeholder="Index"
                  className="px-4 py-2 w-28 text-center border-2 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() => inputValue && activeTabProps.addNode(inputValue, 'head')}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
                >
                  Add Head
                </button>
                <button
                  onClick={() => inputValue && activeTabProps.addNode(inputValue, 'end')}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
                >
                  Add End
                </button>
                <button
                  onClick={() => inputValue && inputIndex && activeTabProps.addNode(inputValue, inputIndex)}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
                >
                  Add Middle
                </button>
                <button
                  onClick={() => activeTabProps.deleteNode('head')}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
                >
                  Del Head
                </button>
                <button
                  onClick={() => activeTabProps.deleteNode('end')}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
                >
                  Del End
                </button>
                <button
                  onClick={() => inputIndex && activeTabProps.deleteNode(inputIndex)}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
                >
                  Del Middle
                </button>
              </div>
            </div>

            
            <div className="relative flex flex-wrap justify-center items-start pt-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-lg font-bold">
                {activeTabProps.nodes.length > 0 ? (
                  <div className="flex items-center space-x-2">
                    <span className="px-4 py-1 rounded-full bg-blue-500 text-white">Head</span>
                    {activeTab === 'singly' || activeTab === 'doubly' && (
                        <span className="px-4 py-1 rounded-full bg-orange-500 text-white">Tail</span>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-500">List is empty.</span>
                )}
              </div>
              <div className="flex flex-wrap justify-center items-start pt-12 space-x-4">
                {activeTabProps.nodes.map((node, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center transform transition-all duration-500 ${activeTabProps.animatingIndex === index 
                        ? (activeTabProps.lastOperation === 'add' 
                            ? 'scale-110' 
                            : 'opacity-0 scale-50') 
                        : ''
                    }`}
                  >
                    <div className={`p-4 rounded-xl shadow-lg border-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200`}>
                      <div className="font-bold text-lg text-center">{node.value}</div>
                      <div className="text-xs text-gray-500 text-center">{node.address}</div>
                      <div className="mt-2 text-center text-xs text-blue-500">
                          {activeTab === 'singly' && <span className="font-mono">next</span>}
                          {activeTab === 'doubly' && <span className="font-mono">prev | next</span>}
                      </div>
                    </div>
                    {index < activeTabProps.nodes.length - 1 && (
                      <span className="my-2 text-gray-500 text-2xl">{activeTab === 'doubly' ? '↔️' : '→'}</span>
                    )}
                    {index === activeTabProps.nodes.length - 1 && activeTab === 'circular' && (
                        <span className="my-2 text-gray-500 text-2xl">🔄</span>
                    )}
              </div>
              ))}
            </div>
          </div>
</div>
        </section>

        {activeTab === "singly" && (
          <section>
           <h2 className="text-5xl font-bold mb-8 text-center">
    🔗
    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Singly Linked List
    </span>
</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
              <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">💡 Understanding Singly Linked Lists</h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
                {sections.singlyLinkedList.concept}
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  <span className="font-bold">Real-world example:</span> {sections.singlyLinkedList.realWorldExample}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
                <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
                <ul className="space-y-3">
                  {sections.singlyLinkedList.advantages.map((advantage, index) => (
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
                  {sections.singlyLinkedList.disadvantages.map((disadvantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                      <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-700 dark:text-blue-300">🏢 Singly Linked Lists in Industry</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.singlyLinkedList.industry_applications.map((application, index) => (
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
        )}
        {activeTab === "doubly" && (
          <section>
          <h2 className="text-5xl font-bold mb-8 text-center">
    ↔️
    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
        Doubly Linked List
    </span>
</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">💡 Understanding Doubly Linked Lists</h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
                {sections.doublyLinkedList.concept}
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  <span className="font-bold">Real-world example:</span> {sections.doublyLinkedList.realWorldExample}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
                <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
                <ul className="space-y-3">
                  {sections.doublyLinkedList.advantages.map((advantage, index) => (
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
                  {sections.doublyLinkedList.disadvantages.map((disadvantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                      <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-green-300">🏢 Doubly Linked Lists in Industry</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.doublyLinkedList.industry_applications.map((application, index) => (
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
        )}
        {activeTab === "circular" && (
          <section>
        <h2 className="text-5xl font-bold mb-8 text-center">
    🔄
    <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
        Circular Linked List
    </span>
</h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-purple-500">
              <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">💡 Understanding Circular Linked Lists</h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
                {sections.circularLinkedList.concept}
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
                <p className="text-purple-800 dark:text-purple-200 font-medium">
                  <span className="font-bold">Real-world example:</span> {sections.circularLinkedList.realWorldExample}
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
                <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3>
                <ul className="space-y-3">
                  {sections.circularLinkedList.advantages.map((advantage, index) => (
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
                  {sections.circularLinkedList.disadvantages.map((disadvantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-red-500 text-lg">{disadvantage.split(' ')[0]}</span>
                      <span className="text-gray-700 dark:text-gray-300">{disadvantage.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">🏢 Circular Linked Lists in Industry</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sections.circularLinkedList.industry_applications.map((application, index) => (
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
        )}
        <section>
       <h2 className="text-4xl font-bold mb-8 text-center">
    💻
    <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
        Real-World Code Examples
    </span>
</h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-700 p-4">
              <div className="flex flex-wrap justify-center gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedLanguage === lang
                        ? "bg-rose-500 text-white shadow-lg"
                        : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500"
                      }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              <pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed">
                <code
                  dangerouslySetInnerHTML={{
                    __html: highlightSyntax(getCodeExample(selectedLanguage), selectedLanguage)
                  }}
                />
              </pre>
            </div>
          </div>
        </section>
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
                  { operation: "Access by Index", time: "O(n)", space: "O(1)", notes: "Requires traversal from the head" },
                  { operation: "Search (Traversal)", time: "O(n)", space: "O(1)", notes: "Must check each node sequentially" },
                  { operation: "Insertion at Head", time: "O(1)", space: "O(1)", notes: "Update head pointer" },
                  { operation: "Insertion at End", time: "O(1)", space: "O(1)", notes: "For a list with a tail pointer, otherwise O(n)" },
                  { operation: "Deletion at Head", time: "O(1)", space: "O(1)", notes: "Update head pointer" },
                  { operation: "Deletion at Middle", time: "O(n)", space: "O(1)", notes: "Requires traversal to the node before" }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                    <td className="px-2 py-2 sm:px-4 sm:py-3 font-medium text-gray-800 dark:text-gray-200">{row.operation}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-3 text-center">
                      <span className={`px-2 py-1 rounded text-[10px] sm:text-xs font-mono ${row.time === "O(1)" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"}`}>
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
        <section>
      <h2 className="text-4xl font-bold mb-8 text-center">
    🎤
    <span className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
        Interview Questions & Answers
    </span>
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
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${qa.difficulty === "Easy"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : qa.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                        }`}>
                        {qa.difficulty}
                      </span>
                    </div>
                    <div className="ml-4">
                      <svg
                        className={`w-6 h-6 transition-transform duration-200 ${selectedQuestionIndex === index ? "rotate-180" : ""
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
        <section>
         <h2 className="text-4xl font-bold mb-8 text-center">
    🚀
    <span className="bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
        Hands-on Project Ideas
    </span>
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
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.difficulty === "Beginner"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      : project.difficulty === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
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
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Master Linked Lists Today! 🚀</h3>
          <p className="text-lg text-gray-300 mb-6">
            From simple singly lists to complex circular structures - linked lists are your key to flexible data management.
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