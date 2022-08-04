import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container} from 'react-bootstrap'

import Home from './pages/home/Home'
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
   <BrowserRouter>
     <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      
    <Routes>
    
    <Route path="/" element={<Home />} /> 
    </Routes>
    </div>
    </div>
   </BrowserRouter>

  );
}

export default App;
