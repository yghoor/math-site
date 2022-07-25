/* eslint-disable no-unused-vars */
import './App.css';
import Home from './pages/Home.js';
import Math from './pages/Math.js';
import Quote from './pages/Quote.js';

function App() {
  return (
    <div className="App">
      <Navbar />
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
