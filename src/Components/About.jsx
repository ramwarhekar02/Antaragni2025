import React from 'react';
import video1 from '../assets/Images/Logos/video1.mp4';

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full pt-20 rounded-3xl">
      <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
        About Us
        <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
      </h1>

      <div className="w-full flex flex-col items-center mx-auto max-w-[1300px] py-16 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">
          <div className="lg:w-1/2 text-lg text-justify text-black leading-relaxed">
            <p>
              Established in 1996, G H Raisoni College of Engineering
              [GHRCE] is a premier Autonomous institution in central India
              imparting a holistic technical education to students residing
              not only in India but also internationally. The institution
              has always been ranked amongst top institutions by NIRF,
              MHRD, Government of India.
            </p>
            <p className="mt-4">
              GHRCE achieved another milestone in NIRF 2024 Ranking by
              retaining the band of 151-200 in the Engineering Category and
              upgrading its Ranking in the Innovation Category to the band
              of 11-50. The institution has also been ranked prominently by
              India Today MDRA Survey and ARIIA.
            </p>
            <div className="mt-6">
              <p className="text-md mt-1">
                1st Rank in India at ARIIA-2021 among private/self-financed
                institutions.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full h-auto rounded-xl overflow-hidden shadow-lg">
            <video className="w-full h-auto rounded-xl" autoPlay loop muted>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1300px] mx-auto border-t-[1px] border-zinc-400 my-12"></div>
    </div>
  );
};

export default About;