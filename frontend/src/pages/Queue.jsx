// queue.js
import React, { useState, useEffect } from "react";

const queueData = {
  topic: "Queue",
  category: "Data Structures & Algorithms",
  sections: {
    student_hook:
      "Think about waiting in line at your favorite coffee shop - people join at the back and are served from the front in the exact order they arrived. That's precisely how a Queue works in programming! It's a First-In-First-Out (FIFO) data structure that ensures fairness and order. From managing print jobs and handling web requests to implementing breadth-first search algorithms, queues are the organized backbone that keeps systems running smoothly and fairly!",
    singlyQueue: {
      concept:
        "A Singly Queue is a basic queue implementation using a singly linked list. Elements are added (**enqueued**) at the rear and removed (**dequeued**) from the front, leveraging the O(1) efficiency of linked list insertions and deletions at the head and tail.",
      realWorldExample:
        "Imagine a ticketing system for an event where people are served strictly in the order they arrived. The first person to join the line is the first to get a ticket.",
      industry_applications: [
        "🖨️ Operating Systems - Process scheduling for a single CPU core",
        "🌐 Web Servers - Managing incoming requests in a single thread",
        "📞 Call Centers - Storing customer calls in the order they arrive",
        "🖼️ Image Processing - Queuing images for sequential processing",
      ],
      advantages: [
        "🔄 Dynamic Size - Grows and shrinks as needed",
        "➕ Efficient Enqueue/Dequeue - O(1) time complexity",
        "💾 No Wasted Memory - Only allocates memory for nodes needed",
        "🧠 Memory is non-contiguous - Nodes can be anywhere in memory",
      ],
      disadvantages: [
        "❌ No Random Access - O(n) to find an element",
        "🔍 Slower Traversal - Must start from front and iterate to the rear",
        "⬆️ More Memory Per Node - Requires extra pointer storage",
        "🔗 Requires both front and rear pointers for O(1) operations",
      ],
    },
    doubleEndedQueue: {
      concept:
        "A Double-Ended Queue (Deque) is a linear data structure that allows elements to be added or removed from both the front and the rear. It can be implemented using a doubly linked list, which makes all four operations (add/remove from front/rear) highly efficient.",
      realWorldExample:
        "Think of a job queue where high-priority jobs can be added to the front, while low-priority jobs are added to the back. It's a versatile structure for managing work from both ends.",
      industry_applications: [
        "💻 Job Scheduling - Prioritizing tasks in a multi-threaded system",
        "✍️ Text Editors - Managing a buffer for undo/redo actions",
        "💾 Caches - Implementing a Least Recently Used (LRU) cache",
        "⚙️ Operating Systems - Handling processes that need to be prioritized",
      ],
      advantages: [
        "↔️ Bidirectional Operations - Add/remove from both ends in O(1)",
        "➕ Versatile - Can be used as a queue, a stack, or both",
        "💡 More intuitive for some applications",
        "🔍 Easier implementation of certain algorithms",
      ],
      disadvantages: [
        "💾 More Memory - Each node stores two pointers",
        "🔧 More Complex Logic - Operations require managing two pointers per node",
        "⬆️ Slower overall performance due to extra memory and pointer manipulation",
        "🔗 Still no random access by index",
      ],
    },
    circularQueue: {
      concept:
        "A Circular Queue is a queue implemented using a fixed-size array where the last element is connected to the first element. This 'wraparound' feature allows for efficient reuse of empty space in the array, preventing the need to shift elements after each dequeue.",
      realWorldExample:
        "Imagine a shared buffer in a computer system, like a keyboard input buffer, that continuously accepts data and sends it for processing. When it reaches the end, it loops back to the beginning to fill empty slots.",
      industry_applications: [
        "🖥️ Round-Robin Scheduling - Distributing CPU time in a cycle",
        "🗂️ OS Task Management - Managing a fixed number of tasks that cycle through",
        "⏳ Buffers - Data buffers that need to loop back",
        "🎮 Gaming - Managing a fixed number of network packets",
      ],
      advantages: [
        "♾️ Space Efficiency - Reuses freed memory slots, preventing 'false overflow'",
        "🔗 Fast Operations - O(1) for both enqueue and dequeue with simple modulo arithmetic",
        "🎯 Simple Implementation - Uses a static array, avoiding dynamic memory allocation overhead",
        "🔄 Ideal for fixed-size buffer scenarios",
      ],
      disadvantages: [
        "🐛 Fixed Size - Cannot grow dynamically and can lead to overflow if capacity is exceeded",
        "🔄 Tricky Logic - Pointers and modulo arithmetic can be more complex to manage than a simple array",
        "💡 Still no random access",
        "🔎 Can be hard to distinguish between full and empty states without a size variable",
      ],
    },
    priorityQueue: {
      concept:
        "A Priority Queue is a special type of queue where each element has a priority. Elements are dequeued based on their priority, not their FIFO order. Elements with a higher priority are served before elements with a lower priority. It's typically implemented using a Heap data structure for optimal performance.",
      realWorldExample:
        "A hospital emergency room triage system. Patients with more critical conditions (higher priority) are seen before those with minor issues, regardless of their arrival time.",
      industry_applications: [
        "🏥 Hospital Triage - Prioritizing patients based on severity of condition",
        "🔄 Task Scheduling - Scheduling tasks based on priority in operating systems",
        "📡 Network Routers - Handling high-priority data packets before regular ones",
        "🗺️ Algorithms - Used in Dijkstra's, Prim's, and Huffman coding algorithms",
      ],
      advantages: [
        "⚡ Efficient Priority-Based Access - Enqueue and dequeue are typically O(log n)",
        "⚖️ Guarantees highest-priority element is always at the front",
        "🎯 Essential for a wide range of optimized algorithms",
        "📊 Fair allocation of resources based on importance",
      ],
      disadvantages: [
        "📈 More Complex Implementation - Requires understanding of Heaps or similar structures",
        "🐢 Slower than a regular queue - Operations are O(log n) vs O(1)",
        "🔗 Cannot be used for simple FIFO scenarios",
        "💾 Higher memory footprint due to the tree-like structure of a Heap",
      ],
    },
    code_examples: {
      singly: {
        c: `// C - Singly Queue (Linked List-based)
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* next;
} Node;

typedef struct Queue {
    Node* front;
    Node* rear;
} Queue;

Queue* createQueue() {
    Queue* q = (Queue*)malloc(sizeof(Queue));
    q->front = q->rear = NULL;
    return q;
}

void enqueue(Queue* q, int new_data) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->data = new_data;
    new_node->next = NULL;
    if (q->rear == NULL) {
        q->front = q->rear = new_node;
        return;
    }
    q->rear->next = new_node;
    q->rear = new_node;
}

int dequeue(Queue* q) {
    if (q->front == NULL) return -1;
    Node* temp = q->front;
    int dequeued_data = temp->data;
    q->front = q->front->next;
    if (q->front == NULL) {
        q->rear = NULL;
    }
    free(temp);
    return dequeued_data;
}

int main() {
    Queue* q = createQueue();
    enqueue(q, 10);
    enqueue(q, 20);
    printf("Dequeued: %d\\n", dequeue(q));
    enqueue(q, 30);
    return 0;
}`,
        cpp: `// C++ - Singly Queue (Linked List-based)
#include <iostream>

class Node {
public:
    int data;
    Node* next;
    Node(int data) : data(data), next(nullptr) {}
};

class SinglyQueue {
private:
    Node* front;
    Node* rear;
public:
    SinglyQueue() : front(nullptr), rear(nullptr) {}
    
    void enqueue(int data) {
        Node* newNode = new Node(data);
        if (!rear) {
            front = rear = newNode;
            return;
        }
        rear->next = newNode;
        rear = newNode;
    }
    
    int dequeue() {
        if (!front) {
            return -1; // Indicates empty queue
        }
        Node* temp = front;
        int dequeued_data = temp->data;
        front = front->next;
        if (!front) {
            rear = nullptr;
        }
        delete temp;
        return dequeued_data;
    }
};

int main() {
    SinglyQueue q;
    q.enqueue(10);
    q.enqueue(20);
    std::cout << "Dequeued: " << q.dequeue() << std::endl;
    q.enqueue(30);
    return 0;
}`,
        java: `// Java - Singly Queue (Linked List-based)
public class SinglyQueue {
    static class Node {
        int data;
        Node next;
        Node(int d) { data = d; next = null; }
    }
    Node front, rear;
    
    public void enqueue(int data) {
        Node newNode = new Node(data);
        if (rear == null) {
            front = rear = newNode;
            return;
        }
        rear.next = newNode;
        rear = newNode;
    }
    
    public int dequeue() {
        if (front == null) return -1;
        Node temp = front;
        int dequeued_data = temp.data;
        front = front.next;
        if (front == null) {
            rear = null;
        }
        return dequeued_data;
    }
    
    public static void main(String[] args) {
        SinglyQueue q = new SinglyQueue();
        q.enqueue(10);
        q.enqueue(20);
        System.out.println("Dequeued: " + q.dequeue());
        q.enqueue(30);
    }
}`,
        python: `# Python - Singly Queue (Linked List-based)
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyQueue:
    def __init__(self):
        self.front = None
        self.rear = None
    
    def enqueue(self, data):
        new_node = Node(data)
        if self.rear is None:
            self.front = self.rear = new_node
            return
        self.rear.next = new_node
        self.rear = new_node
    
    def dequeue(self):
        if self.front is None: return -1
        temp = self.front
        self.front = temp.next
        if self.front is None:
            self.rear = None
        return temp.data

q = SinglyQueue()
q.enqueue(10)
q.enqueue(20)
print(f"Dequeued: {q.dequeue()}")
q.enqueue(30)`,
        javascript: `// JavaScript - Singly Queue (Linked List-based)
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyQueue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(data) {
        const newNode = new Node(data);
        if (!this.rear) {
            this.front = this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }
    dequeue() {
        if (!this.front) return null;
        const temp = this.front;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        return temp.data;
    }
}
const q = new SinglyQueue();
q.enqueue(10);
q.enqueue(20);
console.log("Dequeued:", q.dequeue());
q.enqueue(30);`,
      },
      doubly: {
        c: `// C - Double-Ended Queue (Deque) (Linked List-based)
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
} Node;

typedef struct Deque {
    Node* front;
    Node* rear;
} Deque;

Deque* createDeque() {
    Deque* dq = (Deque*)malloc(sizeof(Deque));
    dq->front = dq->rear = NULL;
    return dq;
}

void addFront(Deque* dq, int new_data) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->data = new_data;
    new_node->prev = NULL;
    new_node->next = dq->front;
    if (dq->front == NULL) {
        dq->front = dq->rear = new_node;
    } else {
        dq->front->prev = new_node;
        dq->front = new_node;
    }
}

void addRear(Deque* dq, int new_data) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->data = new_data;
    new_node->next = NULL;
    new_node->prev = dq->rear;
    if (dq->rear == NULL) {
        dq->front = dq->rear = new_node;
    } else {
        dq->rear->next = new_node;
        dq->rear = new_node;
    }
}

int removeFront(Deque* dq) {
    if (dq->front == NULL) return -1;
    Node* temp = dq->front;
    int removed_data = temp->data;
    dq->front = dq->front->next;
    if (dq->front != NULL) {
        dq->front->prev = NULL;
    } else {
        dq->rear = NULL;
    }
    free(temp);
    return removed_data;
}

int main() {
    Deque* dq = createDeque();
    addRear(dq, 10);
    addFront(dq, 5);
    addRear(dq, 15);
    printf("Removed from front: %d\\n", removeFront(dq));
    return 0;
}`,
        cpp: `// C++ - Double-Ended Queue (Deque) (Linked List-based)
#include <iostream>
class Node {
public:
    int data;
    Node* prev;
    Node* next;
    Node(int data) : data(data), prev(nullptr), next(nullptr) {}
};

class Deque {
private:
    Node* front;
    Node* rear;
public:
    Deque() : front(nullptr), rear(nullptr) {}

    void addFront(int data) {
        Node* newNode = new Node(data);
        if (!front) {
            front = rear = newNode;
            return;
        }
        newNode->next = front;
        front->prev = newNode;
        front = newNode;
    }
    
    void addRear(int data) {
        Node* newNode = new Node(data);
        if (!rear) {
            front = rear = newNode;
            return;
        }
        rear->next = newNode;
        newNode->prev = rear;
        rear = newNode;
    }
    
    int removeFront() {
        if (!front) return -1;
        Node* temp = front;
        int removed_data = temp->data;
        front = front->next;
        if (front) {
            front->prev = nullptr;
        } else {
            rear = nullptr;
        }
        delete temp;
        return removed_data;
    }
};

int main() {
    Deque dq;
    dq.addRear(10);
    dq.addFront(5);
    dq.addRear(15);
    std::cout << "Removed from front: " << dq.removeFront() << std::endl;
    return 0;
}`,
        java: `// Java - Double-Ended Queue (Deque) (Linked List-based)
import java.util.LinkedList;

public class DoubleEndedQueue {
    private LinkedList<Integer> deque = new LinkedList<>();

    public void addFront(int data) {
        deque.addFirst(data);
    }

    public void addRear(int data) {
        deque.addLast(data);
    }
    
    public int removeFront() {
        if (deque.isEmpty()) return -1;
        return deque.removeFirst();
    }
    
    public int removeRear() {
        if (deque.isEmpty()) return -1;
        return deque.removeLast();
    }
    
    public static void main(String[] args) {
        DoubleEndedQueue dq = new DoubleEndedQueue();
        dq.addRear(10);
        dq.addFront(5);
        dq.addRear(15);
        System.out.println("Removed from front: " + dq.removeFront());
        System.out.println("Removed from rear: " + dq.removeRear());
    }
}`,
        python: `# Python - Double-Ended Queue (Deque)
from collections import deque

# Python's deque is already a double-ended queue
dq = deque()

dq.append(10)      # Add to rear
dq.appendleft(5)   # Add to front
dq.append(15)      # Add to rear

print("Removed from front:", dq.popleft())
print("Removed from rear:", dq.pop())`,
        javascript: `// JavaScript - Double-Ended Queue (Deque) (Array-based)
class Deque {
    constructor() {
        this.items = [];
    }
    addFront(element) {
        this.items.unshift(element);
    }
    addRear(element) {
        this.items.push(element);
    }
    removeFront() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }
    removeRear() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

const dq = new Deque();
dq.addRear(10);
dq.addFront(5);
dq.addRear(15);
console.log("Removed from front:", dq.removeFront());
console.log("Removed from rear:", dq.removeRear());`,
      },
      circular: {
        c: `// C - Circular Queue (Array-based)
#include <stdio.h>
#define MAX_SIZE 5
int queue[MAX_SIZE];
int front = -1, rear = -1;

void enqueue(int value) {
    if ((front == 0 && rear == MAX_SIZE - 1) || (rear == (front - 1 + MAX_SIZE) % MAX_SIZE)) {
        printf("Queue is full.\\n");
        return;
    }
    if (front == -1) front = 0;
    rear = (rear + 1) % MAX_SIZE;
    queue[rear] = value;
}

int dequeue() {
    if (front == -1) {
        return -1;
    }
    int dequeued_data = queue[front];
    if (front == rear) {
        front = -1;
        rear = -1;
    } else {
        front = (front + 1) % MAX_SIZE;
    }
    return dequeued_data;
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    printf("Dequeued: %d\\n", dequeue());
    enqueue(40);
    enqueue(50);
    enqueue(60); 
    return 0;
}`,
        cpp: `// C++ - Circular Queue (Array-based)
#include <iostream>
#define MAX_SIZE 5

class CircularQueue {
private:
    int arr[MAX_SIZE];
    int front, rear;
public:
    CircularQueue() {
        front = -1;
        rear = -1;
    }
    
    bool isFull() {
        return (front == 0 && rear == MAX_SIZE - 1) || (rear == (front - 1 + MAX_SIZE) % MAX_SIZE);
    }
    
    bool isEmpty() {
        return front == -1;
    }
    
    void enqueue(int value) {
        if (isFull()) {
            std::cout << "Queue is full." << std::endl;
            return;
        }
        if (isEmpty()) front = 0;
        rear = (rear + 1) % MAX_SIZE;
        arr[rear] = value;
    }
    
    int dequeue() {
        if (isEmpty()) {
            return -1;
        }
        int removed_data = arr[front];
        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            front = (front + 1) % MAX_SIZE;
        }
        return removed_data;
    }
};

int main() {
    CircularQueue q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    std::cout << "Dequeued: " << q.dequeue() << std::endl;
    q.enqueue(40);
    q.enqueue(50);
    q.enqueue(60); 
    return 0;
}`,
        java: `// Java - Circular Queue (Array-based)
public class CircularQueue {
    private int[] queue;
    private int front, rear, size, capacity;

    public CircularQueue(int capacity) {
        this.capacity = capacity;
        queue = new int[capacity];
        front = -1;
        rear = -1;
        size = 0;
    }

    public boolean isFull() { return size == capacity; }
    public boolean isEmpty() { return size == 0; }
    
    public void enqueue(int value) {
        if (isFull()) return;
        if (isEmpty()) front = 0;
        rear = (rear + 1) % capacity;
        queue[rear] = value;
        size++;
    }
    
    public int dequeue() {
        if (isEmpty()) return -1;
        int dequeued_data = queue[front];
        front = (front + 1) % capacity;
        size--;
        if (isEmpty()) {
            front = -1;
            rear = -1;
        }
        return dequeued_data;
    }

    public static void main(String[] args) {
        CircularQueue q = new CircularQueue(5);
        q.enqueue(10);
        q.enqueue(20);
        q.enqueue(30);
        System.out.println("Dequeued: " + q.dequeue());
        q.enqueue(40);
        q.enqueue(50);
        q.enqueue(60); 
    }
}`,
        python: `# Python - Circular Queue (List-based)
class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = self.rear = -1
        self.size = 0

    def is_full(self):
        return self.size == self.capacity

    def is_empty(self):
        return self.size == 0

    def enqueue(self, value):
        if self.is_full(): return
        if self.is_empty(): self.front = 0
        self.rear = (self.rear + 1) % self.capacity
        self.queue[self.rear] = value
        self.size += 1

    def dequeue(self):
        if self.is_empty(): return -1
        dequeued_data = self.queue[self.front]
        if self.front == self.rear:
            self.front = self.rear = -1
        else:
            self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return dequeued_data

q = CircularQueue(5)
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
print(f"Dequeued: {q.dequeue()}")
q.enqueue(40)
q.enqueue(50)
q.enqueue(60)`,
        javascript: `// JavaScript - Circular Queue (Array-based)
class CircularQueue {
    constructor(capacity) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }
    isFull() { return this.size === this.capacity; }
    isEmpty() { return this.size === 0; }

    enqueue(value) {
        if (this.isFull()) return;
        if (this.isEmpty()) this.front = 0;
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const removed_data = this.queue[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return removed_data;
    }
}
const q = new CircularQueue(5);
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log("Dequeued:", q.dequeue());
q.enqueue(40);
q.enqueue(50);
q.enqueue(60);`,
      },
      priority: {
        c: `// C - Priority Queue (Min-Heap based)
#include <stdio.h>
#include <stdlib.h>
#define MAX_SIZE 10

int heap[MAX_SIZE];
int heap_size = 0;

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void heapify_up(int index) {
    int parent = (index - 1) / 2;
    if (index > 0 && heap[index] < heap[parent]) {
        swap(&heap[index], &heap[parent]);
        heapify_up(parent);
    }
}

void enqueue(int value) {
    if (heap_size == MAX_SIZE) return;
    heap[heap_size] = value;
    heapify_up(heap_size);
    heap_size++;
}

void heapify_down(int index) {
    int left = 2 * index + 1;
    int right = 2 * index + 2;
    int smallest = index;

    if (left < heap_size && heap[left] < heap[smallest]) {
        smallest = left;
    }
    if (right < heap_size && heap[right] < heap[smallest]) {
        smallest = right;
    }
    if (smallest != index) {
        swap(&heap[index], &heap[smallest]);
        heapify_down(smallest);
    }
}

int dequeue() {
    if (heap_size == 0) return -1;
    int dequeued_data = heap[0];
    heap[0] = heap[heap_size - 1];
    heap_size--;
    heapify_down(0);
    return dequeued_data;
}

int main() {
    enqueue(30);
    enqueue(10);
    enqueue(50);
    printf("Dequeued (min): %d\\n", dequeue());
    printf("Dequeued (min): %d\\n", dequeue());
    return 0;
}`,
        cpp: `// C++ - Priority Queue (using STL)
#include <iostream>
#include <queue>
#include <vector>
#include <functional>

int main() {
    std::priority_queue<int, std::vector<int>, std::greater<int>> min_pq;
    min_pq.push(30);
    min_pq.push(10);
    min_pq.push(50);
    std::cout << "Dequeued (min): " << min_pq.top() << std::endl;
    min_pq.pop();
    std::cout << "Dequeued (min): " << min_pq.top() << std::endl;
    return 0;
}`,
        java: `// Java - Priority Queue (Min-Heap)
import java.util.PriorityQueue;

public class PriorityQueueExample {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(30);
        pq.add(10);
        pq.add(50);
        System.out.println("Dequeued (min): " + pq.poll());
        System.out.println("Dequeued (min): " + pq.poll());
    }
}`,
        python: `# Python - Priority Queue (Min-Heap)
import heapq

pq = []
heapq.heappush(pq, 30)
heapq.heappush(pq, 10)
heapq.heappush(pq, 50)
print(f"Dequeued (min): {heapq.heappop(pq)}")
print(f"Dequeued (min): {heapq.heappop(pq)}")`,
        javascript: `// JavaScript - Priority Queue (Min-Heap based)
class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }
    hasParent(i) { return this.getParentIndex(i) >= 0; }
    hasLeftChild(i) { return this.getLeftChildIndex(i) < this.heap.length; }
    hasRightChild(i) { return this.getRightChildIndex(i) < this.heap.length; }
    parent(i) { return this.heap[this.getParentIndex(i)]; }
    leftChild(i) { return this.heap[this.getLeftChildIndex(i)]; }
    rightChild(i) { return this.heap[this.getRightChildIndex(i)]; }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }
    enqueue(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
    dequeue() {
        if (this.heap.length === 0) return null;
        this.swap(0, this.heap.length - 1);
        const item = this.heap.pop();
        this.heapifyDown();
        return item;
    }
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}
const pq = new PriorityQueue();
pq.enqueue(30);
pq.enqueue(10);
pq.enqueue(50);
console.log("Dequeued (min):", pq.dequeue());
console.log("Dequeued (min):", pq.dequeue());`,
      },
    },
    interview_questions: [
      {
        question: "What is the time complexity of enqueue and dequeue operations in a queue?",
        answer:
          "Both enqueue and dequeue operations have O(1) time complexity when implemented using a linked list or circular array. This is because elements are added and removed from the ends, requiring only a constant number of pointer or index updates.",
        difficulty: "Easy",
      },
      {
        question: "Explain the difference between a Queue and a Stack.",
        answer:
          "A Queue follows the FIFO (First-In, First-Out) principle, like a line at a store, where the first element added is the first to be removed. A Stack follows the LIFO (Last-In, First-Out) principle, like a pile of plates, where the last element added is the first to be removed.",
        difficulty: "Easy",
      },
      {
        question: "How would you implement a queue using two stacks?",
        answer:
          "Use two stacks: one for enqueuing (stack1) and one for dequeuing (stack2). To enqueue, push the new element onto stack1. To dequeue, if stack2 is empty, pop all elements from stack1 and push them onto stack2, then pop the top element from stack2. This process ensures FIFO order.",
        difficulty: "Medium",
      },
      {
        question: "When would you use a Deque instead of a regular queue?",
        answer:
          "A Deque is preferred when you need the flexibility to add or remove elements from both ends of the queue. For example, in a job scheduling system, you might want to add new jobs to the rear but also have the ability to add high-priority jobs directly to the front.",
        difficulty: "Medium",
      },
      {
        question: "Explain the concept of 'false overflow' in a linear queue and how a circular queue solves it.",
        answer:
          "In a linear array-based queue, 'false overflow' occurs when the rear pointer reaches the end of the array, but there are empty slots at the beginning that were freed by dequeue operations. A circular queue solves this by treating the array as a circle, allowing the rear pointer to 'wrap around' to the beginning, effectively reusing the empty slots.",
        difficulty: "Hard",
      },
    ],
    project_ideas: [
      {
        title: "Simple Task Queue Processor",
        description:
          "Build a basic task queue that processes items in FIFO order. Can be extended to handle different task types and priorities.",
        difficulty: "Beginner",
        technologies: ["Python"],
      },
      {
        title: "Print Job Spooler System",
        description:
          "Create a print job management system that queues documents and processes them in order. Include job status tracking and cancellation features.",
        difficulty: "Intermediate",
        technologies: ["Java"],
      },
      {
        title: "Multi-threaded Web Server Request Handler",
        description:
          "Implement a web server that uses queues to manage incoming HTTP requests, with multiple worker threads processing requests concurrently.",
        difficulty: "Advanced",
        technologies: ["Python"],
      },
      {
        title: "Real-time Chat Message Broker",
        description:
          "Build a message queuing system for a chat application that handles message ordering, delivery guarantees, and handles multiple chat rooms simultaneously.",
        difficulty: "Advanced",
        technologies: ["JavaScript"],
      },
    ],
  },
};

