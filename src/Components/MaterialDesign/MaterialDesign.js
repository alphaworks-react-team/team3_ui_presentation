import React from "react";
import "./material.css";
import MaterialNav from "./MaterialNav";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Checkbox } from "@material-ui/core/Checkbox";
import { FormLabel } from "@material-ui/core/FormControlLabel";
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import SnoozeOutlinedIcon from "@material-ui/icons/SnoozeOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideocamIcon from "@material-ui/icons/Videocam";
import TodayIcon from "@material-ui/icons/Today";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const MaterialDesign = () => {
	const styles = {
		background:
			"linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))",
		minHeight: "80vh",
		padding:"0 20px",
		// width:"90%",
		display: "flex",
		// justifyContent: "space-around",
		alignItems: "flex-start",
		gap: "2%",
		aside: {
			// flex:"initial",
			// flex: "1 0 auto",
			// Width: "150px",
			flexShrink: "inherit",
			color: "gray",
			minHeight: "400px",
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			alignContent: "flex-start",
			// flex: "0.8",
		},
		textStyle: {
			margin: "0",
			paddingLeft: "5px",
			// alignSelf:"center"
			// textAlign: "center",
		},
		iconStyles: {
			minWidth: "75px",
			display: "flex",
			alignItems: "center",
			// justifyContent: "space-between",
			marginBottom: "5px",
		},
		hr: {
			minWidth: "75px",
			color: "gray",
		},
		formContainer: {
			// width: "70%",
			// flex: "0.7 0 auto",
			flex: "1 100px",
			// flexGrow:"0.5",
			// flex: "0.8",
			// flex: "2",
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
		<div>
			<MaterialNav/>
			<div style={styles}>
				<div style={styles.aside}>
					<div style={styles.iconStyles} className="hover">
						<InboxOutlinedIcon />
						<h5 style={styles.textStyle}>Inbox</h5>
					</div>
					<div style={styles.iconStyles} className="hover">
						<StarOutlinedIcon />
						<h5 style={styles.textStyle}>Starred</h5>
					</div>
					<div style={styles.iconStyles} className="hover">
						<SendOutlinedIcon />
						<h5 style={styles.textStyle}>Sent</h5>
					</div>
					<div style={styles.iconStyles} className="hover">
						<SnoozeOutlinedIcon />
						<h5 style={styles.textStyle}>Snooze</h5>
					</div>
					<div style={styles.iconStyles} className="hover">
						<ExpandMoreIcon fontSize="small" />
						<h5 style={styles.textStyle}>More</h5>
					</div>
					<hr style={styles.hr} />
					<h5 style={{ margin: "5px 0 15px 0" }}>Meet</h5>
					<div style={styles.iconStyles} className="hover">
						<VideocamIcon color="gray" fontSize="small" />
						<h6 style={styles.textStyle}>New Meeting</h6>
					</div>
					<div style={styles.iconStyles} className="hover">
						<TodayIcon color="gray" fontSize="small" />
						<h6 style={styles.textStyle}>My Meetings</h6>
					</div>
					<hr style={styles.hr} />
					<h5 style={{ margin: "5px 0 15px 0" }}>Hangouts</h5>
					<div style={styles.iconStyles} className="hover">
						<AccountCircleIcon fontSize="small" />
						<h5 style={styles.textStyle}>Team 3</h5>
					</div>
				</div>
				<div style={styles.formContainer}>
					<Button variant="contained" color="primary" size="small">
						Material Design
					</Button>
					<Link to="/"> lets go Home</Link>
					<p>
						Material Design is a design language developed by Google in 2014.
						Expanding on the "cards" that debuted in Google Now, Material Design
						uses more grid-based layouts, responsive animations and transitions,
						padding, and depth effects such as lighting and shadows.
					</p>

					<p>
						Material Design uses more grid-based layouts, responsive animations
						and transitions, padding, and depth effects such as lighting and
						shadows.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MaterialDesign;
