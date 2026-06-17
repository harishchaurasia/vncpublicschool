import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactCard = ({ officeName, phone, whatsapp }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 text-center flex-1 min-w-[220px] max-w-[280px]">
      <h3 className="font-display font-bold text-gray-800 text-lg mb-5">{officeName}</h3>
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#64B6AC] hover:bg-[#4a9990] text-white py-2.5 px-4 rounded-xl mb-3 font-inter font-semibold text-sm transition-colors duration-200"
      >
        <FaWhatsapp className="text-base" />
        WhatsApp
      </a>
      <a
        href={`tel:${phone}`}
        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white py-2.5 px-4 rounded-xl font-inter font-semibold text-sm transition-colors duration-200"
      >
        <FaPhoneAlt className="text-base" />
        {phone}
      </a>
    </div>
  );
};

export default ContactCard;
