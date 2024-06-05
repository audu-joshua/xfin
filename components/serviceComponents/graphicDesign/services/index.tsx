import React from 'react'

export function GraphicServices() {
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
           <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-[#FF0909]'> Our Graphic Design Services </h2>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'>Get comprehensive graphic design services that cater for your brand requirements.</p> 
        </div>   

           <div className='my-8 md:flex md:justify-between'>
            <div className='w-full'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Book a Call </p>
            </div>
                <div className='w-full'>
                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Brand Identity</h2>
                    <p className='text-black'>We offer all-inclusive branding for prospects who would like to engage with their target audience in a more effective way to pass the right brand message.</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Logo Design</h2>
                    <p className='text-black'>Get a face for your brand, business, or organization. Our team of creative brand designers are always on the standby to craft you an appealing logo that resonates with your brand values.
</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Poster Design</h2>
                    <p className='text-black'>Gain traction with high-fidelity social media posters for your campaign on several social media platforms. Engage with your audience on a personal level with poster designs that fit their preference.</p>
                  </div>
                </div>
           </div>
      </div>
  )
}

