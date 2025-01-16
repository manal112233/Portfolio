import React from 'react';
import { motion } from 'framer-motion';

const About = ({ id }) => {
  return (
    <div id={id} className="bg-gradient-to-b from-blue-100 to-white py-20 px-8 md:px-20">
      {/* Heading Section */}
      <div className="text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="mt-2 h-1 w-24 mx-auto bg-blue-500 rounded-full"
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
          className="text-lg md:text-xl leading-relaxed text-gray-800"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          Hi! I'm <span className="font-semibold text-blue-600">Nafila V T</span>. I believe in learning, growing, and staying determined to achieve my goals. My journey has been full of experiences that shaped who I am today.
        </motion.p>

        {/* Storytelling paragraph 2 */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-800"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I completed my B.Tech in Electrical and Electronics Engineering (EEE) at Government Engineering College, Idukki, in 2016. After graduating, I worked as an Office Assistant and gained hands-on training with Kerala State Electricity Board (KSEB). Later, I prepared for government exams like the Railway Loco Pilot exam and successfully cleared two stages.
        </motion.p>

        {/* Storytelling paragraph 3 */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-800"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          In 2020, I got married, and in 2022, I became a mother. While balancing family responsibilities, I have been working as a <span className="font-semibold text-blue-600">Subject Matter Expert in Mathematics</span> at Chegg India. After my delivery, I decided to follow my dream of becoming a Full Stack Developer. I started learning the MERN stack (MongoDB, Express, React, Node.js) and worked on projects while caring for my child. Now, I am interning as a MERN stack developer, gaining valuable experience in building web applications.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
