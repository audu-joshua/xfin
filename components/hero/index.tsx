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
    <div className=' z-30 py-40 px-[20px] md:px-[30px] xl:px-[97px]' 
    style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}
    >
      <div>
           <h1 className=' text-5xl font-bold py-4'> Website Design </h1>    
           <p className=' text-sm font-normal'>Improve your brand recognition with appealing and interactive website design to attract the right prospects to your business.</p>    

           <div className='my-8'>
                <p className='py-2 px-8 bg-[#FF0909] text-sm font-normal rounded-full w-fit text-center justify-center'> Let’s Talk </p>
           </div>
      </div>
    </div>
  )
}

