import React from "react";
import styles from "./BottomSection.module.css";
 
const BottomSection = () => {
  return (
<div className={styles.container}>
<h2 className={styles.heading}>Why Our COE Panel Stands Out</h2>
<div className={styles.features}>
<div className={styles.feature}>

<p>
<strong>Linguistic Excellence:</strong> <br/>
            Our experts hold top-tier language certifications and decades of experience in linguistic assessment.
</p>
</div>
<div className={styles.feature}>

<p>
<strong>Cultural & Contextual Accuracy:</strong> <br/>
            Native speakers ensure that assessments capture real-world usage, dialects, and local nuances.
</p>
</div>
<div className={styles.feature}>

<p>
<strong>Diverse Global & Indian Representation:</strong>  <br/>
            With a blend of native speakers and Indian experts, we ensure assessments cater to local and international markets effectively.
</p>
</div>
</div>
 
      <h2 className={styles.subHeading}>Versatile Language Assessments for Diverse Roles</h2>
<p className={styles.description}>
        Our <strong>Center of Excellence (COE)</strong> panel goes beyond traditional language assessments. We evaluate candidates for a wide range of roles, ensuring they meet industry-specific communication standards.
</p>
<p className={styles.highlight}>
        By combining human expertise with <strong className={styles.aiText}>AI-driven advancements</strong>, our COE panel ensures businesses get the <strong className={styles.importantText}>best linguistic talent</strong> for both human-led roles and <strong className={styles.importantText}>emerging AI-driven opportunities</strong>.
</p>
</div>
  );
};
 
export default BottomSection;