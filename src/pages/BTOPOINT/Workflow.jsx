import React from "react";
import styles from "./Workflow.module.css";
import { motion } from "framer-motion";
const Workflow = () => {
    return (
       
            <div className={styles.container}>
                <div className={styles.decorativeSquares}></div>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Workflow and Process: Streamlined Approach</h2>
                    <hr className={styles.hr}></hr>
                    <p className={styles.subheading}>
                        A Tailored, End-to-End Workflow for Optimal Language Solutions.
                    </p>
                </div>

                <div className={styles.gridContainer}>
                    <div className={styles.card}>
                        <h3>Identifying Requirements</h3>
                        <p>
                            Collaborate with clients to understand their unique language and
                            workforce needs. Define the scope, objectives, and specific skills
                            required for the project.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Channelizing the Network</h3>
                        <p>
                            Leverage our network of linguistic professionals, domain experts,
                            and content creators. Enhance <b>VerbIQ</b>, and align with client
                            expectations.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Assessment and Matching</h3>
                        <p>
                            Use <b>VerbIQ</b> for precise linguistic assessments to ensure skill
                            alignment. In-house expertise supports cultural and
                            industry-specific evaluations.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Deployment</h3>
                        <p>
                            Assign roles and resources based on client needs, including
                            full-time, project-based, or gig-oriented professionals. Implement a
                            streamlined onboarding process to enable rapid deployment.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Monitoring and Feedback</h3>
                        <p>
                            Establish continuous feedback loops to evaluate project progress,
                            ensure alignment with goals, and maintain quality standards.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3>Adaptive Optimization</h3>
                        <p>
                            Make data-driven adjustments to processes and strategies to optimize
                            delivery and outcomes in response to ongoing feedback and evolving
                            needs.
                        </p>
                    </div>
                </div>
                <div className={styles.decorativeSquares1}></div>
            </div>
       



    );
};

export default Workflow;
