import React from 'react'
import Navbar from '../../componants/Navbar'
import HeroSection from './HeroSection'
import MainSection from './MainSection'
import Footer from '../../componants/Footer'
import Testimonial from './Testimonial'
import Scroll from '../../componants/scroll'

function Home() {
  return (
    <div>
      <HeroSection/>
      <MainSection/>
      <Testimonial/>
      {/* <Scroll/> */}
      <Footer/>
    </div>
  )
}

export default Home