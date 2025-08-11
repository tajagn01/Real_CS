// src/components/QuestionAnswer.js

import React, { useState } from 'react';
import { ChevronDown, Lightbulb, Check, Eye, EyeOff } from 'lucide-react';

const QuestionAnswer = ({ questionData, index }) => {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-4 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">{questionData.question}</h3>
        {questionData.difficulty && (
          <span className={`ml-4 text-xs font-bold px-3 py-1 rounded-full ${
            questionData.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' :
            questionData.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' :
            'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
          }`}>
            {questionData.difficulty}
          </span>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <Lightbulb className="h-4 w-4" />
            <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
          </button>
        </div>
        {showHint && (
          <p className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg text-blue-800 dark:text-blue-200 italic">
            {questionData.hint}
          </p>
        )}

        <div className="flex items-center mt-4">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="flex items-center space-x-2 text-green-600 dark:text-green-400 hover:underline"
          >
            {showAnswer ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            <span>{showAnswer ? 'Hide Answer' : 'Show Answer'}</span>
          </button>
        </div>
        {showAnswer && (
          <p className="bg-green-50 dark:bg-green-950 p-4 rounded-lg text-green-800 dark:text-green-200">
            {questionData.answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default QuestionAnswer;