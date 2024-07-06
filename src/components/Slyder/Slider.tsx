import React, { useState, useEffect } from 'react';
import './Slider.css';
import bannerImage from '../../assets/bannermain.svg';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [bannerImage, bannerImage, bannerImage];
  const slideInterval = 3000; // Интервал переключения слайдов в миллисекундах

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, slideInterval);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </div>
      <div className="slider-dots-container">
        <div className="slider-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
