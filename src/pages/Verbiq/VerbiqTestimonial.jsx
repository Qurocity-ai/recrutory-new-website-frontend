import React from 'react';
import styles from "../../styles/Verbiq/VerbiqTestimonial.module.css";

function VerbiqTestimonial() {
    return (
        <div className={styles.VerbiqTestimonial_contener}>
            <div className={styles.card}>
                <div className={styles.card_inner}>
                    <div className={styles.card_front}>
                        <h3>PURPOSE</h3>
                        <img src='src/assets/Verbiq/1.png' alt="Purpose" />
                        
                    </div>
                    <div className={styles.card_back}>
                        <p>"Discover purpose-driven linguistic recruitment with . Our platform helps align your hiring goals with candidates who not only have the right language skills but also understand your organization's mission and values."</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.card_inner}>
                    <div className={styles.card_front}>
                        <h3>CONSISTENCY</h3>
                        <img src='src/assets/Verbiq/2.png' alt="Consistency" />
                        
                    </div>
                    <div className={styles.card_back}>
                        <p>"Ensure linguistic consistency across your team with  standardized assessment methods. By maintaining consistency in language proficiency, you can enhance communication and collaboration within your organization."</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.card_inner}>
                    <div className={styles.card_front}>
                        <h3>ACCESSIBILITY</h3>
                        <img src='src/assets/Verbiq/3.png' alt="Accessibility" />
                        
                    </div>
                    <div className={styles.card_back}>
                        <p>" offers accessible language assessment solutions for all. With our user-friendly interface and flexible testing options, we make it easy for candidates to demonstrate their linguistic abilities, regardless of location or background."</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.card_inner}>
                    <div className={styles.card_front}>
                        <h3>REDUCED TIMELINE FOR HIRING</h3>
                        <img src='src/assets/Verbiq/4.png' alt="Reduced Timeline for Hiring" />
                    </div>
                    <div className={styles.card_back}>
                        <p>"Stay ahead of linguistic recruitment trends while maintaining timeless hiring practices with . Our platform adapts to evolving language requirements while ensuring the timeless value of strong communication skills in your workforce."</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerbiqTestimonial;
