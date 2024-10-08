import React from 'react'

export function CryptoServices() {
  const whatsappUrl = `https://wa.me/447378201108?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20business%20call%20with%20you.`;
  return (
    <div className='z-30 pt-10 md:pt-20 pb-10 px-[20px] md:px-[30px] xl:px-[97px] bg-white'>
      <div className='text-white md:w-[65%]'>
        <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold py-4 text-black'> Crypto Exchange </h2>
        <p className=' text-sm md:text-lg lg:text-2xl md:w-[60%] lg:w-[70%] font-normal text-black'>Whether you&apos;re a seasoned trader or just starting out, we&apos;ve got everything you need to navigate the exciting world of crypto. Sign up today and join the future of finance!</p>
      </div>

      <div className='my-8 md:flex md:justify-between'>
      <div className='w-full'>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <p className='py-2 cursor-pointer px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-fit text-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105'>
          Book a Call
        </p>
      </a>
    </div>

        <div className='w-full'>
          <div>
            <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black
  '>Crypto Conversion</h2>
            <p className='text-black'>Convert cryptocurrency payments into your preferred fiat currency instantly with our cryptocurrency conversion service. Our platform provides a seamless solution for converting digital assets into traditional currency</p>
          </div>

          <div>
            <h2 className=' text-xl md:text-3xl lg:text-4xl font-bold py-4 text-black
  '>P2P Transaction</h2>
            <p className='text-black'>Say goodbye to intermediaries and hello to instant transactions, low fees, and complete control over your crypto. Make a quick purchase, or simply explore the world of cryptocurrencies, our peer-to-peer service has you covered.</p>
          </div>

        </div>

           </div>
      </div>
  )
}
