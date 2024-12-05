import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 fixed w-full shadow-lg z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`hidden md:flex md:flex-row space-x-4`}>
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#education" className="hover:text-gray-400">Education</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="flex flex-col space-y-2">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#education" className="hover:text-gray-400">Education</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
