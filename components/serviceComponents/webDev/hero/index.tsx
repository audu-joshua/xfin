import React from 'react'

export function WebDevHero() {
  return (
    <div className=' z-30 py-40 lg:py-28 px-[20px] md:px-[30px] xl:px-[97px] bg-[#FB2B30]'>
      <div className='text-white'>
           <h1 className=' text-4xl md:text-6xl lg:text-7xl font-bold py-4'> Web Development </h1>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal'>At Xifin’s Enterprise, we offer tailored web services that combine technical expertise and creative innovation. Whether you need a new website, site revamp, or custom web application, our skilled team ensures your online presence looks great and performs seamlessly across all devices. </p>    

           <div className='my-8'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF7F09] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Let’s Talk </p>
           </div>
      </div>
    </div>
  )
}

