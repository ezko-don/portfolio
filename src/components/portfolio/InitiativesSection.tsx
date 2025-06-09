"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const InitiativesSection = () => {
  return (
    <motion.section
      id="initiatives"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32"
    >
      <div className="relative z-10">
        <SectionHeader
          tagText="Community Impact"
          tagIcon="solar:users-group-rounded-bold"
          heading="Tech Initiatives"
          description="Leading and contributing to tech communities"
          showUnderline={true}
          centered={true}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/tech-queens-254.jpg"
                alt="Tech Queens 254"
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Tech Queens 254</h3>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-400 rounded-full text-sm font-medium">
                  Founder & Leader
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                Leading a dynamic girls tech movement dedicated to empowering young women in technology. 
                Tech Queens 254 focuses on coding education, mentorship, and creating opportunities for girls 
                to excel in the tech industry.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon 
                    icon="solar:flag-bold" 
                    className="text-pink-500 mt-1 w-5 h-5 flex-shrink-0" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Mission</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Empowering girls through technology education and creating a supportive community 
                      for women in tech.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon 
                    icon="solar:stars-bold" 
                    className="text-pink-500 mt-1 w-5 h-5 flex-shrink-0" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Key Activities</h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-center gap-2">
                        <Icon icon="solar:check-circle-bold" className="text-green-500 w-4 h-4" />
                        Coding workshops and training sessions
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon icon="solar:check-circle-bold" className="text-green-500 w-4 h-4" />
                        Mentorship programs
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon icon="solar:check-circle-bold" className="text-green-500 w-4 h-4" />
                        Tech career guidance
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon icon="solar:check-circle-bold" className="text-green-500 w-4 h-4" />
                        Community building events
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Icon icon="solar:user-plus-bold" className="w-5 h-5" />
                  <span>Get Involved</span>
                </Link>
                <div className="flex gap-3">
                  <Link
                    href="https://www.tiktok.com/@techqueens254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300"
                  >
                    <Icon icon="simple-icons:tiktok" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/techqueens254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300"
                  >
                    <Icon icon="simple-icons:instagram" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/techqueens254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300"
                  >
                    <Icon icon="simple-icons:linkedin" className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InitiativesSection; 