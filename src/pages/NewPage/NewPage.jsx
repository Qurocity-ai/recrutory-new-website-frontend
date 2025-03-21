import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './NewPage.module.css';

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
import UnlockingPotential from '../BTOPOINT/UnlockingPotential';

function NewPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sectionRef = useRef(null);
  const isScrolling = useRef(false);

  const slides = [
    { Component: UnlockingPotential, image: './assets/image (1).png' },
    { Component: WhyWeMatter, image: './assets/image (2).png' },
    { Component: MarketInsights, image: './assets/image (3).png' },
    { Component: ServicePortfolio, image: './assets/image (4).png' },
    { Component: InnovativeLanguagePlatforms, image: './assets/image (5).png' },
    { Component: Workflow, image: './assets/image (6).png' },
    { Component: LinguisticProcess, image: './assets/image (7).png' },
    { Component: Footprint, image: './assets/image (8).png'},
    { Component: HiringOpt, image: './assets/image (9).png'},
    { Component: CoreService, image: './assets/image (10).png' },
    { Component: HiringAssessment, image: './assets/image (11).png' },
    { Component: LanguageDistribution, image: './assets/image (12).png' },
    { Component: ContactInfo, image: './assets/image (13).png' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows for mobile
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (isMobile) {
    return (
      <div className={styles.mobileWrapper}>
        <Slider {...sliderSettings} className={styles.mobileCarousel}>
          {slides.map(({ image }, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div ref={sectionRef} className={styles.contentSection}>
        <div className={styles.slidesContainer}>
          {slides.map(({ Component }, index) => (
            <div
              key={index}
              className={`${styles.slide} 
              ${index === activeIndex ? styles.active : ''}
              ${index < activeIndex ? styles.previous : ''}`}
            >
              <Component />
            </div>
          ))}
        </div>

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
