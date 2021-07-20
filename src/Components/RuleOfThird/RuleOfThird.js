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
		minHeight: "51vh",
		// backgroundColor: "purple",
	};
  const gridStyles = {
    display: "flex",
    // flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "50%",
    // border: "4px solid black",
    // // height: "30%",
    // paddingTop: "60px",
    // paddingBottom: "60px",
    padding: "60px 25% 0px 25%",
  };
  // const hoverStyles = {
  //   // transform: "scale(1.1)" /* Equal to scaleX(0.7) scaleY(0.7) */,
  //   // // backgroundColor: "pink",
  // };
  const leftTop = {
    height: "275px",
    width: "275px",
    backgroundImage: `url(${topLft})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'contain',
    marginRight:"20px"
  };
  const middleTop = {
		height: "275px",
		width: "275px",
		backgroundImage: `url(${midTop})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
    marginRight:"20px"
	};
  const rightTop = {
    height: "275px",
    width: "275px",
    backgroundImage: `url(${rigTop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'contain',
    marginRight:"20px"
  };
  const middleLeft = {
    height: "275px",
    width: "275px",
    backgroundImage: `url(${midLft})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'contain',
    marginRight:"20px"
  };
  const middle = {
		height: "275px",
		width: "275px",
		backgroundImage: `url(${mid})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
    marginRight:"20px"
	};
  const middleRight = {
    height: "275px",
    width: "275px",
    backgroundImage: `url(${midRig})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'contain',
    marginRight:"20px"
  };
  const bottomLeft = {
    height: "275px",
    width: "275px",
    backgroundImage: `url(${btmLft})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'contain',
    marginRight:"20px"
  };
  const bottomMiddle = {
		height: "275px",
		width: "275px",
		backgroundImage: `url(${btmMid})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: "contain",
    marginRight:"20px"
	};
  const bottomRight = {
    height: "275px",
    width: "275px",
    backgroundImage: `url(${btmRig})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: 'contain',
    marginRight:"20px"
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
