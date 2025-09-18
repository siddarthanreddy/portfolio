import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Advanced" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: "Advanced" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: "Advanced" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: "Advanced" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: "Intermediate" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: "Intermediate" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: "Intermediate" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", level: "Intermediate" },
  { name: "Render", icon: "https://via.placeholder.com/64?text=R", level: "Intermediate" },
  { name: "Public Speaking", icon: "https://via.placeholder.com/64?text=PS", level: "Intermediate" },
  { name: "Design Thinking", icon: "https://via.placeholder.com/64?text=DT", level: "Intermediate" },
  { name: "Video Editing", icon: "https://via.placeholder.com/64?text=VE", level: "Intermediate" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-10">
        Skills
      </motion.h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-lg shadow hover:scale-105 transition"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={skill.icon} alt={skill.name} className="w-16 mx-auto mb-2" />
            <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
            <p>{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
