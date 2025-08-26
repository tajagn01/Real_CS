import React, { useState } from "react";

const future = {
  topic: "Future & Frontier Research",
  category: "Beyond Today's Deep Learning",
  sections: {
    student_hook:
      "What comes after current deep learning? New compute, better reasoning, agentic systems, and safer alignment.",
    compute: {
      concept:
        "Neuromorphic, quantum, efficient accelerators, and analog/in-memory promise new capabilities and efficiency.",
      realWorldExample:
        "Analog accelerators perform matrix ops with far less energy.",
      industry_applications: ["⚡ Low-power edge","🧮 Faster training","🧱 Scaling limits","🔋 Efficiency"],
      advantages: ["🔋 Energy savings","⚡ Throughput","🧩 New paradigms","🧱 Unlock scaling"],
      disadvantages: ["🔧 Hardware maturity","🧪 Programming models","🧰 Tooling gaps","📐 Precision limits"],
    },
    reasoning: {
      concept:
        "World models, planning, tool-use, program synthesis, and multi-agent systems aim at stronger reasoning.",
      realWorldExample:
        "Agents plan with tools (search, code) to solve multi-step tasks.",
      industry_applications: ["🤖 Agents","🧠 Planning","🛠️ Tool-use","🧩 Program synthesis"],
      advantages: ["🧠 Better generalization","🧭 Long-horizon","🧰 Compositionality","🔗 External tools"],
      disadvantages: ["🧪 Eval challenges","🧮 Complexity","🧱 Reliability","🔍 Verification"],
    },
    safety: {
      concept:
        "RLHF, constitutional AI, oversight, and governance shape safe AI. Science discovery accelerates with AI.",
      realWorldExample:
        "Constitutional principles reduce unsafe outputs without human labels.",
      industry_applications: ["🛡️ Safety","📜 Policy","🧬 Science","🤝 Governance"],
      advantages: ["🛡️ Safer models","📜 Accountability","🔬 Discovery","🤝 Coordination"],
      disadvantages: ["⚖️ Trade-offs","🧪 Eval difficulty","🧱 Enforcement","🌐 Global alignment"],
    },
    code_examples: {
      python: `# Quantum kernel (conceptual)\n# map data to Hilbert space; compute kernel`,
      javascript: `// Agent step\nfunction step(s){/* plan, act, observe */}`,
      c: `// Bit op\nint bit(int x){return x&1;}`,
      cpp: `// Placeholder\nint one(){return 1;}`,
      java: `// Placeholder\nint one(){return 1;}`,
    },
    interview_questions: [
      { question: "Why world models?", difficulty: "Medium", answer: "They capture dynamics enabling planning and sample efficiency." },
      { question: "Frontier risks?", difficulty: "Hard", answer: "Scalable oversight, misuse, economic shifts; requires policy and technical solutions." },
    ],
    project_ideas: [
      { title: "Tool-using Agent", difficulty: "Intermediate", description: "Agent that calls tools (search/code) to solve tasks.", technologies: ["LLM API","Planning","Tools"] },
      { title: "Quantum-inspired Kernel", difficulty: "Advanced", description: "Prototype kernel features for small problems.", technologies: ["Python","NumPy"] },
    ],
  },
};

const highlightSyntax = (code, language) => {
  const keys = { python:['#'], javascript:['function'], c:['int','return'], cpp:['int','return'], java:['int','return'] };
  const strings= /"[^"]*"|'[^']*'|`[^`]*`/g, comments= language==='python'?/#.*$/gm:/\/\/.*$|\/\*[\s\S]*?\*\//gm, numbers=/\b\d+\.?\d*\b/g; let s=code; s=s.replace(strings,m=>`<span style="color:#22c55e;">${m}</span>`); s=s.replace(comments,m=>`<span style="color:#6b7280;">${m}</span>`); s=s.replace(numbers,m=>`<span style="color:#f97316;">${m}</span>`); (keys[language]||[]).forEach(k=>{const r=new RegExp(`\\b${k}\\b`,'g'); s=s.replace(r,m=>`<span style=\"color:#3b82f6;\">${m}</span>`);}); return s;
};

