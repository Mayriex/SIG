import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import Sign from './pages/Sign'; 
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Temario from './pages/Temario';
import Verify from './pages/Verify';
import Module from './pages/Module';

function App() {
  return (
    <div>
      <main>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/sign" element={<Sign />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path='/profile' element={<Profile></Profile>}/>
            <Route path='/temario' element={<Temario></Temario>}/>
            <Route path="/module/:moduleId" element={<Module />} />
          </Routes>
        </div>
      </Router>
      </main>
    </div>
  
  )
}

export default App
