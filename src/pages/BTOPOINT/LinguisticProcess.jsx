// import React from "react";
// import styles from "./LinguisticProcess.module.css";
// import { motion } from "framer-motion";
// // Process steps (Images will be added manually later)
// const processSteps = [
//     { image: "../assets/image 8.png", text: "Understand client-specific linguistic needs." },
//     { image: "../assets/image 9.png", text: "Outline project scope, skills, and timelines." },
//     { image: "../assets/image 10.png", text: "Create a tailored sourcing and evaluation strategy." },
//     { image: "../assets/image 11.png", text: "Mobilize experts and tools like VeriQ." },
//     { image: "../assets/image 12.png", text: "Identify and engage qualified candidates." },
//     { image: "../assets/image 13.png", text: "Share pre-assessed profiles with clients." },
//     { image: "../assets/image 14.png", text: "Finalize selection and onboard resources." },
//     { image: "../assets/image 15.png", text: "Maintain detailed hiring and project records." },
//     { image: "../assets/image 16.png", text: "Analyze outcomes for any improvement areas." },
//     { image: "../assets/image 17.png", text: "Provide ongoing client and resource support." },
//     { image: "../assets/image 18.png", text: "Review project success with stakeholders." },
//     { image: "../assets/image 19.png", text: "Apply insights to enhance future processes." },
// ];

// const LinguisticProcess = () => {
//     return (
       
//         <div className={styles.container}>
//             <div className={styles.decorativeSquares}></div>
//                 <h2 className={styles.heading}>
//                 Streamlined Workflow: The 12D Linguistic Hiring Process
//             </h2>
//             <hr className={styles.hr}></hr>
//                 <p className={styles.subheading}>A Tailored, End-to-End Delivery Process.</p>

//             <div className={styles.grid}>
//                 {processSteps.map((step, index) => (
//                     <div key={index} className={styles.card}>
//                         {step.image ? (
//                             <img src={step.image} alt="Step icon" className={styles.icon} />
//                         ) : (
//                             <div className={styles.iconPlaceholder}>📌</div>
//                         )}
//                         <p className={styles.text}>{step.text}</p>
//                     </div>
//                 ))}
//             </div>
//              <div className={styles.decorativeSquares1}></div>
//         </div>
   
//     );
// };

// export default LinguisticProcess;


import React from "react";
import styles from "./LinguisticProcess.module.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Process steps (Images will be added manually later)
const processSteps = [
    { image: "../assets/image 8.png", text: "Understand client-specific linguistic needs." },
    { image: "../assets/image 9.png", text: "Outline project scope, skills, and timelines." },
    { image: "../assets/image 10.png", text: "Create a tailored sourcing and evaluation strategy." },
    { image: "../assets/image 11.png", text: "Mobilize experts and tools like VeriQ." },
    { image: "../assets/image 12.png", text: "Identify and engage qualified candidates." },
    { image: "../assets/image 13.png", text: "Share pre-assessed profiles with clients." },
    { image: "../assets/image 14.png", text: "Finalize selection and onboard resources." },
    { image: "../assets/image 15.png", text: "Maintain detailed hiring and project records." },
    { image: "../assets/image 16.png", text: "Analyze outcomes for any improvement areas." },
    { image: "../assets/image 17.png", text: "Provide ongoing client and resource support." },
    { image: "../assets/image 18.png", text: "Review project success with stakeholders." },
    { image: "../assets/image 19.png", text: "Apply insights to enhance future processes." },
];

const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
};

const LinguisticProcess = () => {
    const isMobile = window.innerWidth <= 768; // Detect mobile screen size

    return (
        <div className={styles.container}>
            <div className={styles.decorativeSquares}></div>
            <h2 className={styles.heading}>
                Streamlined Workflow: The 12D Linguistic Hiring Process
            </h2>
            <hr className={styles.hr}></hr>
            <p className={styles.subheading}>A Tailored, End-to-End Delivery Process.</p>

            {isMobile ? (
                <Slider {...settings} className={styles.slider}>
                    {processSteps.map((step, index) => (
                        <div key={index} className={styles.card}>
                            {step.image ? (
                                <img src={step.image} alt="Step icon" className={styles.icon} />
                            ) : (
                                <div className={styles.iconPlaceholder}>📌</div>
                            )}
                            <p className={styles.text}>{step.text}</p>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className={styles.grid}>
                    {processSteps.map((step, index) => (
                        <div key={index} className={styles.card}>
                            {step.image ? (
                                <img src={step.image} alt="Step icon" className={styles.icon} />
                            ) : (
                                <div className={styles.iconPlaceholder}>📌</div>
                            )}
                            <p className={styles.text}>{step.text}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className={styles.decorativeSquares1}></div>
        </div>
    );
};

export default LinguisticProcess;
