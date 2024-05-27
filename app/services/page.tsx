import React from 'react'
import ServiceHero from '@/components/serviceComponents/hero'
import Review from '@/components/homeComponents/reviews'
import CarouselWithContent from '@/components/homeComponents/reviews/carousel'
import Branding from '@/components/homeComponents/branding'
import { Benefits } from '@/components/serviceComponents/benefits'
import ContactForm from '@/components/homeComponents/form'

export default function page() {
  return (
    <div>
      <ServiceHero/>
      <Review/>
      <CarouselWithContent/>
      <Branding/>
      <Benefits/>
      <ContactForm/>
    </div>
  )
}

