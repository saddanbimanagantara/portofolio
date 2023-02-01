import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import "./App.css";
import Projects from "./components/projects/Projects";
import Reachme from "./components/reachme/Reachme";

class App extends Component {
  render() {
    AOS.init();
    return (
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/reachme" element={<Reachme />} />
          </Routes>
          <div className="footer">
            <small>2023-PRESENT © Saddan Bima Nagantara</small>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
