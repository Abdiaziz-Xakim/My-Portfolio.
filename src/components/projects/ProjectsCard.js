import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src }) => {
  return (
<div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-white flex flex-col group hover:shadow-xl hover:from-gray-900 hover:gray-900 transition-colors duration-1000">

<div className="w-full h-[80%] overflow-hidden rounded-lg">
  <img
    className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
    src={src}
    alt="src"
  />
</div>

<div className="w-full mt-5 flex flex-col gap-6">
  <div>
    <div className="flex items-center justify-between">
      <h3 className="text-base uppercase text-black font-normal">
        {title}
      </h3>
      <div className="flex gap-2">
        <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
          <BsGithub />
        </span>
        <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
          <FaGlobe />
        </span>
      </div>
    </div>
    <p className="text-sm text-black tracking-wide mt-3 hover:text-gray-500 duration-300">
      {des}
    </p>
  </div>
</div>

</div>

  );
}

export default ProjectsCard