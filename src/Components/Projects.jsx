import React from 'react';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from 'aos';

const Projects = () => {
  const projects = [
    { name: 'Project Sistem Akademis Sekolah', img: '/public/img/project1.png', description: 'Project Besar Pertama' },
    { name: 'Project B', img: 'https://via.placeholder.com/300', description: 'A cool project about Y.' },
    { name: 'Project C', img: 'https://via.placeholder.com/300', description: 'A cool project about Z.' },
  ];

  return (

    <section id="projects" className="py-20 bg-gradient-to-r from-gray-200 to-gray-400" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="p-4 bg-white rounded shadow-md">
              <img src={project.img} alt={project.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-bold mb-2">{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
