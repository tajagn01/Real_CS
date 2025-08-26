import React, { useState } from "react";

const dl = {
  topic: "Deep Learning",
  category: "Neural Networks & Training",
  sections: {
    student_hook:
      "Deep learning stacks simple functions into powerful hierarchies. With the right data and training, these systems learn features we can’t handcraft.",

    architectures: {
      concept:
        "Architectures define how information flows: CNNs for images, RNNs for sequences, Transformers for attention-based modeling, GANs/diffusion for generation.",
      realWorldExample:
        "Image classification with CNNs; LLMs with Transformers; generative art with diffusion models.",
      industry_applications: [
        "📷 Vision (classification, detection)",
        "🗣️ Speech & ASR",
        "📝 LLM assistants",
        "🎨 Generative media",
      ],
      advantages: ["📈 Strong performance", "🧠 Learns features", "🔁 Transfer learning", "🧩 Flexible architectures"],
      disadvantages: ["💾 Data-hungry", "⚡ Compute intensive", "🧪 Hard to interpret", "🎛️ Many hyperparams"],
    },

    training: {
      concept:
        "Training minimizes loss via gradient-based optimizers. Stability from normalization, schedulers, regularization, mixed precision, and distributed strategies.",
      realWorldExample:
        "Fine-tuning a pretrained model with a small learning rate schedule improves convergence and accuracy.",
      industry_applications: ["🧪 Model finetuning", "🏭 Production retraining", "☁️ Distributed training", "📉 Cost optimization"],
      advantages: ["🧭 Convergence control", "🧰 Tooling rich", "💡 Performance gains", "🧮 Scalable"],
      disadvantages: ["🎯 Sensitive to LR", "🌀 Instabilities", "🐢 Long training", "⚙️ Complex pipelines"],
    },

    practice: {
      concept:
        "Practical deep learning uses transfer learning, adapters/LoRA, quantization/pruning, and efficient serving.",
      realWorldExample:
        "LoRA adapters enable fast LLM customization without retraining the whole model.",
      industry_applications: ["🤖 Copilots", "📱 On-device AI", "🧩 Edge inference", "🧪 A/B evals"],
      advantages: ["⚡ Rapid iteration", "💸 Lower cost", "📦 Smaller models", "🚀 Fast deployment"],
      disadvantages: ["📐 Performance gaps", "🧮 Compatibility issues", "🔍 Eval complexity", "🔧 Extra tooling"],
    },

    code_examples: {
      python: `# PyTorch linear layer\nimport torch, torch.nn as nn\nlin=nn.Linear(4,2)\nx=torch.randn(3,4)\ny=lin(x)\nprint(y.shape)`,
      javascript: `// Softmax\nfunction softmax(a){const m=Math.max(...a);const e=a.map(x=>Math.exp(x-m));const s=e.reduce((p,q)=>p+q,0);return e.map(x=>x/s);}`,
      c: `// ReLU\ndouble relu(double x){return x>0?x:0;}`,
      cpp: `// Sigmoid\n#include <cmath>\ndouble sigmoid(double z){return 1.0/(1.0+std::exp(-z));}`,
      java: `// Step activation\ndouble step(double x){return x>=0?1:0;}`,
    },

    interview_questions: [
      { question: "When to prefer CNNs vs Transformers in vision?", difficulty: "Medium", answer: "CNNs excel on small data/embedded; Vision Transformers shine with large data/pretraining and global context." },
      { question: "Why batch norm helps?", difficulty: "Medium", answer: "Stabilizes distributions, improves gradients, allows higher learning rates." },
      { question: "Quantization trade-offs?", difficulty: "Hard", answer: "Latency/size vs accuracy; use post-training or quant-aware training and per-channel scales." },
    ],

    project_ideas: [
      { title: "Transfer Learning Classifier", difficulty: "Beginner", description: "Finetune a pretrained CNN on a small dataset.", technologies: ["PyTorch","Keras"] },
      { title: "LoRA Finetuning", difficulty: "Intermediate", description: "Adapter-tune a Transformer for a domain.", technologies: ["HF Transformers","PEFT"] },
    ],
  },
};

const highlightSyntax = (code, language) => {
  const keywords = { python:['def','import','class','return','for','while'], javascript:['function','const','let','return'], c:['double','int','return'], cpp:['double','int','return','include'], java:['double','int','return'] };
  const strings = /"[^"]*"|'[^']*'|`[^`]*`/g; const comments = language==='python'?/#.*$/gm:/\/\/.*$|\/\*[\s\S]*?\*\//gm; const numbers=/\b\d+\.?\d*\b/g; let s=code; s=s.replace(strings,m=>`<span style="color:#22c55e;">${m}</span>`); s=s.replace(comments,m=>`<span style="color:#6b7280;">${m}</span>`); s=s.replace(numbers,m=>`<span style="color:#f97316;">${m}</span>`); (keywords[language]||[]).forEach(k=>{const r=new RegExp(`\\b${k}\\b`,'g'); s=s.replace(r,m=>`<span style="color:#3b82f6;">${m}</span>`);}); return s;
};

