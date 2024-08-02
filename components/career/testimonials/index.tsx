"use client"
import React, { useState, useEffect } from 'react'
import { TestomonialData } from '@/utils/testimonials';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function CareerTestimonials() {
  // Only reference window inside useEffect
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(0);
  
  const nextTestimonial = () => {
    setCurrent(current === TestomonialData.length - 1 ? 0 : current + 1)
  }
  
  const prevTestimonial = () => {
    setCurrent(current === 0 ? TestomonialData.length - 1 : current - 1)
  }
  
  useEffect(() => {
    // Now window.innerWidth will not be called at server side rendering time
    setItemsToShow(window.innerWidth < 768 ? 1 : 2);
    
    const resizeListener = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 2);
    };
    
    window.addEventListener('resize', resizeListener);
    
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
    
  }, []);

  return (
    <div className='px-[20px] md:px-[30px] xl:px-[97px] bg-[#e3e1e1]'>
      <div className=' flex justify-between items-center py-4 md:pr-12'>
        <h1 className='text-black text-xl font-bold md:text-3xl lg:text-4xl'> Teammates’ testimonials </h1>
        <div className='flex gap-3 md:gap-5'>
        <div className='bg-black cursor-pointer p-2 md:p-4 flex justify-center items-center h-fit rounded-full' onClick={prevTestimonial}>
        <FaArrowLeft className='text-white'/>
        </div>

        <div className='bg-black cursor-pointer p-2 md:p-4 flex justify-center items-center h-fit rounded-full' onClick={nextTestimonial}>
        <FaArrowRight className='text-white'/>
        </div> 
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {TestomonialData.slice(current, current + itemsToShow).map((item, i) => (

          <div key={i} className="w-full md:w-1/2 px-4 mb-4">
            <div className="p-6 rounded shadow-sm">
              <div className='md:flex grid justify-center gap-4 py-2 text-black  items-center'>
                <img className=" flex w-full" src={item.img} alt={item.name} />
                <p className=" text-base font-light">{item.description}</p>
              </div>
              <h3 className=" font-bold text-black">{item.name}</h3>
            </div>
          </div>
        ))}

      </div>
      
    </div>
  )
}