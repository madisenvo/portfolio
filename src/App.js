import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import About from "./pages/about/About.js";
import Contact from "./pages/contact/Contact.js";
import Portfolio from "./pages/portfolio/Portfolio.js";
import Resume from "./pages/resume/Resume.js";
import Footer from "./components/Footer/Footer.js";

// import { useState } from "react";

// import { BrowserRouter, Routes, Route } from "react-router-dom";


// function App() {
//   return (
//     <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<About />} />
//           <Route path="/Portfolio" element={<Portfolio />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Resume" element={<Resume />} />
//         </Routes>
//         <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;


function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;