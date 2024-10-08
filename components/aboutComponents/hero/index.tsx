"use client"
import React, { useState, useEffect } from 'react';

export default function AboutHero() {

  const style = {
    bgimageMobile: {
      background: 'url("./images/aboutbgmoblie.png") center bottom',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
    bgimageDesktop: {
      background: 'url("./images/aboutbg.png") center bottom',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "rgba(64, 121, 155, 0.2)",
    },
  };

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const whatsappUrl = 'https://wa.me/+447378201108?text=Hello%20I%20would%20like%20to%20chat%20with%20you!'; // Replace YOUR_PHONE_NUMBER with your actual number

  return (
    <div className='z-30 grid items-end h-full md:h-screen py-24 px-[20px] md:px-[30px] mt-[-30px] xl:px-[97px]' 
         style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}
    >
      <div className='text-white lg:-mt-16'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold py-4'> We are Trusted </h1>
        <p className='text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[80%] font-normal'>
          At XIFIN Enterprise, we’re a team of innovators passionate about harnessing technology to drive business success. With combined expertise and a customer-centric approach, we deliver cutting-edge solutions and dedicated support. Our values prioritize excellence, integrity, and customer satisfaction. We’re committed to staying ahead of the curve and making a positive impact. Trust us to shape the future of your business.
        </p>

        <div className='my-8'>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center'>
              Let’s Talk
            </p>
          </a>
        </div>
      </div>

      <div className='hidden lg:mt-4 md:grid grid-flow-col text-center w-full border border-solid border-white border-opacity-35 justify-stretch'>
        <p className='p-4 border border-solid border-white text-white text-opacity-35 hover:text-opacity-100 hover:bg-[#2F2E2E] cursor-pointer text-base border-opacity-35'>
          Website Design
        </p>
        <p className='p-4 text-white text-opacity-35 border border-solid border-white hover:text-opacity-100 text-base border-opacity-35 hover:bg-[#2F2E2E] cursor-pointer'>
          Graphic Design
        </p>
        <p className='p-4 text-white text-opacity-35 hover:text-opacity-100 border border-solid border-white text-base border-opacity-35 hover:bg-[#2F2E2E] cursor-pointer'>
          Website Development
        </p>
        <p className='p-4 text-white text-opacity-35 border border-solid border-white hover:text-opacity-100 text-base border-opacity-35 hover:bg-[#2F2E2E] cursor-pointer'>
          Crypto Exchange
        </p>
      </div>
    </div>
  );
}
