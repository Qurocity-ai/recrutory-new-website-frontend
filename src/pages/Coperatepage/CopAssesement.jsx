import React from 'react'
import styles from "../Coperatepage/CopAssesement.module.css"
function CopAssesement() {
    return (
        <>
          <div className={styles.mainSection}>
            <div className={styles.topSection}>
                <div>
                    <h4>Workforce analytics and Executive Search:</h4>
                    <p>Make smart talent decisions with workforce analytics. Our executive search identifies top professionals to lead your industry.</p>
                </div>
                <div>
                    <h4>Assessment and Screening:</h4>
                    <p>Transform your hiring process with personalized assessments and AI-driven screenings that match skills with company culture. Our tailored evaluations support informed hiring decisions for lasting success.</p>
                </div>

            </div>

            <div className={styles.bottomSection}>
                <div className={styles.leftSection}>
                    <img src='/assets/Frame.png'/>
                </div>
                <div className={styles.rightSection}>
                   <div>
                            <h4>Data-Driven Recruitment</h4>
                            <p>At Recrutory, we use data-driven systems to transform the recruitment process, ensuring accuracy and efficiency at every stage.</p>
                   </div>
                   <div>
                            <h4>AI-Powered Screening</h4>
                            <p>With AI intervention and smart screening protocols, we carefully analyze candidate data to present the best-fit candidates for your organization.</p>
                   </div>
                   <div>
                            <h4>Precision Hiring with AI</h4>
                            <p>Our commitment to AI-driven technologies ensures we deliver the most qualified candidates, supported by thorough screenings, to boost your team's success.</p>
                   </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default CopAssesement