import React from "react";
import { motion } from "framer-motion";
import Section from "./common/Section";
import { personalInfo, techStack } from "../data/portfolio";

const About: React.FC = () => {
  const categories = {
    frontend: techStack.filter((tech) => tech.category === "frontend"),
    backend: techStack.filter((tech) => tech.category === "backend"),
    database: techStack.filter((tech) => tech.category === "database"),
    tools: techStack.filter((tech) => tech.category === "tools"),
    ai: techStack.filter((tech) => tech.category === "ai"),
  };

  return (
    <Section id="about" title="About Me" className="bg-white dark:bg-gray-900">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Hello! I'm Mohamad</h3>
            <p className="text-lg leading-relaxed mb-6">{personalInfo.bio}</p>
            <div className="flex items-center gap-4 text-sm">
              <span>📍 {personalInfo.location}</span>
              <span>📧 {personalInfo.email}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Tech Stack
          </h3>

          {Object.entries(categories).map(([category, techs]) => (
            <div key={category} className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200 capitalize">
                {category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-pointer"
                  >
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
