import React from "react";
import HeroStyle from "../../styles/HeroSection.module.css";

function HeroSection() {
    return (
        <div>
            <section className={HeroStyle.hero_section}>
                <div className={HeroStyle.hero_content}>
                    <h2 className={HeroStyle.gradient_text}>
                        Your Trusted Recruitment Partner
                    </h2>
                    <hr className={HeroStyle.line}/>
                    <p>Find the right opportunity. Faster placements, better hires.</p>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
