"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["Java", "Python"],
  },
  {
    category: "Backend & Platform Engineering",
    items: [
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "FastAPI",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Google Cloud Platform",
      "Azure DevOps",
      "Docker",
      "Kubernetes (OpenShift)",
    ],
  },
  {
    category: "Data & AI Systems",
    items: [
      "PostgreSQL",
      "Oracle",
      "Elasticsearch",
      "Scikit-learn",
      "XGBoost",
    ],
  },
  {
    category: "Frontend & Visualization",
    items: ["React", "Angular", "Three.js"],
  },
  {
    category: "Geospatial Systems",
    items: [
      "GeoPackage",
      "OpenStreetMap",
      "OpenLayers",
    ],
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-3xl font-bold sm:text-4xl"
      >
        Technical Skills
      </motion.h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-xl border border-gray-800 bg-black/40 p-6"
          >
            <h3 className="mb-4 text-lg font-semibold">
              {group.category}
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {group.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
