import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ryan Douglas White
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Senior .NET Full Stack Engineer
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Passionate about creating innovative, scalable solutions that drive business value. 
              Always eager to learn new technologies and take on challenging projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Experience</h4>
                <p>12+ Years</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Technologies</h4>
                <p>50+ Skills</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Projects</h4>
                <p>100+ Delivered</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Industries</h4>
                <p>10+ Sectors</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Ryan Douglas White. All rights reserved.
              </div>
              <div className="text-gray-400 text-sm flex items-center">
                Made with <FaHeart className="text-red-500 mx-1" /> using React & Framer Motion
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="fixed bottom-8 right-8 bg-primary-color hover:bg-secondary-color text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
          title="Scroll to top"
        >
          <FaArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
