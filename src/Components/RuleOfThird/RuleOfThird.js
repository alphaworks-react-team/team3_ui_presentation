import React from "react";
import topLft from "./Images/xdp_topLeft.png";
import midTop from "./Images/xdp_middleTop.png";
import rigTop from "./Images/xdp_topRight.png";
import midLft from "./Images/xdp_middleLeft.png";
import mid from "./Images/xdp_middle.png";
import midRig from "./Images/xdp_middleRight.png";
import btmLft from "./Images/xdp_bottomLeft.png";
import btmMid from "./Images/xdp_bottomMiddle.png";
import btmRig from "./Images/xdp_bottomRight.png";

const RuleOfThird = () => {
  const styles = {
    minHeight: "80vh",
    // backgroundColor: "purple",
  };
  const gridStyles = {
    display: "flex",
    // flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    paddingTop: "60px",
    paddingBottom: "60px",
  };
  const hoverStyles = {
    transform: "scale(1.1)" /* Equal to scaleX(0.7) scaleY(0.7) */,
    backgroundColor: "pink",
  };
  const leftTop = {
    height: "200px",
    width: "200px",
    backgroundImage: `url(${topLft})`,
    backgroundRepeat: "no-repeat",
  };
  const middleTop = {
    height: "200px",
    width: "200px",
    backgroundImage: `url(${midTop})`,
    backgroundRepeat: "no-repeat",
  };
  const rightTop = {
    height: "200px",
    width: "200px",
    backgroundImage: `url(${rigTop})`,
    backgroundRepeat: "no-repeat",
  };
  const middleLeft = {
    height: "200px",
    width: "200px",
    backgroundImage: `url(${midLft})`,
    backgroundRepeat: "no-repeat",
  };
  const middle = {
    height: "200px",
    width: "200px",
    backgroundImage: `url(${mid})`,
    backgroundRepeat: "no-repeat",
  };
  const middleRight = {
    height: "200px",
    width: "200px",
    backgroundImage: `url(${midRig})`,
    backgroundRepeat: "no-repeat",
  };
  const bottomLeft = {
    height: "200px",
    width: "200px",
    backgroundImage: `url(${btmLft})`,
    backgroundRepeat: "no-repeat",
  };
  const bottomMiddle = {
    height: "200px",
    width: "200px",
    backgroundImage: `url(${btmMid})`,
    backgroundRepeat: "no-repeat",
  };
  const bottomRight = {
    height: "200px",
    width: "200px",
    backgroundImage: `url(${btmRig})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={styles}>
      <div style={hoverStyles}>
        <div style={gridStyles}>
          <div style={leftTop}></div>
          <div style={middleTop}></div>
          <div style={rightTop}></div>
          <div style={middleLeft}></div>
          <div style={middle}></div>
          <div style={middleRight}></div>
          <div style={bottomLeft}></div>
          <div style={bottomMiddle}></div>
          <div style={bottomRight}></div>
        </div>
      </div>
    </div>
  );
};

export default RuleOfThird;
