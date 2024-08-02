import React from 'react'

export function GraphicServices() {
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
           <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-black'> Our Graphic Design Services </h2>    
           <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'>Our creative experts use cutting-edge design tools and trends to offer a complete range of graphic design services customized to fit your brand requirements.</p> 
        </div>   

           <div className='my-8 md:flex md:justify-between'>
            <div className='w-full'>
                <p className='py-2 px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Book a Call </p>
            </div>
                <div className='w-full'>
                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Brand Identity</h2>
                    <p className='text-black'>We offer consistent and compelling visual branding that makes a strong impression. Our services include logo design, business cards, letterheads and branding styles guides that reflect your company’s ethos and message. </p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Digital Design</h2>
                    <p className='text-black'>Amplify your online presence with high-quality graphics optimized for the web. We craft website graphics, social media visuals, email templates and digital ads that enhance user experience and drive engagement. 
</p>
                  </div>

                  <div>
                    <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'>Package Design</h2>
                    <p className='text-black'>Make your products stand out on the shelf with innovative and appealing packaging designs that tell the story of your brand and appeal to customer’s emotions.</p>
                  </div>
                </div>
           </div>
      </div>
  )
}

