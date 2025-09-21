import React, { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const createElement = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
      direction: Math.random() * 360,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      shape: Math.random() > 0.5 ? 'circle' : 'square'
    });

    const initialElements = Array.from({ length: 15 }, createElement);
    setElements(initialElements);

    const interval = setInterval(() => {
      setElements(prev => 
        prev.map(el => ({
          ...el,
          x: el.x + Math.cos(el.direction * Math.PI / 180) * el.speed,
          y: el.y + Math.sin(el.direction * Math.PI / 180) * el.speed,
          direction: el.direction + (Math.random() - 0.5) * 2
        })).map(el => ({
          ...el,
          x: el.x > window.innerWidth ? 0 : el.x < 0 ? window.innerWidth : el.x,
          y: el.y > window.innerHeight ? 0 : el.y < 0 ? window.innerHeight : el.y
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-elements">
      {elements.map(element => (
        <div
          key={element.id}
          className={`floating-element ${element.shape}`}
          style={{
            left: element.x,
            top: element.y,
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
    </div>
  );
};

export default FloatingElements;
