import React from 'react'
import styles from "../../styles/MainSection.module.css"
function MainSection() {
    return (

        <>
            <div className={styles.main}>
                <div className={styles.left}>
                    <h1>Redefining Recruitment: Multilingual hiring and Assessment Solutions</h1>
                    <h3>Looking for your next big opportunity?
                    </h3>
                    <p>Recrutory is here to help! Whether you’re a <span style={{ fontWeight: "bold" }}>job seeker</span> or an experienced <span style={{fontWeight:"bold"}}>language expert</span>, we specialize in matching talent like yours with leading companies across various industries.
                        Our goal is to connect you with positions that align with your skills, experience, and career aspirations. From local to global roles, we ensure that your talents are recognized and rewarded.</p>

     

                </div>
                <div className={styles.right}>
                    {/* <img src='./src/assets/Group 514420.png' /> */}
                    <img src='/assets/Group 514420.png' />
                </div>
            </div>

        </>


    )
}

export default MainSection