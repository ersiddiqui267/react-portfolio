import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Offcanvas from "./components/layout/Offcanvas";
import Sidenav from "./components/layout/Sidenav";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";

import HandlersState from "./contexts/handlers/HandlersState";
import ProjectsState from "./contexts/projects/ProjectsState";

const App = function () {
  return (
    <HandlersState>
      <ProjectsState>
        <Router>
          <div className="App">
            <Navbar />
            <Sidenav />
            <Offcanvas />
            <div className="main grow p-4 md:pt-10">
              <Routes>
                <Route exact path="/" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ProjectsState>
    </HandlersState>
  );
};

export default App;
