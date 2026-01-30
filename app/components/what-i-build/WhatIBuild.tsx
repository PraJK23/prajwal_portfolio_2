"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Distributed Backend Platforms",
    description:
      "Designing and scaling high-throughput, low-latency backend systems for regulated and mission-critical environments.",
  },
  {
    title: "Aerospace & Geospatial Systems",
    description:
      "Building aerospace-grade software for navigation, geospatial data processing, and visualization under strict reliability constraints.",
  },
  {
    title: "Applied AI & Intelligent Tooling",
    description:
      "Applying machine learning and GenAI to solve real-world engineering problems, from semantic search to scientific exploration.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-3xl font-bold sm:text-4xl"
      >
        What I Build
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="rounded-xl border border-gray-800 bg-black/40 p-6"
          >
            <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
