import React, { useState , useEffect } from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { RxCross2 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';
import basketball from "../assets/Images/ParakramPage/basketball.jpg";
import football from "../assets/Images/ParakramPage/football.jpg";
import dodgeball from "../assets/Images/ParakramPage/dodgeball.jpg";
import chess from "../assets/Images/ParakramPage/chess.jpg";
import powerlifting from "../assets/Images/ParakramPage/powerlifting.jpg";
import kabbadi from "../assets/Images/ParakramPage/kabbadi.jpg";
import badminton from "../assets/Images/ParakramPage/badminton.jpg";
import volleyball from "../assets/Images/ParakramPage/volleyball.jpg";
import futsal from "../assets/Images/ParakramPage/futsal.jpg";
import pool from "../assets/Images/ParakramPage/pool.jpg";
import khokho from "../assets/Images/ParakramPage/khokho.jpg";
import cricket from "../assets/Images/ParakramPage/cricket.jpg";
import tugofwar from "../assets/Images/ParakramPage/tugofwar.jpg";
import carrom from "../assets/Images/ParakramPage/carrom.jpg";
import handball from "../assets/Images/ParakramPage/handball.jpg";
import tabletennis from "../assets/Images/ParakramPage/tabletennis.jpg";
import athletics from "../assets/Images/ParakramPage/athletics.jpg";


const events = [
  {
    title: "Basketball",
    description: "A thrilling basketball tournament with a single-elimination format.",
    rules: [
      "4 Quarters of 10 min each.",
      "5 Personal fouls will lead to disqualification.",
      "A maximum of 12 players can play from a team.",
      "Single-Elimination format.",
      "Standard point format will be followed."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: ["Prof. Ashish Talekar (AI)"],
    srcCoordinators: ["Shreyash Shriwas (4th IT – 9511263146)"],
    imageUrl: basketball // No image URL provided
  },
  {
    title: "Football (Men’s)",
    description: "A traditional football match played with standard rules.",
    rules: [
      "The field must be rectangular and distinctly marked.",
      "Matches are played by two teams of 11 players.",
      "A match consists of two 45-minute halves.",
      "The referee's decision is final.",
      "Assistant referees assist the referee in duties."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Dr. Nihar Dahake (MBA)",
      "Dr. Kamalakar Nandekar (FY)"
    ],
    srcCoordinators: ["Vishal Bhoyar (4th ETRX- 7030271731)"],
    imageUrl: football // No image URL provided
  },
  {
    title: "Dodgeball",
    description: "A fun game where teams aim to eliminate each other by hitting opponents with balls.",
    rules: [
      "Players get out if they are hit by a ball or if their throw is caught.",
      "The game ends when one team eliminates all players on the other side."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Prashant Khobaragade (CSE)"
    ],
    srcCoordinators: ["Srushti Kanphade (4th ME – 7888098244)"],
    imageUrl: dodgeball // No image URL provided
  },
  {
    title: "Chess (M/W)",
    description: "A strategic board game played in a competitive format.",
    rules: [
      "Chess boards and pieces will be provided.",
      "Report before the allotted time; late participants will be disqualified.",
      "Time control will be announced on the day of the event.",
      "Games will be played in GHRCE Campus in Sports Room."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Nuilima Dudhe (EE)"
    ],
    srcCoordinators: ["Nandani Kakde (6th ME- 8010696289)"],
    imageUrl: chess // No image URL provided
  },
  {
    title: "Power Lifting",
    description: "A strength competition focusing on squats, bench presses, and deadlifts.",
    rules: [
      "Each competitor is allowed three attempts on each lift.",
      "The lifter's best valid attempt counts toward the competition total.",
      "The lifter with the highest total wins for each weight class.",
      "Lifters with the same total are ranked by weight."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Imran Ahmed (CSE)"
    ],
    srcCoordinators: ["Bhavya Pande (6th ETC – 7769077009)"],
    imageUrl: powerlifting // No image URL provided
  },
  {
    title: "Kabaddi (M/W)",
    description: "A traditional Indian sport focusing on raiding and tagging.",
    rules: [
      "Two Teams of Seven Players.",
      "Each Match Consists of Two Halves.",
      "Points are Scored by Raiding the Opposition’s Side.",
      "A Successful Raid is Worth Two Points.",
      "ID-Cards are Compulsory."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Dr. Akhilahmed Sheikh (FY)"
    ],
    srcCoordinators: ["Ved Deshmukh (4th CE - 8888561230)"],
    imageUrl: kabbadi // No image URL provided
  },
  {
    title: "Badminton (M/W)",
    description: "A racquet sport played with a shuttlecock.",
    rules: [
      "Score points by hitting the shuttlecock over the net.",
      "Game is played to 11 points, with a 2-point lead required after 10-10.",
      "Serve underhand to the opposite service box.",
      "Rally ends when the shuttlecock lands out or a fault is committed."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Dr. S. Kubalkar (EE)",
      "Prof. Rekha Patel (FY)"
    ],
    srcCoordinators: ["Anshul Wajpe (8th ETC – 9373646290)"],
    imageUrl: badminton // No image URL provided
  },
  {
    title: "Volleyball (M/W)",
    description: "A team sport played with a net and ball.",
    rules: [
      "Height of net - 2.40m.",
      "Decision made by the referee will be final.",
      "Fixed position play with no rotation.",
      "Team includes 6 players and 3 substitutes.",
      "Match consists of 3 sets (25-25-15 points)."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Durgaprasad Roy (AI)",
      "Prof. Sarikha Wandhare (FY)"
    ],
    srcCoordinators: ["Kalash Wankhede (6th ETC – 8767919798)"],
    imageUrl: volleyball // No image URL provided
  },
  {
    title: "Futsal",
    description: "A variant of football played on a smaller field.",
    rules: [
      "Five players per team, with a maximum of twelve players on the roster.",
      "Possession to start the game determined by a coin toss.",
      "The game is restarted after a goal in the same manner.",
      "The ball is out of play when it has completely crossed the sidelines."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Dr. Wani Pital (ETRX)",
      "Prof. Swati Tiwari (IT)"
    ],
    srcCoordinators: ["Kalash Singh (4th DIC – 7066720128)"],
    imageUrl: futsal // No image URL provided
  },
  {
    title: "Pool (M/W)",
    description: "A cue sport played on a rectangular table.",
    rules: [
      "There will be a time limit; the team with the highest score wins.",
      "If a player commits a foul, opponents get ball in hand.",
      "If the cue ball is pocketed or leaves the table, it’s a foul."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Ankur Gupta (EE)"
    ],
    srcCoordinators: ["Siddhi Mankar (4th CSE – 9028902779)"],
    imageUrl: pool // No image URL provided
  },
  {
    title: "Kho-Kho (M/W)",
    description: "A traditional Indian tag sport played between two teams.",
    rules: [
      "Two Teams of Seven Players.",
      "Runners must touch the pole to score a point.",
      "Chasers can only tag runners using their hands.",
      "ID-Cards are Compulsory."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Raju Pawar (IT)"
    ],
    srcCoordinators: ["Devanshi Baraskar (4th ETC – 9977943392)"],
    imageUrl: khokho // No image URL provided
  },
  {
    title: "Cricket (M/W)",
    description: "A bat-and-ball game played between two teams.",
    rules: [
      "Each team consists of 11 players.",
      "The bowler must bowl 6 legal deliveries to constitute an over.",
      "The team with the most runs wins.",
      "The fielding team must have one designated wicket keeper.",
      "ID-Cards are Compulsory."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Anirudh Bhagwat (AI)"
    ],
    srcCoordinators: ["Umakant Gahane (6th ETC – 8329118893)"],
    imageUrl: cricket // No image URL provided
  },
  {
    title: "Tug of War (M/W)",
    description: "A test of strength between two teams.",
    rules: [
      "There will be 8 players in each team (+2 substitutes).",
      "The total weight of each team will be 640 kg.",
      "ID cards compulsory."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Rahul Moriwal (CSE)"
    ],
    srcCoordinators: ["Sujal Khobragade (6th CE – 8080331325)"],
    imageUrl: tugofwar // No image URL provided
  },
  {
    title: "Carrom",
    description: "A cue sport played on a square board.",
    rules: [
      "Carrom board, coins, strikers, and powder will be provided.",
      "Report before the allotted time; late participants will be disqualified.",
      "Time control will be announced on the day of the event.",
      "Game will be played in GHRCE campus in sports room."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Dr. Kotadi Chinnaiah (AI)"
    ],
    srcCoordinators: ["Shreyash Shriwas (4th IT – 9511263146)"],
    imageUrl: carrom // No image URL provided
  },
  {
    title: "Handball (M/W)",
    description: "A team sport where players score by throwing a ball into the opponent's goal.",
    rules: [
      "Teams consist of 7 players (6 outfield + 1 goalkeeper).",
      "Match duration is two 30-minute halves with a 10-minute break.",
      "Players can hold the ball for a maximum of 3 seconds.",
      "Body contact is allowed; no pushing or grabbing."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Dr. Sachin Harne (AI)"
    ],
    srcCoordinators: ["Rahul Raghuvanshi (CSE 4th – 9359855979)"],
    imageUrl: handball // No image URL provided
  },
  {
    title: "Table Tennis (M/W)",
    description: "A fast-paced indoor sport played on a table.",
    rules: [
      "Games are played to 11 points.",
      "Alternate serves every two points.",
      "Toss the ball straight up while serving.",
      "A serve that touches the net is a 'let'."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Tony Jagyasi (AI)"
    ],
    srcCoordinators: ["Madhura Alaspure (4th CSE – 779613791)"],
    imageUrl: tabletennis // No image URL provided
  },
  {
    title: "Athletics",
    description: "Track and field events including sprints and relays.",
    rules: [
      "Runner must remain in lane throughout the race.",
      "Runner must start behind the start line.",
      "Disqualification for impeding another runner's progress.",
      "Baton must be passed within the exchange zone in relay events."
    ],
    entryFee: "Nil",
    prizes: [], // No prizes mentioned
    registrationLink: "", // No registration link provided
    facultyCoordinators: [
      "Prof. Pankaj Ramtekkar (EE)",
      "Prof. Vaishali Shend (AI)"
    ],
    srcCoordinators: ["Abhijeet Gour (4th CSE – 9309324632)"],
    imageUrl: athletics // No image URL provided
  }
];

const EventModal = ({ event, onClose }) => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="fixed inset-0 flex mt-15 items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl overflow-y-scroll shadow-xl max-w-lg w-full p-6 relative">
        <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onClick={onClose}>
          <RxCross2 size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Rules:</h3>
            <ul className="list-decimal list-inside text-gray-700">
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Entry Fee:</h3>
            <p className="text-gray-700">{event.entryFee}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Prizes:</h3>
            {event.prizes.map((prize, index) => (
              <p key={index} className="text-gray-700">{prize}</p>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Faculty Coordinator:</h3>
            {event.facultyCoordinators.map((coordinator, index) => (
              <p key={index} className="text-gray-700">{coordinator}</p>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">SRC Coordinator:</h3>
            {event.srcCoordinators.map((coordinator, index) => (
              <p key={index} className="text-gray-700">{coordinator}</p>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} variant="secondary">Close</button>
        </div>
      </div>
    </div>
  );
};

const ParakramPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
      <>
        <Navbar />
        <section className="container mt-35 w-full max-w-[1300px] mx-auto my-16 p-6">
          <h1 className="text-4xl font-bold text-center uppercase text-zinc-900 relative">
            Parakram Events
            <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
          </h1>
          <p className="text-gray-400 mt-6 text-center mb-10 text-lg">Here are some of our Events</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
            {events.map((event, index) => (
              <div
                key={index}
                className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer flex flex-col justify-center items-center"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="w-full">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-96 object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-all duration-300"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center w-full"> 
                  <h2 className="text-white text-4xl font-bold uppercase tracking-wide drop-shadow-xl">
                    {event.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
        {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </>
  );
};

export default ParakramPage;