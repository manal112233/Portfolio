import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ id }) => {
  const projects = [
    { name: 'Project 1', description: 'A cool project using React', link: '#' },
    { name: 'Project 2', description: 'A portfolio website', link: '#' },
    { name: 'Project 3', description: 'A blog platform', link: '#' },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation for child elements
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div id={id} className="p-8 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-lg shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:from-purple-600 hover:to-purple-800 transition duration-300 transform hover:scale-105"
            variants={cardVariants}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-purple-500 rounded-full shadow-md"></div>
            </div>
            <h3 className="text-2xl font-bold text-center mt-8">{project.name}</h3>
            <p className="text-gray-300 mt-4 text-center">{project.description}</p>
            <a
              href={project.link}
              className="block mt-6 text-center text-blue-400 hover:text-blue-300 transition"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
