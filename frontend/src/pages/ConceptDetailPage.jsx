import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dsaData, aimlData, webdevData, cybersecurityData } from '../api/mockData';
import WhatIsDSA from './WhatIsDSA';
import UsesInIndustry from './usesInIndustry';
import LearningRoadmap from './LearningRoadmap';
import ArrayPage from './Array';
import Recursion from './Recursion';
import Stack from './Stack';
import Queue from './Queue';
import LinkedList from './LinkedList';
import BinaryTree from './BinaryTree';
import HashTable from './HashTable';
import Heap from './Heap';
import DynamicProgramming from './DynamicProgramming'
import WhatIsAIML from './WhatisAIML';
import AimlUseInIndustry from './AimlUseInIndustry';


import SortingAlgorithm from './SortingAlgorithm';
import Tree from './Tree'


import Graph from './Grap';
import { Import } from 'lucide-react';

const dataMapping = {
  dsa: dsaData,
  aiml: aimlData,
  webdev: webdevData,
  cybersecurity: cybersecurityData,
};

const ConceptDetailPage = () => {
  const { domain, conceptId } = useParams();
  const domainData = dataMapping[domain];
  const concept = domainData?.concepts.find(c => c.id === conceptId);

  // Special case: show LearningRoadmap for /dsa/learningRoadmap
  if (domain === 'dsa' && conceptId === 'learningRoadmap') {
    return <LearningRoadmap />;
  }

  if (!concept) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Concept not found</h2>
          <Link to={`/${domain || ''}`} className="text-blue-600 dark:text-blue-400 hover:underline">
            &larr; Back to domain
          </Link>
        </div>
      </div>
    );
  }

  // Render a different component for each concept
  switch (conceptId) {
    case 'tree':
    case 'trie':
      if (domain === 'dsa') return <Tree />;
      break;
    case 'heap':
      if (domain === 'dsa') return <Heap />;
      break;
    case 'learningRoadmap':
      if (domain === 'dsa') return <LearningRoadmap />;
      break;
    case 'what-is-dsa':
      return <WhatIsDSA concept={concept} domain={domain} domainData={domainData} />;
    case 'usesInIndustry':
      return <UsesInIndustry concept={concept} domain={domain} domainData={domainData} />;
    case 'array':
      if (domain === 'dsa') return <ArrayPage />;
      break;
    case 'recursion':
      if (domain === 'dsa') return <Recursion />;
      break;
    case 'stack':
      if (domain === 'dsa') return <Stack />;
      break;
    case 'queue':
      if (domain === 'dsa') return <Queue />;
      break;
case 'linkedList':
  if (domain === 'dsa') return <LinkedList />;
  break;
case 'binaryTree':
  if (domain === 'dsa') return <BinaryTree />;
  break;
case 'hashTable':
  if (domain === 'dsa') return <HashTable />;
  break;
    case 'dynamic-programming':
      if (domain === 'dsa') return <DynamicProgramming />;
      break;
   case 'sorting-algorithms':
      if (domain === 'dsa') return <SortingAlgorithm />;
      break;
    case 'graph':
      if (domain === 'dsa') return <Graph />;
      break;
    case 'what-is-ai-ml':
      if (domain === 'aiml') return <WhatIsAIML />
      break;
case 'aimluseinindustry': 
if (domain === 'aiml') return <AimlUseInIndustry />;

  break;



  

    // Add more cases for other custom pages
    default:
      // fallback: generic layout
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <header className="py-12 text-center">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {concept.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{concept.description}</p>
            <Link
              to={`/${domain}`}
              className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              &larr; Back to {domainData.title}
            </Link>
          </header>
          <main className="max-w-3xl mx-auto px-4 pb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">Definition</h2>
                <p className="text-gray-800 dark:text-gray-200">{concept.definition}</p>
              </section>
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-400">Use Cases</h2>
                <pre className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 rounded p-4">{concept.useCase}</pre>
              </section>
              {concept.code && (
                <section className="mb-6">
                  <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">Example Code</h2>
                  <pre className="bg-gray-900 text-white rounded p-4 overflow-x-auto text-sm">{concept.code}</pre>
                </section>
              )}
              {concept.questions && concept.questions.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold mb-2 text-pink-700 dark:text-pink-400">Interview Questions</h2>
                  <ul className="space-y-4">
                    {concept.questions.map((q, idx) => (
                      <li key={idx} className="bg-gray-50 dark:bg-gray-900 rounded p-4 border border-gray-200 dark:border-gray-700">
                        <strong className="block mb-1">{q.question}</strong>
                        {q.hint && <div className="text-sm text-gray-500 mb-1">Hint: {q.hint}</div>}
                        {q.answer && <div className="text-sm text-green-600 dark:text-green-400">Answer: {q.answer}</div>}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </main>
        </div>
      );
  }
};

export default ConceptDetailPage;
