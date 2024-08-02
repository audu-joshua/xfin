"use client"
import React, {useState, useEffect} from 'react'

export function WebDevHero() {
  const style = {
    bgimageMobile: {
      background: 'url("../images/bggraphic.png")  center bottom',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
    bgimageDesktop: {
      background: 'url("../images/bggraphic.png")  center bottom',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "black",
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
  return (
    <div className=' bg-cover' style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}>
      <div className='h-screen px-3 md:px-6 lg:px-12 grid items-center bg-black bg bg-opacity-35 gradient'>
      <div className='text-white'>
           <h1 className=' text-4xl md:text-6xl lg:text-7xl font-bold py-4'> Web Development </h1>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal'>At Xifin’s Enterprise, we offer tailored web services that combine technical expertise and creative innovation. Whether you need a new website, site revamp, or custom web application, our skilled team ensures your online presence looks great and performs seamlessly across all devices. </p>    

           <div className='my-8'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF7F09] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Let’s Talk </p>
           </div>
      </div>
    </div>
    </div>
  )
}

