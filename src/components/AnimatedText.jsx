import React, { useState, useEffect } from 'react';

const AnimatedText = ({ 
  children,
  text, 
  type = 'typewriter', 
  speed = 100, 
  className = '',
  style = {},
  colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Use children as text if text is not provided
  const textContent = text || children || '';

  useEffect(() => {
    if (type === 'typewriter') {
      if (currentIndex < textContent.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + textContent[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsComplete(true);
      }
    } else if (type === 'fadeIn') {
      setDisplayText(textContent);
      setIsComplete(true);
    }
  }, [currentIndex, textContent, speed, type]);

  const getAnimationClass = () => {
    switch (type) {
      case 'typewriter':
        return 'typewriter';
      case 'fadeIn':
        return 'fade-in';
      case 'slideUp':
        return 'slide-up';
      case 'bounce':
        return 'bounce';
      case 'glitch':
        return 'glitch';
      default:
        return 'typewriter';
    }
  };

  return (
    <div className={`animated-text ${getAnimationClass()} ${className}`} style={style}>
      {type === 'gradient' ? (
        <span 
          className="gradient-text"
          style={{
            background: `linear-gradient(45deg, ${colors.join(', ')})`,
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 3s ease-in-out infinite'
          }}
        >
          {textContent}
        </span>
      ) : (
        <span className="text-content">
          {displayText}
          {type === 'typewriter' && !isComplete && (
            <span className="cursor">|</span>
          )}
        </span>
      )}
      
    </div>
  );
};

export default AnimatedText;
