import React from "react";
import styles from "./WhyWeMatter.module.css";

const WhyWeMatter = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Why We Matter</h2>
            <p className={styles.subtitle}>Solutions for Multilingual Workforce Challenges</p>
            <div className={styles.gridContainer}>
                <div className={styles.card}>
                    <img src="/icons/multilingual.png" alt="Multilingual Challenges" className={styles.icon} />
                    <h3 className={styles.cardTitle}>Addressing Multilingual Challenges</h3>
                    <p className={styles.cardText}>Addressing complex multilingual and workforce challenges with precision.</p>
                </div>
                <div className={styles.card}>
                    <img src="/icons/hiring.png" alt="Precise Hiring Solutions" className={styles.icon} />
                    <h3 className={styles.cardTitle}>Precise Hiring Solutions</h3>
                    <p className={styles.cardText}>Empowering businesses with scalable, AI-driven assessment tools validated by linguistic experts.</p>
                </div>
                <div className={styles.card}>
                    <img src="/icons/assessment.png" alt="VerbiQ Assessment Platform" className={styles.icon} />
                    <h3 className={styles.cardTitle}>VerbiQ Assessment Platform</h3>
                    <p className={styles.cardText}>Bridging corporate gaps through tailored hiring and cutting-edge language solutions.</p>
                </div>
                <div className={styles.card}>
                    <img src="/icons/partnership.png" alt="Trusted Partnerships" className={styles.icon} />
                    <h3 className={styles.cardTitle}>Trusted Partnerships</h3>
                    <p className={styles.cardText}>Trusted by industry leaders like Innodata, Teleperformance, Jabil Manufacturing, Escorts Kubota, etc., for global talent needs.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyWeMatter;
