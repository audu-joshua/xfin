'use client';
import React, { useState, useEffect } from 'react';
import Star from '@mui/icons-material/Star';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewData } from '@/utils/review';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function CarouselWithContent() {

  const [current, setCurrent] = useState(0);
const [itemsToShow, setItemsToShow] = useState(1); // initialize with 1 as a default

const nextReview = () => {
  setCurrent(current === ReviewData.length - 1 ? 0 : current + 1);
}

const prevReview = () => {
  setCurrent(current === 0 ? ReviewData.length - 1 : current - 1);
}

useEffect(() => {
  // Move this inside useEffect, as window object will be available here (running on client-side)
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
    <div className='px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className=' flex gap-4 justify-between items-center py-4 md:pr-12'>
        <div className='bg-black cursor-pointer p-2 md:p-4 flex justify-center items-center h-fit rounded-full' onClick={prevReview}>
        <FaArrowLeft className='text-white'/>
        </div>
      
      <div className="flex flex-wrap justify-center">
        {ReviewData.slice(current, current + itemsToShow).map((item, i) => (
          <div key={i} className="w-full md:w-1/2 px-4 mb-4">
              <div className='grid bg-[#C4C4C4] w-full h-full justify-center gap-4 px-6 py-8 rounded-2xl text-black  items-center'>
                <p className=" text-base md:text-xl font-bold">{item.review}</p>
                <p className=" text-sm font-normal">{item.reviewer}</p>
              </div>
          </div>
        ))}
      </div>
      <div className='bg-black cursor-pointer p-2 md:p-4 flex justify-center items-center h-fit rounded-full' onClick={nextReview}>
        <FaArrowRight className='text-white'/>
        </div> 
      </div>
    </div>
  );
}
