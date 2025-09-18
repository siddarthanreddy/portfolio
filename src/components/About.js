import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-10">About Me</motion.h2>
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:flex md:items-center md:space-x-10">
        <img src="https://via.placeholder.com/250" alt="Siddarthan Reddy" className="w-64 rounded-full mx-auto md:mx-0 mb-6 md:mb-0 shadow-lg" />
        <div>
          <p className="text-lg leading-relaxed">
            I’m Siddarthan Reddy, a passionate Full Stack Developer with expertise in building responsive and dynamic web applications. I enjoy combining creativity and technology to deliver intuitive user experiences.
          </p>
          <p className="mt-4 text-lg">
            Skilled in Python, JavaScript, React, Flask, and modern web tools, I love solving problems, sharing knowledge, and creating digital solutions that make an impact.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
