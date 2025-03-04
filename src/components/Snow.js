import React from 'react';
import '../styles/Snow.css';

const Snow = () => {
  return (
    <div className="snow-container">
      {[...Array(100)].map((_, index) => (
        <div 
          key={index} 
          className="snow"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 8}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default Snow; 