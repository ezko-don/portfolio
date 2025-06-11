"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function OverviewSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="overview"
      className="mb-16 md:mb-24 lg:mb-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-10 md:top-20 right-4 md:right-16 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-pink-400/20 md:from-pink-400/30 to-purple-400/20 md:to-purple-400/30 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "3s" }}
          className="absolute bottom-8 md:bottom-16 left-4 md:left-16 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-purple-400/15 md:from-purple-400/20 to-pink-400/15 md:to-pink-400/20 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "6s" }}
          className="hidden md:block absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/25 to-purple-400/25 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10">
        <SectionHeader
          tagText="Get To Know Me"
          tagIcon="solar:user-heart-bold"
          heading="About Me"
          description="Passionate technology professional focused on innovative solutions and system development"
          showUnderline={true}
          centered={true}
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start px-4">
          {/* Main Profile Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8"
          >
            <div className="space-y-6 md:space-y-8">
              {/* Introduction Card */}
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-3 md:w-4 h-3 md:h-4 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 md:top-6 right-10 md:right-14 w-2 md:w-3 h-2 md:h-3 bg-purple-400 rounded-full animate-pulse delay-300"></div>
                <div className="hidden md:block absolute top-6 right-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white flex items-center gap-2 md:gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl">👋</span>
                      Hello, I&apos;m Esther Kadenge
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
                      A passionate <span className="font-bold text-pink-600 dark:text-pink-400">Technology Professional</span> at
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        &nbsp;Strathmore University</span>, working as a
                      <span className="font-bold text-pink-600 dark:text-pink-400">&nbsp;Knowledge Manager and System Developer</span>.
                    </p>
                  </div>

                  {/* About Content */}
                  <div className="space-y-3 md:space-y-4">
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Working as a Knowledge Manager and System Developer at Strathmore University, I combine technical expertise with business acumen to deliver innovative solutions.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        As the founder and leader of TechQueens254, I&apos;m passionate about empowering women in technology. Our community provides a platform for learning, networking, and growth for female tech enthusiasts in Kenya.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        My focus areas include system development, knowledge management, and cloud infrastructure, with a strong emphasis on creating practical solutions that bridge technology and business needs.
                      </p>
                    </div>
                  </div>

                  {/* Skills Highlight */}
                  <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                      <Icon icon="solar:lightning-bold" className="text-pink-500 w-4 md:w-5 h-4 md:h-5" />
                      Areas of Interest
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {["Web Development", "Software Engineering", "UI/UX Design", "Database Management", "Cloud Computing", "Mobile Development", "Data Analysis", "Project Management"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-950/30 dark:to-purple-950/30 text-gray-800 dark:text-gray-200 rounded-lg md:rounded-xl border border-pink-200/50 dark:border-pink-800/30 hover:shadow-lg transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Roles Grid */}
              <div className="grid md:grid-cols-1 gap-4 md:gap-6">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-50/80 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20 backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/30 shadow-xl flex flex-col"
                >
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="p-2 md:p-3 bg-purple-500 rounded-lg md:rounded-xl shadow-lg">
                      <Icon icon="solar:laptop-bold" className="text-white w-5 md:w-6 h-5 md:h-6" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">Knowledge Manager & System Developer</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium text-sm md:text-base">Strathmore University</p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">Current</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed mb-2 md:mb-3 flex-1">
                    Leading knowledge management initiatives and developing innovative systems while focusing on cloud infrastructure and database optimization.
                  </p>
                  <div className="flex items-center gap-2 text-xs md:text-sm mt-auto">
                    <Icon icon="solar:shield-check-bold" className="text-purple-500 w-3 md:w-4 h-3 md:h-4" width={16} height={16} />
                    <span className="font-semibold text-purple-600 dark:text-purple-400">Tech Professional</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Languages Section - Right Side */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-xl">
              <h4 className="text-2xl font-semibold mb-6">Languages</h4>
              <div className="space-y-6">
                {[
                  { name: "English", level: "Native", icon: "flag:gb-4x3" },
                  { name: "Kiswahili", level: "Native", icon: "flag:ke-4x3" },
                  { name: "French", level: "Professional", icon: "flag:fr-4x3" },
                  { name: "German", level: "Professional", icon: "flag:de-4x3" }
                ].map((language) => (
                  <div key={language.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon icon={language.icon} className="w-6 h-6" />
                      <span className="text-lg text-gray-900 dark:text-gray-100">{language.name}</span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-6 p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-xl">
              <h4 className="flex items-center gap-2 text-2xl font-semibold mb-6">
                <Icon icon="solar:chat-round-dots-bold" className="text-pink-500" />
                Let&apos;s Connect
              </h4>
              <div className="space-y-4">
                <a href="mailto:esther.kadenge@strathmore.edu" className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-pink-500">
                  <Icon icon="solar:letter-bold" className="w-5 h-5" />
                  <span>esther.kadenge@strathmore.edu</span>
                </a>
                <a href="tel:+254708314494" className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-pink-500">
                  <Icon icon="solar:phone-bold" className="w-5 h-5" />
                  <span>+254 708 314 494</span>
                </a>
                <div className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  <Icon icon="solar:map-point-bold" className="w-5 h-5" />
                  <span>Strathmore University, Nairobi</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 