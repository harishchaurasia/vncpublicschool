import React from 'react';

const DeskCard = ({ image, name, position, message }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 border-t-4 border-t-[#64B6AC] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center text-center">
      <img
        className="rounded-full w-24 h-24 object-cover ring-4 ring-[#64B6AC]/25 mb-4 flex-shrink-0"
        src={image}
        alt={name}
      />
      <h2 className="text-lg font-display font-bold text-gray-800">{name}</h2>
      <span className="mt-1 mb-4 text-xs font-inter font-semibold text-[#64B6AC] uppercase tracking-widest">
        {position}
      </span>
      <div className="w-8 h-0.5 bg-[#64B6AC]/30 rounded-full mb-4" />
      <p className="text-sm text-gray-500 font-inter leading-relaxed line-clamp-5">
        &ldquo;{message}&rdquo;
      </p>
    </div>
  );
};

export default DeskCard;
