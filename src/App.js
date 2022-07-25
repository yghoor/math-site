/* eslint-disable no-unused-vars */
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Math from './pages/Math.js';
import Quote from './pages/Quote.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="math" element={<Math />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;

const Navbar = () => (

  <header>
    <nav className="page-navbar">
      <h1>Math Magicians</h1>

      <ul className="nav-links">
        <li>
          <NavLink to="/" activeclassname="active" >Home</NavLink>
        </li>

        <li>
          <NavLink to="/math" activeclassname="active" >Calculator</NavLink>
        </li>

        <li>
          <NavLink to="/quote" activeclassname="active" >Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
