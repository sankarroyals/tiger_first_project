import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'

import Home from './pages/home/Home'
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Chart from './components/chart/Chart';
import Publish from './components/publish/Publish';
function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/charts" element={<Chart title="Deployments" />} />
            <Route path="/publish" element={<Publish />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
