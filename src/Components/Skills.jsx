import React from 'react';

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-400">

      {/* Kontainer Icon */}
        {/* Kolom Kiri */}
        <div className="flex flex-col items-start space-y-4 float-left grid grid-cols-2 gap-8">
          <img
            src="public/img/php.png"
            alt="PHP"
            className="w-12 h-12"
          />
          <img
            src="path_to_mysql_icon.png"
            alt="MySQL"
            className="w-12 h-12"
          />
          <img
            src="path_to_laravel_icon.png"
            alt="Laravel"
            className="w-12 h-12"
          />
          <img
            src="path_to_tailwind_icon.png"
            alt="Tailwind"
            className="w-12 h-12"
          />
        </div>

            <h1 className="text-4xl font-semibold text-gray-800 mb-8">Skills</h1>
        {/* Kolom Kanan */}
        <div className="flex flex-col items-end space-y-4 float-right">
          <img
            src="public/img/html.png"
            alt="HTML"
            className="w-12 h-12"
          />
          <img
            src="pulic/img/css.png"
            alt="CSS"
            className="w-12 h-12"
          />
          <img
            src="public/img/javascript.png"
            alt="JavaScript"
            className="w-12 h-12"
          />
          <img
            src="public/img/"
            alt="Bootstrap"
            className="w-12 h-12"
          />
        </div>
      </div>

  );
};

export default Skills;
