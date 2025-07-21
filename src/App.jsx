import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;