export default function DeepLearning(){
  const { topic, category, sections } = dl;
  const [lang, setLang] = useState('python');
  const [openQ, setOpenQ] = useState(-1);
  const langs = ['python','javascript','c','cpp','java'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden"><div className="absolute inset-0 bg-black/10"></div><div className="relative z-10"><h1 className="text-6xl font-extrabold mb-2 animate-pulse">{topic}</h1><p className="text-xl">{category}</p></div></header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section><h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">🎯 Why Deep Learning?</h2><div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500"><p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">{sections.student_hook}</p></div></section>

        {['architectures','training','practice'].map((key, idx)=>{
          const sec = sections[key];
          const meta=[{emoji:'🏗️',pill:'from-blue-600 to-indigo-600',border:'border-blue-500',tag:'text-blue-700 dark:text-blue-300',bg:'bg-blue-50 dark:bg-blue-900/20',bar:'border-blue-400'},{emoji:'🧪',pill:'from-green-600 to-emerald-600',border:'border-green-500',tag:'text-green-700 dark:text-green-300',bg:'bg-green-50 dark:bg-green-900/20',bar:'border-green-400'},{emoji:'🧰',pill:'from-purple-600 to-violet-600',border:'border-purple-500',tag:'text-purple-700 dark:text-purple-300',bg:'bg-purple-50 dark:bg-purple-900/20',bar:'border-purple-400'}][idx];
          const title = key==='architectures'? 'Architectures' : key==='training'? 'Training & Optimization' : 'Practical Techniques';
          return (<section key={key}><h2 className="text-5xl font-bold mb-8 text-center">{meta.emoji} <span className={`bg-gradient-to-r ${meta.pill} bg-clip-text text-transparent`}>{title}</span></h2><div className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 ${meta.border}`}><h3 className={`text-2xl font-bold mb-4 ${meta.tag}`}>💡 Core Concept</h3><p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sec.concept}</p><div className={`${meta.bg} p-4 rounded-lg border-l-4 ${meta.bar}`}><p className={`${meta.tag} font-medium`}><span className="font-bold">Real-world example:</span> {sec.realWorldExample}</p></div></div><div className="grid md:grid-cols-2 gap-8 mt-8"><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500"><h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3><ul className="space-y-3">{sec.advantages.map((a,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-green-500 text-lg">{a.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{a.substring(2)}</span></li>))}</ul></div><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500"><h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3><ul className="space-y-3">{sec.disadvantages.map((d,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-red-500 text-lg">{d.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{d.substring(2)}</span></li>))}</ul></div></div><div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-6 text-center">🏢 <span className={meta.tag}>Industry Applications</span></h3><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{sec.industry_applications.map((a,i)=>(<div key={i} className={`${meta.bg} p-4 rounded-xl border-l-4 ${meta.bar} hover:shadow-lg transition-shadow duration-300`}><p className="text-gray-700 dark:text-gray-300">{a}</p></div>))}</div></div></section>);
        })}

        <section><h2 className="text-4xl font-bold mb-8 text-center">💻 <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Code Examples</span></h2><div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"><div className="bg-gray-100 dark:bg-gray-700 p-4"><div className="flex flex-wrap justify-center gap-2">{langs.map(l=>(<button key={l} onClick={()=>setLang(l)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${lang===l?"bg-rose-500 text-white shadow-lg":"bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500"}`}>{l.toUpperCase()}</button>))}</div></div><div className="p-6"><div className="relative"><pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed"><code dangerouslySetInnerHTML={{ __html: highlightSyntax(sections.code_examples[lang], lang) }} /></pre><button className="absolute top-2 right-2 p-2 rounded-md text-white bg-gray-700 hover:bg-gray-600" onClick={()=>navigator.clipboard.writeText(sections.code_examples[lang])}>Copy</button></div></div></div></section>

        <section><h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">🎤 Interview Q&A</h2><div className="space-y-4">{sections.interview_questions.map((q,i)=>(<div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"><button onClick={()=>setOpenQ(openQ===i?-1:i)} className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"><div className="flex justify-between items-start"><div className="flex-1"><h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{q.question}</h3><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${q.difficulty==='Easy'?'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300':q.difficulty==='Medium'?'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300':'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>{q.difficulty}</span></div><div className="ml-4"><svg className={`w-6 h-6 transition-transform duration-200 ${openQ===i?'rotate-180':''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div></div></button>{openQ===i && (<div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"><div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4"><p className="text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Answer:</strong> {q.answer}</p></div></div>)}</div>))}</div></section>

        <section><h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">🚀 Project Ideas</h2><div className="grid md:grid-cols-2 gap-8">{sections.project_ideas.map((p,i)=>(<div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-violet-500"><div className="mb-4"><h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{p.title}</h3><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${p.difficulty==='Beginner'?'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300':p.difficulty==='Intermediate'?'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300':'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>{p.difficulty}</span></div><p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{p.description}</p><div className="space-y-2"><h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies:</h4><div className="flex flex-wrap gap-2">{p.technologies.map((t,k)=>(<span key={k} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-medium">{t}</span>))}</div></div></div>))}</div></section>
      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16"><div className="max-w-7xl mx-auto px-6 text-center"><h3 className="text-2xl font-bold mb-4">Scale your models, not your problems 🚀</h3><p className="text-lg text-gray-300 mb-6">Start with good architecture, train with care, deploy with confidence.</p></div></footer>
    </div>
  );
}

