import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import antstartimg from "../assets/Images/AntaragniPage/antstartimg.jpg";
import tech from "../assets/Images/Logos/tech.jpg";
import parakramEvent from "../assets/Images/College/parakramEvent.jpg";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const cardsRef = useRef(null);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    let animation; 
  
    if (!isMobile) {
      let sections = gsap.utils.toArray(".card");
      let totalWidth = cardsRef.current.scrollWidth - containerRef.current.offsetWidth;
  
      animation = gsap.to(cardsRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          pin: true,
          scrub: 0,
          end: () => `+=${totalWidth}`,
          markers: false,
        },
      });
  
    }
  
    return () => {
      if (animation) {
        animation.kill();
      }
      ScrollTrigger.getAll().forEach((t) => t.kill()); 
    };
  }, [isMobile]);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className={`h-full w-full max-w-[1200px] py-20 mx-auto ${
          isMobile ? "block" : "pr-72 overflow-hidden"
        }`}>
        <div
          ref={cardsRef}
          className={`flex ${
            isMobile ? "flex-col items-center gap-12" : "gap-[20%] flex-nowrap px-4 sm:px-2 py-10 sm:py-20"
          }`}
        >
          <div className="uppercase  card text-[7vw] sm:text-[7vw] leading-none text-center font-[General_Sans] font-[999] text-black min-w-[80vw] sm:min-w-[50vw]">
            <h1>Here are</h1>
            <h1>some</h1>
            <h1 className="md:my-4">
              <span className="md:bg-zinc-500 px-2 text-zinc-800">Crazy</span>
            </h1>
            <h1>events</h1>
          </div>

          {[antstartimg, tech, parakramEvent].map((image, index) => {
            const eventNames = ["antaragni", "technorion", "parakram"];
            const eventName = eventNames[index];
            const capitalizedName = eventName.charAt(0).toUpperCase() + eventName.slice(1);
            return (
              <Link key={index} to={`/events/${eventName}`} onClick={() => setIsOpen(false)}>
                <div
                  className={`relative card w-[90vw] sm:w-[50vw] h-[40vh] sm:h-[65vh] rounded-2xl shrink-0 overflow-hidden text-[#FAEADE] shadow-lg hover:scale-105 transition-all duration-300 ${isMobile ? 'w-full sm:px-2' : 'w-full'}`}
                >
                  <img className={`w-full h-full object-cover ${isMobile && index === 2 ? 'object-contain' : ''}`} src={image} alt={`${capitalizedName} Event`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/10 backdrop-blur-md px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                    <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider">
                      {capitalizedName}
                    </h1>
                    <h1 className="text-lg sm:text-2xl font-semibold text-gray-300">2025</h1>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="h w-full max-w-[1300px] mx-auto bg-green-800 "></div>
    </div>
  );
};

export default Events;