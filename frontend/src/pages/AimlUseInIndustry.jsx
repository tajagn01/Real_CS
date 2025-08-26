import React from "react";

const aimlData01 = {
  concept: {
    name: "AI and Machine Learning (AI/ML) in Industry",
    description:
      "AI and Machine Learning are the engines driving innovation and automation across a wide range of industries, from technology and healthcare to finance and entertainment.",
    definition:
      "Artificial Intelligence refers to the creation of computer systems that can perform tasks requiring human intelligence. Machine Learning is a subset of AI that allows systems to learn from data and improve their performance over time without explicit programming. These technologies enable machines to find patterns, make predictions, and automate complex processes.",
    useCase:
      "- Google (Search & Ads): Uses deep learning models for search ranking, natural language processing for Google Assistant, and predictive models for ad targeting.\n" +
      "- Netflix (Entertainment): Uses recommendation engines powered by collaborative filtering and deep learning to personalize user content suggestions.\n" +
      "- Tesla (Autonomous Vehicles): Uses computer vision and neural networks to process sensor data for self-driving and obstacle detection.\n" +
      "- Amazon (E-Commerce & Logistics): Uses ML for product recommendations, fraud detection, and optimizing delivery routes in its fulfillment centers.\n" +
      "- JP Morgan Chase (Finance): Uses AI for algorithmic trading, fraud detection, and risk assessment by analyzing market data and transaction patterns.\n" +
      "- Facebook / Meta (Social Media): Uses deep learning for facial recognition in photos, content moderation, and personalized feed ranking.\n" +
      "- Spotify (Music Streaming): Uses ML algorithms for generating personalized playlists like 'Discover Weekly' and recommending new artists.\n" +
      "- IBM Watson Health (Healthcare): Uses AI for analyzing medical images, assisting with diagnoses, and accelerating drug discovery.\n" +
      "- OpenAI / Microsoft (SaaS & Research): Uses large language models like GPT for creating chatbots, content generation, and code completion tools.\n" +
      "- Salesforce (CRM): Uses AI to predict sales outcomes, automate customer service responses, and provide personalized insights for marketing.\n" +
      "- Uber / Lyft (Ride-Sharing): Uses ML for dynamic pricing (surge pricing), optimizing driver-rider matching, and predicting demand.\n" +
      "- Adobe (Creative Software): Uses AI for features like 'Content-Aware Fill' and 'Sky Replacement' in Photoshop, as well as for smart-tagging in Lightroom.\n" +
      "- NASA / SpaceX (Aerospace): Uses ML for analyzing satellite imagery, predicting system failures, and optimizing mission trajectories.\n" +
      "- Samsung / Apple (Consumer Electronics): Uses AI for on-device features like voice assistants (Siri, Bixby), photo enhancements, and personalized device settings.\n" +
      "- Airbnb (Hospitality): Uses ML to predict booking prices, personalize search results for guests, and detect fraudulent listings.\n" +
      "- Palantir (Big Data): Uses ML and data fusion to help government agencies and corporations analyze vast datasets for security and intelligence.\n" +
      "- Domino's Pizza (Food & Beverage): Uses AI for predictive ordering systems and voice-activated assistants to streamline the customer experience.\n" +
      "- Siemens (Manufacturing): Uses ML for predictive maintenance on factory machinery, optimizing production lines, and quality control.\n" +
      "- LinkedIn (Professional Networking): Uses AI to recommend job candidates, suggest connections, and filter relevant content for user feeds.\n" +
      "- NVIDIA (Hardware): Uses AI to design new graphics processors and create realistic simulations for gaming and scientific research.\n" +
      "- Nestlé (Consumer Goods): Uses AI to analyze consumer preferences and market trends for new product development and personalized marketing campaigns.\n" +
      "- Stitch Fix (Fashion Retail): Uses ML to create personalized clothing recommendations for customers based on their style preferences.\n" +
      "- Zoom (Video Conferencing): Uses AI for features like background noise suppression, real-time transcription, and smart summaries of meetings.\n" +
      "- Waymo (Robotics): Uses AI and deep learning for its fleet of fully autonomous vehicles and robotaxis."
  },
  domain: "Artificial Intelligence & Machine Learning",
  domainData: {
    importance:
      "Essential for building intelligent, data-driven applications that can learn, adapt, and automate complex tasks at scale.",
    relatedTechnologies: [
      "Big Data Analytics",
      "Cloud Computing",
      "Internet of Things (IoT)",
      "Robotics",
      "Natural Language Processing (NLP)",
      "Computer Vision",
      "Predictive Analytics"
    ],
    growthTrend:
      "The field of AI/ML is experiencing exponential growth, with demand for skilled professionals continuously rising across all sectors."
  }
};

const industryExamples = aimlData01.concept.useCase.split("\n").filter(Boolean);

const UsesInIndustry01 = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Definition Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            What Does AI/ML Enable in Industry?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {aimlData01.concept.definition}
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
            Why AI/ML Matters for Modern Tech
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center text-lg">
            {aimlData01.domainData.importance}
          </p>
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-12">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-3 text-center text-xl">
                Related Technologies
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                {aimlData01.domainData.relatedTechnologies.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-700 dark:text-green-400 mb-3 text-center text-xl">
                Growth Trend
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-xs">
                {aimlData01.domainData.growthTrend}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsesInIndustry01;