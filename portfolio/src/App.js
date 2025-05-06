import './App.css';
import Header from './components/header.jsx';
import Counter from './components/counter.jsx';
import ToggleMessage from './components/toggle.jsx';
import Event from './components/event.jsx';
import ContactForm from './components/contactForm.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Routes>
          <Route path="/About" element={<Event />} />
          <Route path="/TogCoun" element={<Counter />} />
          <Route path="/Header" element={<Header name='Praveen' job='Developer'/>}/>
          <Route path="/ConForm" element={<ContactForm />}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
