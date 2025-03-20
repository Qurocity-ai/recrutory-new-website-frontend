import styles from "./Footprint.module.css";
import { motion } from "framer-motion";
const Footprint = () => {
    return (
            <div className={styles.container}>
                <div className={styles.decorativeSquares}></div>
                <h2 className={styles.heading}>Our footprint in the last 6 months</h2>
                <hr className={styles.hr}></hr>
                <p className={styles.subheading}>Showcasing our project success and efficiency</p>
                <div className={styles.gridContainer}>
                    <div className={styles.card}><h3>Rapid Deployment of Interpreters</h3><p>Deployed 40+ Japanese and Mandarin interpreters in 12 days.</p></div>
                    <div className={styles.card}><h3>Expert Onsite Support in Mumbai</h3><p>Delivered 40 French voice process experts onsite in 1 month.</p></div>
                    <div className={styles.card}><h3>Swift Resource Allocation in Hyderabad</h3><p>Provided 28 Korean resources in just 2 weeks for a voice process.</p></div>
                    <div className={styles.card}><h3>Global Project Support</h3><p>Supported projects with native and non-native experts.</p></div>
                    <div className={styles.card}><h3>Specialized Service Offerings</h3><p>Services included data annotation, content moderation, training.</p></div>
                    <div className={styles.card}><h3>Local-Level Language Expertise</h3><p>Enabled expertise in dialect and pronunciation for clients.</p></div>
                    <div className={styles.card}><h3>Timely Project Delivery</h3><p>90% of projects delivered on or ahead of schedule.</p></div>
                    <div className={styles.card}><h3>Efficient Onboarding Processes</h3><p>Achieved 30% reduction in onboarding time for niche roles.</p></div>
                    <div className={styles.card}><h3>High Client Satisfaction</h3><p>Received high client satisfaction scores for timely delivery.</p></div>
                </div>
                <div className={styles.decorativeSquares1}></div>
            </div>
        
    );
};

export default Footprint;
