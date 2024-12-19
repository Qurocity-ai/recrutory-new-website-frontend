import React from 'react';
import BenefitStyle from "../../styles/Verbiq/Benefit.module.css";

function Benefit() {
    return (
        <div className={BenefitStyle['benefit-container']}>
            <div className={BenefitStyle['benefit-card']}>
                <img src='src/assets/Verbiq/verbiqPage1.png' alt="Efficient" />
                <h3 style={{ marginTop: "3.6rem" }}>Efficient</h3>
            </div>
            <div className={BenefitStyle['benefit-card']}>
                <img src='src/assets/Verbiq/verbiqPage2.png' alt="Precise" />
                <h3>Precise</h3>
            </div>
            <div className={BenefitStyle['benefit-card']}>
                <img src='src/assets/Verbiq/verbiqPage3.png' alt="Tailored" />
                <h3>Tailored</h3>
            </div>
        </div>
    );
}

export default Benefit;
