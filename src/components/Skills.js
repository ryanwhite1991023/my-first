import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C#", "HTML5", "CSS", "JavaScript", "TypeScript", "XML", "GraphQL", "SQL", "VBScript", "C", "C++", "Python"]
    },
    {
      title: "Web Development",
      skills: [".NET", ".NET Core", "ASP.NET MVC", ".NET 4/5/6/7/8", "WinForms", "ASP.NET API", "PowerShell", "Blazor", "Razor", "Entity Framework", "Dapper", "LINQ", "React.js", "Angular", "Bootstrap", "Tailwind CSS", "Material-UI", "D3.js", "jQuery"]
    },
    {
      title: "Databases",
      skills: ["SQL Server", "PostgreSQL", "MongoDB", "Azure CosmosDB", "SQLite", "Couchbase"]
    },
    {
      title: "Cloud Technologies",
      skills: ["AWS", "Azure", "GCP"]
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Github Actions", "Azure DevOps"]
    },
    {
      title: "Messaging Systems",
      skills: ["Amazon SQS", "SNS", "RabbitMQ", "WebSocket", "Apache Kafka", "SignalR", "Redis", "Azure Service Bus"]
    },
    {
      title: "Testing",
      skills: ["xUnit", "NUnit", "Moq", "Selenium", "Postman", "Swagger"]
    },
    {
      title: "Other",
      skills: ["Git", "Github", "Bitbucket", "Jira", "Confluence", "Kanban", "Scrum", "Agile", "Microservice", "SOA", "ETL", "TDD", "Dependency Injection", "Power BI", "SSIS"]
    }
  ];

  return (
    <section id="skills" className="section bg-white">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Key Competencies
          </h3>
          <div className="grid grid-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">
                 Architecture & Design
              </h4>
              <p className="text-blue-800">
                Microservices, SOA, Domain-Driven Design (DDD), SOLID principles, API Gateway patterns, Event-driven architecture
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h4 className="text-lg font-semibold text-green-900 mb-3">
                 Performance & Scalability
              </h4>
              <p className="text-green-800">
                Database optimization, caching strategies, load balancing, containerization, cloud-native development
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">
                 Security & Quality
              </h4>
              <p className="text-purple-800">
                OAuth, JWT, RBAC, MFA, unit testing, TDD, code reviews, static analysis, CI/CD automation
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="text-lg font-semibold text-orange-900 mb-3">
                 Data & Analytics
              </h4>
              <p className="text-orange-800">
                ETL processes, data warehousing, real-time analytics, Power BI, business intelligence reporting
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
