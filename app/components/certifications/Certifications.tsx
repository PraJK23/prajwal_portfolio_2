"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "NASA Space Apps Challenge",
    detail: "Global participant – AI-driven exoplanet exploration project",
  },
  {
    title: "Gen AI Innovation Challenge – Capgemini",
    detail: "Winner – Most Innovative Solution",
  },
  {
    title: "Aerospace & Defense Level 1",
    detail: "Capgemini Industry Certification",
  },
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    detail: "Microsoft Certification",
  },
  {
    title: "IBM RAG and Agentic AI",
    detail: "IBM Professional Certification",
  },
];

export default function Certifications() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-3xl font-bold sm:text-4xl"
      >
        Certifications & Recognition
      </motion.h2>

      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl border border-gray-800 bg-black/40 p-5"
          >
            <h3 className="text-base font-semibold">{cert.title}</h3>
            <p className="mt-1 text-sm text-gray-400">{cert.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
