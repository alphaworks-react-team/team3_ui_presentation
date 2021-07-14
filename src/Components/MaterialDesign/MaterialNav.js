import React from "react";
import "./materialNav.css";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
const MaterialNav = () => {
	const styles = {
		background:
			"linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))",
		height: "10vh",
		padding: "0 20px",

		display: "flex",
		alignItems: "center",
		color: "gray",
		leftSide: {
			flex: "0.3",
			display: "flex",
			alignItems: "center",
			gap: "2%",
			justifyContent: "flex-start",
			// alignContent:"flex-start"
		},
		img: {
			width: "100px",
			backgroundImage:
				"url(https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png)",
			// backgroundPosition: "center",
			backgroundSize: "contain",
			backgroundRepeat: "no-repeat",
			// position: "absolute",
			height: "25px",
			// top: "80px",
			// left: "50px",
		},
		middle: {
			flex: "0.4",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			// textAlign: "center",
			background:
				"linear-gradient(-45deg, rgba(0,0,0,0.1), rgba(255,255,255,0.25))",
			// backgroundColor: "#421f44",
			borderRadius: "6px",
			padding: "0 50px",
			color: "gray",
			border: "1px gray solid",
		},
		input: {
			border: "none",
			textAlign: "center",
			backgroundColor: "transparent",
			minWidth: "30vw",
			outline: "none",
		},
		right: {
			flex: "0.3",
			display: "flex",
			justifyContent: "space-around",
		},
	};
	return (
		<div style={styles}>
			<div style={styles.leftSide}>
				<MenuOutlinedIcon sytle={styles.icons} className="hoverEffect" />
				<div style={styles.img}></div>
			</div>
			<div style={styles.middle}>
				<SearchOutlinedIcon />
				<input style={styles.input} type="text" placeholder="Search mail" />
				<TuneOutlinedIcon />
			</div>
			<div style={styles.right}>
				<HelpOutlineOutlinedIcon sytle={styles.icons} className="hoverEffect" />
				<SettingsOutlinedIcon sytle={styles.icons} className="hoverEffect" />
				<AppsOutlinedIcon sytle={styles.icons} className="hoverEffect" />
				<AccountCircleIcon sytle={styles.icons} className="hoverEffect" />
			</div>
		</div>
	);
};

export default MaterialNav;
