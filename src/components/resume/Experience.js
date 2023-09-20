import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl text-black  font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2022 - Present)"
            result="KENYA"
            des="Leading as a senior software engineer, I drive innovation and technical excellence in projects, contributing to Soft Search's success."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Samaha Technologies - (2022 - 2023)"
            result="KENYA"
            des="An increasingly favored hub with a rising pool of locally trained, skilled graduates, obtaining positions in Malaysia presents challenges."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Smart Creatives Solutions - (2022 - 2023)"
            result="KENYA"
            des="As a senior front-end developer, I shape captivating digital experiences, driving innovation and excellence at Smart Creatives."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl text-black  font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="NAIROBI"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
           <ResumeCard
            title="Web Developer & Instructor"
            subTitle="Samaha Technologies - (2022 - 2023)"
            result="KENYA"
            des="An increasingly favored hub with a rising pool of locally trained, skilled graduates, obtaining positions in Malaysia presents challenges."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="SHEIKH KHALID GROUP OF SCHOOLS (2021 - 2022)"
            result="NAIROBI"
            des="Nurturing young minds as a dedicated school teacher, fostering knowledge, skills, and personal growth in each student."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
