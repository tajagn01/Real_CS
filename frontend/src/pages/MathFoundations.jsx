import React, { useState, useEffect } from "react";

const mathData = {
  topic: "Mathematical & Theoretical Foundations",
  category: "AI/ML Foundations",
  sections: {
    student_hook:
      "Imagine tuning a giant orchestra where every instrument must harmonize. Math is the conductor of AI/ML—linear algebra organizes the notes (data), calculus adjusts the volume (gradients), and probability predicts what comes next. Master these and models start making sense.",

    linearAlgebra: {
      concept:
        "Linear Algebra provides the language of modern ML: vectors, matrices, and tensors represent data and parameters; matrix multiplication powers layers; decompositions reveal structure.",
      realWorldExample:
        "Image processing uses convolution (specialized linear operators). Embeddings in NLP are vectors; attention is weighted matrix multiplication.",
      industry_applications: [
        "🧠 Embeddings for recommendations and search",
        "🖼️ Convolutions in vision models",
        "📉 PCA for dimensionality reduction",
        "🔎 Attention mechanisms in transformers",
        "📡 Signal processing & compression",
      ],
      advantages: [
        "⚡ Efficient parallelizable operations",
        "🧩 Unified representation for diverse data",
        "📐 Strong geometric intuition",
        "🔬 Powerful factorization tools",
      ],
      disadvantages: [
        "💾 Large memory for big tensors",
        "🧮 Numerical stability issues",
        "⚙️ Hardware constraints for very large models",
        "🌀 Not always intuitive at first",
      ],
    },

    calculus: {
      concept:
        "Calculus explains learning via optimization: derivatives show how to adjust parameters to reduce loss; chain rule powers backprop; curvature shapes training dynamics.",
      realWorldExample:
        "Training a neural network is gradient descent—each step follows the slope of the loss surface, like walking downhill toward a valley.",
      industry_applications: [
        "🚗 Real-time control with differentiable physics",
        "🧪 Scientific ML & differentiable simulation",
        "🧮 Auto-diff for deep learning frameworks",
        "📊 Risk optimization in finance",
      ],
      advantages: [
        "📉 Guides efficient parameter updates",
        "🧭 Interprets training dynamics",
        "🔧 Enables auto-diff & backprop",
        "📈 Convergence analysis & schedules",
      ],
      disadvantages: [
        "🧗 Non-convex landscapes cause traps",
        "🎚️ Sensitive to hyperparameters",
        "🔀 Vanishing/exploding gradients",
        "🌀 Complex second-order methods",
      ],
    },

    probability: {
      concept:
        "Probability and Statistics quantify uncertainty, model noise, and evaluate generalization. Bayesian methods update beliefs; frequentist tools test hypotheses.",
      realWorldExample:
        "A classifier's output is a probability. A/B tests and confidence intervals measure improvement and reliability.",
      industry_applications: [
        "💳 Fraud detection under uncertainty",
        "🧬 Medical decision support",
        "📦 Demand forecasting",
        "🛰️ Anomaly detection",
      ],
      advantages: [
        "🎯 Decisions under uncertainty",
        "🧪 Rigorous evaluation",
        "🔗 Bayesian updating",
        "🛡️ Calibration & risk control",
      ],
      disadvantages: [
        "📊 Model misspecification risk",
        "🧮 Heavy-tailed behavior pitfalls",
        "🧵 Data dependence & leakage",
        "🧠 Misinterpretation of p-values",
      ],
    },

    code_examples: {
      c: `// C: 2x2 Matrix multiplication and numerical derivative
#include <stdio.h>

void matmul2x2(double A[2][2], double B[2][2], double C[2][2]) {
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
      C[i][j] = 0.0;
      for (int k = 0; k < 2; k++) C[i][j] += A[i][k] * B[k][j];
    }
  }
}

double f(double x) { return x * x; }
double numerical_grad(double x) { double h = 1e-6; return (f(x+h)-f(x-h))/(2*h); }

int main() {
  double A[2][2] = {{1,2},{3,4}};
  double B[2][2] = {{2,0},{1,2}};
  double C[2][2];
  matmul2x2(A,B,C);
  printf("C = [[%.1f, %.1f],[%.1f, %.1f]]\n", C[0][0], C[0][1], C[1][0], C[1][1]);
  printf("df/dx at x=3 ~= %.4f\n", numerical_grad(3.0));
}
`,

      cpp: `// C++: PCA-like mean-centering and variance, plus gradient demo
#include <iostream>
#include <vector>
using namespace std;

double grad(double x){return 2*x;}

int main(){
  vector<double> x = {1,2,3,4,5};
  double mean=0; for(double v:x) mean+=v; mean/=x.size();
  double var=0; for(double v:x) var+=(v-mean)*(v-mean); var/=x.size();
  cout << "mean=" << mean << ", var=" << var << "\n";
  cout << "grad f(x)=x^2 at x=3 -> " << grad(3) << "\n";
}
`,

      java: `// Java: Simple linear regression (closed-form) y = ax + b
public class LinRegCF {
  public static void main(String[] args){
    double[] x = {1,2,3,4};
    double[] y = {2,4,5,4};
    int n = x.length;
    double sx=0, sy=0, sxx=0, sxy=0;
    for(int i=0;i<n;i++){ sx+=x[i]; sy+=y[i]; sxx+=x[i]*x[i]; sxy+=x[i]*y[i]; }
    double a = (n*sxy - sx*sy)/(n*sxx - sx*sx);
    double b = (sy - a*sx)/n;
    System.out.printf("y = %.3fx + %.3f\n", a, b);
  }
}
`,

      python: `# Python: Monte Carlo estimation of P(heads)
import random

def estimate_heads(n=10000):
    heads = sum(1 for _ in range(n) if random.random() < 0.5)
    return heads / n

print("Estimated P(heads):", estimate_heads())
`,

      javascript: `// JavaScript: Softmax and cross-entropy
function softmax(logits){
  const max = Math.max(...logits);
  const exps = logits.map(v => Math.exp(v - max));
  const sum = exps.reduce((a,b)=>a+b,0);
  return exps.map(v => v/sum);
}
function crossEntropy(p, y){
  return -Math.log(p[y] + 1e-12);
}
const p = softmax([2.0, 1.0, 0.1]);
console.log('softmax=', p, 'CE(y=0)=', crossEntropy(p,0));
`
    },

    interview_questions: [
      {
        question: "Why is linear algebra central to deep learning?",
        answer:
          "Neural networks are compositions of linear operations (matrix multiplies) and nonlinearities. Weights, activations, and gradients are tensors manipulated by linear algebra kernels.",
        difficulty: "Easy",
      },
      {
        question: "Explain backpropagation using the chain rule.",
        answer:
          "Backprop applies the chain rule to propagate gradients from loss to inputs/parameters efficiently, reusing intermediate derivatives in reverse order.",
        difficulty: "Medium",
      },
      {
        question: "What is the bias–variance tradeoff?",
        answer:
          "Bias measures error from simplifying assumptions; variance measures sensitivity to data fluctuations. Regularization balances both for better generalization.",
        difficulty: "Medium",
      },
      {
        question: "When do gradients vanish or explode?",
        answer:
          "Deep nets with certain activations/initializations can shrink or amplify gradients across layers. Solutions include normalization, residuals, careful init, and clipping.",
        difficulty: "Hard",
      },
    ],

    project_ideas: [
      {
        title: "Matrix Playground",
        description:
          "Build an interactive tool for matrix ops (multiply, invert, decompose) with visualizations of transformations.",
        difficulty: "Beginner",
        technologies: ["JavaScript", "Canvas/SVG", "Linear Algebra"],
      },
      {
        title: "Gradient Visualizer",
        description:
          "Visualize loss surfaces and gradient descent paths with different learning rates and optimizers.",
        difficulty: "Intermediate",
        technologies: ["Python", "NumPy", "Matplotlib/Plotly"],
      },
      {
        title: "A/B Testing Simulator",
        description:
          "Simulate experiments, compute confidence intervals, and demonstrate pitfalls like p-hacking and peeking.",
        difficulty: "Intermediate",
        technologies: ["Python/JS", "Stats", "Dash/Streamlit"],
      },
      {
        title: "Bayesian Inference Demo",
        description:
          "Interactive prior→posterior updates with real or synthetic data for common distributions.",
        difficulty: "Advanced",
        technologies: ["Python", "PyMC/NumPyro", "Bokeh/Panel"],
      },
    ],
  },
};

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

