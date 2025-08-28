import React from "react";

const cyberData = {
  understanding:
    "Cybersecurity is the discipline of protecting computers, networks, applications, and data from unauthorized access, disruption, or destruction. It blends technology, processes, and people to defend digital systems against evolving threats.",
  why:
    [
      "Protect confidentiality, integrity, and availability (the CIA triad) of information.",
      "Reduce financial risk from ransomware, fraud, and business email compromise.",
      "Safeguard personal privacy and sensitive data to maintain user trust.",
      "Meet regulations and compliance requirements like GDPR, HIPAA, and PCI DSS.",
      "Defend critical infrastructure and cloud workloads as attacks grow in scale and sophistication.",
    ],
  basics:
    [
      "Network Security: Firewalls, IDS/IPS, VPNs, and secure protocols (TLS).",
      "Application Security: Secure SDLC, OWASP Top 10, code reviews, and RASP.",
      "Cryptography: Encryption, hashing, key exchange, and digital signatures.",
      "Identity & Access Management (IAM): SSO, MFA, RBAC/ABAC, Zero Trust.",
      "Incident Response & Forensics: Detect, contain, eradicate, recover, and investigate.",
      "Cloud Security: Shared responsibility, IAM, encryption, posture management.",
      "Governance, Risk & Compliance (GRC): Policies, audits, and risk assessments.",
    ],
  motivation:
    "Security is everyone's responsibility. With a strong security mindset, you protect users, enable business, and build resilient systems that stand up to real-world threats.",
};

const WhatIsCybersecurity = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            What Is Cybersecurity?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            {cyberData.understanding}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Why Cybersecurity Matters
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cyberData.why.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xs font-bold text-white">{idx + 1}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Core Knowledge Areas
        </h2>
        <div className="grid gap-6">
          {cyberData.basics.map((point, idx) => {
            const gradients = [
              "from-blue-600 to-cyan-500",
              "from-purple-600 to-pink-500",
              "from-green-600 to-teal-500",
              "from-orange-600 to-red-500",
              "from-indigo-600 to-purple-600",
              "from-rose-600 to-red-500",
              "from-emerald-600 to-teal-600",
            ];
            return (
              <div
                key={idx}
                className={`bg-gradient-to-r ${gradients[idx % gradients.length]} rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <p className="text-white font-medium text-lg">{point}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-8 md:p-10 text-center">
          <blockquote className="text-lg md:text-xl italic text-gray-200 leading-relaxed">
            "{cyberData.motivation}"
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default WhatIsCybersecurity;

