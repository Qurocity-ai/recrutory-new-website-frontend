import React from 'react'
import styles from "../Coperatepage/CoperateMainSection.module.css";
function CoperateMainSection() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.left}>
                    <p>At Recrutory, we assist companies in finding the right people for the right jobs. Whether you're seeking recruitment services for general roles or specialized linguistic experts, we provide tailored solutions to meet your unique needs.
                        With our extensive industry expertise, we serve as your strategic partners, ensuring that your talent requirements are addressed efficiently and effectively.</p>
                </div>
                <div className={styles.right}>
                    <img src='/assets/Group 514416.png' />
                </div>
            </div>


            <div className={styles.gridContener}>
                <div className={styles.card_body}>
                    <div className={styles.img_contener}> 
                        <img src='assets/language--05_1_.png' alt='group1' />
                        <h3>Multilingual Recruitment:</h3>
                    </div>
                    <p>Bridging borders to find the best global talent across languages, ensuring your business achieves excellence.</p>
                
                </div>
                <div className={styles.card_body}>
                    <div className={styles.img_contener}>
                        <img src='/assets/professionals (1) 1 (1).png' alt='group2' />
                        <h3>Industry Expertise:</h3>
                    </div>
                    <p>Our deep industry knowledge helps clients stay competitive in a fast-changing business world.</p>
                </div>
                <div className={styles.card_body}>
                    <div className={styles.img_contener}>
                        <img src='/assets/screening 1 (1).png' alt='group3' />
                        <h3>Global Talent Search:</h3>
                    </div>
                    <p>Unlocking potential worldwide, we deliver top multilingual talent to help drive your success.</p>
                </div>
            </div>

        </>
    )
}

export default CoperateMainSection