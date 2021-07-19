import React, { useState } from 'react';
import GlassFront from './GlassFront';
import GlassBack from './GlassBack';
import ReactCardFlip from 'react-card-flip';
import './glass.css';

const Glassmorphism = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className='styleGlass'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <GlassFront />
        <GlassBack className='back' />
      </ReactCardFlip>
      <button className='btn' onClick={handleClick}>
        Click to Flip
      </button>
    </div>
  );
};

export default Glassmorphism;
