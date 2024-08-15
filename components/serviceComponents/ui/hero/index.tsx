"use client"
import React, {useState, useEffect} from 'react'

export function UiUxHero() {
  const style = {
    bgimageMobile: {
      background: 'url("../images/uiuxMobile.png")  center bottom',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
    bgimageDesktop: {
      background: 'url("../images/uiuxDesktop.png")  center bottom',
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
      <div className='h-screen px-3 md:px-6 lg:px-12 grid items-center bg-black bg bg-opacity-70 gradient'>
      <div className='text-white'>
           <h1 className=' text-4xl md:text-6xl lg:text-7xl font-bold py-4'> UI/UX Design </h1>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal'>We understand the pivotal role that user interface(UI) and user experience(UX) design play in shaping the digital landscape. Our dedicated team of designers is committed to creating intuitive, visual appealing and engaging digital experiences and captivate users and drive conversions.  </p>    

           <div className='my-8'>
           <p className='py-2 cursor-pointer px-8 lg:py-3 text-white bg-[#FF7F09] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#FF5710]'>
  Let’s Talk
</p>
           </div>
      </div>
    </div>
    </div>
  )
}

