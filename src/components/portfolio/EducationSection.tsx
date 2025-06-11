"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const education = [
  {
    degree: "BBIT (Evening Exempt)",
    institution: "Strathmore University",
    period: "2024 - Present",
    type: "Bachelor's Degree",
    description: "Bachelor of Business Information Technology (Evening Exempt Program)",
    status: "In Progress",
    icon: "solar:graduation-bold",
    gradient: "from-pink-500 to-purple-600"
  },
  {
    degree: "DBIT",
    institution: "Strathmore University",
    period: "Graduated 2024",
    type: "Diploma",
    description: "Diploma in Business Information Technology",
    status: "Completed",
    icon: "solar:diploma-verified-bold",
    gradient: "from-pink-500 to-purple-600"
  }
];

export default function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32"
    >
      <SectionHeader
        tagText="Education"
        tagIcon="solar:graduation-bold"
        heading="Academic Background"
        description="My educational journey in technology and business"
        centered={true}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-6 md:space-y-8"
      >
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-6 md:p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Icon */}
              <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                <Icon icon={item.icon} className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                <div className="text-gray-600 dark:text-gray-400 mb-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon icon="solar:building-bold" className="w-4 h-4" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <Icon icon="solar:calendar-bold" className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
} 