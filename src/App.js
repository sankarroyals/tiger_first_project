import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Navbar } from 'react-bootstrap'

import Home from './pages/home/Home'

function App() {
  return (
   <BrowserRouter>
    
    <Routes>
    
    <Route path="/" element={<Home />} /> 
    </Routes>
   </BrowserRouter>
  );
}

export default App;
