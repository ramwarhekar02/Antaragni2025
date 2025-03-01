import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import { useLocation } from 'react-router-dom'; 
import streetdance from "../assets/Images/Flash/streetdance.JPG";
import themedance from "../assets/Images/Flash/themedance.JPG";
import fashionshow from "../assets/Images/Flash/fashionshow.JPG";
import singing from "../assets/Images/Flash/singing.JPG";
import wallpainting from "../assets/Images/AntaragniPage/wallpainting.jpg";
import trashion from "../assets/Images/AntaragniPage/trashion.jpg";
import masterchef from "../assets/Images/AntaragniPage/masterchef.jpg";
import boxcricket from "../assets/Images/Flash/boxcricket.JPG";
import treasurehunt from "../assets/Images/AntaragniPage/treasurehunt.jpg";
import facepainting from "../assets/Images/AntaragniPage/facepainting.jpg";
import openmic from "../assets/Images/Flash/openmic.JPG";
import studentparliament from "../assets/Images/AntaragniPage/studentparliament.jpg";
import _DSC6856 from "../assets/Images/Flash/_DSC6856.JPG";
import squidgame from "../assets/Images/AntaragniPage/squidgame.jpg";
import zorbinggame from "../assets/Images/AntaragniPage/zorbinggame.jpeg";
import rangolimaking from "../assets/Images/AntaragniPage/rangolimaking.jpg";
import talenthunt from "../assets/Images/AntaragniPage/talenthunt.jpg";
import postermaking from "../assets/Images/AntaragniPage/postermaking.jpg";
import DSC_2733 from "../assets/Images/Flash/DSC_2733.JPG";

