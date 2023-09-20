import React, { useState } from 'react';
import Slider from 'react-slick';
import { RiStarFill } from 'react-icons/ri';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Title from '../layouts/Title';
import { testimonialOne, testimonialTwo, quote } from '../../assets';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
  className="w-14 h-12 bg-white hover:bg-#FF014F duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-md cursor-pointer z-10"
  onClick={onClick}
  >
    <HiArrowRight />
  </div>

  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
  className="w-14 h-12 bg-white hover:bg-(rgb(255,1,79))duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-md cursor-pointer z-10"
  onClick={onClick}
>
  <HiArrowLeft />
</div>

  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
        <div className="w-full">
  <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
    <div className="w-full lgl:w-[35%] h-full bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
      <img
        className="h-60 md:h-32 lgl:h-72 w-full rounded-lg object-cover"
        src={testimonialOne}
        alt="testimonialOne"
      />
      <div className="w-full flex flex-col justify-end">
        <p className="text-xs uppercase text-black text-designColor tracking-wide mb-2">
          Freedom Airlines
        </p>
        <h3 className="text-2xl font-bold">Abdi Ma'alim</h3>
        <p className="text-base tracking-wide text-black text-gray-500">Manager</p>
      </div>
    </div>

    <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
      <img className="w-20 lgl:w-32" src={quote} alt="quote" />
      <div className="w-full h-[70%] py-10 bg-white rounded-lg shadow-md p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
        <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
          <div>
            <h3 className="text-xl lgl:text-2xl font-medium tracking-wide text-black">
              Responsive Redesign of a Corporate Website.
            </h3>
            <p className="text-base text-gray-400 mt-3">
              Nairobi - Mar 4, 2023 - May 10, 2023
            </p>
          </div>
          <div className="text-yellow-600 flex gap-1">
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
          </div>
        </div>
        <p className="text-base font-titleFont text-black font-medium tracking-wide leading-6 text-black">
          Redesigned a company's website to be fully responsive and mobile-friendly,
          Improved the user interface and navigation for a better user experience,
          Ensured consistent branding and design elements, and
          Implemented SEO best practices to boost organic traffic.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* ================ Slider Two ================== */}

          <div className="w-full">
  <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
    <div className="w-full lgl:w-[35%] h-full bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
      <img
        className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
        src={testimonialTwo}
        alt="testimonialTwo"
      />
      <div className="w-full flex flex-col justify-end">
        <p className="text-xs uppercase text-designColor tracking-wide mb-2">
          Naim Technologies
        </p>
        <h3 className="text-2xl text-black font-bold">Mohamed Abdi</h3>
        <p className="text-base tracking-wide text-gray-500">
          Operation Officer
        </p>
      </div>
    </div>
    <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
      <img className="w-20 lgl:w-32" src={quote} alt="quote" />
      <div className="w-full h-[70%] py-10 bg-white rounded-lg shadow-md p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
        <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
          <div>
            <h3 className="text-xl lgl:text-2xl text-black font-medium tracking-wide">
              E-commerce Website Development.
            </h3>
            <p className="text-base text-gray-600 mt-3">
              via Upwork - Dec 4, 2022 - July 20, 2023
            </p>
          </div>
          <div className="text-yellow-500 flex gap-1">
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
            <RiStarFill />
          </div>
        </div>
        <p className="text-base font-titleFont text-black font-medium tracking-wide leading-6">
          Created a responsive and user-friendly e-commerce website from scratch.
          Implemented product catalog, shopping cart, and secured payment processing.
          Optimized the website for performance and user experience.
          Integrated with third-party APIs for shipping, inventory, and payment gateways.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* ================ Slider Three ================== */}

          {/* <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Jone Duone Joe</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operation Officer
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-c
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
