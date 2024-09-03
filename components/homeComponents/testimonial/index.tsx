"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Testimonial() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1.5 }} // Increase duration for slower animation
      className='lg:px-28 px-6 py-6 bg-white'
    >
      <div className='md:flex md:gap-8 items-center'>
        <img
          src="./images/IMG_20230804_021813.png"
          alt="Jude Aria"
          className="w-[100%] md:w-[50%]"
        />
        <div className='py-5'>
          <h2 className='text-black text-[32px] md:text-[34px] lg:text-5xl font-bold leading-none'>
            Transform Your Business
          </h2>
          <p className='text-black py-3 font-medium text-sm md:text-base lg:text-lg'>
            Discover how our expert services can elevate your digital presence
          </p>
        </div>
      </div>

      <div className='md:py-8 lg:py-12'>
        <div className='py-4'>
          <h2 className='text-black text-[32px] md:text-[34px] lg:text-5xl font-bold'>
            Video Testimonials
          </h2>
          <p className='text-black font-medium text-sm md:text-base lg:text-lg'>
            Listen to what our clients have to say about us
          </p>
        </div>
        <iframe
          width="100%"
          height="360"
          src="https://drive.google.com/file/d/1woc9wBWFFiOz5amYELho_VgwJ9vZyRa8/preview"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className='rounded-xl'
        ></iframe>
      </div>
    </motion.div>
  );
}
