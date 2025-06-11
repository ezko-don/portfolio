"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import TypewriterRole from "./TypewriterRole";

export default function HeroSection() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 dark:bg-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl" />

        {/* Geometric Accents */}
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-pink-500/30 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-1 h-1 bg-purple-500/40 rounded-full"
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-pink-500/35 rounded-full"
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center -mb-8"
      >

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent z-10">
            Esther Zawadi
          </span>
        </motion.h1>

        {/* Typewriter Role Component */}
        <TypewriterRole />

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          A passionate <span className="text-pink-500">student</span> at <span className="text-purple-500">Strathmore University</span>,
          currently <span className="text-pink-500">interning</span> at the institution.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {[
            { href: "https://github.com/ezko-don", icon: "simple-icons:github", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
            { href: "https://linkedin.com/in/esther-kadenge", icon: "skill-icons:linkedin", label: "LinkedIn", color: "hover:text-blue-600" },
            { href: "mailto:esther.kadenge@strathmore.edu", icon: "material-icon-theme:email", label: "Email", color: "hover:text-pink-600" }
          ].map((link) => (
            <motion.div key={link.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link.href}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-sm transition-all duration-300 border border-pink-200/50 dark:border-purple-600/50 shadow-lg hover:shadow-xl ${link.color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={link.icon} width={18} height={18} />
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* Separate CV Download Button with Enhanced Styling */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/Esther_Kadenge_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:opacity-90"
              download
              rel="noopener noreferrer"
            >
              <Icon icon="solar:document-download-bold" width={18} height={18} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50/80 dark:bg-pink-900/20 border border-pink-200/50 dark:border-pink-800/50 rounded-full backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-pink-500 rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Link href="#contact">
            <span className="text-pink-700 dark:text-pink-300 text-sm font-medium">
              Knowledge Manager & System Developer at Strathmore University
            </span>
          </Link>
        </motion.div>
      </motion.section>

      {/* Scroll for more indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="hidden md:flex absolute bottom-20 left-0 right-0 justify-center pb-8 z-10"
      >
        <motion.button
          onClick={() => {
            const overviewSection = document.getElementById('overview');
            if (overviewSection) {
              overviewSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-pink-700 dark:hover:text-pink-200 transition-colors duration-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm font-medium tracking-wide">Scroll for more</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon
              icon="mdi:chevron-down"
              width={24}
              height={24}
              className="text-pink-400 dark:text-pink-500"
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
} 