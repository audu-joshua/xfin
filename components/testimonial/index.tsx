import React from 'react'

export default function Testimonial() {
  return (
    <div className='lg:px-28 px-6 py-6 bg-white'>
        <div>
            <img
              src="./images/IMG_20230804_021813.png"
              alt="Jude Aria"
              className="w-[100%]"
            />

    <div className=' py-5'>
            <h2 className='text-[#FB2B30] text-[32px] font-bold leading-none'>
            We can help you smash your business goals
            </h2>
            <p className='text-black py-3 font-medium text-sm'>
            Explore our various service to improve your brand experience
            </p>
            </div>
        </div>


        <div>
            <div className='py-4 ' >
            <h2 className='text-[#FB2B30] text-[32px] font-bold'>
                Video Testimonials
            </h2>
            <p className='text-black font-medium text-sm'>
            Listen to what our clients have to say abot us
            </p>
            </div>
        <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/rNSIwjmynYQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
        </div>
    </div>
  )
}


