import React from 'react';
import './Industries.css';
import ServeIndustries from './ServeIndustries';
function Industries() {
  return (
    <>
      <div>

        <ServeIndustries/>
        <div className="container">
          <div className="card box-1">1</div>
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
