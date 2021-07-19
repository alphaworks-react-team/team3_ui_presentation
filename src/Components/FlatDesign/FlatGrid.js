import React from 'react';
import mail from './img/mail.png';
import store from './img/store.png';
import face from './img/face.png';
import map from './img/map.png';
import skydrive from './img/skydrive.png';
import camera from './img/camera.png';
import headphone from './img/headphone.png';
import outlook from './img/outlook.png';
import powerpoint from './img/powerpoint.png';
import access from './img/access.png';
import excel from './img/excel.png';
import word from './img/word.png';
import publisher from './img/publisher.png';
import messaging from './img/messaging.png';
import graph from './img/graph.png';
import skype from './img/skype.png';
import video from './img/video.png';
import game from './img/game.png';

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
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
    flex: '1 1 auto',
    height: '7rem',
    width: '100%',
  };
  const box = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: '0 1 auto',
    height: '7rem',
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
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='rectangle' src={mail} alt='face' />
          <div className='rec-title'>
            <h5>Mail</h5>
          </div>
        </div>

        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <div className='title'></div>
          <div className='rec-title'>
            <h5>Mail</h5>
          </div>
        </div>

        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
            <div className='box-title'>
              <h5>InternetExplorer</h5>
            </div>
          </div>

          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={store} alt='face' />
            <div className='box-title'>
              <h5>Store</h5>
            </div>
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={map} alt='face' />
            <div className='box-title'>
              <h5>Map</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={skydrive} alt='face' />
            <div className='box-title'>
              <h5>SkyDrive</h5>
            </div>
          </div>
        </div>

        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='rectangle' src={face} alt='face' />
        </div>
      </div>

      <div style={container}>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <div className='maintext'>
            <h1>Trending</h1>
            <p>Dorner manifesto</p>
            <p>Japan jets</p>
            <p>Selena Gomez</p>
            <p>Bing</p>
          </div>
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <div className='maintext'>
            <h1>Cape Town, South Africa</h1>
          </div>
        </div>

        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={camera} alt='face' />
            <div className='box-title'>
              <h5>Camera</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={headphone} alt='face' />
            <div className='box-title'>
              <h5>Music</h5>
            </div>
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={outlook} alt='face' />
            <div className='box-title'>
              <h5>Outlook</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={powerpoint} alt='face' />
            <div className='box-title'>
              <h5>Powerpoint</h5>
            </div>
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={access} alt='face' />
            <div className='box-title'>
              <h5>Access</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={publisher} alt='face' />
            <div className='box-title'>
              <h5>Publisher</h5>
            </div>
          </div>
        </div>
      </div>
      <div style={container}>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='rectangle' src={graph} alt='face' />
        </div>

        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={excel} alt='face' />
            <div className='box-title'>
              <h5>Excel</h5>
            </div>
          </div>
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='rectangle' src={face} alt='face' />
        </div>

        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='rectangle' src={skype} alt='face' />
        </div>

        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
        </div>
      </div>
      <div style={container}>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='rectangle' src={messaging} alt='face' />
          <div className='rec-title'>
            <h5>Messaging</h5>
          </div>
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='rectangle' src={face} alt='face' />
        </div>

        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={word} alt='face' />
            <div className='box-title'>
              <h5>Word</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
        </div>
      </div>
      <div style={container}>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={game} alt='face' />
            <div className='box-title'>
              <h5>Games</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={video} alt='face' />
            <div className='box-title'>
              <h5>Video</h5>
            </div>
          </div>
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='rectangle' src={face} alt='face' />
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='box' src={face} alt='face' />
          </div>
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='rectangle' src={face} alt='face' />
        </div>
      </div>
    </div>
  );
};
export default FlatGrid;
