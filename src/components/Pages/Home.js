import React from 'react'

import Benefit from './../Benefit/Benefit'
import HeroSection from './../Hero/Hero'
import Navigation from '../Navbar/Navigation'


function Home() {
  return (
   <>
  <Navigation/> 
   <HeroSection />
   
      <Benefit />

   </>
  )
}

export default Home