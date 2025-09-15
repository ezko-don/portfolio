"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

type Course = {
  title: string;
  institution: string;
  year: string;
  description: string;
  certificateUrl?: string;
};

export default function CoursesSection() {
  const courses: Course[] = [
    {
      title: "Google Data Analytics Professional Certificate",
      institution: "Google (Coursera)",
      year: "2023",
      description: "Mastered data cleaning, analysis, and visualization using tools like SQL, Tableau, and R. Learned to make data-driven decisions and create visualizations to communicate insights.",
      certificateUrl: "/certificates/google-data-analytics-certificate.png"
    },
    {
      title: "IBM Data Science Professional Certificate",
      institution: "IBM (Coursera)",
      year: "2023",
      description: "Gained hands-on experience in data science and machine learning using Python, Jupyter notebooks, and popular data science libraries like pandas, NumPy, and scikit-learn.",
      certificateUrl: "/certificates/ibm-data-science-certificate.png"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      institution: "Amazon Web Services (AWS)",
      year: "2023",
      description: "Earned foundational knowledge of AWS Cloud concepts, services, security, architecture, pricing, and support. Demonstrated cloud fluency and understanding of AWS Cloud value.",
      certificateUrl: "/certificates/aws-cloud-practitioner-certificate.png"
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
      id="courses"
      className="py-16 md:py-24 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          tagText="My Learning Journey"
          tagIcon="solar:book-bookmark-bold"
          heading="Courses & Certifications"
          description="Professional development and continuous learning"
          centered={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative p-6 rounded-xl bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-400/20 flex items-center justify-center">
                <span className="text-lg">📚</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span>{course.institution}</span>
                <span className="mx-2">•</span>
                <span>{course.year}</span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              
              {course.certificateUrl && (
                <a
                  href={course.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
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
