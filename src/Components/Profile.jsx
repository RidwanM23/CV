import React from "react";
import pp from "../assets/pp.jpg"
import { Card } from "flowbite-react";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Profile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
  }, []);
  return (
    <div id="profile" className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-400 flex items-center justify-center" data-aos="fade-right">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 p-6">
        {/* Left Section */}
        <div className="text-left">
          <p className="text-sm font-medium text-gray-700">Hello There</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            My Name is
            <br />
            <span className="text-black">Ridwan Muhammad Ramdan</span>
          </h1>
          <p className="text-xl mt-4 font-medium text-gray-900">
            I’m a <span className="font-bold">UI/UX Designer</span>
          </p>
        </div>

        {/* Right Section */}
        <div>
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
            <img
              src={pp}
              alt="Artwork"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
