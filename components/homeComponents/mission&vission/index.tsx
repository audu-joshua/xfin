import React from 'react'

export default function Mission() {
  return (
    <div className='bg-white lg:px-28 px-6 py-6'>

<div className='hidden md:flex bg-[#FB2B30] rounded-2xl '>
    <div className='p-4 justify-center flex flex-col w-[60%]'>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] py-2'>Our  Mission</h2>
        <p className='text-[11px] md:text-base lg:text-lg text-[#FFFFFF] w-full'>
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

<div className='md:hidden grid bg-black rounded-2xl '>
<div className='overflow-hidden flex justify-end'>
        <img
            src="./images/group-afro-americans-working-together.png"
            alt=""
            className="h-[100%] "
        />
    </div>
    <div className='p-4 justify-center flex flex-col'>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] py-2'>Our  Mission</h2>
        <p className='text-[11px] md:text-base lg:text-lg text-[#FFFFFF] w-full'>
            Our mission is to empower businesses and individuals with innovative digital solutions that exceed expectations and drive meaningful engagement.
        </p>
    </div>
</div>


<div className='md:flex hidden bg-black text-white rounded-2xl my-8'>
    <div className='p-4 justify-center flex flex-col w-[60%]'>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] py-2'>Our  Vission</h2>
        <p className='text-[11px] text-[#FFFFFF] w-full md:text-base lg:text-lg'>
        At Xifin Enterprise, we envision a future where technology empowers millions of young adults to thrive in a world of endless employment opportunities and innovative possibilities.
        </p>

        <div className='md:flex md:gap-4 w-[70%] my-4 justify-between hidden py-4'>
            <p className='bg-[#FF0909] p-4 px-8 rounded-full shadow-2xl shadow-[#FF0909]'> Innovate </p>
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

<div className='md:hidden grid bg-black text-white my-8 rounded-b-2xl w-fit'>
<div className='overflow-hidden'>
        <img
            src="./images/pexels-ketut-subiyanto-4560080.png"
            alt=""
            className="rounded-lg"
        />
    </div>
    <div className='px-4 flex flex-col'>
        <h2 className=' text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFFFFF] py-2'>Our  Vission</h2>
        <p className='text-[11px] text-[#FFFFFF] w-full md:text-base lg:text-lg'>
        At Xifin Enterprise, we envision a future where technology empowers millions of young adults to thrive in a world of endless employment opportunities and innovative possibilities.
        </p>

        <div className='flex w-full my-4 justify-between py-4'>
            <p className='bg-[#FF0909] p-2 px-3 rounded-full shadow-2xl shadow-[#FF0909]'> Innovate </p>
            <p className='bg-[#FF0909] p-2 px-3 rounded-full shadow-2xl shadow-[#FF0909]'> Accelerate </p>
            <p className='bg-[#FF0909] p-2 px-3 rounded-full shadow-2xl shadow-[#FF0909]'> Thrive </p>
        </div>
    </div>
</div>

      
    </div>
  )
}

