import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";
const NewHome = () => {
	  const backColors = [
			"#0078d4",
			"#5c2e91",
			"#038387",
			"#ca5010",
			"#c239b3",
			"#004e8c",
			"#a4262c",
			"#498205",
	];
	const chooseRandColor = () => {
		const randColor = backColors[Math.floor(Math.random() * backColors.length)];
		return { backgroundColor: randColor };
	};

    const styles = {
			height: "75vh",
			linkStyle: {
				textDecoration: "none",
				color: "white",
			},
		};
	return (
		<AwesomeSlider style={styles}>
			<div style={{...chooseRandColor()}}>
				<Link to="/Glassmorphism" style={styles.linkStyle}>
					<h1>Glassmorphism</h1>
				</Link>
			</div>
			<div style={{...chooseRandColor()}}>
				<Link to="/materialDesign" style={styles.linkStyle}>
					<h1>Material Design</h1>
				</Link>
			</div>
			<div style={{...chooseRandColor()}}>
				<Link to="/ZLayout" style={styles.linkStyle}>
					<h1>Z Layout</h1>
				</Link>
			</div>
			<div style={{...chooseRandColor()}}>
				<Link to="/FLayout" style={styles.linkStyle}>
					<h1>F Layout</h1>
				</Link>
			</div>
			<div style={{...chooseRandColor()}}>
				<Link to="/RuleOfThird" style={styles.linkStyle}>
					<h1>Rule Of Third</h1>
				</Link>
			</div>
			<div style={{...chooseRandColor()}}>
				<Link to="/Neumorphism" style={styles.linkStyle}>
					<h1>Neumorphism</h1>
				</Link>
			</div>
			<div style={{...chooseRandColor()}}>
				<Link to="/GoldenRatio" style={styles.linkStyle}>
					<h1>Golden Ratio</h1>
				</Link>
			</div>
			<div style={{...chooseRandColor()}}>
				<Link to="/FlatDesign" style={styles.linkStyle}>
					<h1>Flat Design</h1>
				</Link>
			</div>
		</AwesomeSlider>
	);
};

export default NewHome;
