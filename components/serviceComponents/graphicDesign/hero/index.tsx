"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link';

export function GraphicHero() {
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
      <div className='h-screen px-3 md:px-6 lg:px-12 grid items-center bg-black bg bg-opacity-60 gradient'>
      <div className='text-white'>
           <h1 className=' text-4xl md:text-6xl lg:text-7xl font-bold py-4'> Graphic Design </h1>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal'>Visuals speak volumes and in the fast-paced digital world, they often serve as a frontline of your brand identity. We specialize in harnessing the power of visual communication to create impactful and memorable graphics that resonate with your audience.  </p>    

           <div className='my-8'>
                <Link className='py-2 px-8 lg:py-3 text-white bg-[#D47F1A] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center' href="#"> Let’s Talk 
                </Link>
           </div>
      </div>
    </div>
    </div>
  )
}

