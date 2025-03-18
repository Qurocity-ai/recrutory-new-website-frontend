import React from 'react'
import styles from "../styles/Footer.module.css"
import RunningText from './RunningText'
import Scroll from './scroll'
function Footer() {
    return (
        <>
            <div className={styles.footer}>
                {/* Footer bootom */}
                <div className={styles.footer_bottom}>
                    <div className={styles.footer_about}>
                        <h4>About US</h4>
                        <p>Recrutory is dedicated to helping you succeed! Whether you’re searching for a job or an experienced language professional, we excel at pairing skilled individuals like you with top companies across various sectors. Our aim is to find roles that match your expertise, background, and career ambitions. From local opportunities to international positions, we make sure your talents are acknowledged and well-compensated.

                        </p>
                    </div>
                    <div className={styles.footer_links}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href='/product'>VerbiQ</a></li>
                            <li><a href='#'>Blogs</a></li>
                            <li><a href='#'>Media & Press Release</a></li>
                            <li>
                                <a href='/corporatedeck'>Corporate Deck</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer_contact}>
                        <h4>Address</h4>
                        <p>
                        Corp. Off. No 16A, Floor 2, Tower A, Downtown City Vista, Fountain Road, Ashoka Nagar, Kharadi, Pune – 411014
                        </p>
                        <h4>Reach out on</h4>
                        <p>Email: hr@recrutory.com</p>
                        <p>Mob: 93739 02341</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer