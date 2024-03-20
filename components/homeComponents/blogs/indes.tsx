import React from 'react'
import { isDate } from 'util/types'

export default function Blogs() {
  return (
    <div className='bg-white flex justify-center py-8'>
    <h2>Visit Our Blog</h2>
    <div className='grid md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
        {data.map((d, index) => ( // Added index parameter to map function
            <div key={index} className='w-[90%] lg:w-full'> {/* Added key prop */}
                <img src={d.image} alt={d.title} className=''/>
                <h3 className='text-black font-bold text-base md:text-xl lg:text-2xl py-4'>{d.title}</h3>
                <p className='font-medium text-base text-black'>{d.date}</p>
            </div>
        ))}
    </div>
</div>

  )
}

const data = [
    {
      id: 1,
      image: "./images/b1.png",
      title: "The Evolution Of Finance: A Journey From The Past To The Present",
      date: "2024-01-29"
    },
  
    {
      id: 2,
      image: "./images/b2.png",
      title: "The Evolution Of Finance: A Journey From The Past To The Present",
      date: "2024-01-29"
    },
  
    {
      id: 3,
      image: "./images/b3.png",
      title: "The Evolution Of Finance: A Journey From The Past To The Present",
      date: "2024-01-29"
    },
  
  ]