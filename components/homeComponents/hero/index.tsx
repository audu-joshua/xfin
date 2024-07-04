"use client"
import React, {useState, useEffect} from 'react'

export default function Hero() {
    const style = {
        bgimageMobile: {
          background: 'url("./images/heromobile.png")  center bottom',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        },
        bgimageDesktop: {
          background: 'url("./images/heroDesktop.png")  center bottom',
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

  return (
    <div className=' z-30 py-40 px-[20px] md:px-[30px] xl:px-[97px] self-end mt-[-30px]' 
    style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}
    >
      <div className='text-white'>
           <h1 className=' text-4xl md:text-6xl lg:text-8xl font-bold py-4'> Pixel Genius </h1>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[55%] font-normal'>Where Ai-Powered creativity meets digital innovation. Transforming brands with intelligent design.</p>    

           <div className='my-8'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center' onClick={() => console.log("I never Click am Wella")} > Learn More </p>
           </div>
      </div>
    </div>
  )
}

