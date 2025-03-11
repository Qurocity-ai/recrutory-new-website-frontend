import React from 'react'
import UnlockingPotential from '../BTOPOINT/UnlockingPotential'
import WhyWeMatter from '../BTOPOINT/WhyWeMatter'
import MarketInsights from '../BTOPOINT/MarketInsights'
import ServicePortfolio from '../BTOPOINT/ServicePortfolio'
import InnovativeLanguagePlatforms from '../BTOPOINT/InnovativeLanguage'

function NewPage() {
  return (
    <div>
      {/* <UnlockingPotential/> */}
      <WhyWeMatter/>
      <MarketInsights/>
      <ServicePortfolio/>
      <InnovativeLanguagePlatforms/>
    </div>
  )
}

export default NewPage
