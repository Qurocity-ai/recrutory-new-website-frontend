import React from "react";
import styles from "./LinguisticProcess.module.css";
import { motion } from "framer-motion";
// Process steps (Images will be added manually later)
const processSteps = [
    { image: "../assets/image 8.png", text: "Understand client-specific linguistic needs." },
    { image: "../assets/image 9.png", text: "Outline project scope, skills, and timelines." },
    { image: "../assets/image 10.png", text: "Create a tailored sourcing and evaluation strategy." },
    { image: "../assets/image 11.png", text: "Mobilize experts and tools like VeriQ." },
    { image: "../assets/image 12.png", text: "Identify and engage qualified candidates." },
    { image: "../assets/image 13.png", text: "Share pre-assessed profiles with clients." },
    { image: "../assets/image 14.png", text: "Finalize selection and onboard resources." },
    { image: "../assets/image 15.png", text: "Maintain detailed hiring and project records." },
    { image: "../assets/image 16.png", text: "Analyze outcomes for any improvement areas." },
    { image: "../assets/image 17.png", text: "Provide ongoing client and resource support." },
    { image: "../assets/image 18.png", text: "Review project success with stakeholders." },
    { image: "../assets/image 19.png", text: "Apply insights to enhance future processes." },
];

const LinguisticProcess = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
        <div className={styles.container}>
            <div className={styles.decorativeSquares}></div>
                <h2 className={styles.heading}>
                Streamlined Workflow: The 12D Linguistic Hiring Process
            </h2>
            <hr className={styles.hr}></hr>
                <p className={styles.subheading}>A Tailored, End-to-End Delivery Process.</p>

            <div className={styles.grid}>
                {processSteps.map((step, index) => (
                    <div key={index} className={styles.card}>
                        {step.image ? (
                            <img src={step.image} alt="Step icon" className={styles.icon} />
                        ) : (
                            <div className={styles.iconPlaceholder}>📌</div>
                        )}
                        <p className={styles.text}>{step.text}</p>
                    </div>
                ))}
            </div>
             <div className={styles.decorativeSquares1}></div>
        </div>
        </motion.div>
    );
};

export default LinguisticProcess;
