"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-4xl font-bold tracking-tight sm:text-6xl"
      >
        Prajwal K
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="mt-4 max-w-2xl text-lg text-gray-400 sm:text-xl"
      >
        Senior Software Engineer · Platform & Distributed Systems · Aerospace &
        AI Applications
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        className="mt-8 flex gap-4"
      >
        <div className="mt-8 flex gap-4">
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
</div>
      </motion.div>
    </section>
  );
}
