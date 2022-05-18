import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

import NavBar from './components/NavBar'
import Footer from'./components/Footer'

export default function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1>Rachel Harris's portfolio</h1>
        <NavBar />
        
      </header>
      <div>
        <div className="main-container">
            <Routes>
              <Route
                path="/" 
                element={<Profile />} 
              />
              <Route exact 
                path="/projects" 
                element={<Projects />} 
              />
              <Route exact
                path="/experience" 
                element={<Experience />} 
              />
              <Route exact
                path="/contact" 
                element={<Contact />} 
              />
              <Route exact
                path="/resume" 
                element={<Resume />} 
              />
            </Routes>
        </div>

      </div>
      <Footer />
    </div>
  </Router>
  );
}
