import React from 'react';
import AssessmentStyle from "../../styles/Verbiq/Assessment.module.css";

function Assessment() {
    return (
        <>
            <div>
                <div className={AssessmentStyle.heading}>
                    <p>Assessment Process</p>
                    <hr />
                </div>

                <div className={AssessmentStyle.assessment_container}>
                    {/* Voice Process Assessment Card */}
                    <div className={AssessmentStyle.card}>
                        <h2>Voice Process Assessment</h2>
                        <p className={AssessmentStyle.duration}>Avg. duration: 45 mins</p>
                        <ul>
                            <li><strong>Resume Screening:</strong> Evaluate language proficiency and customer-facing experience.</li>
                            <li><strong>Language Proficiency Test:</strong> Assess fluency, vocabulary, grammar, and pronunciation.</li>
                            <li><strong>Voice Simulation:</strong> Simulated customer interactions to evaluate communication skills.</li>
                            <li><strong>Cultural Sensitivity Evaluation:</strong> Understand cultural nuances and respect diversity.</li>
                            <li><strong>Behavioral Interview:</strong> Analyze problem-solving, adaptability, and customer-centric skills.</li>
                        </ul>
                    </div>

                    {/* Non-Voice Process Assessment Card */}
                    <div className={AssessmentStyle.card}>
                        <h2>Non-Voice Process Assessment</h2>
                        <p className={AssessmentStyle.duration}>Avg. duration: 60 mins</p>
                        <ul>
                            <li><strong>Written Assessment:</strong> Evaluate written communication, email composition, and document translation.</li>
                            <li><strong>Data Analysis Test:</strong> Test data interpretation, accuracy, and manipulation skills.</li>
                            <li><strong>Speed and Accuracy Assessment:</strong> Measure efficiency in handling written tasks.</li>
                            <li><strong>Scenario-Based Evaluation:</strong> Test problem-solving and critical thinking under pressure.</li>
                            <li><strong>Technical Assessment:</strong> Assess proficiency with relevant tools for the position.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Assessment;
