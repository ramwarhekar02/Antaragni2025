import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import newlogo from "../assets/Images/Logos/newlogo.png"
import newantlogo from "../assets/Images/Logos/newantlogo.png"
import UDAN2025 from "../assets/pdfs/UDAN2025.pdf"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const events = [
  {
    name: "Udan",
    pdfUrl: "https://drive.google.com/file/d/1V_m_IcpT1exAt2Wtvl_u47U08Cr73dlL/view?usp=sharing",
  },
];

  const handleView = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md border-b border-gray-800 transition-all duration-500 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-black"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between px-4 py-4 lg:px-6">
        <div className="flex items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src={newantlogo}
              className="w-[25vw] max-w-[150px] hover:scale-110 transition-all duration-300"
              alt="Antaragni Logo"
            />
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
            {isOpen ? <FiX /> : <IoMdMenu />}
          </button>
        </div>
        <div
          className={`absolute lg:static top-full left-0 w-full lg:w-auto lg:flex flex-col lg:flex-row items-center lg:space-x-8 lg:space-y-0 space-y-4 p-4 lg:p-0 transition-all duration-500 bg-black/80 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-8 text-center items-center lg:text-left font-semibold tracking-wide">
            <li className="relative group">
              <Link
                to="/"
                className="text-white transition-all duration-300 uppercase block lg:inline"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
            {["About", "Gallery"].map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-white transition-all duration-300 uppercase block lg:inline"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            ))}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-center text-white transition-all duration-300 uppercase">
                Events <FaChevronDown className="ml-2 text-sm group-hover:rotate-180 transition-transform duration-300" />
              </div>
              <ul
                className={`absolute left-0 mt-2 w-48 bg-black/80 backdrop-blur-lg border border-gray-700 rounded-md shadow-lg overflow-hidden transition-all duration-300 z-10 ${
                  isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {["Antaragni", "Parakram", "Technorion"].map((event, index) => (
                  <li key={index} className="group">
                    <Link
                      to={`/events/${event.toLowerCase()}`}
                      className="block px-6 py-3 text-white hover:bg-gray-800 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {event}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="relative group">
              <Link
                to="/sponsers"
                className="text-white transition-all duration-300 uppercase block lg:inline"
                onClick={() => setIsOpen(false)}
              >
                Sponsers
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
            {events.map((event) => (
            <li key={event.name} className="relative group">
              <Link
                className="text-white transition-all duration-300 uppercase block lg:inline"
                onClick={() => handleView(event.pdfUrl, event.name)}
              >
                Udan
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
            ))}
            <li className="relative group">
              <Link
                to="/contact"
                className="text-white transition-all duration-300 uppercase block lg:inline"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>

          </ul>

          <Link to="https://ghrce.raisoni.net/" onClick={() => setIsOpen(false)} className="block lg:inline ml-auto mt-4 lg:mt-0 w-fit"> 
            <img
              src={newlogo}
              className="w-[20vw] max-w-[125px] hover:scale-110 transition-all duration-300"
              alt="Raisoni Logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;