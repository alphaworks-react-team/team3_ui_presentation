import { Link, useHistory } from "react-router-dom";
const Nav = () => {
	let history = useHistory();
	const handleClick = () => {
		let path = document.getElementById("type").value;
		history.push(`/${path}`);
	};
	const styles = {
		minHeight: "15vh",
		backgroundColor: "black",
		color: "gray",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		textStyle: {
			margin: "0",
			textAlign: "center",
		},
		linkStyle: {
			textDecoration: "none",
			color: "gray",
		},
		dropStyle: {
			display: "flex",
			justifyContent: "space-around",
			alignItems: "center",
			alignContent: "center",
		},
	};
	return (
		<div style={styles}>
			<Link to="/" style={styles.linkStyle}>
				<h1 style={styles.textStyle}>Welcome to Design Layouts</h1>
			</Link>
			<div style={styles.dropStyle}>
				<label>Select Design:</label>
				<select name="type" id="type">
					<option value="" selected>
						Choose
					</option>
					<option value="materialDesign">Material Design</option>
					<option value="Glassmorphism">Glassmorphism</option>
					<option value="ZLayout">Z Layout</option>
					<option value="FLayout">F Layout</option>
					<option value="RuleOfThird">Rule Of Third</option>
					<option value="Neumorphism">Neumorphism</option>
					<option value="FlatDesign">Flat Design</option>
					<option value="GoldenRatio">Golden Ratio</option>
				</select>
				<button onClick={handleClick}>Submit</button>
			</div>
		</div>
	);
};

export default Nav;
