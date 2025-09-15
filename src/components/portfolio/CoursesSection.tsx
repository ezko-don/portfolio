"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

type Course = {
  title: string;
  institution: string;
  year: string;
  description: string;
  badge: string;
  certificateUrl?: string;
};

export default function CoursesSection() {
  const courses: Course[] = [
    {
      title: "Flutter Development",
      institution: "Google Developers",
      year: "2024",
      description: "Mastered Flutter framework for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
      badge: "https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white",
      certificateUrl: "#" // Replace with your actual certificate URL
    },
    {
      title: "Laravel Framework",
      institution: "Laravel Certification",
      year: "2024",
      description: "Became proficient in Laravel framework, mastering Eloquent ORM, Blade templating, and building robust web applications.",
      badge: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
      certificateUrl: "#" // Replace with your actual certificate URL
    },
    {
      title: "Node.js Backend Development",
      institution: "The Node.js Foundation",
      year: "2024",
      description: "Gained expertise in building scalable server-side applications using Node.js, Express, and related technologies.",
      badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
      certificateUrl: "#" // Replace with your actual certificate URL
    },
    {
      title: "React Frontend Development",
      institution: "Meta (Facebook)",
      year: "2024",
      description: "Mastered React.js for building interactive user interfaces, including hooks, context API, and modern React patterns.",
      badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
      certificateUrl: "#" // Replace with your actual certificate URL
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section
      id="certifications"
      className="py-16 md:py-24 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          tagText="Technical Proficiencies"
          tagIcon="solar:medal-ribbons-star-bold"
          heading="Certifications & Skills"
          description="Validated expertise in modern web and mobile development technologies"
          centered={true}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <img 
                    src={course.badge} 
                    alt={`${course.title} badge`} 
                    className="h-8 w-auto"
                    loading="lazy"
                  />
                </div>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{course.institution}</span>
                  <span className="mx-2">•</span>
                  <span>{course.year}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {course.description}
                </p>
              </div>
              
              {course.certificateUrl && (
                <a
                  href={course.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors mt-auto"
                >
                  View Certificate
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
