import React, { useState , useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { useLocation } from 'react-router-dom'; 
import Sponsers from "../Components/Sponsers.jsx";

  const SponsersPage = () => {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);


    return (
        <> 
            <Navbar/>
            <div className="w-full h-screen mt-36">
                <Sponsers/>
            </div>
            <Footer/>
        </>
    );
  };
  
  export default SponsersPage;
  