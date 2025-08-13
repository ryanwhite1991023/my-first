import React from 'react';
import { motion } from 'framer-motion';
import { FaMedium, FaDev, FaLinkedin, FaCalendarAlt, FaClock, FaTag } from 'react-icons/fa';

const Blog = () => {
  const blogPosts = [
    {
      title: "Modernizing Legacy .NET Applications with Azure",
      excerpt: "A comprehensive guide on transforming outdated .NET applications into cloud-native, scalable solutions using Azure services and modern development practices.",
      category: "Azure",
      readTime: "8 min read",
      date: "2024-01-15",
      platform: "Medium",
      url: "https://medium.com/@ryanwhite1846/modernizing-legacy-net-applications-with-azure",
      tags: [".NET", "Azure", "Legacy Systems", "Cloud Migration"]
    },
    {
      title: "Building Scalable Microservices with ASP.NET Core",
      excerpt: "Learn how to design and implement robust microservices architecture using ASP.NET Core, Docker, and Kubernetes for enterprise applications.",
      category: "Microservices",
      readTime: "12 min read",
      date: "2024-01-10",
      platform: "Dev.to",
      url: "https://dev.to/ryanwhite1846/building-scalable-microservices-with-aspnet-core",
      tags: ["ASP.NET Core", "Microservices", "Docker", "Kubernetes"]
    },
    {
      title: "Performance Optimization in React.js Applications",
      excerpt: "Advanced techniques for optimizing React.js applications, including code splitting, lazy loading, and performance monitoring strategies.",
      category: "React",
      readTime: "10 min read",
      date: "2024-01-05",
      platform: "LinkedIn",
      url: "https://linkedin.com/pulse/performance-optimization-reactjs-applications-ryan-white",
      tags: ["React.js", "Performance", "JavaScript", "Frontend"]
    },
    {
      title: "Database Design Patterns for High-Performance Applications",
      excerpt: "Explore database design patterns and optimization strategies for building high-performance applications with SQL Server and Azure Cosmos DB.",
      category: "Database",
      readTime: "15 min read",
      date: "2024-01-01",
      platform: "Medium",
      url: "https://medium.com/@ryanwhite1846/database-design-patterns-for-high-performance-applications",
      tags: ["SQL Server", "Azure Cosmos DB", "Database Design", "Performance"]
    }
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'Medium':
        return <FaMedium className="text-green-600" />;
      case 'Dev.to':
        return <FaDev className="text-blue-600" />;
      case 'LinkedIn':
        return <FaLinkedin className="text-blue-700" />;
      default:
        return <FaMedium className="text-gray-600" />;
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Azure': 'bg-blue-100 text-blue-800',
      'Microservices': 'bg-purple-100 text-purple-800',
      'React': 'bg-cyan-100 text-cyan-800',
      'Database': 'bg-green-100 text-green-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="blog" className="section bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Writing & Insights
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sharing knowledge and insights from my experience in full-stack development, cloud architecture, and modern software engineering practices.
        </motion.p>

        <div className="grid grid-1 md:grid-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500">
                    {getPlatformIcon(post.platform)}
                    <span className="text-sm">{post.platform}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-color transition-colors duration-200">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                      <FaTag className="mr-1 text-xs" />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <FaClock className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-color hover:text-secondary-color transition-colors duration-200 font-medium"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Content Coming Soon
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm constantly learning and sharing insights about modern software development, 
              cloud architecture, and best practices. Follow me on these platforms to stay updated!
            </p>
            
            <div className="grid grid-1 md:grid-3 gap-6 mb-8">
              <div className="text-center p-4">
                <FaMedium className="text-4xl text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Medium</h4>
                <p className="text-sm text-gray-600">In-depth technical articles</p>
              </div>
              <div className="text-center p-4">
                <FaDev className="text-4xl text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Dev.to</h4>
                <p className="text-sm text-gray-600">Developer community insights</p>
              </div>
              <div className="text-center p-4">
                <FaLinkedin className="text-4xl text-blue-700 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">LinkedIn</h4>
                <p className="text-sm text-gray-600">Professional insights & tips</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://medium.com/@ryanwhite1846"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-8 py-3"
              >
                Follow on Medium
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary px-8 py-3"
              >
                Suggest a Topic
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
