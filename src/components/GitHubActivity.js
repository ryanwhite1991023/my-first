import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaStar, FaEye, FaGitBranch, FaCalendarAlt } from 'react-icons/fa';

const GitHubActivity = () => {
  const [githubData, setGithubData] = useState({
    username: 'ryanwhite1846',
    repos: [],
    stats: {
      totalStars: 0,
      totalForks: 0,
      totalCommits: 0,
      languages: {}
    }
  });

  // Mock data for demonstration - replace with actual GitHub API integration
  useEffect(() => {
    const mockData = {
      username: 'ryanwhite1846',
      repos: [
        {
          name: 'portfolio-website',
          description: 'Modern React portfolio showcasing full-stack development skills',
          language: 'JavaScript',
          stars: 12,
          forks: 3,
          updated: '2024-01-15',
          url: 'https://github.com/ryanwhite1846/portfolio-website'
        },
        {
          name: 'fleet-management-api',
          description: 'ASP.NET Core API for automotive fleet management system',
          language: 'C#',
          stars: 8,
          forks: 2,
          updated: '2024-01-10',
          url: 'https://github.com/ryanwhite1846/fleet-management-api'
        },
        {
          name: 'dental-system-modernization',
          description: 'Legacy system modernization using .NET 8 and Azure',
          language: 'C#',
          stars: 15,
          forks: 5,
          updated: '2024-01-08',
          url: 'https://github.com/ryanwhite1846/dental-system-modernization'
        },
        {
          name: 'ecommerce-platform',
          description: 'Full-stack e-commerce solution with Next.js and ASP.NET Core',
          language: 'TypeScript',
          stars: 20,
          forks: 8,
          updated: '2024-01-05',
          url: 'https://github.com/ryanwhite1846/ecommerce-platform'
        }
      ],
      stats: {
        totalStars: 55,
        totalForks: 18,
        totalCommits: 1247,
        languages: {
          'C#': 45,
          'JavaScript': 30,
          'TypeScript': 15,
          'Python': 10
        }
      }
    };
    setGithubData(mockData);
  }, []);

  const topLanguages = Object.entries(githubData.stats.languages)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  return (
    <section id="github" className="section bg-gray-900 text-white">
      <div className="container">
        <motion.h2
          className="section-title text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaGithub className="inline-block mr-3 text-4xl" />
          GitHub Activity
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Explore my open-source contributions, personal projects, and coding journey on GitHub.
        </motion.p>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-1 md:grid-4 gap-6 mb-12"
        >
          <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
            <FaStar className="text-yellow-400 text-3xl mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">{githubData.stats.totalStars}</div>
            <div className="text-gray-400">Total Stars</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
            <FaGitBranch className="text-blue-400 text-3xl mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">{githubData.stats.totalForks}</div>
            <div className="text-gray-400">Total Forks</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
            <FaCode className="text-green-400 text-3xl mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">{githubData.stats.totalCommits}</div>
            <div className="text-gray-400">Total Commits</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
            <FaGithub className="text-purple-400 text-3xl mx-auto mb-3" />
            <div className="text-3xl font-bold text-white">{githubData.repos.length}</div>
            <div className="text-gray-400">Repositories</div>
          </div>
        </motion.div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Top Programming Languages</h3>
          <div className="grid grid-1 md:grid-5 gap-4">
            {topLanguages.map(([language, percentage], index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700">
                <div className="text-lg font-semibold text-white mb-2">{language}</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="text-sm text-gray-400">{percentage}%</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Featured Repositories</h3>
          <div className="grid grid-1 md:grid-2 gap-6">
            {githubData.repos.map((repo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-200">
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </h4>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="flex items-center text-gray-400">
                      <FaStar className="mr-1" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center text-gray-400">
                      <FaGitBranch className="mr-1" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {repo.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                      {repo.language}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <FaCalendarAlt className="mr-1" />
                      Updated {new Date(repo.updated).toLocaleDateString()}
                    </span>
                  </div>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
                  >
                    View Repository →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Collaborate on GitHub
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to contributing to open-source projects and collaborating with other developers. 
              Feel free to reach out if you'd like to work together on something exciting!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://github.com/${githubData.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-lg px-8 py-3 inline-flex items-center"
              >
                <FaGithub className="mr-2" />
                View My GitHub
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-secondary text-lg px-8 py-3"
              >
                Start a Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
