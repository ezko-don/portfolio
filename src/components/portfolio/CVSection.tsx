"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

const skills = {
  programming: [
    { name: "PHP", level: 90 },
    { name: "Laravel", level: 90 },
    { name: "Python (Django)", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "Java", level: 80 },
    { name: "C++", level: 75 }
  ],
  cloud: [
    { name: "Microsoft Azure", level: 75 },
    { name: "Google Cloud", level: 70 },
    { name: "Docker", level: 80 },
    { name: "Git/GitHub", level: 85 },
    { name: "CI/CD", level: 75 }
  ],
  databases: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "SQL Optimization", level: 80 }
  ],
  other: [
    { name: "Knowledge Management", level: 85 },
    { name: "System Architecture", level: 80 },
    { name: "Technical Documentation", level: 85 },
    { name: "Project Management", level: 80 }
  ]
};

const experience = [
  {
    role: "Knowledge Manager & System Developer",
    company: "Strathmore University",
    period: "2024 - Present",
    achievements: [
      "Leading knowledge management initiatives and system development",
      "Architected and deployed Equipment Management & Tracking System",
      "Achieved 40% reduction in manual tracking errors",
      "Optimized database performance by 25%",
      "Managing cloud infrastructure and storage systems",
      "Implementing comprehensive documentation strategies"
    ]
  },
  {
    role: "Founder & Community Leader",
    company: "TechQueens254",
    period: "2023 - Present",
    achievements: [
      "Founded and leading a community for women in technology",
      "Organizing technical workshops and mentorship programs",
      "Creating networking and career growth opportunities",
      "Building partnerships with tech organizations",
      "Facilitating knowledge sharing initiatives"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Business and Information Technology",
    school: "Strathmore University",
    period: "2024 - Present",
    details: "Final Year, Second Semester",
    specialization: "Advanced Programming, Database Systems, Agile Development"
  },
  {
    degree: "Diploma in Business and Information Technology",
    school: "Strathmore University",
    period: "2023 - 2024",
    details: "74% (B) - Dean's List Recognition"
  },
  {
    degree: "Kenya Certificate of Secondary Education",
    school: "Moi Forces Academy Lanet",
    period: "2019 - 2022",
    details: "Grade B-",
    specialization: "Distinguished in Computer Studies (A), History & Government (A-)"
  }
];

const projects = [
  {
    title: "Enterprise E-Commerce Platform",
    technologies: "PHP, MySQL, JavaScript, Payment Gateway Integration",
    points: [
      "Built comprehensive online marketplace with secure authentication",
      "Implemented robust payment processing with fraud detection",
      "Designed scalable multi-vendor database architecture"
    ]
  },
  {
    title: "Community Outreach Impact Portal",
    technologies: "Django, JavaScript, React, Data Visualization",
    points: [
      "Created data-driven dashboard for NGO program tracking",
      "Developed interactive visualizations leading to 30% funding increase",
      "Implemented real-time reporting features"
    ]
  }
];

const leadership = [
  {
    title: "Project Manager, 15th Student Council Senate",
    period: "2024",
    description: "Led cross-functional team of 10 members, delivering key initiatives on schedule"
  },
  {
    title: "Founder, Women-in-Tech Initiative",
    description: "Launched movement with 30+ active members, organizing monthly hackathons"
  },
  {
    title: "Regional Tech Competition Winner",
    description: "Represented Nakuru County in national Girls-in-Tech competitions"
  }
];

export default function CVSection() {
  return (
    <motion.section
      id="cv"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          tagText="Professional Journey"
          tagIcon="solar:document-bold"
          heading="Curriculum Vitae"
          description="A comprehensive overview of my professional experience and skills"
          centered={true}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header/Contact Info */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Esther Zawadi
            </h2>
            <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Knowledge Manager & System Developer | Community Leader
            </h3>
            <div className="flex justify-center space-x-6 mb-6">
              <Link
                href="mailto:e.zawadi@strathmore.edu"
                className="flex items-center gap-2 text-gray-600 hover:text-pink-500 dark:text-gray-400 transition-colors"
              >
                <Icon icon="solar:letter-bold" />
                e.zawadi@strathmore.edu
              </Link>
              <Link
                href="tel:+254708314494"
                className="flex items-center gap-2 text-gray-600 hover:text-pink-500 dark:text-gray-400 transition-colors"
              >
                <Icon icon="solar:phone-bold" />
                +254 708 314 494
              </Link>
            </div>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://www.linkedin.com/in/esther-zawadi-8a23782b7/"
                target="_blank"
                className="flex items-center gap-2 text-gray-600 hover:text-pink-500 dark:text-gray-400 transition-colors"
              >
                <Icon icon="solar:linkedin-bold" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/ezko-don"
                target="_blank"
                className="flex items-center gap-2 text-gray-600 hover:text-pink-500 dark:text-gray-400 transition-colors"
              >
                <Icon icon="solar:github-bold" />
                GitHub
              </Link>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Icon icon="solar:user-bold" className="text-pink-500" />
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Dynamic software engineer and proven technical leader with hands-on experience building scalable web applications that solve real-world problems. Currently excelling in my final year at Strathmore University while simultaneously delivering production-ready systems that serve 15+ daily users. Passionate about leveraging technology for social impact, I've led teams of 10+, reduced operational inefficiencies by 40%, and pioneered women-in-tech initiatives.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon icon="solar:programming-bold" className="text-pink-500" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Skills */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4">Programming & Development</h4>
                {skills.programming.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Cloud & DevOps Skills */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4">Cloud & DevOps</h4>
                {skills.cloud.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Database Skills */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg mb-4">Database Technologies</h4>
                {skills.databases.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon icon="solar:briefcase-bold" className="text-pink-500" />
              Professional Experience
            </h3>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8"
              >
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">{exp.role}</h4>
                <div className="text-pink-600 dark:text-pink-400 mb-2">{exp.company}</div>
                <div className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon icon="solar:graduation-bold" className="text-pink-500" />
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8"
              >
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">{edu.degree}</h4>
                <div className="text-pink-600 dark:text-pink-400 mb-2">{edu.school}</div>
                <div className="text-gray-600 dark:text-gray-400 mb-2">{edu.period}</div>
                <div className="text-gray-600 dark:text-gray-400">{edu.details}</div>
                {edu.specialization && (
                  <div className="text-gray-600 dark:text-gray-400 mt-2">{edu.specialization}</div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon icon="solar:widget-bold" className="text-pink-500" />
              Signature Projects
            </h3>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8"
              >
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">{project.title}</h4>
                <div className="text-pink-600 dark:text-pink-400 mb-2">{project.technologies}</div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Leadership */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon icon="solar:medal-bold" className="text-pink-500" />
              Leadership & Achievements
            </h3>
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">{item.title}</h4>
                {item.period && (
                  <div className="text-pink-600 dark:text-pink-400 mb-2">{item.period}</div>
                )}
                <div className="text-gray-600 dark:text-gray-400">{item.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Reference */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Icon icon="solar:user-speak-bold" className="text-pink-500" />
              Professional Reference
            </h3>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">Victor Anyura</h4>
              <div className="text-pink-600 dark:text-pink-400 mb-2">
                Senior Technical Producer, University Relations & Communications
              </div>
              <div className="text-gray-600 dark:text-gray-400 mb-2">Strathmore University</div>
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <Link
                  href="mailto:Vanyura@strathmore.edu"
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-500 dark:text-gray-400 transition-colors"
                >
                  <Icon icon="solar:letter-bold" />
                  Vanyura@strathmore.edu
                </Link>
                <Link
                  href="tel:+254729365230"
                  className="flex items-center gap-2 text-gray-600 hover:text-pink-500 dark:text-gray-400 transition-colors"
                >
                  <Icon icon="solar:phone-bold" />
                  +254 729 365 230
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 