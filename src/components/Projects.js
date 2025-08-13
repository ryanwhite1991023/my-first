import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaImage, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      name: "WeDo.lu",
      url: "https://wedo.lu",
      description: "A comprehensive platform showcasing innovative solutions and services. This project demonstrates modern web development practices and user experience design.",
      technologies: ["React.js", "ASP.NET Core", "Azure", "SQL Server"],
      category: "Web Platform",
      images: [
        "/images/wedo-lu-1.png",
        "/images/wedo-lu-2.png",
        "/images/wedo-lu-3.png"
      ]
    },
    {
      name: "HyperHost.pt",
      url: "http://www.hyperhost.pt",
      description: "Hosting and web services platform built with modern technologies, featuring scalable infrastructure and robust performance optimization.",
      technologies: [".NET", "Angular", "Azure", "Docker"],
      category: "Hosting Platform",
      images: [
        "/images/hyperhost-pt-1.png",
        "/images/hyperhost-pt-2.png",
        "/images/hyperhost-pt-3.png"
      ]
    },
    {
      name: "Vervoe.com",
      url: "https://vervoe.com",
      description: "Advanced hiring and assessment platform that leverages AI and modern web technologies to streamline the recruitment process.",
      technologies: ["React.js", "Node.js", "AWS", "MongoDB"],
      category: "HR Tech Platform",
      images: [
        "/images/vervoe-1.png",
        "/images/vervoe-2.png",
        "/images/vervoe-3.png"
      ]
    },
    {
      name: "Heckenschnitt.com",
      url: "https://heckenschnitt.com",
      description: "Specialized platform showcasing expertise in specific domain solutions, built with modern web standards and responsive design.",
      technologies: [".NET Core", "Blazor", "Azure", "SQL Server"],
      category: "Specialized Platform",
      images: [
        "/images/heckenschnitt-1.png",
        "/images/heckenschnitt-2.png",
        "/images/heckenschnitt-3.png"
      ]
    }
  ];

  const featuredProjects = [
    {
      title: "Automotive Fleet Management Solution",
      description: "Led the creation of a comprehensive fleet management solution that improved operational efficiency by 42% through advanced analytics and real-time tracking capabilities.",
      technologies: ["React.js", "C#", "ASP.NET Core", "Azure Cosmos DB", "SignalR"],
      impact: "42% improvement in operational efficiency",
      images: [
        "/images/fleet-management-1.png",
        "/images/fleet-management-2.png",
        "/images/fleet-management-3.png"
      ]
    },
    {
      title: "Dental Practice Management System",
      description: "Transformed a legacy dental practice management system into modern architecture, achieving seamless migration with full data integrity and enhanced patient engagement.",
      technologies: [".NET 4/7/8", "Angular", "Azure Serverless", "SQL Server", "Azure Service Bus"],
      impact: "Seamless legacy system modernization",
      images: [
        "/images/dental-system-1.png",
        "/images/dental-system-2.png"
      ]
    },
    {
      title: "E-commerce Platform",
      description: "Developed a modern e-commerce platform integrating Next.js frontend with ASP.NET Core backend, achieving 20% performance improvement and enhanced user experience.",
      technologies: ["Next.js", "ASP.NET Core", "Entity Framework", "SQL Server", "Docker"],
      impact: "20% increase in performance",
      images: [
        "/images/ecommerce-1.png",
        "/images/ecommerce-2.png",
        "/images/ecommerce-3.PNG"
      ]
    }
  ];

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="section bg-gray-50">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Project Screenshots */}
              {project.images && project.images.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                    Project Screenshots
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                      {project.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-200"
                          onClick={() => openImageModal(image)}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full aspect-video object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium">
                              Click to view
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-green-800 font-medium">
                  <span className="font-semibold">Impact:</span> {project.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Notable Work
          </h3>
          <div className="grid grid-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.name}
                    </h4>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-color hover:text-secondary-color transition-colors duration-200"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Screenshots */}
                {project.images && project.images.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Screenshots
                    </h5>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {project.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative group cursor-pointer flex-shrink-0"
                          onClick={() => openImageModal(image)}
                        >
                          <img
                            src={image}
                            alt={`${project.name} screenshot ${imgIndex + 1}`}
                            className="w-20 h-16 object-cover rounded border border-gray-200"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 text-xs font-medium">
                              View
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="skill-tag text-xs">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              With over 12 years of experience in full-stack development, I've successfully delivered 
              complex solutions across various industries. Let's discuss how we can bring your vision to life.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary text-lg px-8 py-3"
            >
              Let's Connect
            </button>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <FaTimes size={24} />
            </button>
            <div className="bg-gray-100 rounded-lg p-4">
              <img
                src={selectedImage}
                alt="Selected project screenshot"
                className="max-h-[75vh] w-auto rounded"
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
