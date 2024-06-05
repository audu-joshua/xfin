import React from 'react'

export default function CareerValues() {
  return (
    <div className='py-20 md:py-28 lg:py-12 px-[20px] md:px-[30px] xl:px-[97px] bg-[#e3e1e1]'>

        <div className='md:-mt-24 -mt-32'>
                <div className='flex bg-white rounded-3xl '>
                <div className='overflow-hidden hidden rounded-2xl md:flex w-[40%] self-end justify-start'>
                <img
                    src="./images/Cwho.svg"
                    alt=""
                    className="w-[80%] bg-[#FB2B30] h-[100%] rounded-r-full border-r-8 border-solid border-[#FB2B30] "/>
            </div>
                <div className='md:px-6 md:py-4 p-10  justify-center flex flex-col md:w-[60%]'>
                    <h2 className=' text-3xl md:text-3xl lg:text-4xl font-bold text-[#FB2B30] py-2'>Who are We?</h2>
                        <p className='text-base md:text-base font-normal text-black w-full'>
                        Geniusee is a reliable tech partner that provides flawless consulting and software development services at all stages, from product design to post-release support. Our clients are dynamic F500, F1000 level businesses in FinTech, Edtech, Retail, etc., as well as startups from YCombinator & TechStars on Series A to D funding rounds. What makes us stand out of the crowd of many same service providers? We become the part of our clients’ life being as much involved in the project as they are. <p> No matter the function, we become a native part of the project, like it belongs to us. That’s how much we care. </p> <p>We try to bring out the best in ourselves and have quite well-moderated sense of perfection: we are AWS Advanced Consulting Partner, ISO-certified, Forbes-recognized and Clutch 5*-rated company. </p> Though it might look like we are too hard on ourselves, we laugh a lot and create the environment where genuine friendship occurs. That’s simple, as we match by our values!
                        </p>
                </div>

            
            </div>
        </div>

        <div>
            <h2 className=' text-3xl font-bold text-[#FB2B30] text-center pt-10'> Our values </h2>
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
                <h3 className=' text-3xl font-bold text-[#FB2B30] text-center pt-10'> Numbers </h3>
                <div className='grid py-8'>
                <p className='text-[#FB2B30] py-6 text-center text-3xl md:text-4xl justify-center lg:text-6xl font-bold  flex'>
        200+ <em className=' text-black text-[16px] md:text-[24px]  w-[30%] leading-none md:w-fit md:self-center  font-medium not-italic'> Experts in the field </em>
      </p>

      <p className='text-[#FB2B30] py-4 text-center text-3xl md:text-4xl justify-center lg:text-6xl font-bold  flex'>
        6+ <em className=' text-black text-[16px] md:text-[24px]  w-[30%] leading-none block md:w-fit md:self-center font-medium not-italic'> Years on the Market </em>
      </p>
                </div>
            </div>
        </div>

        <div className='grid gap-8 md:flex md:justify-between py-2 items-center text-center'>
        <div className='text-center flex items-center justify-start md:justify-center'>
      <img src='./images/Group8.svg' className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold justify-center md:justify-normal  flex'/>
        <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 50% of team growth per year </em>
    </div>

    <div className='text-center flex items-center justify-start md:justify-center'>
      <img src='./images/Group7.svg' className='text-[#938888] text-center text-3xl md:text-4xl lg:text-5xl font-bold justify-center md:justify-normal  flex'/>
       <em className=' text-black text-[16px] md:text-[24px]  w-full leading-none md:w-[60%] font-medium not-italic text-left px-2 flex items-center'> 80% of the team have at least 5 years of experience </em>
    </div>
        </div>
      
    </div>
  )
}

