import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaLinkedin, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Senior Product Manager",
      company: "Altudo",
      content: "Ryan is an exceptional engineer who consistently delivers high-quality solutions. His expertise in .NET and modern web technologies helped us transform our legacy systems into scalable, cloud-native applications. His attention to detail and problem-solving skills are outstanding.",
      rating: 5,
      linkedin: "https://linkedin.com/in/sarah-johnson",
      image: "/images/testimonial-1.jpg"
    },
    {
      name: "Michael Chen",
      position: "Technical Lead",
      company: "Dotdash Meredith",
      content: "Working with Ryan was a game-changer for our e-commerce platform. His deep understanding of microservices architecture and performance optimization resulted in significant improvements in our system's reliability and user experience.",
      rating: 5,
      linkedin: "https://linkedin.com/in/michael-chen",
      image: "/images/testimonial-2.jpg"
    },
    {
      name: "Emily Rodriguez",
      position: "Engineering Manager",
      company: "Pacer Staffing",
      content: "Ryan's technical expertise and leadership qualities made him an invaluable team member. He consistently delivered complex solutions on time and mentored junior developers effectively. His contributions significantly improved our development processes.",
      rating: 5,
      linkedin: "https://linkedin.com/in/emily-rodriguez",
      image: "/images/testimonial-3.jpg"
    }
  ];

  return (
    <section id="testimonials" className="section bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Colleagues Say
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Don't just take my word for it. Here's what my colleagues and clients have to say about working with me.
        </motion.p>

        <div className="grid grid-1 md:grid-2 lg:grid-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <div className="relative mb-4">
                <FaQuoteLeft className="text-blue-200 text-2xl absolute -top-2 -left-1" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
                >
                  <FaLinkedin className="mr-2" />
                  View Profile
                </a>
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
          <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join the list of satisfied clients and colleagues who have experienced the quality of my work firsthand.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-primary text-lg px-8 py-3"
            >
              Start a Conversation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
