import React, { useState, useEffect, useRef } from 'react';
import WhyWeMatter from '../BTOPOINT/WhyWeMatter';
import MarketInsights from '../BTOPOINT/MarketInsights';
import ServicePortfolio from '../BTOPOINT/ServicePortfolio';
import InnovativeLanguagePlatforms from '../BTOPOINT/InnovativeLanguage';
import Workflow from '../BTOPOINT/Workflow';
import Footprint from '../BTOPOINT/FootprintUI';
import LinguisticProcess from '../BTOPOINT/LinguisticProcess';
import HiringOpt from '../BTOPOINT/HiringOpt';
import CoreService from '../BTOPOINT/CoreService';
import HiringAssessment from '../BTOPOINT/HiringAssessment';
import LanguageDistribution from '../BTOPOINT/LanguageDistribution';
import ContactInfo from '../BTOPOINT/ContactInfo';
import styles from './NewPage.module.css';
import UnlockingPotential from '../BTOPOINT/UnlockingPotential';

function NewPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isScrolling = useRef(false);

  // All Slide Components
  const slides = [
    { Component: UnlockingPotential, name: 'UnlockingPotential' },
    { Component: WhyWeMatter, name: 'WhyWeMatter' },
    { Component: MarketInsights, name: 'MarketInsights' },
    { Component: ServicePortfolio, name: 'ServicePortfolio' },
    { Component: InnovativeLanguagePlatforms, name: 'InnovativeLanguagePlatforms' },
    { Component: Workflow, name: 'Workflow' },
    { Component: LinguisticProcess, name: 'LinguisticProcess' },
    { Component: Footprint, name: 'Footprint' },
    { Component: HiringOpt, name: 'HiringOpt' },
    { Component: CoreService, name: 'CoreService' },
    { Component: HiringAssessment, name: 'HiringAssessment' },
    { Component: LanguageDistribution, name: 'LanguageDistribution' },
    { Component: ContactInfo, name: 'ContactInfo' },
  ];

  const changeSlide = (direction) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    setTimeout(() => {
      isScrolling.current = false;
    }, 1500); // Increased duration to match animation

    setActiveIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex < 0) newIndex = 0;
      if (newIndex >= slides.length) newIndex = slides.length - 1;
      return newIndex;
    });
  };




  useEffect(() => {
    const handleScroll = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isInside =
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right;

      if (!isInside) return;
      e.preventDefault();
      if (e.deltaY > 0) changeSlide(1);
      else if (e.deltaY < 0) changeSlide(-1);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div ref={sectionRef} className={styles.contentSection}>
        <div className={styles.slidesContainer}>
          {slides.map(({ Component, name }, index) => (
            <div
              key={name}
              className={`${styles.slide} 
              ${index === activeIndex ? styles.active : ''}
              ${index < activeIndex ? styles.previous : ''}`}
            >
              <Component />
            </div>
          ))}
        </div>

        {/* Page Indicator (Dots) */}
        <div className={styles.pageIndicator}>
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewPage;
