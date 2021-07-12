// import React from 'react';

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
        color: '#fff',
        fontWeight: '500',
        fontSize: '18px',
        textShadow: '0 2px 1px #005',
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

    back: {
      blackBar: {
        position: 'absolute',
        top: '40px',
        height: '60px',
        width: '100%',
        background: '#000',
      },
      ccvText: {
        position: 'absolute',
        top: '120px',
        left: '30px',
        color: '#fff',
        fontWeight: '400',
        fontSize: '12px',
        letterSpacing: '2px',
      },
      whiteBar: {
        position: 'relative',
        top: '130px',
        height: '40px',
        left: '25px',
        width: '375px',
        background: '#fff',
        marginTop: '5px',
      },
      verification: {
        position: 'relative',
        top: '95px',
        left: '395px',
        background: '#ccc',
        color: '#111',
        width: '50px',
        height: '30px',
        fontWeight: '600',
        letterSpacing: '3px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        position: 'absolute',
        bottom: '30px',
        left: '30px',
        right: '30px',
        color: '#fff',
        fontSize: '10px',
        lineHeight: '1.4em',
        fontWeight: '300',
      },
    },
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
        <div style={cardStyles.face.imgChip}></div>
        <div style={cardStyles.face.number}>
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
        {/* back of card  */}
        <div style={cardStyles.back}>
          <div style={cardStyles.back.blackBar}></div>
          <div style={cardStyles.back.ccvText}>
            Authorized Signature-not valid unless signed
          </div>
          <div style={cardStyles.back.whiteBar}></div>
          <div style={cardStyles.back.verification}>123</div>
        </div>
        <div style={cardStyles.back.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
          neque justo. Fusce ultrices dictum ligula quis fringilla. Nunc commodo
          libero non lacinia eleifend. Duis lacus dui, elementum vel sapien ut,
          suscipit porta tortor. Integer volutpat sit amet turpis at fringilla.
          Vestibulum odio lectus, vestibulum eu nisi non, commodo eleifend odio.
          Ut dolor mi, ornare sed arcu at, porta vehicula massa. Praesent
          pharetra odio vitae dolor placerat tempus. Maecenas eget orci nunc.
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
