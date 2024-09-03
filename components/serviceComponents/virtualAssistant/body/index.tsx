import React from 'react'

export function VAServices() {
  const whatsappUrl = `https://wa.me/447378201108?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20business%20call%20with%20you.`;
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
           <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-black'> Virtual Assistance </h2>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'>Get timely, expert support with our virtual assistance. From admin tasks to customer service, we've got you covered. Focus on what you do best, and let us handle the rest!</p> 
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
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Admin Assist</h2>
                    <p className='text-black'>Streamline your workload and boost productivity with our virtual administrative assistance service. Our dedicated team of professionals will handle tasks such as email management, scheduling, data entry, and more, allowing you to focus on growing your business.</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Virtual Support</h2>
                    <p className='text-black'>Elevate your customer experience with our virtual customer support service. Our trained agents are available around the clock to assist your customers via phone, email, or live chat.
</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Virtual Reception</h2>
                    <p className='text-black'>Make a great first impression with our virtual receptionist service. Our friendly and professional receptionists will handle your calls with care, ensuring that every caller receives a warm and personalized greeting.
</p>
                  </div>
                </div>
           </div>
      </div>
  )
}
