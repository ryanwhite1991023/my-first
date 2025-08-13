import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-4xl text-primary-color" />,
      title: "12+ Years Experience",
      description: "Extensive experience in designing, developing, and maintaining complex, scalable applications"
    },
    {
      icon: <FaRocket className="text-4xl text-primary-color" />,
      title: "Full Stack Expertise",
      description: "Proficient in both backend (.NET, C#) and frontend (React.js, Angular, Blazor) technologies"
    },
    {
      icon: <FaUsers className="text-4xl text-primary-color" />,
      title: "Team Leadership",
      description: "Led cross-functional teams and collaborated effectively to drive project success"
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary-color" />,
      title: "Problem Solver",
      description: "Strong problem-solving abilities with attention to detail and continuous learning mindset"
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-2 items-start gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Professional Summary
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Accomplished Senior Software Engineer with over 12 years of experience in designing, developing, 
              and maintaining complex, scalable, and high-performance applications. Proficient in both backend 
              and frontend technologies, including C#, .NET frameworks, React.js, Angular and Blazor.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Demonstrated expertise in microservices architecture, RESTful APIs, and cloud platforms such as 
              AWS and Azure. Skilled in utilizing modern development tools and methodologies like Agile, DevOps, 
              and CI/CD to deliver robust software solutions.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Adept at collaborating with cross-functional teams to drive project success and improve user 
              experience. Strong problem-solving abilities, attention to detail, and a commitment to continuous 
              learning and professional growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Key Highlights
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Education
          </h3>
          <div className="bg-gray-50 rounded-lg p-6 inline-block">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Bachelor of Computer Science
            </h4>
            <p className="text-gray-600 text-lg">
              Iowa State University | Ames, IA | Aug 2009 – May 2013
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
