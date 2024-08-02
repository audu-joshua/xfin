import React from 'react'
import { GraphicHero } from '@/components/serviceComponents/graphicDesign/hero'
import { GraphicServices } from '@/components/serviceComponents/graphicDesign/services'
import Technologies from '@/components/serviceComponents/graphicDesign/technologiesandProcess'
import { Benefits } from '@/components/serviceComponents/benefits'
import Review from "@/components/homeComponents/reviews";
import CarouselWithContent from "@/components/homeComponents/reviews/carousel";
import Blogs from "@/components/homeComponents/blogs/indes";
import ContactForm from "@/components/homeComponents/form";

export default function page() {
  return (
    <div>
      <GraphicHero/>
      <GraphicServices/>
      <Technologies/>
      <Benefits/>
      {/*<Review/>
      <CarouselWithContent/>
      */}
      <Blogs/>
      <ContactForm/>
    </div>
  )
}

