import React from 'react';
import './App.css';
import Navbar from './component/Navbar.js';
import { BrowserRouter as Router, Route, Routes ,useLocation} from 'react-router-dom';
import Dashboard from './page/Dashboard.js';
import Projects from './page/Projects.js';
import Contact from './page/Contact.js';
import ProfileProject from './page/ProfileProject.js';
import FinalResult from './page/FinalResult.js';



function App() {
  return (
    <div className='h-screen overflow-y-hidden'>
      <div className='circlePosition w-[500px] h-[400px] bg-blue-200/90 rounded-[100%] translate-y-[-30%] translate-x-[-30%] blur-[120px] z-10 absolute top-0 '></div>
      <div className='circlePosition w-[500px] h-[400px] bg-blue-200/90 rounded-[100%]  translate-x-[220%] blur-[120px] z-10 absolute bottom-0 translate-y-10 '></div>
      <div className='relative z-20 '>
        <Router>
        <Routes>
        <Route className="content-container" path="/*" element={<>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects/*" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          </>} />
            <Route path="/final-result/:id" element={<FinalResult />} />
            <Route path="/profile/:id" element={<ProfileProject />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;


