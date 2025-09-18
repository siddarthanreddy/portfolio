import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-bold text-center mb-10">
        Contact Me
      </motion.h2>
      <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow space-y-6">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400" />
        <textarea placeholder="Your Message" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
        <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-500 transition">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
