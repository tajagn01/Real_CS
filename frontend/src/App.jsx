// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DomainPage from './pages/DomainPage';
import InterviewPage from './pages/InterviewPage';
import ConceptDetailPage from './pages/ConceptDetailPage';
import LearningRoadmap from './pages/LearningRoadmap';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:domain" element={<DomainPage />} />
              <Route path="/interview" element={<InterviewPage />} />
              <Route path="/learning-roadmap" element={<LearningRoadmap />} />
              <Route path="/:domain/:conceptId" element={<ConceptDetailPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;