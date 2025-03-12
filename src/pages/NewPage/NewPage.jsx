import React from 'react'
import UnlockingPotential from '../BTOPOINT/UnlockingPotential'
import WhyWeMatter from '../BTOPOINT/WhyWeMatter'
import MarketInsights from '../BTOPOINT/MarketInsights'
import ServicePortfolio from '../BTOPOINT/ServicePortfolio'
import InnovativeLanguagePlatforms from '../BTOPOINT/InnovativeLanguage'
import Workflow from '../BTOPOINT/Workflow'
import Footprint from '../BTOPOINT/FootprintUI'
import LinguisticProcess from '../BTOPOINT/LinguisticProcess'
import HiringOpt from '../BTOPOINT/HiringOpt'

function NewPage() {
  return (
    <div>
      {/* <UnlockingPotential/> */}
      <WhyWeMatter/>
      <MarketInsights/>
      <ServicePortfolio/>
      <InnovativeLanguagePlatforms/>
      <HiringOpt/>
      <Workflow/>
      <Footprint/>
    <LinguisticProcess/>
    </div>
  )
}

export default NewPage
