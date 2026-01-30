"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Boeing",
    role: "Software Engineer – Aerospace Systems",
    highlight:
      "Aerospace-grade backend and geospatial systems for navigation platforms under strict safety and reliability constraints.",
  },
  {
    company: "Capgemini / Standard Chartered",
    role: "Senior Software Engineer – Platform Systems",
    highlight:
      "High-throughput distributed systems processing real-time and batch workloads across global banking infrastructure.",
  },
  {
    company: "Finastra",
    role: "Associate Software Engineer",
    highlight:
      "Core banking and payment systems development with strong grounding in transactional platforms.",
  },
];

export default function ExperienceSnapshot() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-3xl font-bold sm:text-4xl"
      >
        Experience Snapshot
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-3">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="rounded-xl border border-gray-800 bg-black/40 p-6"
          >
            <h3 className="text-lg font-semibold">{exp.company}</h3>
            <p className="mt-1 text-sm text-gray-400">{exp.role}</p>
            <p className="mt-3 text-sm text-gray-300">{exp.highlight}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
