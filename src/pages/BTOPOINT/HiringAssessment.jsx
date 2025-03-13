import styles from './HiringAssessment.module.css';

const HiringAssessment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.decorativeSquares}></div>

            <h2 className={styles.heading}>Hiring Assessment for AI-Driven Content Roles</h2>
            <hr className={styles.hr} />

            <p className={styles.subtitle}>Our Consultant Hiring Process</p>
            
            <div className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    <ul className={styles.list}>
                        <li>
                            <b>Language Proficiency:</b> Evaluate grammar and tone adaptation.
                        </li>
                        <li>
                            <b>Cognitive Thinking:</b> Problem-solving skills are critical for success.
                        </li>
                        <li>
                            <b>AI Content Skills:</b> Assess data labeling and AI refinement abilities.
                        </li>
                        <li>
                            <b>Technical Knowledge:</b> Awareness of AI tools is crucial to the role.
                        </li>
                    </ul>
                </div>

                <div className={styles.descriptionContainer}>
                    <p>Evaluate grammar and content structuring. Assess AI-generated content editing skills.</p>
                    <p>Assess problem-solving abilities. Focus on AI-assisted writing.</p>
                    <p>Provide real-world AI content refinement scenarios. Test moderation skills.</p>
                </div>
            </div>

            <div className={styles.decorativeSquares1}></div>
        </div>
    );
};

export default HiringAssessment;
