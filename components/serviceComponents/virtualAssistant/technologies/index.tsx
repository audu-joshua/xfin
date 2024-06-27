import React from 'react'

export default function VATechnologies() {
  return (
    <div className='px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      
      <div>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'> Technologies We Use </h2>
        <div className='flex justify-between md:px-10 lg:px-20 py-5'>
            <img className='w-20 md:w-40' src={'/images/logo.svg'}></img>
            <img className='w-20 md:w-40' src={'/images/logo.svg'}></img>
            <img className='w-20 md:w-40' src={'/images/logo.svg'}></img>
            <img className='w-20 md:w-40' src={'/images/logo.svg'}></img>
        </div>
    </div>

    <div className='py-5 md:py-8'>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-[#FF0909]'> Our Process </h2>
        <p className='text-black'> We follow a tailored process to accomplish tasks efficiently. First, we understand your specific needs and assign a dedicated assistant. Next, we execute tasks promptly and accurately, keeping you updated at every step. Finally, we review and ensure the tasks are completed to your satisfaction, allowing you to focus on your core strengths while we handle the rest. 
        </p>
    </div>
    
    </div>
  )
}

