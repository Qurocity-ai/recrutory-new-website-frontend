import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import JobListing from '../componants/JobListing/JobListing'
import JobDetails from '../componants/JobDetails/JobDetails'
import BlogListPage from '../componants/BlogListPage/BlogListPage'
import BlogDetailPage from '../componants/BlogDetailPage/BlogDetailPage'

function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* By default it HomePage */}
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element=""/>
         <Route path='/jobs' element={<JobListing />} />
         <Route path='/jobs/:id' element={<JobDetails />} />
         <Route path='/blogs/:id' element={<BlogDetailPage />} />
         <Route path='/blogs' element={<BlogListPage />} />

      </Routes>
    </div>
  )
}

export default AllRoutes