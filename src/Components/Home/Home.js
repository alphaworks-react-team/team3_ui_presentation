import React,{useEffect} from "react";
import Card from "./card";
import { Link } from "react-router-dom";

const Home = ({ design }) => {
    useEffect(() => {
        hundleclick();
    }, [design]);
    const hundleclick = () => {
            
        }
    const styles = {
        minHeight: "80vh",
		backgroundColor: "#afd275",
		padding: "50px",
		display: "flex",
		justifyContent: "space-around",
		alignContents: "space-evenly",
		flexWrap: "wrap",
		linkStyle: {
            textDecoration: "none",
			color: "black",
		},
	};
    console.log(design);
	return (
        <div style={styles}>
			<Link to="/MaterialDesign" style={styles.linkStyle} onClick={hundleclick}>
				<Card title={"Material Design"} />
			</Link>
			<Link to="/Glassmorphism" style={styles.linkStyle}>
				<Card title={"Glassmorphism"} />
			</Link>
			<Link to="/Zlayout" style={styles.linkStyle}>
				<Card title={"Z Layout"} />
			</Link>
			<Link to="/FLayout" style={styles.linkStyle}>
				<Card title={"F Layout"} />
			</Link>
			<Link to="/MaterialDesign" style={styles.linkStyle}>
				<Card title={"Rule of Thirds"} />
			</Link>
			<Link to="/Neumorphism" style={styles.linkStyle}>
				<Card title={"Neumorphism"} />
			</Link>
			<Link to="/FlatDesign" style={styles.linkStyle}>
				<Card title={"Flat Design"} />
			</Link>
			<Link to="/GoldRatio" style={styles.linkStyle}>
				<Card title={"Golden Ratio"} />
			</Link>
		</div>
	);
};

export default Home;
