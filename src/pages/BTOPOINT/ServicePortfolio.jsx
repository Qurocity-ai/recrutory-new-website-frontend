import styles from './ServicePortfolio.module.css';
import { motion } from "framer-motion";
const serviceDetails = [
    {
        title: 'Foreign Language Recruitment',
        description: 'Sourcing multilingual talent validated by experts.'
    },
    {
        title: 'Interpretation Services',
        description: 'Multilingual support for remote and onsite needs.'
    },
    {
        title: 'Language Training',
        description: 'Tailored language programs for corporate clients.'
    },
    {
        title: 'Domestic Recruitment',
        description: 'Industry-specific hiring integrating language skills.'
    },
    {
        title: 'Contract and Project-Based Hiring',
        description: 'Flexible staffing for translation and localization tasks.'
    }
];

const ServicePortfolio = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className={styles.container}>
                <div className={styles.decorativeSquares}></div>
                <h2 className={styles.heading}>Comprehensive Service Portfolio</h2>
                <hr className={styles.hr}></hr>
                <p className={styles.subtitle}>Explore our diverse recruitment and language services</p>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContainer}>
                        {serviceDetails.map((service, index) => (
                            <div key={index} className={styles.serviceItem}>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <p className={styles.serviceDescription}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.imageContainer}>
                        <img src="./assets/ServicePortfolio1.jpg" alt="Service Portfolio" className={styles.serviceImage} />
                    </div>
                </div>
                <div className={styles.decorativeSquares1}></div>
            </div>
        </motion.div>
    );
};

export default ServicePortfolio;
