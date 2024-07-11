import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import VisitCounter from '../components/VisitCounter';

const Footer = () => {
  return (
    <footer className="bg-[#64B6AC] text-center p-2 w-full relative bottom-0">
      <div className="flex flex-col md:flex-row justify-between items-center flex-wrap max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:mr-36 mt-4 md:mt-10">
          <img src="/logo.png" alt="School Logo" className="w-36 h-40 md:mr-2.5 mb-4 md:mb-0" />
          <p className="text-3xl md:text-5xl font-cursive capitalize">VNC Public School</p>
        </div>
        <div className="text-left mb-4 md:mb-0 md:ml-36">
          <p className="my-2 text-base md:text-lg">Address: Gajpur Bazaar Rd, Gajpur, Gorakhpur,</p>
          <p className="my-2 text-base md:text-lg">Uttar Pradesh, 273413, India.</p>
          <p className="my-2 text-base md:text-lg">Email: vncpublicgajpur@gmail.com</p>
          <p className="my-2 text-base md:text-lg">Phone: +917054858403</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://wa.me/917054858403" target='_blank' className="text-black text-2xl"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/vncpublicschool/" target='_blank' className="text-black text-2xl"><FaInstagram /></a>
            <a href="https://www.facebook.com/vncpublicschool/" target='_blank' className="text-black text-2xl"><FaFacebook /></a>
            <a href="https://www.linkedin.com/company/vnc-public-school/" target='_blank' className="text-black text-2xl"><FaLinkedin /></a>
          </div>
        </div>
        <div className="mt-4 md:mt-0 md:relative md:bottom-0 md:right-20 text-base md:text-lg text-black">
          <VisitCounter />
        </div>
      </div>
      <div className="mt-4 md:mt-2 text-sm md:text-lg">
        <p>Copyright © 2024 VNC Public School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
