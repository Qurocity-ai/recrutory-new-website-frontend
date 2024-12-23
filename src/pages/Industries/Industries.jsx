import React, { useEffect } from 'react';
import './Industries.css';
import ServeIndustries from './ServeIndustries';
function Industries() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div>

        <ServeIndustries />
        <h2 style={{ textAlign: "center", marginTop: "5remrem", fontSize: "1.4rem" }}>Most Sought after Domains...</h2>
        <div className="container">
          <div className="card box-1">
            <ul>
              <li>
                <span className='head'>Localization Specialists:</span>
                <br />
                Adapt digital content for global audiences.
                <br />
                <br />
                <span className='head'>Multilingual Tech Support:</span>
                <br />
                Provide technical assistance in multiple languages.
                <br />
                <br />
                <span className='head'>Global Project Managers:</span>
                <br />
                Coordinate international projects and teams.
                <br />
                <br />
                <span className='head'>Language Quality Analysts:</span>
                <br />
                Ensure linguistic accuracy and cultural relevance in software and applications.
              </li>
            </ul>
          </div>
          <div className="card box-2">IT & Tech</div>
          <div className="card box-3">WFM</div>
          <div className="card box-4">
            <ul>
              <li>
                <span className='head'>Client Support:</span>
                <br />
                Assisting international clients in their language.
                <br />
                <br />
                <span className='head'>Tech Support:</span>
                <br />
                Provide technical assistance in multiple languages.
                <br />
                <br />
                <span className='head'>Translators and Interpreters:</span>
                <br />
                Facilitating cross-cultural communication.
                <br />
                <br />
                <span className='head'>Cross-Cultural Trainers:</span>
                <br />
                Promoting understanding among diverse teams.
                <br />
                <br />
                <span className='head'>Multilingual HR Managers:</span>
                <br />
                Nurturing a diverse workforce.
              </li>
            </ul>
          </div>
          <div className="card box-5">
            <ul>
              <li>
                <span className='head'>Medical Interpreters:</span>
                <br />
                Bridge language gaps between patients and healthcare providers.
                <br />
                <br />
                <span className='head'>Bilingual Healthcare Professionals:</span>
                <br />
                Provide medical care in multiple languages.
                <br />
                <br />
                <span className='head'>Language Access Coordinators:</span>
                <br />
                Ensure language services are available and accessible to all patients.
                <br />
                <br />
                <span className='head'>Telehealth Coordinators:</span>
                <br />
                Facilitate remote healthcare consultations and interpretive services.
              </li>
            </ul>
          </div>
          <div className="card box-6">HEALTHCARE</div>
          <div className="card box-7">LEGAL</div>
          <div className="card box-8">
            <ul>
              <li>
                <span className='head'> Legal Translators:</span>
                <br />
                Translate legal documents accurately.
                <br />
                <br />
                <span className='head'>  International Attorneys:</span>
                <br />  Provide legal counsel in international cases.
                <br />
                <br />
                <span className='head'> Court Interpreters:</span>
                <br />
                Facilitate remote healthcare consultations and interpretive services.
                <br />
                <br />
                <span className='head'>Legal Researchers:</span>
                <br />
                Conduct research and analyze legal documents in multiple languages.
              </li>
            </ul>
          </div>
          <div className="card box-9">
            <ul>
              <li>
                <span className='head'>Multilingual Concierges:</span>
                <br />
                Assist guests in their language with travel arrangements.
                <br />
                <br />
                <span className='head'>Guest Experience Ambassadors:</span>
                <br />
                Provide personalized experiences with cultural sensitivity.
                <br />
                <br />
                <span className='head'>Language Instructors:</span>
                <br />
                Offer language classes to staff to enhance guest interactions.
                <br />
                <br />
                <span className='head'>Event Coordinators:</span>
                <br />
                Plan and execute multilingual events and conferences.
              </li>
            </ul></div>
          <div className="card box-10">HOSPITALITY</div>
        </div>
      </div>
    </>
  );
}

export default Industries;