import React from 'react';
import FetureStyle from "../../styles/Verbiq/FeaturesSection.module.css";

const FeaturesSection = () => {
    return (
        <div className={FetureStyle.features_container}>
            {/* First Section */}
            <div className={FetureStyle.feature}>
                <div className={FetureStyle.feature_text}>
                    <h2>Personalized and Adaptive Testing:</h2>
                    <p>
                        Our assessments are tailored to each individual, adapting to their
                        proficiency level and learning pace, ensuring accurate evaluation
                        without bias.
                    </p>
                </div>
                <div className={FetureStyle.feature_image}>
                    
                    <img src="/assets/Verbiq/Group 227.png" alt="Adaptive Testing" />
                    <img src="/assets/Verbiq/Group 228.png" alt="Reporting Insights" />
                </div>

                <div className={FetureStyle.feature_text}>
                    <h2>Customized Reporting and Insights:</h2>
                    <p>
                        Gain valuable insights into candidates' cultural adaptability and
                        communication abilities through detailed, customizable reports.
                    </p>
                </div>
            </div>

            {/* Second Section */}
            <div className={FetureStyle.feature}>
                <div className={FetureStyle.feature_text}>
                    <h2>Enhance Cultural Fit and Communication:</h2>
                    <p>
                        Our platform goes beyond language skills, providing a comprehensive
                        cultural assessment to ensure candidates align with your
                        organization's values and communication style.
                    </p>
                </div>
                <div className={FetureStyle.feature_image}>
                    <img
                        src="/assets/Verbiq/Group 230.png"
                        alt="Cultural Fit and Communication"
                    />

                    <img
                        src="/assets/Verbiq/Group 229.png"
                        alt="Setting Candidates Apart"
                    />
                </div>

                <div className={FetureStyle.feature_text}>
                    <h2>Setting Candidates Apart:</h2>
                    <p>
                        Our candidates excel because we assess beyond language proficiency,
                        focusing on cultural fluency and role-specific skills.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default FeaturesSection;
