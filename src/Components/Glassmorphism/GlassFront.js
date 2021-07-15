import React from 'react';
import './glass.css';

const GlassFront = props => {
  const cardStyles = {
    position: 'relative',
    width: '508px',
    height: '314px',
    transformStyle: 'preserve-3d',
    perspective: '500px',
    face: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
      borderRadius: '15px',
      background: 'rgba(255, 255, 255, 0.05)',
      transformStyle: 'preserve-3d',
      transition: '1s',
      debitCard: {
        position: 'absolute',
        left: '40px',
        top: '30px',
        color: '#fff',
        fontWeight: '500',
      },
      bank: {
        position: 'absolute',
        right: '40px',
        top: '25px',
        color: '#fff',
        fontWeight: '500',
        fontStyle: 'italic',
        fontSize: '24px',
      },
      imgChip: {
        backgroundImage:
          'url(https://pngimage.net/wp-content/uploads/2018/05/credit-card-chip-png-9.png)',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        height: '45px',
        top: '85px',
        left: '45px',
        width: '64px',
      },

      number: {
        position: 'absolute',
        bottom: '120px',
        left: '45px',
      },
      cardHolder: {
        position: 'absolute',
        top: '250px',
        left: '45px',
        fontWeight: '300',
        fontSize: '16px',
        letterSpacing: '2px',
      },
    },
  };

  //
  return (
    <div className='front' style={cardStyles}>
      {' '}
      {props.children}
      <div style={cardStyles.face}>
        <div style={cardStyles.face.debitCard}>
          <h3>Debit Card</h3>
        </div>
        <div style={cardStyles.face.bank}>
          <h3>Bank Name</h3>
        </div>
        <div style={cardStyles.face.imgChip}></div>
        <div className='number' style={cardStyles.face.number}>
          <h3>0123 4567 8901 2345</h3>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '45px',
            display: 'flex',
            alignItems: 'center',
            lineHeight: '1em',
          }}
        >
          <h5>
            <span>Valid</span>
            <br />
            <span>thru</span>
            <span
              style={{
                marginLeft: '20px',
                fontSize: '16px',
                fontWeight: '400',
                letterSpacing: '2px',
              }}
            >
              10/23
            </span>
          </h5>
        </div>
        <div style={cardStyles.face.cardHolder}>Mohammed Smith</div>
        <div className='before'></div>
        <div className='after'></div>
      </div>
    </div>
  );
};

export default GlassFront;
