import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

import TripTypes from './pages/TripTypes';
import Destination from './pages/Destination';
import Contact from './pages/contact';

import Home from './pages/Home';
import './App.css'; 
function App() {
  return (
    <Router>
      <div
        style={{
                    backgroundImage: 'url("./wildlife/background3.jpg")',
          backgroundSize: 'cover',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundRepeat: 'no-repeat',
          height: '100%',
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tripTypes" element={<TripTypes />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/contact" element={<Contact Us/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
