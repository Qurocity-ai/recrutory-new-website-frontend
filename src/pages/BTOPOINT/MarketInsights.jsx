import React from "react";
import styles from "./MarketInsights.module.css";

const MarketInsights = () => {
    return (
        <div className={styles.container}>
             <div className={styles.decorativeSquares}></div>
            <h2 className={styles.heading}>Market Insights on Multilingual Talent</h2>
            <hr className={styles.hr}></hr>
            <p className={styles.subtitle}>Exploring the potential of multilingual talent in business</p>
            <div className={styles.insightsGrid}>
                <div className={styles.card}>
                    <img src="./assets/MarketInsights1.jpg" alt="Increasing Demand" className={styles.icon} />
                    <h3 className={styles.cardTitle}>Increasing Demand for Multilingual Talent</h3>
                    <p className={styles.cardText}>Global industries are seeking multilingual capabilities.</p>
                </div>
                <div className={styles.card}>
                    <img src="./assets/MarketInsights2.jpg" alt="Market Penetration" className={styles.icon} />
                    <h3 className={styles.cardTitle}>Market Penetration Boost</h3>
                    <p className={styles.cardText}>Multilingual skills can enhance market reach by 30%.</p>
                </div>
                <div className={styles.card}>
                    <img src="./assets/MarketInsights3.jpg" alt="Gig Economy" className={styles.icon} />
                    <h3 className={styles.cardTitle}>Rise of the Gig Economy</h3>
                    <p className={styles.cardText}>Freelance projects focused on language are increasing.</p>
                </div>
            </div>
            <div className={styles.decorativeSquares1} ></div >
        </div>
    );
};

export default MarketInsights;