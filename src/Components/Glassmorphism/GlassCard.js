import React from 'react';

const GlassCard = () => {
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
      backgroundFilter: 'blur(10px)',
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
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        height: '45px',
        top: '80px',
        left: '50px',
        maxWidth: '64px',
      },

      number: {
        position: 'absolute',
        bottom: '130px',
        left: '50px',
        color: '#fff',
        fontWeight: '500',
        fontSize: '18px',
        textShadow: '0 2px 1px #005',
      },
    },

    back: {},
  };

  return (
    <div style={cardStyles}>
      <div style={cardStyles.face}>
        <div style={cardStyles.face.debitCard}>
          <h3>Debit Card</h3>
        </div>
        <div style={cardStyles.face.bank}>
          <h3>Bank Name</h3>
        </div>
        <div style={cardStyles.face.imgChip}>textdecoration</div>
        <div style={cardStyles.face.number}>
          <h3>0123 4567 8901 2345</h3>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '90px',
            left: '50px',
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
        <div
          className='before'
          style={{
            content: '',
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            width: '60px',
            height: '60px',
            background: '#fff',
            borderRadius: '50%',
            opacity: '0.5',
          }}
        ></div>
        <div
          className='after'
          style={{
            content: '',
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            width: '60px',
            height: '60px',
            background: '#fff',
            borderRadius: '50%',
            opacity: '0.7',
          }}
        ></div>
      </div>
    </div>
  );
};

export default GlassCard;
