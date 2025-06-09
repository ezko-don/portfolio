"use client";

import {
  Background,
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  HeroSection,
  InitiativesSection,
  Navigation,
  OverviewSection,
  ProjectsSection,
  TechStackSection,
} from "@/components/portfolio";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Overview Section */}
        <OverviewSection />

        {/* Education Section */}
        <EducationSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Initiatives Section */}
        <InitiativesSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
} 