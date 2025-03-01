import React, { useState } from "react";
import SportsSchedule from '../assets/pdfs/SportsSchedule.pdf';
import AntaragniSchedule from '../assets/pdfs/AntaragniSchedule.pdf';

const EventSchedule = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [newTab, setnewTab] = useState(1);

  const scheduleData = [
    {
      date: "4 March 2025",
    },
    {
      date: "5 March 2025",
    },
    {
      date: "6 March 2025",
    }
  ];

  const events = [
    {
      name: "Parakram",
      pdfUrl: SportsSchedule,
    },
    {
      name: "Antaragni",
      pdfUrl: AntaragniSchedule,
    },
  ];

  const handleDownload = (pdfUrl, eventName) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", `${eventName}_schedule.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };


  return (
    <section className="bg-gray-100 py-16 ">
      <div className="container hidden md:block w-full max-w-[1100px] mx-auto px-6">
        <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
          Event Schedule
          <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
        </h1>
        <h1 className="text-3xl font-bold text-center uppercase mt-20 text-zinc-900 relative">
              Parakram
              <span className="block w-20 h-1 bg-gradient-to-r mx-auto rounded-full"></span>
          </h1>
        <div className=" rounded-lg shadow-lg">
          <div className={newTab === 1 ? "block" : "hidden"}>
          <div className="flex items-center justify-center max-w-[900px] mx-auto border-b py-6 bg-gradient-to-r">
              <h3 className="md:text-2xl text:xl font-bold  mt-1 px-4 py-2  rounded-full">23rd February 2025</h3>
            </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
                <div className={newTab === 1 ? "block" : "hidden"}>
                  <div className="grid grid-cols-4 grid-rows-3 gap-5 text-gray-800 font-bold text-lg">
                    <p className="flex items-center">&#8226; Cricket (M / W)</p>
                    <p className="flex items-center">&#8226; Futsal ( W )</p>
                    <p className="flex items-center">&#8226; Sepak Takraw ( M )</p>
                    <p className="flex items-center">&#8226; Badminton ( M / W )</p>
                    <p className="flex items-center">&#8226; Tug-Of-War ( M / W )</p>
                  </div>
                </div>
            </div>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b py-6">
              <h3 className="md:text-2xl text:xl font-bold text-gray-800 mt-1">24th February 2025</h3>
              </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
                <div className={newTab === 1 ? "block" : "hidden"}>
                  <div className="grid grid-cols-4 grid-rows-3 gap-5 font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Athletics ( M /W )</p>
                    <p className="flex items-center">&#8226; Football ( M )</p>
                    <p className="flex items-center">&#8226; Dodgeball ( W )</p>
                    <p className="flex items-center">&#8226; Basketball ( M / W )</p>
                    <p className="flex items-center">&#8226; Volleyball ( M )</p>
                  </div>
                </div>
            </div>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b py-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">25th February 2025</h3>
              </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
                <div className={newTab === 1 ? "block" : "hidden"}>
                  <div className="grid grid-cols-4 grid-rows-3 gap-5 font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Athletics ( M / W )</p>
                      <p className="flex items-center">&#8226; Football ( M / W )</p>
                      <p className="flex items-center">&#8226; HandBall ( M / W )</p>
                      <p className="flex items-center">&#8226; Kabbadi ( M / W )</p>
                      <p className="flex items-center">&#8226; Kho Kho ( M / W )</p>
                      <p className="flex items-center">&#8226; Cricket Final ( M / W )</p>
                  </div>
                </div>
            </div>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b py-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">27th February 2025</h3>
              </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
                <div className={newTab === 1 ? "block" : "hidden"}>
                  <div className="grid grid-cols-4 grid-rows-3 gap-5 font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Tabble Tennis ( M / W)</p>
                    <p className="flex items-center">&#8226; Carrom ( M / W )</p>
                    <p className="flex items-center">&#8226; Pool ( M / W )</p>
                    <p className="flex items-center">&#8226; Chess ( M / W )</p>
                    <p className="flex items-center">&#8226; Power Lifting ( M / W )</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1300px] border-b-2 border-zinc-800 mt-40 pb-5"></div>
          <h1 className="text-3xl font-bold text-center uppercase mt-20 text-zinc-900 relative">
            Antaragni
            <span className="block w-20 h-1 bg-gradient-to-r mx-auto rounded-full"></span>
          </h1>
          <div className="flex mt-10 justify-center gap-10 mb-8">
            {scheduleData.map((day, index) => (
              <button
                key={index}
                className={`px-10 py-3 text-xl font-semibold border-b-4 transition-all rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform duration-300 ease-in-out ${
                  activeTab === index + 1 ? "border-blue-500 text-blue-600 bg-blue-100" : "border-transparent text-gray-600 bg-white hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(index + 1)}>
                {day.day} <span className="text-lg block text-gray-700">{day.date}</span>
              </button>
            ))}
          </div>
        <div className="px-10 rounded-lg shadow-lg ">
          <div className={activeTab === 1 ? "block" : "hidden"}>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b py-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">09:30 AM - 12:30 PM</h3>
              </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
              <div className={activeTab === 1 ? "block" : "hidden"}>
                  <div className="grid grid-cols-1 grid-rows-3 gap-5 font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Inauguration & Historical drama JANATA RAJA: “Tanaji The Great Warrior ” (GHRCE-Auditorium)</p>
                    <div className="flex gap-8">
                      <p className="flex items-center">&#8226; Micro Code</p>
                      <p className="flex items-center">&#8226; Code-O-Quick</p>
                      <p className="flex items-center">&#8226; Treasure Hunt</p>
                      <p className="flex items-center">&#8226; Robot Assembly</p>
                      <p className="flex items-center">&#8226; Poster Making</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b py-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">12:30 PM - 01:30 PM</h3>
              </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
                <div className={activeTab === 1 ? "block" : "hidden"}>
                  <div className="grid grid-cols-4 grid-rows-3 gap-5 font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Singing</p>
                    <p className="flex items-center">&#8226; Rangoli Competiton</p>
                    <p className="flex items-center">&#8226; Tech Quiz</p>
                    <p className="flex items-center">&#8226; Clay Modelling</p>
                    <p className="flex items-center">&#8226; Free Fire</p>
                    <p className="flex items-center">&#8226; Feeling se Reeling</p>
                    <p className="flex items-center">&#8226; Call of Duty</p>
                  </div>
                </div>
            </div>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b py-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">1:30 PM - 05:00 PM</h3>
              </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
              <div className={activeTab === 1 ? "block" : "hidden"}>
                  <div className="grid grid-cols-4 grid-rows-3 gap-5 font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Talent Hunt</p>
                    <p className="flex items-center">&#8226; Street Dance</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="px-10 rounded-lg shadow-lg">
          <div className={activeTab === 2 ? "block" : "hidden"}>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b py-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">09:30 AM - 11:30 AM</h3>
              </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
                <div className={activeTab === 2 ? "block" : "hidden"}>
                  <div className="grid grid-cols-4 grid-rows-3 gap-5 text-gray-800 font-bold text-lg">
                    <p className="flex items-center">&#8226; Battle of Tradition</p>
                    <p className="flex items-center">&#8226; Box cricket</p>
                    <p className="flex items-center">&#8226; Mobile Pool</p>
                    <p className="flex items-center">&#8226; Blind Race</p>
                    <p className="flex items-center">&#8226; Clash Royal</p>
                    <p className="flex items-center">&#8226; UNO</p>
                  </div>
                </div>
            </div>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b py-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">11:30 PM - 01:30 PM</h3>
              </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
                <div className={activeTab === 2 ? "block" : "hidden"}>
                  <div className="grid grid-cols-4 grid-rows-3 gap-5 font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Theme Dance</p>
                    <p className="flex items-center">&#8226; Logo Design</p>
                    <p className="flex items-center">&#8226; Line Follower</p>
                    <p className="flex items-center">&#8226; Valorant</p>
                  </div>
                </div>
            </div>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b py-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">1:30 PM - 04:00 PM</h3>
              </div>
              <div className="w-full h-full mx-auto pl-20 py-6 rounded-lg">
              <div className={activeTab === 2 ? "block" : "hidden"}>
                  <div className="grid grid-cols-4 grid-rows-3 gap-5 font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Trashion</p>
                    <p className="flex items-center">&#8226; Zorbing Gaming Zone</p>
                    <p className="flex items-center">&#8226; Ludo King</p>
                    <p className="flex items-center">&#8226; Squid Game</p>
                    <p className="flex items-center">&#8226; Paper Boat Race</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="px-10 rounded-lg shadow-lg">
          <div className={activeTab === 3 ? "block" : "hidden"}>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b pb-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">09:00 AM - 11:00 AM</h3>
              </div>
              <div className="w-full h-full mx-auto py-6 rounded-lg">
                <div className={activeTab === 3 ? "block" : "hidden"}>
                  <div className="flex justify-evenly gap-5 text-gray-800 font-bold text-lg">
                    <p className="flex items-center">&#8226; Wall Painting</p>
                    <p className="flex items-center">&#8226; Master Chef</p>
                    <p className="flex items-center">&#8226; Tower Making</p>
                    <p className="flex items-center">&#8226; Artistic Expendition</p>
                    <p className="flex items-center">&#8226; BGMI</p>
                  </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-6 max-w-[900px] mx-auto border-b pt-20 pb-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">11:00 AM - 01:00 PM</h3>
              </div>
              <div className="w-full h-full mx-auto py-6 rounded-lg">
                <div className={activeTab === 3 ? "block" : "hidden"}>
                  <div className="flex justify-evenly gap-5 font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Fashion Show</p>
                    <p className="flex items-center">&#8226; Robo Block</p>
                    <p className="flex items-center">&#8226; Mini Hackathon</p>
                  </div>
                </div>
            </div>
            <div className="flex items-center  justify-center gap-6 max-w-[900px] mx-auto border-b pt-20 pb-6">
              <h3 className="md:text-2xl text:xl font-bold  text-gray-800 mt-1">1:00 PM - 04:30 PM</h3>
              </div>
              <div className="w-full h-full mx-auto py-6 rounded-lg">
                <div className={activeTab === 3 ? "block" : "hidden"}>
                  <div className="flex justify-evenly font-bold text-gray-800 text-lg">
                    <p className="flex items-center">&#8226; Prize Distribution</p>
                    <p className="flex items-center">&#8226; Jamming Session/Closing Ceremony</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden bg-gradient-to-b from-gray-100 to-gray-200 py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-zinc-900">Event Schedule</h2>
        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.name} className="bg-white text-center pb-10 rounded-lg shadow-lg p-6 hover:scale-105 transition duration-300"> 
              <h3 className="text-xl font-semibold mb-3 text-zinc-900">{event.name}</h3>
              <div className="text-center mt-4">
                <button
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition duration-300"
                  onClick={() => handleDownload(event.pdfUrl, event.name)}
                >
                  Download {event.name} Schedule
                </button>
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default EventSchedule;
