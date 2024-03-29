"use client"
import React, { useState, useEffect } from 'react'

export default function Contactus() {

    const style = {
        bgimageMobile: {
            background: 'url("./images/contactbgmobile.png") center bottom',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundColor: "rgba(0, 0, 0, 0.81)",
        },
        bgimageDesktop: {
            background: 'url("./images/contactbgDesktop.png") center bottom',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(0, 0, 0, 0.81)",
            opacity: '0.9',
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
        <div className='z-30  bg-[#000000CC] py-40 px-[20px] md:px-[30px] xl:px-[97px]'
            style={isLargeScreen ? style.bgimageDesktop : style.bgimageMobile}
        >
            <div className='text-black z-10 opacity-100'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold py-4'> Reach Us </h1>
                <p className='text-sm text-black relative md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal'>We provide top-notch tech and branding solutions to clients all over the world. With years of experience in the industry, we have helped many businesses grow and achieve their goals by delivering innovative and scalable brand solutions.</p>

                <div className='my-8'>
                    <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-smBB md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Let’s Talk </p>
                </div>
            </div>
        </div>
    )
}