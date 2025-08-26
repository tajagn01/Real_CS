import React from "react";

const cv = {
  title: "Computer Vision",
  lead: "Understanding and generating visual content with ML/DL.",
  sections: [
    {
      name: "Core Topics",
      items: [
        "Image classification & localization",
        "Object detection & segmentation",
        "Pose estimation & tracking",
        "3D vision & NeRFs"
      ],
    },
    {
      name: "Generative Vision",
      items: [
        "GANs & VAEs",
        "Diffusion models (image/video)",
        "Image-to-image & text-to-image",
        "Safety, watermarking, IP considerations"
      ],
    },
    {
      name: "Applications",
      items: [
        "Autonomous driving & robotics",
        "Medical imaging & diagnostics",
        "Industrial inspection",
        "AR/VR & creative tools"
      ],
    },
  ],
  stack: ["OpenCV", "PyTorch/TensorFlow", "Detectron2", "MMDetection", "Segment Anything"],
};

const Panel = ({ title, items }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  </div>
);

export default function ComputerVision() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {cv.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{cv.lead}</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16 grid gap-6 md:grid-cols-2">
        {cv.sections.map((s, i) => (
          <Panel key={i} title={s.name} items={s.items} />
        ))}
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold mb-3">Ecosystem</h3>
          <div className="flex flex-wrap gap-2">
            {cv.stack.map((tool, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

