"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Equipment Management System",
    subtitle: "Asset Tracking and Management Platform",
    description: "A comprehensive system for tracking and managing institutional equipment, providing real-time monitoring and efficient asset management capabilities.",
    features: [
      "Real-time equipment tracking and status monitoring",
      "Asset check-in/check-out management",
      "Equipment maintenance scheduling",
      "User role-based access control",
      "Equipment history and usage analytics",
      "QR code integration for quick asset identification",
      "Automated notifications for maintenance and returns",
      "Detailed reporting and analytics dashboard"
    ],
    deliverables: [
      "Full-featured equipment management platform",
      "User and admin dashboards",
      "Equipment tracking system",
      "Maintenance scheduling module",
      "Reporting and analytics tools",
      "Mobile-responsive interface",
      "Role-based access control system"
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "QR Code API", "REST API", "JWT Authentication"],
    github: "https://github.com/ezko-don/equipment-management",
    live: "http://192.168.170.221/",
    gradient: "from-emerald-500 to-teal-500",
    status: "Live",
    category: "Web Application",
    highlight: "Featured",
    timeline: "4 months",
    clientType: "Institution"
  },
  {
    title: "NEP Kenya",
    subtitle: "National Environment Platform - Kenya",
    description: "The National Environment Platform Kenya (NEP-Kenya) is a multi-stakeholder platform that brings together diverse actors to advocate for environmental conservation, sustainable development, and climate action in Kenya.",
    features: [
      "Environmental advocacy and awareness campaigns",
      "Multi-stakeholder platform coordination",
      "Climate action initiatives and programs",
      "Policy advocacy and research",
      "Community engagement and education",
      "Sustainable development project management",
      "Environmental monitoring and reporting",
      "Partnership and collaboration facilitation"
    ],
    deliverables: [
      "Environmental advocacy platform",
      "Climate action coordination system",
      "Community engagement tools",
      "Policy research and documentation",
      "Stakeholder collaboration framework",
      "Environmental awareness campaigns",
      "Sustainable development initiatives"
    ],
    tech: ["Web Development", "Content Management", "Digital Advocacy", "Environmental Monitoring"],
    github: "#",
    live: "https://nepkenya.org/",
    gradient: "from-green-500 to-emerald-500",
    status: "Live",
    category: "Environmental Platform",
    highlight: "Impact",
    timeline: "Ongoing",
    clientType: "Environmental Organization"
  },
  {
    title: "ITEDA Solar Dryer Management Platform",
    subtitle: "IoT Monitoring Platform for Smart Solar Crop Dryers",
    description: "A remote monitoring and management platform for ITEDA Solutions' smart solar crop dryers, providing real-time sensor data, alerts, and analytics that help agricultural operators optimize drying performance and reduce post-harvest losses.",
    features: [
      "Real-time temperature, humidity, and power consumption monitoring",
      "Automated alerts for temperature anomalies, power issues, and maintenance needs",
      "Data visualization and trend analysis for dryer performance",
      "Data export for further analysis and reporting",
      "User account creation and dashboard access",
      "Remote operational oversight of connected solar dryers"
    ],
    deliverables: [
      "IoT sensor data dashboard",
      "Real-time monitoring and alerting system",
      "Performance analytics and reporting tools",
      "User authentication and account management",
      "Responsive web interface"
    ],
    tech: ["Next.js", "TypeScript", "IoT Integration", "Real-time Data", "Tailwind CSS", "Vercel"],
    github: "#",
    live: "https://iteda-solutions-dryers-platform.vercel.app/",
    gradient: "from-orange-500 to-amber-500",
    status: "Live",
    category: "IoT Platform",
    highlight: "Featured",
    timeline: "Ongoing",
    clientType: "Agritech Startup"
  },
  {
    title: "ITEDA Solutions Website",
    subtitle: "Agricultural IoT Company Website",
    description: "The official website for ITEDA Solutions, an agricultural IoT company building smart, sustainable solar crop dryers, showcasing the company's mission, products, and impact for farmers seeking affordable, climate-smart technology.",
    features: [
      "Company mission, vision, and values presentation",
      "Smart Solar Crop Dryer product showcase",
      "Contact form for customer inquiries",
      "Social media integration (GitHub, LinkedIn, X)",
      "Responsive, modern design"
    ],
    deliverables: [
      "Marketing website",
      "Product information pages",
      "Contact and inquiry system",
      "Social media integration",
      "Mobile-responsive design"
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "#",
    live: "https://iteda-website.vercel.app/",
    gradient: "from-green-500 to-lime-500",
    status: "Live",
    category: "Company Website",
    highlight: "",
    timeline: "Ongoing",
    clientType: "Agritech Startup"
  },
  {
    title: "Key Management System",
    subtitle: "Institutional Key Tracking & Access Platform",
    description: "A digital key management system built for Strathmore University to track, issue, and return physical keys across departments, replacing manual logbooks with an auditable, role-based workflow.",
    features: [
      "Key issuance and return tracking",
      "User role-based access control",
      "Key holder history and audit trail",
      "Department and room key assignment",
      "Automated notifications for overdue keys",
      "Reporting and analytics dashboard"
    ],
    deliverables: [
      "Key tracking platform",
      "Admin and user dashboards",
      "Audit trail and reporting module",
      "Role-based access control system",
      "Mobile-responsive interface"
    ],
    tech: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "REST API"],
    github: "#",
    live: "#",
    gradient: "from-blue-500 to-indigo-500",
    status: "Completed",
    category: "Web Application",
    highlight: "",
    timeline: "2 months",
    clientType: "Institution"
  }
];

