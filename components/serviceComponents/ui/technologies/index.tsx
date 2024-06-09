import React from 'react'

export default function UITechnologies() {
  return (
    <div className='px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      
      <div>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'> Technologies We Use </h2>
        <div className='flex justify-between md:px-10 lg:px-20 py-5'>
            <img className='w-20 md:w-40' src={'/images/Figma.png'}></img>
            <img className='w-20 md:w-40' src={'/images/GoogleDocs.png'}></img>
            <img className='w-20 md:w-40' src={'/images/WebFlow.png'}></img>
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