const highlightSyntax = (code, language) => {
    // Defines keywords for syntax highlighting across different programming languages.
    const keywords = {
        c: ['#include', 'stdio.h', 'stdlib.h', 'typedef', 'struct', 'int', 'void', 'main', 'Node', 'data', 'next', 'prev', 'front', 'rear', 'Queue', 'Deque', 'new_data', 'malloc', 'sizeof', 'NULL', 'printf', 'free', 'while', 'for', 'if', 'else', 'return'],
        cpp: ['#include', 'iostream', 'class', 'public', 'private', 'int', 'void', 'main', 'Node', 'data', 'next', 'prev', 'front', 'rear', 'SinglyQueue', 'Deque', 'new', 'nullptr', 'cout', 'while', 'for', 'if', 'else', 'return'],
        java: ['public', 'class', 'static', 'void', 'main', 'int', 'Node', 'data', 'next', 'front', 'rear', 'SinglyQueue', 'Deque', 'null', 'System.out.println', 'while', 'if', 'else', 'return'],
        python: ['class', 'def', '__init__', 'self', 'data', 'next', 'prev', 'front', 'rear', 'is', 'None', 'print', 'while', 'for', 'if', 'else', 'return', 'import', 'from'],
        javascript: [
            'class', 'constructor', 'this', 'return', 'addFront', 'addRear', 'removeFront', 'removeRear', 'isFull', 'isEmpty', 'enqueue', 'dequeue', 'peek',
            'console.log', 'if', 'else', 'while', 'for', 'let', 'const', 'new', 'null', 'import',
            'export', 'function', 'static', 'var', 'private', 'public', 'super', 'extends', 'try', 'catch', 'finally',
            'instanceof', 'typeof', 'true', 'false', 'break', 'continue', 'switch', 'case', 'default'
        ],
    };
    // Regular expressions for highlighting different code elements.
    const strings = /"[^"]*"|'[^']*'|`[^`]*`/g;
    const comments = /\/\/.*$|\/\*[\s\S]*?\*\//gm;
    const numbers = /\b\d+\.?\d*\b/g;
    
    // Perform replacements to add HTML `<span>` tags with specific styling.
    let highlightedCode = code;
    highlightedCode = highlightedCode.replace(strings, (match) => `<span style="color: #22c55e;">${match}</span>`);
    highlightedCode = highlightedCode.replace(comments, (match) => `<span style="color: #6b7280;">${match}</span>`);
    highlightedCode = highlightedCode.replace(numbers, (match) => `<span style="color: #f97316;">${match}</span>`);
    
    // Highlight keywords for the specified language.
    const langKeywords = keywords[language] || [];
    langKeywords.forEach((keyword) => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        highlightedCode = highlightedCode.replace(regex, (match) => `<span style="color: #3b82f6;">${match}</span>`);
    });
    return highlightedCode;
};

