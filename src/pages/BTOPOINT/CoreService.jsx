import styles from './CoreService.module.css';

const CoreService = () => {
    return (
        <div className={styles.container}>
            <div className={styles.decorativeSquares}></div>

            <div className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    <h2 className={styles.heading}>Core Service Offerings</h2>
                    <hr className={styles.hr} />
                    <p className={styles.subtitle}>Specialized recruitment for roles in:</p>
                    <ul className={styles.list}>
                        <li>Interpretation <span>(simultaneous and consecutive)</span>.</li>
                        <li>Translation <span>(document and real-time)</span>.</li>
                        <li>AI Model Training <span>(data annotation, Content Moderation, AI Model Training)</span>.</li>
                        <li>BPO/KPO Operations <span>(voice and non-voice processes)</span>.</li>
                        <li>IT/ITES Sectors <span>(technical language support)</span>.</li>
                    </ul>
                </div>
                
                <div className={styles.imageContainer}>
                    <img src="./assets/page10.jpg" alt="Service" className={styles.serviceImage} />
                </div>
            </div>

            <div className={styles.decorativeSquares1}></div>
        </div>
    );
};

export default CoreService;