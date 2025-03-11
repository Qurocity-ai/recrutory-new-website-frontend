import styles from './InnovativeLanguage.module.css';
const InnovativeLanguage = [
    {
        title: 'VerbiQ Assessment Platform',
        description: 'AI-driven evaluation with native validation.'
    },
    {
        title: 'Customizable Solutions',
        description: 'Scalable platform tailored to business needs.'
    },
    {
        title: 'Tailored for Growth',
        description: 'Focused on corporate upskilling and individual growth.'
    },
    {
        title: 'Expert Support',
        description: 'Supported by native and international language experts.'
    },
    {
        title: 'Qurocity.ai Learning Platform',
        description: 'AI-powered language learning for upskilling and development.'
    }
];

const InnovativeLanguagePlatforms = () => {
    return (
        <div className={styles.container}>
             <div className={styles.decorativeSquares}></div>
            <h2 className={styles.heading}>Innovative Language Platforms</h2>
             <hr className={styles.hr}></hr>
            <p className={styles.subtitle}>Exploring AI-driven language assessment and learning tools</p>
            <div className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    {InnovativeLanguage.map((service, index) => (
                        <div key={index} className={styles.serviceItem}>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.imageContainer}>
                    <img src="./assets/page5.jpg" alt="Innovative Language Platforms" className={styles.serviceImage} />
                </div>
            </div>
             <div className={styles.decorativeSquares1}></div>
        </div>
    );
};

export default InnovativeLanguagePlatforms;