"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function MediaSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  return (
    <motion.section
      id="media"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32 relative"
    >
      <SectionHeader
        tagText="Media & Recognition"
        tagIcon="solar:clapperboard-play-bold"
        heading="Media & Highlights"
        description="Moments of recognition and work in the field"
        showUnderline={false}
        centered={true}
      />

      <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4">
        {/* Strathmore Feature Video */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 dark:border-gray-700/40 shadow-xl overflow-hidden"
        >
          <div className="relative bg-black">
            <video
              controls
              preload="metadata"
              className="w-full aspect-video"
            >
              <source src="/media/strathmore-feature.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Icon icon="solar:videocamera-bold" className="text-pink-500" width={22} height={22} />
              Featured in a Strathmore University Video
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              Featured in a video produced by Strathmore University&apos;s Communications Office, highlighting work at the institution.
            </p>
          </div>
        </motion.div>

        {/* ITEDA Field Work Image */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 dark:border-gray-700/40 shadow-xl overflow-hidden"
        >
          <div className="relative w-full aspect-video">
            <Image
              src="/media/iteda-fieldwork.jpeg"
              alt="ITEDA Solutions field work"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-5 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <Icon icon="solar:leaf-bold" className="text-orange-500" width={22} height={22} />
              ITEDA Solutions Field Work
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              On-site with the ITEDA Solutions team, working directly with smart solar crop dryer installations.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
