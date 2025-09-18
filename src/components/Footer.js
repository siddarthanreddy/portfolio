import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-6 text-center shadow mt-20">
      <p>© 2025 Siddarthan Reddy</p>
      <div className="flex justify-center space-x-6 mt-2">
        <a href="https://github.com/siddarthanreddy" target="_blank" className="text-gray-800 hover:text-green-600">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/siddarthan-reddy-4387a5267" target="_blank" className="text-gray-800 hover:text-green-600">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="mailto:siddarthanreddy0055@gmail.com" className="text-gray-800 hover:text-green-600">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
