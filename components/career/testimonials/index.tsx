"use client"
import React, { useState, useEffect } from 'react';
import { TestimonialData } from '@/utils/testimonials';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function CareerTestimonials() {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(0);

  const nextTestimonial = () => {
    setCurrent(current === TestimonialData.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? TestimonialData.length - 1 : current - 1);
  };

  useEffect(() => {
    setItemsToShow(window.innerWidth < 768 ? 1 : 2);

    const resizeListener = () => {
      setItemsToShow(window.innerWidth < 768 ? 1 : 2);
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div className='px-4 md:px-8 xl:px-24 bg-gray-100'>
      <div className='flex justify-between items-center py-6'>
        <h1 className='text-gray-800 text-2xl md:text-4xl font-semibold'>
          Teammates’ Testimonials
        </h1>
        <div className='flex gap-4'>
          <div
            className='bg-gray-800 cursor-pointer p-3 flex justify-center items-center rounded-full'
            onClick={prevTestimonial}
          >
            <FaArrowLeft className='text-white' />
          </div>
          <div
            className='bg-gray-800 cursor-pointer p-3 flex justify-center items-center rounded-full'
            onClick={nextTestimonial}
          >
            <FaArrowRight className='text-white' />
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        {TestimonialData.slice(current, current + itemsToShow).map((item, i) => (
          <div
            key={i}
            className='bg-white shadow-md rounded-lg p-8 m-4 w-full md:w-1/2 flex flex-col items-center justify-between'
          >
            <p className='text-gray-700 text-base italic mb-4 text-center'>
              "{item.description}"
            </p>
            <div className='flex items-center'>
              <img
                src={item.img}
                alt={item.name}
                className='w-16 h-16 rounded-full object-cover mr-4'
              />
              <div>
                <h3 className='text-gray-900 font-semibold text-lg'>
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
