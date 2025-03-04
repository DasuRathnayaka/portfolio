import React, { useEffect, useState } from 'react';
import '../styles/Snow.css';

const Snow = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure proper initial positioning
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`snow-container ${mounted ? 'active' : ''}`}>
      {[...Array(30)].map((_, index) => (
        <div 
          key={index} 
          className="snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 6}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default Snow; 