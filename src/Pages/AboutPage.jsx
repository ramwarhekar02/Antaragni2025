import React , { useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import newantvideo from "../assets/Images/Logos/newantvideo.mp4";
import { useLocation } from 'react-router-dom'; 
import Footer from "../Components/Footer.jsx";
import suniljiraisoni from "../assets/Images/img-about/suniljiraisoni.png"
import shobharaisoni2 from "../assets/Images/img-about/shobharaisoni2.png"
import shreyasraisoni2 from "../assets/Images/img-about/shreyasraisoni2.png"
import vaidehichobitkar from "../assets/Images/srcmembers/vaidehichobitkar.jpg"
import parikshitborkute from "../assets/Images/srcmembers/parikshitborkute.jpg"
import aashigaiwad from "../assets/Images/srcmembers/aashigaiwad.jpg"
import janvianwaney from "../assets/Images/srcmembers/janvianwaney.jpg"
import poshikaraut from "../assets/Images/srcmembers/poshikaraut.jpg"
import rudranitandulkar from "../assets/Images/srcmembers/rudranitandulkar.jpg"
import yashbhorse from "../assets/Images/srcmembers/yashbhorse.jpg"
import tanushreekuhikar from "../assets/Images/srcmembers/tanushreekuhikar.jpg"
import anikapayasi from "../assets/Images/srcmembers/anikapayasi.jpg"
import dhwaniagrawal from "../assets/Images/srcmembers/dhwaniagrawal.jpg"
import atiyamadam from "../assets/Images/team/atiyamadam.jpg"
import ramwarhekar from "../assets/Images/team/ramwarhekar.jpg"
import shivkasat from "../assets/Images/team/shivkasat.jpg"
import siddheshnimodiya from "../assets/Images/team/siddheshnimodiya.jpg"
import smitnimje from "../assets/Images/team/smitnimje.jpg"
import harshagrawal from "../assets/Images/team/harshagrawal.jpg"
import atharvamundada from "../assets/Images/team/atharvamundada.jpg"
import director from "../assets/Images/img-about/director.png"
import jajulwar3 from "../assets/Images/img-about/jajulwar3.png"
import achammathomas from "../assets/Images/Staff/achammathomas.png"
import rupeshshelke from "../assets/Images/Staff/rupeshshelke.png"


const patrons = [
  {
    name: "Shri. Sunilji Raisoni",
    designation: "Chairman, Raisoni Group Of Institutions",
    image: suniljiraisoni,
  },
  {
    name: "Mrs. Shobha Raisoni",
    designation: "Trustee, Raisoni Group Of Institutions",
    image: shobharaisoni2,
  },
  {
    name: "Mr. Shreyas Raisoni",
    designation: "Executive Director, Raisoni Group Of Institutions",
    image: shreyasraisoni2,
  },
];

const srcmembers = [
    {
      name: "Vaidehi Chobitar",
      designation: "Gathering Secretary",
      image: vaidehichobitkar,
    },
    {
      name: "Parikshit Borkute",
      designation: "Joint Gathering Secretary",
      image: parikshitborkute,
    },
    {
      name: "Aashi Gaikwad",
      designation: "Joint Gathering Secretary",
      image: aashigaiwad,
    },
    {
      name: "Janvi Anwaney",
      designation: "Technorion President",
      image: janvianwaney,
    },
    {
      name: "Poshika Raut",
      designation: "Joint Technorion President",
      image: poshikaraut,
    },
    {
      name: "Rudrani Tandulkar",
      designation: "Joint Technorion President",
      image: rudranitandulkar,
    },
    {
      name: "Yash Bhorse",
      designation: "Gymkhana President",
      image: yashbhorse,
    },
    {
      name: "Tanushree Kuhikar",
      designation: "Joint Gymkhana President",
      image: tanushreekuhikar,
    },
    {
      name: "Anika Payasi",
      designation: "Joint Gymkhana President",
      image: anikapayasi,
    },
    {
      name: "Dhwani Agrawal",
      designation: "Treasurer",
      image: dhwaniagrawal,
    },
];

const developers = [
    {
        name: "Prof. Atiya Khan",
        designation: "Web Master",
        image: atiyamadam,
      },
      {
        name: "Ram Warhekar",
        designation: "Web Developer",
        image: ramwarhekar,
      },
      {
        name: "Shiv Kasat",
        designation: "Web Developer",
        image: shivkasat,
      },
      {
        name: "Siddhesh Nimodiya",
        designation: "Web Designer",
        image: siddheshnimodiya,
      },
      {
        name: "Smit Nimje",
        designation: "Web Developer",
        image: smitnimje,
      },
      {
        name: "Harsh Agrawal",
        designation: "Web Developer",
        image: harshagrawal,
      },
      {
        name: "Atharva Mundada",
        designation: "Web Developer",
        image: atharvamundada,
      },
]

const AboutPage = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1200px] mx-auto pt-20">
        <div className="w-full pt-20 rounded-3xl">
        <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
          About Antaragni
          <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
        </h1>
        <div className="w-full pt-10 flex flex-col items-center mx-auto max-w-[1300px] px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-1/2 text-lg text-black text-justify leading-relaxed">
              <p>
                ANTARAGNI-2025 is the Annual Fest of
                G. H. Raisoni College of Engineering, taking things to a greater level this year. With competitions in dance,
                film and photography, music, dramatics, and various technical events with a unique twist, it promises to be
                an unforgettable event.
              </p>
              <p className="mt-4">
                The festival includes events like dancing, singing, and fashion shows. Antaragni, being the cultural part
                of the gathering, observes the maximum audience participation, starting from day one and concluding with
                a grand finale featuring a renowned celebrity.
              </p>
              <div className="mt-10">
                <p className="text-md mt-2"><strong>Antaragni and Technorion:</strong> 4 - 6 March 2025</p>
                <p className="text-md mt-1"><strong>Parakram :</strong> 23 - 27 February 2025</p>
              </div>
            </div>
            <div className="lg:w-1/2 h-auto rounded-xl overflow-hidden shadow-lg">
              <video
                className="w-full h-[300px] object-cover rounded-xl"
                autoPlay
                loop
                muted>
                <source src={newantvideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] max-w-[1200px] mx-auto border-zinc-400 mt-12"></div>
        <div className="w-full max-w-[1200px] mx-auto py-12">
            <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
              patrons
              <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
            </h1>
            <div className="flex flex-wrap text-center justify-center gap-12 my-24">
              {patrons.map((patron, index) => (
                <div
                  key={index}
                  className="relative bg-white shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-300"
                >
                  <img
                    src={patron.image}
                    className="w-[350px] h-[400px] object-cover"
                    alt={patron.name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                    <h3 className="font-bold text-2xl">{patron.name}</h3>
                    <p className="text-lg opacity-90">{patron.designation}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto py-12">
            <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
              Director
              <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
            </h1>
            <div className="flex flex-wrap justify-center gap-12 mt-20 my-24">
              <div className="relative bg-white shadow-xl rounded-3xl  overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-300">
                <img
                  src={director}
                  className="w-[350px] h-[400px] object-cover"
                  alt="Dr. Sachin Untawale"
                />
                <div className="absolute bottom-0 left-0 text-center  right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                  <h3 className="font-bold text-2xl">Dr. Sachin Untawale</h3>
                  <p className="text-lg opacity-90">Director, GHRCE</p>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto py-12">
              <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
                DEAN STUDENT ACTIVITIES COUNCIL AND GATHERING INCHARGE
                <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
              </h1>
              <div className="flex flex-wrap justify-center gap-10 mt-20 my-20">
                <div className="relative bg-white shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-300">
                  <img
                    src={jajulwar3}
                    className="w-[350px] h-[400px] object-cover"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                    <h3 className="font-bold text-2xl">Dr. K. K. Jajulwar</h3>
                    <p className="text-lg opacity-90">Dean Student Activist Council</p>
                  </div>
                </div>
              </div>
              <div/>
        </div> 
        <div className="w-full max-w-[1200px] mx-auto py-12">
          <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
            Gathering HOD Incharge
            <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
          </h1>
          <div className="flex flex-wrap justify-center gap-10 mt-20 my-20">
              <div className="relative bg-white shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-300">
                <img
                  src={achammathomas}
                  className="w-[350px] h-[400px] object-cover"
                  alt="Dr. Achamma Thomas"
                />
              <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                <h3 className="font-bold text-2xl">Dr. Achamma Thomas</h3>
                <p className="text-lg opacity-90">HOD, Department of Artificial Intelligence</p>
              </div>
              </div>
              <div className="relative bg-white shadow-xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-300">
                <img
                  src={rupeshshelke}
                  className="w-[350px] h-[400px] object-cover"
                  alt="Dr. Rupesh Shelke"/>
                <div className="absolute bottom-0 left-0 text-center  right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                  <h3 className="font-bold text-2xl">Dr. Rupesh Shelke</h3>
                  <p className="text-lg opacity-90">HOD, Department of Mechanical Engineering</p>
                </div>
              </div>
            </div>
          <div/>
        </div>
        <div className="w-full max-w-[1200px] mx-auto py-12">
          <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
              STUDENT REPRESENTATIVE COUNCIL (SRC)
              <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
            </h1>

              <div className="flex flex-wrap justify-center gap-10 mt-20">
              <div className="flex flex-wrap justify-center gap-10">
                    {srcmembers.map((member, index) => (
                      <div
                        key={index}
                        className="relative bg-white shadow-2xl rounded-xl overflow-hidden w-[500px] h-[200px] flex items-center transform hover:scale-105 transition-all duration-300 border border-gray-300 px-4"
                      >
                        <div className="w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-gray-300 flex-shrink-0">
                          <img
                            src={member.image}
                            className="w-full h-full object-cover"
                            alt={member.name}
                          />
                        </div>
                        <div className="w-[2px] bg-gray-300 h-[80%] mx-4"></div>
                        <div className="flex flex-col justify-center">
                          <h3 className="font-bold text-2xl text-zinc-900">{member.name}</h3>
                          <p className="text-lg text-zinc-700 font-medium">{member.designation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                    </div>
        </div>
        <div className="w-full max-w-[1200px] mx-auto py-12">
            <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
                WEB DEVELOPMENT COMMITTEE
                <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
              </h1>
              <div className="flex flex-wrap justify-center gap-10 mt-20">
                    {developers.map((developers, index) => (
                      <div
                        key={index}
                        className="relative bg-white shadow-2xl rounded-xl overflow-hidden w-[500px] h-[200px] flex items-center transform hover:scale-105 transition-all duration-300 border border-gray-300 px-4"
                      >
                        <div className="w-[150px] h-[150px] overflow-hidden rounded-full border-4 border-gray-300 flex-shrink-0">
                          <img
                            src={developers.image}
                            className="w-full h-full object-cover"
                            alt={developers.name}
                          />
                        </div>
                        <div className="w-[2px] bg-gray-300 h-[80%] mx-4"></div>
                        <div className="flex flex-col justify-center">
                          <h3 className="font-bold text-2xl text-zinc-900">{developers.name}</h3>
                          <p className="text-lg text-zinc-700 font-medium">{developers.designation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
        </div>
        </div>
        </div>
        <Footer/>
    </>
  );
};

export default AboutPage;


