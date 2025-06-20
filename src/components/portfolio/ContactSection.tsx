"use client";

import emailjs from '@emailjs/browser';
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import SectionHeader from './SectionHeader';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'esther.kadenge@strathmore.edu', // Your email
        },
        publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="max-w-4xl mx-auto">


        <SectionHeader
          tagText="Get in Touch"
          tagIcon="solar:chat-round-dots-bold"
          heading="Let&apos;s Work Together"
          description="Ready to bring your ideas to life? I&apos;m always excited to work on interesting projects and collaborate with amazing people. Let&apos;s create something extraordinary together."
          centered={true}
        />

        {/* Contact Form */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  placeholder="Your full name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Icon icon="solar:loading-outline" width={20} height={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Icon icon="solar:letter-outline" width={20} height={20} />
                    Send Message
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                >
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <Icon icon="solar:check-circle-bold" width={20} height={20} />
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-600 text-left dark:text-green-500 text-sm mt-1">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                  {/* add a button to close the message */}
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="absolute top-1 right-1  text-red-500 rounded-md"
                  >
                    <Icon icon="solar:close-circle-bold" width={20} height={20} />
                  </button>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                >
                  <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                    <Icon icon="solar:close-circle-bold" width={20} height={20} />
                    <span className="font-medium">Failed to send message</span>
                  </div>
                  <p className="text-red-600 text-left dark:text-red-500 text-sm mt-1">
                    Please try again or contact me directly at esther.kadenge@strathmore.edu
                  </p>
                  {/* add a button to close the message */}
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="absolute top-1 right-1  text-red-500 rounded-md"
                  >
                    <Icon icon="solar:close-circle-bold" width={20} height={20} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </form>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="mailto:lightify6@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Icon icon="solar:mailbox-bold-duotone" width={18} height={18} />
                Send Email
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/Esther_Kadenge_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border-2 border-gray-300 hover:border-gray-400 dark:border-gray-600 dark:hover:border-gray-500 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Icon icon="solar:download-outline" width={18} height={18} />
                Download CV
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Or connect with me on social media:</p>
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="mailto:esther.kadenge@strathmore.edu"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <Icon icon="solar:letter-bold" width={24} height={24} />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://github.com/ezko-don"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
            >
              <Icon icon="solar:github-bold" width={24} height={24} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://chat.whatsapp.com/EjJwPmrLYwV9HAwGExVHfA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors duration-300"
            >
              <Icon icon="ri:whatsapp-fill" width={24} height={24} />
              <span className="sr-only">TechQueens254 WhatsApp</span>
            </Link>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Join TechQueens254</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Be part of our vibrant community of women in technology!</p>
            <Link
              href="https://chat.whatsapp.com/EjJwPmrLYwV9HAwGExVHfA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
            >
              <Icon icon="ri:whatsapp-fill" className="mr-2" />
              Join Our WhatsApp Community
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 