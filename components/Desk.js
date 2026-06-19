import React from 'react';
import Image from 'next/image';

const DeskCard = ({ image, name, position, message }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 border-t-4 border-t-[#64B6AC] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center">
      <div className="relative w-24 h-24 mb-4 flex-shrink-0">
        <Image
          src={image.startsWith('./') ? image.slice(1) : image}
          alt={name}
          fill
          className="rounded-full object-cover ring-4 ring-[#64B6AC]/25"
          sizes="96px"
        />
      </div>
      <h2 className="text-lg font-display font-bold text-gray-800">{name}</h2>
      <span className="mt-1 mb-4 text-xs font-inter font-semibold text-[#64B6AC] uppercase tracking-widest">
        {position}
      </span>
      <div className="w-8 h-0.5 bg-[#64B6AC]/30 rounded-full mb-4" />
      <p className="text-sm text-gray-500 font-inter leading-relaxed">
        &ldquo;{message}&rdquo;
      </p>
    </div>
  );
};

export default DeskCard;
