import React from 'react'
import Navbar from './componants/Navbar'
import Home from './pages/Home/Home'
import AllRoutes from './routes/AllRoutes'
import Footer from './componants/Footer'
import "./App.css"
function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App