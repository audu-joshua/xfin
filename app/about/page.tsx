import React from 'react'
import AboutHero from '@/components/aboutComponents/hero'
import Team from '@/components/aboutComponents/team'
import Mission from '@/components/aboutComponents/missionVision'

export default function page() {
  return (
    <div>
      <AboutHero/>
      <Team/>
      <Mission/>
    </div>
  )
}