export default function MathFoundations() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(-1);
  const [A, setA] = useState([[1, 2],[3, 4]]);
  const [B, setB] = useState([[2, 0],[1, 2]]);
  const [xVal, setXVal] = useState(2);
  const [trials, setTrials] = useState(100);
  const [pHeads, setPHeads] = useState(0.5);

  useEffect(() => {
    const t = setTimeout(() => {}, 50);
    return () => clearTimeout(t);
  }, [trials, pHeads]);

  const multiply2x2 = (M1, M2) => {
    const C = [[0,0],[0,0]];
    for (let i=0;i<2;i++) {
      for (let j=0;j<2;j++) {
        let s = 0;
        for (let k=0;k<2;k++) s += M1[i][k]*M2[k][j];
        C[i][j] = s;
      }
    }
    return C;
  };

  const C = multiply2x2(A,B);
  const fx = xVal*xVal;
  const grad = 2*xVal;

  const { topic, category, sections } = mathData;
  const languages = ["c","cpp","java","python","javascript"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">{topic}</h1>
          <p className="text-xl">{category}</p>
          <div className="mt-6">
            <div className="flex justify-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-white/20 rounded-full">📐 Linear Algebra</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">📉 Calculus</span>
              <span className="px-3 py-1 bg-white/20 rounded-full">🎲 Probability</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section className="transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">🎯 Why Math Matters in AI/ML</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">{sections.student_hook}</p>
          </div>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8 text-center">📐<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Linear Algebra</span></h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">💡 Core Concept</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sections.linearAlgebra.concept}</p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400"><p className="text-blue-800 dark:text-blue-200 font-medium"><span className="font-bold">Real-world example:</span> {sections.linearAlgebra.realWorldExample}</p></div>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mb-6 text-center">📊 <span className="text-blue-800 dark:text-blue-200">2x2 Matrix Multiplication</span></h3>
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="space-y-2">{A.map((row, i) => (<div key={i} className="flex gap-2">{row.map((v, j) => (<input key={j} type="number" value={v} onChange={(e)=>{const nv=Number(e.target.value||0);const next=A.map(r=>r.slice());next[i][j]=nv;setA(next);}} className="w-16 px-2 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"/>))}</div>))}</div>
              <div className="text-center text-3xl font-bold">×</div>
              <div className="space-y-2">{B.map((row, i) => (<div key={i} className="flex gap-2">{row.map((v, j) => (<input key={j} type="number" value={v} onChange={(e)=>{const nv=Number(e.target.value||0);const next=B.map(r=>r.slice());next[i][j]=nv;setB(next);}} className="w-16 px-2 py-2 border-2 border-blue-300 dark:border-blue-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"/>))}</div>))}</div>
            </div>
            <div className="mt-6 text-center"><div className="inline-block bg-white dark:bg-gray-800 p-4 rounded-lg shadow border"><div className="grid grid-cols-2 gap-2">{C.flat().map((v,i)=>(<div key={i} className="w-16 h-12 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 rounded-lg font-bold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">{v}</div>))}</div></div></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500"><h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3><ul className="space-y-3">{sections.linearAlgebra.advantages.map((adv, idx)=>(<li key={idx} className="flex items-start space-x-3"><span className="text-green-500 text-lg">{adv.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{adv.substring(2)}</span></li>))}</ul></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500"><h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3><ul className="space-y-3">{sections.linearAlgebra.disadvantages.map((d, idx)=>(<li key={idx} className="flex items-start space-x-3"><span className="text-red-500 text-lg">{d.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{d.substring(2)}</span></li>))}</ul></div>
          </div>
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-6 text-center">🏢 <span className="text-blue-700 dark:text-blue-300">Linear Algebra in Industry</span></h3><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{sections.linearAlgebra.industry_applications.map((a, i)=>(<div key={i} className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400 hover:shadow-lg transition-shadow duration-300"><p className="text-gray-700 dark:text-gray-300">{a}</p></div>))}</div></div>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8 text-center">📉 <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Calculus</span></h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-green-500"><h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">💡 Core Concept</h3><p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sections.calculus.concept}</p><div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400"><p className="text-green-800 dark:text-green-200 font-medium"><span className="font-bold">Real-world example:</span> {sections.calculus.realWorldExample}</p></div></div>
          <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold mb-6 text-center">📈 <span className="text-green-800 dark:text-green-200">Gradient of f(x)=x²</span></h3>
            <div className="flex flex-col items-center gap-4"><input type="range" min="-5" max="5" step="0.1" value={xVal} onChange={(e)=>setXVal(Number(e.target.value))} className="w-full max-w-xl" /><div className="grid grid-cols-3 gap-4 text-center w-full max-w-xl"><div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"><div className="text-sm text-gray-500">x</div><div className="text-2xl font-bold text-green-600">{xVal.toFixed(2)}</div></div><div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"><div className="text-sm text-gray-500">f(x)=x²</div><div className="text-2xl font-bold text-green-600">{(xVal*xVal).toFixed(2)}</div></div><div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"><div className="text-sm text-gray-500">∂f/∂x</div><div className="text-2xl font-bold text-green-600">{(2*xVal).toFixed(2)}</div></div></div></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8"><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500"><h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3><ul className="space-y-3">{sections.calculus.advantages.map((a,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-green-500 text-lg">{a.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{a.substring(2)}</span></li>))}</ul></div><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500"><h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3><ul className="space-y-3">{sections.calculus.disadvantages.map((d,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-red-500 text-lg">{d.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{d.substring(2)}</span></li>))}</ul></div></div>
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-6 text-center">🏢 <span className="text-green-700 dark:text-green-300">Calculus in Industry</span></h3><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{sections.calculus.industry_applications.map((a,i)=>(<div key={i} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl border-l-4 border-green-400 hover:shadow-lg transition-shadow duration-300"><p className="text-gray-700 dark:text-gray-300">{a}</p></div>))}</div></div>
        </section>

        <section>
          <h2 className="text-5xl font-bold mb-8 text-center">🎲 <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Probability & Statistics</span></h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 border-purple-500"><h3 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">💡 Core Concept</h3><p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sections.probability.concept}</p><div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400"><p className="text-purple-800 dark:text-purple-200 font-medium"><span className="font-bold">Real-world example:</span> {sections.probability.realWorldExample}</p></div></div>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800"><h3 className="text-2xl font-bold mb-6 text-center">🎲 <span className="text-purple-800 dark:text-purple-200">Monte Carlo Coin Toss</span></h3><div className="grid md:grid-cols-3 gap-6 items-end"><div><label className="block text-sm text-gray-600 mb-1">Trials</label><input type="number" value={trials} onChange={(e)=>setTrials(Math.max(1, Number(e.target.value || 1)))} className="w-full px-3 py-2 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-white dark:bg-gray-700" /></div><div><label className="block text-sm text-gray-600 mb-1">P(heads)</label><input type="number" step="0.01" min="0" max="1" value={pHeads} onChange={(e)=>setPHeads(Math.min(1, Math.max(0, Number(e.target.value || 0))))} className="w-full px-3 py-2 border-2 border-purple-300 dark:border-purple-600 rounded-lg bg-white dark:bg-gray-700" /></div><div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center"><div className="text-sm text-gray-500">Estimated P(heads)</div><div className="text-2xl font-bold text-purple-600">≈ {(Math.min(1, Math.max(0, pHeads))).toFixed(2)}</div></div></div></div>
          <div className="grid md:grid-cols-2 gap-8 mt-8"><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500"><h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3><ul className="space-y-3">{sections.probability.advantages.map((a,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-green-500 text-lg">{a.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{a.substring(2)}</span></li>))}</ul></div><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500"><h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3><ul className="space-y-3">{sections.probability.disadvantages.map((d,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-red-500 text-lg">{d.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{d.substring(2)}</span></li>))}</ul></div></div>
          <div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-6 text-center">🏢 <span className="text-purple-700 dark:text-purple-300">Probability in Industry</span></h3><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{sections.probability.industry_applications.map((a,i)=>(<div key={i} className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-l-4 border-purple-400 hover:shadow-lg transition-shadow duration-300"><p className="text-gray-700 dark:text-gray-300">{a}</p></div>))}</div></div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">💻 <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Real-World Code Examples</span></h2>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-700 p-4"><div className="flex flex-wrap justify-center gap-2">{languages.map((lang)=>(<button key={lang} onClick={()=>setSelectedLanguage(lang)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedLanguage===lang?"bg-rose-500 text-white shadow-lg":"bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500"}`}>{lang.toUpperCase()}</button>))}</div></div>
            <div className="p-6"><div className="relative"><pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed"><code dangerouslySetInnerHTML={{ __html: highlightSyntax(sections.code_examples[selectedLanguage], selectedLanguage) }} /></pre><button className="absolute top-2 right-2 p-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400" onClick={()=>navigator.clipboard.writeText(sections.code_examples[selectedLanguage])}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button></div></div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">🎤 Interview Questions & Answers</h2>
          <div className="space-y-4">{sections.interview_questions.map((qa, index)=>(<div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"><button onClick={()=> setSelectedQuestionIndex(selectedQuestionIndex===index? -1 : index)} className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"><div className="flex justify-between items-start"><div className="flex-1"><h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{qa.question}</h3><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${qa.difficulty === "Easy" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : qa.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"}`}>{qa.difficulty}</span></div><div className="ml-4"><svg className={`w-6 h-6 transition-transform duration-200 ${selectedQuestionIndex===index?"rotate-180":""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div></div></button>{selectedQuestionIndex===index && (<div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"><div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4"><p className="text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Answer:</strong> {qa.answer}</p></div></div>)}</div>))}</div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">🚀 Hands-on Project Ideas</h2>
          <div className="grid md:grid-cols-2 gap-8">{sections.project_ideas.map((project, index)=>(<div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-violet-500"><div className="mb-4"><h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{project.title}</h3><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.difficulty === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : project.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"}`}>{project.difficulty}</span></div><p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{project.description}</p><div className="space-y-2"><h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies:</h4><div className="flex flex-wrap gap-2">{project.technologies.map((tech, techIndex)=>(<span key={techIndex} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-medium">{tech}</span>))}</div></div></div>))}</div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Make the Math Click! 🧠</h3>
          <p className="text-lg text-gray-300 mb-6">With solid foundations, every model is easier to build, debug, and scale.</p>
          <div className="flex justify-center space-x-4 text-sm"><span className="px-4 py-2 bg-white/10 rounded-full">📚 Learn</span><span className="px-4 py-2 bg-white/10 rounded-full">🔬 Experiment</span><span className="px-4 py-2 bg-white/10 rounded-full">🎯 Master</span></div>
        </div>
      </footer>
    </div>
  );
}

