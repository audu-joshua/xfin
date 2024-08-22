"use client"
import React, { useState, useEffect } from 'react';

export default function Contactus() {
    const whatsappUrl = 'https://wa.me/+447378201108?text=Hello%20I%20would%20like%20to%20chat%20with%20you!';

    const style = {
        bgimageMobile: {
            background: 'linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("./images/contactmobile.png")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
        },
        bgimageDesktop: {
            background: 'linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("./images/contactDesktop.png")',
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
        <div className='z-30 py-40 px-[20px] md:px-[30px] mt-[-30px] xl:px-[97px]'
            style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}
        >
            <div className='text-black z-10 opacity-100'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold py-4 text-white'>Get in Touch</h1>
                <p className='text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-white'>
                    Get in touch with us! Whether you have a question, need support, or want to explore how our services can help your business thrive, drop us a message and we will respond promptly.
                </p>
                <div className='my-8'>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <p className='py-2 px-8 lg:py-3 text-white bg-[#B17A39] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#a15f1e]'>
                            Let’s Talk
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}
