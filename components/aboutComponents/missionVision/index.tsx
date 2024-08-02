import React from 'react';

export default function Mission() {
  return (
    <div className="bg-white lg:px-28 px-6 py-6">
      <div className="md:flex justify-between">
        <div className="py-2 md:py-6">
          <h1 className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-bold md:text-left md:py-6">Our Mission</h1>

          <p className="text-sm text-[#000000] font-medium md:text-lg lg:text-xl text-center md:text-left">
            Our mission is to empower businesses and individuals with innovative digital solutions that exceed expectations and drive meaningful engagement.
          </p>
        </div>

        <div className="py-6">
          <h1 className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-bold md:text-right md:py-6">Our Vision</h1>

          <p className="text-sm text-[#000000] font-medium md:text-lg lg:text-xl text-center md:text-right">
            At Xifin Enterprise, we provide millions of employment opportunities for young adults in the future.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-black text-center text-3xl md:text-4xl lg:text-5xl font-bold py-6 pt-12 md:py-10">Our Core Values</h1>

        <div className='py-8 grid md:grid-cols-2 gap-8'>
          <div className="text-center flex flex-col items-center md:items-start">
            <h2 className="py-2 px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center" >Innovation</h2>
            <p className="py-6 text-black text-base md:text-lg lg:text-xl font-medium md:text-left">Embrace creativity and continuous improvement to provide cutting-edge digital solutions.</p>
            </div>

            <div className="text-center flex flex-col items-center md:items-end">
            <h2 className="py-2 px-8 lg:py-3 text-white bg-[black] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center" >Excellence</h2>
            <p className="py-6 text-black text-base md:text-lg lg:text-xl font-medium md:text-right">We strive for excellence in all our endeavors to deliver exceptional results that exceed expectations.</p>
            </div>

            <div className="text-center flex flex-col items-center md:items-start">
            <h2 className="py-2 px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center" >Empowerment</h2>
            <p className="py-6 text-black text-base md:text-lg lg:text-xl font-medium md:text-left">We empower businesses and individuals with tools and knowledge to succeed in the digital world.</p>
            </div>

            <div className="text-center flex flex-col items-center md:items-end">
            <h2 className="py-2 px-8 lg:py-3 text-white bg-[black] text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center" >Collaboration</h2>
            <p className="py-6 text-black text-base md:text-lg lg:text-xl font-medium md:text-right">We foster a culture of collaboration, open communication, and teamwork, to achieve shared goals.</p>
            </div>

            <div className="text-center flex flex-col items-center md:col-span-2 md:items-center">
            <h2 className="py-2 px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center" >Integrity</h2>
            <p className="py-6 text-black text-base md:text-lg lg:text-xl font-medium md:w-[50%] md:text-center">We uphold ethical standards, transparency, and honesty in all interactions and business practices.</p>
            </div>


        </div>


        </div>
      
    </div>
  )
}
