"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Link from "next/link";

const certificates = [
  {
    title: "Build Apps with Flutter",
    issuer: "Google",
    date: "June 2025",
    type: "Technical Certification",
    description: "Completed the 'Build apps with Flutter' learning pathway and quiz, demonstrating proficiency in Flutter app development.",
    icon: "simple-icons:flutter",
    color: "from-blue-400 to-cyan-500",
    badge: {
      image: "/images/certificates/flutter-badge.svg",
      alt: "Google Flutter Development Certification Badge",
      link: "https://www.cloudskillsboost.google/public_profiles/YOUR_PROFILE"
    }
  },
  {
    title: "Certificate 0007 - Esther Zawadi",
    issuer: "Professional Certification",
    date: "2024",
    type: "Professional Certificate",
    description: "Professional certification recognizing expertise and achievements in the field.",
    icon: "mdi:certificate-outline",
    color: "from-orange-500 to-red-600",
    certificateLink: "/Certificate 0007 - Esther Zawadi.pdf"
  },
  {
    title: "Bachelor of Business Information Technology",
    issuer: "Strathmore University",
    date: "Current",
    type: "Degree Program",
    description: "Currently pursuing BBIT with focus on business technology and systems development.",
    icon: "mdi:school",
    color: "from-pink-500 to-purple-600"
  },
  {
    title: "Diploma in Information Technology",
    issuer: "Strathmore University",
    date: "Completed",
    type: "Diploma",
    description: "Successfully completed diploma program with strong academic performance.",
    icon: "mdi:certificate",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Knowledge Management Certification",
    issuer: "Strathmore University",
    date: "2024",
    type: "Professional Certificate",
    description: "Specialized certification in knowledge management systems and practices.",
    icon: "mdi:brain",
    color: "from-blue-500 to-purple-600"
  }
];

export default function CertificatesSection() {
  return (
    <motion.section
      id="certificates"
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
          tagText="Academic & Professional Achievements"
          tagIcon="solar:certificate-bold"
          heading="Certificates"
          description="My educational and professional certifications"
          centered={true}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white dark:bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-pink-300/50 dark:hover:border-pink-600/50 transition-all duration-300">
                  {/* Certificate Icon */}
                  <div className={`w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {cert.badge ? (
                      <Image
                        src={cert.badge.image}
                        alt={cert.badge.alt}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : cert.certificateLink ? (
                      <Icon
                        icon={cert.icon}
                        className="text-white text-3xl"
                      />
                    ) : (
                      <Icon
                        icon={cert.icon}
                        className="text-white text-3xl"
                      />
                    )}
                  </div>

                  {/* Certificate Details */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-500 text-sm mb-4">
                    <Icon icon="solar:calendar-date-bold" className="text-pink-500" />
                    {cert.date}
                  </div>
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/10 dark:to-purple-900/10 rounded-full text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {cert.type}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {cert.description}
                  </p>
                  {cert.badge && (
                    <Link
                      href={cert.badge.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Icon icon="solar:link-bold" className="mr-1" />
                      View Badge
                    </Link>
                  )}
                  {cert.certificateLink && (
                    <Link
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Icon icon="solar:download-bold" className="mr-1" />
                      Download Certificate
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
} 