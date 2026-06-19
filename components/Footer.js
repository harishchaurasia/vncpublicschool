import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand column */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="VNC Public School" width={56} height={64} className="object-contain" />
            <span className="font-cursive text-white text-xl leading-tight">VNC Public School</span>
          </div>
          <p className="text-sm text-gray-400 font-inter leading-relaxed text-center md:text-left max-w-xs">
            Empowering young minds for a brighter future. Quality education for Nursery to Class 12.
          </p>
          <div className="flex gap-4 mt-5 text-xl">
            <a href="https://wa.me/917054858403" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#25D366] transition-colors duration-150" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.instagram.com/vncpublicschool/" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#E4405F] transition-colors duration-150" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/vncpublicschool/" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#1877F2] transition-colors duration-150" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/vnc-public-school/" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#0A66C2] transition-colors duration-150" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact column */}
        <div>
          <h3 className="text-white font-display font-bold mb-4 uppercase tracking-widest text-sm">Contact Us</h3>
          <ul className="space-y-3 text-sm font-inter">
            <li className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="text-[#64B6AC] mt-0.5 flex-shrink-0" />
              <span>Gajpur Bazaar Rd, Gajpur,<br />Gorakhpur, UP - 273413</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FaPhone className="text-[#64B6AC] flex-shrink-0" />
              <a href="tel:+917054858403" className="hover:text-white transition-colors">+91 70548 58403</a>
            </li>
            <li className="flex items-center gap-2.5">
              <FaEnvelope className="text-[#64B6AC] flex-shrink-0" />
              <a href="mailto:vncpublicgajpur@gmail.com" className="hover:text-white transition-colors break-all">
                vncpublicgajpur@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick links column */}
        <div>
          <h3 className="text-white font-display font-bold mb-4 uppercase tracking-widest text-sm">Quick Links</h3>
          <ul className="space-y-2 text-sm font-inter">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions 2025-26</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-6 py-4 text-center text-xs text-gray-500 font-inter">
        <p>© 2025 VNC Public School. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
