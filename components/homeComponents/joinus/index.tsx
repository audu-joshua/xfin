import React from 'react'

export default function Career() {
  return (
    <div className='bg-white'>

        <div className='bg-white md:flex justify-between md:py-8 md:px-16  lg:px-28 lg:py-20'>
            <div>
                <h3 className='text-[#FB2B30] text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold'> Join Us! </h3>
                <p className='text-black text-center md:px-0 px-4 py-4 font-medium md:text-base lg:text-lg md:w-[80%] md:text-left'> We are on the stage of the fast growth, so if you like excelling also, that might be a match! </p>
            </div>

            <div className='flex justify-center pb-4 lg:pb-20'>
            <p className='px-8 flex items-center bg-black text-white text-sm lg:text-lg font-normal rounded-full w-fit text-center justify-center'>
                Check Open Positions 
            </p>
            </div>
        </div>

        <img src='./images/b7.png'/>
      
    </div>
  )
}

