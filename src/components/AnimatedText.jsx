import React, { useState, useEffect } from 'react';

const AnimatedText = ({ 
  text, 
  type = 'typewriter', 
  speed = 100, 
  className = '',
  colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (type === 'typewriter') {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsComplete(true);
      }
    } else if (type === 'fadeIn') {
      setDisplayText(text);
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, type]);

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
    <div className={`animated-text ${getAnimationClass()} ${className}`}>
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
          {text}
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
