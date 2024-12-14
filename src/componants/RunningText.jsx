import React from 'react'
import RunningTextStyle from "../styles/RunningText.module.css";
function RunningText() {
    return (
        <>
            <div className={RunningTextStyle.runningText}>
                <div className={RunningTextStyle.content}>
                    <span>MULTILINGUAL PROFICIENCY</span>
                    <span>GLOBAL TALENT ACQUISITION</span>
                    <span>CROSS-CULTURAL COMMUNICATION</span>
                    <span>FIT WITH COMPANY CULTURE</span>

                    {/* duplicate content for smooth scrolling */}

                    <span>MULTILINGUAL PROFICIENCY</span>
                    <span>GLOBAL TALENT ACQUISITION</span>
                    <span>CROSS-CULTURAL COMMUNICATION</span>
                    <span>FIT WITH COMPANY CULTURE</span>

                </div>
            </div>
        </>
    )
}

export default RunningText