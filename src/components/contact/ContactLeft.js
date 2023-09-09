import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Abdiaziz Mohamed</h3>
        <p className="text-lg font-normal text-gray-400">
          Frontend Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        As a senior frontend developer, I excel in creating captivating user interfaces and experiences. My mastery of frontend technologies ensures polished and user-friendly web applications. I'm passionate about responsive design, performance optimization, and accessibility, crafting seamless digital experiences that leave a lasting impact.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText"><a href='+254721707044'>+254721707044</a></span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">abdiaziz.xakim@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/Abdiaziz.xakim" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/abdiazizsalan90?t=46HHN6ej4nhY5a1kl_3ObA&s=09" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/abdiaziz-xakim/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </div>
  );
}

export default ContactLeft