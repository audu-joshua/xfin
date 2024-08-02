import React from 'react'
import { FaLinkedin, FaEnvelope, FaTiktok, FaTwitter } from 'react-icons/fa';


export default function Team() {
  return (
    <div className='bg-white lg:px-28 px-6 py-6'>
        <div>
      <h1 className='text-black text-center text-3xl md:text-4xl lg:text-5xl font-bold py-10'> Xifin Team </h1>

    <div className='text-center flex items-center justify-center'>
      <p className='text-black text-center text-3xl md:text-4xl justify-center lg:text-5xl font-bold  flex'>
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
        <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 50% of team growth per year </em>
    </div>

    <div className='text-center flex items-center justify-start md:justify-center'>
      <img src='./images/Group7.svg' className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold justify-center md:justify-normal  flex'/>
        <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 80% of the team have at least 5 years of experience </em>
    </div>
        </div>
    </div>

    <div>
    <h1 className='text-black text-center text-3xl md:text-4xl lg:text-5xl font-bold py-10'> Meet the Management Team </h1>

<div className="grid md:grid-cols-2 lg:grid-cols-4 md:justify-between grid-cols-1 gap-8">
  <div className="grid bg-white py-4 shadow-black shadow-lg justify-center">
    <img src="./images/jude.png" alt="Person 1" />
    <p className='text-black py-2 text-base text-center md:text-lg font-semibold'> Jude Iria </p>
    <p className='text-[#000000] py-1 text-center text-sm md:text-base md:pt-0 pb-3'>CEO, Xifin Enterprise</p>
    <div className="flex py-4 pt-8 w-full justify-between px-[60px] lg:px-[20px] md:px-[60px] md:py-0 md:pt-0 ">
      
     <a href="linked-in-url-1" className='bg-black h-fit p-2 text-white rounded-full'>
       <FaLinkedin size={24} />
     </a>
     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaEnvelope className='' size={24} />
     </a>

     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaTwitter size={24} />
     </a>

     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaTiktok size={24} />
     </a>
   </div>
  </div>

  <div className="grid bg-white py-4 shadow-black text-center shadow-lg justify-center">
    <img src="./images/jennifer.png" alt="Person 1" />
    <p className='text-black py-2 text-base md:text-lg font-semibold'> Jessica Okogwu </p>
    <p className='text-[#000000] py-1 px-2 text-center text-sm md:text-base md:pt-0 pb-3'>Content/SMM Manager & Team Lead</p>
    <div className="flex py-4 pt-8 w-full justify-between px-[60px] lg:px-[20px] md:px-[60px] md:py-0 md:pt-0 ">
      
     <a href="linked-in-url-1" className='bg-black h-fit p-2 text-white rounded-full'>
       <FaLinkedin size={24} />
     </a>
     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaEnvelope className='' size={24} />
     </a>

     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaTwitter size={24} />
     </a>

     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaTiktok size={24} />
     </a>
   </div>
  </div>

  <div className="grid bg-white py-4 shadow-black shadow-lg text-center justify-center">
    <img src="./images/ernest.png" alt="Person 1" />
    <p className='text-black py-2 text-base md:text-lg font-semibold'> Oluwafemi Ernest </p>
    <p className='text-[#000000] py-1 text-sm md:text-base md:pt-0 pb-3'>Brand Designer</p>
    <div className="flex py-4 pt-8 w-full justify-between px-[60px] lg:px-[20px] md:px-[60px] md:py-0 md:pt-0">
      
     <a href="linked-in-url-1" className='bg-black h-fit p-2 text-white rounded-full'>
       <FaLinkedin size={24} />
     </a>
     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaEnvelope className='' size={24} />
     </a>

     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaTwitter size={24} />
     </a>

     <a href="email-address-1" className='bg-black p-2 h-fit rounded-full'>
       <FaTiktok size={24} />
     </a>
   </div>
  </div>

  <div className="grid bg-white py-4 shadow-black shadow-lg justify-center text-center">
    <img src="./images/josh.png" alt="Person 1" />
    <p className='text-black py-2 text-base md:text-lg font-semibold'> Audu Joshua </p>
    <p className='text-[#000000] py-1 text-sm md:text-base md:pt-0 pb-3'> Web Developer</p>
    <div className="flex py-4 pt-8 w-full justify-between px-[60px] lg:px-[20px] md:px-[60px] md:py-0 md:pt-0">
      
     <a href="linked-in-url-1" className='bg-black h-fit p-2 text-white rounded-full'>
       <FaLinkedin size={24} />
     </a>
     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaEnvelope className='' size={24} />
     </a>

     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaTwitter size={24} />
     </a>

     <a href="email-address-1" className='bg-black h-fit p-2 rounded-full'>
       <FaTiktok size={24} />
     </a>
   </div>
  </div>

</div>
    </div>
      </div>
    </div>
  )
}
