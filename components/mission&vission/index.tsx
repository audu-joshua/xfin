import React from 'react'

export default function Mission() {
  return (
    <div className='bg-white lg:px-28 px-6 py-6'>

<div className='flex bg-[#FB2B30] rounded-2xl '>
    <div className='p-4 justify-center flex flex-col w-[60%]'>
        <h2 className=' text-2xl font-bold text-[#FFFFFF] py-2'>Our  Mission</h2>
        <p className='text-[11px] text-[#FFFFFF] w-full'>
            Our mission is to empower businesses and individuals with innovative digital solutions that exceed expectations and drive meaningful engagement.
        </p>
    </div>

    <div className='overflow-hidden rounded-2xl flex justify-end w-[40%]'>
        <img
            src="./images/group-afro-americans-working-together.png"
            alt=""
            className="w-[80%] h-[100%] rounded-l-full border-l-8 border-solid border-white "
        />
    </div>
</div>


<div className='flex bg-black text-white rounded-2xl my-8'>
    <div className='p-4 justify-center flex flex-col w-[60%]'>
        <h2 className=' text-2xl font-bold text-[#FFFFFF] py-2'>Our  Vission</h2>
        <p className='text-[11px] text-[#FFFFFF] w-full'>
        At Xifin Enterprise, we provide millions of employment opportunities for young adults in the future.
        </p>

        <div className='flex justify-between'>
            <p className='bg-[#FF0909] text-center justify-center p-1 px-4 rounded-full shadow-2xl shadow-[#FF0909]'> Innovate </p>
            <p className='bg-[#FF0909] p-4 px-8 rounded-full shadow-2xl shadow-[#FF0909]'> Accelerate </p>
            <p className='bg-[#FF0909] p-4 px-8 rounded-full shadow-2xl shadow-[#FF0909]'> Thrive </p>
        </div>
    </div>

    <div className='overflow-hidden rounded-2xl flex justify-end w-[40%]'>
        <img
            src="./images/pexels-ketut-subiyanto-4560080.png"
            alt=""
            className="w-[80%] h-[100%] rounded-l-full border-l-8 border-solid border-white "
        />
    </div>
</div>

      
    </div>
  )
}

