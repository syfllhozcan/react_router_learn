import './App.css';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import {Routes, Route, NavLink } from 'react-router-dom';

function App() {

  const Home = () => {
    return <div className="Home"><h1>Home Sayfası</h1></div>
  }

  return (
    
    <div>
      <nav>
        <h1 className='logo'>LOGO</h1>
        <ul>
          
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/projects">Prodects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/projects' Component={Projects} />
        <Route path='/contact' Component={Contact} />
      </Routes>
    </div>
    
  );
}

export default App;
