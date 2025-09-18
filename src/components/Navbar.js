import React from "react";

const Navbar = () => {
  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-green-600">Siddarthan Reddy</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-green-600">About</a></li>
            <li><a href="#skills" className="hover:text-green-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-green-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
