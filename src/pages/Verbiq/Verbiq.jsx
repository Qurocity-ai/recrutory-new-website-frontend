import React from 'react'
import VerbiqStyle from "../../styles/Verbiq/Verbiq.module.css";
import FeaturesSection from './FeaturesSection';
import Benefit from './Benefit';
import Assessment from './Assessment';
import VerbiqTestimonial from './VerbiqTestimonial';
function Verbiq() {
  return (
    <>
      <div className={VerbiqStyle.Verbiq_Hero}>
        <img src='src/assets/Verbiq/logo.png' />
        <div className={VerbiqStyle.textcontet}>
          <h1>Transforming Language Assessment:</h1>
          <h1>Empowering Global Communication and Cultural Fit</h1>
          <div className={VerbiqStyle.description}>
            <p>A smarter, more respectful approach to measure language skills, guaranteeing everyone receives the fair assessment they deserve. Welcome to the future of language assessment—efficient, accurate, and inclusive.</p>
          </div>
        </div>
        
      </div>

      {/* Introduction of Product by video */}
      <div className={VerbiqStyle.intro}>
        <div className={VerbiqStyle.left}>
          <h3>Assess and Elevate Your Language Proficiency with  <img src='src/assets/Verbiq/logo.png' style={{ width: "100px",marginTop:"5px",height:"40px" }} /> </h3>

           
          
        </div>
        <div className={VerbiqStyle.right}>
          <iframe
            src="https://www.youtube.com/embed/kzEhKTQa9bU"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

{/*  */}

    <VerbiqTestimonial />
    <FeaturesSection/>
    <Assessment/>
    <Benefit/>

    </>
  )
}

export default Verbiq