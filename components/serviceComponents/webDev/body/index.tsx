import React from 'react'

export function WebServices() {
  const whatsappUrl = `https://wa.me/447378201108?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20business%20call%20with%20you.`;
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
           <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-black'> Our Web Development Services </h2>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'>We provide a range of web development services to help businesses establish a strong online presence and achieve their digital goals.</p> 
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
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Frontend Dev.</h2>
                    <p className='text-black'>Creating visually appealing and user-friendly interfaces that enhance the user experience.</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Backend Dev.</h2>
                    <p className='text-black'>Implementing robust backend systems to ensure smooth functionality and performance.
</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Web Hosting</h2>
                    <p className='text-black'>Premium web hosting and a full suite of digital solutions to enhance your online presence and drive business success.
</p>
                  </div>
                </div>
           </div>
      </div>
  )
}
