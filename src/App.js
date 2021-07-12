import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import MaterialDesign from './Components/MaterialDesign/MaterialDesign';
import Glassmorphism from './Components/Glassmorphism/Glassmorphism';

function App() {
  const [design, setDesign] = useState('/');
  const handleClick = () => {
    setDesign(document.getElementById('type').value);
  };
  const styles = {
    height: '5vh',
    backgroundColor: '#343a2b',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  return (
    <Router>
      <Nav design={design} />
      <div style={styles}>
        <label>Select Design:</label>
        <select name='type' id='type'>
          <option value='/' selected>
            Choose
          </option>
          <option value='/MaterialDesign'>Material Design</option>
          <option value='/Glassmorphism'>Glassmorphism</option>
          <option value='/ZLayout'>Z Layout</option>
        </select>
        <button onClick={handleClick}>Submit</button>
      </div>
      <Switch>
        <Route path='/' exact>
          <Home design={design} />
        </Route>
        {/* <Route path="/" exact component={Home} design={design} /> */}
        <Route path='/MaterialDesign' exact component={MaterialDesign} />
        <Route path='/Glassmorphism' component={Glassmorphism} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
