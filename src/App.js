/* eslint-disable no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
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
