import React from 'react'

export default function CryptoTechnologies() {
  return (
    <div className='px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      
      <div>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'> Technologies We Use </h2>
        <div className='flex justify-between md:px-10 lg:px-20 py-5'>
            <img className='w-20 md:w-40' src={'/images/Slack.png'}></img>
            <img className='w-20 md:w-40' src={'/images/Video.png'}></img>
            <img className='w-20 md:w-40' src={'/images/Teams.png'}></img>
            <img className='w-20 md:w-40' src={'/images/Dropbox.png'}></img>
        </div>
    </div>

    <div className='py-5 md:py-8'>
        <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black'> Our Process </h2>
        <p className='text-black'> 
        Our core services include comprehensive wallet diagnostics, seamless crypto conversions, secure peer-to-peer transactions, and expert recovery of lost funds. We specialize in addressing your specific needs within the crypto ecosystem, ensuring efficiency and security throughout every transaction. 
        </p>
    </div>
    
    </div>
  )
}

