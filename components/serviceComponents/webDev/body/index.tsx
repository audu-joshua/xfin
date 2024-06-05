import React from 'react'

export function WebServices() {
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
           <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-[#FF0909]'> Our Web Development Services </h2>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'>If you need end-to-end expertise and assistance in digital product design and development, we are here to help!</p> 
        </div>   

           <div className='my-8 md:flex md:justify-between'>
            <div className='w-full'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Book a Call </p>
            </div>
                <div className='w-full'>
                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Frontend Dev.</h2>
                    <p className='text-black'>Whether you're looking to build a new backend infrastructure from scratch or enhance your existing system, we've got you covered. Let us handle the technical complexities while you focus on growing your business.</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Backend Dev.</h2>
                    <p className='text-black'>Get standard app design for your every project. We have a dedicated team to handle your Android and iOS app design from inception to launch.
</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Web Hosting</h2>
                    <p className='text-black'>With our years of experience and dedication to excellence, we'll help you build a reliable, high-performance hosting environment that will support your website's growth and success. Let's work together to bring your vision to life and make your online presence shine.
</p>
                  </div>
                </div>
           </div>
      </div>
  )
}
