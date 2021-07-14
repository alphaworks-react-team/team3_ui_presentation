import React from 'react';
import { Link } from 'react-router-dom';
import GlassFront from './GlassFront';
import GlassBack from './GlassBack';
const Glassmorphism = () => {
    const styles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    background: 'rgb(131,58,180)',
    background:
      'linear-gradient(54deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    minHeight: '80vh',
  };

  return <div style={styles}>
    <GlassFront></GlassFront>
    <GlassBack></GlassBack>
  </div>;
};

export default Glassmorphism;
