import React from 'react';
import shah from '../assets/Images/Sponsor/shah.png';
import anusaya from '../assets/Images/Sponsor/anusaya.png';
import saroj from '../assets/Images/Sponsor/saroj.jpeg';

const Sponsors = () => {
  const sponsors = [
    { image: shah, title: "Academic Partner" },
    { image: saroj, title: "Style Partner" },
    { image: anusaya, title: "Style Partner" },
  ];

  return (
    <div className="w-full">
      <div className="w-full max-w-[1300px] mx-auto text-center mt-20">
        <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
          Our Sponsors
          <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
        </h1>

        <div className="hidden md:block py-20 px-auto">
          <div className="flex justify-evenly">
            {sponsors.slice(0, 4).map((sponsor, index) => (
              <div key={index} className="text-center">
                <div className="h-20 flex gap-4">
                  <img className="w-full h-full mx-auto" src={sponsor.image} alt={sponsor.title} />
                </div>
                <h1 className="text-2xl mt-2 font-semibold text-center">{sponsor.title}</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-evenly pt-15">
            {sponsors.slice(4).map((sponsor, index) => (
              <div key={index + 4} className="text-center">
                <div className="w-40 h-20 bg-grey-800">
                  <img className="w-full h-full mx-auto" src={sponsor.image} alt={sponsor.title} />
                </div>
                <h1 className="text-sm mt-2 font-bold text-center">{sponsor.title}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden py-20 grid grid-cols-2 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="text-center">
              <div className="h-20 flex justify-center items-center"> 
                <img className="max-w-full max-h-full mx-auto" src={sponsor.image} alt={sponsor.title} />
              </div>
              <h1 className="text-sm mt-2 font-bold font-[General_Sans] text-center">{sponsor.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;