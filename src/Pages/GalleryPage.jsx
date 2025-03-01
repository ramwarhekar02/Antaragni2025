import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";
import { useLocation } from 'react-router-dom'; 
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import parakram11 from "../assets/Images/Flash/parakram11.jpg";
import parakram10 from "../assets/Images/Flash/parakram10.jpg";
import DSC7343 from "../assets/Images/Flash/_DSC7343.JPG";
import DSC8538 from "../assets/Images/Flash/_DSC8538.JPG";
import IMG_0028 from "../assets/Images/Flash/IMG_0028.JPG";
import wallpainting from "../assets/Images/Flash/wallpainting.jpg";
import DSC8745 from "../assets/Images/Flash/_DSC8745.JPG";
import DSC_2815 from "../assets/Images/Flash/DSC_2815.JPG";
import DSC_2733 from "../assets/Images/Flash/DSC_2733.JPG";
import inaugration from "../assets/Images/landingPage/inaugration.JPG";
import DSC6713 from "../assets/Images/Flash/_DSC6713.JPG";
import DSC6684 from "../assets/Images/Flash/_DSC6684.JPG";
import DSC6997 from "../assets/Images/Flash/_DSC6997.JPG";
import DSC6931 from "../assets/Images/Flash/_DSC6931.JPG";
import DSC6856 from "../assets/Images/Flash/_DSC6856.JPG";
import SWRJ8917 from "../assets/Images/College/SWRJ8917.JPG";
import SWRJ9017 from "../assets/Images/College/SWRJ9017.JPG";
import SWRJ9806 from "../assets/Images/College/SWRJ9806.JPG";
import antaragni1 from "../assets/Images/College/antaragni1.jpg";
import antaragni2 from "../assets/Images/College/antaragni2.jpg";
import parakram1 from "../assets/Images/College/parakram1.jpg";
import parakram2 from "../assets/Images/College/parakram2.jpg";
import parakram3 from "../assets/Images/College/parakram3.jpg";
import parakram4 from "../assets/Images/College/parakram4.jpg";
import ant1 from "../assets/Images/College/ant1.JPG";
import ant2 from "../assets/Images/College/ant2.JPG";
import ant3 from "../assets/Images/College/ant3.JPG";
import ant4 from "../assets/Images/College/ant4.JPG";
import ant5 from "../assets/Images/College/ant5.JPG";
import ant6 from "../assets/Images/College/ant6.JPG";
import ant7 from "../assets/Images/College/ant7.JPG";
import ant10 from "../assets/Images/College/ant10.JPG";
import ant11 from "../assets/Images/College/ant11.JPG";
import ant12 from "../assets/Images/College/ant12.JPG";
import ant13 from "../assets/Images/College/ant13.JPG";
import ant14 from "../assets/Images/College/ant14.JPG";
import ant15 from "../assets/Images/College/ant15.JPG";
import ant16 from "../assets/Images/College/ant16.JPG";

const images = [
    { src: parakram11, title: "Parakram" },
    { src: parakram10, title: "Parakram" },
    { src: DSC7343, title: "Antaragni - Street Dance" },
    { src: DSC8538, title: "Antaragni - Tower Making" },
    { src: IMG_0028, title: "Antaragni" },
    { src: wallpainting, title: "Antaragni - Wall painting" },
    { src: DSC8745, title: "Antaragni - Sufi Saga" },
    { src: DSC_2815, title: "Antaragni - Street Dance" },
    { src: DSC_2733, title: "Antaragni - Street dance" },
    { src: inaugration, title: "Antaragni" },
    { src: DSC6713, title: "Antaragni" },
    { src: DSC6684, title: "Antaragni" },
    { src: DSC6997, title: "Antaragni" },
    { src: DSC6931, title: "Antaragni" },
    { src: DSC6856, title: "Antaragni" },
    { src: SWRJ8917, title: "Antaragni - Sufi Saga" },
    { src: SWRJ9017, title: "Antaragni - Fashion Show" },
    { src: SWRJ9806, title: "Antaragni - Street Dance" },
    { src: antaragni1, title: "Antaragni - Fashion Show" },
    { src: antaragni2, title: "Antaragni - Theme Dance" },
    { src: parakram1, title: "Parakram - Cricket" },
    { src: parakram2, title: "Parakram - Badminton" },
    { src: parakram3, title: "Parakram - Volleyball" },
    { src: parakram4, title: "Parakram - Girls Cricket" },
    { src: ant1, title: "Antaragni - Prize Distribution" },
    { src: ant2, title: "Antaragni - Prize Distribution" },
    { src: ant3, title: "Antaragni - Prize Distribution" },
    { src: ant4, title: "Antaragni - Street Dance" },
    { src: ant5, title: "Antaragni - Street Dance" },
    { src: ant6, title: "Antaragni - Street Dance" },
    { src: ant7, title: "Antaragni - Street Dance" },
    { src: ant10, title: "Antaragni - Auditorium" },
    { src: ant11, title: "Antaragni - Theme Dance" },
    { src: ant12, title: "Antaragni - Theme Dance" },
    { src: ant13, title: "Antaragni - Fashionn show" },
    { src: ant14, title: "Antaragni - Fashionn show" },
    { src: ant15, title: "Antaragni - Solo Dance" },
    { src: ant16, title: "Antaragni - Theme Dance" },
  ];
  const Gallery = () => {
      const [selectedImage, setSelectedImage] = useState(null);
      const location = useLocation();

    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, [location]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
          <>
          <Navbar />
          <section className="container w-full max-w-[1200px] mx-auto my-30 p-6">
              <h1 className="text-4xl font-bold text-center uppercase text-zinc-900 relative">
                  Gallery
                  <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
              </h1>
              <p className="text-gray-400 text-center my-8">Memories captured, Milestones remembered.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {images.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer" onClick={() => handleImageClick(image)}>
                          <img src={image.src} alt={image.title} className="w-full h-70 object-cover" />
                          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <h4 className="text-white text-lg font-semibold">{image.title}</h4>
                          </div>
                      </div>
                  ))}
              </div>
              {/* <Link to="/behindtheseen" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center my-10  gap-2 px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Behind the Seen
                    <FaArrowRight  className="w-5 h-5" />
                    </button>
                </Link> */}
          </section>
          <Footer />
          {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center">
                    <div className="relative w-3/4 h-3/4 rounded-lg ">
                        <div className="absolute -top-10 left-2/5 bg-black/80 z-10"> 
                            <h4 className="text-white text-xl  font-semibold">{selectedImage.title}</h4>
                        </div>
                        <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-full object-contain" />
                        <div className="absolute top-4 right-4">
                            <button onClick={handleCloseModal} className="text-white bg-red-500 rounded px-3 py-2">Close</button>
                        </div>
                    </div>
                </div>
            )}
      </>
    );
  };
  
  export default Gallery;
  