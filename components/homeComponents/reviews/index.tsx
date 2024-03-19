import React from 'react'
import StarIcon from '@mui/icons-material/Star';


export default function Review() {
  return (
    <div className='bg-white flex  justify-center py-8'>
      <h2 className='text-[#FF0909] text-base md:text-lg lg:text-2xl px-4 font-bold'> Reviews </h2>
        <div>
        <StarIcon color="primary" className='text-[#FF0909]'/>
        <StarIcon color="primary" className='text-[#FF0909]'/>
        <StarIcon color="primary" className='text-[#FF0909]'/>
        <StarIcon color="primary" className='text-[#FF0909]'/>
        <StarIcon color="primary" className='text-[#FF0909]'/>
        </div>
        
      {/**<p className='text-[#FF0909]'>Review</p> **/}
    </div>
  )
}

