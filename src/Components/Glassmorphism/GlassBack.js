import React from 'react';
const GlassBack = () => {
  const cardStyles = {
    position: 'relative',
    width: '508px',
    height: '314px',
    transformStyle: 'preserve-3d',
    perspective: '500px',
    back: {
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
      <div style={cardStyles.back}>
        <div style={cardStyles.back.blackBar}></div>
        <div style={cardStyles.back.ccvText}>
          Authorized Signature-not valid unless signed
        </div>
        <div style={cardStyles.back.whiteBar}></div>
        <div style={cardStyles.back.verification}>123</div>
      </div>
      <div style={cardStyles.back.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut neque
        justo. Fusce ultrices dictum ligula quis fringilla. Nunc commodo libero
        non lacinia eleifend. Duis lacus dui, elementum vel sapien ut, suscipit
        porta tortor. Integer volutpat sit amet turpis at fringilla. Vestibulum
        odio lectus, vestibulum eu nisi non, commodo eleifend odio. Ut dolor mi,
        ornare sed arcu at, porta vehicula massa. Praesent pharetra odio vitae
        dolor placerat tempus. Maecenas eget orci nunc.
      </div>
    </div>
  );
};

export default GlassBack;
