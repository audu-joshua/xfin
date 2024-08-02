import React from 'react'
import { UiUxHero } from '@/components/serviceComponents/ui/hero'
import { OurUiUxServices } from '@/components/serviceComponents/ui/body/Our'
import UITechnologies from '@/components/serviceComponents/ui/technologies'
import { Benefits } from '@/components/serviceComponents/benefits'
import Review from "@/components/homeComponents/reviews";
import CarouselWithContent from "@/components/homeComponents/reviews/carousel";
import Blogs from "@/components/homeComponents/blogs/indes";
import ContactForm from "@/components/homeComponents/form";


export default function page() {
  return (
    <div>
      <UiUxHero/>
      <OurUiUxServices/>
      <UITechnologies/>
      <Benefits/>
      {/* 
      <Review/>
      <CarouselWithContent/>
      */}
      <Blogs/>
      <ContactForm/>
    </div>
  )
}

