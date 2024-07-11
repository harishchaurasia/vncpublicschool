import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactCard = ({ officeName, phone, whatsapp }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-6 text-center m-4 shadow-md bg-green-100 flex-1 min-w-[200px] max-w-[280px]">
            <h3 className="text-lg md:text-xl font-bold mb-4">{officeName}</h3>
            <div className="mb-4">
                <a href={`https://wa.me/${whatsapp}`} className="flex items-center justify-center bg-teal-500 text-white py-2 px-4 rounded-lg mb-2">
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                </a>
            </div>
            <div>
                <a href={`tel:${phone}`} className="flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-lg">
                    <FaPhoneAlt className="mr-2" />
                    {phone}
                </a>
            </div>
        </div>
    );
};

export default ContactCard;
