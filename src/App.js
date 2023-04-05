import logo from './logo.svg';
import './App.css'
import Day6 from './Compontents/Day6';
import Day7 from './Compontents/Day7';
import Day8 from './Compontents/Day8';
import NavBar from './Compontents/Day9';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Compontents/Home';

function App() {
  return (
    <div className="App">
     <Day6/>
     <Day7/>
     <Day8/>
     
     
    </div>
  );
}

export default App;