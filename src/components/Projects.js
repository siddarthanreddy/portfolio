import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Tech Prep Hub",
    description: "A learning platform covering Python, Java, and more. Useful for students to learn programming effectively.",
    tech: ["Python", "Flask", "MySQL", "HTML/CSS/JS", "Tailwind"],
    github: "https://github.com/siddarthanreddy/tech-prep-hub",
    demo: "https://tech-prep-hub-djse.onrender.com/"
  },
  {
    name: "Ecommerce Website",
    description: "A full-featured ecommerce website built with HTML, CSS, JS, and Flask for backend functionality.",
    tech: ["HTML/CSS/JS", "Flask", "Python"],
    github: "https://github.com/siddarthanreddy/ecommerce-website",
    demo: "https://ecommerce-3-q08y.onrender.com/"
  },
  {
    name: "Portfolio Website",
    description: "This very portfolio website showcasing my skills, projects, and contact info. Built with React, Tailwind CSS, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/siddarthanreddy/portfolio-website",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-10">
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src="https://via.placeholder.com/400x200?text=Project" alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" className="text-green-600 font-semibold hover:underline">View Code</a>
                <a href={project.demo} target="_blank" className="text-green-600 font-semibold hover:underline">Live Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
