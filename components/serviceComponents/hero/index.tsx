import React from 'react';

export default function ServiceHero() {
  const whatsappUrl = 'https://wa.me/+447378201108?text=Hello%20I%20would%20like%20to%20chat%20with%20you!';

  return (
    <div className=' py-40 px-[20px] md:px-[30px] xl:px-[97px] mt-[-30px] bg-[#252424]'>
      <div className='text-white'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl lg:w-[80%] lg:-mt-24 font-bold py-4'>
          Bringing Ideas to Life
        </h1>
        <p className='text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[65%] font-normal'>
          Build with us and transform your vision into a reality. Our expert team delivers top-notch solutions, leveraging the latest technologies to drive innovation and growth. From concept to launch, we’re your trusted partner in building a better future.
        </p>

        <div className='my-8'>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <p className='py-2 cursor-pointer px-8 lg:py-3 text-white bg-[#FF7F09] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#FF5710]'>
              Let’s Talk
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
