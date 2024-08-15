import React from 'react'
import { CryptoHero } from '@/components/serviceComponents/crypto/hero'
import { CryptoServices } from '@/components/serviceComponents/crypto/body'
import CryptoTechnologies from '@/components/serviceComponents/crypto/technologies'
import { Benefits } from '@/components/serviceComponents/benefits'
import Review from '@/components/homeComponents/reviews'
import Blogs from '@/components/homeComponents/blogs/indes'
import ContactForm from "@/components/homeComponents/form";

export default function page() {
  return (
    <div>
      <CryptoHero/>
      <CryptoServices/>
      <CryptoTechnologies/>
      <Benefits/>
      {/*
      <Review/> 
      <Blogs/>
      */}
      <ContactForm/>

    </div>
  )
}

