import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Portfolio from "./pages/portfolio/Portfolio.js";
import Resume from "./pages/resume/Resume.js";
import Footer from "./components/Footer/Footer.js";
import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
        <Header />
        <Routes>
          <Route path="/" component={About} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Resume" component={Resume} />
        </Routes>
        <Footer />
    </HashRouter>
  );
}

export default App;
