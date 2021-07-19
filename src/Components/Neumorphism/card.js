import React from "react";

const card = ({ title }) => {
	const styles = {
        background:
        "linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))",
		boxShadow:
        "12px 12px 16px 0 rgba(0, 0, 0, 0.25),-8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
		borderRadius: "50px",
        display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "350px",
        width: "350px",
        cursor: "pointer",
        margin:"20px"
	};
	return (
		<div style={styles}>
			<div>{title}</div>
		</div>
	);
};

export default card;
