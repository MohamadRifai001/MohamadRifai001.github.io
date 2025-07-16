import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import Section from "./common/Section";
import { personalInfo } from "../data/portfolio";

const Contact: React.FC = () => (
  <Section
    id="contact"
    title="Get In Touch"
    className="bg-white dark:bg-gray-900"
  >
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-700 dark:text-gray-300 text-lg"
      >
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your visions. Feel free to reach out!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-center items-center gap-6"
      >
        {/* Email */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors px-6 py-3 rounded-lg"
        >
          <Mail size={20} className="text-blue-600 dark:text-blue-400" />
          <span className="text-gray-900 dark:text-white font-medium">
            {personalInfo.email}
          </span>
        </a>

        {/* GitHub */}
        {personalInfo.github && (
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors px-6 py-3 rounded-lg"
          >
            <Github size={20} className="text-white" />
            <span className="text-white font-medium">GitHub</span>
          </a>
        )}

        {/* LinkedIn */}
        {personalInfo.linkedin && (
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition-colors px-6 py-3 rounded-lg"
          >
            <Linkedin size={20} className="text-white" />
            <span className="text-white font-medium">LinkedIn</span>
          </a>
        )}
      </motion.div>
    </div>
  </Section>
);

export default Contact;
