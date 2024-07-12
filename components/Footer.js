import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import VisitCounter from '../components/VisitCounter';
import ScrollToTopButton from '../components/ScrollToTop';

const Footer = () => {
  return (
    <footer className="bg-[#64B6AC] p-5 flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-between items-center flex-wrap w-full max-w-screen-xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-10">
          <img src="/logo.png" alt="School Logo" className="w-24 h-28 md:w-36 md:h-40 md:mr-4 mb-4 md:mb-0" />
          <p className="text-2xl md:text-4xl font-cursive capitalize text-center md:text-left">VNC Public School</p>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="my-2 text-base md:text-lg">Address: Gajpur Bazaar Rd, Gajpur, Gorakhpur,</p>
          <p className="my-2 text-base md:text-lg">Uttar Pradesh, 273413, India.</p>
          <p className="my-2 text-base md:text-lg">Email: vncpublicgajpur@gmail.com</p>
          <p className="my-2 text-base md:text-lg">Phone: +917054858403</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://wa.me/917054858403" target='_blank' className="text-black text-2xl"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/vncpublicschool/" target='_blank' className="text-black text-2xl"><FaInstagram /></a>
            <a href="https://www.facebook.com/vncpublicschool/" target='_blank' className="text-black text-2xl"><FaFacebook /></a>
            <a href="https://www.linkedin.com/company/vnc-public-school/" target='_blank' className="text-black text-2xl"><FaLinkedin /></a>
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-base md:text-lg text-black">
          <VisitCounter />
        </div>
      </div>
      <div className="w-full mt-4 md:mt-8 text-sm md:text-base text-center">
        <p>Copyright © 2024 VNC Public School. All Rights Reserved.</p>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
