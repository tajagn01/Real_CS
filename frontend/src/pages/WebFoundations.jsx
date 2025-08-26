import React, { useState } from "react";

const web = {
  topic: "Foundations of the Web",
  category: "HTML • CSS • JavaScript • HTTP • DOM",
  sections: {
    student_hook:
      "The web is a living document. Structure it (HTML), style it (CSS), bring it to life (JS), and deliver it (HTTP).",

    html: {
      concept:
        "HTML provides semantic structure: headings, lists, forms, media. Accessibility and SEO start here.",
      realWorldExample:
        "A product page uses semantic tags (<header>, <main>, <article>, <footer>) for clarity and accessibility.",
      industry_applications: ["🦾 Accessible UIs","🔎 SEO","🧩 Reusability","📄 Content platforms"],
      advantages: ["🧠 Semantics","🦽 Accessibility","🔍 SEO","🧰 Simplicity"],
      disadvantages: ["📏 Consistency needed","🧱 Misuse harms SEO","🔗 Coupling with CSS/JS","🧪 Validation gaps"],
    },

    css: {
      concept:
        "CSS controls presentation: layout, typography, colors, responsive design with modern layout (Flexbox/Grid).",
      realWorldExample:
        "A dashboard adapts from mobile to desktop via CSS Grid and responsive units.",
      industry_applications: ["📱 Responsive web","🎨 Design systems","🧭 Theming","♿ Contrast/legibility"],
      advantages: ["🎯 Declarative","📐 Powerful layout","🎨 Theming","⚡ GPU-accelerated transitions"],
      disadvantages: ["🧵 Cascade complexity","🧱 Specificity wars","🧩 Browser quirks","🧪 Testing visuals"],
    },

    js: {
      concept:
        "JavaScript enables interactivity: DOM manipulation, async data fetching, SPA behavior, and component frameworks.",
      realWorldExample:
        "Live search fetches suggestions as the user types via fetch() and updates the DOM.",
      industry_applications: ["⚡ SPAs","🧭 Routing","📡 Realtime UIs","🔌 Integrations"],
      advantages: ["🚀 Dynamic UIs","🔁 Reusability","🌐 Huge ecosystem","🧰 Tooling"],
      disadvantages: ["📦 Bundle size","🧮 State complexity","🧱 Compatibility","🧪 Flaky tests"],
    },

    code_examples: {
      html: `<!-- Semantic layout -->\n<header>Site</header>\n<main><article><h1>Title</h1></article></main>\n<footer>©</footer>`,
      css: `/* Responsive grid */\n.container{display:grid;grid-template-columns:1fr;gap:1rem;}\n@media(min-width:768px){.container{grid-template-columns:1fr 1fr;}}`,
      javascript: `// Fetch suggestions\nasync function suggest(q){const r=await fetch('/api?q='+q);return r.json();}`,
    },

    interview_questions: [
      { question: "Block vs inline elements?", difficulty: "Easy", answer: "Block starts on new line, spans full width; inline flows within text." },
      { question: "Specificity order?", difficulty: "Medium", answer: "Inline > ID > Class/Attr/Pseudo-class > Element/Pseudo-element." },
      { question: "Event loop basics?", difficulty: "Medium", answer: "Call stack, Web APIs, task/microtask queues schedule async callbacks." },
    ],

    project_ideas: [
      { title: "Semantic Blog", difficulty: "Beginner", description: "Blog with semantic HTML and accessible nav.", technologies: ["HTML","CSS"] },
      { title: "Responsive Dashboard", difficulty: "Intermediate", description: "Grid-based responsive layout.", technologies: ["CSS Grid","Tailwind"] },
      { title: "Live Search", difficulty: "Intermediate", description: "Fetch on input, debounced.", technologies: ["JS","Fetch","ARIA"] },
    ],
  },
};

const highlightSyntax = (code, language) => {
  const strings= /"[^"]*"|'[^']*'|`[^`]*`/g; const comments=/\/\*([\s\S]*?)\*\//gm; const numbers=/\b\d+\b/g; let s=code; s=s.replace(strings,m=>`<span style="color:#22c55e;">${m}</span>`); s=s.replace(comments,m=>`<span style="color:#6b7280;">${m}</span>`); s=s.replace(numbers,m=>`<span style="color:#f97316;">${m}</span>`); return s;
};

