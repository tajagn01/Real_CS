// src/components/CodeBlock.js

import React from 'react';
import { Code } from 'lucide-react';

const CodeBlock = ({ code }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-inner font-mono text-sm overflow-x-auto">
      <div className="flex items-center text-gray-400 mb-4">
        <Code className="h-5 w-5 mr-2" />
        <span>Code Example</span>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;