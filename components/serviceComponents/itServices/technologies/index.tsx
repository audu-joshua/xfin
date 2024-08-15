import React from 'react'

export default function ITTechnologies() {
  return (
    <div className='px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      
      <div>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'> Technologies We Use </h2>
        <div className='flex justify-between md:px-10 lg:px-20 py-5'>
            <img className='w-20 md:w-40' src={'/images/Wordpress.png'}></img>
            <img className='w-20 md:w-40' src={'/images/Google.png'}></img>
            <img className='w-20 md:w-40' src={'/images/Analytics.png'}></img>
        </div>
    </div>

    <div className='py-5 md:py-8'>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'> Our Process </h2>
        <p className='text-black'> We begin by understanding your business needs, goals, and target audience to tailor our virtual assistance services to your specific requirements. We define your virtual assistance brand&apos;s unique identity, including its mission, values, and personality traits, to differentiate it in the competitive market. Based on your brand identity, we develop a comprehensive strategy outlining key messaging, communication channels, and tactics to achieve your business objectives. We create visually appealing brand assets, including logos, colors, and imagery, that reflect your brand&apos;s identity and resonate with your target audience. 
        </p>
    </div>
    
    </div>
  )
}

