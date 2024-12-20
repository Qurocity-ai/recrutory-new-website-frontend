import React from 'react'
import Navbar from '../../componants/Navbar'
import HeroSection from './HeroSection'
import MainSection from './MainSection'
import Footer from '../../componants/Footer'
import Testimonial from './Testimonial'
import Scroll from '../../componants/scroll'
import JobListing from '../../componants/JobListing/JobListing'
import RunningText from '../../componants/RunningText'

function Home() {
  return (
    <div>
      <HeroSection/>
      <MainSection/>
      <JobListing/>
      <Testimonial/>
      <RunningText/>
      {/* <Scroll/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default Home