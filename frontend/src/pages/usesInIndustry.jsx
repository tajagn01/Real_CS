import React from "react";

const dsaData = {
  concept: {
    name: "Data Structures and Algorithms (DSA) in Industry",
    description:
      "Data Structures and Algorithms are the backbone of real-world software systems. Their applications power everything from search engines to navigation apps.",
    definition:
      "A data structure is a way of organizing and storing data for efficient access and modification. An algorithm is a step-by-step procedure for solving a problem or performing a task. Together, DSA enables developers to solve computational problems effectively.",
    useCase:
      "- Google (Search Engines): Uses algorithms like PageRank, graph traversal, and indexing to deliver fast and relevant results.\n" +
      "- Facebook / Instagram (Social Media): Use data structures like hash maps, graphs, and heaps for friend suggestions, trending topics, and feed ranking.\n" +
      "- Amazon (E-Commerce): Uses sorting algorithms, search trees, and recommendation algorithms for product discovery and personalized suggestions.\n" +
      "- Uber / Google Maps (Navigation): Use graph algorithms like Dijkstra's or A* for route optimization.\n" +
      "- MySQL / PostgreSQL (Databases): Use B-trees, hash tables, and indexing algorithms for quick data retrieval.\n" +
      "- Cloudflare (Cybersecurity): Uses encryption algorithms, bloom filters, and hashing to secure communications and detect anomalies.\n" +
      "- GCC / LLVM (Compilers): Use parsing algorithms, abstract syntax trees, and symbol tables for code translation and execution.\n" +
      "- Epic Games (Gaming): Uses pathfinding algorithms, quad-trees, octrees, and physics simulations for realistic gameplay.\n" +
      "- Bloomberg / Goldman Sachs (Finance): Use priority queues, time series analysis, and dynamic programming for risk assessment and portfolio optimization.\n" +
      "- Philips / Siemens (Healthcare): Use scheduling algorithms, graph models for patient data, and ML pipelines for diagnosis assistance.\n" +
      "- OpenAI / DeepMind (Artificial Intelligence): Use search algorithms, decision trees, and optimization techniques in planning and reasoning.\n" +
      "- Boston Dynamics (Robotics): Uses real-time pathfinding, sensor fusion algorithms, and kinematic calculations for autonomous movement.\n" +
      "- Microsoft Windows / Linux (Operating Systems): Use scheduling algorithms, paging, and process synchronization for efficient resource management.\n" +
      "- AWS / Azure (Cloud Computing): Use load-balancing algorithms, distributed hash tables, and data replication strategies.\n" +
      "- Cisco / AT&T (Telecom Networks): Use routing algorithms, error detection codes, and network flow optimization for reliable communication.\n" +
      "- Netflix (Streaming Platforms): Uses caching algorithms, recommendation engines, and load balancing to deliver smooth video playback.\n" +
      "- Tesla (Autonomous Vehicles): Uses path planning algorithms, sensor data processing, and neural networks for self-driving features.\n" +
      "- SpaceX / NASA (Aerospace): Use trajectory optimization algorithms, simulation models, and scheduling systems for launches.\n" +
      "- Spotify (Music Recommendation): Uses collaborative filtering, hash maps, and search algorithms for playlist suggestions.\n" +
      "- LinkedIn (Professional Networking): Uses graph algorithms for connection recommendations and job matching.\n" +
      "- PayPal / Stripe (Payments): Uses encryption, fraud detection algorithms, and hash tables for secure transactions.\n" +
      "- Adobe Photoshop (Image Processing): Uses graph cut algorithms, convolution filters, and search trees for fast rendering.\n" +
      "- Salesforce (CRM Systems): Uses indexing algorithms, caching, and search optimization for large-scale data access.\n" +
      "- Zoom / Microsoft Teams (Video Conferencing): Uses compression algorithms, error correction, and network optimization for low-latency calls."
  },
  domain: "Computer Science & Software Engineering",
  domainData: {
    importance:
      "Critical for optimizing performance, reducing resource usage, and ensuring scalability of software systems.",
    relatedTechnologies: [
      "Machine Learning",
      "Big Data Processing",
      "Cloud Computing",
      "Blockchain",
      "Internet of Things (IoT)",
      "Cybersecurity",
      "Robotics",
      "Computer Graphics"
    ],
    growthTrend:
      "DSA skills remain in high demand due to increasing complexity of applications and need for efficient computation."
  }
};

const industryExamples = dsaData.concept.useCase.split("\n").filter(Boolean);

const UsesInIndustry = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Definition Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            What Does DSA Enable in Industry?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {dsaData.concept.definition}
          </p>
        </div>
      </div>

      {/* Industry Use Cases */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Industry Applications & Company Examples
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryExamples.map((example, idx) => {
            const gradients = [
              "from-green-600 to-blue-500",
              "from-blue-600 to-cyan-500",
              "from-purple-600 to-pink-500",
              "from-orange-600 to-red-500",
              "from-teal-600 to-green-500",
              "from-yellow-500 to-orange-500",
              "from-red-500 to-pink-500",
              "from-indigo-600 to-purple-500"
            ];
            const [company, description] = example
              .replace(/^- /, "")
              .split(":");
            return (
              <div
                key={idx}
                className={`bg-gradient-to-r ${gradients[idx % gradients.length]} rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <span className="block font-bold text-white text-xl mb-2">
                  {company.trim()}
                </span>
                <p className="text-white text-md">{description.trim()}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Domain Importance & Related Tech */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Why DSA Matters for Modern Tech
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center text-lg">
            {dsaData.domainData.importance}
          </p>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-12">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-3 text-center text-xl">
                Related Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {dsaData.domainData.relatedTechnologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 text-center text-xl">
                Growth Trend
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-xs">
                {dsaData.domainData.growthTrend}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsesInIndustry;
