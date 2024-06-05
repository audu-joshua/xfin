import React from 'react'

export default function CareerHero() {
  return (
    <div className='bg-[#FB2B30] py-20 md:py-28 lg:py-12 lg:pb-20 px-[20px] md:px-[30px] xl:px-[97px]'>
      <div className='flex md:justify-between flex-col-reverse md:flex-row'>
        <div className=' pt-10 md:pt-0 md:py-10 grid items-center md:w-[60%]'>
            <h1 className=' md:w-[85%] w-[100%] leading-[1.13] font-bold text-5xl md:6xl lg:text-8xl'>Your talent matters for the world!</h1>
            <p className=' py-4 text-base md:text-lg lg:text-2xl'>And we are here to appreciate it decently.</p>
            
            <div className='my-8'>
                <p className='py-2 px-8 lg:py-3 text-white bg-[#FF0909] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center'> Join our Team </p>
           </div>
        </div>
        <div className='grid md:w-[40%] gap-2 justify-center grid-cols-3 items-center'>
            <img className='w-20 md:w-40 lg:w-28' src={'/images/CImg1.svg'}></img>
            <img className='w-25 md:w-40 lg:w-40' src={'/images/CImg2.svg'}></img>
            <img className='w-20 md:w-40 lg:w-28' src={'/images/CImg3.svg'}></img>
            <img className='w-20 md:w-40 lg:w-28' src={'/images/CImg4.svg'}></img>
            <img className='w-25 md:w-52 lg:w-52' src={'/images/CImg5.svg'}></img>
            <img className='w-20 md:w-40 lg:w-28' src={'/images/CImg6.svg'}></img>
            <img className='w-25 md:w-40' src={'/images/CImg7.svg'}></img>
            <img className='w-20 md:w-40 lg:w-28' src={'/images/CImg8.svg'}></img>
            <img className='w-20 md:w-40 lg:w-28' src={'/images/CImg9.svg'}></img>
        </div>
      </div>
    </div>
  )
}

