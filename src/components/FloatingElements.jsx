import React, { useEffect, useState } from 'react';
import { Heart, Star, Triangle, Diamond, Zap, Sparkles, Target, Award } from 'lucide-react';

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const shapes = ['circle', 'square', 'heart', 'star', 'triangle', 'diamond', 'zap', 'sparkles', 'target', 'award'];
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', 
      '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43',
      '#10ac84', '#ee5a24', '#0984e3', '#6c5ce7', '#a29bfe'
    ];

    const createElement = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 25 + 15,
      speed: Math.random() * 3 + 0.5,
      direction: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 4
    });

    const initialElements = Array.from({ length: 20 }, createElement);
    setElements(initialElements);

    const interval = setInterval(() => {
      setElements(prev => 
        prev.map(el => ({
          ...el,
          x: el.x + Math.cos(el.direction * Math.PI / 180) * el.speed,
          y: el.y + Math.sin(el.direction * Math.PI / 180) * el.speed,
          direction: el.direction + (Math.random() - 0.5) * 2,
          rotation: el.rotation + el.rotationSpeed
        })).map(el => ({
          ...el,
          x: el.x > window.innerWidth ? 0 : el.x < 0 ? window.innerWidth : el.x,
          y: el.y > window.innerHeight ? 0 : el.y < 0 ? window.innerHeight : el.y
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const renderShape = (element) => {
    const iconSize = element.size * 0.6;
    const commonStyle = {
      left: element.x,
      top: element.y,
      width: element.size,
      height: element.size,
      color: element.color,
      transform: `rotate(${element.rotation}deg)`,
      animationDelay: `${Math.random() * 2}s`,
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      zIndex: 1
    };

    switch (element.shape) {
      case 'heart':
        return <Heart size={iconSize} style={commonStyle} />;
      case 'star':
        return <Star size={iconSize} style={commonStyle} />;
      case 'triangle':
        return <Triangle size={iconSize} style={commonStyle} />;
      case 'diamond':
        return <Diamond size={iconSize} style={commonStyle} />;
      case 'zap':
        return <Zap size={iconSize} style={commonStyle} />;
      case 'sparkles':
        return <Sparkles size={iconSize} style={commonStyle} />;
      case 'target':
        return <Target size={iconSize} style={commonStyle} />;
      case 'award':
        return <Award size={iconSize} style={commonStyle} />;
      case 'circle':
        return (
          <div
            style={{
              ...commonStyle,
              backgroundColor: element.color,
              borderRadius: '50%',
              boxShadow: `0 0 20px ${element.color}40`
            }}
          />
        );
      case 'square':
        return (
          <div
            style={{
              ...commonStyle,
              backgroundColor: element.color,
              borderRadius: '4px',
              boxShadow: `0 0 20px ${element.color}40`
            }}
          />
        );
      default:
        return (
          <div
            style={{
              ...commonStyle,
              backgroundColor: element.color,
              borderRadius: '50%',
              boxShadow: `0 0 20px ${element.color}40`
            }}
          />
        );
    }
  };

  return (
    <div className="floating-elements">
      {elements.map(element => (
        <div key={element.id}>
          {renderShape(element)}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
