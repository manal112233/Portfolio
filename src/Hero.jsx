import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Hero = ({ id }) => {
  return (
    <div id={id}  className="h-screen flex flex-col md:flex-row items-center bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute h-80 w-80 bg-blue-500 rounded-full opacity-20 filter blur-3xl"
          animate={{ y: [100, -10, -100] }}
          transition={{ repeat: Infinity, duration: 5 }}
        ></motion.div>
        <motion.div
          className="absolute h-60 w-60 bg-pink-500 rounded-full opacity-10 filter blur-3xl top-1/4 left-1/4"
          animate={{ y: [100, 0, -100] }}
          transition={{ repeat: Infinity, duration: 7 }}
        ></motion.div>
      </div>

      {/* Text Section */}
      <motion.div
  className="flex flex-col items-center justify-center md:ml-20 p-6 gap-5 text-center md:text-left z-10"
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  {/* Heading */}
  <motion.h1
    className="text-4xl md:text-6xl font-extrabold text-blue-400"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, type: 'spring' }}
    whileHover={{ scale: 1.1, color: "#3b82f6" }}
  >
    Hi, I'm Nafila.vt
  </motion.h1>

  {/* Subheading */}
  <motion.h3
    className="text-lg md:text-xl font-bold text-gray-300"
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    whileHover={{ color: "#ffffff" }}
  >
    And I am a Web Developer
  </motion.h3>

  {/* Description */}
  <motion.p
    className="text-base md:text-xl mt-4 text-gray-400"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.4 }}
    whileHover={{ scale: 1.05, color: "#d1d5db" }}
  >
    I build modern and responsive web applications.
  </motion.p>

  {/* Social Icons */}
  <motion.div
  className="mt-3 flex gap-4"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }}
  transition={{ duration: 1, delay: 0.5 }}
>
  <motion.a
    href="#"
    className="text-blue-500 hover:text-blue-600"
    whileHover={{ y: -10, rotate: -10 }}
    whileTap={{ scale: 0.9 }}
  >
    <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6 md:h-8 md:w-8" />
  </motion.a>
  <motion.a
    href="#"
    className="text-pink-500 hover:text-pink-600"
    whileHover={{ y: -10, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  >
    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 md:h-8 md:w-8" />
  </motion.a>
  <motion.a
    href="#"
    className="text-blue-300 hover:text-blue-500"
    whileHover={{ y: -10, rotate: -10 }}
    whileTap={{ scale: 0.9 }}
  >
    <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6 md:h-8 md:w-8" />
  </motion.a>
  <motion.a
    href="#"
    className="text-gray-400 hover:text-gray-600"
    whileHover={{ y: -10, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  >
    <FontAwesomeIcon icon={faGithub} className="h-6 w-6 md:h-8 md:w-8" />
  </motion.a>
</motion.div>

  {/* Button */}
  <motion.button
    className="mt-5 px-4 md:px-6 py-2 md:py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
    whileHover={{ scale: 1.1, backgroundColor: "#2563eb" }}
    whileTap={{ scale: 0.9, backgroundColor: "#1e40af" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    More about me
  </motion.button>
</motion.div>


      {/* Image Section */}
  {/* Image Section */}
<motion.div
  className="relative flex items-center justify-center md:ml-16 mt-10 md:mt-0 z-10"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  {/* Shadow and Depth Effect */}
  <motion.div
    className="relative flex items-center justify-center p-4 w-64 h-64 md:w-96 md:h-96"
    animate={{
      rotate: [0, 15, -15, 0],
      scale: [1, 1.1, 1],
      y: [0, -10, 0],
    }}
    transition={{ repeat: Infinity, duration: 8 }}
  >
    {/* Floating 3D Frame */}
    <div className="absolute h-full w-full bg-gradient-to-b from-gray-800 via-black to-gray-900 blur-md z-0 rounded-3xl shadow-xl"></div>

    
    {/* Frame Border with Depth */}
    <motion.div
  className="relative flex items-center justify-center md:ml-16 mt-10 md:mt-0 z-10"
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>
  {/* Circular Border */}
  <motion.div
    className="relative h-56 w-56 md:h-64 md:w-64 border-8 border-gray-500 rounded-full shadow-2xl flex items-center justify-center"
    style={{
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    }}
    animate={{ scale: [1, 1.02, 1] }}
    transition={{ repeat: Infinity, duration: 6 }}
  >
    {/* Main Image */}
    <img
      className="rounded-full h-full w-full object-cover transform hover:scale-110 transition-all duration-500"
      src="/nafi.jpeg"
      alt="photo"
    />
  </motion.div>
</motion.div>

    {/* <motion.img
      className="h-full w-full object-cover z-0 rounded-full"
      // src="/imgtwo.png"
      alt="frame"
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    /> */}
  </motion.div>
</motion.div>

    </div>
  );
};

export default Hero;
