/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
import '../component-styles/Navbar.css';

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

export default Navbar;