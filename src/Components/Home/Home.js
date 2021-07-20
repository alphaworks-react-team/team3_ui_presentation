import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";
const Home = () => {
	  const backColors = [
			"radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )",
			"linear-gradient( 91.9deg,  rgba(75,207,250,1) 6.3%, rgba(25,159,249,1) 98.9% )",
			"linear-gradient( 90.5deg,  rgba(227,183,89,1) 1.1%, rgba(220,86,47,1) 48.9%, rgba(197,19,19,1) 98.9% )",
			"linear-gradient( 64.5deg,  rgba(245,116,185,1) 14.7%, rgba(89,97,223,1) 88.7% )",
			"radial-gradient( circle farthest-corner at 46.6% 51.1%,  rgba(255,146,139,1) 0%, rgba(255,172,129,1) 90% )",
			"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
			"linear-gradient(to top, #30cfd0 0%, #330867 100%)",
			"linear-gradient(180deg, #2af598 0%, #009efd 100%)",
		];
	const chooseRandColor = () => {
		const randColor = backColors[Math.floor(Math.random() * backColors.length)];
		return { backgroundImage: randColor };
	};
    const styles = {
			height: "71vh",
			linkStyle: {
				textDecoration: "none",
				color: "white",
			},
	};
	const AutoplaySlider = withAutoplay(AwesomeSlider);
	return (
		<AutoplaySlider
			style={styles}
			bullets={false}
			play={true}
			interval={3000}
			buttons={false}
			// fillParent={true}
			animation="cubeAnimation">
			<div style={{ ...chooseRandColor() }}>
				<Link to="/Glassmorphism" style={styles.linkStyle}>
					<h1>Glassmorphism</h1>
				</Link>
			</div>
			<div style={{ ...chooseRandColor() }}>
				<Link to="/materialDesign" style={styles.linkStyle}>
					<h1>Material Design</h1>
				</Link>
			</div>
			<div style={{ ...chooseRandColor() }}>
				<Link to="/ZLayout" style={styles.linkStyle}>
					<h1>Z Layout</h1>
				</Link>
			</div>
			<div style={{ ...chooseRandColor() }}>
				<Link to="/FLayout" style={styles.linkStyle}>
					<h1>F Layout</h1>
				</Link>
			</div>
			<div style={{ ...chooseRandColor() }}>
				<Link to="/RuleOfThird" style={styles.linkStyle}>
					<h1>Rule Of Third</h1>
				</Link>
			</div>
			<div style={{ ...chooseRandColor() }}>
				<Link to="/Neumorphism" style={styles.linkStyle}>
					<h1>Neumorphism</h1>
				</Link>
			</div>
			<div style={{ ...chooseRandColor() }}>
				<Link to="/GoldenRatio" style={styles.linkStyle}>
					<h1>Golden Ratio</h1>
				</Link>
			</div>
			<div style={{ ...chooseRandColor() }}>
				<Link to="/FlatDesign" style={styles.linkStyle}>
					<h1>Flat Design</h1>
				</Link>
			</div>
		</AutoplaySlider>
	);
};

export default Home;
