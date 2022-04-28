import React from 'react';
import './App.css';
//import Navbar from './components/Navbar';
//import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
//import Personas from './pages/personas';
//import Portafolio from './pages/portafolio';
import Footer from "./components/Footer";
import Inicio from './pages/inicio';



function App() {
  return (
    <div className="page-container">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        
      </nav>

      <Inicio />

      <Footer />
    </div>
  );
}

export default App;

