import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFilePdf, FaEye, FaLinkedin, FaGithub } from 'react-icons/fa';

const ResumeDownload = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Ryan White.docx'; // Update this path to your actual resume file
    link.download = 'Ryan_White_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/Ryan White.docx', '_blank');
  };

  return (
    <section id="resume" className="section bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title">Get My Resume</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Download my comprehensive resume to learn more about my experience, skills, and achievements. 
            Perfect for recruiters, hiring managers, and potential clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid grid-1 md:grid-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ryan Douglas White
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Senior .NET Full Stack Engineer with 12+ years of experience in building scalable, 
                  cloud-native applications and modernizing legacy systems.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-24">Experience:</span>
                    <span>12+ Years</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-24">Specialties:</span>
                    <span>.NET, React, Azure, Microservices</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-24">Location:</span>
                    <span>Altoona, IA</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-24">Availability:</span>
                    <span>Open to Opportunities</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="skill-tag">C#</span>
                  <span className="skill-tag">ASP.NET Core</span>
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">Microservices</span>
                  <span className="skill-tag">SQL Server</span>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white mb-6">
                  <FaFilePdf className="text-6xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Professional Resume</h4>
                  <p className="text-blue-100">Microsoft Word Format</p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleDownload}
                    className="w-full btn btn-primary text-lg py-3 flex items-center justify-center"
                  >
                    <FaDownload className="mr-2" />
                    Download Resume
                  </button>
                  
                  <button
                    onClick={handleViewResume}
                    className="w-full btn btn-secondary text-lg py-3 flex items-center justify-center"
                  >
                    <FaEye className="mr-2" />
                    View Resume
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3">Also available on:</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://linkedin.com/in/ryanwhite1846"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      title="LinkedIn Profile"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href="https://github.com/ryanwhite1846"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                      title="GitHub Profile"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Need More Information?
            </h3>
            <p className="text-gray-600 mb-4">
              If you'd like to discuss specific opportunities or have questions about my experience, 
              I'd be happy to schedule a call or meeting.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary px-6 py-2"
            >
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeDownload;
