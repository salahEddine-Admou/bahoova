import React, { useState, useEffect } from 'react';

const ColorSwitcher = ({ children, className = "" }) => {
  const [colorIndex, setColorIndex] = useState(0);
  
  const colorSchemes = [
    {
      primary: '#ff6b6b',
      secondary: '#4ecdc4',
      accent: '#45b7d1',
      background: '#f8f9fa',
      text: '#2c3e50'
    },
    {
      primary: '#a8e6cf',
      secondary: '#ffd3a5',
      accent: '#fd79a8',
      background: '#f8f9fa',
      text: '#2c3e50'
    },
    {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      background: '#f8f9fa',
      text: '#2c3e50'
    },
    {
      primary: '#f093fb',
      secondary: '#f5576c',
      accent: '#4facfe',
      background: '#f8f9fa',
      text: '#2c3e50'
    },
    {
      primary: '#43e97b',
      secondary: '#38f9d7',
      accent: '#667eea',
      background: '#f8f9fa',
      text: '#2c3e50'
    },
    {
      primary: '#fa709a',
      secondary: '#fee140',
      accent: '#a8edea',
      background: '#f8f9fa',
      text: '#2c3e50'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colorSchemes.length);
    }, 5000); // Change colors every 5 seconds

    return () => clearInterval(interval);
  }, [colorSchemes.length]);

  const currentColors = colorSchemes[colorIndex];

  return (
    <div 
      className={`color-switcher ${className}`}
      style={{
        '--primary-color': currentColors.primary,
        '--secondary-color': currentColors.secondary,
        '--accent-color': currentColors.accent,
        '--background-color': currentColors.background,
        '--text-color': currentColors.text,
        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
      
    </div>
  );
};

export default ColorSwitcher;
