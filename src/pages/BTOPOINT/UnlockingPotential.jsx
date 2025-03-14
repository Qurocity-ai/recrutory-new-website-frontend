import React from "react";
import styles from "./UnlockingPotential.module.css";
import { motion } from "framer-motion";
const UnlockingPotential = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
        <div className={styles.container}>
            <div className={styles.decorativeSquares}></div>
             {/* <div className={styles.decorativeSquares1}></div> */}
            <h1 className={styles.heading}>
                UNLOCKING BUSINESS POTENTIAL <br /> THROUGH LANGUAGE
            </h1>
            <div className={styles.underline}></div>
            <p className={styles.subtitle}>
                Explore how linguistic expertise drives corporate growth and enhances
                global communication strategies.
            </p>
            <div className={styles.decorativeSquares1} ></div >
        </div>
       </motion.div>
    );
};

export default UnlockingPotential;
