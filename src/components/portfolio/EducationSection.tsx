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
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    degree: "DBIT",
    institution: "Strathmore University",
    period: "Graduated 2024",
    type: "Diploma",
    description: "Diploma in Business Information Technology",
    status: "Completed",
    icon: "solar:diploma-verified-bold",
    gradient: "from-green-500 to-emerald-600"
  }
];

export default function EducationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32"
    >
      <div className="relative z-10">
        <SectionHeader
          tagText="Academic Journey"
          tagIcon="solar:graduation-bold"
          heading="Education"
          description="My academic qualifications and educational background"
          showUnderline={true}
          centered={true}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8 px-4"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}>
                  <Icon icon={edu.icon} className="text-white w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === "Completed" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-3">{edu.description}</p>
                  
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Icon icon="solar:calendar-date-bold" className="w-5 h-5" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
} 