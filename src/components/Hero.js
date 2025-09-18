import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold mb-4">Hi, I'm Siddarthan Reddy</h2>
        <p className="text-xl mb-6">Full Stack Developer | Programmer | Tech Enthusiast</p>
        <a href="#projects" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
