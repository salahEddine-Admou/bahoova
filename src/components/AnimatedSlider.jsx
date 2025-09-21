import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const AnimatedSlider = ({ images, autoPlay = true, interval = 4000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isPlaying && !isHovered) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, isHovered, images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className={`animated-slider ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="slider-container">
        <div className="slider-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''} ${
                index === (currentIndex - 1 + images.length) % images.length ? 'prev' : ''
              } ${
                index === (currentIndex + 1) % images.length ? 'next' : ''
              }`}
              style={{
                backgroundImage: `url(${image.url || image})`,
                zIndex: index === currentIndex ? 3 : index === (currentIndex - 1 + images.length) % images.length ? 2 : 1
              }}
            >
              <div className="slide-overlay">
                <div className="slide-content">
                  <h3 className="slide-title">{image.title || `Image ${index + 1}`}</h3>
                  <p className="slide-description">{image.description || ''}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="slider-nav prev" onClick={goToPrevious}>
          <ChevronLeft size={24} />
        </button>
        <button className="slider-nav next" onClick={goToNext}>
          <ChevronRight size={24} />
        </button>

        {/* Play/Pause Button */}
        <button className="play-pause-btn" onClick={togglePlayPause}>
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        {/* Dots Indicator */}
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default AnimatedSlider;
