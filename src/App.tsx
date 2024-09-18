import React from 'react';
import './App.css';
import { NavLink, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/home';
import Sobre from './pages/sobre';
import Dashboard from './pages/dashboard';
import './App.css';

function App() {

  const renderizarHeader = () => (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink></li>
          <li><NavLink to="/sobre" className={({ isActive }) => isActive ? 'active' : ''}>Sobre</NavLink></li>
        </ul>
      </nav>
    </div>
  )

  return (
    <Router>
      {renderizarHeader()}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </Router>
  )
}

export default App;