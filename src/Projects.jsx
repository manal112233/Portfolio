import React from 'react';
import { motion } from 'framer-motion';

const Projects = ({ id }) => {
  const projects = [
    { name: 'Employee management system', description: 'Built a web app using EJS, Node.js, Express.js, and SQL to manage employee records with CRUD functionality and responsive design.', link: 'https://github.com/manal112233/Employee-Management-System' },
    { name: 'Weather Application', description: ' Created a responsive weather app using React, Material UI, and Tailwind CSS to display real-time weather data with a clean and interactive design.', link: 'https://github.com/manal112233/Weather-App' },
    { name: 'Ladder 7', description: 'Contributed to the frontend development using React and Tailwind CSS, focusing on creating responsive and user-friendly interfaces.', link: 'https://github.com/ladder7-dev/Ladder7' },
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
