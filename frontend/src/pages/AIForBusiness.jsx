import React, { useState } from "react";

const biz = {
  topic: "AI for Business & Wealth Creation",
  category: "Strategy, Product, Growth",
  sections: {
    student_hook:
      "AI creates leverage. Start with ROI-backed use cases, build the right product, scale with data and systems.",
    value: {
      concept:
        "Value strategy identifies ROI, decides buy vs build, and designs data moats and platform plays.",
      realWorldExample:
        "A SaaS adds an AI assistant increasing retention and upsells.",
      industry_applications: ["💼 Sales assist","📞 Support automation","📈 Lead scoring","🧾 Document AI"],
      advantages: ["💰 ROI focus","⚙️ Fast wins","📊 Metrics driven","🧭 Clear roadmap"],
      disadvantages: ["🎯 Mis-scoping risk","🔗 Vendor lock-in","🧩 Data access","🧱 Change mgmt"],
    },
    product: {
      concept:
        "Copilots, recommendations, and risk tools drive productivity and personalization.",
      realWorldExample:
        "An e-commerce site boosts revenue via personalized bundles.",
      industry_applications: ["🤖 Copilots","🎯 Personalization","🛡️ Risk","📦 Ops analytics"],
      advantages: ["⚡ Productivity","🧠 Personalization","🛡️ Risk reduction","📈 Predictive ops"],
      disadvantages: ["🧪 Eval difficulty","🔐 PII/Compliance","💸 Inference cost","🧱 Scalability"],
    },
    startup: {
      concept:
        "Prototype quickly with LLMs/no-code, secure data partnerships, ensure unit economics and enterprise readiness.",
      realWorldExample:
        "A startup ships an MVP with LLM APIs then migrates to finetuned models to reduce cost.",
      industry_applications: ["🚀 MVPs","🤝 Partnerships","📉 Unit economics","🏢 Enterprise"],
      advantages: ["⏱️ Speed","🧰 Flexibility","📈 Scale path","🤝 Trust"],
      disadvantages: ["💸 Cost early","🔒 Security reviews","🧩 Vendor limits","🧪 Evaluation"],
    },
    code_examples: {
      javascript: `// ROI calc (simple)\nfunction roi(gain,cost){return (gain-cost)/cost;}`,
      python: `# Price elasticity note\n# dQ/dP impacts optimal pricing`,
      c: `// Placeholder\nint ok(){return 1;}`,
      cpp: `// Moving average\ndouble ma(double a,double x,double w){return (a*(w-1)+x)/w;}`,
      java: `// Feature flag\nboolean on(String f){return true;}`,
    },
    interview_questions: [
      { question: "Buy vs build?", difficulty: "Medium", answer: "Consider time-to-value, differentiation, cost at scale, compliance, and team skills." },
      { question: "Measuring ROI?", difficulty: "Easy", answer: "A/B tests, uplift, productivity metrics, cost savings, CAC/LTV impact." },
    ],
    project_ideas: [
      { title: "AI Copilot MVP", difficulty: "Beginner", description: "Prototype an internal copilot for support tickets.", technologies: ["LLM API","RAG","Guardrails"] },
      { title: "Pricing Optimizer", difficulty: "Intermediate", description: "Elasticity-aware pricing with constrained optimization.", technologies: ["Python","NumPy","SciPy"] },
    ],
    cases: ["Algorithmic trading","Manufacturing optimization","AI SaaS","Agentic workflows"],
  },
};

const highlightSyntax = (code, language) => {
  const keys = { python:['import'], javascript:['function','return'], c:['int','return'], cpp:['double','return'], java:['boolean','return'] };
  const strings= /"[^"]*"|'[^']*'|`[^`]*`/g, comments= language==='python'?/#.*$/gm:/\/\/.*$|\/\*[\s\S]*?\*\//gm, numbers=/\b\d+\.?\d*\b/g; let s=code; s=s.replace(strings,m=>`<span style="color:#22c55e;">${m}</span>`); s=s.replace(comments,m=>`<span style="color:#6b7280;">${m}</span>`); s=s.replace(numbers,m=>`<span style="color:#f97316;">${m}</span>`); (keys[language]||[]).forEach(k=>{const r=new RegExp(`\\b${k}\\b`,'g'); s=s.replace(r,m=>`<span style=\"color:#3b82f6;\">${m}</span>`);}); return s;
};

