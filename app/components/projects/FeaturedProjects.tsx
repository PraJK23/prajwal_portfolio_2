"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "NASA Space Apps – ExoNovaPioneers",
    subtitle: "AI-driven exoplanet exploration & visualization",
    description:
      "Designed and built an AI-powered platform to analyze exoplanet habitability using machine learning models, combined with interactive scientific visualization for exploration and education.",
    tags: ["AI/ML", "Scientific Computing", "Visualization"],
  },
  {
    title: "Airbus – Glide Guild",
    subtitle: "Enterprise GenAI for aircraft maintenance intelligence",
    description:
      "Led the design of a GenAI-powered semantic search system for aircraft maintenance manuals and schematics, enabling faster troubleshooting and knowledge discovery.",
    tags: ["GenAI", "Vector Search", "Enterprise AI"],
  },
  {
    title: "High-Throughput Platform – Standard Chartered",
    subtitle: "Distributed systems at scale",
    description:
      "Built and optimized cloud-native Java microservices handling thousands of transactions per second across multi-country deployments, with strict latency and reliability requirements.",
    tags: ["Distributed Systems", "Java", "Cloud Platforms"],
  },
  {
    title: "Boeing – Navigation & Geospatial Systems",
    subtitle: "Aerospace-grade backend & visualization",
    description:
      "Developed aerospace-grade backend services and geospatial data pipelines supporting navigation and mapping systems under stringent safety and quality standards.",
    tags: ["Aerospace", "Geospatial", "Safety-Critical Systems"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-3xl font-bold sm:text-4xl"
      >
        Featured Projects
      </motion.h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-xl border border-gray-800 bg-black/40 p-6"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-1 text-sm text-gray-400">{project.subtitle}</p>

            <p className="mt-4 text-sm text-gray-300">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
