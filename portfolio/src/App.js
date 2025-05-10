import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Achievements from './pages/achievements';
import Contact from './pages/contacts';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
