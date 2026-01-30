"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-3xl font-bold sm:text-4xl"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mb-10 max-w-xl text-gray-400"
      >
        Interested in building high-impact systems across platforms, aerospace,
        and AI. Open to senior engineering opportunities and technical discussions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <a
          href="/Prajwal_K_CV.pdf"
          target="_blank"
          className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/prajk23"
          target="_blank"
          className="rounded-md border border-gray-700 px-6 py-3 text-sm font-semibold hover:border-gray-500 transition"
        >
          GitHub
        </a>

        <a
          href="mailto:prajwalindian23@gmail.com"
          className="rounded-md border border-gray-700 px-6 py-3 text-sm font-semibold hover:border-gray-500 transition"
        >
          Email
        </a>
      </motion.div>
    </section>
  );
}
