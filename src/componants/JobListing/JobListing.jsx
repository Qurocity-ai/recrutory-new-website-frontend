  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import axios from "axios";
  import jobs from "./JobListing.module.css";
  import { FaMapMarkerAlt, FaBriefcase, FaRupeeSign, FaClock } from "react-icons/fa";
  import config from "../../services/config";
  
  const JobListing = () => {
    const [jobList, setJobList] = useState([]);
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
            const response = await fetch(`${config.apiUrl}/api/jobs`);
            if (response.ok) {
              const data = await response.json();
              setJobList(data);
            } else {
              console.error("Failed to fetch jobs");
            }
          } catch (error) {
            console.error("Error fetching jobs:", error);
          }
      };
  
      fetchJobs();
    }, []);
  
    return (
      <div className={jobs.jobListingContainer}>
        <h1 className={jobs.title}>Currently Hiring!!</h1>
        <div className={jobs.jobGrid}>
          {jobList.length > 0 ? (
            jobList.map((job) => (
              <Link to={`/jobs/${job._id}`} className={jobs.jobLink} key={job._id}>
                <div className={jobs.jobCard}>
                  <div className={jobs.jobHeader}>
                    <h2>{job.JobTitle}</h2>
                    <span className={jobs.company}>{job.Company}</span>
                  </div>
                  <hr />
                  <div className={jobs.jobDetails}>
                    <p>
                      <FaMapMarkerAlt /> {job.Location} ({job.JobType})
                    </p>
                    <p>
                      <FaBriefcase /> {job.Experience}
                    </p>
                    <p>
                      <FaRupeeSign /> ₹ {job.CTC.toLocaleString()}
                    </p>
                  </div>
                 <div className={jobs.bottome}>
                    <div className={jobs.footer}>
                      <FaClock /> Posted {job.dateposted || "Recently"}
                    </div>
                    <p>View Details</p>
                 </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No jobs available at the moment.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default JobListing;
  