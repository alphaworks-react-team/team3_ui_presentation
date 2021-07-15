import React from "react";
import "./ruleofthird.css";
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
    width: "55%",
    border: "4px solid black",
    // // height: "30%",
    // paddingTop: "60px",
    // paddingBottom: "60px",
    padding: "60px 25% 60px 25%",
  };
  // const hoverStyles = {
  //   // transform: "scale(1.1)" /* Equal to scaleX(0.7) scaleY(0.7) */,
  //   // // backgroundColor: "pink",
  // };
  const leftTop = {
    height: "220px",
    width: "220px",
    backgroundImage: `url(${topLft})`,
    backgroundRepeat: "no-repeat",
  };
  const middleTop = {
    height: "220px",
    width: "220px",
    backgroundImage: `url(${midTop})`,
    backgroundRepeat: "no-repeat",
  };
  const rightTop = {
    height: "220px",
    width: "220px",
    backgroundImage: `url(${rigTop})`,
    backgroundRepeat: "no-repeat",
  };
  const middleLeft = {
    height: "220px",
    width: "220px",
    backgroundImage: `url(${midLft})`,
    backgroundRepeat: "no-repeat",
  };
  const middle = {
    height: "220px",
    width: "220px",
    backgroundImage: `url(${mid})`,
    backgroundRepeat: "no-repeat",
  };
  const middleRight = {
    height: "220px",
    width: "220px",
    backgroundImage: `url(${midRig})`,
    backgroundRepeat: "no-repeat",
  };
  const bottomLeft = {
    height: "220px",
    width: "220px",
    backgroundImage: `url(${btmLft})`,
    backgroundRepeat: "no-repeat",
  };
  const bottomMiddle = {
    height: "220px",
    width: "220px",
    backgroundImage: `url(${btmMid})`,
    backgroundRepeat: "no-repeat",
  };
  const bottomRight = {
    height: "220px",
    width: "220px",
    backgroundImage: `url(${btmRig})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={styles}>
      <div style={gridStyles}>
        <div style={leftTop} class="hover"></div>
        <div style={middleTop} class="hover"></div>
        <div style={rightTop} class="hover"></div>
        <div style={middleLeft} class="hover"></div>
        <div style={middle} class="hover"></div>
        <div style={middleRight} class="hover"></div>
        <div style={bottomLeft} class="hover"></div>
        <div style={bottomMiddle} class="hover"></div>
        <div style={bottomRight} class="hover"></div>
      </div>
    </div>
  );
};

export default RuleOfThird;
