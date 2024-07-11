import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="bg-[#d1eeda] p-2 relative">
            <div className="flex flex-col md:flex-row justify-between items-center px-5">
                <div className="flex flex-col md:flex-row items-center text-lg font-bold space-x-0 md:space-x-4">
                    <div className="flex items-center space-x-1 mb-1 md:mb-0">
                        <FaPhoneAlt className="text-black" />
                        <p className="m-0">+91 7054858403 |</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaEnvelope className="text-black" />
                        <p className="m-0">vncpublicgajpur@gmail.com</p>
                    </div>
                </div>
                <div className="flex space-x-3 md:space-x-5 mt-2 md:mt-0">
                    <a href='https://wa.me/917054858403' target='_blank' rel='noopener noreferrer'>
                        <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 text-black" />
                    </a>
                    <a href='mailto:vncpublicgajpur@gmail.com' target='_blank'>
                        <FaEnvelope className="w-6 h-6 md:w-7 md:h-7 text-black" />
                    </a>
                    <a href='https://www.facebook.com/vncpublicschool/' target='_blank' rel='noopener noreferrer'>
                        <FaFacebook className="w-6 h-6 md:w-7 md:h-7 text-black" />
                    </a>
                    <a href='https://www.instagram.com/vncpublicschool/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram className="w-6 h-6 md:w-7 md:h-7 text-black" />
                    </a>
                    <a href='https://www.linkedin.com/company/vnc-public-school/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className="w-6 h-6 md:w-7 md:h-7 text-black" />
                    </a>
                </div>
            </div>
            <hr className="border-t-2 border-[#64B6AC] my-2" />
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
                <a href="https://www.vncpublicschool.com" rel="noopener noreferrer">
                    <img className="w-20 h-24 md:w-28 md:h-32 mx-auto md:mx-0" src="/logo.png" alt="School Logo" />
                </a>
                <div className="ml-0 md:ml-5 mt-2 md:mt-0">
                    <h1 className="text-3xl md:text-6xl font-cursive capitalize mb-2">VNC Public School</h1>
                    <p className="text-lg md:text-xl font-cursive capitalize ml-0 md:ml-11">Empowering young minds for a brighter future</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
