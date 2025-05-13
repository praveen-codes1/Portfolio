import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header"; // note capital H, be consistent
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header /> {/* Render header on all pages */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Background wrapper only for Home main title */}
                <div
                  className="header-main-title-bg"
                  id="tech-bg"
                >
                  <div className="background-image-tech"></div>
                  <Home.MainTitle />
                </div>
                <Home.RestOfHome />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* Add other routes as needed */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
