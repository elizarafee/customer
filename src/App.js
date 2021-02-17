import './App.css';
import Home from './components/home';
import About from './components/about';
import Navbar from './components/navbar';

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
