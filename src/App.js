import logo from "./logo.svg";
import "./App.css";
import {Switch, Route} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import MaterialDesign from "./Components/MaterialDesign/MaterialDesign";
import Glassmorphism from "./Components/Glassmorphism/Glassmorphism";
import ZLayout from "./Components/ZLayout/ZLayout";
import FLayout from "./Components/FLayout/FLayout";
import RuleOfThird from "./Components/RuleOfThird/RuleOfThird";
import Neumorphism from "./Components/Neumorphism/Neumorphism";
import FlatDesign from "./Components/FlatDesign/FlatDesign";
import GoldenRatio from "./Components/GoldenRatio/GoldenRatio";
function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route exact path="/materialDesign" component={MaterialDesign} />
				<Route exact path="/Glassmorphism" component={Glassmorphism} />
				<Route path="/ZLayout" exact component={ZLayout} />
				<Route path="/FLayout" exact component={FLayout} />
				<Route path="/RuleOfThird" exact component={RuleOfThird} />
				<Route path="/Neumorphism" exact component={Neumorphism} />
				<Route path="/FlatDesign" exact component={FlatDesign} />
				<Route path="/GoldenRatio" exact component={GoldenRatio} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
