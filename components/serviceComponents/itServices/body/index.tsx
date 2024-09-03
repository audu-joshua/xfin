import React from 'react'

export function ITServices() {
  const whatsappUrl = `https://wa.me/447378201108?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20business%20call%20with%20you.`;
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
           <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-black'> IT Services </h2>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'>Every individual and organization require frequent and quality technical support to keep their brand afloat the industry market</p> 
        </div>   

           <div className='my-8 md:flex md:justify-between'>
           <div className='w-full'>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <p className='py-2 cursor-pointer px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105'>
          Book a Call
        </p>
      </a>
    </div>
                <div className='w-full'>
                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Consultation</h2>
                    <p className='text-black'>Book a call with us to discuss how we can help you with your technical needs. We offer streamline support services, troubleshooting, and diagnostics</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Web Maintenance</h2>
                    <p className='text-black'>Keep your website running smoothly with our expert website maintenance services. From regular updates and security patches to performance optimization and content management, we take care of all the technical details so you can focus on running your business.
</p>
                  </div>

                </div>
           </div>
      </div>
  )
}
