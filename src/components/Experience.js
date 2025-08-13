import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: "Altudo",
      position: "Senior .NET Full Stack Engineer",
      location: "New York, NY",
      duration: "Nov 2021 – Jul 2025",
      achievements: [
        "Led the creation of an automotive fleet management solution using React.js, C#, and ASP.NET Core, improving operational efficiency by 42%",
        "Transformed a legacy dental practice management system into modern architecture using .NET 4/7/8 and Azure Serverless Architecture",
        "Developed robust microservices framework with C#, ASP.NET Core, and SQL Server, integrating Azure Service Bus",
        "Optimized service routing and load balancing using API Gateway patterns with Ocelot",
        "Strengthened security measures by integrating ASP.NET Core Identity and OAuth for authentication and authorization",
        "Executed modernization of outdated components using ASP.NET Core, achieving seamless migration with full data integrity",
        "Crafted secure RESTful APIs using ASP.NET Web API with comprehensive documentation via Swagger",
        "Rearchitected monolithic structure into service-oriented architecture (SOA), improving modularity and scalability",
        "Enhanced system performance through SQL Server and Azure Cosmos DB optimization, leading to 27% increase in query response times",
        "Implemented Azure Cosmos DB as globally distributed database ensuring rapid data access and high availability",
        "Utilized Azure Blob Storage alongside SQL Server for scalable data storage solutions with Azure Redis Cache",
        "Established real-time communication features using SignalR ensuring mission-critical applications maintained high availability",
        "Employed LINQ and Entity Framework, Dapper for seamless data interactions with Code First Migrations",
        "Leveraged Azure Functions for serverless computing and Azure Logic Apps for streamlined workflow automation",
        "Created interactive dashboards using D3.js and React.js for real-time performance monitoring and user engagement analysis",
        "Revamped user interface designs with user-centric approaches using Angular, React.js, and TypeScript",
        "Facilitated integrations with third-party services such as payment gateways and shipping providers",
        "Integrated Apache Kafka achieving threefold improvement in real-time data streaming and asynchronous messaging",
        "Conducted thorough code reviews achieving 50% reduction in post-deployment issues",
        "Maintained high standards through unit testing with xUnit, NUnit and Moq, adopting TDD practices",
        "Managed large-scale applications using Kubernetes and Terraform ensuring effective deployment and scaling strategies",
        "Utilized SSIS for ETL processes improving data accessibility and reporting capabilities",
        "Adopted software design best practices including DDD and SOLID principles while implementing Micro Frontends",
        "Participated in Agile SDLC environment utilizing Scrum methodology"
      ]
    },
    {
      company: "Dotdash Meredith",
      position: ".NET Full Stack Developer",
      location: "Des Moines, IA",
      duration: "Sep 2017 – Oct 2021",
      achievements: [
        "Migrated enterprise-level e-commerce web applications to ASP.NET Core 3.1, achieving 20% increase in performance",
        "Designed and developed scalable RESTful APIs using C# and Node.js enabling seamless access to product catalogs",
        "Implemented event-driven architecture utilizing RabbitMQ for asynchronous communication between microservices",
        "Utilized C# for developing high-performance server-side systems achieving 30% improvement in throughput",
        "Constructed modern e-commerce platform integrating Next.js for front-end and ASP.NET Core for backend services",
        "Developed real-time analytics dashboard using React.js, AWS Kinesis, and C# contributing to 20% increase in sales",
        "Implemented microservices architecture using C#, containerized with Docker, and orchestrated with Kubernetes",
        "Integrated third-party APIs such as Twilio for SMS notifications and WebRTC for real-time communication",
        "Migrated inter-service communication protocols from REST to gRPC reducing payload sizes by 40%",
        "Containerized applications using Docker creating isolated environments for development, testing, and production",
        "Created custom connectors in Power BI for dynamic data retrieval from e-commerce system",
        "Utilized Blazor Server and Blazor WebAssembly for administrative interfaces and client-side performance",
        "Designed and optimized MongoDB and SQL Server databases for high-volume transactional systems",
        "Developed scalable data processing pipelines and ETL workflows using C# with LINQ and Entity Framework",
        "Created React.js-based front-end integrating Redux for state management and Material-UI for responsive interface",
        "Enhanced platform security by implementing OAuth2.0 and JWT-based authentication",
        "Automated CI/CD pipelines using Azure DevOps and GitHub Actions reducing deployment errors by 30%",
        "Developed end-to-end testing suites using Cypress, Selenium, and xUnit ensuring high-quality deliverables"
      ]
    },
    {
      company: "Pacer Staffing",
      position: ".NET Developer",
      location: "Penn Wynne, PA",
      duration: "June 2013 – Aug 2017",
      achievements: [
        "Designed and developed robust e-learning platform using ASP.NET MVC deployed on Azure",
        "Constructed Angular based front-end for e-learning platform ensuring fast page loads and server-side rendering",
        "Spearheaded development of solar energy management platform using C# and Razor Web Pages",
        "Developed dynamic web applications for solar energy monitoring using C# and RESTful APIs",
        "Created C# backend for real-time energy consumption analytics utilizing Azure Data Lake achieving 25% faster processing",
        "Designed and implemented Razor Pages-based dashboard integrating Chart.js and D3.js for interactive visualizations",
        "Built Node.js microservice for processing real-time energy data integrating with Azure IoT Hub",
        "Developed robust inter-process communication framework using Azure Service Bus improving system performance by 20%",
        "Implemented multithreaded C# applications for processing high-volume energy telemetry data reducing latency by 30%",
        "Orchestrated Docker containers with Kubernetes enabling automated scaling and management of microservices",
        "Designed and maintained Azure SQL Database and PostgreSQL databases for large-scale applications",
        "Implemented Power BI for business intelligence reporting developing interactive dashboards and visualizations",
        "Developed C# module for low-level energy consumption data parsing ensuring efficient processing of telemetry data",
        "Automated infrastructure deployments using Terraform and Azure Resource Manager ensuring scalability and fault tolerance",
        "Applied Agile methodologies such as Scrum and Kanban to drive effective project management"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-2">
                    <div className="flex items-center space-x-2">
                      <FaBuilding />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaMapMarkerAlt />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <motion.div
                    key={achievementIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: achievementIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-color rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
