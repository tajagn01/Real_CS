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
import WebFoundations from './WebFoundations';
import FrontendDev from './FrontendDev';
import BackendDev from './BackendDev';
import DatabasesWeb from './DatabasesWeb';
import FutureWeb from './FutureWeb';
import FullStack from './FullStack';
import WebPerformance from './WebPerformance';
import WebSecurity from './WebSecurity';
import WebDevOps from './WebDevOps';
import WebPWA from './WebPWA';
import WebTesting from './WebTesting';
import WebSystemDesign from './WebSystemDesign';
import AIMLRoadmap from './AIMLRoadmap';
import MathFoundations from './MathFoundations';
import CoreMLAlgorithms from './CoreMLAlgorithms';
import DeepLearning from './DeepLearning';
import NLP from './NLP';
import ComputerVision from './ComputerVision';
import ReinforcementLearning from './ReinforcementLearning';
import MLOps from './MLOps';
import AIForDataScience from './AIForDataScience';
import ResponsibleAI from './ResponsibleAI';
import AIForBusiness from './AIForBusiness';
import FutureResearch from './FutureResearch';


import SortingAlgorithm from './SortingAlgorithm';
import Tree from './Tree'


import Graph from './Grap';
import { Import } from 'lucide-react';
// Cybersecurity pages
import WhatIsCybersecurity from './WhatIsCybersecurity';
import CyberIndustrialApplications from './CyberIndustrialApplications';
import CybersecurityRoadmap from './CybersecurityRoadmap';
import NetworkSecurity from './NetworkSecurity';
import ApplicationSecurity from './ApplicationSecurity';
import Cryptography from './Cryptography';
import EthicalHacking from './EthicalHacking';
import IncidentResponse from './IncidentResponse';
import CloudSecurity from './CloudSecurity';
import IAM from './IAM';
import SecurityTools from './SecurityTools';
import Compliance from './Compliance';
import SecurityArchitecture from './SecurityArchitecture';
import FutureCybersecurity from './FutureCybersecurity';

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
    // Cybersecurity custom pages
    case 'what-is-cybersecurity':
      if (domain === 'cybersecurity') return <WhatIsCybersecurity concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'industrial-applications':
      if (domain === 'cybersecurity') return <CyberIndustrialApplications concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'cybersecurity-roadmap':
      if (domain === 'cybersecurity') return <CybersecurityRoadmap concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'network-security':
      if (domain === 'cybersecurity') return <NetworkSecurity concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'application-security':
      if (domain === 'cybersecurity') return <ApplicationSecurity concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'cryptography':
      if (domain === 'cybersecurity') return <Cryptography concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'ethical-hacking':
      if (domain === 'cybersecurity') return <EthicalHacking concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'incident-response':
      if (domain === 'cybersecurity') return <IncidentResponse concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'cloud-security':
      if (domain === 'cybersecurity') return <CloudSecurity concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'identity-access':
      if (domain === 'cybersecurity') return <IAM concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'security-tools':
      if (domain === 'cybersecurity') return <SecurityTools concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'compliance':
      if (domain === 'cybersecurity') return <Compliance concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'security-architecture':
      if (domain === 'cybersecurity') return <SecurityArchitecture concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'future-cybersecurity':
      if (domain === 'cybersecurity') return <FutureCybersecurity concept={concept} domain={domain} domainData={domainData} />;
      break;
    case 'what-is-ai-ml':
      if (domain === 'aiml') return <WhatIsAIML />
      break;
case 'aimluseinindustry': 
if (domain === 'aiml') return <AimlUseInIndustry />;

  break;

    case 'ai-ml-roadmap':
      if (domain === 'aiml') return <AIMLRoadmap />;
      break;
    case 'math-foundations':
      if (domain === 'aiml') return <MathFoundations />;
      break;
    case 'core-ml-algorithms':
      if (domain === 'aiml') return <CoreMLAlgorithms />;
      break;
    case 'deep-learning':
      if (domain === 'aiml') return <DeepLearning />;
      break;
    case 'nlp':
      if (domain === 'aiml') return <NLP />;
      break;
    case 'computer-vision':
      if (domain === 'aiml') return <ComputerVision />;
      break;
    case 'reinforcement-learning':
      if (domain === 'aiml') return <ReinforcementLearning />;
      break;
    case 'mlops':
      if (domain === 'aiml') return <MLOps />;
      break;
    case 'ai-for-data-science':
      if (domain === 'aiml') return <AIForDataScience />;
      break;
    case 'responsible-ai':
      if (domain === 'aiml') return <ResponsibleAI />;
      break;
    case 'ai-for-business':
      if (domain === 'aiml') return <AIForBusiness />;
      break;
    case 'future-research':
      if (domain === 'aiml') return <FutureResearch />;
      break;

    // Web Development custom pages
    case 'foundations':
      if (domain === 'webdev') return <WebFoundations />;
      break;
    case 'frontend-development':
      if (domain === 'webdev') return <FrontendDev />;
      break;
    case 'backend-development':
      if (domain === 'webdev') return <BackendDev />;
      break;
    case 'databases':
      if (domain === 'webdev') return <DatabasesWeb />;
      break;
    case 'future-web':
      if (domain === 'webdev') return <FutureWeb />;
      break;
    case 'fullstack':
      if (domain === 'webdev') return <FullStack />;
      break;
    case 'performance':
      if (domain === 'webdev') return <WebPerformance />;
      break;
    case 'security':
      if (domain === 'webdev') return <WebSecurity />;
      break;
    case 'devops':
      if (domain === 'webdev') return <WebDevOps />;
      break;
    case 'pwa':
      if (domain === 'webdev') return <WebPWA />;
      break;
    case 'testing':
      if (domain === 'webdev') return <WebTesting />;
      break;
    case 'system-design':
      if (domain === 'webdev') return <WebSystemDesign />;
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
