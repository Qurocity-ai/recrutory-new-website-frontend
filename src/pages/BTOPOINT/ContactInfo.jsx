import styles from './ContactInfo.module.css';
import illustration from '/assets/page14.png'; // Update the path accordingly

const ContactInfo = () => {
    return (
        <div className={styles.container}>

              <div className={styles.decorativeSquares}></div>
            <div className={styles.textContainer}>
                <h2 className={styles.heading}>Let’s Build the Future Together</h2>
                <hr className={styles.hr} />
                <p className={styles.description}>
                    Transform your business operations with innovative language solutions
                    designed to meet your unique needs. Contact us today to discuss how
                    we can help you achieve your goals.
                </p>

                <p className={styles.address}>
                    <strong>Address:</strong> Corp. Off. No 16A, Floor 2, Tower A, Downtown City Vista,
                    Fountain Road, Ashoka Nagar, Kharadi, Pune – 411014
                </p>

                <p className={styles.contactDetails}>
                    <strong>Email:</strong> hr@recrutory.com &nbsp;&nbsp;&nbsp; 
                    <strong>Contact No.:</strong> 9373902340
                </p>

                <div className={styles.links}>
                    <a href="#" className={styles.link}>LinkedIn</a>
                    <a href="#" className={styles.link}>Recrutory Website</a>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img src={illustration} alt="Illustration" className={styles.illustration} />
            </div>
              <div className={styles.decorativeSquares1}></div>
        </div>
    );
};

export default ContactInfo;
