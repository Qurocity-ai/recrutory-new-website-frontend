import React from "react";
import styles from "./UnlockingPotential.module.css";
import { motion } from "framer-motion";
const UnlockingPotential = () => {
    return (
     
        <div className={styles.container}>
            <div className={styles.decorativeSquares}></div>
             {/* <div className={styles.decorativeSquares1}></div> */}
             
            <h1 className={styles.heading}>
                UNLOCKING BUSINESS POTENTIAL <br /> THROUGH LANGUAGE
            </h1>
            <hr className={styles.hr} />
            
            <p className={styles.subtitle}>
                Explore how linguistic expertise drives corporate growth and enhances global communication strategies.
            </p>
            <div className={styles.decorativeSquares1} ></div >
        </div>
       
    );
};

export default UnlockingPotential;
