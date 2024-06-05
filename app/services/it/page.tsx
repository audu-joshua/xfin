import React from 'react'
import { ItHero } from '@/components/serviceComponents/itServices/hero'
import { ITServices } from '@/components/serviceComponents/itServices/body'
import ITTechnologies from '@/components/serviceComponents/itServices/technologies'
import { Benefits } from '@/components/serviceComponents/benefits'
import Review from '@/components/homeComponents/reviews'
import Blogs from '@/components/homeComponents/blogs/indes'
import ContactForm from '@/components/homeComponents/form'

export default function page() {
  return (
    <div>
      <ItHero/>
      <ITServices/>
      <ITTechnologies/>
      <Benefits/>
      <Review/>
      <Blogs/>
      <ContactForm/>
    </div>
  )
}

