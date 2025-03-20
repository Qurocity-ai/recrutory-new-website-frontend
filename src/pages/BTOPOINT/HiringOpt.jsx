import React from "react";
import styles from "./HiringOpt.module.css";
import { motion } from "framer-motion";
const hiringOptions = [
  {
    title: "Contractual/Project Basis",
    description: "Hourly and project-based rates offer flexibility.",
  },
  {
    title: "Full-Time Hiring Solutions",
    description: "Comprehensive recruitment for full-time roles.",
  },
  {
    title: "Streamlined Onboarding",
    description: "Full-time hiring ensures fast onboarding process.",
  },
  {
    title: "Diverse Professional Network",
    description: "Our network spans across India and abroad with 10,000+ resources across domains.",
  },
  {
    title: "Efficient Time-to-Hire",
    description: "Hiring timeline of 10-15 days for quicker staffing.",
  },
];

const HiringOpt = () => {
  return (

    <div className={styles.container}>
         <div className={styles.decorativeSquares}></div>
     
        <h2 className={styles.heading}>Our Flexible Delivery Models</h2>
        <hr className={styles.hr}></hr>
        <p className={styles.subtitle}>Exploring Our Flexible Hiring Options</p>

        <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          {hiringOptions.map((option, index) => (
            <div key={index} className={styles.serviceItem}>
              <h3 className={styles.serviceTitle}>{option.title}</h3>
              <p className={styles.serviceDescription}>{option.description}</p>
            </div>
          ))}
        </div>
    

      <div className={styles.imageContainer}>
      <img src="/assets/slide 9.jpg" alt="Hiring Options" className={styles.serviceImage} />
      </div>
      </div>
       <div className={styles.decorativeSquares1}></div>
    </div>

  );
};

export default HiringOpt;
