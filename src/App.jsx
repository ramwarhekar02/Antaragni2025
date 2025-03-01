import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx"; 
import Footer from "./Components/Footer.jsx"; 
import LandingPage from "./Components/LandingPage.jsx"; 
import About from "./Components/About.jsx"; 
import Events from "./Components/Events.jsx"; 
import Antaragni from "./Components/Antaragni.jsx"; 
import Gallery from "./Components/Gallery.jsx"; 
import Sponsers from "./Components/Sponsers.jsx"; 
import AboutPage from "./Pages/AboutPage.jsx"; 
import GalleryPage from "./Pages/GalleryPage.jsx"; 
import SponsersPage from "./Pages/SponsersPage.jsx"; 
import AntaragniPage from "./Pages/AntaragniPage.jsx"; 
import ParakramPage from "./Pages/ParakramPage.jsx"; 
import TechnorionPage from "./Pages/TechnorionPage.jsx"; 
import ContactPage from "./Pages/ContactPage.jsx"; 
import BehindTheSeen from "./Pages/BehindTheSeen.jsx";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <About />
              <Events />
              <Antaragni />
              <Gallery />
              <Sponsers />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/sponsers" element={<SponsersPage />} />
        <Route path="/events/antaragni" element={<AntaragniPage />} />
        <Route path="/events/parakram" element={<ParakramPage />} />
        <Route path="/events/technorion" element={<TechnorionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/behindtheseen" element={<BehindTheSeen />} /> */}
      </Routes>
    </>
  );
}

export default App;