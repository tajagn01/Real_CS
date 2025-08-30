// src/components/ConceptCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronRight } from 'lucide-react';

const ConceptCard = ({ concept, domain }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 h-full flex flex-col min-h-[260px]">
      <div className="p-6 flex flex-col h-full flex-1">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
            <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{concept.name}</h3>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 flex-grow">{concept.description}</p>
        <div className="mt-auto">
          <Link
            to={`/${domain}/${concept.id}`}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>Learn More</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConceptCard;