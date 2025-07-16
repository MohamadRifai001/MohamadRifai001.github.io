import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import Section from './common/Section';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
              
              {/* Content */}
              <div className="ml-16 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl w-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {experience.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;