import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Checkbox } from "@material-ui/core/Checkbox";
import { FormLabel } from "@material-ui/core/FormControlLabel";
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import SnoozeOutlinedIcon from "@material-ui/icons/SnoozeOutlined";
const MaterialDesign = () => {
	const styles = {
		background:
			"linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))",
		minHeight: "80vh",
		// width:"90%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		aside: {
			flex: "0.4",
        },
        iconStyles:{
            display: "flex",
            alignItems: "center",
            JustifyContent: "space-between"
        },
		formContainer: {
			flex: "0.5",
			background: "white",
			boxShadow:
				"12px 12px 16px 0 rgba(0, 0, 0, 0.25),-8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
			height: "400px",
			width: "500px",
			borderRadius: "10px",
			display: "flex",
			flexDirection: "column",
		},
	};
	return (
		<div style={styles}>
			<div style={styles.aside}>
				<div style={styles.iconStyles}>
					<InboxOutlinedIcon color="primary" />
					<h2>inbox</h2>
				</div>
				<div style={styles.iconStyles}>
					<StarOutlinedIcon color="primary" />
					<h2>Starred</h2>
				</div>
				<div style={styles.iconStyles}>
					<SendOutlinedIcon color="primary" />
					<h2>Sent</h2>
				</div>
				<div style={styles.iconStyles}>
					<SnoozeOutlinedIcon color="primary" />
					<h2>Snooze</h2>
				</div>
			</div>
			<div style={styles.formContainer}>
				<Button variant="contained" color="primary" size="small">
					Material Design
				</Button>
				<Link to="/"> lets go Home</Link>
			</div>
		</div>
	);
};

export default MaterialDesign;
