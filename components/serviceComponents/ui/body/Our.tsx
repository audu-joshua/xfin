import React from 'react'

export function OurUiUxServices() {
  const whatsappUrl = `https://wa.me/447378201108?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20business%20call%20with%20you.`;
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
           <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-black'> UI/UX Design Services </h2>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'> Elevate your digital presence with our UI/UX design services with blend creativity, strategy and user-centric principles! </p> 
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
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Tailored UI Design</h2>
                    <p className='text-black'>Our UI design services entail the meticulous creation of visually striking interfaces that seamlessly blend aesthetics with functionality. Through a collaborative approach, we tailor every aspect of the interface to align with your brand identity and user preferences.  </p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Strategic UX Design</h2>
                    <p className='text-black'>Beyond aesthetics, our UX design services prioritize the end-to-end user journey to enhance usability and satisfaction. We conduct in-depth user research and employ industry-best practices to create wireframes and prototypes that streamline interactions and optimize conversions. 
</p>
                  </div>
                </div>
           </div>
      </div>
  )
}


