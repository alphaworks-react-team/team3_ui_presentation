import React from 'react';

const FlatGrid = () => {
  const wrapper = {
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: '20px',
    gap: '5%',
    justifyContent: 'center',
    width: '100%',
    height: '80vh',
    border: '1px solid #1890ff',
  };
  const container = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '15%',
    border: '1px dashed #fff',
    height: '80%',
    gap: '2%',
  };
  const rectangle = {
    flex: '1',
    width: '100%',
    border: '1px solid #000',
  };
  const box = {
    flex: '0 0 auto',
    height: '85%',
    width: '47.5%',

  };
  const wrap = {
    display: 'flex',
    height: '15%',
    justifyContent: 'space-between',
  };
  return (
    <div style={wrapper}>
      <div style={container}>
        <div style={rectangle}></div>
        <div style={rectangle}></div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={rectangle}></div>
      </div>
      <div style={container}>
        <div style={rectangle}></div>
        <div style={rectangle}></div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
      </div>
      <div style={container}>
        <div style={rectangle}></div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={rectangle}></div>
        <div style={rectangle}></div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
      </div>
      <div style={container}>
        <div style={rectangle}></div>
        <div style={rectangle}></div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
      </div>
      <div style={container}>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={rectangle}></div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={wrap}>
          <div style={box}>box1</div>
          <div style={box}>box2</div>
        </div>
        <div style={rectangle}></div>
      </div>
    </div>
  );
};

export default FlatGrid;
