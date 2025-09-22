"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experience = [
  {
    role: "Knowledge Manager & System Developer",
    company: "Strathmore University",
    period: "2024 - Present",
    type: "Full-Time",
    companyIcon: "mdi:school",
    companyColor: "from-pink-500 to-purple-600",
    description: "Leading knowledge management initiatives and developing software solutions while managing cloud infrastructure at Strathmore University. Responsible for both technical development and knowledge management strategies.",
    achievements: [
      "Architected and deployed Equipment Management & Tracking System serving 15+ staff",
      "Achieved 40% reduction in manual tracking errors through system implementation",
      "Optimized database performance by 25% through query optimization",
      "Managing and optimizing institutional cloud storage systems",
      "Leading system integration and optimization projects",
      "Implementing comprehensive knowledge management strategies"
    ],
    technologies: ["PHP", "Laravel", "Cloud Infrastructure", "System Development", "Database Optimization", "Knowledge Management"]
  },
  {
    role: "Volunteer ICT Officer",
    company: "NEP Kenya",
    period: "2023 - Present",
    type: "Volunteer",
    companyIcon: "mdi:heart-outline",
    companyColor: "from-green-500 to-blue-600",
    description: "Volunteering as an ICT Officer at NEP Kenya, providing technical support and digital solutions to enhance organizational operations and community outreach programs.",
    achievements: [
      "Providing technical support for organizational IT infrastructure",
      "Developing digital solutions to improve operational efficiency",
      "Supporting community outreach through technology initiatives",
      "Maintaining and troubleshooting computer systems and networks",
      "Training staff on digital tools and best practices",
      "Contributing to technology strategy and implementation"
    ],
    technologies: ["IT Support", "System Administration", "Digital Solutions", "Community Outreach", "Training", "Network Management"]
  },
  {
    role: "Founder & Community Leader",
    company: "TechQueens254",
    period: "2023 - Present",
    type: "Community Leadership",
    companyIcon: "mdi:crown",
    companyColor: "from-purple-500 to-pink-600",
    description: "Founded and leading a vibrant community of women in technology, fostering growth, learning, and networking opportunities for female tech enthusiasts in Kenya.",
    achievements: [
      "Building and managing an active community of women in technology",
      "Organizing workshops, mentorship sessions, and networking events",
      "Creating opportunities for skill development and career growth",
      "Fostering an inclusive environment for women in tech",
      "Facilitating knowledge sharing and peer learning initiatives"
    ],
    technologies: ["Community Building", "Event Management", "Mentorship", "Technical Leadership", "Public Speaking"]
  },
  {
    role: "BBIT Student",
    company: "Strathmore University",
    period: "Current",
    type: "Full-time",
    companyColor: "from-purple-500 to-pink-600",
    companyIcon: "mdi:book-education",
    description: "Pursuing a Bachelor of Business Information Technology (BBIT) degree, combining business acumen with technical expertise in information systems and software development.",
    achievements: [
      "Maintaining strong academic performance",
      "Applying business and IT concepts in practical projects",
      "Developing enterprise software solutions",
      "Participating in business technology initiatives"
    ],
    technologies: ["Business Analysis", "Information Systems", "Software Development", "Enterprise Solutions"]
  },
  {
    role: "Diploma Graduate",
    company: "Strathmore University",
    period: "Completed",
    type: "Full-time",
    companyColor: "from-blue-500 to-purple-600",
    companyIcon: "mdi:certificate",
    description: "Successfully completed a diploma program, establishing a strong foundation in business information technology and practical technical skills.",
    achievements: [
      "Graduated with strong academic standing",
      "Completed practical technical projects",
      "Developed core IT competencies",
      "Built foundation for further studies"
    ],
    technologies: ["Information Technology", "Business Studies", "Technical Skills", "Project Management"]
  }
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          tagText="Professional Journey"
          tagIcon="solar:case-bold"
          heading="Experience"
          showUnderline={false}
          description="My professional experience and community leadership initiatives"
          centered={true}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6 md:space-y-12 px-4 md:px-6"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-8 lg:gap-12">
                {/* Company Icon & Info */}
                <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br ${exp.companyColor} flex items-center justify-center shadow-xl md:shadow-2xl mb-3 md:mb-4 relative overflow-hidden group-hover:shadow-2xl md:group-hover:shadow-3xl transition-all duration-500`}
                  >
                    <Icon
                      icon={exp.companyIcon!}
                      className="text-white w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 relative z-10"
                      width={40}
                      height={40}
                    />
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.companyColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 md:space-y-6 min-w-0">
                  {/* Header */}
                  <div className="space-y-1 md:space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 md:gap-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium"
                    >
                      <Icon icon="solar:calendar-outline" width={14} height={14} className="md:w-4 md:h-4" />
                      <span>{exp.period}</span>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
                    >
                      {exp.role}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-pink-600 dark:text-pink-400 font-semibold"
                    >
                      {exp.company}
                    </motion.p>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
                  >
                    {exp.description}
                  </motion.p>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3 md:space-y-4"
                  >
                    <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <Icon icon="solar:cup-star-bold" className="text-pink-500" width={22} height={22} />
                      Key Activities
                    </h4>

                    <div className="space-y-2 md:space-y-3">
                      {exp.achievements?.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + achIndex * 0.1 }}
                          className="flex items-start gap-3 md:gap-4 group/achievement hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300"
                        >
                          <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center mt-0.5 shadow-md md:shadow-lg group-hover/achievement:scale-110 transition-transform duration-300">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technologies */}
                  {exp.technologies && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                      className="flex flex-wrap gap-2 md:gap-3"
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm md:text-base bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 border border-pink-100/50 dark:border-pink-800/50 rounded-full text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                  </motion.div>
                  )}
                </div>
              </div>

              {/* Divider */}
              {index < experience.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-6 md:mt-12 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
