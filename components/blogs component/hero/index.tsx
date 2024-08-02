import React from 'react'

export function BlogsHero() {
  return (
    <div className=' z-30 grid items-end h-full md:h-screen py-16 px-[20px] md:px-[30px] mt-[-30px] xl:px-[97px] bg-[#393636] '>
        <h1 className='text-3xl font-medium pb-6'> Blogs </h1>
      <div className='grid gap-4 md:grid-cols-3 md:grid-rows-1' >
        <div className=' md:row-start-1 md:row-end-2'>
            <img src='./images/contactmobile.png' className='rounded-2xl'></img>
        </div>
        <div className='md:row-start-1 md:row-end-2'>
        <img src='./images/contactmobile.png' className='rounded-2xl'></img>
        </div>
        <div className=' md:row-start-1 md:row-end-[3/2]'>
        <img src='./images/contactbgmobile.png' className='rounded-2xl'></img>
        </div>
        <div className='rounded-2xl bg-[#2e2e2e] p-4 md:row-start-2 md:row-end-2 md:col-start-3'>
            <p> Subscribe to Our Blogs Update </p>
            <div className=' flex justify-between gap-6 py-4'>
                <input className='bg-white py-2 focus:outline-none px-4 w-[70%] text-black   rounded-3xl'/>
                <p className="bg-[#FF0909] w-[30%] flex items-center justify-center text-center px-6 rounded-full shadow-2xl shadow-[#FF0909]"> Subscribe </p>
            </div>

            <div className='flex justify-between gap-4 py-4'>
                <input className='' type='checkbox'/>
                <p className=' text-sm'> I agree that my personal information will be processed and stored by 
                Xifin Enterpeise. </p>
            </div>

        </div>
      </div>
    </div>
  )
}
