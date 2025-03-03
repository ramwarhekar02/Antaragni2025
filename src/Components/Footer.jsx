import React, { useState, useEffect } from "react";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import newsrclogo from "../assets/Images/Logos/newsrclogo.png";
import { useLocation } from 'react-router-dom'; 

const Footer = () => {

  const [visitorCount, setVisitorCount] = useState('Loading...');

  useEffect(() => {
      const fetchVisitorCount = async () => {
          try {
              const response = await fetch('http://localhost:5173/counter.php');
              if (response.ok) {
                  const data = await response.text();
                  setVisitorCount(parseInt(data.trim(), 10) || 0);
              } else {
                  console.error('Failed to fetch visitor count');
                  setVisitorCount('Error');
              }
          } catch (error) {
              console.error('Error fetching visitor count:', error);
              setVisitorCount('Error');
          }
      };

      fetchVisitorCount();
  }, []);

  return (
    <div className="w-full bg-[#1a1a1a] text-white rounded-t-3xl">
      <div className="w-full max-w-[1200px] mx-auto py-12 flex flex-wrap justify-between gap-10">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img src={newsrclogo} alt="SRC Logo" className="w-40 md:w-48" />
        </div>

        <div className="w-full text-center md:text-left md:w-2/3">
          <h1 className="text-2xl md: font-semibold tracking-wide">
            G H Raisoni College of Engineering
          </h1>
          <p className="text-sm text-zinc-400  mt-2">
            Empowered Autonomous Institution Affiliated to Rashtrasant Tukadoji
            Maharaj Nagpur University, Nagpur
          </p>
          <p className="text-zinc-400 text-sm mt-1">
            CRPF Gate No.3, Hingna Rd, Digdoh Hills, Nagpur, Maharashtra 440016
          </p>
        </div>
      </div>

      <div className="w-full bg-[#222] py-6">
        <div className="w-full max-w-[1200px] mx-auto flex flex-wrap justify-between gap-10 px-6">
          <div className="w-full md:w-2/3">
            <h1 className="text-lg font-semibold border-b-2 pb-2 mb-4">
              Contact Us
            </h1>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FFD700]" size={18} />
                <span className="text-zinc-300">Parikshit Borkute: +91 9766941737</span>
              </div>
              <div className="flex items-center gap-3">
                <IoMail className="text-[#FFD700]" size={18} />
                <span className="text-zinc-300">Email: src.ghrce@raisoni.net</span>
              </div>
              <div className="flex items-center gap-3">
                <LuMapPin className="text-[#FFD700]" size={18} />
                <span className="text-zinc-300">
                  CRPF Gate No.3, Hingna Rd, Digdoh Hills, Nagpur, Maharashtra
                  440016
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-white hover:text-[#FFD700] transition">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-[#FFD700] transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-[#FFD700] transition">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-[#FFD700] transition">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full font-semibold bg-[#1a1a1a] py-2 text-center">
        <p className="text-2xl text-white">Visitor Count: {visitorCount}</p>
      </div>
    </div>
  );
};

export default Footer;