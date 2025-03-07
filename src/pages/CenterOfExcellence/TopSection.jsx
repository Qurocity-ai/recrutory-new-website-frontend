import React from "react";
import styles from "./TopSection.module.css";
 
const TopSection = () => {
  return (
<div className={styles.container}>
<div className={styles.header}>
<img src="./assets/RecutoryVerbiqLogo.png" alt="Header Logo" className={styles.logo} />
</div>
<h1 className={styles.title}>Recrutory’s Language Assessment Center of Excellence</h1>
<p className={styles.subtitle}>
        Ensuring accuracy and relevance with our expert panel of linguists and native speakers.
</p>
</div>
  );
};
 
export default TopSection;