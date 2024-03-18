import React from 'react'

export default function Testimonial() {
  return (
    <div className='lg:px-28 px-6 py-6 bg-white'>
        <div className='md:flex md:gap-8 items-center'>
            <img
              src="./images/IMG_20230804_021813.png"
              alt="Jude Aria"
              className="w-[100%] md:w-[50%]"
            />

    <div className=' py-5 '>
            <h2 className='text-[#FB2B30] text-[32px] md:text-[34px] lg:text-5xl font-bold leading-none'>
            We can help you smash your business goals
            </h2>
            <p className='text-black py-3 font-medium text-sm md:text-base lg:text-lg'>
            Explore our various service to improve your brand experience
            </p>
            </div>
        </div>


        <div className='md:py-8 lg:py-12'>
            <div className='py-4 ' >
            <h2 className='text-[#FB2B30] text-[32px] md:text-[34px] lg:text-5xl font-bold'>
                Video Testimonials
            </h2>
            <p className='text-black font-medium text-sm md:text-base lg:text-lg'>
            Listen to what our clients have to say abot us
            </p>
            </div>
        <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/rNSIwjmynYQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className=' rounded-xl'
      ></iframe>
        </div>
    </div>
  )
}


