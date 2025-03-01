import React , { useEffect } from "react";
import Footer from "../Components/Footer.jsx";
import { useLocation } from 'react-router-dom'; 

const Contact = () => {

    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
  return (
    <>
    <section id="contact" className="contact py-10">
      <div className="container w-full max-w-[1200px] mt-20 mx-auto px-4">
        <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-center uppercase mb-6 text-zinc-900 relative">
            Contacts
            <span className="block w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FF5733] mx-auto mt-2 rounded-full"></span>
            </h1>
        </div>

        <div className="grid md:grid-cols-2  mt-6 gap-8">
          <div className="space-y-6">
            <div className="p-4 rounded-lg shadow-lg ">
              <i className="bi bi-info-circle-fill text-blue-500"></i>
              <h4 className="text-lg font-semibold">Antaragni</h4>
              <p className="text-black">
                Parikshit Borkute:  +91 9766941737
              </p>
            </div>

            <div className="p-4 shadow-lg  rounded-lg">
              <i className="bi bi-info-circle-fill text-blue-500"></i>
              <h4 className="text-lg font-semibold">Gathering Secretary</h4>
              <p className="text-black">
                Vaidehi Chobitkar
              </p>
            </div>

            <div className="p-4 shadow-lg rounded-lg">
              <i className="bi bi-info-circle-fill text-blue-500"></i>
              <h4 className="text-lg font-semibold">Technorion</h4>
              <p className="text-black">
                Janvi Anwaney
              </p>
            </div>

            <div className=" p-4 shadow-lg  shadow-lgrounded-lg">
              <i className="bi bi-geo-alt-fill text-red-500"></i>
              <h4 className="text-lg font-semibold">Location</h4>
              <p className="text-black">CRPF Gate, No.3, Hingna Rd, Digdoh Hills, Nagpur, Maharashtra 440016</p>
            </div>

            <div className=" p-4 shadow-lg  rounded-lg">
              <i className="bi bi-envelope-fill text-green-500"></i>
              <h4 className="text-lg font-semibold">Email</h4>
              <p className="text-black">
                <a href="mailto:src.ghrce@raisoni.net" className="text-blue-500">src.ghrce@raisoni.net</a>
              </p>
            </div>
          </div>

          <div className="flex justify-center  my-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.1835199044062!2d79.0034903!3d21.105248399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4954f412ca411%3A0x4fd4cb2d05b49c7d!2sG.%20H.%20Raisoni%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708937949910!5m2!1sen!2sin"
              width="100%"
              height="520"
              className="border-0 rounded-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
