import React from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = ({id}) => {
  return (
    <div id={id} className="p-8 bg-gradient-to-b from-blue-100 to-white text-gray-800 text-center">
      <h2 className="text-4xl font-bold text-blue-600">Contact Me</h2>
      <div className="mt-2 h-1 w-24 mx-auto bg-blue-500 rounded-full"></div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <a
            href="mailto:nafilavt6@gmail.com"
            className="text-lg text-gray-700 hover:text-blue-500 transition"
          >
            nafilavt6@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center space-x-4">
          
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
    href="https://www.facebook.com/nafila.vt"
    className="text-blue-500 hover:text-blue-600"
    whileHover={{ y: -10, rotate: -10 }}
    whileTap={{ scale: 0.9 }}
  >
    <FontAwesomeIcon icon={faFacebookF} className="h-6 w-6 md:h-8 md:w-8" />
  </motion.a>
  <motion.a
    href="https://www.instagram.com/nafilavt6?igsh=ZjNycWM3MWZxdjUz"
    className="text-pink-500 hover:text-pink-600"
    whileHover={{ y: -10, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  >
    <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 md:h-8 md:w-8" />
  </motion.a>
  {/* <motion.a
    href="#"
    className="text-blue-300 hover:text-blue-500"
    whileHover={{ y: -10, rotate: -10 }}
    whileTap={{ scale: 0.9 }}
  >
    <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6 md:h-8 md:w-8" />
  </motion.a> */}
  <motion.a
    href="https://github.com/manal112233"
    className="text-gray-400 hover:text-gray-600"
    whileHover={{ y: -10, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
  >
    <FontAwesomeIcon icon={faGithub} className="h-6 w-6 md:h-8 md:w-8" />
  </motion.a>
</motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
