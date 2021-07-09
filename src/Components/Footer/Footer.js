import React from "react";

const Footer = () => {
	const styles = {
		height: "10vh",
		backgroundColor: "#343a2b",
		color: "white",
		textStyle: {
			margin: "0",
			textAlign: "center",
		},
	};
	return (
		<div style={styles}>
			<h1 style={styles.textStyle}>Footer</h1>
		</div>
	);
};

export default Footer;
