"use client"
import React, { useState, useEffect } from 'react'

export default function Contactus() {

    const style = {

        bgimageMobile: {
            background: 'linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("./images/contactbgmobile.png") ',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
        },

        bgimageDesktop: {
            background: 'linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("./images/contactbgDesktop.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
        <div className='z-30 py-40 px-[20px] md:px-[30px] xl:px-[97px]'
            style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}
        >
            <div className='text-black z-10 opacity-100'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold py-4 text-white'> Get in Touch </h1>
                <p className='text-sm relative md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-white'>Get in touch with us! whether you have a question, need support or want to explore how our services can help your business thrive, Drop us a message and we will respond promptly.</p>
                <div className='my-8'>
                    <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-smBB md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Let’s Talk </p>

                </div>
            </div>
        </div>
    )
}