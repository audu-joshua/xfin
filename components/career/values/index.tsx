import React from 'react'

export default function CareerValues() {
  return (
    <div id='values' className='py-20 md:py-28 lg:py-12 px-[20px] md:px-[30px] xl:px-[97px] bg-[#e3e1e1]'>

      <div  className='md:-mt-24 -mt-32'>
        <div className='flex bg-white rounded-3xl '>
          <div  className='overflow-hidden hidden rounded-2xl md:flex w-[40%] self-end justify-start'>
            <img
              src="./images/Cwho.svg"
              alt=""
              className="w-[80%] bg-black h-[100%] rounded-r-full border-r-8 border-solid border-black " />
          </div>
          <div className='md:px-6 md:py-4 p-10  justify-center flex flex-col md:w-[60%]'>
            <h2 className=' text-3xl md:text-3xl lg:text-4xl font-bold text-black py-2'>Who are We?</h2>
            <p  className='text-base grid gap-6 md:text-base font-normal text-black w-full'>
              <p>
              At XIFIN Enterprise, we are a team of innovators passionate about harnessing technology to drive business success.
              </p>
              <p>
              With combined expertise and a customer-centric approach, we deliver cutting edge solution and dedicated support.
              </p>
              <p>
              Our value prioritise excellence, integrity, and customer satisfaction.
              </p>
              We are committed to staying ahead of the curve and making a positive impact.
              <p>
              Trust us to shape the future of your business.
              </p>
            </p>
          </div>


        </div>
      </div>

      <div>
        <h2 className=' text-3xl font-bold text-black text-center pt-10'> Our values </h2>
        <div className='grid grid-cols-2 py-4 pt-8 gap-4 md:grid-cols-4'>
          <div className=''>
            <p className='py-3 px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-full text-center justify-center'> Partnership </p>
          </div>

          <div className=''>
            <p className='py-3 px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-full text-center justify-center'> Responsibility </p>
          </div>

          <div className=''>
            <p className='py-3 px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-full text-center justify-center'> Transparency </p>
          </div>

          <div className=''>
            <p className='py-3 px-8 lg:py-3 text-white bg-black text-sm md:text-lg lg:text-2xl font-normal rounded-full w-full text-center justify-center'> Trust </p>
          </div>
        </div>

        <div>
          <h3 className=' text-3xl font-bold text-black text-center pt-10'> Numbers </h3>
          <div className='grid py-8'>
            <p className='text-black py-6 text-center text-3xl md:text-4xl justify-center lg:text-6xl font-bold  flex'>
              10+ <em className=' text-black text-[16px] md:text-[24px]  w-[30%] leading-none md:w-fit md:self-center  font-medium not-italic'> Experts in the field </em>
            </p>

            <p className='text-black py-4 text-center text-3xl md:text-4xl justify-center lg:text-6xl font-bold  flex'>
              6+ <em className=' text-black text-[16px] md:text-[24px]  w-[30%] leading-none block md:w-fit md:self-center font-medium not-italic'> Years on the Market </em>
            </p>
          </div>
        </div>
      </div>

      <div className='grid gap-8 md:flex md:justify-between py-2 items-center text-center'>
        <div className='text-center flex items-center justify-start md:justify-center'>
          <img src='./images/Group8.svg' className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold justify-center md:justify-normal  flex' />
          <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 50% of team growth per year </em>
        </div>

        <div className='text-center flex items-center justify-start md:justify-center'>
          <img src='./images/Group7.svg' className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold justify-center md:justify-normal  flex' />
          <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 80% of the team have at least 5 years of experience </em>
        </div>
      </div>

    </div>
  )
}

