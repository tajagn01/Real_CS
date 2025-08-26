import React from "react";

const rl = {
  title: "Reinforcement Learning (RL)",
  summary:
    "Learning by interaction via rewards and penalties. Agents optimize behavior over time under uncertainty.",
  pillars: [
    {
      name: "Fundamentals",
      items: [
        "Markov Decision Processes (MDP)",
        "Policies, value functions, Bellman equations",
        "Exploration vs exploitation",
        "Discounting & horizon"
      ],
    },
    {
      name: "Methods",
      items: [
        "Q-learning, SARSA",
        "Policy gradients, REINFORCE",
        "Actor-Critic, PPO, A3C/A2C",
        "Model-based RL & planning"
      ],
    },
    {
      name: "Practice",
      items: [
        "Reward shaping & curriculum",
        "Stability & variance reduction",
        "Sim2Real & domain randomization",
        "Safety constraints"
      ],
    },
  ],
  envs: ["OpenAI Gymnasium", "DM Control", "PettingZoo (multi-agent)", "ROS/Gazebo"],
};

const Card = ({ title, items }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  </div>
);

export default function ReinforcementLearning() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {rl.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{rl.summary}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {rl.pillars.map((p, i) => (
          <Card key={i} title={p.name} items={p.items} />
        ))}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-3">Common Environments</h3>
          <div className="flex flex-wrap gap-2">
            {rl.envs.map((e, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm">
                {e}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

