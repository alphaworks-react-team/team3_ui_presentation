import React from "react";

const Footer = () => {
	const styles = {
		height: "10vh",
		backgroundColor: "Black",
// 		backgroundColor: "#FF3CAC",
// backgroundImage: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",

		color: "gray",
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
