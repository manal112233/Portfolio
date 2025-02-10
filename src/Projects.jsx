import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = ({ id }) => {
  const projects = [
    {
      name: "Employee Management System",
      description:
        "Built a web app using EJS, Node.js, Express.js, and SQL to manage employee records with CRUD functionality and responsive design.",
      link: "https://github.com/manal112233/Employee-Management-System",
    },
    {
      name: "Weather Application",
      description:
        "Created a responsive weather app using React, Material UI, and Tailwind CSS to display real-time weather data with a clean and interactive design.",
      link: "https://github.com/manal112233/Weather-App",
    },
    {
      name: "Ladder 7",
      description:
        "Contributed to the frontend development using React and Tailwind CSS, focusing on creating responsive and user-friendly interfaces.",
      link: "https://github.com/ladder7-dev/Ladder7",
    },
    {
      name: "Wunderstay",
      description:
        "Developed a full-stack web application using the MERN stack (MongoDB, Express.js, React, Node.js) to facilitate seamless property bookings with an intuitive user interface.",
      link: "https://github.com/manal112233/Wunderstay",
    },
    {
      name: "Todo App",
      description:
        "Built a task management app using EJS, Node.js and Express.js, featuring user authentication and CRUD operations.",
      link: "https://github.com/manal112233/Todo-App",
    },
    {
      name: "Quora Post Clone",
      description:
        "Developed a Quora-like posting platform using EJS, Node.js and  Express.js, allowing users to create, edit, and interact with posts.",
      link: "https://github.com/manal112233/Quora-Post",
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  // Increment carousel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Decrement carousel
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div id={id} className="p-8 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="relative w-full flex items-center justify-center mt-12">
        <button
          onClick={prevSlide}
          className="absolute md:top-48 top-[500px] left-0 p-3 rounded-full bg-purple-600 hover:bg-purple-500 shadow-lg"
        >
          {/* &#9664; */}
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

        </button>

        <div className="perspective-container relative w-[100px] md:w-2/4 md:h-[400px] h-[300px]">
          <div
            className="carousel-wrapper relative flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {projects.map((project, index) => {
              const angle = (index - currentIndex) * 40; // Adjust angle between cards
              return (
                <motion.div
                  key={index}
                  className="absolute w-64 h-80 mt-96 bg-gradient-to-b from-purple-700 to-purple-900 text-center p-6 rounded-xl shadow-2xl transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0.5,
                    transform: `rotateY(${angle}deg) translateZ(${
                      index === currentIndex ? 250 : 200
                    }px)`,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  <p className="text-gray-300 mt-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    View Project
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0  md:top-48 top-[500px] p-3 rounded-full bg-purple-600 hover:bg-purple-500 shadow-lg"
        >
          {/* &#9654; */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

        </button>
      </div>
    </div>
  );
};

export default Projects;
