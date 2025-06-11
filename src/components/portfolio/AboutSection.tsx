"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hello, World! I am Esther Kadenge — a passionate Knowledge Manager and System Developer at Strathmore University,
          dedicated to bridging the gap between technology and knowledge management while creating innovative solutions.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          In my current role, I lead knowledge management initiatives and develop software solutions that enhance operational efficiency.
          I specialize in system development, cloud infrastructure management, and implementing comprehensive knowledge management strategies.
          My recent achievement includes architecting an Equipment Management & Tracking System that reduced manual tracking errors by 40%.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Beyond my professional work, I am the founder of TechQueens254, a community dedicated to empowering women in technology.
          Through this initiative, I organize workshops, mentorship programs, and networking events to create opportunities for
          female tech enthusiasts in Kenya. I am passionate about fostering an inclusive tech environment and facilitating
          knowledge sharing among peers.
        </p>
      </div>
    </motion.section>
  );
} 