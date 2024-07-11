import React from 'react';

const MissionCard = ({ imageSrc, heading, text }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-6 text-center m-4 shadow-md bg-green-100 flex-1 min-w-[200px] max-w-[280px]">
            <img className="w-24 h-auto mx-auto mb-4" src={imageSrc} alt={heading} />
            <h3 className="text-lg md:text-xl font-semibold mb-2">{heading}</h3>
            <p className="text-sm md:text-base">{text}</p>
        </div>
    );
};

export default MissionCard;
