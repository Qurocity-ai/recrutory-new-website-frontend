import React, { useEffect } from 'react'
import GlobalInsightStyle from "../../styles/GlobalInsight/GlobalInsight.module.css"
import GlobalInsightView from './GlobalInsightView'


function GlobalInsight() {

    useEffect(()=>{
       window.scrollTo(0,0)
    },[]);


  return (
   <>
      <div style={{
        backgroundImage: `url("https://res.cloudinary.com/dgvbilofn/image/upload/v1714020450/background_zceu6f.png")`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      }}>
        <div>
          <div className={GlobalInsightStyle.main_hero}>
            <h2>Unlocking Talent Beyond Borders</h2>
            <p>At Recrutory, we transcend borders to deliver unparalleled insights into global talent acquisition. Our commitment to sourcing the right resources extends beyond geographical boundaries, ensuring organizations have access to the best talent from around the world.</p>
          </div>

          {/* Map */}

          <div className={GlobalInsightStyle.viewMap}>
            <img src='src/assets/global-insights.png' />
          </div>

        </div>
        <GlobalInsightView />
    </div>
   
   </>
  )
}

export default GlobalInsight