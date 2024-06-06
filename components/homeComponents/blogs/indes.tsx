import React from 'react';
import b1 from '@/public/images/b1.png';
import b2 from '@/public/images/b2.png';
import b3 from '@/public/images/b3.png';
import Image from 'next/image';

export default function Blogs() {
  return (
    <div className='bg-white justify-center py-8 lg:px-28 px-6'>
      <h2 className='text-[#FB2B30] text-center py-4 md:text-center md:py-10 text-3xl md:text-4xl lg:text-5xl font-bold'>
        Visit Our Blogs
      </h2>
      <div className='grid md:grid-cols-2 md:gap-4 lg:grid-cols-3'>

        <div className='w-full items-center'>
          <Image src={b1} alt="The Evolution Of Finance: A Journey From The Past To The Present" />
          <h3 className='text-black font-bold text-base md:text-xl lg:text-2xl py-4'>
            The Evolution Of Finance: A Journey From The Past To The Present
          </h3>
          <p className='font-medium text-base text-black pb-8'>2024-01-29</p>
        </div>

        <div className='w-full items-center'>
          <Image src={b2} alt="The Evolution Of Finance: A Journey From The Past To The Present" />
          <h3 className='text-black font-bold text-base md:text-xl lg:text-2xl py-4'>
            The Evolution Of Finance: A Journey From The Past To The Present
          </h3>
          <p className='font-medium text-base text-black pb-8'>2024-01-29</p>
        </div>

        <div className='w-full items-center'>
          <Image src={b3} alt="The Evolution Of Finance: A Journey From The Past To The Present" />
          <h3 className='text-black font-bold text-base md:text-xl lg:text-2xl py-4'>
            The Evolution Of Finance: A Journey From The Past To The Present
          </h3>
          <p className='font-medium text-base text-black pb-8'>2024-01-29</p>
        </div>

      </div>
    </div>
  )
};
