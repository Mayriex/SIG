import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import Sign from './pages/Sign'; 
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Temario from './pages/Temario';
function App() {
  return (
    <div>
      <Header></Header>
      <main>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/sign" element={<Sign />} /> 
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path='/profile' element={<Profile></Profile>}/>
            <Route path='/temario' element={<Temario></Temario>}/>
          </Routes>
        </div>
      </Router>
      </main>
    </div>
  
  )
}

export default App
