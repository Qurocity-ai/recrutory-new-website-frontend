import React, { useEffect } from 'react';
import './Industries.css';
import ServeIndustries from './ServeIndustries';
function Industries() {

    useEffect(()=>{
       window.scrollTo(0,0)
    },[]);

  return (
    <>
      <div>

        <ServeIndustries/>
        <h2 style={{ textAlign: "center", marginTop: "5remrem" ,fontSize:"1.4rem" }}>Most Sought after Domains...</h2>
        <div className="container">
          <div className="card box-1">
            <h5> Localization Specialists:</h5>
            <ul>
              <li>Adapt digital content for global audiences.
                Multilingual Tech Support:</li>
            </ul>
           
         
            Provide technical assistance in multiple languages.
            Global Project Managers:
            Coordinate international projects and teams.
            Language Quality Analysts:
            Ensure linguistic accuracy and cultural relevance in software and applications.
          </div>
          <div className="card box-2">IT & Tech</div>
          <div className="card box-3">WFM</div>
          <div className="card box-4">Localization</div>
          <div className="card box-5">Global Projects</div>
          <div className="card box-6">HEALTHCARE</div>
          <div className="card box-7">LEGAL</div>
          <div className="card box-8">Data Analysis</div>
          <div className="card box-9">Sales</div>
          <div className="card box-10">HOSPITALITY</div>
        </div>
      </div>
    </>
  );
}

export default Industries;
