import React from 'react'

export default function Technologies() {
  return (
    <div className='px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      
      <div>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'> Technologies We Use </h2>
        <div className='flex justify-between md:px-10 lg:px-20 py-5'>
            <img className='w-20 md:w-40' src={'/images/AdobeIllustrator.png'}></img>
            <img className='w-20 md:w-40' src={'/images/AdobePhotoshop.png'}></img>
            <img className='w-20 md:w-40' src={'/images/React.png'}></img>
        </div>
    </div>

    <div className='py-5 md:py-8'>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'> Our Process </h2>
        <p className='text-black'> Our graphic design services combines meticulous research with creative ingenuity to deliver exceptional results. We kick off with in-depth discoveries to grasp your objectives and target audience. As concept takes form, collaboration fuels the refinements of design ensuring they align with your vision. Upon presenting the refined concept for your evaluation, we eagerly incoporate your feedback to finalize the design. The delivery of versatile design assets facilitate your brand’s continuous evolution. This comprehensive approach guarantees that our designs not only meet but exceed your expectations, establishing a lasting impact for your business.
        </p>
    </div>
    
    </div>
  )
}

