import React from 'react'
import { VAHero } from '@/components/serviceComponents/virtualAssistant/hero'
import { VAServices } from '@/components/serviceComponents/virtualAssistant/body'
import VATechnologies from '@/components/serviceComponents/virtualAssistant/technologies'
import { Benefits } from '@/components/serviceComponents/benefits'
import Review from '@/components/homeComponents/reviews'
import Blogs from '@/components/homeComponents/blogs/indes'
import ContactForm from '@/components/homeComponents/form'

export default function page() {
  return (
    <div>
      <VAHero/>
      <VAServices/>
      <VATechnologies/>
      <Benefits/>
      <Review/>
      <Blogs/>
      <ContactForm/>
    </div>
  )
}

