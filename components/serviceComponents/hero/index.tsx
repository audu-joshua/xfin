"use client"
import React from 'react'

export default function ServiceHero() {

  return (
    <div className=' z-30 py-40 px-[20px] md:px-[30px] xl:px-[97px] bg-[#FB2B30]'>
      <div className='text-white'>
           <h1 className=' text-4xl md:text-6xl lg:text-7xl font-bold py-4'> Build With Us </h1>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal'>We provide top-notch tech and branding solutions to clients all over the world. With years of experience in the industry, we have helped many businesses grow and achieve their goals by delivering innovative and scalable brand solutions. </p>    

           <div className='my-8'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Let’s Talk </p>
           </div>
      </div>
    </div>
  )
}