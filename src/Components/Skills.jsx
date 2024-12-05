import React from 'react';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from 'aos';

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []);
  
  const skills = [
    { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEX////G6fxsyvk/v/g4vfhhyPmz4vuK1PoAtfckufgvu/hTxPn6/f+h2/tGwPjS7v255fxMwviT1/qn3vsZjXhWAAAAbElEQVR4AeWOCQqAMAwEq11r06b3//9qAwiI0QfowHINC2N+yLJabE53uycgUGTtF11CmDqLLVdZ57iJhSt9V+4cCQB5a1RGJgr9FrrW866GbmpoGylISlNC3RxnsbY+hLbX0GSJIKE6zOajHN4ZA8/fNs9XAAAAAElFTkSuQmCC' },
    { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Laravel', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpZ8-IOtzlfXVDWcadW_cOjSGX9MKTFYibg&s' },
    { name: 'MySql', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Css', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-200 to-gray-400" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 bg-white rounded shadow-md">
              <img src={skill.img} alt={skill.name} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