// React Hooks for managing state and logic for each queue type.
// A simpler, non-animated version for the sake of a non-interactive response.
const useQueue = (initialElements) => {
    const [elements, setElements] = useState(initialElements);
    const [animatingIndex, setAnimatingIndex] = useState(null);
    const [operation, setOperation] = useState(null);

    const enqueue = (value) => {
        setElements([...elements, value]);
        setOperation("ENQUEUE");
        setAnimatingIndex(elements.length);
        setTimeout(() => setAnimatingIndex(null), 1000);
    };

    const dequeue = () => {
        if (elements.length === 0) return;
        setElements(elements.slice(1));
        setOperation("DEQUEUE");
        setAnimatingIndex(0);
        setTimeout(() => setAnimatingIndex(null), 1000);
    };

    return { elements, enqueue, dequeue, animatingIndex, operation };
};

// React Component for the Queue Page
export default function EnhancedQueuePage() {
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
    const [activeTab, setActiveTab] = useState("singly");

    const { topic, category, sections } = queueData;
    const languages = ["c", "cpp", "java", "python", "javascript"];

    const getCodeExample = (lang) => {
        switch (activeTab) {
            case 'singly':
                return sections.code_examples.singly[lang] || '';
            case 'doubly':
                return sections.code_examples.doubly[lang] || '';
            case 'circular':
                return sections.code_examples.circular[lang] || '';
            case 'priority':
                return sections.code_examples.priority[lang] || '';
            default:
                return '';
        }
    };
    
    const activeSection = sections[
        activeTab === "singly" ? "singlyQueue" : 
        activeTab === "doubly" ? "doubleEndedQueue" :
        activeTab === "circular" ? "circularQueue" :
        activeTab === "priority" ? "priorityQueue" :
        "singlyQueue"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
            <header className="py-16 text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                    <h1 className="text-6xl font-extrabold mb-4 animate-pulse">
                        {topic}
                    </h1>
                    <p className="text-xl">{category}</p>
                    <div className="mt-6">
                        <div className="flex justify-center space-x-4 text-sm">
                            <span className="px-3 py-1 bg-white/20 rounded-full">
                                📥 Enqueue/Dequeue
                            </span>
                            <span className="px-3 py-1 bg-white/20 rounded-full">🔄 FIFO</span>
                            <span className="px-3 py-1 bg-white/20 rounded-full">
                                ⚡ O(1) Operations
                            </span>
                        </div>
                    </div>
                </div>
            </header>
            <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
                <section className="transform hover:scale-105 transition-transform duration-300">
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        🎯
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            Why Queues Matter
                        </span>
                    </h2>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-purple-500">
                        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">
                            {sections.student_hook}
                        </p>
                    </div>
                </section>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                    <button
                        onClick={() => setActiveTab("singly")}
                        className={`w-full sm:w-auto px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeTab === "singly"
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                            }`}
                    >
                        Singly Queue
                    </button>
                    <button
                        onClick={() => setActiveTab("doubly")}
                        className={`w-full sm:w-auto px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeTab === "doubly"
                            ? "bg-green-600 text-white shadow-lg"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                            }`}
                    >
                        Double-Ended Queue
                    </button>
                    <button
                        onClick={() => setActiveTab("circular")}
                        className={`w-full sm:w-auto px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeTab === "circular"
                            ? "bg-purple-600 text-white shadow-lg"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                            }`}
                    >
                        Circular Queue
                    </button>
                    <button
                        onClick={() => setActiveTab("priority")}
                        className={`w-full sm:w-auto px-6 py-2 rounded-full font-bold transition-all duration-300 ${activeTab === "priority"
                            ? "bg-orange-600 text-white shadow-lg"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                            }`}
                    >
                        Priority Queue
                    </button>
                </div>
                <section>
                    <h2 className="text-5xl font-bold mb-8 text-center">
                        {activeTab === "singly" && "🔗"}
                        {activeTab === "doubly" && "↔️"}
                        {activeTab === "circular" && "🔄"}
                        {activeTab === "priority" && "🌟"}
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            {activeSection.concept.split(' ')[1].slice(0, -1) + " Queue"}
                        </span>
                    </h2>
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-purple-500">
                        <h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                            💡 Understanding {activeSection.concept.split(' ')[1].slice(0, -1)} Queue
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">
                            {activeSection.concept}
                        </p>
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
                            <p className="text-purple-800 dark:text-purple-200 font-medium">
                                <span className="font-bold">Real-world example:</span>{" "}
                                {activeSection.realWorldExample}
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500">
                            <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">
                                ✅ Advantages
                            </h3>
                            <ul className="space-y-3">
                                {activeSection.advantages.map((advantage, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <span className="text-green-500 text-lg">
                                            {advantage.split(" ")[0]}
                                        </span>
                                        <span className="text-gray-700 dark:text-gray-300">
                                            {advantage.substring(2)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500">
                            <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">
                                ❌ Disadvantages
                            </h3>
                            <ul className="space-y-3">
                                {activeSection.disadvantages.map(
                                    (disadvantage, index) => (
                                        <li key={index} className="flex items-start space-x-3">
                                            <span className="text-red-500 text-lg">
                                                {disadvantage.split(" ")[0]}
                                            </span>
                                            <span className="text-gray-700 dark:text-gray-300">
                                                {disadvantage.substring(2)}
                                            </span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">
                            🏢 {activeSection.concept.split(' ')[1].slice(0, -1)} Queue in Industry
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {activeSection.industry_applications.map(
                                (application, index) => (
                                    <div
                                        key={index}
                                        className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-400 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <p className="text-gray-700 dark:text-gray-300">
                                            {application}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>
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
                                        __html: highlightSyntax(getCodeExample(selectedLanguage), selectedLanguage),
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
                                    <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold text-gray-800 dark:text-gray-200">
                                        Operation
                                    </th>
                                    <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold text-gray-800 dark:text-gray-200">
                                        Time
                                    </th>
                                    <th className="px-2 py-2 sm:px-4 sm:py-3 text-center font-semibold text-gray-800 dark:text-gray-200">
                                        Space
                                    </th>
                                    <th className="px-2 py-2 sm:px-4 sm:py-3 text-left font-semibold text-gray-800 dark:text-gray-200">
                                        Notes
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                                {
                                    [
                                        activeTab === "singly" && { operation: "Enqueue", time: "O(1)", space: "O(1)", notes: "Constant time with a rear pointer." },
                                        activeTab === "singly" && { operation: "Dequeue", time: "O(1)", space: "O(1)", notes: "Constant time with a front pointer." },
                                        activeTab === "doubly" && { operation: "Add to Front/Rear", time: "O(1)", space: "O(1)", notes: "Constant time for all insertions." },
                                        activeTab === "doubly" && { operation: "Remove from Front/Rear", time: "O(1)", space: "O(1)", notes: "Constant time for all deletions." },
                                        activeTab === "circular" && { operation: "Enqueue", time: "O(1)", space: "O(1)", notes: "Constant time using modulo arithmetic." },
                                        activeTab === "circular" && { operation: "Dequeue", time: "O(1)", space: "O(1)", notes: "Constant time using modulo arithmetic." },
                                        activeTab === "priority" && { operation: "Enqueue", time: "O(log n)", space: "O(1)", notes: "Logarithmic time to maintain heap property." },
                                        activeTab === "priority" && { operation: "Dequeue", time: "O(log n)", space: "O(1)", notes: "Logarithmic time to maintain heap property." },
                                    ].filter(Boolean).map((row, index) => (
                                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                                            <td className="px-2 py-2 sm:px-4 sm:py-3 font-medium text-gray-800 dark:text-gray-200">
                                                {row.operation}
                                            </td>
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
                                            <td className="px-2 py-2 sm:px-4 sm:py-3 text-gray-700 dark:text-gray-300 text-[11px] sm:text-sm">
                                                {row.notes}
                                            </td>
                                        </tr>
                                    ))
                                }
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
                                    onClick={() =>
                                        setSelectedQuestionIndex(selectedQuestionIndex === index ? -1 : index)
                                    }
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
                                                className={`w-6 h-6 transition-transform duration-200 ${selectedQuestionIndex === index ? "rotate-180" : ""}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
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
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                                        Technologies:
                                    </h4>
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
                    <h3 className="text-2xl font-bold mb-4">
                        Master Queues Today! 🚀
                    </h3>
                    <p className="text-lg text-gray-300 mb-6">
                        From basic FIFO to complex priority systems, queues are a foundational data structure for any developer.
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