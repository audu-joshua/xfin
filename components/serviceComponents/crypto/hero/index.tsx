"use client"
import React, {useState, useEffect} from 'react'

export function CryptoHero() {
  const style = {
    bgimageMobile: {
      background: 'url("../images/cryptomobile.png")  center bottom',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
    },
    bgimageDesktop: {
      background: 'url("../images/cryptodesktop.png")  center bottom',
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
  const whatsappUrl = 'https://wa.me/+447378201108?text=Hello%20I%20would%20like%20to%20chat%20with%20you!';
  return (
    <div className=' bg-cover' style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}>
      <div className='h-[50vh] md:h-screen px-3 md:px-6 lg:px-12 grid items-center bg-black bg bg-opacity-60 gradient'>
      <div className='text-white'>
           <h1 className=' text-4xl md:text-6xl lg:text-7xl font-bold py-4'> Cryptocurrency </h1>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal   leading-[18.29px] md:leading-[29.26px]'>Whether you're a seasoned trader or just starting out, we've got everything you need to navigate the exciting world of crypto. Sign up today and join the future of finance! </p>    

           <div className='my-8'>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <p className='py-2 cursor-pointer px-8 lg:py-3 text-white bg-[#FF7F09] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#FF5710]'>
              Let’s Talk
            </p>
          </a>
        </div>
      </div>
      </div>
      </div>
  )
}

