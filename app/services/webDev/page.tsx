import React from 'react'
import { WebDevHero } from '@/components/serviceComponents/webDev/hero'
import { WebServices } from '@/components/serviceComponents/webDev/body'
import WebTechnologies from '@/components/serviceComponents/webDev/technologies';
import Review from "@/components/homeComponents/reviews";
import CarouselWithContent from "@/components/homeComponents/reviews/carousel";
import Blogs from "@/components/homeComponents/blogs/indes";
import ContactForm from '@/components/homeComponents/form'

export default function page() {
  return (
    <div>
      <WebDevHero/>
      <WebServices/>
      <WebTechnologies/>
      {/* 
      <Review/>
      <CarouselWithContent/>
      */}
      {/* 
      <Blogs/>
      */}
      <ContactForm/>
    </div>
  )
}

