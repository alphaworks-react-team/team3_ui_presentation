import React from 'react'
import { Link } from "react-router-dom";
const MaterialDesign = () => {
    const styles = {
        backgroundColor: "yellow",
        minHeight:"80vh"
    }
    return (
			<div style={styles}>
				MaterialDesign
				<Link to="/"> lets go Home</Link>
			</div>
		);
}

export default MaterialDesign