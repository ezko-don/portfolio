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
  // Empty courses array to ensure no courses are displayed
  const courses: Course[] = [];

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
      {/* Section header is kept in case you want to add content later */}
      <div className="container mx-auto px-4">
        <SectionHeader
          tagText="My Learning Journey"
          tagIcon="solar:book-bookmark-bold"
          heading="Courses & Certifications"
          description=""
          centered={true}
        />

        {/* No courses will be rendered as the array is empty */}
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
              {/* Course card content - will not be rendered */}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
