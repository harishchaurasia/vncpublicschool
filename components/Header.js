import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            {/* Top contact bar — desktop only */}
            <div className="hidden md:flex justify-between items-center bg-gray-900 px-6 py-2 text-sm text-gray-300">
                <div className="flex items-center gap-6">
                    <a
                        href="tel:+917054858403"
                        className="flex items-center gap-2 hover:text-white transition-colors duration-150"
                    >
                        <FaPhoneAlt className="text-[#64B6AC] text-xs" />
                        <span>+91 70548 58403</span>
                    </a>
                    <a
                        href="mailto:vncpublicgajpur@gmail.com"
                        className="flex items-center gap-2 hover:text-white transition-colors duration-150"
                    >
                        <FaEnvelope className="text-[#64B6AC] text-xs" />
                        <span>vncpublicgajpur@gmail.com</span>
                    </a>
                </div>
                <div className="flex items-center gap-4 text-base">
                    <a href="https://wa.me/917054858403" target="_blank" rel="noopener noreferrer"
                       className="hover:text-[#25D366] transition-colors duration-150" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:vncpublicgajpur@gmail.com"
                       className="hover:text-[#64B6AC] transition-colors duration-150" aria-label="Email">
                        <FaEnvelope />
                    </a>
                    <a href="https://www.facebook.com/vncpublicschool/" target="_blank" rel="noopener noreferrer"
                       className="hover:text-[#1877F2] transition-colors duration-150" aria-label="Facebook">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/vncpublicschool/" target="_blank" rel="noopener noreferrer"
                       className="hover:text-[#E4405F] transition-colors duration-150" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/vnc-public-school/" target="_blank" rel="noopener noreferrer"
                       className="hover:text-[#0A66C2] transition-colors duration-150" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>

            {/* Brand bar */}
            <div className="bg-white border-b border-gray-100 py-3 px-4 md:px-8">
                <div className="flex flex-row items-center justify-center gap-4 max-w-screen-xl mx-auto">
                    <a href="/" aria-label="VNC Public School home">
                        <Image
                            src="/logo.png"
                            alt="VNC Public School Logo"
                            width={80}
                            height={96}
                            className="w-16 h-20 md:w-20 md:h-24 object-contain flex-shrink-0"
                            priority
                        />
                    </a>
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-cursive capitalize leading-tight text-gray-900">
                            VNC Public School
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base font-inter text-gray-500 mt-0.5">
                            Empowering young minds for a brighter future
                        </p>
                    </div>
                </div>
            </div>

            <div className="h-1 bg-gradient-to-r from-[#64B6AC] via-[#F59E0B] to-[#EA580C]" />
        </header>
    );
};

export default Header;
