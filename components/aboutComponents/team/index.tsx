import React from 'react'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';


export default function Team() {
  return (
    <div className='bg-white lg:px-28 px-6 py-6'>
        <div>
      <h1 className='text-[#FB2B30] text-center text-3xl md:text-4xl lg:text-5xl font-bold py-10'> Xifin Team </h1>

    <div className='text-center flex items-center justify-center'>
      <p className='text-[#FB2B30] text-center text-3xl md:text-4xl justify-center lg:text-5xl font-bold  flex'>
        10+ <em className=' text-black text-[16px] md:text-[24px]  w-[50%] leading-none md:w-[60%] block font-medium not-italic'> Experts in the field </em>
      </p>
    </div>

    <div className='text-center'>
        <div className='grid gap-8 md:flex md:justify-between py-12 md:py-16 items-center text-center'>
        <div className='text-center flex items-center justify-start md:justify-center'>
      <p className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold justify-center md:justify-normal  flex'>
        43% <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-6 flex items-center'> Mobile & front-end engineers </em>
      </p>
    </div>

    <div className='text-center flex items-center justify-start md:justify-center'>
      <p className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold justify-center md:justify-normal  flex'>
        35% <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-6 flex items-center'> Brand Designers </em>
      </p>
    </div>
        </div>


        <div className='grid gap-8 md:flex md:justify-between py-12 md:py-16 items-center text-center'>
        <div className='text-center flex items-center justify-start md:justify-center'>
      <img src='./images/Group8.svg' className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold justify-center md:justify-normal  flex'/>
        43% <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 50% of team growth per year </em>
    </div>

    <div className='text-center flex items-center justify-start md:justify-center'>
      <img src='./images/Group7.svg' className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold justify-center md:justify-normal  flex'/>
        35% <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 80% of the team have at least 5 years of experience </em>
    </div>
        </div>
    </div>

    <div>
    <h1 className='text-[#FB2B30] text-center text-3xl md:text-4xl lg:text-5xl font-bold py-10'> Meet the Management Team </h1>

<div className="grid md:flex lg:flex grid-cols-2 md:grid-cols-4 gap-4">
  <div className="flex flex-col items-center md:items-start">
    <img src="./images/IMG_20230804_021813.png" alt="Person 1" />
    <p className='text-[#FB2B30] text-base md:text-lg font-semibold'> Jude </p>
    <p className='text-[#000000] text-sm md:text-base'>CEO</p>
    <div className="flex py-2">
     <a href="linked-in-url-1" className="mr-2">
       <FaLinkedin size={24} color="#000000" />
     </a>
     <a href="email-address-1">
       <FaEnvelope size={24} color="#000000" />
     </a>
   </div>
  </div>
  <div className="flex flex-col items-center md:items-start">
    <img src="./images/IMG_20230804_021813.png" alt="Person 2" />
    <p className='text-[#FB2B30] text-base md:text-lg font-semibold'> Jude </p>
    <p className='text-[#000000] text-sm md:text-base'>CEO</p>
    <div className="flex py-2">
     <a href="linked-in-url-1" className="mr-2">
       <FaLinkedin size={24} color="#000000" />
     </a>
     <a href="email-address-1">
       <FaEnvelope size={24} color="#000000" />
     </a>
   </div>
  </div>
  <div className="flex flex-col items-center md:items-start">
    <img src="./images/IMG_20230804_021813.png" alt="Person 3" />
    <p className='text-[#FB2B30] text-base md:text-lg font-semibold'> Jude </p>
    <p className='text-[#000000] text-sm md:text-base'>CEO</p>
    <div className="flex py-2">
     <a href="linked-in-url-1" className="mr-2">
       <FaLinkedin size={24} color="#000000" />
     </a>
     <a href="email-address-1">
       <FaEnvelope size={24} color="#000000" />
     </a>
   </div>
  </div>
  <div className="flex flex-col items-center md:items-start">
    <img src="./images/IMG_20230804_021813.png" alt="Person 4" />
    <p className='text-[#FB2B30] text-base md:text-lg font-semibold'> Jude </p>
    <p className='text-[#000000] text-sm md:text-base'>CEO</p>
    <div className="flex py-2">
     <a href="linked-in-url-1" className="mr-2">
       <FaLinkedin size={24} color="#000000" />
     </a>
     <a href="email-address-1">
       <FaEnvelope size={24} color="#000000" />
     </a>
   </div>
  </div>
</div>
    </div>
      </div>
    </div>
  )
}
