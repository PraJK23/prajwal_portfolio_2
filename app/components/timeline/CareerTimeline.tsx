"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2019 – 2021",
    role: "Associate Software Engineer",
    company: "Finastra",
    description:
      "Built and integrated core banking and payment systems, gaining strong fundamentals in transactional systems and enterprise software.",
  },
  {
    year: "2021 – 2024",
    role: "Software Engineer (Aerospace Systems)",
    company: "Boeing",
    description:
      "Developed aerospace-grade backend services and geospatial systems for navigation platforms under strict safety and reliability standards.",
  },
  {
    year: "2024 – Present",
    role: "Senior Software Engineer / Development Specialist",
    company: "Capgemini (Client: Standard Chartered)",
    description:
      "Designing and scaling high-throughput distributed platforms for real-time and batch processing across global banking systems.",
  },
];

export default function CareerTimeline() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-3xl font-bold sm:text-4xl"
      >
        Career Timeline
      </motion.h2>

      <div className="relative border-l border-gray-800 pl-8">
        {timeline.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="mb-12"
          >
            <div className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full bg-white" />
            <span className="text-sm text-gray-500">{item.year}</span>
            <h3 className="mt-1 text-lg font-semibold">
              {item.role}
            </h3>
            <p className="text-sm text-gray-400">{item.company}</p>
            <p className="mt-2 text-sm text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
