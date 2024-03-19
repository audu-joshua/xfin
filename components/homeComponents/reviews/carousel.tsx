'use client';
import React from 'react'
import Star from '@mui/icons-material/Star';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CarouselWithContent() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className="bg-black lg:px-28 px-6 py-6">
      <div className='w-3/4 m-auto bg-black rounded-xl'>
      <Slider {...settings} className=' gap-12'>
  {data.map(d => (
    <div key={d.id} className=' bg-[#C4C4C4] h-60 border border-red-600 border-solid rounded-xl px-8 py-10 align-middle text-center'> {/* Assuming each item in data has a unique identifier like 'id' */}
      {[...Array(5)].map((_, index) => (
        <Star key={index} className='text-black' />
      ))}
      <div className='grid gap-6'>
       <h3 className='text-black'> {d.review} </h3>
        <p className='py-6 text-black'> {d.reviewer} </p>
      </div>
    </div>
  ))}
  </Slider>

  <style jsx>{`
        .slick-slide > div {
          margin-right: 10px; /* Adjust this value as needed for the desired spacing */
        }
      `}</style>

</div>

    </div>
  );
}


const data = [
  {
    id: 1,
    review: "We had a great partnership where they committed to getting the work done",
    reviewer: "CEO & Founder, Startup Company"
  },

  {
    id: 2,
    star: "./images/star.png",
    review: "We had a great partnership where they committed to getting the work done",
    reviewer: "CEO & Founder, Startup Company"
  },

  {
    id: 3,
    review: "We had a great partnership where they committed to getting the work done",
    reviewer: "Earnest"
  },

  {
    id: 4,
    review: "We had a great partnership where they committed to getting the work done",
    reviewer: "Josh"
  },

  {
    id: 5,
    review: "We had a great partnership where they committed to getting the work done",
    reviewer: "Jude"
  }

]
