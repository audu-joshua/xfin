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
        <p className='text-black'> Our process for UI/UX design starts with a thorough discovery phase to understand your goals and target audience. Our collaborative design team then crafts visually appealing and user-friendly interfaces. We value your feedback and iterate to refine the design until it meets your satisfaction. The final design is delivered along with versatile assets to support your brand’s growth. We are committed to providing ongoing support to ensure that your brand’s digital presence continues to evolve seamlessly.
        </p>
    </div>
    
    </div>
  )
}

