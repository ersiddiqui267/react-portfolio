import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Sidenav from "./components/layout/Sidenav";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";

import HandlersState from "./contexts/handlers/HandlersState";
import Offcanvas from "./components/layout/Offcanvas";

const App = function () {
  return (
    <HandlersState>
      <Router>
        <div className="App">
          <Navbar />
          <Sidenav />
          <Offcanvas />
          <div className="main">
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </HandlersState>
  );
};

export default App;
