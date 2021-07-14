import React from 'react';
import FlatGrid from './FlatGrid';

const FlatDesign = () => {
  const styles = {
    minHeight: '80vh',
    backgroundColor: 'purple',
  };
  return (
    <div style={styles}>
      <FlatGrid></FlatGrid>
    </div>
  );
};

export default FlatDesign;
