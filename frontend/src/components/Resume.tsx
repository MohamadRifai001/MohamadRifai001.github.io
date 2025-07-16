import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import Section from './common/Section';
import { personalInfo } from '../data/portfolio';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name.replace(' ', '_')}_Resume.pdf`;
    link.click();
  };

  return (
    <Section id="resume" title="Resume" className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FileText size={40} className="text-white" />
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Download My Resume
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Get a detailed overview of my skills, experience, and qualifications in a convenient PDF format.
          </p>
          
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            PDF • Updated January 2025
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Resume;