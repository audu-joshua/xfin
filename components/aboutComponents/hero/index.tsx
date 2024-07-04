"use client"
import React, {useState, useEffect} from 'react'

export default function AboutHero() {

    const style = {
        bgimageMobile: {
          background: 'url("./images/aboutbgmoblie.png")  center bottom',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        },
        bgimageDesktop: {
          background: 'url("./images/aboutbg.png")  center bottom',
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
    <div className=' z-30 py-40 px-[20px] md:px-[30px] mt-[-30px] xl:px-[97px]' 
    style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}
    >
      <div className='text-white lg:-mt-16'>
           <h1 className=' text-4xl md:text-6xl lg:text-7xl font-bold py-4'> We are Trusted </h1>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[80%] font-normal'>At XIFIN Enterprise,  we’re a team of innovators passionate about harnessing technology to drive business success. With combined expertise and a customer-centric approach, we deliver cutting-edge solutions and dedicated support. Our values prioritize excellence, integrity, and customer satisfaction. We’re committed to staying ahead of the curve and making a positive impact. Trust us to shape the future of your business. </p>    

           <div className='my-8'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Let’s Talk </p>
           </div>
      </div>
    </div>
  )
}

