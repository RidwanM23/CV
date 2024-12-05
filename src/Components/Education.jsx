import React from 'react';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from 'aos';

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  return (
    <section id="education" className="py-20 bg-gradient-to-r from-gray-200 to-gray-400" data-aos="fade-right">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded shadow-md">
            <h3 className="font-bold">Pengembangan Perangkay Lunak</h3>
            <p>SMK Prakarya Internasional 2023-2025</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
