import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const offices = [
  {
    title: "Principal's Office",
    name: 'Ashish Singh',
    role: 'Principal',
    phone: '+91 70548 58403',
    phoneRaw: '+917054858403',
    whatsapp: '917054858403',
  },
  {
    title: 'Fee & Admissions',
    name: 'Administrative Office',
    role: 'Fee Counter',
    phone: '+91 90448 64413',
    phoneRaw: '+919044864413',
    whatsapp: '919044864413',
  },
];

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">

      {/* Address card */}
      <div className="bg-[#64B6AC] rounded-2xl p-6 md:p-8 mb-8 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="flex-1 space-y-3 w-full">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-white/80 mt-1 flex-shrink-0 text-lg" />
              <div>
                <p className="font-inter font-semibold text-white">Gajpur Bazaar Road, Kauriram</p>
                <p className="font-inter text-white/80 text-sm">Gorakhpur, Uttar Pradesh - 273413</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-white/80 flex-shrink-0" />
              <a href="tel:+917054858403" className="font-inter text-white hover:text-white/80 transition-colors font-medium">
                +91 70548 58403
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white/80 flex-shrink-0" />
              <a href="mailto:vncpublicgajpur@gmail.com" className="font-inter text-white hover:text-white/80 transition-colors text-sm font-medium break-all">
                vncpublicgajpur@gmail.com
              </a>
            </div>
          </div>
          <a
            href="https://wa.me/917054858403"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[#64B6AC] font-inter font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:bg-white/90 self-start flex-shrink-0"
          >
            <FaWhatsapp className="text-base" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Office cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {offices.map((office) => (
          <div
            key={office.title}
            className="bg-white rounded-2xl border border-gray-200 border-t-4 border-t-[#64B6AC] shadow-md hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="mb-4">
              <h3 className="font-display font-bold text-gray-800 text-lg">{office.title}</h3>
              <p className="font-inter text-xs text-[#64B6AC] font-semibold uppercase tracking-widest mt-0.5">{office.role}</p>
            </div>
            <p className="font-inter text-sm text-gray-500 mb-5">{office.name}</p>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${office.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#64B6AC] hover:bg-[#4a9990] text-white py-2.5 px-4 rounded-xl font-inter font-semibold text-sm transition-colors duration-200 shadow-sm"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
              <a
                href={`tel:${office.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-gray-700 text-white py-2.5 px-4 rounded-xl font-inter font-semibold text-sm transition-colors duration-200 shadow-sm"
              >
                <FaPhoneAlt />
                {office.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
