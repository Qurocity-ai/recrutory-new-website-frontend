import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./CardDetails.module.css";

const CardDetails = () => {
  const { id } = useParams(); // Get user ID from URL
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(location.state?.user || null);
  const [loading, setLoading] = useState(!user);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      axios
        .get(`https://recrutory-new-website-backend.onrender.com/user/${id}`)
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
          setError("Failed to load user data.");
          setLoading(false);
        });
    }
  }, [id, user]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  // Handle missing data safely
  const frenchProficiency = user.language_proficiency?.French || {};
  const skills = frenchProficiency.skills || {};
  const certifications = user.certifications || [];
  const workExperience = user.work_experience || [];

  return (
    <div className={styles.detailsContainer}>
      {/* Left Section: User Details */}
      <div className={styles.leftSection}>
        <div className={styles.detailsCard}>
          <div className={styles.top}>
          <h2 className={styles.name}>
            {user.name} | <span>Total work experience: {user.total_experience} Years</span>
          </h2>
          </div>
          <p className={styles.proficiency}>
            <strong>Proficiency:</strong> {frenchProficiency.level} | {frenchProficiency.certification}
          </p>

          <p className={styles.languageSkills}>
            <strong>French Language Skills:</strong> Spoken - {skills.spoken || "N/A"} | Vocabulary ({skills.vocabulary || "N/A"}) | Grammar ({skills.grammar || "N/A"}) | Fluency ({skills.fluency || "N/A"})
          </p>

          <h3 className={styles.sectionTitle}>Professional Summary</h3>
          <p className={styles.summary}>{user.professional_summary || "No summary available"}</p>

          <h3 className={styles.sectionTitle}>Skills & Proficiency</h3>
          <ul>
            {user.skills?.length > 0 ? user.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            )) : <li>No skills listed</li>}
          </ul>

          <h3 className={styles.sectionTitle}>Work Experience</h3>
          {workExperience.length > 0 ? (
            workExperience.map((job, index) => (
              <div key={index} className={styles.job}>
                <h4>{job.company}</h4>
                <p><strong>Role:</strong> {job.role}</p>
                <ul>
                  {job.responsibilities?.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No work experience listed</p>
          )}

          <h3 className={styles.sectionTitle}>French Certifications</h3>
          {certifications.length > 0 ? (
            <ul>
              {certifications.map((cert, index) => (
                <li key={index}>
                  {cert.name} ({cert.level}) - {cert.institution}
                </li>
              ))}
            </ul>
          ) : (
            <p>No certifications listed</p>
          )}

          <button className={styles.backButton} onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>

      {/* Right Section: Profile Picture */}
      <div className={styles.rightSection}>
        <div className={styles.profileCard}>
          <img
            src={user.profile_image || "https://via.placeholder.com/150"}
            alt={user.name}
            className={styles.profileImage}
          />
          <h3 className={styles.profileName}>{user.name}</h3>
          <p className={styles.profileLanguage}>
            <em>Languages: {user.languages_spoken?.join(", ") || "Not specified"}</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
