import { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { useLocation } from 'react-router-dom'; 
import bgmi from "../assets/Images/Technorion/bgmi.jpg";
import cod from "../assets/Images/Technorion/cod.jpg";
import valorant from "../assets/Images/Technorion/valorant.jpg";
import freefire from "../assets/Images/Technorion/freefire.jpeg";
import clashroyal from "../assets/Images/Technorion/clashroyal.jpg";
import ludoking from "../assets/Images/Technorion/ludoking.jpeg";
import uno from "../assets/Images/Technorion/uno.jpg";
import artisticexpendition from "../assets/Images/Technorion/artisticexpendition.jpeg";
import boatrace from "../assets/Images/Technorion/boatrace.jpeg";
import mobilepool from "../assets/Images/Technorion/mobilepool.jpg";
import claymodelling from "../assets/Images/Technorion/claymodelling.jpeg";
import microcode from "../assets/Images/Technorion/microcode.jpeg";
import hackathon from "../assets/Images/Technorion/hackathon.jpg";
import towermaking from "../assets/Images/Technorion/towermaking.jpg";
import robotassembling from "../assets/Images/Technorion/robotassembling.jpeg";
import blindrace from "../assets/Images/Technorion/blindrace.jpg";
import codeoquick from "../assets/Images/Technorion/codeoquick.jpg";
import techquiz from "../assets/Images/Technorion/techquiz.jpg";
import logomaking from "../assets/Images/Technorion/logomaking.jpg";
import reel from "../assets/Images/Technorion/reel.jpg";
import linefollower from "../assets/Images/Technorion/linefollower.jpg";
import robowars from "../assets/Images/Technorion/robowars.jpg";
import roboblocks from "../assets/Images/Technorion/roboblocks.jpg";
import artexhibition from "../assets/Images/Technorion/artexhibition.jpeg";
import promptmaster from "../assets/Images/Technorion/promptmaster.jpg";

const events = [
  {
    title: "BGMI",
    description: "A mobile battle royale game tournament.",
    rules: [
      "Players are required to play on their mobile devices only.",
      "Any person responsible for cheating or using any hacks will be disqualified with no refund."
    ],
    awards: {
      firstPrize: "₹4000/-",
      secondPrize: "₹3000/-"
    },
    entryFee: "₹300",
    team: "Squad of 4",
    facultyCoordinator: "Prof. Priti Kakde",
    studentCoordinator: "Vishal Bhoyar (7030271731)",
    imageUrl: bgmi
  },
  {
    title: "Call of Duty (COD)",
    description: "A mobile first-person shooter game tournament.",
    rules: [
      "Players are required to play on their mobile devices only.",
      "Any player responsible for cheating or using any hacks will be disqualified with no refund.",
      "Only college students are allowed in the squad.",
      "Players are required to take screenshots of statistics and kills."
    ],
    awards: {
      firstPrize: "₹2000/-",
      secondPrize: "₹1000/-"
    },
    entryFee: "₹350",
    team: "Squad",
    facultyCoordinator: "Prof. Minakshi Ramteke",
    studentCoordinator: "Shreyas Shriwas (9511263146)",
    imageUrl: cod
  },
  {
    title: "Valorant",
    description: "A tactical first-person shooter game tournament.",
    rules: [
      "Anti-Cheat: No additional anti-cheat is required for official matches.",
      "Match Procedure: Series Lengths Matches are played as a best of 1 series for the Regular season and as a best of 3 series during the Playoffs and Finals.",
      "Game Settings: The home team will host the lobby and invite the away team."
    ],
    awards: {
      firstPrize: "₹5000/-",
      secondPrize: "₹2500/-"
    },
    entryFee: "₹500",
    team: "Individual",
    facultyCoordinator: "Prof. Pradeep Barde",
    studentCoordinator: "Bhavya Pande (7769077009)",
    imageUrl: valorant
  },
  {
    title: "Garena Free Fire",
    description: "A mobile battle royale game tournament.",
    rules: [
      "Matches will be played in Squad format (4 Players per team).",
      "Only mobile devices are allowed (No Emulators or Tablets).",
      "No hacks, third-party apps, or unfair gameplay tactics.",
      "Match Mode: Custom Room – Clash Squad Mode (Classic).",
      "Players are responsible for their own internet connection.",
      "Failure to join the lobby on time = Auto disqualification."
    ],
    awards: {
      firstPrize: "₹4000/-",
      secondPrize: "₹2000/-"
    },
    entryFee: "₹300",
    team: "Squad",
    facultyCoordinator: "Prof. Jyoti Kumre",
    studentCoordinator: "Abhijeet Gour",
    imageUrl: freefire
  },
  {
    title: "Clash Royale",
    description: "A mobile strategy card game tournament.",
    rules: [
      "Players are required to play on their mobile devices only.",
      "Any person found cheating will be disqualified with no refund."
    ],
    awards: {
      firstPrize: "₹1000/-",
      secondPrize: "₹750/-"
    },
    entryFee: "₹100",
    team: "Individual",
    facultyCoordinator: "Prof. Nirmal Mungale",
    studentCoordinator: "Soham Kale (9373953413)",
    imageUrl: clashroyal
  },
  {
    title: "Ludo King",
    description: "A mobile board game tournament.",
    rules: [
      "Players are required to play on their mobile devices only.",
      "Any person responsible for cheating or using any hacks will be disqualified with no refund."
    ],
    awards: {
      firstPrize: "₹700/-",
      secondPrize: "₹500/-"
    },
    entryFee: "₹100",
    team: "Individual",
    facultyCoordinator: "Prof. Komal Kumbhare",
    studentCoordinator: "Nandini Kakde (8010696289)",
    imageUrl: ludoking
  },
  {
    title: "UNO",
    description: "A classic card game tournament.",
    rules: [
      "Objective: Be the first to score 500 points.",
      "Players: 2-4 players can play, and the game consists of multiple rounds.",
      "Deck: The deck has 108 cards, including number cards and action cards.",
      "Turn: Players take turns playing a card from their hand that matches the color, number, or symbol of the top card in the discard pile.",
      "UNO!: When a player has only one card left, they must say UNO! If they fail to do so and are caught before the next player’s turn, they must draw two cards as a penalty.",
      "Winning a Round: A round ends when a player has played all their cards.",
      "Game End: The game ends when a player reaches 500 points."
    ],
    awards: {
      firstPrize: "₹1000/-",
      secondPrize: "₹750/-"
    },
    entryFee: "₹100",
    team: "Individual",
    facultyCoordinator: "Prof. Preti Gade",
    studentCoordinator: "Tanish Tawri (8080908567)",
    imageUrl: uno
  },
  {
    title: "Artistic Expedition",
    description: "An AI-based art creation competition.",
    rules: [
      "Design a compelling prompt based on the given theme.",
      "Create a stunning image and video using the provided AI tool.",
      "Each team consists of two participants working together.",
      "The competition consists of three rounds."
    ],
    awards: {
      firstPrize: "₹1500/-",
      secondPrize: "₹750/-"
    },
    entryFee: "₹150",
    team: "Team of 2",
    facultyCoordinator: "Dr. Girish Bhavekar",
    studentCoordinator: "Umakant S Kadu",
    imageUrl: artisticexpendition
  },
  {
    title: "Water Boat Race",
    description: "A creative boat racing competition.",
    rules: [
      "A maximum of 2 members is allowed per group.",
      "Participants must bring their own boats, showcasing their innovation and creativity.",
      "The competition will have a fixed duration (50 seconds to 1 minute).",
      "Participants must complete the round within the given time.",
      "Top four participants will be selected for the final round."
    ],
    awards: {
      firstPrize: "₹2500/-",
      secondPrize: "₹1500/-"
    },
    entryFee: "₹200",
    team: "Team of 2",
    facultyCoordinator: "Dr. V.W Khond",
    studentCoordinator: "Srushti Kanphade (7888098244)",
    imageUrl: boatrace
  },
  {
    title: "Mobile Pool",
    description: "A pool game tournament.",
    rules: [
      "The player who pockets a ball on their turn gets to go again.",
      "The type of game being played determines which balls are hit.",
      "The player must call the ball and pocket they are aiming for.",
      "Fouls: Hitting the wrong ball first, Not hitting any ball, Potting the 8-ball early.",
      "Winning: After clearing your group, call and sink the 8-ball legally."
    ],
    awards: {
      firstPrize: "₹700/-",
      secondPrize: "₹500/-"
    },
    entryFee: "₹100",
    team: "Individual",
    facultyCoordinator: "Dr. V.P Kalbhande",
    studentCoordinator: "Rahul Raghuvanshi (9359855979)",
    imageUrl: mobilepool
  },
  {
    title: "Clay Modelling",
    description: "A creative clay modeling competition.",
    rules: [
      "The competition will have a fixed duration of 2 hours.",
      "Participants must complete their models within this time frame.",
      "Models should align with the given theme or topic.",
      "Participants must create their own work without external help.",
      "There will be a group of 2 students in each team.",
      "The models should be up to 30cm in height.",
      "Theme is IDOL MAKING."
    ],
    awards: {
      firstPrize: "₹1500/-",
      secondPrize: "₹750/-"
    },
    entryFee: "₹200 per team",
    team: "Team of 2",
    facultyCoordinator: "Dr. Nikhil Pitale, Prof. Mrunal Dhone",
    studentCoordinator: "Ved Deshmukh (8888561230)",
    imageUrl: claymodelling
  },
  {
    title: "Micro Code",
    description: "A coding competition focused on minimal code.",
    rules: [
      "The code should be the smallest among all submissions.",
      "The code should give the correct output."
    ],
    awards: {
      firstPrize: "₹1000/-",
      secondPrize: "₹700/-"
    },
    entryFee: "₹100",
    team: "Individual",
    facultyCoordinator: "Dr. Chetan Dhule, Prof. Priya Jaunjal",
    studentCoordinator: "Premjeet Sharma (8788660597)",
    imageUrl: microcode
  },
  {
    title: "Mini Hackathon",
    description: "A quick idea presentation competition.",
    rules: [
      "Team Size: 2 members per team (no solo participation).",
      "Entry Fee: ₹200 per team (₹100 per person).",
      "Registration: Only one member needs to fill the Google Form.",
      "Time Limit: 1 hour to develop the solution.",
      "No Coding Required: Only idea presentation, not software development.",
      "Problem Statement: Will be revealed at the start of the event.",
      "Presentation: 5 minutes per team + 2 minutes for Q&A.",
      "Feasibility: The idea should be practical and implementable."
    ],
    awards: {
      firstPrize: "₹2000/-",
      secondPrize: "₹1000/-"
    },
    entryFee: "₹200 per team",
    team: "Team of 2",
    facultyCoordinator: "A. M. Khalatkar, Archana Deshpande",
    studentCoordinator: "Soumya Jha (9272155341)",
    imageUrl: hackathon
  },
  {
    title: "Tower Making",
    description: "A tower building competition using provided materials.",
    rules: [
      "You may use only the materials supplied.",
      "The base of the tower cannot be glued to the table or any other surface.",
      "Your tower may not touch anything except the base that you build it on.",
      "You are allowed to use as much of the glue you are given, but no more.",
      "The minimum height of a tower is approximately 40 cm.",
      "The width of the base of the tower should be 15cm, the middle portion of the tower should be 6 cm, and the top portion of the tower should be 5cm.",
      "You will have exactly 2:00 hours to build your tower.",
      "No coaching will be allowed.",
      "Height will be measured once at the end of the building time."
    ],
    awards: {
      firstPrize: "₹2000/-",
      secondPrize: "₹1000/-"
    },
    entryFee: "₹100 per student",
    team: "Individual",
    facultyCoordinator: "Dr. Sanket Sanghai",
    studentCoordinator: "Sujal Khobragade (8080331325)",
    imageUrl: towermaking
  },
  {
    title: "Robot Assembling",
    description: "A robot assembly competition.",
    rules: [
      "Teams will solve robot assembly-related puzzles.",
      "All puzzles must be completed within the given time.",
      "Solutions should be accurate and efficient."
    ],
    awards: {
      firstPrize: "₹1000/-",
      secondPrize: "₹750/-"
    },
    entryFee: "₹200 per team",
    team: "Team of 2",
    facultyCoordinator: "Dr. Rahul Agrawal, Dr. Rohini Khaparde(FY)",
    studentCoordinator: "Ayush Deshmukh (8208628937)",
    imageUrl: robotassembling
  },
  {
    title: "Blind Race",
    description: "A fun toy car racing competition with blindfolded participants.",
    rules: [
      "The blindfolded participant has to drive the toy car.",
      "Teammate guides them through the track.",
      "5-second penalty for going off track."
    ],
    awards: {
      firstPrize: "₹2000/-",
      secondPrize: "₹1000/-"
    },
    entryFee: "₹200",
    team: "Team of 2",
    facultyCoordinator: "Prof. Mughda Dambhare",
    studentCoordinator: "Anika Payasi (7498246461)",
    imageUrl: blindrace
  },
  {
    title: "Code-O-Quick",
    description: "A coding competition with multiple rounds.",
    rules: [
      "Each team must consist of 2 participants.",
      "The event has 2 rounds: Round 1 (10 questions) and Round 2 (1 final problem-solving).",
      "Plagiarism or copying from other teams or external sources is strictly prohibited.",
      "Submit solutions on time; incomplete code won’t be accepted.",
      "Cheating will lead to disqualification.",
      "Points will be awarded based on correctness, efficiency, and timely submission.",
      "Teams must adhere to the given time limits; no extensions will be provided."
    ],
    awards: {
      firstPrize: "₹2000/-",
      secondPrize: "₹1000/-"
    },
    entryFee: "₹200 per team",
    team: "Team of 2",
    facultyCoordinator: "Prof. Vibha Bore",
    studentCoordinator: "Madhura Alaspure (7796135791)",
    imageUrl: codeoquick
  },
  {
    title: "Tech Quiz",
    description: "A quiz competition focused on technology.",
    rules: [
      "Team Size: Participants have to compete in teams of 3 members.",
      "Eligibility: Open to all students with an interest in technology.",
      "Registration: Teams must register before the event deadline.",
      "Quiz Format: The quiz will be conducted in multiple rounds (e.g., MCQs, rapid-fire, buzzer round).",
      "Time Limit: Each round will have a fixed time to answer questions.",
      "Marking System: Correct answer: +2 points, Incorrect answer: -1 points.",
      "Elimination: Based on scores, teams may be eliminated after each round.",
      "Fair Play: Use of mobile phones, smartwatches, or external help is strictly prohibited."
    ],
    awards: {
      firstPrize: "₹2000/-",
      secondPrize: "₹1000/-"
    },
    entryFee: "₹300 per team",
    team: "Team of 3",
    facultyCoordinator: "Prof. Amit Dhage",
    studentCoordinator: "Kalash Singh (7066720128)",
    imageUrl: techquiz
  },
  {
    title: "Logo Design",
    description: "A logo design competition.",
    rules: [
      "The logo must reflect the given theme.",
      "Solo participation only.",
      "No offensive content allowed."
    ],
    awards: {
      firstPrize: "₹700/-",
      secondPrize: "₹500/-"
    },
    entryFee: "₹100",
    team: "Individual",
    facultyCoordinator: "Prof. R.A. Jibhakate",
    studentCoordinator: "Sarika Yadav",
    imageUrl: logomaking
  },
  {
    title: "Feeling se Reeling",
    description: "A short video competition.",
    rules: [
      "The time limit is 45 seconds.",
      "Basic editing is allowed.",
      "Submit the reel on or before 28th Feb 2025.",
      "The reel must not victimize or offend any culturregion.",
      "Inappropriate/abusive language is prohibited.",
      "Negative marking for any disobedience of rules."
    ],
    awards: {
      firstPrize: "₹600/-",
      secondPrize: "₹300/-"
    },
    entryFee: "₹100",
    team: "Individual",
    facultyCoordinator: "Prof. Amruta Killol",
    studentCoordinator: "Tanishka Saxena",
    imageUrl: reel
  },
  {
    title: "Line Follower",
    description: "A robot competition to follow a line.",
    rules: [
      "The robot must complete the track in the least possible time.",
      "Maximum 2 touches allowed (each touch adds a 5-second penalty)."
    ],
    awards: {
      firstPrize: "₹1000/-",
      secondPrize: "₹750/-"
    },
    entryFee: "₹150",
    team: "Individual",
    facultyCoordinator: "Dr. Nikhil Wyawahare",
    studentCoordinator: "Saniya Kharalkar",
    imageUrl: linefollower
  },
  {
    title: "Robo War",
    description: "A robot battle competition.",
    rules: [
      "Robots must battle in a predefined arena.",
      "No external assistance allowed.",
      "Points awarded based on damage and control."
    ],
    awards: {
      firstPrize: "₹5000/-",
      secondPrize: "₹2500/-"
    },
    entryFee: "₹500",
    team: "Individual",
    facultyCoordinator: "Dr. Rahul Agrawal",
    studentCoordinator: "Yash Bhorse",
    imageUrl: robowars
  },
  {
    title: "Robo Block",
    description: "A structure building competition using blocks.",
    rules: [
      "Teams must build the tallest stable structure using provided materials.",
      "Structures must stand for at least 10 seconds.",
      "No external adhesives allowed."
    ],
    awards: {
      firstPrize: "₹2000/-",
      secondPrize: "₹1000/-"
    },
    entryFee: "₹100 per student",
    team: "Individual",
    facultyCoordinator: "Prof. Sanket Sanghai",
    studentCoordinator: "Sujal Khobragade",
    imageUrl: roboblocks
  },
  {
    title: "Art Exhibition",
    description: "An exhibition showcasing artistic talents.",
    rules: [
      "Design a compelling prompt based on the given theme.",
      "Create a stunning image and video using the provided AI tool.",
      "Each team consists of two participants working together.",
      "The competition consists of three rounds."
    ],
    awards: {
      firstPrize: "₹1500/-",
      secondPrize: "₹750/-"
    },
    entryFee: "₹150",
    team: "Team of 2",
    facultyCoordinator: "Dr. Girish Bhavekar",
    studentCoordinator: "Umakant S Kadu",
    imageUrl: artexhibition
  },
  {
    title: "Prompt Master",
    description: "A competition focused on generating responses to prompts.",
    rules: [
      "Translation tasks, summarization tasks, and conversation tasks.",
      "All responses must be original and generated by the participating AI model.",
      "Prompts may include trivia questions, creative writing tasks."
    ],
    awards: {
      firstPrize: "₹1000/-",
      secondPrize: "₹700/-"
    },
    entryFee: "₹100",
    team: "Individual",
    facultyCoordinator: "Payal Ghutke",
    studentCoordinator: "Siddhi Mankar",
    imageUrl: promptmaster
  }
];

const EventModal = ({ event, onClose }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="fixed inset-0 flex items-center justify-center pt-30 overflow-y-auto bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
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
          {event.awards && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Awards:</h3>
                  <p className="text-gray-700">1st prize: {event.awards.firstPrize}</p>
                  <p className="text-gray-700">2nd prize: {event.awards.secondPrize}</p>
                </div>
              )}
            <a className='block text-lg font-semibold text-gray-800'>
              <a 
                href="https://linktr.ee/TECHNORIAN" 
                className="text-blue-600 hover:underline font-medium"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Click here to register 1
              </a>
            </a>
            <a className='block text-lg font-semibold text-gray-800'>
              <a 
                href="https://linktr.ee/TECHNORIAN_" 
                className="text-blue-600 hover:underline font-medium"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Click here to register 2
              </a>
            </a>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Faculty Coordinator:</h3>
            <p className="text-gray-700">{event.facultyCoordinator}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">SRC Coordinator:</h3>
            <p className="text-gray-700">{event.srcCoordinator}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Student Coordinator:</h3>
            <p className="text-gray-700">{event.studentCoordinator}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Student Co-Coordinator:</h3>
            <p className="text-gray-700">{event.studentCoCoordinator}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="bg-gray-200 px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

const TechnorionPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <Navbar />
      <section className="container mt-35 w-full max-w-[1300px] mx-auto my-16 p-6">
        <h1 className="text-4xl font-bold text-center uppercase text-zinc-900 relative">
          Technorion Events
          <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
        </h1>
        <p className="text-gray-400 mt-6 text-center mb-10 text-lg">Here are some of our Events</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 flex justify-center cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-96 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-all duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center text-center">
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

export default TechnorionPage;