import React from 'react'
import CareerHero from '@/components/career/hero'
import CareerValues from '@/components/career/values'
import { Benefits } from '@/components/serviceComponents/benefits'
import Branding from '@/components/homeComponents/branding'
import CareerTestimonials from '@/components/career/testimonials'
import Career from '@/components/homeComponents/joinus'
import ContactForm from '@/components/homeComponents/form'

export default function page() {
  return (
    <div>
     <CareerHero/>
     <CareerValues/>
     <Benefits/>
     <Branding/>
     <CareerTestimonials/>
     <Career/>
     <ContactForm/>
    </div>
  )
}