export default function FutureResearch(){
  const { topic, category, sections } = future;
  const [lang, setLang] = useState('python');
  const [openQ, setOpenQ] = useState(-1);
  const langs=['python','javascript','c','cpp','java'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden"><div className="absolute inset-0 bg-black/10"></div><div className="relative z-10"><h1 className="text-6xl font-extrabold mb-2 animate-pulse">{topic}</h1><p className="text-xl">{category}</p></div></header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section><h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">🔭 Why Frontier Research?</h2><div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500"><p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">{sections.student_hook}</p></div></section>

        {['compute','reasoning','safety'].map((key, idx)=>{
          const sec=sections[key]; const meta=[{emoji:'⚡',pill:'from-blue-600 to-indigo-600',border:'border-blue-500',tag:'text-blue-700 dark:text-blue-300',bg:'bg-blue-50 dark:bg-blue-900/20',bar:'border-blue-400'},{emoji:'🧠',pill:'from-green-600 to-emerald-600',border:'border-green-500',tag:'text-green-700 dark:text-green-300',bg:'bg-green-50 dark:bg-green-900/20',bar:'border-green-400'},{emoji:'🛡️',pill:'from-purple-600 to-violet-600',border:'border-purple-500',tag:'text-purple-700 dark:text-purple-300',bg:'bg-purple-50 dark:bg-purple-900/20',bar:'border-purple-400'}][idx]; const title= key==='compute'?'Compute & Hardware': key==='reasoning'?'Learning & Reasoning':'Safety & Society';
          return (<section key={key}><h2 className="text-5xl font-bold mb-8 text-center">{meta.emoji} <span className={`bg-gradient-to-r ${meta.pill} bg-clip-text text-transparent`}>{title}</span></h2><div className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 ${meta.border}`}><h3 className={`text-2xl font-bold mb-4 ${meta.tag}`}>💡 Core Concept</h3><p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sec.concept}</p><div className={`${meta.bg} p-4 rounded-lg border-l-4 ${meta.bar}`}><p className={`${meta.tag} font-medium`}><span className="font-bold">Real-world example:</span> {sec.realWorldExample}</p></div></div><div className="grid md:grid-cols-2 gap-8 mt-8"><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500"><h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3><ul className="space-y-3">{sec.advantages.map((a,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-green-500 text-lg">{a.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{a.substring(2)}</span></li>))}</ul></div><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500"><h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3><ul className="space-y-3">{sec.disadvantages.map((d,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-red-500 text-lg">{d.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{d.substring(2)}</span></li>))}</ul></div></div></section>);
        })}

        <section><h2 className="text-4xl font-bold mb-8 text-center">💻 <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Code Examples</span></h2><div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"><div className="bg-gray-100 dark:bg-gray-700 p-4"><div className="flex flex-wrap justify-center gap-2">{langs.map(l=>(<button key={l} onClick={()=>setLang(l)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${lang===l?"bg-rose-500 text-white shadow-lg":"bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500"}`}>{l.toUpperCase()}</button>))}</div></div><div className="p-6"><div className="relative"><pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed"><code dangerouslySetInnerHTML={{ __html: highlightSyntax(sections.code_examples[lang], lang) }} /></pre><button className="absolute top-2 right-2 p-2 rounded-md text-white bg-gray-700 hover:bg-gray-600" onClick={()=>navigator.clipboard.writeText(sections.code_examples[lang])}>Copy</button></div></div></div></section>

        <section><h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">🎤 Interview Q&A</h2><div className="space-y-4">{sections.interview_questions.map((q,i)=>(<div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"><button onClick={()=>setOpenQ(openQ===i?-1:i)} className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"><div className="flex justify-between items-start"><div className="flex-1"><h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{q.question}</h3><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${q.difficulty==='Easy'?'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300':q.difficulty==='Medium'?'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300':'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>{q.difficulty}</span></div><div className="ml-4"><svg className={`w-6 h-6 transition-transform duration-200 ${openQ===i?'rotate-180':''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div></div></button>{openQ===i && (<div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"><div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4"><p className="text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Answer:</strong> {q.answer}</p></div></div>)}</div>))}</div></section>

        <section><h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">🚀 Project Ideas</h2><div className="grid md:grid-cols-2 gap-8">{sections.project_ideas.map((p,i)=>(<div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-violet-500"><div className="mb-4"><h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{p.title}</h3><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${p.difficulty==='Beginner'?'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300':p.difficulty==='Intermediate'?'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300':'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>{p.difficulty}</span></div><p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{p.description}</p><div className="space-y-2"><h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies:</h4><div className="flex flex-wrap gap-2">{p.technologies.map((t,k)=>(<span key={k} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-medium">{t}</span>))}</div></div></div>))}</div></section>
      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16"><div className="max-w-7xl mx-auto px-6 text-center"><h3 className="text-2xl font-bold mb-4">Invent the next wave 🌊</h3><p className="text-lg text-gray-300 mb-6">Push hardware, learning, and safety forward.</p></div></footer>
    </div>
  );
}

