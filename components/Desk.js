import React from 'react';

const DeskCard = ({ image, name, position, message }) => {
  return (
    <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg shadow-lg p-4 m-6 bg-green-100 w-full max-w-2xl">
      <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-4">
        <div className="mb-4">
          <img className="rounded-full w-20 h-20 md:w-24 md:h-24 object-cover" src={image} alt={`${name}'s picture`} />
        </div>
        <div className="text-center">
          <h2 className="my-2 text-lg md:text-xl font-semibold">{name}</h2>
          <h3 className="m-0 text-base md:text-lg text-gray-600 font-bold uppercase">{position}</h3>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center text-center md:text-left">
        <p className="mt-4 mb-4 m-5 text-xs md:text-sm text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default DeskCard;
