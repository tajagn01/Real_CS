// src/pages/HomePage.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Code, Brain, Shield, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Data Structures & Algorithms",
      description: "Master the foundation of computer science with comprehensive DSA concepts",
      icon: <Code className="h-12 w-12 text-blue-600 dark:text-blue-400" />,
      path: "/dsa",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI & Machine Learning",
      description: "Explore the world of artificial intelligence and machine learning algorithms",
      icon: <Brain className="h-12 w-12 text-purple-600 dark:text-purple-400" />,
      path: "/aiml",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Web Development",
      description: "Build modern, scalable web applications with cutting-edge technologies",
      icon: <BookOpen className="h-12 w-12 text-green-600 dark:text-green-400" />,
      path: "/webdev",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Cybersecurity",
      description: "Learn to protect systems and data from digital threats and vulnerabilities",
      icon: <Shield className="h-12 w-12 text-red-600 dark:text-red-400" />,
      path: "/cybersecurity",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-800 dark:via-purple-800 dark:to-cyan-800 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 animate-fade-in">
            Master Every Corner of
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Computer Science
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Learn deeply. Code efficiently. Crack interviews.
          </p>
          <button
            onClick={() => navigate('/dsa')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Start Learning Today
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Dive deep into the core domains of computer science with our comprehensive curriculum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.gradient}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white ml-4">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  <button
                    onClick={() => navigate(feature.path)}
                    className={`w-full bg-gradient-to-r ${feature.gradient} text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2`}
                  >
                    <span>Explore Now</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your CS Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of learners mastering computer science concepts with real-world applications
          </p>
          <button
            onClick={() => navigate('/interview')}
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Practice Interview Questions
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
