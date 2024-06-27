import React from 'react'

export default function WebTechnologies() {
  return (
    <div className='px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      
      <div>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'> Technologies We Use </h2>
        <div className='grid grid-cols-4 gap-y-6 items-center md:px-10 lg:px-20 py-5'>
            <img className='w-20 md:w-40' src={'/images/Html5.png'}></img>
            <img className='w-20 md:w-40' src={'/images/JavaScript.png'}></img>
            <img className='w-20 md:w-40' src={'/images/React.png'}></img>
            <img className='w-20 md:w-40' src={'/images/VisualStudio.png'}></img>
            <img className='w-20 md:w-40' src={'/images/WordPress.png'}></img>
            <img className='w-20 md:w-40' src={'/images/CSS3.png'}></img>
            <img className='w-20 md:w-40' src={'/images/GitHub.png'}></img>
            <img className='w-20 md:w-40' src={'/images/BootStrap.png'}></img>
        </div>
    </div>

    <div className='py-5 md:py-8'>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'> Our Process </h2>
        <p className='text-black'> Our process ensures a seamless journey to creating personalized, high-performance websites. Beginning with a thorough discovery phase, we analyze your business objectives, target audience, and project requirements. Our talented team collaborates to design and develop a visually captivating, user-centric website that aligns with your brand identity. Rigorous testing ensures functionality across devices and browsers. We provide comprehensive support for a smooth launch and emphasize client involvement, timely delivery, and ongoing maintenance for a successful digital presence tailored to your needs.
        </p>
    </div>
    
    </div>
  )
}

