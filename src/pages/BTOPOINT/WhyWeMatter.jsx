import React from "react";
import styles from "./WhyWeMatter.module.css";
import { motion } from "framer-motion";
const WhyWeMatter = () => {
    return (
       
        <div className={styles.container}>
             <div className={styles.decorativeSquares}></div>
            <h2 className={styles.heading}>Why We Matter</h2> 
            <hr className={styles.hr}></hr>
            <p className={styles.subtitle}>Solutions for Multilingual Workforce Challenges</p>
            <div className={styles.gridContainer}>
                <div className={styles.card}>
                    <img src="./assets/whyWeMatter1.png" alt="Multilingual Challenges" className={styles.icon} />
                    <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Addressing Multilingual Challenges</h3>
                    <p className={styles.cardText}>Addressing complex multilingual and workforce challenges with precision.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="./assets/whyWeMatter2.png" alt="Precise Hiring Solutions" className={styles.icon} />
                    <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Precise Hiring Solutions</h3>
                    <p className={styles.cardText}>Empowering businesses with scalable, AI-driven assessment tools validated by linguistic experts.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="./assets/whyWeMatter3.png" alt="VerbiQ Assessment Platform" className={styles.icon} />
                    <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>VerbiQ Assessment Platform</h3>
                    <p className={styles.cardText}>Bridging corporate gaps through tailored hiring and cutting-edge language solutions.</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src="./assets/whyWeMatter4.png" alt="Trusted Partnerships" className={styles.icon} />
                    <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>Trusted Partnerships</h3>
                    <p className={styles.cardText}>Trusted by industry leaders like Innodata, Teleperformance, Jabil Manufacturing, Escorts Kubota, etc., for global talent needs.</p>
                    </div>
                </div>
            </div>
             <div className={styles.decorativeSquares1} ></div >
        </div>
        
    );
};

export default WhyWeMatter;
