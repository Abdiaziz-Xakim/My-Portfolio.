import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010-2023</p>
          <h2 className="text-3xl md:text-4xl text-black font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Information Technology"
            subTitle="KCA University (2022 - Current)"
            result="3.90/4"
            des="Pursuing BSc in Information Technology at KCA University, actively engaging in programming, software development, and system analysis for comprehensive industry preparation."
          />
          <ResumeCard
            title="Web Development"
            subTitle="Samaha Technologies (2020 - 2022)"
            result="4.75/5"
            des="Dynamic student experience, blending rigorous coursework and active campus engagement for valuable insights and holistic grow"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Horizon Secondary School (2017 - 2020)"
            result="5.00/5"
            des="Navigating through education with enthusiasm, I embraced learning opportunities, collaborated with peers, and cultivated skills for a promising future."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Update</p>
          <h2 className="text-3xl md:text-4xl text-black  font-bold">Job Experience</h2>
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
    </motion.div>
  );
}

export default Education