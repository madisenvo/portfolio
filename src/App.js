import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Portfolio from "./pages/portfolio/Portfolio.js";
import Resume from "./pages/resume/Resume.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Route, HashRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Footer />
    </HashRouter>
  );
}

export default App;
