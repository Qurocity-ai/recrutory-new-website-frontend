import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../services/config";
import styles from "./JobDetails.module.css";
import PopupApplyForm from "../PopupApplyForm/PopupApplyForm";

const JobDetails = () => {
  const { id } = useParams(); // Extract jobId from URL
  const [job, setJob] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State to toggle popup visibility

  // Fetch job details
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchJob = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/api/jobs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setJob(data);
        } else {
          console.error("Failed to fetch job details");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchJob();
  }, [id]);

  // Function to open the popup
  const handleApplyClick = () => {
    setShowPopup(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className={styles.container}>
        {job ? (
          <div className={styles.card}>
            <h1 className={styles.title}>{job.JobTitle}</h1>
            <p className={styles.company}>{job.Company}</p>

            <div className={styles.details}>
              <p>
                <strong>Location:</strong> {job.Location}
              </p>
              <p>
                <strong>Experience:</strong> {job.Experience} &nbsp;| &nbsp;
                <strong>CTC:</strong> {job.CTC} &nbsp;| &nbsp;
                <strong>Valid Till:</strong> {job.validitydate}
              </p>
              <p>
                <strong>Date Posted:</strong>&nbsp;
                {job.dateposted || "Not Available"}
              </p>
            </div>

            <hr
              style={{
                marginBottom: "1.9rem",
              }}
            />

            <h2>Qualifications</h2>
            <ul className={styles.bulletList}>
              {job.qualification.split(". ").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>Description</h2>
            <ul className={styles.bulletList}>
              {job.description.split(". ").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2>Expectations</h2>
            <ul className={styles.bulletList}>
              {job.expectations.split(". ").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Apply Button */}
            <div className={styles.applyContainer}>
              <button className={styles.applyButton} onClick={handleApplyClick}>
                Apply Now
              </button>
            </div>

            {/* Popup Form */}
            {showPopup && (
              <PopupApplyForm
                jobId={id} // Pass the jobId to the PopupApplyForm
                onClose={closePopup} // Pass close handler to close the popup
              />
            )}
          </div>
        ) : (
          <p className={styles.loading}>Loading job details...</p>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
