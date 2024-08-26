"use client";
import React from 'react'
import { motion } from 'framer-motion';


const slideInLeftVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };
  
  const slideInRightVariants = {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

export function Benefits() {
  return (
    <div className='bg-[rgb(227,225,225)] lg:px-28 px-6 py-6 overflow-hidden'>
        <div className=' md:bg-[#252424] px-2 md:px-4 lg:px-6 rounded-3xl'>
            <h1 className='md:text-white text-[#252424] md:pt-4 text-4xl md:text-4xl lg:text-6xl'> Benefits Of Working With Xifin Enterprise </h1>
            <p className=' text-black py-8 md:py-4 md:text-white lg:w-[70%]'> Combining attractive design and product utility, we create numerous benefits with our digital product experience design services.</p>

            <div className='grid lg:py-12 md:grid-cols-2 gap-2 md:gap-10 md:justify-end md:items-end lg:gap-12'>
            <motion.div
          className='p-4'
          variants={slideInLeftVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1 }}
        >
                <div className='bg-white py-3 md:py-8 md:rounded-2xl p-8 shadow-lg shadow-black'>
                    <h2 className=' text-lg pb-2 md:text-2xl text-[#252424] font-bold'> Expert Solutions </h2>
                    <p className='text-[#000000] text-sm'> Leverage our expertise in cutting-edge technologies to drive innovation and growth. Our team delivers tailored solutions that meet your unique business needs.
                    </p>
                </div>
            </motion.div>

            <motion.div
          className='p-4'
          variants={slideInRightVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1 }}
        >
                <div className='bg-white py-3 md:py-8 md:rounded-2xl p-8 shadow-lg shadow-black'>
                    <h2 className=' text-lg pb-2 md:text-2xl text-[#252424] font-bold'> Ehnanced Effiency </h2>
                    <p className='text-[#000000] text-sm'> Streamline your operations with our optimized processes and automation capabilities, reducing costs and increasing productivity.
                    </p>
                </div>
        </motion.div>


        <motion.div
          className='p-4'
          variants={slideInLeftVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1 }}
        >
                <div className='bg-white py-3 md:py-8 md:rounded-2xl p-8 shadow-lg shadow-black'>
                    <h2 className=' text-lg pb-2 md:text-2xl text-[#252424] font-bold'> Scalable Growth </h2>
                    <p className='text-[#000000] text-sm'> Partner with us to build scalable solutions that adapt to your evolving business needs, ensuring seamless growth and flexibility. 
                    </p>
                </div>
            </motion.div>


            <motion.div
          className='p-4'
          variants={slideInRightVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1 }}
        >

                <div className='bg-white py-3 md:py-8 md:rounded-2xl p-8 shadow-lg shadow-black'>
                    <h2 className=' text-lg pb-2 md:text-2xl text-[#252424] font-bold'> Proactive Support </h2>
                    <p className='text-[#000000] text-sm'> Enjoy dedicated support from our expert team, ensuring prompt issue resolution and proactive maintenance to minimize downtime.
                    </p>
                </div>
            </motion.div>


            <motion.div
          className='p-4'
          variants={slideInLeftVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1 }}
        >

                <div className='bg-white py-3 md:py-8 md:rounded-2xl p-8 shadow-lg shadow-black'>
                    <h2 className=' text-lg pb-2 md:text-2xl text-[#252424] font-bold'> Innovative Approach </h2>
                    <p className='text-[#000000] text-sm'> Stay ahead of the curve with our innovative approach, leveraging the latest technologies to drive business success and competitiveness.
                    </p>
                </div>
        </motion.div>

        <motion.div
          className='p-4'
          variants={slideInRightVariants}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1 }}
        >

                <div className='bg-white py-3 md:py-8 md:rounded-2xl p-8 shadow-lg shadow-black'>
                    <h2 className=' text-lg pb-2 md:text-2xl text-[#252424] font-bold'> Trust and Reliability </h2>
                    <p className='text-[#000000] text-sm'> Build on our reputation for reliability and trust, ensuring your business is in good hands with our experienced and dedicated team. 
                    </p>
                </div>
                </motion.div>

            </div>
        </div>
    </div>
  )
}

