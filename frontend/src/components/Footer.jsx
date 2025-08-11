// src/components/Footer.js

import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-lg">The Real CS</span>
          </div>
          <p className="text-gray-400">
            © 2025 The Real CS. Master every corner of computer science.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;