export default function AIForBusiness(){
  const { topic, category, sections } = biz;
  const [lang, setLang] = useState('javascript');
  const [openQ, setOpenQ] = useState(-1);
  const langs=['javascript','python','c','cpp','java'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 text-gray-900 dark:text-white">
      <header className="py-16 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden"><div className="absolute inset-0 bg-black/10"></div><div className="relative z-10"><h1 className="text-6xl font-extrabold mb-2 animate-pulse">{topic}</h1><p className="text-xl">{category}</p></div></header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        <section><h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">🎯 Why AI for Business?</h2><div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-l-8 border-blue-500"><p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200 italic">{sections.student_hook}</p></div></section>

        {['value','product','startup'].map((key, idx)=>{
          const sec=sections[key]; const meta=[{emoji:'💰',pill:'from-blue-600 to-indigo-600',border:'border-blue-500',tag:'text-blue-700 dark:text-blue-300',bg:'bg-blue-50 dark:bg-blue-900/20',bar:'border-blue-400'},{emoji:'🧩',pill:'from-green-600 to-emerald-600',border:'border-green-500',tag:'text-green-700 dark:text-green-300',bg:'bg-green-50 dark:bg-green-900/20',bar:'border-green-400'},{emoji:'🚀',pill:'from-purple-600 to-violet-600',border:'border-purple-500',tag:'text-purple-700 dark:text-purple-300',bg:'bg-purple-50 dark:bg-purple-900/20',bar:'border-purple-400'}][idx]; const title= key==='value'?'Value & Strategy': key==='product'?'Product & Ops':'Startup Playbook';
          return (<section key={key}><h2 className="text-5xl font-bold mb-8 text-center">{meta.emoji} <span className={`bg-gradient-to-r ${meta.pill} bg-clip-text text-transparent`}>{title}</span></h2><div className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl mb-8 border-l-8 ${meta.border}`}><h3 className={`text-2xl font-bold mb-4 ${meta.tag}`}>💡 Core Concept</h3><p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-4">{sec.concept}</p><div className={`${meta.bg} p-4 rounded-lg border-l-4 ${meta.bar}`}><p className={`${meta.tag} font-medium`}><span className="font-bold">Real-world example:</span> {sec.realWorldExample}</p></div></div><div className="grid md:grid-cols-2 gap-8 mt-8"><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-green-500"><h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-300">✅ Advantages</h3><ul className="space-y-3">{sec.advantages.map((a,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-green-500 text-lg">{a.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{a.substring(2)}</span></li>))}</ul></div><div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border-t-4 border-red-500"><h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-300">❌ Disadvantages</h3><ul className="space-y-3">{sec.disadvantages.map((d,i)=>(<li key={i} className="flex items-start space-x-3"><span className="text-red-500 text-lg">{d.split(' ')[0]}</span><span className="text-gray-700 dark:text-gray-300">{d.substring(2)}</span></li>))}</ul></div></div><div className="mt-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"><h3 className="text-2xl font-bold mb-6 text-center">🏢 <span className={meta.tag}>Industry Applications</span></h3><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{sec.industry_applications.map((a,i)=>(<div key={i} className={`${meta.bg} p-4 rounded-xl border-l-4 ${meta.bar} hover:shadow-lg transition-shadow duration-300`}><p className="text-gray-700 dark:text-gray-300">{a}</p></div>))}</div></div></section>);
        })}

        <section><h2 className="text-4xl font-bold mb-8 text-center">💻 <span className="bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Code Examples</span></h2><div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"><div className="bg-gray-100 dark:bg-gray-700 p-4"><div className="flex flex-wrap justify-center gap-2">{langs.map(l=>(<button key={l} onClick={()=>setLang(l)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${lang===l?"bg-rose-500 text-white shadow-lg":"bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-500"}`}>{l.toUpperCase()}</button>))}</div></div><div className="p-6"><div className="relative"><pre className="bg-gray-900 text-white p-6 rounded-xl overflow-x-auto text-sm leading-relaxed"><code dangerouslySetInnerHTML={{ __html: highlightSyntax(sections.code_examples[lang], lang) }} /></pre><button className="absolute top-2 right-2 p-2 rounded-md text-white bg-gray-700 hover:bg-gray-600" onClick={()=>navigator.clipboard.writeText(sections.code_examples[lang])}>Copy</button></div></div></div></section>

        <section><h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">🎤 Interview Q&A</h2><div className="space-y-4">{sections.interview_questions.map((q,i)=>(<div key={i} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"><button onClick={()=>setOpenQ(openQ===i?-1:i)} className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"><div className="flex justify-between items-start"><div className="flex-1"><h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{q.question}</h3><span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${q.difficulty==='Easy'?'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300':q.difficulty==='Medium'?'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300':'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'}`}>{q.difficulty}</span></div><div className="ml-4"><svg className={`w-6 h-6 transition-transform duration-200 ${openQ===i?'rotate-180':''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></div></div></button>{openQ===i && (<div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700"><div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4"><p className="text-gray-700 dark:text-gray-300 leading-relaxed"><strong>Answer:</strong> {q.answer}</p></div></div>)}</div>))}</div></section>

        <section><h2 className="text-4xl font-bold mb-8 text-center">📚 Use Case Examples</h2><div className="flex flex-wrap gap-2 justify-center">{sections.cases.map((c,i)=>(<span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm">{c}</span>))}</div></section>
      </main>

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16"><div className="max-w-7xl mx-auto px-6 text-center"><h3 className="text-2xl font-bold mb-4">Build value with AI 💼</h3><p className="text-lg text-gray-300 mb-6">Start with ROI, ship iteratively, scale systems responsibly.</p></div></footer>
    </div>
  );
}

