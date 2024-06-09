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
        <p className='text-black'> Our product design services are not just about beautiful visualization but also tailored to customers&apos; needs and expectations. We provide you with complex market research to find out all clients’ pains and gains, analysis of digital products and provide a smooth process of digital transformation and product design services. Our designers have established a design process based on our practical expertise in 100+ projects that have performed well and won over the market!
        </p>
    </div>
    
    </div>
  )
}