const events = [
  {
    title: "Street Dance",
    description: "A vibrant street dance competition open to students of any college.",
    rules: [
      "Songs should not exceed over 3 minutes.",
      "Energy and stage presence are essential.",
      "The selection of songs, costume, and dance choreography should maintain a level of decorum and avoid explicit content."
    ],
    entryFee: "Rs. 200/- per person, Rs. 150/- for duet (per person), Rs. 150/- for group (per person)",
    prizes: [
      "Prize for Solo - Rs. 500",
      "Prize for Duet - Rs. 1000",
      "Prize for Group - Rs. 1500"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Prof. Suraj Dhude (EE)",
      "Prof. Shweta Pethe (MBA)"
    ],
    srcCoordinators: ["Siddhi Mankar (4th CSE - 9028902779)"],
    imageUrl: streetdance // Updated image URL
  },
  {
    title: "Theme Dance/Folk Dance",
    description: "A dance competition featuring departmental groups.",
    rules: [
      "Maximum time limit is 6 minutes.",
      "Departmental group dance entries are accepted.",
      "Only 1 group per department is required.",
      "Themes will be allotted to each department through a chit picking system.",
      "Maximum 15-17 members in a group.",
      "Props can be used."
    ],
    entryFee: "Rs. 100/- per person",
    prizes: [
      "Theme Dance: First prize - Rs. 2500, Second prize - Rs. 1500, Judge - Rs. 2000",
      "Folk Dance: First prize - Rs. 1500, Second prize - Rs. 1000, Judge - Rs. 2000"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Prof. Apeksha Sakhare (CSE)",
      "Prof. Madhuri Sahu (AI)",
      "Prof. Swati Samkuwar (IT)",
      "Prof. Saundarya Raut (AI)"
    ],
    srcCoordinators: ["Devanshi Baraskar (6th ETC - 9977943392)"],
    imageUrl: themedance // Updated image URL
  },
  {
    title: "Fashion Show",
    description: "A team event showcasing fashion and creativity.",
    rules: [
      "It is a team event. A team will have 60 members.",
      "Any form of obscenity will lead to disqualification.",
      "Revealing dresses are prohibited. Contestants will be judged on attire, theme, walking stance, attitude, and tagline.",
      "Decision of the judges will be final and binding.",
      "Purchased, professionally made, or rented costumes are permitted."
    ],
    entryFee: "Rs. 200 (For Audition)",
    prizes: [],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Dr. A. Nagdive (IT) - (AP- 9403719799)",
      "Prof. B. Thakran (FY) - (AP- 9823014947)",
      "Dr. Aditya Turankar (CSE)",
      "Prof. Abhay Yeole (AI)",
      "Prof. Ankita Bhandarkar (MBA)"
    ],
    srcCoordinators: [
      "Aashi Gaikwad (4TH CE-9322096087)",
      "Tanish Tawri (4th –8080908567)",
      "Tanishka Saxena"
    ],
    imageUrl: fashionshow // Updated image URL
  },
  {
    title: "Singing",
    description: "A singing competition for solo, duet, and group performances.",
    rules: [
      "Time limit for solo singing is 3.5 minutes and for duet 4 minutes.",
      "Only Karaoke is allowed.",
      "Languages allowed: Hindi, Marathi, and English.",
      "Decision of judges will be final."
    ],
    entryFee: "Solo: Rs. 50 (For selection round), Rs. 100 (After selection); Duet: Rs. 50 (For selection round), Rs. 150 (After selection); Group: Rs. 50 (For selection round), Rs. 200 (After selection)",
    prizes: [
      "Solo: Trophies",
      "Duet: Trophies"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Dr. Sampada Wazalwar (IT)",
      "Dr. Manish Nair (Hum.)"
    ],
    srcCoordinators: ["Ayush Deshmukh (AIML 4th - 8208628937)"],
    imageUrl: singing // Updated image URL
  },
  {
    title: "Wall Painting",
    description: "A creative wall painting competition.",
    rules: [
      "Maximum 4 members are allowed in a group.",
      "6 basic colors will be provided to participants.",
      "Participants will have to bring their own brushes according to their requirement.",
      "Wall size will be approximately 5*5 ft.",
      "If participants want to use sprays, they can bring their own.",
      "Participants need to provide rough sketches at the time of registration."
    ],
    entryFee: "Rs. 600 (Group of 4)",
    prizes: [
      "First Prize - Rs. 3000",
      "Second Prize - Rs. 2000"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Dr. Sunil Nangrani (EE)",
      "Dr. Anandbabu Kotta (ME)"
    ],
    srcCoordinators: ["Ved Deshmukh (4th CE– 8888561230)"],
    imageUrl: wallpainting // Updated image URL
  },
  {
    title: "Trashion",
    description: "A project competition based on the theme given by organizers.",
    rules: [
      "The competition is for groups of two participants only.",
      "Participants will have to create a functional project based on the theme given by organizers at the time of the event.",
      "Required material for the project will be provided by organizers.",
      "After building the project in the given time limit, it will be evaluated as per the criteria set by organizers."
    ],
    entryFee: "Solo - Rs. 200",
    prizes: [
      "First Prize - Rs. 1000",
      "Second Prize - Rs. 750"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Prof. A. S. Chaudhary (ME)",
      "Dr. Nalini Vaidya (FY)"
    ],
    srcCoordinators: ["Umakant Kadu (4th EE-7038371279)"],
    imageUrl: trashion // Updated image URL
  },
  {
    title: "Global Food Street (MasterChef)",
    description: "A cooking competition where students showcase their culinary skills.",
    rules: [
      "Students have to bring their own ingredients.",
      "30 minutes time will be provided for preparing and presentation of the dish.",
      "All participants should bring their own kitchen equipment such as knife, spoons, plates as required.",
      "Use of flame, induction, and oven is not allowed.",
      "Students are allowed to be in a group of maximum 2 people."
    ],
    entryFee: "Rs. 200/- (Group of 2)",
    prizes: [
      "Winner - Rs. 1000",
      "Runner up - Rs. 700"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Dr. P. Jumde (ETC)",
      "Dr. P. S. Vaidya (EE)"
    ],
    srcCoordinators: ["Shrusti Kanphade (4th ME- 7888098244)"],
    imageUrl: masterchef // Updated image URL
  },
  {
    title: "Box Cricket (M/W)",
    description: "A fun box cricket tournament.",
    rules: [
      "Each team consists of 6 players",
      "Limited over per match(4 over)",
      "Under arm bowling are allowed",
      "No LBW",
    ],
    entryFee: "Rs. 600/-",
    prizes: [
      "First Prize - Rs. 4000",
      "Second Prize - Rs. 2000"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: ["Prof. Suraj Kodarlikar (MBA)"],
    srcCoordinators: ["Abhijeet Gour (4th CSE– 9309324632)"],
    imageUrl: boxcricket // Updated image URL
  },
  {
    title: "Treasure Hunt",
    description: "An exciting treasure hunt competition.",
    rules: [
      "Time Limit: The hunt may have a time limit, with the first team to find the treasure declared the winner.",
      "No Cheating: Teams cannot tamper with or hide clues for other players.",
      "Using mobile phones or outside help (if not allowed) leads to disqualification.",
      "Fair Play & Safety: No pushing, running into restricted areas, or harming the environment.",
      "Respect other players and follow all safety guidelines."
    ],
    entryFee: "Rs. 400/- (Group of 4)",
    prizes: [
      "First - Rs. 2000",
      "Second - Rs. 1500"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: ["Prof. Vaibhav Aundhakar (DIC)"],
    srcCoordinators: ["Premjeet Sharma (4th CSE – 7888660597)"],
    imageUrl: treasurehunt // Updated image URL
  },
  {
    title: "Face Painting",
    description: "A creative face painting competition with a Halloween theme.",
    rules: [
      "Solo (painter)",
      "Theme: Halloween",
      "Time limit: 20 minutes",
      "Participants must bring their own paints and brushes."
    ],
    entryFee: "Rs. 100/-",
    prizes: [
      "First Prize - Rs. 1500",
      "Runner Up - Rs. 1000"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Prof. Ashish Soni (CSE) (AP- 7974630940)",
      "Priti Gade (ETRX) (AP- 9512244319)"
    ],
    srcCoordinators: ["Rudrani Tandulkar (AI) (4th- 7620184588)"],
    imageUrl: facepainting // Updated image URL
  },
  {
    title: "Open Mic",
    description: "A platform for students to showcase their talents.",
    rules: [
      "Each participant is allotted a specific time limit for their performance (e.g., 5 minutes).",
      "Specify the types of performances allowed (e.g., music, poetry, comedy).",
      "Performances should be respectful and considerate of the audience.",
      "Participants must attend a designated sound check to ensure proper audio setup."
    ],
    entryFee: "Rs. 100/-",
    prizes: [
      "First Prize - Rs. 1000",
      "Second Prize - Rs. 700"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: ["Prof. Ritu Pawar (IT) - (AP- 8446457419)"],
    srcCoordinators: ["Vedant Wahane (DIC) - (4th- 8788136828)"],
    imageUrl: openmic // Updated image URL
  },
  {
    title: "Student Parliament",
    description: "A debate competition for students.",
    rules: [
      "Topic will be provided on the day of competition or one day before it.",
      "Time for debate will be 8-10 minutes.",
      "You have to use English or Hindi language according to your wish.",
      "Use of foul language and disrespectful behavior will not be entertained."
    ],
    entryFee: "Rs. 100/-",
    prizes: [
      "First Prize - Rs. 1000",
      "Second Prize - Rs. 700"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Prof. L. Raut (ME) (AP- 9096819976)",
      "Prof. Minakshi Ramteke (AI) (AP- 9764889200)"
    ],
    srcCoordinators: ["Poshika Raut (CIV) (4th- 9623593104)"],
    imageUrl: studentparliament // Updated image URL
  },
  {
    title: "Battle of Tradition",
    description: "A competition showcasing traditional attire and knowledge.",
    rules: [
      "Participants must wear a proper ethnic outfit that aligns with the traditional theme.",
      "Only the selected participants will proceed to the second round, where they will be asked questions."
    ],
    entryFee: "Rs. 200/- per person",
    prizes: [
      "Prize for first - Rs. 1000",
      "Prize for second - Rs. 750"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Dr. Smita Pidurkar (FY)",
      "Prof. Ashwini Kukade (AI)"
    ],
    srcCoordinators: ["Saniya Khardkar (4th ETRX – 9527495905)"],
    imageUrl: _DSC6856 // Updated image URL
  },
  {
    title: "Squid Game",
    description: "A fun competition based on the popular game.",
    rules: [
      "Should follow the rules of games.",
      "Coordinators' decision will be the last decision."
    ],
    entryFee: "Rs. 150/- per person",
    prizes: [
      "Prize for first - Rs. 1000",
      "Prize for second - Rs. 700"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: ["Dr. Priyadaisini Keshtty (MBA)"],
    srcCoordinators: ["Anika Payasi (4th CSE- 7498246461)"],
    imageUrl: squidgame // Updated image URL
  },
  {
    title: "Zorbing Game + Gaming Zone",
    description: "A fun-filled gaming event with zorbing.",
    rules: [
      "Play the games fairly."
    ],
    entryFee: "Rs. 100/- per person",
    prizes: [
      "Prize for first - Rs. 1000",
      "Prize for second - Rs. 700"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Dr. Amit Sahu (MBA)",
      "Prof. Anchal Maine (MBA)"
    ],
    srcCoordinators: ["Vishal Bhoyar (4th ETRX – 7030271731)"],
    imageUrl: zorbinggame // Updated image URL
  },
  ,
  {
    title: "Rangoli Competition",
    description: "A creative rangoli competition with a social message theme.",
    rules: [
      "Everyone will have a time limit of 30 minutes.",
      "Theme for rangoli is 'Social Message'.",
      "Everyone has to bring their own rangoli materials."
    ],
    entryFee: "Rs. 100/- per person",
    prizes: [
      "Prize for first - Rs. 1000",
      "Prize for second - Rs. 500"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: ["Dr. Vedshree Rajderkar (EE)"],
    srcCoordinators: ["Nandini Kakden (4th ME – 8010696289)"],
    imageUrl: rangolimaking // No image URL provided
  },  
  {
    title: "Talent Hunt",
    description: "A talent showcase competition for solo and group performances.",
    rules: [
      "Performance length should be 3-4 minutes.",
      "Bring your own props, if required."
    ],
    entryFee: "Rs. 100 per person",
    prizes: [
      "Prize for first - Trophy",
      "Prize for second - Trophy"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators : [
      "Dr. Vedshree Rajderkar (ETC)",
      "Dr. S. K. Tadse (ETC)",
      "Dr. Sheetal Jaikar (MBA)"
    ],
    srcCoordinators: ["Aditi Amre (4th EE – 9975994028)"],
    imageUrl: talenthunt // No image URL provided
  },
  {
    title: "Poster Making",
    description: "A creative competition where participants design original posters based on a given theme.",
    rules: [
      "Theme: Posters must align with the given theme. Off-topic entries will be disqualified.",
      "Format: Participants can create digital or handmade posters.",
      "Size: A3 or A4 size for handmade posters; 1080x1080 px (or specified resolution) for digital entries.",
      "Originality: The design must be original. Plagiarism or AI-generated content is not allowed.",
      "Content: Avoid offensive, inappropriate, or copyrighted material."
    ],
    entryFee: "Rs. 100 per person", // Assuming a fee of 100 as it was not specified
    prizes: [
      "Prize for first - TBD",
      "Prize for second - TBD"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Dr. M. Wanjari (ETC)",
      "Prof. Rutuja Hiware (EE)"
    ],
    srcCoordinators: ["Kalash Singh (4th DIC – 7066720128)"],
    imageUrl: postermaking // No image URL provided
  },
  {
    title: "Flash Mob",
    description: "An engaging flash mob performance that surprises and interacts with the audience.",
    rules: [
      "The performance must be dynamic, surprising, and interact with the audience while following the flashmob concept.",
      "The act must be completed within the given time frame without excessive delays or disruptions.",
      "No offensive moves, lyrics, or actions; maintain a positive and respectful atmosphere."
    ],

    entryFee: "Rs. 100 per person", 
    prizes: [
      "Prize for first - TBD",
      "Prize for second - TBD"
    ],
    registrationLink: "Click here to register",
    facultyCoordinators: [
      "Dr. Sagar Singh Rathode (ETC)",
      "Prof. Pallavi Badge (FY)"
    ],
    srcCoordinators: [
      "Parikshit Borkute (ETC - 9766941737)",
      "Devanshi Baraskar (ETC - 9977943392)",
      "Ved Deshumkh (CE - 8888561230)"
    ],
    imageUrl: DSC_2733 
  }
]

const EventModal = ({ event, onClose }) => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50">
      <div className="bg-white/90 rounded-2xl shadow-2xl max-w-lg w-full p-6 relative transform scale-95 transition-all duration-300 ease-in-out">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition" onClick={onClose}>
          <RxCross2 size={24} />
        </button>

        {/* Title with Gradient Underline */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          {event.title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></div>

        {/* Event Details */}
        <div className="space-y-4 mt-6">
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
            <div
              // href={event.registrationLink}
              className="text-blue-600 hover:text-blue-800 font-medium transition"
            >
              Register to your Nearest Counter
            </div>
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

        {/* Close Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event, setSelectedEvent }) => {
  return (
    <div
      className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
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
  );
};

const AntaragniPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
  <Navbar />
  <section className="container mt-35 w-full max-w-[1300px] mx-auto my-16 p-6">
    {/* Title */}
    <h1 className="text-4xl font-bold text-center uppercase text-zinc-900 relative">
      Antaragni Events
      <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
    </h1>
    <p className="text-gray-400 mt-6 text-center mb-10 text-lg">
      Here are some of our Events
    </p>

    {/* Events Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center">
      {events.map((event, index) => (
        <div key={index} className="flex justify-center items-center">
          <EventCard key={index} event={event} setSelectedEvent={setSelectedEvent} />
        </div>
      ))}
    </div>

    {/* Modal */}
    {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
  </section>
  <Footer />
</>
  );
};

export default AntaragniPage;
