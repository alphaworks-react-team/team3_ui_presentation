import React from "react";

const Footer = () => {
	const styles = {
		minHeight: "10vh",
		backgroundColor: "Black",
		color: "gray",
		textStyle: {
			margin: "0",
			textAlign: "center",
		},
		designers: {
			listStyle:"none",
			color:"gray",
			display: "flex",
			justifyContent: "space-around",
			alignItems:"center",
		}
	};
	return (
		<div style={styles}>
			<h1 style={styles.textStyle}>Designed By</h1>
			<div style={styles.designers}>
				<li>
					<h2>Jernice</h2>
				</li>
				<li>
					<h2>Alex</h2>
				</li>
				<li>
					<h2>Danny</h2>
				</li>
			</div>
			<h6 style={styles.textStyle}>© 2021 ALL RIGHTS RESERVED.</h6>
		</div>
	);
};

export default Footer;