export default function ProjectsSection() {
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
    hidden: { opacity: 0, y: 60, scale: 0.95 },
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
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-5 md:top-20 right-2 md:right-16 w-12 sm:w-16 md:w-32 h-12 sm:h-16 md:h-32 bg-gradient-to-br from-purple-400/15 md:from-purple-400/20 to-pink-400/15 md:to-pink-400/20 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-5 md:bottom-20 left-2 md:left-16 w-16 sm:w-20 md:w-40 h-16 sm:h-20 md:h-40 bg-gradient-to-br from-blue-400/10 md:from-blue-400/15 to-cyan-400/10 md:to-cyan-400/15 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="hidden lg:block absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Section Header */}
        <SectionHeader
          tagText="Portfolio Showcase"
          tagIcon="solar:code-square-bold"
          heading="Featured Projects"
          description="Discover my latest work in web development, AI integration, and digital innovation"
          showUnderline={true}
          centered={true}
        />

        {/* Full-Width Stacked Projects */}
        <div className="max-w-7xl mx-auto px-3 md:px-4 space-y-8 md:space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 dark:border-gray-700/40 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 overflow-hidden shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl">

                {/* Project Header with Gradient */}
                <div className={`relative bg-gradient-to-br ${project.gradient} p-4 sm:p-6 md:p-8 lg:p-10`}>
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px] md:bg-[length:30px_30px]" />
                  </div>

                  {/* Floating tech icons - hidden on mobile */}
                  <div className="hidden md:block absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    {[
                      { icon: "logos:react", pos: { top: "15%", left: "80%" } },
                      { icon: "logos:nextjs-icon", pos: { top: "60%", right: "4%" } },
                      { icon: "logos:typescript-icon", pos: { bottom: "20%", left: "75%" } },
                      { icon: "logos:nodejs-icon", pos: { top: "25%", right: "15%" } },
                      { icon: "logos:tailwindcss-icon", pos: { bottom: "30%", left: "85%" } },
                      { icon: "logos:postgresql", pos: { top: "40%", right: "20%" } },
                      { icon: "simple-icons:langchain", pos: { bottom: "10%", left: "70%" } },
                      { icon: "logos:redis", pos: { top: "20%", right: "25%" } },
                      { icon: "logos:socket-io", pos: { bottom: "25%", left: "90%" } },
                      { icon: "logos:stripe", pos: { top: "30%", right: "30%" } },
                      { icon: "logos:vercel-icon", pos: { bottom: "15%", left: "65%" } },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-white text-2xl md:text-3xl"
                        style={item.pos}
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 5, 0],
                        }}
                        transition={{
                          duration: 4 + i * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Icon icon={item.icon} width={24} height={24} className="md:w-8 md:h-8" />
                      </motion.div>
                    ))}
                  </div>

                  <div className="relative z-10">
                    {/* Project Meta Info */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                      <motion.span
                        className="px-2.5 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs md:text-sm font-semibold"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>

                      {project.highlight && (
                        <motion.span
                          className="px-2.5 py-1.5 md:px-4 md:py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-200 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Icon icon="solar:star-bold" width={12} height={12} className="md:w-4 md:h-4" />
                          <span className="hidden sm:inline">{project.highlight}</span>
                        </motion.span>
                      )}

                      <motion.span
                        className={`px-2.5 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2 ${project.status === 'Live'
                          ? 'bg-green-500/20 text-green-200 border border-green-400/30'
                          : 'bg-orange-500/20 text-orange-200 border border-orange-400/30'
                          }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${project.status === 'Live' ? 'bg-green-400' : 'bg-orange-400'
                          } animate-pulse`} />
                        {project.status}
                      </motion.span>

                      <span className="px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                        {project.timeline}
                      </span>

                      <span className="hidden sm:inline-block px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                        {project.clientType}
                      </span>
                    </div>

                    {/* Project Title & Description */}
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-medium mb-3 md:mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      <Link
                        href={project.github}
                        className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg md:rounded-xl hover:bg-white/30 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                      >
                        <Icon icon="solar:code-bold" width={18} height={18} className="md:w-5 md:h-5" />
                        <span>View Repository</span>
                      </Link>

                      <Link
                        href={project.live}
                        className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white text-gray-900 rounded-lg md:rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                      >
                        <Icon icon="solar:arrow-up-outline" width={18} height={18} className="md:w-5 md:h-5" />
                        <span>Live Demo</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Project Details Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                  <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

                    {/* Features Section */}
                    <div>
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                        <div className="p-1.5 md:p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg md:rounded-xl">
                          <Icon icon="solar:settings-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                        </div>
                        <span>Key Features</span>
                      </h4>
                      <ul className="space-y-2.5 md:space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <Icon
                              icon="solar:check-circle-bold"
                              className="text-green-500 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5"
                            />
                            <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables Section */}
                    <div className="mt-6 lg:mt-0">
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                        <div className="p-1.5 md:p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg md:rounded-xl">
                          <Icon icon="solar:delivery-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                        </div>
                        <span>Deliverables</span>
                      </h4>
                      <ul className="space-y-2.5 md:space-y-3">
                        {project.deliverables.map((deliverable, deliverableIndex) => (
                          <motion.li
                            key={deliverableIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: deliverableIndex * 0.1 }}
                            className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <Icon
                              icon="solar:box-bold"
                              className="text-blue-500 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5"
                            />
                            <span className="text-sm md:text-base leading-relaxed">{deliverable}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack Section */}
                  <div className="mt-6 md:mt-8 lg:mt-12 pt-6 md:pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                      <div className="p-1.5 md:p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg md:rounded-xl">
                        <Icon icon="solar:code-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                      </div>
                      <span>Technology Stack</span>
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-2.5 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-lg md:rounded-xl text-xs md:text-sm font-medium border border-gray-200 dark:border-gray-600 hover:shadow-md md:hover:shadow-lg transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}

        <motion.div
          variants={itemVariants}
          className="text-center mt-12 md:mt-16 lg:mt-20 px-4 mb-12"
        >
          <Link
            href="#contact"
          >

            <motion.div
              className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 dark:border-purple-500/20 rounded-xl md:rounded-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <Icon icon="solar:programming-bold" className="text-blue-500 dark:text-purple-400 w-5 h-5 md:w-6 md:h-6" />
              <span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base text-center">
                Interested in working together? Let&apos;s create something amazing!
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
} 