export default function WebFoundations(){
  const { topic, category, sections } = web;
  const [lang, setLang] = useState('html');
  const [openQ, setOpenQ] = useState(-1);
  const langs=['html','css','javascript'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden"><div className="absolute inset-0 bg-black/10"></div><div className="relative z-10"><h1 className="text-6xl font-extrabold mb-2 animate-pulse">{topic}</h1><p className="text-xl">{category}</p></div></header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section><h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">🎯 Why Web Foundations?</h2><div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500"><p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">{sections.student_hook}</p></div></section>

        {['html','css','js'].map((key, idx)=>{
          const sec=sections[key]; if(!sec) return null; const meta=[{emoji:'🧩',pill:'from-blue-600 to-indigo-600',border:'border-blue-500',tag:'text-blue-700 dark:text-blue-300',bg:'bg-blue-50 dark:bg-blue-900/20',bar:'border-blue-400'},{emoji:'🎨',pill:'from-green-600 to-emerald-600',border:'border-green-500',tag:'text-green-700 dark:text-green-300',bg:'bg-green-50 dark:bg-green-900/20',bar:'border-green-400'},{emoji:'⚡',pill:'from-purple-600 to-violet-600',border:'border-purple-500',tag:'text-purple-700 dark:text-purple-300',bg:'bg-purple-50 dark:bg-purple-900/20',bar:'border-purple-400'}][idx]; const title= key==='html'?'HTML Semantics': key==='css'?'CSS & Layout':'JavaScript & DOM';
          return (<section key={key}><h2 className="text-5xl font-bold mb-8 text-center">{meta.emoji} <span className={`bg-gradient-to-r ${meta.pill} bg-clip-text text-transparent`}>{title}</span></h2><div className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 ${meta.border}`}><h3 className={`text-2xl font-bold mb-4 ${meta.tag}`}>💡 Core Concept</h3><p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sec.concept}</p><div className={`${meta.bg} p-4 rounded-lg border-l-4 ${meta.bar}`}><p className={`${meta.tag} font-medium`}><span className="font-bold">Real-world example:</span> {sec.realWorldExample}</p></div></div><div className="grid md:grid-cols-2 gap-8 mt-8"><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500"><h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3><ul className="space-y-3">{sec.advantages.map((a,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-green-500 text-lg">{a.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{a.substring(2)}</span></li>))}</ul></div><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500"><h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3><ul className="space-y-3">{sec.disadvantages.map((d,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-red-500 text-lg">{d.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{d.substring(2)}</span></li>))}</ul></div></div><div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-6 text-center">🏢 <span className={meta.tag}>Industry Applications</span></h3><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{sec.industry_applications.map((a,i)=>(<div key={i} className={`${meta.bg} p-4 rounded-xl border-l-4 ${meta.bar} hover:shadow-lg transition-shadow duration-300`}><p className="text-gray-700 dark:text-gray-300">{a}</p></div>))}</div></div></section>);
        })}

        <section><h2 className="text-4xl font-bold mb-8 text-center">💻 <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Code Examples</span></h2><div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"><div className="bg-gray-100 dark:bg-gray-700 p-4"><div className="flex flex-wrap justify-center gap-2">{langs.map(l=>(<button key={l} onClick={()=>setLang(l)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${lang===l?"bg-rose-500 text-white shadow-lg":"bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500"}`}>{l.toUpperCase()}</button>))}</div></div><div className="p-6"><div className="relative"><pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed"><code dangerouslySetInnerHTML={{ __html: highlightSyntax(sections.code_examples[lang], lang) }} /></pre><button className="absolute top-2 right-2 p-2 rounded-md text-white bg-gray-700 hover:bg-gray-600" onClick={()=>navigator.clipboard.writeText(sections.code_examples[lang])}>Copy</button></div></div></div></section>

        <section><h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">🎤 Interview Q&A</h2><div className="space-y-4">{sections.interview_questions.map((q,i)=>(<div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"><button onClick={()=>setOpenQ(openQ===i?-1:i)} className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"><div className="flex justify-between items-start"><div className="flex-1"><h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{q.question}</h3><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${q.difficulty==='Easy'?'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300':q.difficulty==='Medium'?'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300':'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>{q.difficulty}</span></div><div className="ml-4"><svg className={`w-6 h-6 transition-transform duration-200 ${openQ===i?'rotate-180':''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div></div></button>{openQ===i && (<div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"><div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4"><p className="text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Answer:</strong> {q.answer}</p></div></div>)}</div>))}</div></section>

        <section><h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">🚀 Project Ideas</h2><div className="grid md:grid-cols-2 gap-8">{sections.project_ideas.map((p,i)=>(<div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-violet-500"><div className="mb-4"><h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{p.title}</h3><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${p.difficulty==='Beginner'?'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300':p.difficulty==='Intermediate'?'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300':'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>{p.difficulty}</span></div><p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{p.description}</p><div className="space-y-2"><h4 className="font-semibold text-gray-800 dark:text-gray-200">Technologies:</h4><div className="flex flex-wrap gap-2">{p.technologies.map((t,k)=>(<span key={k} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-full text-sm font-medium">{t}</span>))}</div></div></div>))}</div></section>
      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16"><div className="max-w-7xl mx-auto px-6 text-center"><h3 className="text-2xl font-bold mb-4">Build the right foundation 🧱</h3><p className="text-lg text-gray-300 mb-6">Semantic HTML, modern CSS, and robust JS are your core.</p></div></footer>
    </div>
  );
}

