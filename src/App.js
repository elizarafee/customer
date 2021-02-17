import './App.css';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
