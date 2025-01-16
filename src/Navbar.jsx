import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close the mobile menu
    }
  };

  return (
    <div className="bg-black">
      <div className="flex items-center justify-between px-4 py-2">
        <a href="#home" className="text-xl md:text-2xl font-bold text-blue-500">
          Portfolio
        </a>

        {/* Navigation Menu for Desktop */}
        <nav className="hidden md:flex gap-5 text-blue-500">
          <button onClick={() => scrollToSection('home')}>Home</button>
          {/* <button onClick={() => scrollToSection('about')}>About</button> */}
          {/* <button onClick={() => scrollToSection('skills')}>Skills</button> */}
          <button onClick={() => scrollToSection('resume')}>Resume</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button onClick={toggleMenu} className="block md:hidden text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black text-blue-500 px-4 py-2 flex flex-col gap-3">
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
