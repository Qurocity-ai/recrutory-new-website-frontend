import React, { useState } from 'react';
import TestimonialStyle from "../../styles/Testimonial.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonial() {
    const [testimonial, setTestimonial] = useState(
        [
            {
                "id": 1,
                "name": "Shubam Sharma",
                "feedback": "The process was quick, smooth, and stress-free. The team was always available for support, and the communication was clear and efficient. Highly satisfied with the experience!",
                "image": "/assets/Testimonial.png",
                "language": "English Expert",
            },

            {
                "id": 2,
                "name": "Amit Sharma",
                "feedback": "Your assistance in helping me get placed was outstanding. The attention to detail and constant communication made it a seamless experience. Highly recommended!",
                "image": "/assets/Testimonial.png",
                "language": "Spanish Expert"
            },
            {
                "id": 3,
                "name": "Priya Singh",
                "feedback": "The placement process was professional and efficient. The team’s approach made everything smooth and hassle-free. I felt supported throughout and am grateful for the entire experience.",
                "image": "/assets/Testimonial.png",
                "language": "German Expert"
               
            },
            {
                "id": 4,
                "name": "Ravi Verma",
                "feedback": "The support and guidance throughout the process were excellent. Every step was communicated clearly, and I always felt well-prepared and confident. Great experience!",
                "image": "/assets/Testimonial.png",
                "language": "Chinese Expert"
                
            },
            {
                "id": 5,
                "name": "Neha Gupta",
                "feedback": "The entire experience was great. The team’s attentiveness and proactivity ensured that the entire process was smooth. I felt well-supported, and everything went perfectly.",
                "image": "/assets/Testimonial.png",
                "language": "Korean Expert"
                
            },
            {
                "id": 6,
                "name": "Kunal Roy",
                "feedback": "The experience was fantastic. From start to finish, everything was handled professionally and efficiently. The team truly cares about your success and ensures a smooth journey.",
                "image": "/assets/Testimonial.png",
                "language": "Hindi Expert"
                
            },
            {
                "id": 7,
                "name": "Anjali Patel",
                "feedback": "The process felt seamless and personalized. The team's support made everything clear and easy. I highly recommend their services to anyone looking for placement assistance.",
                "image": "/assets/Testimonial.png",
                "language": "Italian Expert"
            },
            {
                "id": 8,
                "name": "Rajesh Yadav",
                "feedback": "The experience was exceptional. The team provided full support at each step and ensured everything was well-handled. I felt confident and cared for throughout the process.",
                "image": "/assets/Testimonial.png",
                "language": "Hindi Expert"
            },
            {
                "id": 9,
                "name": "Sneha Agarwal",
                "feedback": "I was thoroughly impressed with the professionalism shown throughout the entire placement process. The team took care of every detail and kept me informed every step of the way.",
                "image": "/assets/Testimonial.png",
                "language": "Chinese Expert"
            },
            {
                "id": 10,
                "name": "Manoj Tiwari",
                "feedback": "The process was quick, smooth, and stress-free. The team was always available for support, and the communication was clear and efficient. Highly satisfied with the experience!",
                "image": "/assets/Testimonial.png",
                "language": "Hindi Expert"
            }
        ]
)
// seeting for slider 
    var settings = {
        // dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        <>
           <div className={TestimonialStyle.card_contener}>
                <Slider {...settings}>
            {testimonial.map((ele)=>(
                <>
                <div className={TestimonialStyle.card}>
                    <div className={TestimonialStyle.card_img}>
                        <img src={ele.image}/>
                    </div>
                    <div className={TestimonialStyle.feedback}>
                        <p>{ele.feedback}</p>
                        <hr></hr>
                            <h4>{ele.name} <div>{`(${ele.language})`}</div></h4>
                    </div>
                </div>
                
                </>
            ))}
            </Slider>
           </div>
        </>
    );
}

export default Testimonial;
