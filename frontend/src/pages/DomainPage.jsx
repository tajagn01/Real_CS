import React from 'react';
import { useParams } from 'react-router-dom';
import ConceptCard from '../components/ConceptCard';
import { dsaData, aimlData, webdevData, cybersecurityData } from '../api/mockData';

const dataMapping = {
  dsa: dsaData,
  aiml: aimlData,
  webdev: webdevData,
  cybersecurity: cybersecurityData,
};

const DomainPage = () => {
  const { domain } = useParams();
  const domainData = dataMapping[domain];

  if (!domainData) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Domain not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{domainData.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A collection of core concepts to master this field.
        </p>
      </header>
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {domainData.concepts.map(concept => (
            <ConceptCard key={concept.id} concept={concept} domain={domain} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DomainPage;