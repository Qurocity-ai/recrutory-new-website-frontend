import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import JobListing from '../componants/JobListing/JobListing'
import JobDetails from '../componants/JobDetails/JobDetails'
import BlogListPage from '../componants/BlogListPage/BlogListPage'
import BlogDetailPage from '../componants/BlogDetailPage/BlogDetailPage'
import Blog from '../pages/Blog/Blog'
import Verbiq from '../pages/Verbiq/Verbiq'
import GlobalInsight from '../pages/GlobalInsight/GlobalInsight'
import Trends from '../pages/Trends/Trends'
import Industries from '../pages/Industries/Industries'

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

         <Route  path='/blogs' element={<Blog/>}/>
         <Route path='/product' element={<Verbiq/>}/>
        <Route path='/globalinsights' element={<GlobalInsight/>}/>
          <Route path="/trends" element={<Trends />} />
          <Route path="/industries" element={<Industries />} />
      </Routes>
    </div>
  )
}

export default AllRoutes