import React from 'react'
import styles from "../styles/Footer.module.css"
import RunningText from './RunningText'
import Scroll from './scroll'
function Footer() {
    return (
        <>
        <RunningText/>
      
            <div className={styles.footer}>
                {/* Footer bootom */}
                <div className={styles.footer_bottom}>
                    <div className={styles.footer_about}>
                        <h4>About US</h4>
                        <p>Recrutory is a talent recruitment agency specializing in multilingual recruitment,
                            global talent search,and assessment and screening. We are dedicated to finding
                            the most skilled professionals for businesses in India and around the world.
                            Our extensive network and expert team ensure that we connect you with the best
                            talent available.
                        </p>
                    </div>
                    <div className={styles.footer_links}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href='#'>VerbiQ</a></li>
                            <li><a href='#'>Blogs</a></li>
                            <li><a href='#'>Media & Press Release</a></li>
                        </ul>
                    </div>
                    <div className={styles.footer_contact}>
                        <h4>Address</h4>
                        <p>
                            Corp. Off. No 11B, Floor 6, Tower A, Downtown City Vista, Fountain Road, Ashoka
                            Nagar, Kharadi, Pune – 411014
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