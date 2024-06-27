import React from 'react'
import Link from 'next/link'


export default function Branding () {
  return (
    <div className='bg-white lg:px-28 px-6 py-6'>
      <h1 className='text-[#FB2B30] text-center text-3xl md:text-4xl lg:text-5xl font-bold'> Our Branding Solutions </h1>
      
      <div className='grid lg:py-12 md:grid-cols-2 md:gap-4 md:justify-end md:items-end lg:gap-6'>
        <div>
            <h2 className='text-[#FB2B30] text-2xl md:text-3xl lg:text-4xl font-bold py-6 cursor-pointer'> Graphic Design </h2>
            <p className=' text-[black]'> Our graphic design services craft compelling visual stories that capture your brand’s essence, resonating with your audience and setting you apart from the competition. From logos to brochures, we create designs that inspire and drive results. </p>
            <Link href="/services/graphicdesign" className=' cursor-pointer'>
            <p className='bg-[#FF0909] text-center p-4 px-8 rounded-full shadow-2xl my-4 shadow-[#FF0909] md:w-1/2 text-white'> Learn More </p>
            </Link>

        </div>

        <div>
            <h2 className='text-[#FB2B30] text-2xl md:text-3xl lg:text-4xl font-bold py-6'> UI/UX Design </h2>
            <p className=' text-[black]'> We design intuitive and user-centric interfaces that transform user experiences. Our UI/UX expertise crafts seamless interactions, driving engagement and conversions for your digital products.  </p>
            <Link href="/services/ui" className=' cursor-pointer'>
            <p className='bg-[#FF0909] text-center p-4 px-8 rounded-full shadow-2xl my-4 shadow-[#FF0909] md:w-1/2 text-white'> Learn More </p>
            </Link>
        </div>

        <div>
            <h2 className='text-[#FB2B30] text-2xl md:text-3xl lg:text-4xl font-bold py-6'> Web Development </h2>
            <p className=' text-[black]'> We build fast, secure, and scalable websites that bring your vision to life. Our expert web development services combine cutting-edge technology with innovative design, driving business growth and customer engagement. </p>
            <Link href="/services/webDev" className=' cursor-pointer'>
            <p className='bg-[#FF0909] text-center p-4 px-8 rounded-full shadow-2xl my-4 shadow-[#FF0909] md:w-1/2 text-white'> Learn More </p>
            </Link>
        </div>

        <div>
            <h2 className='text-[#FB2B30] text-2xl md:text-3xl lg:text-4xl font-bold py-6'> Crypto Exchange </h2>
            <p className=' text-[black]'> WWe optimize your crypto exchange and wallet performance with expert diagnostics and solutions. Our services include exchange setup, wallet integration, smart contract auditing, and security enhancements, ensuring seamless and secure crypto transactions.  </p>
            <Link href="/services/crypto" className=' cursor-pointer'>
            <p className='bg-[rgb(255,9,9)] text-center p-4 px-8 rounded-full shadow-2xl my-4 shadow-[#FF0909] md:w-1/2 text-white'> Learn More </p>
            </Link>
        </div>

        <div>
            <h2 className='text-[#FB2B30] text-2xl md:text-3xl lg:text-4xl font-bold py-6'> Virtual Assistant </h2>
            <p className=' text-[black]'> We provide expert virtual assistant services, streamlining your tasks and enhancing productivity. From email management to data entry, scheduling, and social media management, our virtual assistants work seamlessly to support your business needs, freeing up your time to focus on growth and success. </p>
            <Link href="/services/virtualassistant" className=' cursor-pointer'>
            <p className='bg-[#FF0909] text-center p-4 px-8 rounded-full shadow-2xl my-4 shadow-[#FF0909] md:w-1/2 text-white'> Learn More </p>
            </Link>
        </div>

        <div>
            <h2 className='text-[#FB2B30] text-2xl md:text-3xl lg:text-4xl font-bold py-6'> IT Services </h2>
            <p className=' text-[black]'> We deliver comprehensive IT solutions, ensuring your technology infrastructure runs smoothly and efficiently. Our expert services include network setup, cybersecurity, cloud migration, and technical support, providing you with peace of mind and maximizing your IT investment.  </p>
            <Link href="/services/it" className=' cursor-pointer'>
            <p className='bg-[#FF0909] text-center p-4 px-8 rounded-full shadow-2xl my-4 shadow-[#FF0909] md:w-1/2 text-white'> Learn More </p>
            </Link>
        </div>

      </div>
    </div>
  )
}
