import React from 'react';
import styles from "../styles/Footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            {/* Footer bottom */}
            <div className={styles.footer_bottom}>
                <div className={styles.footer_about}>
                    <h4>Address</h4>
                    <p>
                        Corp. Off. No 16A, Floor 2, Tower A, Downtown City Vista, Fountain Road, Ashoka Nagar, Kharadi, Pune – 411014
                    </p>
                </div>
                <div className={styles.footer_links}>
                    <h4>Quick Links</h4>
                    <div className={styles.links_container}>
                        <a href='/Verbiq'>VerbiQ</a>
                        <a href='#'>Media & Press Release</a>
                        <a href='/corporatedeck'>Corporate Deck</a>
                    </div>                                                                                                                                                                                                                                                                                 
                </div>
                <div className={styles.footer_contact}>
    
                    <h4>Reach out on</h4>
                    <p>Email: hr@recrutory.com</p>
                    <p>Mob: 9373902340</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
