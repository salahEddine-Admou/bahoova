import React from "react";
import "./App.css";
import "./dev-helpers.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Venues from "./components/Venues";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ExpertGestionEvenements from "./components/ExpertGestionEvenements";
import Agency from "./components/Agency";
import Portfolio from "./components/Portfolio";
import References from "./components/References";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <TopBar />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/references" element={<References />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/expert-gestion-evenements-maroc" element={<ExpertGestionEvenements />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </div>
  );
}

export default App;