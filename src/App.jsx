import React from 'react'
import Navbar from './componants/Navbar'
import Home from './pages/Home/Home'
import AllRoutes from './routes/AllRoutes'
import Footer from './componants/Footer'
import "./App.css"
import WhyWeMatter from './pages/BTOPOINT/WhyWeMatter'
import UnlockingPotential from './pages/BTOPOINT/UnlockingPotential'
function App() {
  return (
    <div>
      <Navbar/>
      {/* <AllRoutes/> */}
      {/* <WhyWeMatter/> */}
      <UnlockingPotential/>
      <Footer/>
    </div>
  )
}

export default App