"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const style = {
    bgimageMobile: {
      background: 'url("./images/heromobile.png") center bottom',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
    bgimageDesktop: {
      background: 'url("./images/heroDesktop.png") center',
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

  const handleRippleEffect = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'absolute rounded-full bg-white opacity-50';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.transform = 'scale(0)';
    ripple.style.transition = 'transform 0.5s, opacity 1s';
    
    event.currentTarget.appendChild(ripple);

    setTimeout(() => {
      ripple.style.transform = 'scale(1)';
    }, 0);

    setTimeout(() => {
      ripple.remove();
    }, 600); // Duration of ripple effect
  };

  return (
    <div className='z-30 grid items-end h-full md:h-screen py-24 px-[20px] md:px-[30px] mt-[-30px] xl:px-[97px]'
      style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}
    >
      <div className='text-white '>
        <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold py-4'>Pixel Genius</h1>
        <p className='text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[55%] font-normal'>
          Where Ai-Powered creativity meets digital innovation. Transforming brands with intelligent design.
        </p>

        <div className='my-8 relative overflow-hidden'>
          <Link
            className='relative py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
            href="/services"
            onClick={handleRippleEffect}
            style={{ overflow: 'hidden' }}
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className='hidden lg:mt-4 md:grid grid-flow-col text-center w-full border border-solid border-white border-opacity-35 justify-stretch'>
        <Link href={"/services/webDev"} className='p-4 border border-solid border-white text-white text-opacity-35 hover:text-opacity-100 hover:bg-[#2F2E2E] cursor-pointer text-base border-opacity-35'>Website Design</Link>
        <Link href={"/services/graphicdesign"} className='p-4 text-white text-opacity-35 border border-solid border-white hover:text-opacity-100 text-base border-opacity-35 hover:bg-[#2F2E2E] cursor-pointer'>Graphic Design</Link>
        <Link href={"/services/webDev"} className='p-4 text-white text-opacity-35 hover:text-opacity-100 border border-solid border-white text-base border-opacity-35 hover:bg-[#2F2E2E] cursor-pointer'>Website Development</Link>
        <Link href={"/services/crypto"} className='p-4 text-white text-opacity-35 border border-solid border-white hover:text-opacity-100 text-base border-opacity-35 hover:bg-[#2F2E2E] cursor-pointer'>Crypto Exchange</Link>
      </div>
    </div>
  );
}
