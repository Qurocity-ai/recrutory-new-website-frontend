import React, { useEffect } from "react";
import "./Trends.css";

function Trends() {

  useEffect(()=>{
     window.scrollTo(0,0)
  },[]);


  return (
    <div className="insight">
      {/* Left Section */}
      <div className="ins-left">
        <div
          className="left-ins-img"
          style={{
            backgroundImage: "url('/assets/ins1.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <h1>COMMUNICATION</h1>
        </div>

        <div className="left-ins-content">
          <ul className="words words-1 clrblck">
            <li>
              Research suggests that around <span className="percentage">78%</span> of businesses believe diversity is a key driver of innovation and growth.
            </li>
          </ul>
        </div>
      </div>
      {/* Right Section */}
      <div className="ins-right">
        <div className="right-ins-content">
          <ul className="words words-1 clrblck">
            <li>
              Diverse teams are approximately <span className="percentage">20%</span> more likely to make better decisions than homogeneous teams.
            </li>
          </ul>
        </div>

        <div className="right-ins-img">
          <div
            className="right-ins-img-1"
            style={{
              backgroundImage: "url('/assets/ins2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <h1>PROGRESS</h1>
          </div>

          <div
            className="right-ins-img-2"
            style={{
              backgroundImage: "url('/assets/ins3.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <h1>TECH</h1>
          </div>
        </div>

        {/* Static Content Section */}
        <div className="ins-static-content">
          <div className="content-item">
            <h2>1. Global Business Performance Boost:</h2>
            <p>
              In today's interconnected world, businesses are expanding internationally to tap into new markets. However, language barriers often hinder communication and limit growth potential. By leveraging the language industry, companies can bridge these gaps, ensuring effective communication with customers, partners, and employees worldwide. This enhances collaboration, drives innovation, and ultimately boosts performance and profitability on a global scale.
            </p>
          </div>
          {/* Add more static content items here */}
        </div>
      </div>
    </div>
  );
}

export default Trends;
