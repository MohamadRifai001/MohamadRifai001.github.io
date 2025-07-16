import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../../data/portfolio";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Full-Stack Developer passionate about creating amazing web
              experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            {/* <motion.a
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </motion.a> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-1">
              Made with <Heart size={16} className="text-red-500" /> by{" "}
              {personalInfo.name}
            </p>
            <p className="mt-2">© 2025 All rights reserved</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
