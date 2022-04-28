import React from 'react';
import { render } from "react-dom";
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Empresas from './pages/empresas';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="empresas" element={<Empresas />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
