import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Nav = ({design}) => {
	const styles = {
		minHeight: "10vh",
		backgroundColor: "#343a2b",
		color: "white",
		textStyle: {
			margin: "0",
			textAlign: "center",
		},
		linkStyle: {
			textDecoration: "none",
			color: "white",
		},
	};
	return (
		<div style={styles}>
			<h1 style={styles.textStyle}>Welcome to Design Layouts</h1>
			<Link to="/" style={styles.linkStyle}> lets go Home</Link>
			<Link to={design}>MaterialDesign</Link>
		</div>
	);
};

export default Nav;
