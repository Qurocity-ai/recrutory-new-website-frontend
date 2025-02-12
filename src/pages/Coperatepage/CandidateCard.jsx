import React from "react";
import styles from "./CandidateCard.module.css";

const CandidateCard = () => {
    return (
        <div className={styles.overall}>
        <div className={styles.card}>
            <span className={styles.title}>Tailored Candidate Screening</span>
            <hr></hr>
            <div className={styles.description}>
                <h3>Comprehensive Candidate Assessment</h3>

                <ul><li> Novatory's Comprehensive Candidate Assessment certifies top language experts for your needs.</li>
                    <li> We evaluate practical language skills, technical expertise, and industry knowledge to match
                        your specific roles.</li>
                    <li> Our approach also assesses teamwork and communication, ensuring you find candidates who excel
                        in their positions.</li>
                </ul>
            </div>

            <div className={styles.skillContener}>  
            <div className={styles.skillsGrid}>
                <div className={styles.skill}>
                    <h4>Speaking</h4>
                    <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ width: "60%" }}></div>
                    </div>
                </div>
                <div className={styles.skill}>
                    <h4>Listening</h4>
                    <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ width: "90%" }}></div>
                    </div>
                </div>
                <div className={styles.skill}>
                    <h4>Reading</h4>
                    <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ width: "60%" }}></div>
                    </div>
                </div>
                <div className={styles.skill}>
                    <h4>Writing</h4>
                    <div className={styles.progressBar}>
                        <div className={styles.progress} style={{ width: "30%" }}></div>
                    </div>
                </div>


            </div>
            <div className={styles.improvement}>
                <h4>Improvement Areas:</h4>
                <ul>
                    <li>Improving listening comprehension through active listening exercises.</li>
                    <li>Actively engaging with a variety of materials to boost reading skills.</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CandidateCard;
