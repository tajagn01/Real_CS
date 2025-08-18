import React, { useMemo, useState } from "react";
import { HelpCircle, Rocket } from "lucide-react";

const DEFAULT_BUCKETS = 7;

const HashTable = () => {
  const [activeLanguage, setActiveLanguage] = useState("javascript");
  const [bucketCount, setBucketCount] = useState(DEFAULT_BUCKETS);
  const [buckets, setBuckets] = useState(Array.from({ length: DEFAULT_BUCKETS }, () => []));
  const [keyInput, setKeyInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [highlight, setHighlight] = useState({ bucket: -1, index: -1, mode: "" });

  const hash = useMemo(() => (key) => {
    const str = String(key);
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return h % bucketCount;
  }, [bucketCount]);

  const setPair = () => {
    if (!keyInput.trim()) return;
    const b = hash(keyInput);
    setHighlight({ bucket: b, index: -1, mode: "set" });
    setBuckets((prev) => {
      const copy = prev.map((chain) => [...chain]);
      const chain = copy[b];
      const idx = chain.findIndex(([k]) => k === keyInput);
      if (idx >= 0) chain[idx] = [keyInput, valueInput];
      else chain.push([keyInput, valueInput]);
      return copy;
    });
    setKeyInput(""); setValueInput("");
    setTimeout(() => setHighlight({ bucket: -1, index: -1, mode: "" }), 600);
  };

  const getPair = () => {
    if (!keyInput.trim()) return;
    const b = hash(keyInput);
    const chain = buckets[b];
    const idx = chain.findIndex(([k]) => k === keyInput);
    setHighlight({ bucket: b, index: idx, mode: "get" });
    setTimeout(() => setHighlight({ bucket: -1, index: -1, mode: "" }), 1000);
  };

  const removePair = () => {
    if (!keyInput.trim()) return;
    const b = hash(keyInput);
    setBuckets((prev) => {
      const copy = prev.map((chain) => [...chain]);
      const chain = copy[b];
      const idx = chain.findIndex(([k]) => k === keyInput);
      setHighlight({ bucket: b, index: idx, mode: "remove" });
      if (idx >= 0) chain.splice(idx, 1);
      return copy;
    });
    setTimeout(() => setHighlight({ bucket: -1, index: -1, mode: "" }), 600);
  };

  const resetBuckets = (n) => {
    const count = Math.max(3, Math.min(31, parseInt(n) || DEFAULT_BUCKETS));
    setBucketCount(count);
    setBuckets(Array.from({ length: count }, () => []));
    setHighlight({ bucket: -1, index: -1, mode: "" });
  };

  const codeExamples = {
    javascript: `// Hash Table with Separate Chaining (JavaScript)
class HashTable {
  constructor(capacity = 7){ this.buckets = Array.from({length: capacity}, () => []); }
  _hash(key){ const s = String(key); let h=0; for (let i=0;i<s.length;i++) h=(h*31 + s.charCodeAt(i))>>>0; return h % this.buckets.length; }
  set(key, value){ const b=this._hash(key); const chain=this.buckets[b]; const i=chain.findIndex(([k])=>k===key); if(i>=0) chain[i]=[key,value]; else chain.push([key,value]); }
  get(key){ const b=this._hash(key); const chain=this.buckets[b]; const pair=chain.find(([k])=>k===key); return pair?pair[1]:undefined; }
  remove(key){ const b=this._hash(key); const chain=this.buckets[b]; const i=chain.findIndex(([k])=>k===key); if(i>=0) chain.splice(i,1); }
}`,

    java: `// Hash Table with Separate Chaining (Java)
import java.util.*;
class HashTable<K,V>{
  static class Pair<K,V>{ K k; V v; Pair(K k,V v){ this.k=k; this.v=v; }}
  List<List<Pair<K,V>>> buckets; int cap;
  HashTable(int cap){ this.cap=cap; buckets=new ArrayList<>(); for(int i=0;i<cap;i++) buckets.add(new ArrayList<>()); }
  int hash(K key){ return (key.hashCode() & 0x7fffffff) % cap; }
  void set(K key, V value){ List<Pair<K,V>> c=buckets.get(hash(key)); for(Pair<K,V> p:c) if(p.k.equals(key)){ p.v=value; return; } c.add(new Pair<>(key,value)); }
  V get(K key){ List<Pair<K,V>> c=buckets.get(hash(key)); for(Pair<K,V> p:c) if(p.k.equals(key)) return p.v; return null; }
  void remove(K key){ List<Pair<K,V>> c=buckets.get(hash(key)); c.removeIf(p->p.k.equals(key)); }
}`,

    python: `# Hash Table with Separate Chaining (Python)
class HashTable:
  def __init__(self, capacity=7):
    self.buckets=[[] for _ in range(capacity)]
  def _hash(self, key):
    s=str(key); h=0
    for ch in s: h=(h*31+ord(ch)) & 0xffffffff
    return h % len(self.buckets)
  def set(self, key, value):
    b=self._hash(key); c=self.buckets[b]
    for i,(k,_) in enumerate(c):
      if k==key: c[i]=(key,value); return
    c.append((key,value))
  def get(self, key):
    b=self._hash(key)
    for k,v in self.buckets[b]:
      if k==key: return v
    return None
  def remove(self, key):
    b=self._hash(key); c=self.buckets[b]
    for i,(k,_) in enumerate(c):
      if k==key: c.pop(i); return`,

    c: `// Hash Table (C) with simple chaining
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct Pair{ char* k; char* v; struct Pair* next; } Pair;
typedef struct { Pair** table; int cap; } HashTable;
unsigned hash(const char* s, int cap){ unsigned h=0; while(*s) h=h*31+ (unsigned char)*s++; return h % cap; }
HashTable* create(int cap){ HashTable* ht=malloc(sizeof(HashTable)); ht->cap=cap; ht->table=calloc(cap,sizeof(Pair*)); return ht; }
void set(HashTable* ht, const char* k, const char* v){ unsigned b=hash(k, ht->cap); Pair* p=ht->table[b]; for(;p;p=p->next) if(strcmp(p->k,k)==0){ p->v=strdup(v); return;} p=malloc(sizeof(Pair)); p->k=strdup(k); p->v=strdup(v); p->next=ht->table[b]; ht->table[b]=p; }
const char* get(HashTable* ht, const char* k){ unsigned b=hash(k, ht->cap); for(Pair* p=ht->table[b]; p; p=p->next) if(strcmp(p->k,k)==0) return p->v; return NULL; }`,

    cpp: `// Hash Table in C++ using std::unordered_map
#include <unordered_map>
#include <iostream>
int main(){ std::unordered_map<std::string,int> m; m["a"]=1; m["b"]=2; std::cout << m["a"] << "\n"; }
`
  };

  const industryExamples = [
    "- Databases: Index lookups by key",
    "- Caching: In-memory key-value stores",
    "- Compilers: Symbol tables",
    "- Networking: Routing tables",
    "- Security: Password hash maps (with salts)",
  ];

  const interviewQuestions = [
    { question: "Explain hashing and collision.", answer: "Hashing maps keys to indices. When two keys map to same bucket, it's a collision; resolve via chaining or open addressing." },
    { question: "Separate chaining vs open addressing?", answer: "Chaining stores collided entries in a list per bucket; open addressing probes other buckets (linear/quadratic/double hashing)." },
    { question: "What is load factor and rehashing?", answer: "Load factor = size/capacity. When it grows past a threshold, resize and rehash to maintain O(1) operations." }
  ];

  const projects = [
    { title: "LRU Cache (HashMap + DLL)", difficulty: "Intermediate", description: "Implement high-performance cache with O(1) get/put.", features: ["Eviction", "Metrics", "Concurrency-safe design"] },
    { title: "Tiny KV Store", difficulty: "Beginner", description: "Build a simple key-value store with persistence.", features: ["Set/Get/Remove", "Snapshots", "CLI interface"] }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">Hash Table</h1>
          <p className="text-xl">Mapping Keys to Values with Constant Time Access</p>
          <div className="mt-6 flex justify-center space-x-4 text-sm">
            <span className="px-3 py-1 bg-white/20 rounded-full">🧠 Concepts</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🎬 Visualize</span>
            <span className="px-3 py-1 bg-white/20 rounded-full">🏭 Industry</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Code Examples */}
        <div className="max-w-6xl mx-auto px-4 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Hash Table - Key/Value Data Structure</h2>
          <p className="text-gray-400 mb-8 text-center text-lg">Understand Hash Table implementation across languages</p>
          <div className="flex justify-center flex-wrap gap-3 mb-6">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${activeLanguage === lang ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
          <div className="bg-gray-800 rounded-lg p-6 overflow-x-auto mb-12">
            <pre className="text-sm"><code className="text-gray-300">{codeExamples[activeLanguage]}</code></pre>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
          <h3 className="text-2xl font-bold mb-6 text-center text-cyan-800 dark:text-cyan-200">📚 Hash Table Interactive Demo</h3>
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-wrap items-center gap-2">
              <input value={bucketCount} onChange={(e)=>resetBuckets(e.target.value)} type="number" min="3" max="31" className="w-24 px-3 py-2 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-800 text-cyan-800 dark:text-cyan-200" />
              <span className="text-sm text-cyan-700 dark:text-cyan-300">Buckets</span>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <input value={keyInput} onChange={(e)=>setKeyInput(e.target.value)} placeholder="Key" className="px-3 py-2 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-800 text-cyan-800 dark:text-cyan-200" />
              <input value={valueInput} onChange={(e)=>setValueInput(e.target.value)} placeholder="Value" className="px-3 py-2 border-2 border-cyan-300 dark:border-cyan-600 rounded-lg bg-white dark:bg-gray-800 text-cyan-800 dark:text-cyan-200" />
              <button onClick={setPair} disabled={!keyInput.trim()} className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors">Set</button>
              <button onClick={getPair} disabled={!keyInput.trim()} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors">Get</button>
              <button onClick={removePair} disabled={!keyInput.trim()} className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-lg font-bold transition-colors">Remove</button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {buckets.map((chain, bIndex) => (
                <div key={bIndex} className={`rounded-lg border-2 p-3 ${highlight.bucket === bIndex ? 'border-cyan-500' : 'border-cyan-300 dark:border-cyan-700'} bg-white dark:bg-gray-800`}>
                  <div className="text-xs font-bold text-cyan-700 dark:text-cyan-300 mb-2">Bucket {bIndex}</div>
                  <div className="flex flex-col gap-2">
                    {chain.length === 0 && <div className="text-xs text-gray-500">empty</div>}
                    {chain.map(([k,v], idx) => (
                      <div key={idx} className={`px-3 py-2 rounded border ${highlight.bucket === bIndex && highlight.index === idx ? 'bg-yellow-300 text-black border-yellow-500' : 'bg-cyan-50 dark:bg-gray-900 border-cyan-200 dark:border-cyan-700 text-cyan-900 dark:text-cyan-200'}`}>
                        <div className="text-sm font-semibold">{k}</div>
                        <div className="text-xs opacity-80">{String(v)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Use Cases */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Industry Applications & Company Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryExamples.map((example, idx) => {
              const gradients = [
                "from-cyan-600 to-blue-500","from-blue-600 to-indigo-500","from-purple-600 to-pink-500",
                "from-teal-600 to-green-500","from-yellow-500 to-orange-500","from-indigo-600 to-purple-500"
              ];
              const [company, description] = example.replace(/^- /, "").split(":");
              return (
                <div key={idx} className={`bg-gradient-to-r ${gradients[idx % gradients.length]} rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                  <span className="block font-bold text-white text-xl mb-2">{company ? company.trim() : 'Use Case'}</span>
                  <p className="text-white text-md">{description ? description.trim() : example.replace(/^- /, '')}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interview Questions */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <HelpCircle className="inline-block mr-3 text-orange-400" size={32} />
            Interview Questions & Answers
          </h2>
          <div className="space-y-6">
            {interviewQuestions.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Q{index + 1}: {item.question}</h3>
                <p className="text-gray-300 leading-relaxed"><strong className="text-green-400">Answer:</strong> {item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <Rocket className="inline-block mr-3 text-pink-400" size={32} />
            Hands-on Project Ideas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.difficulty === 'Beginner' ? 'bg-green-600 text-white' : project.difficulty === 'Intermediate' ? 'bg-yellow-600 text-white' : 'bg-red-600 text-white'}`}>{project.difficulty}</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-400">Key Features:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.features.map((feature, idx) => (<li key={idx}>• {feature}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="text-white font-semibold">The Real CS</span>
            </div>
            <p className="text-gray-400 text-center text-sm">© 2025 The Real CS. Master every corner of computer science.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HashTable;
