import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ id }) => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Tailwind CSS',
    'SQL',
    'MERN Stack',
    'EJS',
    'Express',
    'Bootstrap',
    'Framer Motion'
  ];

  return (
    <div id={id} className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span
              className="px-6 py-3 text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
