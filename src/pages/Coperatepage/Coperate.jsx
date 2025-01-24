import React from 'react'
import Coperatestyle from "../Coperatepage/Coperate.module.css";
import CoperateMainSection from './CoperateMainSection';
import CandidateCard from './CandidateCard';
import CopAssesement from './CopAssesement';
function Coperate() {
    return (
        <>
            <div>
                <section className={Coperatestyle.hero_section}>
                    <div className={Coperatestyle.hero_content}>
                        <h2 className={Coperatestyle.gradient_text}>
                            Your Trusted Recruitment Partner
                        </h2>
                        <hr className={Coperatestyle.line} />
                        <p>Find the right candidates, ready to succeed in your role. Faster placements, better hires.</p>
                    </div>
                </section>
            </div>
            
            <CoperateMainSection/>
            <CopAssesement />
            <CandidateCard/>
        </>
    )
}

export default Coperate