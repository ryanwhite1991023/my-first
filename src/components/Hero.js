import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Ryan Douglas White
          </h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Senior .NET Full Stack Engineer
            </p>
            
            <div className="text-lg text-gray-500 mb-8 space-y-2">
              <p>📍 2210 2nd Ave Se, Altoona, IA, 50009</p>
              <p>📧 ryanwhite1846@gmail.com</p>
              <p>📱 +1(229)235-3636</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="btn btn-primary text-lg px-8 py-4"
            >
              Learn More About Me
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary text-lg px-8 py-4"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="mailto:ryanwhite1846@gmail.com"
              className="text-gray-600 hover:text-primary-color transition-colors duration-200"
              title="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="tel:+12292353636"
              className="text-gray-600 hover:text-primary-color transition-colors duration-200"
              title="Phone"
            >
              <FaPhone size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
