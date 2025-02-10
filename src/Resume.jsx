import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Resume = ({ id }) => {
  const [activeSection, setActiveSection] = useState('about');


   const educationData = [
    {
      title: "10th Grade",
      description: "Completed at KMHSS Kuttoor North with 80% marks.",
    },
    {
      title: "+2 Science",
      description: "Completed at KMHSS Kuttoor North with 77% marks.",
    },
    {
      title: "B.Tech in EEE",
      description:
        "Graduated from Government Engineering College, Idukki in 2016 with a CGPA of 6.71.",
    },
  ];


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

  const experiences = [
    {
      title: "Office Administration",
      duration: "Oct 2016 - March 2017",
      description:
        "Managed administrative tasks and ensured smooth operations in office environments.",
    },
    {
      title: "KSEB Trainee",
      duration: "April 2017 - Oct 2017",
      description:
        "Received hands-on training with Kerala State Electricity Board (KSEB), focusing on practical skills and technical knowledge.",
    },
    {
      title: "Subject Matter Expert (SME)",
      duration: "Aug 2020 - Present",
      description:
        "Worked as a Subject Matter Expert in Mathematics at Chegg India while exploring web development.",
    },

    {
      title: "Internship-MERN stack",
      duration: "oct 2024 - Present",
      description:
        "Exploring web development and building applications with React as part of the MERN stack.",
    },
  ];

  // Adjusted colors to match the hero section (assumed colors for example)
  const mainBgColor = 'bg-gradient-to-b from-gray-900 to-black';
  const headingColor = 'text-purple-600';
  const buttonBgColor = 'bg-purple-500';
  const buttonTextColor = 'text-white';
  const hoverButtonBgColor = 'bg-purple-600';

   const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));


  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div  className={`${mainBgColor} py-20 px-8 md:px-20`}>
            {/* Heading Section */}
            <div className="text-center">
              <motion.h2
                className={`text-4xl md:text-5xl font-extrabold ${headingColor}`}
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                About Me
              </motion.h2>
              <motion.div
                className="mt-2 h-1 w-24 mx-auto bg-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>

            {/* Content Section */}
            <motion.div
              className="mt-12 space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1 }}
            >
              {/* Storytelling paragraph 1 */}
              <motion.p
                className="text-lg md:text-xl leading-relaxed text-white"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1 }}
              >
                Hi! I'm <span className={`font-semibold ${headingColor}`}>Nafila V T</span>. I believe in learning, growing, and staying determined to achieve my goals. My journey has been full of experiences that shaped who I am today.
              </motion.p>

              {/* Storytelling paragraph 2 */}
              <motion.p
                className="text-lg md:text-xl leading-relaxed text-white"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                I completed my B.Tech in Electrical and Electronics Engineering (EEE) at Government Engineering College, Idukki, in 2016. After graduating, I worked as an Office Assistant and gained hands-on training with Kerala State Electricity Board (KSEB). Later, I prepared for government exams like the Railway Loco Pilot exam and successfully cleared two stages.
              </motion.p>

              {/* Storytelling paragraph 3 */}
              <motion.p
                className="text-lg md:text-xl leading-relaxed text-white"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                In 2020, I got married, and in 2022, I became a mother. While balancing family responsibilities, I have been working as a <span className={`font-semibold ${headingColor}`}>Subject Matter Expert in Mathematics</span> at Chegg India. After my delivery, I decided to follow my dream of becoming a Full Stack Developer. I started learning the MERN stack (MongoDB, Express, React, Node.js) and worked on projects while caring for my child. Now, I am interning as a MERN stack developer, gaining valuable experience in building web applications.
              </motion.p>
            </motion.div>
          </div>
        );
      case 'experience':
        return (
    <motion.div
      key="experience"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col "
    >
      <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
      <div className="relative w-full max-w-xl h-64">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`absolute top-0 left-0 w-full h-full  bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transform transition-transform ${
              index === current ? "z-10 scale-100" : "z-0 scale-90 opacity-50"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: index === current ? 1 : 0.5,
              scale: index === current ? 1 : 0.9,
            }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-lg italic mb-4">{exp.duration}</p>
            <p className="text-center">{exp.description}</p>
          </motion.div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 p-2 rounded-full z-20"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-600 p-2 rounded-full z-20"
        >
          &#8250;
        </button>
      </div>
    </motion.div>
        );
      case 'skills':
        return (
          <div id={id} className="p-8 bg-gradient-to-b from-gray-900 to-black">
            <h2 className={`text-4xl font-bold ${headingColor} text-center mb-6`}>Skills</h2>
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
                    className="px-6 py-3 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'education':
  return (
    <motion.div
    key="education"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="p-6  bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col"
  >
    <h2 className="text-3xl font-bold mb-8 text-white">Education</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {educationData.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-6 pt-8 bg-gradient-to-b from-gray-900 to-black hover:from-purple-600 hover:to-purple-800 text-white rounded-lg shadow-lg transform transition-transform"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Purple Circle - Always Visible */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-purple-500 rounded-full shadow-md"></div>
          </div>
          
          <h3 className="text-2xl font-semibold mb-2 text-center">{card.title}</h3>
          <p className="text-lg leading-relaxed text-center">{card.description}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
  
);

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div id={id} className="md:w-1/4 w-[180px] bg-gradient-to-b from-gray-900 to-black pt-6 p-6">
        <h2 className={`text-2xl font-bold mb-4 text-center ${headingColor}`}>Resume</h2>
        <div className="space-y-4  ">
          <button
            className={`w-full text-left  px-4 py-2  rounded-lg ${
              activeSection === 'about' ? `${buttonBgColor} ${buttonTextColor}` : 'bg-gray-300'
            }`}
            onClick={() => setActiveSection('about')}
          >
            About Me
          </button>
          <button
            className={`w-full  text-left px-4 py-2 rounded-lg ${
              activeSection === 'experience' ? `${buttonBgColor} ${buttonTextColor}` : 'bg-gray-300'
            }`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activeSection === 'skills' ? `${buttonBgColor} ${buttonTextColor}` : 'bg-gray-300'
            }`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button
            className={`w-full text-left px-4 py-2 rounded-lg ${
              activeSection === 'education' ? `${buttonBgColor} ${buttonTextColor}` : 'bg-gray-300'
            }`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-3/4 bg-black  ">{renderContent()}</div>
    </div>
  );
};

export default Resume;
