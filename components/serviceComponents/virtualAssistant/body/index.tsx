import React from 'react'

export function VAServices() {
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
           <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-[#FF0909]'> Virtual Assistance </h2>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'>Get the support you need, when you need it, with our virtual assistance service. From administrative tasks to customer support, we've got you covered. Focus on what you do best and leave the rest to us!</p> 
        </div>   

           <div className='my-8 md:flex md:justify-between'>
            <div className='w-full'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Book a Call </p>
            </div>
                <div className='w-full'>
                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Admin Assist</h2>
                    <p className='text-black'>Streamline your workload and boost productivity with our virtual administrative assistance service. Our dedicated team of professionals will handle tasks such as email management, scheduling, data entry, and more, allowing you to focus on growing your business.</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Virtual Support</h2>
                    <p className='text-black'>Elevate your customer experience with our virtual customer support service. Our trained agents are available around the clock to assist your customers via phone, email, or live chat.
</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'>Virtual Reception</h2>
                    <p className='text-black'>Make a great first impression with our virtual receptionist service. Our friendly and professional receptionists will handle your calls with care, ensuring that every caller receives a warm and personalized greeting.
</p>
                  </div>
                </div>
           </div>
      </div>
  )
}
