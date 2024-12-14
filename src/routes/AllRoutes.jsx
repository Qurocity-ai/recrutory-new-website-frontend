import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Blog from '../pages/Blog/Blog'

function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* By default it HomePage */}
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element=""/>
         <Route  path='/blogs' element={<Blog/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes