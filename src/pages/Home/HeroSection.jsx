import React from "react";
import { TypeAnimation } from "react-type-animation";
import HeroStyle from "../../styles/HeroSection.module.css";

function HeroSection() {
    return (
        <div>
            <section className={HeroStyle.hero_section}>
                <div className={HeroStyle.hero_content}>
                    <h2 className={HeroStyle.gradient_text}>
                        <TypeAnimation
                            sequence={[
                                "Your Trusted Recruitment Partner",
                                2000, // Delay for 2 seconds
                                "Find Your Dream Job Today!",
                                2000, // Delay for 2 seconds
                                "Connecting You to Success",
                                2000, // Delay for 2 seconds
                            ]}
                            speed={50} // Speed of typing
                            deletionSpeed={50}
                            wrapper="span"
                            repeat={Infinity} // Loop the animation
                            style={{ display: "inline-block" }}
                        />
                    </h2>
                    <hr className={HeroStyle.line}/>
                    <p>Find the right opportunity. Faster placements, better hires.</p>
                </div>
            </section>
        </div>
    );
}

export default HeroSection;
