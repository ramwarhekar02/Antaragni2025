import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import inaugration from "../assets/Images/landingPage/inaugration.JPG"
import srcteam from "../assets/Images/landingPage/srcteam.jpg"
import udaanant from "../assets/Images/landingPage/udaanant.jpg"

const getEventDate = () => {
  return new Date("March 4, 2025 00:00:00").getTime(); 
};

const calculateTimeLeft = () => {
  const now = new Date().getTime();
  const eventDate = getEventDate();
  const difference = eventDate - now;

  if (difference <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  return {
    days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
    minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
    seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
  };
};


const images = [
  inaugration,
  srcteam,
  udaanant,
];


const LandingPage = () => {

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init();

    // Countdown Timer
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Slideshow Interval
    const slideshowInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(slideshowInterval);
    };
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          alt="Antaragni Logo"
        />
      ))}

      <div className="absolute inset-0 opacity-70 bg-black bg-opacity-40"></div>

      <div className="absolute md:mt-20 mt-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4"> 
        <section id="hero" className="w-full py-8 md:py-16 justify-start">
          <div className="container mx-auto">
            <div className="text-center"> 
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl md:text-[9.1vw] text-white font-[400] font-[Berkshire_Swash] leading-tight"> 
                  Antaragni
                </h1>
                <h2 className="animate-fade-in font-bold text-xl md:text-3xl mt-2 text-orange-400">
                  4th to 6th of March 2025
                </h2>
                <h2 className="text-3xl md:text-4xl font-[Lora] text-white font-bold mt-6 md:mt-8 mb-8 md:mb-10">
                  Join the Celebration !
                </h2>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-4 md:gap-20 p-6 rounded-lg shadow-lg text-zinc-500">
                {["days", "hours", "minutes", "seconds"].map((unit) => (
                  <div key={unit} className="flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl tracking-wide font-bold text-white">
                      {timeLeft[unit]}
                    </h2>
                    <p className="text-gold tracking-widest text-lg text-orange-400">
                      {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;