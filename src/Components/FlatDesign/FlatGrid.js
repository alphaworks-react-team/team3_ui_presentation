import React from 'react';

import './flat.css';

const FlatGrid = () => {
  const flatColors = [
    '#0078d4',
    '#5c2e91',
    '#038387',
    '#ca5010',
    '#c239b3',
    '#004e8c',
    '#a4262c',
    '#498205',
  ];

  const chooseRandColor = () => {
    const randColor = flatColors[Math.floor(Math.random() * flatColors.length)];
    return { backgroundColor: randColor };
  };

  const wrapper = {
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '20px',
    gap: '5%',
    justifyContent: 'center',
    width: '100%',
    height: '80vh',
  };
  const container = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '15%',
    height: '80%',
    gap: '2%',
  };
  const rectangle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 auto',
    width: '100%',
    //   img: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   height: '50%,',
    //   width: '50%',
    //   one: {
    //     backgroundImage: '/img/face.png',
    //   },
    //   two: {
    //     backgroundImage: '/img/flatimg.jpg',
    //   },
    // },
  };
  const box = {
    flex: '0 1 auto',

    width: '47.5%',
  };
  const wrap = {
    display: 'flex',
    height: '15%',
    justifyContent: 'space-between',
  };

  return (
    <div className='background' style={wrapper}>
      <div style={container}>
        <div style={{ ...rectangle, ...chooseRandColor() }}>thomas</div>

        <div style={{ ...rectangle, ...chooseRandColor() }}> danny</div>

        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
        <div style={wrap}>
          {[...new Array(2)].map(item => (
            <div style={{ ...box, ...chooseRandColor() }}></div>
          ))}
        </div>
        {[...new Array(1)].map(item => (
          <div style={{ ...rectangle, ...chooseRandColor() }}></div>
        ))}
      </div>

      <div style={container}>
        {[...new Array(2)].map(item => (
          <div style={{ ...rectangle, ...chooseRandColor() }}></div>
        ))}
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
      </div>
      <div style={container}>
        {[...new Array(1)].map(item => (
          <div style={{ ...rectangle, ...chooseRandColor() }}></div>
        ))}
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
        {[...new Array(2)].map(item => (
          <div style={{ ...rectangle, ...chooseRandColor() }}></div>
        ))}
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
      </div>
      <div style={container}>
        {[...new Array(2)].map(item => (
          <div style={{ ...rectangle, ...chooseRandColor() }}></div>
        ))}
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
        <div style={wrap}>
          {[...new Array(2)].map(item => (
            <div style={{ ...box, ...chooseRandColor() }}></div>
          ))}
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
      </div>
      <div style={container}>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
        {[...new Array(1)].map(item => (
          <div style={{ ...rectangle, ...chooseRandColor() }}></div>
        ))}
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}></div>
          <div style={{ ...box, ...chooseRandColor() }}></div>
        </div>
        {[...new Array(1)].map(item => (
          <div style={{ ...rectangle, ...chooseRandColor() }}></div>
        ))}
      </div>
    </div>
  );
};

export default FlatGrid;
