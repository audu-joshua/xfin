import React from 'react'

export function OurUiUxServices() {
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
           <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-[#FF0909]'> UI/UX Design Services </h2>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'>If you need end-to-end expertise and assistance in digital product design and development, we are here to help!</p> 
        </div>   

           <div className='my-8 md:flex md:justify-between'>
            <div className='w-full'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Book a Call </p>
            </div>
                <div className='w-full'>
                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Website Design</h2>
                    <p className='text-black'>We design custom website for individuals and establishments, as we understand that this is a vital part of brand building. Our experts are well versed in developing functional websites, and deliver excellence on every project.</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>App Design</h2>
                    <p className='text-black'>Get standard app design for your every project. We have a dedicated team to handle your Android and iOS app design from inception to launch.
</p>
                  </div>
                </div>
           </div>
      </div>
  )
}


