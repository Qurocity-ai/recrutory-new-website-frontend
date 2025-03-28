import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import JobListing from '../componants/JobListing/JobListing'
import JobDetails from '../componants/JobDetails/JobDetails'
import BlogListPage from '../componants/BlogListPage/BlogListPage'
import BlogDetailPage from '../componants/BlogDetailPage/BlogDetailPage'
import Verbiq from '../pages/Verbiq/Verbiq'
import GlobalInsight from '../pages/GlobalInsight/GlobalInsight'
import Trends from '../pages/Trends/Trends'
import Industries from '../pages/Industries/Industries'
import Coperate from '../pages/Coperatepage/Coperate'
import CenterOfExcellence from '../pages/CenterOfExcellence/CenterOfExcellence'
import CardDetails from '../pages/CenterOfExcellence/CardDetails'
import NewPage from '../pages/NewPage/NewPage'

function AllRoutes() {
  return (
    <div>
      <Routes>
        {/* By default it HomePage */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element="" />
        <Route path='/jobs' element={<JobListing />} />
        <Route path='/jobs/:id' element={<JobDetails />} />
        <Route path='/blogs/:id' element={<BlogDetailPage />} />
        <Route path='/blogs' element={<BlogListPage />} />
        <Route path='/Verbiq' element={<Verbiq />} />
        <Route path='/globalinsights' element={<GlobalInsight />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/industries" element={<Industries />} />
        <Route path='/corporate' element={<Coperate />} />
        <Route path='/CenterofExcellence' element={<CenterOfExcellence />} />
        <Route path="/details/:id" element={<CardDetails/>} />
        <Route path="/corporatedeck" element={<NewPage/>} />

      </Routes>
    </div>
  )
}

export default AllRoutes