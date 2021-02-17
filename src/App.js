import './App.css';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';
import Contact from './components/contact';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>

      <Route path="/home">
          <Home />
      </Route>

      <Route path="/about">
          <About />
      </Route>

      <Route path="/contact">
          <Contact />
      </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
