import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-center text-white">
      <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
