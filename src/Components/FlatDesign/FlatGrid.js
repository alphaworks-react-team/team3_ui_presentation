
import React from 'react';
import mail from './img/mail.png';
import store from './img/store.png';
import face from './img/face.png';
import map from './img/map.png';
import skydrive from './img/skydrive.png';
import camera from './img/camera.png';
import headphone from './img/headphone.png';
import messaging from './img/messaging.png';
import graph from './img/graph.png';
import skype from './img/skype.png';
import video from './img/video.png';
import game from './img/game.png';
import news from './img/news.png';
import briefcase from './img/briefcase.png';
import calendar from './img/calendar.png';
import trophy from './img/trophy.png';
import yahoo from './img/yahoo.png';
import mFTP from './img/mFTP.jpg';
import pirate from './img/pirate.jpg';
import shopping from './img/shopping.jpg';
import palm from './img/palmtrees.jpeg';
import dre from './img/dre.jpeg';
import google from './img/google.png';
import word from './img/word_2013.png';
import publisher from './img/publisher_2013.png';
import excel from './img/excel.png';
import powerpoint from './img/powerpoint_2013.png';
import outlook from './img/outlook_2013.png';
import spotify from './img/spotify.png';
import dpbox from './img/dropbox_2013.png';
import bw from './img/BW.png';
import stream from './img/stream.png';
import edge from './img/edge.png';
import ucb from './img/UCbrowser.png';
import netflix from './img/netflix.png';
import disney from './img/disney.png';
import onenote from './img/onenote.png';
import sharepoint from './img/sharepoint_2013.png';
import access from './img/access_2013.png';
import visio from './img/visio_2013.png';

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
    gap: '1.5%',
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
    width: '48%',
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
          <img className='flat-rectangle' src={mail} alt='mail' />
          <div className='rec-title'>
            <h5>Mail</h5>
          </div>
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <div className='date-title'>
            <h2 className='h2right'>8</h2>
            <p className='pright'>Friday</p>
          </div>
          <img className='img-title' src={calendar} alt='calendar' />
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={onenote} alt='onenote' />
            <div className='box-title'>
              <h5>OneNote</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={store} alt='store' />
            <div className='box-title'>
              <h5>Store</h5>
            </div>
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={map} alt='map' />
            <div className='box-title'>
              <h5>Map</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={skydrive} alt='skydrive' />
            <div className='box-title'>
              <h5>SkyDrive</h5>
            </div>
          </div>
        </div>
        <div
          className='img-cover-all'
          style={{ backgroundImage: `url(${palm})` }}
        >
          <div className='row-title'>
            <div className='text-title'>
              <h5>Desktop</h5>
            </div>
          </div>
        </div>
      </div>
      <div style={container}>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <div className='maintext'>
            <h3>Trending</h3>
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
          <img
            className='flat-rectangle img-title'
            src={briefcase}
            alt='briefcase'
          />
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={camera} alt='face' />
            <div className='box-title'>
              <h5>Camera</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={headphone} alt='face' />
            <div className='box-title'>
              <h5>Music</h5>
            </div>
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={outlook} alt='outlook' />
            <div className='box-title'>
              <h5>Outlook</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={powerpoint} alt='powerpoint' />
            <div className='box-title'>
              <h5>Powerpoint</h5>
            </div>
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={sharepoint} alt='onedrive' />
            <div className='box-title'>
              <h5>SharePoint</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={publisher} alt='sharepoint' />
            <div className='box-title'>
              <h5>Publisher</h5>
            </div>
          </div>
        </div>
      </div>
      <div style={container}>
        <div
          className='img-cover-all rectangle'
          style={{ backgroundImage: `url(${dre})` }}
        >
          <div className='row-bg'>
            <img className='img-title' src={graph} alt='graph' />
            <div className='text-title'>Beat by Dre: How Monster lost the</div>
          </div>
        </div>

        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img
              className='img-larger flat-box'
              style={{ height: '100px', width: '100px' }}
              src={netflix}
              alt='netflix'
            />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={excel} alt='face' />
            <div className='box-title'>
              <h5>Excel</h5>
            </div>
          </div>
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='img-drop img-only' src={google} alt='google' />
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='img-drop img-only' src={skype} alt='skype' />
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={stream} alt='stream' />
            <div className='box-title'>
              <h5>Stream</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='img-cover-all' src={yahoo} alt='yahoo' />
          </div>
        </div>
      </div>
      <div style={container}>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='flat-rectangle' src={messaging} alt='messaging' />
          <div className='rec-title'>
            <h5>Messaging</h5>
          </div>
        </div>
        <div
          className='img-cover-all rectangle'
          style={{
            backgroundImage: `url(${bw})`,
            justifyContent: 'flex-end',
          }}
        >
          <div className='row-bg'>
            <img className='img-title' src={news} alt='news' />
            <div className='text-title'>Bitwise Reopening </div>
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={word} alt='word' />
            <div className='box-title'>
              <h5>Word</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={edge} alt='edge' />
            <div className='box-title'>
              <h5>Edge</h5>
            </div>
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='img-cover-all' src={shopping} alt='GreatWindows' />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={spotify} alt='spotify' />
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='img-cover-all' src={pirate} alt='pirate' />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box img-cover-all' src={dpbox} alt='dropbox' />
          </div>
        </div>
      </div>
      <div style={container}>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={game} alt='Games' />
            <div className='box-title'>
              <h5>Games</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={video} alt='video' />
            <div className='box-title'>
              <h5>Video</h5>
            </div>
          </div>
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <div className='flat-rectangle maintext'>
            Sun Sentinel - Clippers are now the main event
          </div>
          <img className='flat-rectangle img-title' src={trophy} alt='trophy' />
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={access} alt='access' />
            <div className='box-title'>
              <h5>Access</h5>
            </div>
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='flat-box' src={visio} alt='visio' />
            <div className='box-title'>
              <h5>Visio</h5>
            </div>
          </div>
        </div>
        <div style={wrap}>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='img-cover-all' src={disney} alt='disney' />
          </div>
          <div style={{ ...box, ...chooseRandColor() }}>
            <img className='img-cover-all' src={mFTP} alt='mFTP' />
          </div>
        </div>
        <div style={{ ...rectangle, ...chooseRandColor() }}>
          <img className='img-only' src={ucb} alt='uc browser' />
        </div>
      </div>
    </div>
  );
};
export default FlatGrid;
