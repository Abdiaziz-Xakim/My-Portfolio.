import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Replicated and customized a social media platform, mirroring key features while adding unique value for enhanced user engagement."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Designed and developed an e-commerce website, providing a user-friendly interface for seamless browsing, purchasing, and secure transactions."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Engineered a dynamic chatting app, facilitating real-time communication and fostering connections through intuitive design and seamless functionality."
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Engineered a sophisticated social media clone, capturing the essence of popular platforms while infusing innovation for a distinctive user experience."
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Created a robust e-commerce website, integrating user-friendly design with secure transactions for a seamless shopping experience."
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Developed an interactive chatting app, enabling real-time communication with intuitive design and smooth functionality for seamless conversations."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects