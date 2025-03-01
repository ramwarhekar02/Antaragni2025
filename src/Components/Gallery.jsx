import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";
import antaragni1 from "../assets/Images/College/antaragni1.jpg"
import antaragni2 from '../assets/Images/College/antaragni2.jpg';
import parakram1 from '../assets/Images/College/parakram1.jpg';
import parakram2 from '../assets/Images/College/parakram2.jpg';
import parakram3 from '../assets/Images/College/parakram3.jpg';
import parakram4 from '../assets/Images/College/parakram4.jpg';
import parakram5 from '../assets/Images/College/parakram5.jpg';
import SWRJ9020 from '../assets/Images/College/SWRJ9020.JPG';
import SWRJ9806 from '../assets/Images/College/SWRJ9806.JPG';
import SWRJ9807 from '../assets/Images/College/SWRJ9807.JPG';
import ant1 from '../assets/Images/College/ant1.JPG';
import ant2 from '../assets/Images/College/ant2.JPG';
import ant3 from '../assets/Images/College/ant3.JPG';
import ant4 from '../assets/Images/College/ant4.JPG';
import ant5 from '../assets/Images/College/ant5.JPG';
import ant6 from '../assets/Images/College/ant6.JPG';
import ant7 from '../assets/Images/College/ant7.JPG';
import ant8 from '../assets/Images/College/ant8.JPG';
import ant9 from '../assets/Images/College/ant9.JPG';
import ant10 from '../assets/Images/College/ant10.JPG';
import ant11 from '../assets/Images/College/ant11.JPG';
import ant12 from '../assets/Images/College/ant12.JPG';
import ant13 from '../assets/Images/College/ant13.JPG';
import ant14 from '../assets/Images/College/ant14.JPG';
import ant15 from '../assets/Images/College/ant15.JPG';
import ant16 from '../assets/Images/College/ant16.JPG';
import ant17 from '../assets/Images/College/ant17.JPG';
import ant18 from '../assets/Images/College/ant18.JPG';
import SWRJ8917 from '../assets/Images/College/SWRJ8917.JPG';
import SWRJ9017 from '../assets/Images/College/SWRJ9017.JPG';

const images = [
  antaragni1,
  antaragni2,
  parakram1,
  parakram2,
  parakram3,
  parakram4,
  parakram5,
  SWRJ9020,
  SWRJ9806,
  SWRJ9807,
  ant1,
  ant2,
  ant3,
  ant4,
  ant5,
  ant6,
  ant7,
  ant8,
  ant9,
  ant10,
  ant11,
  ant12,
  ant13,
  ant14,
  ant15,
  ant16,
  ant17,
  ant18,
  SWRJ8917,
  SWRJ9017,
];

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getSizeAndPosition = (index) => {
    const diff = (index - activeIndex + images.length) % images.length;

    if (diff === 0) return { size: "w-[500px] h-[350px] scale-100 z-20", opacity: "opacity-100" };
    if (diff === 1 || diff === images.length - 1) return { size: "w-[350px] h-[250px] scale-90 z-10", opacity: "opacity-80" };
    return { size: "w-[250px] h-[150px] scale-75 z-0", opacity: "opacity-50" };
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pt-20 bg-gray-100 text-black overflow-hidden relative">
      <header className="py-10 z-10 mb-10">
      <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
        Relive the Magic: Antaragni 2024
        <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
      </h1>
      </header>

      <div className="relative flex items-center justify-center w-full h-[400px] overflow-hidden">
        {images.map((image, index) => {
          const { size, opacity } = getSizeAndPosition(index);

          return (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out ${size} ${opacity}`}
              style={{
                transform: `translateX(${(index - activeIndex) * 400}px)`,
              }}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover shadow-lg rounded-lg"
              />
            </div>
          );
        })}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0.6; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>

      <Link to="/gallery" onClick={() => setIsOpen(false)}>
        <button className="my-10 flex items-center gap-2 px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          See More
          <FaArrowRight  className="w-5 h-5" />
        </button>
      </Link>

      
    </div>
  );
};

export default PhotoGallery;

