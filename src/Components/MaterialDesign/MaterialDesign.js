import React from "react";
import "./material.css";
import MaterialNav from "./MaterialNav";
import InboxOutlinedIcon from "@material-ui/icons/InboxOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import SnoozeOutlinedIcon from "@material-ui/icons/SnoozeOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideocamIcon from "@material-ui/icons/Videocam";
import TodayIcon from "@material-ui/icons/Today";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArchiveIcon from "@material-ui/icons/Archive";
import ReportIcon from "@material-ui/icons/Report";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import FolderIcon from "@material-ui/icons/Folder";
import LabelIcon from "@material-ui/icons/Label";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ReplyIcon from "@material-ui/icons/Reply";
const MaterialDesign = () => {
	const styles = {
		background:
			"linear-gradient(-45deg, rgba(0,0,0,0.22), rgba(255,255,255,0.25))",
		minHeight: "65vh",
		padding: "0 20px",
		display: "flex",
		alignItems: "flex-start",
		gap: "2%",
		aside: {
			flexShrink: "inherit",
			color: "gray",
			minHeight: "400px",
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			alignContent: "flex-start",
		},
		textStyle: {
			margin: "0",
			paddingLeft: "5px",
		},
		iconStyles: {
			minWidth: "75px",
			display: "flex",
			alignItems: "center",
			marginBottom: "5px",
		},
		hr: {
			minWidth: "75px",
			color: "gray",
		},
		formContainer: {
			flex: "1 100px",
			height: "400px",
			width: "500px",
			borderRadius: "10px",
			display: "flex",
			flexDirection: "column",
		},
		formContainerIcons: {
			color: "gray",
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
		},
		verticalborder: {
			border: "0.5px",
			borderStyle: "dotted",
			height: "30%",
		},
		formContainerHr: {
			minWidth: "100%",
			margin: "0",
			color: "gray",
		},
		spanColor: {
			color: "gray",
			fontSize: "small",
		},
		iconColor: {
			color: "gray",
		},
		account: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
		},
		email: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
		},
	};
	return (
		<div>
			<MaterialNav />
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
						<VideocamIcon fontSize="small" />
						<h6 style={styles.textStyle}>New Meeting</h6>
					</div>
					<div style={styles.iconStyles} className="hover">
						<TodayIcon fontSize="small" />
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
					<div style={styles.formContainerIcons}>
						<ArrowBackIcon className="hoverOver" />
						<ArchiveIcon className="hoverOver" />
						<ReportIcon className="hoverOver" />
						<DeleteIcon className="hoverOver" />
						<div style={styles.verticalborder}></div>
						<MarkunreadIcon className="hoverOver" />
						<ScheduleIcon className="hoverOver" />
						<CheckCircleOutlineIcon className="hoverOver" />
						<div style={styles.verticalborder}></div>
						<FolderIcon className="hoverOver" />
						<LabelIcon className="hoverOver" />
						<MoreVertIcon className="hoverOver" />
						<p>9 of 86</p>
						<ChevronLeftIcon className="hoverOver" />
						<ChevronRightIcon className="hoverOver" />
					</div>
					<hr style={styles.formContainerHr} />
					<div style={styles.email}>
						<div style={styles.account}>
							<AccountCircleIcon style={styles.iconColor} fontSize="large" />
							<p>
								<strong>Thomas Smith</strong>{" "}
								<span style={styles.spanColor}>
									{`<tsmith@alphaworks.tech>`} Thu Jul 15,2021, 6:34 PM
								</span>
							</p>
						</div>
						<div>

						<StarBorderIcon style={styles.iconColor} className="hoverOver" />
						<ReplyIcon style={styles.iconColor} className="hoverOver" />
						<MoreVertIcon style={styles.iconColor} className="hoverOver" />
						</div>
					</div>
					{/* <Link to="/"> lets go Home</Link> */}
					{/* <Button variant="contained" color="primary" size="small">
						Material Design
					</Button> */}
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
